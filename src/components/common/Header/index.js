import React from "react"
import "./index.css"
import logo from "@/assets/img/logo.svg"
function Header(){
    return (
        <header className="navbar">
            <div className="container">
                <a className="brand" href="/">
                    <img src={logo} alt=""/>
                </a>
            </div>
        </header>
    )
}
export default Header