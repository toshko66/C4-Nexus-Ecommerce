import '../css/Footer.css';
import { Link } from 'react-router-dom';
import { FaInstagram,FaFacebook,FaLinkedin} from 'react-icons/fa';

const footer =()=>{



    return(
        <footer >
            <p>"Developed by <span>Todor Velichkov</span>"</p>
            <div className='Social-icons'>
            <Link to="/cart"><FaInstagram /></Link>
            <Link to="/cart"><FaFacebook /></Link>
            <Link to="/cart"><FaLinkedin /></Link>
            </div>
            <div className='links-wrapper'>
                <Link to="/terms-and-conditions">Terms and conditions</Link>
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/contact-us">Contact Us</Link>
            </div>
            <small>&copy;Copyright 2099, Velichkov</small>
        </footer>
    )
}

export default footer;