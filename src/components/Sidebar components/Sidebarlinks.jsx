import './sidebar.css'

export default function Sidebarlink(sidebarlinksprops) {
    return (
        <>
            <div className="sidebarlinkcontent" id={sidebarlinksprops.ID}>
                <i className={sidebarlinksprops.Sidebarlinkicons} alt="" ></i>
                <p>{sidebarlinksprops.Sidebarlinktxt}</p>
            </div>
        </>
    )
}