import React, { Component } from "react";
// import $ from 'jQuery'
import { Button, Container } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import logo from "../../img/logo.jpg";
// import { FaUserGraduate } from "react-icons/fa";
import "./dashboard.css";
export default class Dashboard extends Component {
  state = {
    edit: false,
  };
  enter = () => {
    var username = document.querySelector("#floatingInputUsername").value;
    var fullname = document.querySelector("#floatingInputFullname").value;
    var email = document.querySelector("#floatingInputEmail").value;
    if(username!=''){
      if(fullname!=''){
        if(email!=''){
          this.setState({
            edit:true,
          })
          console.log('aaa')
          
          return(
            <Redirect push to='/test' />
            

          )
        }
      }
    }
  
  };

  render() {
    const {edit}=this.state
    return (
      <div className="body">
        <div className="asosiy">
          <div className="iconS">
            {/* <FaUserGraduate className="icon" /> */}
            <img src={logo} className="icon" />
          </div>
          <Container className="cont">
            <div class="form-floating mb-3">
              <input
                required
                type="text"
                class="form-control"
                style={{
                  height: "70px",
                  fontSize: "22px",
                  backgroundColor: "transparent",
                  borderRadius: "15px",
                  color: "white",
                }}
                id="floatingInputUsername"
                placeholder="Username"
              />
              <label style={{ color: "white" }} for="floatingInput">
                Username
              </label>
            </div>

            <div class="form-floating mb-3">
              <input
                required
                type="text"
                class="form-control"
                style={{
                  height: "70px",
                  fontSize: "22px",
                  backgroundColor: "transparent",
                  borderRadius: "15px",
                  color: "white",
                }}
                id="floatingInputFullname"
                placeholder="Fullname"
              />
              <label style={{ color: "white" }} for="floatingInput">
                Full Name
              </label>
            </div>

            <div class="form-floating mb-3">
              <input
                required
                type="email"
                class="form-control"
                style={{
                  height: "70px",
                  fontSize: "22px",
                  backgroundColor: "transparent",
                  borderRadius: "15px",
                  color: "white",
                }}
                id="floatingInputEmail"
                placeholder="name@example.com"
              />
              <label style={{ color: "white" }} for="floatingInput">
                Email address
              </label>
            </div>
            <div className="dbtn">
              {/* <Link to="/test"> */}
              <Button
                onClick={this.enter}
                variant="outline-primary"
                className="btn"
              >
                Testni boshlash
              </Button>
                  {
                    edit?<Redirect push to='/test' />:''
                  }
              {/* </Link> */}
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
