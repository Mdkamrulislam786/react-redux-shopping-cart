import React from "react";

const Navbar =()=>{
    return(
        <header>
        <div className="overlay"></div>
        <nav>
          <h2>SHOP</h2>
          <ul>
            <li>
              <a href="cart"><i className="fas fa-shopping-cart fa-3x"></i><span>0</span></a>
            </li>
          </ul>
        </nav>
      </header>
    )
}

export default Navbar