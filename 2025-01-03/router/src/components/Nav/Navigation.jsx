import { Link } from 'react-router-dom'

export default function Navigation () {
    return (
        <header>
            <nav>
                <div><Link to='/'>Home</Link></div>
                <div><Link to='/contacts'>Contacts</Link></div>
                <div><Link to='/payment'>Payment</Link></div>
                <div><Link to='/pricing'>Pricing</Link></div>
                <div><Link to='/team'>Meet the Team</Link></div>
            </nav>
        </header>
    )
}