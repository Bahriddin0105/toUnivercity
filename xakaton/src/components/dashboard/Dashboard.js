import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";
import {Link} from 'react-router-dom'
// import { FaUserGraduate } from "react-icons/fa";
import "./dashboard.css";
export default class Dashboard extends Component {
    state={
        username:'',
        fullname: '',
        email: ''
    }
// enter=()=>{
//   console.log('aaaaaaaa')
//     var username = document.getElementById('floatingInputUsername').value
//     var fullname = document.getElementById('floatingInputFullname').value
//     var email = document.getElementById('floatingInputEmail').value
//     if(username==null || fullname==null || email==null){
//         document.querySelector('.dbtn').disabled=true;
//     } else {
//         document.querySelector('.dbtn').disabled=false;

//     }
// }
 
  render() {
    return (
      <div className="body">
        <div className="asosiy">
          <div className="iconS">
            {/* <FaUserGraduate className="icon" /> */}
          </div>
            <Container className='cont'>

            <div class="form-floating mb-3">
                <input
                required
                  type="text"
                  class="form-control"
                  style={{height:'70px', fontSize:'22px', backgroundColor:'transparent', borderRadius:'15px', color: 'white'}}
                  id="floatingInputUsername"
                  placeholder="Username"
                />
                <label style={{color:'white'}} for="floatingInput">Username</label>
              </div>
             
              <div class="form-floating mb-3">
                <input
                required
                  type="text"
                  class="form-control"
                  style={{height:'70px', fontSize:'22px', backgroundColor:'transparent', borderRadius:'15px', color: 'white'}}
                  id="floatingInputFullname"
                  placeholder="Fullname"
                />
                <label style={{color:'white'}} for="floatingInput">Full Name</label>
              </div>
             
              <div class="form-floating mb-3">
                <input
                required
                  type="email"
                  class="form-control"
                  style={{height:'70px', fontSize:'22px', backgroundColor:'transparent', borderRadius:'15px', color: 'white'}}
                  id="floatingInputEmail"
                  placeholder="name@example.com"
                />
                <label style={{color:'white'}} for="floatingInput">Email address</label>
              </div>
              <div className='dbtn'><Button  variant="outline-primary" className='btn'><Link to='/test'>Testni boshlash</Link></Button></div>
          </Container>
        </div>
      </div>
    );
  }
}
