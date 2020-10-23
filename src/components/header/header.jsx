import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../Assets/logo/crown-logo.svg";
import "./header.scss";
import { auth } from "../../firebase/firebase.utils";
import { connect } from 'react-redux';
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/card-dropdown";


const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/contact" className="option">
        Contact
      </Link>
      {currentUser ? (
        <> 
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        </>
      ) : (
        <Link className="option" to="/sign-in">
          SIGN IN
        </Link>
        )}
     <CartIcon/>
    </div>
    {hidden? null : <CartDropdown /> }
  </div>
);
const mapStateToProps = ({user:{currentUser}, cart : {hidden}}) => ({
  currentUser,
  hidden
})
// const mapStateToProps = state => ({
//   currentUser: state.user.currentUser
// })
 
export default connect(mapStateToProps)(Header) ;
