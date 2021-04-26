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
} from "recharts";
import React, { useState } from "react";
import Navigation from "./Navigation";

import { data } from "./Data";
import { data2 } from "./Data";
import { data3 } from "./Data";

export default function SubflowUI() {
  // Set AlexNet as the default vesion
  const [inferenceGPU, setInferenceGPU] = useState(data[1]);
  const [inferenceCPU, setInferenceCPU] = useState(data[3]);
  const [trainingGPU, setTrainingGPU] = useState(data[5]);
  const [inference, setInference] = useState(data[0]);
  const [training, setTraining] = useState(data[4]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case "AlexNet": {
        setInferenceGPU(data[1]);
        setInferenceCPU(data[3]);
        setTrainingGPU(data[5]);
        setInference(data[0]);
        setTraining(data[4]);
        break;
      }
      case "KWS": {
        setInferenceGPU(data2[1]);
        setInferenceCPU(data2[3]);
        setTrainingGPU(data2[5]);
        setInference(data2[0]);
        setTraining(data2[4]);
        break;
      }
      case "LeNet": {
        setInferenceGPU(data3[1]);
        setInferenceCPU(data3[3]);
        setTrainingGPU(data3[5]);
        setInference(data3[0]);
        setTraining(data3[4]);
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
      <section className="section">
        <div className="container">
          <h1 className="title">DNN Models</h1>
          <div className="columns">
            <div className="column">
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
              <div className="box">Image Here</div>
            </div>
            <br></br>
          </div>
          <div className="row">
            <div className="column">
            <h2 className="subtitle is-2">Inference (GPU)</h2>
            <div className="box" id="box_column">
            <div id ="graph">
                <h4 className="subtitle is-4" id="vertlabel"> Accuracy (%) </h4>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart
                    width={730}
                    height={250}
                    data={inferenceGPU}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis  domain = {[0, "auto"]} minTickGap={10} interval={"preserveStartEnd"}/>
                    <YAxis dataKey="acc"/>
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="acc" stroke="#8884d8" />
                    <Line type="monotone" dataKey="acc_ns" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
                <h4 className="subtitle is-4 has-text-centered">Deadline (ms) </h4>
              </div>
            </div>
            </div>
            <div className="column">

            <h2 className="subtitle is-2">Inference (CPU)</h2>
            <div className="box" id="box_column">
            <div id ="graph">
                <h4 className="subtitle is-4" id="vertlabel"> Accuracy (%) </h4>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart
                    width={730}
                    height={250}
                    data={inferenceCPU}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis  domain = {[0, "auto"]} minTickGap={10} interval={"preserveStartEnd"}/>
                    <YAxis dataKey="acc"/>
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="acc" stroke="#8884d8" />
                    <Line type="monotone" dataKey="acc_ns" stroke="#82ca9d" />
                  </LineChart>

                </ResponsiveContainer>
                <h4 className="subtitle is-4 has-text-centered">Deadline (ms) </h4>
              </div>
            </div>
            </div>
            <div className="column">

              <h2 className="subtitle is-2">Training (GPU)</h2>{" "}
              <div className="box" id="box_column">
            <div id ="graph">
                <h4 className="subtitle is-4" id="vertlabel"> Accuracy (%) </h4>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart
                    width={730}
                    height={250}
                    data={trainingGPU}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis  domain = {[0, "auto"]} minTickGap={10} interval={"preserveStartEnd"}/>
                    <YAxis dataKey="acc"/>
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="acc" stroke="#8884d8" />
                    <Line type="monotone" dataKey="acc_ns" stroke="#82ca9d" />
                  </LineChart>

                </ResponsiveContainer>
                <h4 className="subtitle is-4 has-text-centered">Deadline (ms) </h4>
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
                    width={400}
                    height={400}
                    data={inference}
                    margin={{
                      top: 20,
                      right: 20,
                      bottom: 20,
                      left: 20,
                    }}
                  >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="exec" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="exec_ns" stroke="#ff7300" />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="column">
              <h2 className="subtitle is-2">Training</h2>
              <div className="box">
                <ResponsiveContainer width="100%" height={500}>
                  <ComposedChart
                    width={400}
                    height={400}
                    data={training}
                    margin={{
                      top: 20,
                      right: 20,
                      bottom: 20,
                      left: 20,
                    }}
                  >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="exec" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="exec_ns" stroke="#ff7300" />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
