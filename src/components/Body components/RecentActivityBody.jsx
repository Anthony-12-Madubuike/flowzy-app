export default function RecentActivityBody(RecentActivityBodyprops) {
    return (
        <>
            <div className="RecentActivityBody">
                <div className="RecentActivityBodyTxtContent">
                <img src={RecentActivityBodyprops.activityImg} alt="" />
                <div className="RecentActivityBodyTxt">
                    <p className="productName">{RecentActivityBodyprops.productname}</p>
                    <p className="activityDateTime">{RecentActivityBodyprops.activtyRange}</p>
                </div>
                </div>
                <div className="activityValuetxtContent">
                    <p className="activityValue">{RecentActivityBodyprops.activityValue}</p>
                </div>
            </div>
        </>
    )
}