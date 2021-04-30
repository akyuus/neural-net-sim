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

import Navigation from './Navigation';
import fisherdata from './fisherdata.json';

import React, { useState } from "react";

import { data } from "./Data";
import { data2 } from "./Data";
import { data3 } from "./Data";
// import { data4 } from "./Data";
// import { data5 } from "./Data";

  const data1 = [{
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

export default function NeuralWeightUI() {
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
        <div>
            <Navigation />
            <section className="section">
                <div className="container">
                    <h1 className="title">
                        Neural Network Models
                    </h1>
                    <div className="row">
                        <div className="col">
                            <h3>Main Memory</h3>
                            <label htmlFor="main-pages">Pages:</label>{" "}
                            <input type="number" id="main-pages" name="main-pages" min="0" max="20"/>
                        </div>
                        <div className="col">
                            <h3>DNN 1</h3>
                            <label htmlFor="main-pages">Pages:</label>{" "}
                            <input type="number" id="main-pages" name="main-pages" min="0" max="20"/>
                        </div>
                        <div className="col">
                            <h3>DNN 2</h3>
                            <label htmlFor="main-pages">Pages:</label>{" "}
                            <input type="number" id="main-pages" name="main-pages" min="0" max="20"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <div className="row">
                                <label className="checkbox">
                                    <input type="checkbox" />{" "}
                                    ResNet
                                </label>
                            </div>
                            <div className="row">
                                <label className="checkbox">
                                    <input type="checkbox" />{" "}
                                    IM2TXT
                                </label>
                            </div>
                            <div className="row">
                                <label className="checkbox">
                                    <input type="checkbox" />{" "}
                                    Inception
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h3 className="subtitle is-3">Main Graph</h3>
                            <div className="box">
                                <ResponsiveContainer width='100%' height={500}>
                                    <LineChart
                                        width={400}
                                        height={400}
                                        data={data1}
                                        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                                    >
                                        <XAxis dataKey="name" />
                                        <Tooltip />
                                        <CartesianGrid stroke="#f5f5f5" />
                                        <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
                                        <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <div className="col">
                            <h2 className="subtitle is-2">Fisher Data</h2>
                            <div className="box">
                                <LineChart
                                width={600}
                                height={400}
                                data={fisherdata}
                                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                                >
                                <XAxis dataKey="name" />
                                <Tooltip />
                                <CartesianGrid stroke="#f5f5f5" />
                                <Line type="monotone" dataKey="fisher" dot={false} stroke="#ff7300" yAxisId={0} />
                                <Line type="monotone" dataKey="smooth_fisher" dot={false} stroke="#387908" yAxisId={1} />
                                </LineChart>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col">
                            <div className="box">
                                <ResponsiveContainer width='100%' height={500}>
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
                            <p className="subtitle" style={{ textAlign: 'center'}}>Importance of Individual Weight Parameter to the Inference Accuracy Measured by Fisher Information</p>
                        </div>
                        <div className="col">
                            <div className="box">
                                <ResponsiveContainer width='100%' height={500}>
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
                            <p className="subtitle" style={{ textAlign: 'center' }}>Disparity in Weights in the Memory Blocks of Two DNNs Having Similar Architecture and Similar Tasks, Similar Architecture but Different Taks, and Different Architecturee and Different Tasks</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}