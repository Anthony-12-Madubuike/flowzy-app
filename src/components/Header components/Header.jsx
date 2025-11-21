import Searchbar from './Searchbar'
import Dp from '../../../src/assets/dp.jpg'
export default function Header() {
    return (
        <>
            <div className="Headercontent">
                <Searchbar />
                <div className="HeadersecondDiv">
                   <i className='bi bi-bell'></i>
                    <div className="HeaderprofileSection">
                        <img src={Dp} alt=""  className='Dp'/>
                        <div className="HeaderprofileTxt">
                            <p className="username">
                                Tony Madu
                            </p>
                            <p className="useremail">
                                antonymadu15@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}