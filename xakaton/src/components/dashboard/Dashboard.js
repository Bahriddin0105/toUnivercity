import React, { Component } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import { Redirect, Link } from "react-router-dom";
import logo from "../../img/logoone.png";
import "./dashboard.css";
export default class Dashboard extends Component {
  state = {
    edit: false,
    show:false,
    // shows:false,
  };
  enter = () => {
    var username = document.querySelector("#floatingInputUsername").value;
    var fullname = document.querySelector("#floatingInputFullname").value;
    var email = document.querySelector("#floatingInputEmail").value;
    if (username != "") {
      if (fullname != "") {
        if (email != "") {
          // console.log('b')
          this.setState({
            
            show:true,
          });
          
        }
      }
    }
this.handleClose()
    
  };
  handleClose=()=>{
    this.setState({
      show:false,
    })
  }
openTest=()=>{
  var shows=this.state.shows
  if(shows){
    this.setState({
    show:true,
  })
  }
  
}
  render() {
    const { edit, show } = this.state;
    return (
      
      <div className="body">
        <div className="asosiy">
          <div className="iconS">
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






            <Modal show={show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bu test sizning qaysi sohaga qiziqishingiz borligini aniqlab beradi</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
            
          </Button>
         <Link to='/test'> <Button variant="primary">
            Testni boshlash
            
          </Button></Link>
        </Modal.Footer>
      </Modal>






            <div className="dbtn">
              {/* <Link to="/test"> */}
              <Button
                onClick={this.enter}
                variant="outline-primary"
                className="btn"
              >
                Testni boshlash
              </Button>
             
              {/* </Link> */}
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
