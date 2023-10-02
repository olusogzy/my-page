import '../App.css'
import Html from '../images/htmlicon.png';
import Css from '../images/cssicon.png';
import JsIcon from '../images/jsicon.jpg';

function Features(){
    return(
        <div className='flex justify-evenly mb-10'>
            <div className='feature text-center rounded w-56 border-2 p-3 shadow-xl'>
                
                    <img src={ Html } alt='html' className='objectfit-cover'></img>
                    <h3 className='p-3'> HTML5, XML.</h3>
                
            </div>

            <div className='feature text-center rounded w-56 border-2 p-3 shadow-xl'>
                
                    <img src={ Css } alt='html' className=''></img>
                    <h3 className='p-3'> CSS, BOOTSTRAP, TAILWINDCSS.</h3>
                
            </div>

            <div className='feature text-center rounded w-56 border-2 p-3 shadow-xl'>
                
                    <img src={ JsIcon } alt='html' className=''></img>
                    <h3 className='p-3'> JAVASCRIPT, REACT, NODEJS.</h3>
                
            </div>
        </div>
    )
}

export default Features;