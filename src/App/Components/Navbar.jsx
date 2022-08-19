import React from 'react'
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {

   //const [mystate, setMystate] = useState(1)
   const mystate=1
  return (
    <div className="header">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                     <div className="full">
                        <div className="center-desk">
                           <div className="logo">
                              <a href="/"><img src="images/logo.png" alt="#" /></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                     <nav className="navigation navbar navbar-expand-md navbar-dark ">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarsExample04">
                           <ul className="navbar-nav mr-auto">
                              <li className="nav-item active">
                                 <a className="nav-link" href="/">Home</a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link" href="/">About</a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link" href="/">Computer</a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link" href="/">Laptop</a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link" href="/">Products</a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link" href="/">Contact Us</a>
                              </li>
                             
                              <li className="nav-item d_none">
                                 <a className="nav-link" href="/">
                                 <IconButton aria-label="cart" color='primary' >
      <Badge badgeContent={mystate} color="secondary" >
        <ShoppingCartIcon size='large'/>
      </Badge> 
      
    </IconButton>
                                 Cart</a>
                              </li>
                           </ul>
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
    </div>
  )
}

export default Navbar