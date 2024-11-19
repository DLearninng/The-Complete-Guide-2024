import { useState } from "react"

export default function Player({initialName, symbol, isActive}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEdit, setIsEdit] = useState(false);

    function handleClick(){
        setIsEdit((edit) => !edit)
    }

    function handleChange(event){
        setPlayerName(event.target.value)
    }

    let editAblePlayerName = <span className="player-name">{playerName}</span>
    if(isEdit){
        editAblePlayerName = <input type="text" required  value={playerName} onChange={handleChange}/>
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editAblePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{!isEdit ? 'Edit' : 'Save'}</button>
        </li>
    )
}