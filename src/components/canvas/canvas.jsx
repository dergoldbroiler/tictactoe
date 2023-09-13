import { Field } from "./field";
import { Reset } from "./Reset";
import { Winner } from "./Winner";
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

    const handleFieldClick = (field) => {
        setReset(false);
        setNextPlayer(nextPlayer === 'X' ? 'O' : 'X');

        let newPlayerState = {
            ...playerState
        };

        nextPlayer === 'X' ? newPlayerState.X.push(field) : newPlayerState.O.push(field);
        
        //updating matched fields of players
        setPlayerState(newPlayerState);

        //checking if there is a match
        if(isMatch(playerState.X)){
            setWon({player:'X', state:true});
        }
        
        if(isMatch(playerState.O)){
            setWon({player:'O', state:true});
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

    }

    const fields = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <>
        <Winner won={won} resetclick={handleResetClick} />
            <div className="canvas m-auto">
                <div className="row">
                    
                    
                    <Reset onClick={handleResetClick} />
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