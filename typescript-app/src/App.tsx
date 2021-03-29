import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./styles.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  AreaChart,
  Area
} from "recharts";

const data = [{
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

export default function App() {
  return (
<body>
      <section className="section">
        <div className="container">
        <h1 className="title">DNN Models</h1>
          <div className="columns">
            <div className="column">     
                <div className="box">
                    <label className="checkbox">
                      <input type="checkbox"></input>
                        Le-Net5 (MNIST)
                    </label>
                    <br></br>
                    <label className="checkbox">
                      <input type="checkbox"></input>
                        AlexNet (CIFAR-10)
                    </label>
                    <br></br>
                    <label className="checkbox">
                      <input type="checkbox"></input>
                       KWS (GSC)
                    </label>
                </div>
                </div>
            <div className="column">
              <div className="box">
                Image Here
              </div>
            </div>
            <br></br>
            
          </div>

          <div className="columns">
              <div className="column"><h2 className="subtitle is-2">Inference (GPU)</h2> <div className="box">
              <LineChart
                width={400}
                height={400}
                data={data}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <Tooltip />
                <CartesianGrid stroke="#f5f5f5" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
                <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
              </LineChart>
              </div></div>
              <div className="column"><h2 className="subtitle is-2">Inference (CPU)</h2> <div className="box">
              <LineChart
                width={400}
                height={400}
                data={data}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <Tooltip />
                <CartesianGrid stroke="#f5f5f5" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
                <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
              </LineChart>
              </div></div>
              <div className="column"><h2 className="subtitle is-2">Training (GPU)</h2> <div className="box">
              <LineChart
                width={400}
                height={400}
                data={data}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <Tooltip />
                <CartesianGrid stroke="#f5f5f5" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
                <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
              </LineChart>
              </div></div>

            </div>

            <div className="columns">
              <div className="column"><h2 className="subtitle is-2">Inference</h2> <div className="box">
                Image Here
              </div></div>
              <div className="column"><h2 className="subtitle is-2">Training</h2> <div className="box">
                Image Here
              </div></div>

            </div>

        </div>
      </section>
      </body>
  );
}
