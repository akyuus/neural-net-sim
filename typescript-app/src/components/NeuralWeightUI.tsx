import "../styles.css";
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip
  } from "recharts";
  import Navigation from './Navigation';

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

export default function NeuralWeightUI() {
    return (
        <body>
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
                            <h2 className="subtitle is-2">Graph 1</h2>
                            <div className="box">
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
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h2 className="subtitle is-2">Graph 2</h2>
                            <div className="box">
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
                            </div>
                        </div>
                        <div className="col">
                            <h2 className="subtitle is-2">Graph 3</h2>
                            <div className="box">
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </body>
    );
}