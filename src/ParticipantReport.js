import React from "react";
import PropTypes from "prop-types";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
  FormSelect
} from "shards-react";

import Chart from "./chart";

class ParticipantsReport extends React.Component {
  constructor(props) {
    super(props);

    this.canvasBarRef = React.createRef();
    this.canvasPiRef = React.createRef();
  }

  async componentDidMount() {
    const graphData = {
      studentCount: 0,
      employedCount: 0,
      agebelow18: 0,
      agebelow25: 0,
      ageabove25: 0
    };

    await fetch("https://my.api.mockaroo.com/StudentDetails.json?key=6e758200")
      .then(response => response.json())
      .then(data => {
        const dataList = data;
        console.log("This is your data", data.length);
        for (var i = 0; i < data.length; i++) {
          if (data[i].Profession == "Student") {
            graphData.studentCount += 1;
            console.log("kya hua tera wada");
          } else {
            graphData.employedCount += 1;
          }

          if (data[i].Age < 18) {
            graphData.agebelow18 += 1;
          } else if (data[i].Age < 25 && data[i].Age > 17) {
            graphData.agebelow25 += 1;
          } else {
            graphData.ageabove25 += 1;
          }
         
        }
      });

   

    const ParticipantsReport = new Chart(this.canvasBarRef.current, {
      type: "bar",
      data: {
        labels: [
          "Participant between age 13-18",
          "Participant between age 18-25",
          "Participant Age 25+"
        ],
        datasets: [
          {
            label: "Age Group",
            fill: "start",
            data: [
              graphData.agebelow18,
              graphData.agebelow25,
              graphData.ageabove25
            ],
            backgroundColor: "rgba(0,123,255,1)",
            borderColor: "rgba(0,123,255,1)",
            pointBackgroundColor: "#ffffff",
            pointHoverBackgroundColor: "rgb(0,123,255)",
            borderWidth: 1.5,
            pointRadius: 0,
            pointHoverRadius: 3
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                suggestedMax: 10,
                suggestedMin: 0
              }
            }
          ]
        }
      }
    });

    const PiechartConfig = {
      type: "pie",

      data: {
        datasets: [
          {
            hoverBorderColor: "#ffffff",
            data: [graphData.studentCount, graphData.employedCount],
            backgroundColor: [
              "rgba(0,123,255,0.7)",
              "rgba(23,198,113,0.7)",
              "rgba(255,65,105,0.7)"
            ]
          }
        ],
        labels: ["Student", "Employed"],
        options: {
          ...{
            legend: {
              position: "bottom",
              labels: {
                padding: 25,
                boxWidth: 20
              }
            },
            cutoutPercentage: 0,
            tooltips: {
              custom: false,
              mode: "index",
              position: "nearest"
            }
          },
          ...this.props.chartOptions
        }
      }
    };
    new Chart(this.canvasPiRef.current, PiechartConfig);
  }

  render() {
    return (
      <>
        <CardBody style={{ marginLeft: "50px" }}>
          <Row>
            <Col>
              <Card small>
                <canvas
                  height="220"
                  ref={this.canvasBarRef}
                 
                />
              </Card>
            </Col>
          </Row>

          <Row style={{ marginTop: "5%" }}>
            <Col>
              <Card small className="h-100">
                <canvas
                  height="220"
                  ref={this.canvasPiRef}
                 
                />
              </Card>
            </Col>
          </Row>
        </CardBody>
      </>
    );
  }
}

ParticipantsReport.propTypes = {
  title: PropTypes.string,

  chartData: PropTypes.object,

  chartOptions: PropTypes.object
};

ParticipantsReport.defaultProps = {};

export default ParticipantsReport;
