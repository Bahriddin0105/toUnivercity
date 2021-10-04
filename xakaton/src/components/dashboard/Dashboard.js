import React, { Component } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../img/logoone.png";
import "./dashboard.css";
export default class Dashboard extends Component {
  state = {
    edit: false,
    show: false,
  };
  handleClose = () => {
    this.setState({
      show: false,
    });
  };
  enter = () => {
    var ucername = document.querySelector("#floatingInputUsername").value;
    var fullname = document.querySelector("#floatingInputFullname").value;
    var email = document.querySelector("#floatingInputEmail").value;
    if (ucername !== "") {
      if (fullname !== "") {
        if (email !== "") {
          this.setState({
            show: true,
            username: ucername,
          });
        }
      }
    }
  };

  render() {
    const { show, username } = this.state;
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
              <Modal.Header>
                <Modal.Title>
                  <div className="header">
                    {" "}
                    Salom <span className="user">{username}</span>
                  </div>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="bodyTitle">
                  {" "}
                  Bu test sizning qaysi sohaga qiziqishingiz borligini aniqlab
                  beradi. Testni boshlashga tayyormisiz?
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  className="but1"
                  variant="secondary"
                  onClick={this.handleClose}
                >
                  Yo'q
                </Button>
                <Link to="/test">
                  {" "}
                  <Button className="but2" variant="primary">
                    Ha
                  </Button>
                </Link>
              </Modal.Footer>
            </Modal>

            <div className="dbtn">
              <Button
                onClick={this.enter}
                variant="outline-primary"
                className="btn"
              >
                Testni boshlash
              </Button>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
