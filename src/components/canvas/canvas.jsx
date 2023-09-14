import { Field } from "./Field";
import { Reset } from "./Reset";
import { Winner } from "./Winner";
import { Highscore } from "./Highscore";
import { Nextplayer } from "./Nextplayer";
import { useState, useEffect } from "react";

import { isMatch } from "../../services/state";

const emptyPlayerState = {
    X: [], 
    O: []
};

export const Canvas = () => {

    const [nextPlayer, setNextPlayer] = useState('X');
    const [playerState, setPlayerState] = useState(emptyPlayerState);
    const [reset, setReset] = useState(false);
    const [won, setWon] = useState({player:'', state:false});
    const [playerInfo, setPlayerInfo] = useState(nextPlayer);
    const [highscore, setHighscore] = useState({X:0, O:0});

    useEffect(() => {
        document.title = `Next player: ${nextPlayer}`;
    }, [nextPlayer]);

    

    const handleFieldClick = (field) => {
        setReset(false);
        setNextPlayer(nextPlayer === 'X' ? 'O' : 'X');
        
        nextPlayer === 'X' ? setPlayerInfo("O") : setPlayerInfo("X");;
        let newPlayerState = {
            ...playerState
        };

        //saving clicked field to player
        nextPlayer === 'X' ? newPlayerState.X.push(field) : newPlayerState.O.push(field);
        setPlayerState(newPlayerState);

        //checking if there is a match
        if(isMatch(playerState.X)){
            setWon({player:'X', state:true});
            setHighscore(
                {
                    ...highscore,
                    X: highscore.X + 1
                }
            );
        }
        
        if(isMatch(playerState.O)){
            setWon({player:'O', state:true});
            setHighscore(
                {
                    ...highscore,
                    O: highscore.O + 1
                }
            );
        }
    }

    const handleResetClick = () => {
        setWon({player:'', state:false});
        let newPlayerState = {
            ...playerState
        };
        newPlayerState.X = [];
        newPlayerState.O = [];
        setPlayerState(newPlayerState);
        setReset(true);
        setHighscore({X:0, O:0});
    }


    const handleCloseClick = () => {
        setWon({player:'', state:false});
        let newPlayerState = {
            ...playerState
        };
        newPlayerState.X = [];
        newPlayerState.O = [];
        setPlayerState(newPlayerState);
        setReset(true);
    }

    const fields = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <>
        <Winner won={won} resetclick={handleCloseClick} />
            <div className="canvas m-auto">
                <div className="row">
                    
                    
                    
                    <Reset onClick={handleResetClick} />
                    <Nextplayer info={playerInfo} />
                    <Highscore highscore={highscore} />
                    
                    {
                        fields.map((i) => {
                            return <Field key={i} player={nextPlayer} field={i} onClick={handleFieldClick} reset={reset} />
                        })
                    }
                </div>
            </div>
            </>    
        )
}