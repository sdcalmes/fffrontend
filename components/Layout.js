import Header from './Header'
import Meta from './meta'
import Head from 'next/head'

const layoutStyle = {
    margin: 0,
    padding: 0,
}

const Layout = (props) => (

    <div style={layoutStyle}>
        <Head>
            <title>The Fantasy Five</title>
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css?family=Saira:500" rel="stylesheet"></link>

        </Head>
        <Header />
        <Meta />
        {props.children}
    </div>
)

export default Layout