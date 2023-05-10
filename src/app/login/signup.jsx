"use client";
import React from "react";
import LoginLogo from "../../assets/img/signupLogo.png";
import Form from "react-bootstrap/Form";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Link from "next/link";

function Signup() {
  return (
    <div className="container">
      <div className="col-md-9 m-auto">
        <div className="row">
          <div className="col-md-4 padd logoSections">
            <div className="logoSection">
              <div className="left">
                <Link href="/" className="btn btn-group back">Back</Link>
                <div className="loginLogo">
                  <img src={LoginLogo.src} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 padd">
            <div className="formSection">
              <Tabs
                defaultActiveKey="login"
                id="uncontrolled-tab-example"
                className="mb-3 pt-3"
              >
                <Tab eventKey="login" title="Login">
                  <div className="tabSection">
                    <p>
                      If you are already registered to MyMarket website, you can
                      login using the same details.
                    </p>
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control type="email" placeholder="Email" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control type="password" placeholder="Password" />
                        <div className="forgot">
                          <Link href="#">
                            <text>Forgotten your password?</text>
                          </Link>
                        </div>
                      </Form.Group>
                      <div className="submitBtn">
                        <button className="btn btn-group">Log In</button>
                      </div>
                    </Form>
                    <p className="note">
                      This site is protected by reCAPTCHA and the Google &nbsp;
                      <Link href="#">Privacy Policy</Link> and{" "}
                      <Link href="#">Terms of Service</Link> apply.
                    </p>
                  </div>
                </Tab>
                <Tab eventKey="register" title="Register">
                  <div className="tabSections">
                    <h5>Great news, we can deliver to your area.</h5>
                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <Form.Select aria-label="Default select example">
                          <option>MR</option>
                          <option value="1">Mr</option>
                          <option value="2">Mrs</option>
                          <option value="3">Miss</option>
                        </Form.Select>
                      </div>
                      <div className="col-md-8">
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control type="text" placeholder="First Name" />
                        </Form.Group>
                      </div>
                      <div className="col-md-12">
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control type="text" placeholder="Surname" />
                        </Form.Group>
                      </div>
                      <div className="col-md-12">
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control
                            type="email"
                            placeholder="Email address"
                          />
                        </Form.Group>
                      </div>
                      <div className="col-md-12">
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control
                            type="password"
                            placeholder="password (min. of 5 characters)"
                          />
                        </Form.Group>
                      </div>
                      <div className="col-md-5">
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control type="number" placeholder="Postcode" />
                        </Form.Group>
                      </div>
                      <div className="col-md-7">
                        <button className="btn btn-group register">
                          Register
                        </button>
                      </div>
                    </div>
                    <div className="registerSection">
                      <p>
                        Your privacy is extremely important to us so we want you
                        to know exactly what kind of information we collect
                        about you and how we use it. Click here to read our
                        privacy policy.
                      </p>
                      <p>
                        By submitting this form you agree to the terms and
                        conditions. This site is protected by reCAPTCHA and the
                        Google Privacy Policy and Terms of Service apply.
                      </p>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
