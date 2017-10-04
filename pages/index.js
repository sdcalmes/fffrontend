import ThemeProvider from 'react-toolbox/lib/ThemeProvider'
import theme from '../static/theme'
import MyLayout from '../components/Layout.js'
import Link from 'next/link'
import firebase from 'firebase'
import 'isomorphic-fetch'
import clientCredentials from '../credentials/client'
import Button from 'react-toolbox/lib/button/Button'
import Chip from 'react-toolbox/lib/chip/Chip'
import Head from 'next/head'
import AppBar from 'react-toolbox/lib/app_bar/AppBar'
import Checkbox from 'react-toolbox/lib/checkbox/Checkbox'
import Layout from 'react-toolbox/lib/layout/Layout'
import NavDrawer from 'react-toolbox/lib/layout/NavDrawer'
import Panel from 'react-toolbox/lib/layout/Panel'
import Sidebar from 'react-toolbox/lib/layout/Sidebar'
import Headroom from 'react-headroom/dist/index'
import React, { Component } from 'react'

const postStyle = {
    marginLeft: 250,
    marginTop: 5
}

const linkStyle = {
    color: "#E0E0E0"
}

const PostLink = (props) => (
    <li style={postStyle}>
        <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
        <a style={linkStyle}>{props.title}</a>
        </Link>
    </li>
)

export default class Index extends Component {
    static async getInitialProps ({req, query}) {
        const user = req && req.session ? req.session.decodedToken: null
        const snap = await req.firebaseServer.database().ref('messages').once('value')
        return { user, messages: snap.val() }
    }

    constructor (props) {
        super(props)
        this.state = {
          user: this.props.user,
          value: '',
          messages: this.props.messages
        }
    
        this.addDbListener = this.addDbListener.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }
    
      componentDidMount () {
        firebase.initializeApp(clientCredentials)
    
        if (this.state.user) this.addDbListener()
    
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            this.setState({ user: user })
            return user.getToken()
              .then((token) => {
                // eslint-disable-next-line no-undef
                return fetch('/api/login', {
                  method: 'POST',
                  // eslint-disable-next-line no-undef
                  headers: new Headers({ 'Content-Type': 'application/json' }),
                  credentials: 'same-origin',
                  body: JSON.stringify({ token })
                })
              }).then((res) => this.addDbListener())
          } else {
            this.setState({ user: null })
            // eslint-disable-next-line no-undef
            fetch('/api/logout', {
              method: 'POST',
              credentials: 'same-origin'
            }).then(() => firebase.database().ref('messages').off())
          }
        })
      }
    
      addDbListener () {
        firebase.database().ref('messages').on('value', snap => {
          const messages = snap.val()
          if (messages) this.setState({ messages })
        })
      }
    
      handleChange (event) {
        this.setState({ value: event.target.value })
      }
    
      handleSubmit (event) {
        event.preventDefault()
        const date = new Date().getTime()
        firebase.database().ref(`messages/${date}`).set({
          id: date,
          text: this.state.value
        })
        this.setState({ value: '' })
      }
    
      handleLogin () {
        firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
      }
    
      handleLogout () {
        firebase.auth().signOut()
      }

    render() {
        const { user, value, messages } = this.state

        return <div>
            {
                user
                ? <button onClick={this.handleLogout}> Logout</button>
                : <button onClick={this.handleLogin}>Login</button>
            }
            {
                user &&
                <ThemeProvider theme={theme}>
                <div>
                    <Head>
                        <link href='/static/theme.css' rel='stylesheet' />
                    </Head>
                    <MyLayout>
                        <PostLink id="welcome" title="Welcome!" />
                        <Button raised primary>Hello</Button>
                        <Chip>Example chip</Chip>
                    </MyLayout>
                </div>
                </ThemeProvider>
            }
            
        </div>
    }
}
