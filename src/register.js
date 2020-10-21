import React from "react";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBInputSelect
} from "mdbreact";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import { Link } from "react-router-dom";

import "./style.css";
// import "./styles/mainComponent.css";

export class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      dob: "",
      profession: "",
      locality: "",
      noOfGuests: "",
      addressone: "",
      addresstwo: ""
    };
  }

  componentWillMount() {
    if (this.props.locationName) {
      console.log(this.props.locationName);
    }
  }

  handleClear = () => {
    this.setState({
      name: "",
      age: "",
      dob: null,
      profession: "",
      locality: "",
      noOfGuests: "",
      addressone: "",
      addresstwo: ""
    });
  };

  submitHandler = event => {
    console.log("kyaaa ree !!");
    event.preventDefault();
    event.target.className += " was-validated";
    this.handleSubmitResponse();
  };

  handleSubmitResponse = () => {
    fetch("https://my.api.mockaroo.com/users.json?key=6e758200&__method=POST")
      .then(response => response.json())
      .then(response => {
        console.log(response);
        NotificationManager.success("Your Response Submitted Successfully !!");
        this.handleClear();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <MDBContainer size="md" style={{ marginTop: "10px" }}>
       
        <MDBRow size="sm">
          <MDBCol size="sm" md="12">
            <MDBCard>
              <MDBCardBody size="sm">
                <form onSubmit={this.submitHandler}>
                  <p className="h5 text-center mb-4">Register</p>
                  <div className="grey-text">
                    <MDBRow>
                      <MDBCol md="6">
                        <MDBInput
                          label="Name"
                          name="name"
                          group
                          type="text"
                          validate
                          error="wrong"
                          success="right"
                          required
                          value={this.state.name}
                          onChange={e =>
                            this.setState({ name: e.target.value })
                          }
                        />
                      </MDBCol>
                      <MDBCol md="6">
                        <MDBInput
                          label="Age"
                          name="age"
                          required
                          min={0}
                          max={100}
                          group
                          type="number"
                          validate
                          error="wrong"
                          success="right"
                          value={this.state.age}
                          onChange={e => this.setState({ age: e.target.value })}
                        />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="6">
                        <MDBInput
                          label="D.O.B"
                          name="dob"
                          group
                          type="date"
                          validate
                          error="wrong"
                          success="right"
                          value={this.state.dob}
                          onChange={e => this.setState({ dob: e.target.value })}
                        />
                      </MDBCol>
                      <MDBCol md="6">
                        <MDBInput
                          label="Profession"
                          name="profession"
                          group
                          type="text"
                          validate
                          error="wrong"
                          success="right"
                          value={this.state.profession}
                          onChange={e =>
                            this.setState({ profession: e.target.value })
                          }
                        />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="6">
                        <MDBInput
                          label="Locality"
                          name="locality"
                          group
                          type="text"
                          validate
                          error="wrong"
                          success="right"
                          value={this.state.locality}
                          onChange={e =>
                            this.setState({ locality: e.target.value })
                          }
                        />
                      </MDBCol>
                      <MDBCol md="6">
                        <MDBInput
                          label="Number Of Guests"
                          name="noOfGuests"
                          group
                          type="number"
                          max="2"
                          min="0"
                          validate
                          error="wrong"
                          success="right"
                          value={this.state.noOfGuests}
                          onChange={e =>
                            this.setState({ noOfGuests: e.target.value })
                          }
                        />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="6">
                        <MDBInput
                          label="Address Line 1"
                          name="addressone"
                          group
                          type="text"
                          maxlength="50"
                          validate
                          error="wrong"
                          success="right"
                          value={this.state.addressone}
                          onChange={e =>
                            this.setState({ addressone: e.target.value })
                          }
                        />
                      </MDBCol>
                      <MDBCol md="6">
                        <MDBInput
                          label="Address Line 2"
                          name="addresstwo"
                          group
                          type="text"
                          validate
                          error="wrong"
                          success="right"
                          maxlength="50"
                          value={this.state.addresstwo}
                          onChange={e =>
                            this.setState({ addresstwo: e.target.value })
                          }
                        />
                      </MDBCol>
                    </MDBRow>
                  </div>
                </form>
                <div className="text-right">
                  <MDBBtn
                    size="sm"
                    rounded
                    color="primary"
                    type="submit"
                    onClick={e => this.submitHandler(e)}
                  >
                    Save
                  </MDBBtn>
                  <MDBBtn
                    color="secondary "
                    size="sm"
                    onClick={this.handleClear}
                  >
                    Clear
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <NotificationContainer />
      </MDBContainer>
    );
  }
}

export default RegistrationForm;
