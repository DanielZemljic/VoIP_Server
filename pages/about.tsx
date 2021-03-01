import React from "https://esm.sh/react"
import Link from "link.tsx"
import clickButton from "../lib/button.tsx"

import Player from "../lib/useAudio.tsx"


export default function About(){
    const btn = clickButton();
    return (

    <div className="page">
        <p className ="Links">
            <Link to= "/">Home</Link>
        </p>
        <div className="counter">
            {btn}
        </div>
        <div>
            <Player
                url = {'/song.mp3'}
            />
        </div>
    </div>
    
    )
}