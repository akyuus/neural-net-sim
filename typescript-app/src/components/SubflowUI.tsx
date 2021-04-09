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
} from "recharts";

import { data } from "./Data";
import { data2 } from "./Data";
import { data3 } from "./Data";
import { data4 } from "./Data";
import { data6 } from "./Data";


export default function SubflowUI() {

  var topGraphData = data;
  var bottomGraphData = data2;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case "AlexNet": {
        console.log("alex");
        topGraphData = data;
        bottomGraphData = data2;
        break;
      }
      case "KWS": {
        console.log("KWS");
        topGraphData = data3;
        bottomGraphData = data4;
        break;
      }
      case "LeNet": {
        console.log("LeNet");
        topGraphData = data6;
        bottomGraphData = data4;
        break;
      }
      default: {
        break;
      }
    }
  };


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
                <LineChart
                  width={400}
                  height={400}
                  data={topGraphData}
                  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                  <XAxis dataKey="name" />
                  <Tooltip />
                  <CartesianGrid stroke="#f5f5f5" />
                  <Line
                    type="monotone"
                    dataKey="uv"
                    stroke="#ff7300"
                    yAxisId={0}
                  />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#387908"
                    yAxisId={1}
                  />
                </LineChart>
              </div>
            </div>
            <div className="column">
              <h2 className="subtitle is-2">Inference (CPU)</h2>{" "}
              <div className="box">
                <LineChart
                  width={400}
                  height={400}
                  data={topGraphData}
                  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                  <XAxis dataKey="name" />
                  <Tooltip />
                  <CartesianGrid stroke="#f5f5f5" />
                  <Line
                    type="monotone"
                    dataKey="uv"
                    stroke="#ff7300"
                    yAxisId={0}
                  />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#387908"
                    yAxisId={1}
                  />
                </LineChart>
              </div>
            </div>
            <div className="column">
              <h2 className="subtitle is-2">Training (GPU)</h2>{" "}
              <div className="box">
                <LineChart
                  width={400}
                  height={400}
                  data={topGraphData}
                  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                  <XAxis dataKey="name" />
                  <Tooltip />
                  <CartesianGrid stroke="#f5f5f5" />
                  <Line
                    type="monotone"
                    dataKey="uv"
                    stroke="#ff7300"
                    yAxisId={0}
                  />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#387908"
                    yAxisId={1}
                  />
                </LineChart>
              </div>
            </div>
          </div>

          <div className="columns">
            <div className="column">
              <h2 className="subtitle is-2">Inference</h2>{" "}
              <div className="box">
                <ComposedChart
                  width={500}
                  height={400}
                  data={bottomGraphData}
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
                  <Bar dataKey="uv" barSize={20} fill="#413ea0" />
                  <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                </ComposedChart>
              </div>
            </div>
            <div className="column">
              <h2 className="subtitle is-2">Training</h2>{" "}
              <div className="box">
                <ComposedChart
                  width={500}
                  height={400}
                  data={bottomGraphData}
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
                  <Bar dataKey="uv" barSize={20} fill="#413ea0" />
                  <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                </ComposedChart>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}

