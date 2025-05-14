import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import "./modalclone.css"; // Import the CSS file for component styling
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypingEffect from "./TypingEffect";
import SVGMagnify from "./SVGMagnify";
import Button from 'react-bootstrap/Button';
const ModalClone = () => {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        type: "line",
        height: "100%",
        foreColor: "#333",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false, // This line hides the toolbar
        },
      },
   
      colors: ["#F4511E", "#2E93fA"],
      stroke: {
        curve: "smooth",
        width: 3,
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      xaxis: {
        type: "category",
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        title: {
          text: "Months of loads tracking",
          style: {
              color: '#999',
              fontWeight: 'normal',
              fontSize: '13px'
          }
      },
      },
      yaxis: {
        labels: {
          offsetX: -10,
          offsetY: 5,
        },
      },
      tooltip: {
        x: {
          format: "MMM",
        },
      },
      legend: {
        show: false,
      },
      toolbar: {
        show: false,
      },
      fill: {
        type: "solid",
        opacity: 0.7,
      },
    },
    series: [
      {
        name: "Total Loads Available",
        data: [20, 40, 30, 45, 35, 55, 40, 50, 60, 55, 45, 60],
      },
      {
        name: "Highest Paying Loads",
        data: [10, 30, 20, 35, 25, 45, 35, 40, 50, 45, 40, 50],
      },
    ],
  });

  const [chartKey, setChartKey] = useState(0);

  useEffect(() => {
    const newData = [
      {
        name: "Total Loads Available",
        data: [20, 40, 30, 45, 35, 55, 40, 50, 60, 55, 45, 60],
      },
      {
        name: "Highest Paying Loads",
        data: [10, 30, 20, 35, 25, 45, 35, 40, 50, 45, 40, 50],
      },
    ];

    setChartData((prevChartData) => ({
      ...prevChartData,
      series: newData,
    }));
    setChartKey((prevKey) => prevKey + 1);
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={12} md={7} className="mb-3 mb-md-0">
          <div className="modal-clone">
            <div className="modal-content">
              <TypingEffect />
              <h2 className="modal-heading"> Get more</h2>
              <h2 className="modal-heading">
                {" "}
                out of each <b> mile</b> <b></b>
                with Spotter
              </h2>

              <div className="modal-content">
                <p className="small-text">
                  AI technology that gets you hot loads
                </p>
              <Button variant="secondary" href="https://spotter.ai/" id="button-more"> Learn More</Button>
              </div>
              <div className="chart-container">
                <ReactApexChart
                  key={chartKey}
                  options={chartData.options}
                  series={chartData.series}
                  type="line"
                  height={300}
                  width="100%"
                />
              </div>
              <br></br>
              <br></br>
              <br></br>
            </div>
          </div>
        </Col>
        <Col xs={12} md={5}>
          <Row>
            <div className="modal-clone">
              <div className="modal-content">
                <p>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16"
                    color="#f35b22"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                  <b>Any browser, any device.</b>
                </p>
                <p className="small-text">Available on:Appstore | Google</p>
              </div>
            </div>
          </Row>
          <br></br>
          <Row className="flex-grow-1">
            <div className="modal-clone">
              <div className="modal-content">
                <div className="svg-container">
                  <SVGMagnify />
                </div>
                <br></br>
                <p className="small-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-radar"
                    viewBox="0 0 16 16"
                    color="#f35b22"
                  >
                    <path d="M6.634 1.135A7 7 0 0 1 15 8a.5.5 0 0 1-1 0 6 6 0 1 0-6.5 5.98v-1.005A5 5 0 1 1 13 8a.5.5 0 0 1-1 0 4 4 0 1 0-4.5 3.969v-1.011A2.999 2.999 0 1 1 11 8a.5.5 0 0 1-1 0 2 2 0 1 0-2.5 1.936v-1.07a1 1 0 1 1 1 0V15.5a.5.5 0 0 1-1 0v-.518a7 7 0 0 1-.866-13.847" />
                  </svg>
                  <b></b>
                  <i class="bi bi-radar"></i>
                  Identify all anonymous loads.{" "}
                </p>
              </div>
              <br></br>
            </div>
          </Row>
          <br></br>
          <Row>
            <div className="modal-clone">
              <div className="modal-content">
                <h3 className="small-heading">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-question-octagon"
                    viewBox="0 0 16 16"
                    color="#f35b22"
                    margin="5"
                  >
                    <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1z" />
                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94" />
                  </svg>
                 <b>  What Can Spotter Do for You?</b>
                </h3>
                <p className="small-text">
                  {" "}
                  Set your availability times. Choose preferred markets and
                  avoid bad ones. Get matched with top load offers.{" "}
                </p>
              </div>
            </div>
          </Row>
          <br></br>
        </Col>
      </Row>
    </Container>
  );
};

export default ModalClone;
