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
  ResponsiveContainer
} from "recharts";
import React, { useState } from "react";

import { data } from "./Data";
import { data2 } from "./Data";
import { data3 } from "./Data";
// import { data4 } from "./Data";
// import { data5 } from "./Data";

export default function SubflowUI() {
  // Set AlexNet as the default vesion
  const [inferenceGPU, setInferenceGPU] = useState(data[0]);
  const [inferenceCPU, setInferenceCPU] = useState(data[2]);
  const [trainingGPU, setTrainingGPU] = useState(data[4]);
  const [inference, setInference] = useState(data[1]);
  const [training, setTraining] = useState(data[5]);
  // const [topData, setTopData] = useState(data);
  // const [bottomData, setBottomData] = useState(data2);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case "AlexNet": {
        console.log("alex");
        // setTopData(data);
        // setBottomData(data2);
        setInferenceGPU(data[0]);
        setInferenceCPU(data[2]);
        setTrainingGPU(data[4]);
        setInference(data[1]);
        setTraining(data[5]);
        break;
      }
      case "KWS": {
        console.log("KWS");
        // setTopData(data3);
        // setBottomData(data4);
        setInferenceGPU(data2[0]);
        setInferenceCPU(data2[2]);
        setTrainingGPU(data2[4]);
        setInference(data2[1]);
        setTraining(data2[5]);
        break;
      }
      case "LeNet": {
        console.log("LeNet");
        // setTopData(data);
        // setBottomData(data5);
        setInferenceGPU(data3[0]);
        setInferenceCPU(data3[2]);
        setTrainingGPU(data3[4]);
        setInference(data3[1]);
        setTraining(data3[5]);
        break;
      }
      default: {
        break;
      }
    }
  };
console.log("inference");
console.log(inference);
console.log("inference CPU");
console.log(inferenceCPU);
  

  return (
    <body>
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
                  ></input>
                  Le-Net5 (MNIST)
                </label>
                <br></br>
                <label className="radio">
                  <input
                    type="radio"
                    onChange={handleChange}
                    name="DNN"
                    id="AlexNet"
                  ></input>
                  AlexNet (CIFAR-10)
                </label>
                <br></br>
                <label className="radio">
                  <input
                    type="radio"
                    name="DNN"
                    id="KWS"
                    onChange={handleChange}
                  ></input>
                  KWS (GSC)
                </label>
              </div>
            </div>

            <div className="column">
            <div className="box">Image Here</div>
          </div>
          <br></br>
          </div>

          <div className="columns">
            <div className="column">
            <h2 className="subtitle is-2">Inference (GPU)</h2>{" "}
            <div className="box">
            <ResponsiveContainer width={700} height={700}>
            <LineChart
                width={400}
                height={400}
                data={inferenceGPU}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <Tooltip />
                <CartesianGrid stroke="#f5f5f5" />
                <Line
                  type="monotone"
                  dataKey="exec"
                  stroke="#ff7300"
                  yAxisId={0}
                />
                <Line
                  type="monotone"
                  dataKey="exec_ns"
                  stroke="#387908"
                  yAxisId={1}
                />
              </LineChart>
              </ResponsiveContainer>
            </div>
            </div>

            <div className="column">
            <h2 className="subtitle is-2">Inference (CPU)</h2>{" "}
            <div className="box">
            <ResponsiveContainer width={700} height={700}>
              <LineChart
                width={400}
                height={400}
                data={inferenceCPU}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <Tooltip />
                <CartesianGrid stroke="#f5f5f5" />
                <Line
                  type="monotone"
                  dataKey="acc"
                  stroke="#ff7300"
                  yAxisId={0}
                />
                <Line
                  type="monotone"
                  dataKey="acc_ns"
                  stroke="#387908"
                  yAxisId={1}
                />
              </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="column">
            <h2 className="subtitle is-2">Training (GPU)</h2>{" "}
            <div className="box">
            <ResponsiveContainer width={700} height={700}>
              <LineChart
                width={400}
                height={400}
                data={trainingGPU}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <Tooltip />
                <CartesianGrid stroke="#f5f5f5" />
                <Line
                  type="monotone"
                  dataKey="exec"
                  stroke="#ff7300"
                  yAxisId={0}
                />
                <Line
                  type="monotone"
                  dataKey="exec_ns"
                  stroke="#387908"
                  yAxisId={1}
                />
              </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          </div>

          <div className="columns">
          <div className="column">
            <h2 className="subtitle is-2">Inference</h2>{" "}
            <div className="box">
            <ResponsiveContainer width={700} height={700}>
              <ComposedChart
                width={500}
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
                <XAxis dataKey="name" scale="band" />
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
            <h2 className="subtitle is-2">Training</h2>{" "}
            <div className="box">
            <ResponsiveContainer width={700} height={700}>
              <ComposedChart
                width={500}
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
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="acc" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="acc_ns" stroke="#ff7300" />
              </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        </div>
      </section>
    </body>
  );
}
