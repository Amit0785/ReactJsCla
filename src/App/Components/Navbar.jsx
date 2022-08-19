import React from 'react'
import {useSelector} from 'react-redux'
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useNavigate} from 'react-router-dom'

function Navbar() {

   const navigation=useNavigate()
   const mystate=useSelector((state)=>state.UpDown)
   //const mystate=1
   
  return (
   <>
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
                                 <a className="nav-link" href="/" onClick={()=>{ navigation('/')}}>Home</a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link" onClick={()=>{ navigation('/AboutUs')}}>About</a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link" href="/Services"  onClick={()=>{ navigation('/Services')}}>Services</a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link" href="/Gallery"  onClick={()=>{ navigation('/Gallery')}}>Gallery</a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link" href="/Product" onClick={()=>{ navigation('/Product')}}>Products</a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link"  href="/ContactUs" onClick={()=>{ navigation('/ContactUs')}}>Contact Us</a>
                              </li>
                             
                              <li className="nav-item d_none">
                                 <a className="nav-link" onClick={()=>{ navigation('/Cart')}}>
                                 <IconButton aria-label="cart" color='primary' >
                                    <Badge badgeContent={mystate} color="secondary" >
                                      <ShoppingCartIcon size='large'/>
                                    </Badge> 
      
                                 </IconButton>
                                 Cart
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
    </div>
    </>
  )
}

export default Navbar