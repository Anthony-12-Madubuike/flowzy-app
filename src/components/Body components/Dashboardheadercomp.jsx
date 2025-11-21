
import './Dashboard.css'
import Dashboardcard from './Dashboardcard'

export default function DashboardHeadercomp() {
    return (
        <>
            <div className="dashboardheaderParentcontent">
                <div className="dashboardheadercontent">
                    <div className="usergreeting">
                        <h2>Welcome Back, Tony!</h2>
                    </div>

                    <div className="exportResult">
                        <button className='exportBtn'>
                            <i className='bi bi-download'> </i>
                            <p>Export result</p>
                        </button>
                    </div>
                </div>
                <div className="dashboardheaderParentcard">
                    <Dashboardcard
                        aboutTxt='My Balance'
                        date='July'
                        balanceTxt='$30,000'
                        percent='33%'
                        graph='bi bi-graph-up'

                    />
                    <Dashboardcard
                        aboutTxt='Monthly Spent'
                        date='July'
                        balanceTxt='$24,000'
                        percent='27.3%'
                        graph='bi bi-graph-up'

                    />
                    <Dashboardcard
                        aboutTxt='Monthly Income'
                        date='July'
                        balanceTxt='$30,000'
                        percent='2.3%'
                        graph='bi bi-graph-up'
                    />
                </div>

            </div>
        </>
    )
}