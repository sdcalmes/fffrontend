import Link from 'next/link'
import Headroom from 'react-headroom/dist/index'

//import { rhythm } from '../utils/typography'



const linkStyle = {
    marginRight: 5,
    marginLeft: 5,
    color: "#E0E0E0"
}

const baseStyle = {
    marginRight: 150,
    marginLeft: 250
}

const slashStyle = {
    fontWeight: 'bold',
    color: '#FFEB3B'
}

const Header = () => (
    <div style={{ marginBottom: 15 }}>
        <Headroom
            style={{
                background: '#000000',
                boxShadow: '2px 2px 2px rgba(0,0,0,0.35)',
                paddingBottom: 5,
                paddingTop: 5,
                }}
        >
            <h2 style={{ marginBottom: 5, marginLeft: 250, marginRight: 150, fontFamily: 'Saira', color: '#E0E0E0' }}>The Fantasy Five</h2>
        <div style={baseStyle}>
            <Link href="/">
                <a style={linkStyle}>Home</a>
            </Link>
            <span style={slashStyle}>/</span>
            <Link href="/standings">
                <a style={linkStyle}>Standings</a>
            </Link>
            <span style={slashStyle}>/</span>
            <Link href="/myteam">
                <a style={linkStyle}>My Team</a>
            </Link>
            <span style={slashStyle}>/</span>
            <Link href="/account">
                <a style={linkStyle}>Account</a>
            </Link>
            <span style={slashStyle}>/</span>
            <Link href="/about">
                <a style={linkStyle}>About</a>
            </Link>
            <span style={slashStyle}>/</span>
            <Link href="/admin">
                <a style={linkStyle}>Admin</a>
            </Link>
            <span style={slashStyle}>/</span>
            <Link href="/logout">
                <a style={linkStyle}>Logout</a>
            </Link>
        </div>
        </Headroom>
    </div>
)

export default Header