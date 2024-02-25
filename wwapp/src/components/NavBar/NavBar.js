import { Link } from "react-router-dom";
import Owl from './WWK_Logo_Large.png';

// test
function NavBar({logInAccess, handleLogOut}) {
  //add a link for each component in the navbar:white_check_mark:
  //set up path for each component:white_check_mark:
  //add className to each link:white_check_mark:

  //NEW - Add a function that takes in the click of the Logout button. Passes props up ✅
  function handleLogOutClick() {
    handleLogOut()
  }

  return (
    <div className="NavBar">
      <Link className="Logo" to="/">
        <img className="owlImage" src={Owl} alt="Owl in chefs hat"></img>
        </Link>


      <div className="DropdownMenu">
      {/* &#9776; code is for the burger menu icon */}
        <button className="Dropbtn" aria-label="dropdown-nav-menu"> &#9776;</button>
        <div className="DropdownContent">

{/* NEW - Render conditional statements for login ✅ */}
{/* NEW - Render conditional statements for logIN ✅ */}
{/* NEW - Render conditional statement with Access to Wallet ✅ */}
{/* NEW - Render conditional statement with Access to Wallet ✅ */}
          <Link  to="/">Homepage</Link>
          <Link  to="/about">About us</Link>
          {logInAccess && <Link to="/kitchen">Kitchen</Link>}
          {logInAccess && <Link to="/wallet">Wallet</Link>}
          {!logInAccess && <Link to="/login">Login</Link>}
          {logInAccess && <Link onClick={handleLogOutClick} to="/login">Logout</Link>}
          </div>

        </div>
      </div>
    
  );
}
export default NavBar;

