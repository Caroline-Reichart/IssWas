import React from "react";

export const Navbar = ()=>{
    return(
        <header>
            <nav className="navbar navbar-expand-lg fixed-top navbarScroll navbar-dark" style={{backgroundColor: "#000000"}}>
            <img src="/assets/logo_issWas.webp" alt="logo" style={{width:"100px", display:"inline", marginLeft:"50px", borderRadius:"10px"}}/>
                <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">home</a>
                     </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#press">wer wir sind</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#recipes">food</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#recipes">snacks</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#recipes">cocktails</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#recipes">smoothies</a>
                    </li>
                 </ul>
                </div>
                </div>
            </nav>
        </header>
    )
} 