// import Gif from "../icons/Gif.gif";
import "./background-styles.css";
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

// import { generateData } from "./dataset";

const ig_max = 12;
const ic_max = 34;
const t_max = 18;

/**
 * 
 * @param {Number} f 
 * @returns {Number}
 */
 function roundTo4(f) {
    return Math.round(f*10000)/10000.0;
}

/**
 * 
 * @param {Number} min 
 * @param {Number} max 
 * @returns {Number}
 */
function getRandomArbitrary(min, max) {
    return roundTo4(Math.random() * (max - min) + min);
}

const generateData = () => {
    let inference_gpu_execution_data = [{}];
    let inference_gpu_accuracy_data = [{}];
    let inference_cpu_execution_data = [{}];
    let inference_cpu_accuracy_data = [{}];
    let training_execution_data = [{}];
    let training_accuracy_data = [{}];

    for(let i = 0; i < 100; i++) {
        let name = i+1;
        let ig_deadline = getRandomArbitrary(5, 15);
        let ic_deadline = getRandomArbitrary(20, 40);
        let t_deadline = getRandomArbitrary(5, 30);
        let ig_exec = (ig_deadline < ig_max) ? roundTo4(getRandomArbitrary(0.8, 0.99) * ig_deadline) : roundTo4(0.9999 * ig_deadline);
        let ig_exec_ns = (ig_deadline < ig_max) ? 0 : ig_max;
        let ic_exec = (ic_deadline < ic_max) ? roundTo4(getRandomArbitrary(0.8, 0.99) * ic_deadline) : roundTo4(0.9999 * ic_deadline);
        let ic_exec_ns = (ic_deadline < ic_max) ? 0 : ic_max;
        let t_exec = (t_deadline < t_max) ? roundTo4(getRandomArbitrary(0.8, 0.99) * t_deadline) : roundTo4(0.9999 * t_deadline);
        let t_exec_ns = (t_deadline < t_max) ? 0 : t_max;
        let ig_acc = (ig_deadline < ig_max && ig_deadline/ig_max < 0.83) ? roundTo4(1.2 * ig_deadline/ig_max) : 0.9999;
        let ig_acc_ns = (ig_deadline < ig_max) ? 0 : 0.9999;
        let ic_acc = (ic_deadline < ic_max && ic_deadline/ic_max < 0.83) ? roundTo4(1.2 * ic_deadline/ic_max) : 0.9999;
        let ic_acc_ns = (ic_deadline < ic_max) ? 0 : 0.9999;
        let t_acc = (t_deadline < t_max && t_deadline/t_max < 0.83) ? roundTo4(1.2 * t_deadline/t_max) : 0.9999;
        let t_acc_ns = (t_deadline < t_max) ? 0 : 0.9999;
    
        inference_gpu_execution_data.push({
            name: `${name}`, 
            deadline: ig_deadline, 
            exec: ig_exec, 
            exec_ns: ig_exec_ns,
        });
        inference_gpu_accuracy_data.push({
            name: `${name}`,
            SubFlow: ig_acc,
            "Non-SubFlow": ig_acc_ns,
            deadline: ig_deadline,
        });
        inference_cpu_execution_data.push({
            name: `${name}`, 
            deadline: ic_deadline, 
            exec: ic_exec, 
            exec_ns: ic_exec_ns,
        });
        inference_cpu_accuracy_data.push({
            name: `${name}`,
            SubFlow: ic_acc,
            "Non-SubFlow": ic_acc_ns,
            deadline: ic_deadline,
        });
        training_execution_data.push({
            name: `${name}`, 
            deadline: t_deadline, 
            exec: t_exec, 
            exec_ns: t_exec_ns,
        });
        training_accuracy_data.push({
            name: `${name}`,
            SubFlow: t_acc,
            "Non-SubFlow": t_acc_ns,
            deadline: t_deadline,
        });
    }

    return [inference_gpu_execution_data, inference_gpu_accuracy_data, inference_cpu_execution_data, 
    inference_cpu_accuracy_data, training_execution_data, training_accuracy_data ];
}

// import { generateData2 } from "./NU_Generation";

const generateData2 = () => {
  let inference_time = [{}];
  let training_time = [{}];

  for(let i = 1; i <= 10; i++) {
      let fraction = (i/10);
      let ig_time = 96 - 109.881*fraction + 1747.669*Math.pow(fraction,2) - 3357.809*Math.pow(fraction,3) + 2902.098*Math.pow(fraction,4) - 769.2308 *Math.pow(fraction,5);
      let ic_time = 541.734 * Math.pow(fraction, 0.2269899);
      let accuracy = 0.7784677 + 0.5072611*fraction - 0.8448718*Math.pow(fraction,2) + 0.4615385 * Math.pow(fraction,3);
      let tg_time = -11.53333 + 351.6373*fraction - 1366.958*Math.pow(fraction,2) + 2440.793*Math.pow(fraction,3) - 1763.403 * Math.pow(fraction,4) + 410.2564 * Math.pow(fraction,5);
     
      inference_time.push({
          network_utilization: fraction, 
          "GPU (L)": ig_time *= addRandomness(), 
          "CPU (L)": ic_time *= addRandomness(), 
          "Accuracy (R)": accuracy *= addRandomness(),
      });
      training_time.push({
          network_utilization: fraction,
          "GPU (single train-iteration)": tg_time *= addRandomness(),
      });
      
  }

  return [inference_time, training_time ];
}

function addRandomness() {
  return Math.random()*(1.10-0.85) + 0.85;
}


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
    <div className="background">
      <Navigation />
      <section className="section" id="title_section">
        <h1 className="has-text-centered title is-1"> SUBFLOW </h1>
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
              and network utilization. <a href="https://drive.google.com/file/d/119t3KFKW64a-nVfg8Ed3wwh_z_RXzH5v/view">
              Further information can be found in Lee and Nirjon's paper.  </a>
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
                  <img src="https://i.imgur.com/wZNoRfL.gif" alt="gif" />
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
                        type="number"
                        dataKey="deadline"
                        domain={["auto", "auto"]}
                        tickCount={8}
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
                    Deadline (µs){" "}
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
                        type="number"
                        dataKey="deadline"
                        domain={["auto", "auto"]}
                        tickCount={8}
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
                    Deadline (µs){" "}
                  </h4>
                </div>
              </div>
            </div>
            <div className="column">
              <h2 className="subtitle is-2 ">Training (GPU)</h2>{" "}
              <div className="box" id="box_column">
                <div id="training_graph">
                  <h4 className="subtitle is-4" id="vertlabel">
                    {" "}
                    Training Ratio (%){" "}
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
                        type="number"
                        dataKey="deadline"
                        domain={["auto", "auto"]}
                        tickCount={8}
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
                    Deadline (µs){" "}
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <h2 className="subtitle is-2 has-text-centered">Inference</h2>
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
                    
                    <YAxis yAxisId="right" type="number" domain={["auto", "auto"]} tickCount={10} orientation="right">
                    <Label value = {'Accuracy (%)'} angle ={90} position = 'insideRight' fontSize={26} fontFamily={"Arial"} color={"#4a4a4a"}/>
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
                    Network Utilization (%) {" "}
                  </h4>
              </div>
            </div>
            <div className="column">
              <h2 className="subtitle is-2 has-text-centered">Training</h2>
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
                    Network Utilization (%){" "}
                  </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
