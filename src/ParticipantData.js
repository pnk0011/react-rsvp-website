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
  MDBModalBody
} from "mdbreact";
import { Link } from "react-router-dom";

// import "./styles/homeComponent.css";
// import "./styles/mainComponent.css";

export class ParticipantData extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    if (this.props.location.data) {
      console.log("is every thing is clear !!" + this.props.location.data);
    }

    if (this.props.location.data == undefined) {
      return null;
    }
  }

  render() {
    return (
      <MDBContainer size="md" style={{ marginTop: "10px" }}>
        <MDBRow size="sm">
          <MDBCol size="sm" md="12">
            <MDBCard>
              <MDBCardBody size="sm">
                <form>
                  <p className="h5 text-center mb-4">Participant Record</p>
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
                          disabled
                          value={this.props.location.data.Name}
                        />
                      </MDBCol>
                      <MDBCol md="6">
                        <MDBInput
                          label="Age"
                          name="age"
                          group
                          type="text"
                          validate
                          error="wrong"
                          success="right"
                          disabled
                          value={this.props.location.data.Age}
                        />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="6">
                        <MDBInput
                          label="D.O.B"
                          name="dob"
                          group
                          type="text"
                          validate
                          error="wrong"
                          success="right"
                          disabled
                          value={this.props.location.data.DOB}
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
                          disabled
                          value={this.props.location.data.Profession}
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
                          disabled
                          value={this.props.location.data.Locality}
                        />
                      </MDBCol>
                      <MDBCol md="6">
                        <MDBInput
                          label="Number Of Guests"
                          name="noOfGuests"
                          group
                          type="text"
                          validate
                          error="wrong"
                          success="right"
                          disabled
                          value={this.props.location.data.NumberOfGuests}
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
                          validate
                          error="wrong"
                          success="right"
                          disabled
                          value={this.props.location.data.AddressOne}
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
                          disabled
                          value={this.props.location.data.AddressTwo}
                        />
                      </MDBCol>
                    </MDBRow>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default ParticipantData;
