import { useState, useEffect } from "react"

export const Field = ({field, player, onClick, reset}) => {

    const [fieldState, setFieldState] = useState('');

    const handleFieldClick = () => {
       
        if(fieldState !== '') return;
        setFieldState(player);
        onClick(field);
    }

    useEffect(
        () => {
            reset && setFieldState('');
    }, [reset]);
    
    
    return (
        <div className="col-4 single-field text-center d-flex flex-column justify-content-center h-100 shadow-lg" id={field.title} onClick={handleFieldClick}>
          {fieldState}
        </div>
    )
}