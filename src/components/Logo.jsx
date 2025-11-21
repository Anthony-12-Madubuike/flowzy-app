import logo from '../assets/logo.png'
import '../index.css'
export default function Logo() {
    return (
        <>
            <div className='Logocontent'>
                <img src={logo} alt="" className='Logo' />
                <h1 className='LogoName'>flowzy</h1>
            </div>
        </>
    )
}