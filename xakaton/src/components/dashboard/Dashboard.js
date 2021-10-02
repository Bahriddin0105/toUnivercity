import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";
import {Link} from 'react-dom'
import { FaUserGraduate } from "react-icons/fa";
import "./dashboard.css";
export default class Dashboard extends Component {
  toP = () => {
    document.querySelectorAll(".name").style.marginTop = "-50px";
    document.querySelectorAll(".name").style.fontSize = "10px";
  };
  render() {
    return (
      <div className="body">
        <div className="asosiy">
          <div className="iconS">
            <FaUserGraduate className="icon" />
          </div>
            <Container className='cont'>

            <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  style={{height:'70px', fontSize:'22px', backgroundColor:'transparent', borderRadius:'15px'}}
                  id="floatingInputUsername"
                  placeholder="Username"
                />
                <label style={{color:'white'}} for="floatingInput">Username</label>
              </div>
             
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  style={{height:'70px', fontSize:'22px', backgroundColor:'transparent', borderRadius:'15px'}}
                  id="floatingInputFullname"
                  placeholder="Fullname"
                />
                <label style={{color:'white'}} for="floatingInput">Full Name</label>
              </div>
             
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  style={{height:'70px', fontSize:'22px', backgroundColor:'transparent', borderRadius:'15px'}}
                  id="floatingInputEmail"
                  placeholder="name@example.com"
                />
                <label style={{color:'white'}} for="floatingInput">Email address</label>
              </div>
              <Link to='/test'><Button variant="outline-primary">Testga kirish</Button></Link>
          </Container>
        </div>
      </div>
    );
  }
}
