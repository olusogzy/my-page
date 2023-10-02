
import '../App.css'
import { Link } from 'react-router-dom';
import Nodejs from '../images/Nodejs-logo.png'
import Reacticon from '../images/React-icon.png'

function Header(){
    return(
        <div className='text-center p-20 h-screen'>
            <h2 className='headerName'> OLUSOGA ADEBAYO</h2>
            <div>
                <h5> FRONTEND DEVELOPER. </h5>
            </div>
            <div className='flex justify-evenly'>
                <img src={Reacticon} alt='react-icon' className='header w-20'></img>
                <img src={Nodejs} alt='nodejs' className='header w-20'></img>
            </div>

            {/* <div>
                <Link to='/profile'>Profile</Link>
                <Link to='/contact'>Contact</Link>
            </div> */}
        </div>
    )
}

export default Header;