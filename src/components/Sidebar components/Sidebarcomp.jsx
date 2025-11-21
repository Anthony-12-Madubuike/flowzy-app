import Logo from '../Logo';
import Sidebarlink from "./Sidebarlinks";
import './sidebar.css';

// import overview from '../../assets/Icons/view-list.svg'
// import wallet from '../../assets/Icons/wallet2.svg'
// import activity from '../../assets/Icons/activity.svg'
// import cryptocurrency from '../../assets/Icons/coin.svg'
// import message from '../../assets/Icons/envelope.svg'
// import report from '../../assets/Icons/bar-chart.svg'
// import setting from '../../assets/Icons/gear.svg'
// import feedback from '../../assets/Icons/person-workspace.svg'
// import info from '../../assets/Icons/info-circle.svg'
// import theme from '../../assets/Icons/moon.svg'
// import logout from '../../assets/Icons/door-open.svg'



export default function Sidebarcomp() {
    return (
        <>
            <div className="sidebarcontent">

                <div className="sidebarfirstdiv">
                    <Logo />
                </div>
                <div className="sidebardivs" id='sidebarseconddiv'>
                    <div className="sidebardivlinkcontent">
                        <div className="sidebarseconddivHeader">
                            <h2>Menu</h2>
                        </div>
                        <div className="sidebarseconddivBody">
                            <Sidebarlink
                                Sidebarlinkicons='bi bi-view-list'
                                Sidebarlinktxt='Overview'
                                ID='active'
                            />
                            <Sidebarlink
                                Sidebarlinkicons='bi bi-wallet2'
                                Sidebarlinktxt='My Wallet'
                            />
                            <Sidebarlink
                                Sidebarlinkicons='bi bi-activity'
                                Sidebarlinktxt='Activity'
                            />
                            <Sidebarlink
                                Sidebarlinkicons='bi bi-coin'
                                Sidebarlinktxt='Cryptocurrency'
                            />
                            <Sidebarlink
                                Sidebarlinkicons='bi bi-envelope'
                                Sidebarlinktxt='Message'
                            />
                            <Sidebarlink
                                Sidebarlinkicons='bi bi-bar-chart'
                                Sidebarlinktxt='Report'
                            />
                        </div>
                    </div>
                </div>

                <div className="sidebardivs" id='sidebarthirddiv'>
                    <div className="sidebardivlinkcontent">

                    <div className="sidebarthirddivHeader">
                        <h2>Help & Setting</h2>
                    </div>
                    <div className="sidebarthirddivBody">
                        <Sidebarlink
                            Sidebarlinkicons='bi bi-gear'
                            Sidebarlinktxt='Setting'
                        />
                        <Sidebarlink
                            Sidebarlinkicons='bi bi-people-workspace'
                            Sidebarlinktxt='Feedback'
                        />
                        <Sidebarlink
                            Sidebarlinkicons='bi bi-info-circle'
                            Sidebarlinktxt='Help & Center'
                        />
                    </div>
                    </div>
                </div>

                <div className="sidebardivs" id='sidebarfourthdiv'>
                    <div className="sidebarfourthdivBody">
                        <Sidebarlink
                            Sidebarlinkicons='bi bi-moon'
                            Sidebarlinktxt='Dark mode'
                        />
                        <Sidebarlink
                            Sidebarlinkicons='bi bi-door-open'
                            Sidebarlinktxt='Logout'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}