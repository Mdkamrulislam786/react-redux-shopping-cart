import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getNumbers } from "../actions/getAction";
import {Link} from 'react-router-dom'

const Navbar = (props) => {
  console.log(props);

  useEffect(() => {
    getNumbers();
  }, []);

  return (
    <header>
      <div className="overlay"></div>
      <nav>
        <h2>SHOP</h2>
        <ul>
          <li>
            <Link to="cart">
              <i className="fas fa-shopping-cart fa-2x"></i>
              <span>{props.basketProps.basketNumbers}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => ({
  basketProps: state.basketState
});

export default connect(mapStateToProps, { getNumbers })(Navbar);
