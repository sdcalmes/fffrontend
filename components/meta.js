import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default () => (
    <div>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
        </Head>
        <style jsx global>{`
            body {
                font-family: "Roboto";
                background: #333;
            }

            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            a {
                text-decoration: none !important;
                color: blue;
                font-weight: bold;
            }

            #nprogress {
                pointer-events: none;
            }

            #nprogress .bar {
                background: #FFEB3B;
                position: fixed;
                z-index: 1031;
                top: 0;
                left: 0;
                width: 100%
                height: 2px;
            }

            #nprogress .peg {
                display: block;
                position: absolute;
                right: 0px;
                width: 100px;
                height: 100%;
                box-shadow: 0 0 10px #ff9300, 0 0 5px #ff9300;
                opacity: 1.0;
                transform: rotate(3deg) translate(0px, -4px);
            }
        `}</style>
    </div>
)