import React, { Component } from 'react'
import Search from './Search'
import { Link } from 'react-router-dom';
import Form from './Form'

export class Navbar extends Component {
    render() {
        return (
            
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">PEHLA PROPERTY</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor02">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">BUY</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">SELL</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">RENT</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">PG</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">COMMERCIAL</a>
      </li>

     < Link to="/Form">
     <li className="nav-item">
        <a className="nav-link">LOGINS</a>
      </li>

            </Link>


    </ul>
    <Search/>
   

  </div>
</nav>
            
        )
    }
}

export default Navbar
