import React from "react";

export const Navbar = ()=>{
    return(
        <header>
	        <nav class="navbar navbar-expand-lg fixed-top navbarScroll navbar-dark">
                <div class="container">
  	            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
    	        <ul class="navbar-nav ms-auto">
      	            <li class="nav-item active">
        	            <a class="nav-link" href="#">home</a>
                     </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">wer wir sind</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#food">food</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#snacks">snacks</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#cocktails">cocktails</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#smoothies">smoothies</a>
                    </li>
                 </ul>
                </div>
                </div>
            </nav>
        </header>
    )
} 