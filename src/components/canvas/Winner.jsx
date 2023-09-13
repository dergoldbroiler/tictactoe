export const Winner = ({won,resetclick}) => {
    if(!won.state) return null;
    return (
        <div className="winner text-center position-fixed m-5 shadow-lg">
            <h1 className="text-center text-uppercase alert alert-success d-flex justify-content-between align-items"><span>{won.player} won </span><button type="button" className="btn-close" aria-label="Close" onClick={resetclick}></button></h1>
        </div>
    )
}