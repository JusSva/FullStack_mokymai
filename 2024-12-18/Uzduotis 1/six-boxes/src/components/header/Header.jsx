import Logo from './Logo.jsx'
import Navigation from './Navigation.jsx'
import './header.css'

export default function Header() {
    return (
        <div className='d-flex'>
            <Logo />
            <Navigation />
        </div>
    )
}