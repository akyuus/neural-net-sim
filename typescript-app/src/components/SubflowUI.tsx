
import {generateData2} from "./NU_Generation";
import Gif from "../icons/Gif.gif";
import "../styles.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ComposedChart,
  Legend,
  Bar,
  ResponsiveContainer,
  Label,
  BarChart
} from "recharts";
import React, { useState } from "react";
import Navigation from "./Navigation";

import { generateData } from "./dataset";
const data = generateData();
const data2 = generateData();
const data3 = generateData();
const data4 = generateData2();

export default function SubflowUI() {
  const [inferenceGPU, setInferenceGPU] = useState(data[1]);
  const [inferenceCPU, setInferenceCPU] = useState(data[3]);
  const [trainingGPU, setTrainingGPU] = useState(data[5]);
  const inference = data4[0];
  const training = data4[1];

  // Input: Event Object
  // Function: To switch the data of the graphs once a different DNN is chosen using the target.id
  // Output: None

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case "AlexNet": {
        setInferenceGPU(data[1]);
        setInferenceCPU(data[3]);
        setTrainingGPU(data[5]);
        break;
      }
      case "KWS": {
        setInferenceGPU(data2[1]);
        setInferenceCPU(data2[3]);
        setTrainingGPU(data2[5]);
        break;
      }
      case "LeNet": {
        setInferenceGPU(data3[1]);
        setInferenceCPU(data3[3]);
        setTrainingGPU(data3[5]);
        break;
      }
      default: {
        break;
      }
    }
  };

  return (
    <div>
      <Navigation />
      <section className="section" id="title_section">
        <h1 className="has-text-centered title is-1"> SUBFLOW UI </h1>
      </section>
      <section className="section">
        <div className="container">
          <div className="box">
            <p className="is-large">
              The SubFlow Neural Network method, developed by Seulki Lee and
              Shahriar Nirjon, is a method that allows for Deep Neural Netorks
              (DNN) to respond to scenarios with limited reaction time. This
              method optimizes a network by removing certain nodes and creating
              subnetworks. The SubFlow UI page is a comparison tool to compare
              the results between non-SubFlow networks and a SubFlow network.
              The following charts represent various measurements of accuracy
              and network utilization. Further information can be found in Lee
              and Nirjon's paper.
            </p>
          </div>

          <div className="columns">
            <div className="column">
              <h1 className="title">DNN Models</h1>
              <div className="box">
                <label className="radio">
                  <input
                    type="radio"
                    name="DNN"
                    id="LeNet"
                    onChange={handleChange}
                  ></input>{" "}
                  Le-Net5 (MNIST)
                </label>
                <br></br>
                <label className="radio">
                  <input
                    type="radio"
                    onChange={handleChange}
                    name="DNN"
                    id="AlexNet"
                    defaultChecked
                  ></input>{" "}
                  AlexNet (CIFAR-10)
                </label>
                <br></br>
                <label className="radio">
                  <input
                    type="radio"
                    name="DNN"
                    id="KWS"
                    onChange={handleChange}
                  ></input>{" "}
                  KWS (GSC)
                </label>
              </div>
            </div>
            <div className="column">
              <h1 className="title">Image Recognition</h1>
              <div className="box">
                <figure className="image">
                  <img src={Gif} />
                </figure>
              </div>
            </div>
            <br></br>
          </div>
          <div className="row">
            <div className="column">
              <h2 className="subtitle is-2">Inference (GPU)</h2>
              {/* The box_column id removes extra whitespace*/}
              <div className="box" id="box_column">
                <div id="graph">
                  {/* The vertlabel id allows for a vertical y-Axis label and proper placement*/}
                  <h4 className="subtitle is-4" id="vertlabel">
                    {" "}
                    Accuracy (%){" "}
                  </h4>
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart
                      width={730}
                      height={250}
                      data={inferenceGPU}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        domain={[0, "auto"]}
                        minTickGap={10}
                        interval={"preserveStartEnd"}
                      />
                      <YAxis dataKey="SubFlow" />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="SubFlow" stroke="#8884d8" />
                      <Line type="monotone" dataKey="Non-SubFlow" stroke="#82ca9d" />
                    </LineChart>
                  </ResponsiveContainer>
                  <h4 className="subtitle is-4 has-text-centered">
                    Deadline (ms){" "}
                  </h4>
                </div>
              </div>
            </div>
            <div className="column">
              <h2 className="subtitle is-2">Inference (CPU)</h2>
              <div className="box" id="box_column">
                <div id="graph">
                  <h4 className="subtitle is-4" id="vertlabel">
                    {" "}
                    Accuracy (%){" "}
                  </h4>
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart
                      width={730}
                      height={250}
                      data={inferenceCPU}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        domain={[0, "auto"]}
                        minTickGap={10}
                        interval={"preserveStartEnd"}
                      />
                      <YAxis dataKey="SubFlow" />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="SubFlow" stroke="#8884d8" />
                      <Line type="monotone" dataKey="Non-SubFlow" stroke="#82ca9d" />
                    </LineChart>
                  </ResponsiveContainer>
                  <h4 className="subtitle is-4 has-text-centered">
                    Deadline (ms){" "}
                  </h4>
                </div>
              </div>
            </div>
            <div className="column">
              <h2 className="subtitle is-2">Training (GPU)</h2>{" "}
              <div className="box" id="box_column">
                <div id="graph">
                  <h4 className="subtitle is-4" id="vertlabel">
                    {" "}
                    Accuracy (%){" "}
                  </h4>
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart
                      width={730}
                      height={250}
                      data={trainingGPU}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        domain={[0, "auto"]}
                        minTickGap={10}
                        interval={"preserveStartEnd"}
                      />
                      <YAxis dataKey="SubFlow" />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="SubFlow" stroke="#8884d8" />
                      <Line type="monotone" dataKey="Non-SubFlow" stroke="#82ca9d" />
                    </LineChart>
                  </ResponsiveContainer>
                  <h4 className="subtitle is-4 has-text-centered">
                    Deadline (ms){" "}
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <h2 className="subtitle is-2">Inference</h2>
              <div className="box">
                <ResponsiveContainer width="100%" height={500}>
                  <ComposedChart
                    width={500}
                    height={500}
                    data={inference}
                    margin={{
                      top: 20,
                      right: 20,
                      bottom: 20,
                      left: 20,
                    }}
                  >
                    
                    <XAxis dataKey="network_utilization" type="category" ticks={[0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0]}>
                      </XAxis>
                    <YAxis yAxisId="left" type="number" domain={[0, 600]} ticks={[0,100,200,300,400,500,600]}>
                    <Label value = {'Inference Time (µs)'} angle ={90} position = 'insideTopLeft' fontSize={26} fontFamily={"Arial"} color={"#4a4a4a"}/>
                    </YAxis>
                    
                    <YAxis yAxisId="right" type="number" domain={[0.80, 0.90]} ticks={[0.8,0.82,0.84,0.86,0.88,0.9]} orientation="right">
                    <Label value = {'Accuracy'} angle ={90} position = 'insideRight' fontSize={26} fontFamily={"Arial"} color={"#4a4a4a"}/>
                      </YAxis>
                    <Tooltip />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Legend />
                   
                    <Bar yAxisId="left" dataKey="GPU (L)" barSize={20} fill="#413ea0" />
                    <Bar yAxisId="left" dataKey="CPU (L)" barSize={20} fill="#ff7300" />
                    <Line yAxisId="right" dataKey="Accuracy (R)"/>
                  </ComposedChart>
                </ResponsiveContainer>
                <h4 className="subtitle is-4 has-text-centered">
                    Network Utilization (N) {" "}
                  </h4>
              </div>
            </div>
            <div className="column">
              <h2 className="subtitle is-2">Training</h2>
              <div className="box">
              <ResponsiveContainer width="100%" height={500}>
                  <BarChart
                    width={500}
                    height={500}
                    data={training}
                    margin={{
                      top: 20,
                      right: 20,
                      bottom: 20,
                      left: 20,
                    }}
                  >
                    
                    <XAxis dataKey="network_utilization" type="category" ticks={[0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0]}>
                      </XAxis>
                      <YAxis  type="number" domain={[0, 70]} ticks={[0,10,20,30,40,50,60,70]}>
                    <Label value = {'Training Time (ms)'} angle ={90} position = 'insideTopLeft' fontSize={26} fontFamily={"Arial"} color={"#4a4a4a"}/>
                    </YAxis>
                    
                    <Tooltip />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Legend />
                   
                    <Bar dataKey="GPU (single train-iteration)" barSize={20} fill="#413ea0" />
                  </BarChart>
                </ResponsiveContainer>
                <h4 className="subtitle is-4 has-text-centered">
                    Network Utilization (N){" "}
                  </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
