import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRederect: false,
      fName: '',
      fEmail: '',
      fPhone: '',
      fMes: ''
    }
  }
  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name] : value
    });
  }
  submitButton = (event) => {
    event.preventDefault();
    this.setState({
      isRederect: true
    });
  }
  noidung = () => {
    var noidung = "";
    noidung += "ten cua no la" + this.state.fName;
    noidung += "email cua no la" + this.state.fEmail;
    noidung += "phone cua no la" + this.state.fPhone;
    noidung += "mess cua no la" + this.state.fMes;
    return noidung;
  }
    render() {
      if(this.state.isRederect)
      {
        console.log(this.noidung());
        return <Redirect to="/tin"/>
      }
        return (
            <div>
                  <section className="page-section" id="contact">
            <div className="container">
              {/* Contact Section Heading*/}
              {/* Contact Section Form*/}
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.*/}
                  <form id="contactForm" name="sentMessage" noValidate="novalidate">
                    <div className="control-group">
                      <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Name</label>
                        <input className="form-control" id="name" name="fName" onChange={(event)=>this.isChange(event)}  type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Email Address</label>
                        <input className="form-control" id="email"  name="fEmail" onChange={(event)=>this.isChange(event)} type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Phone Number</label>
                        <input className="form-control" id="phone" name="fPhone" onChange={(event)=>this.isChange(event)} type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Message</label>
                        <textarea className="form-control" id="message" name="fMes" onChange={(event)=>this.isChange(event)} rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <br />
                    <div id="success" />
                    <div className="form-group"><button className="btn btn-primary btn-xl" id="sendMessageButton" type="submit" onClick={(event)=>this.submitButton(event)}>Send</button></div>
                  </form>
                </div>
              </div>
            </div>
          </section>

            </div>
        );
    }
}
 
export default Contact;