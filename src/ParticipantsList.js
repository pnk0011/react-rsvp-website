import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { Link, useHistory } from "react-router-dom";
import { MDBContainer } from "mdbreact";

const ParticipantsList = () => {
  const [dataList, setdataList] = useState([]);

  useEffect(() => {
    fetch("https://my.api.mockaroo.com/StudentDetails.json?key=6e758200")
      .then(response => response.json())
      .then(data => {
        console.log("This is your data", data);
        setdataList(data);
      });
  }, []);

  if (dataList.length == 0) {
    return (
      <div class="d-flex justify-content-center text-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <MDBContainer size="md" style={{ marginTop: "10px" }}>
        <table
          id="dtBasicExample"
          class="table table-striped table-bordered table-sm"
          cellspacing="0"
          width="100%"
        >
          <thead>
            <tr>
              <th class="th-sm text-center">Name</th>
              <th class="th-sm text-center">Locality</th>
            </tr>
          </thead>
          <tbody>
            {dataList.map((item, index) => (
              <tr key={index}>
                <td>
                  <Link
                    to={{
                      pathname: "participantdata",
                      data: item
                    }}
                  >
                    {item.Name}
                  </Link>
                </td>
                <td>{item.Locality}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </MDBContainer>
    </>
  );
};

export default ParticipantsList;
