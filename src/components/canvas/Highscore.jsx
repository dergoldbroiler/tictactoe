export const Highscore = ({highscore}) => {
    return (
        <div className="highscore text-center position-fixed">
            <h4>X</h4>{highscore.X} <hr></hr><h4>O</h4>{highscore.O}
        </div>
    );
}