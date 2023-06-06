import React, {useState} from 'react'


function Letter ({letter}){
    const [isVisible,setIsVisible]=useState(false)

    function onPress (){
        setIsVisible (true)
    }
    return (
    <div>
        <h1 onClick={onPress}>.{isVisible ? letter : " "}.</h1>
    </div>)
}

export default Letter;