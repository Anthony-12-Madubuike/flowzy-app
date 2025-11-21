


export default function DashboardCards(cardprops) {
    return (
        <>
            <div className="dashboardcardContent">
                <div className="firstcardContent">
                    <div className="aboutCard">
                        <p>{cardprops.aboutTxt}</p>
                        <i className="bi bi-info-circle"></i>
                    </div>

                    <button>{cardprops.date}</button>

                </div>
                <div className="secondcardContent">
                    <h3>{cardprops.balanceTxt}</h3>

                </div>
                <div className="thirdcardContent">
                    <div className="percentage">
                        <i className={cardprops.graph} ></i>

                        <p>
                            {cardprops.percent}

                        </p>
                    </div>
                    <p>compared with last month</p>

                </div>
            </div>
        </>
    )
}