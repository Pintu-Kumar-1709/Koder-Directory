
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='nav'>
            <h3>KumarrR</h3>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/product'>Product</Link>
                <Link to='/services'>Services</Link>
                <Link to='/skills'>Skills</Link>
            </div>
        </div>
    )
}

export default Navbar