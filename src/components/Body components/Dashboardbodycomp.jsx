import CashFlowChart from '../../CashFlowChart';
import RecentActivityBody from './RecentActivityBody'
import Spotify from '../../assets/spotify.png'
import Instagram from '../../assets/instagram.jpg'
import Netflix from '../../assets/netflix.jpg'
import upwork from '../../assets/upwork.webp'

export default function Dashboardbodycomp() {
    return (
        <>
            <div className="dashboardbodycontent">
                <div className="dashboardbodyFirstpanel">
                    <CashFlowChart />
                </div>
                <div className="RecentActivity">
                    <div className="RecentActivityHeader">
                        <p className='RecentActivityHeaderTag'>Recent Activity</p>
                        <div className="addActivitybtnContent">
                            <button> <i className='bi bi-plus'></i>Add new</button>
                        </div>
                        <p className="activityDate">June 12 2025</p>

                    </div>
                    <div className="RecentActivityBodyContent">
                        <RecentActivityBody
                            activityImg={Instagram}
                            productname='Instagram'
                            activtyRange='June 12 at 13:00pm'
                            activityValue='-99$'
                        />

                           <RecentActivityBody
                            activityImg={Spotify}
                            productname='Spotify'
                            activtyRange='June 12 at 13:00pm'
                            activityValue='-20$'
                        />

                            <RecentActivityBody
                            activityImg={upwork}
                            productname='Upwork'
                            activtyRange='June 12 at 13:00pm'
                            activityValue='-50$'
                        />
                            <RecentActivityBody
                            activityImg={Netflix}
                            productname='Netflix'
                            activtyRange='June 12 at 13:00pm'
                            activityValue='-20$'
                        />
                    </div>
                </div>
            </div>

        </>
    )
}