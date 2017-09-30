import ThemeProvider from 'react-toolbox/lib/ThemeProvider'
import theme from '../static/theme'
import MyLayout from '../components/Layout.js'
import Link from 'next/link'
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

export default () => (
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
)

