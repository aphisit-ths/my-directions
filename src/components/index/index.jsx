import "./index.scss"
import React, { useEffect, useRef } from 'react'
import { init } from 'ityped'


export default function Intro() {
    const textRef = useRef();

    useEffect(
        ()=> {
            init(textRef.current, 
                { showCursor: false, strings: 
                    ['TodoList()'] })
        },[]
    )
    return (
        <div className="index" id="index">
            <div className="left">
                <div className="meimg">
                    <img src="assets/drawkit.png"/>
                </div>
            </div>
            <div className="right">
                <div className="warpper">
                    <h2>Hello World,</h2>
                    <h1>task = new  <span ref={textRef}></span></h1>
                    <a href="#form">
                        <img src="assets/down.png"/>
                    </a>
                </div>
                
                
            </div>

        </div>
    )
}
