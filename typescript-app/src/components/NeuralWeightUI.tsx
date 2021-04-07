import "../styles.css";

// import {
//     LineChart,
//     Line,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//     ComposedChart,
//     Legend,
//     Bar
//   } from "recharts";

export default function NeuralWeightUI() {
    return (
        <body>
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
                                    <input type="checkbox" />
                                    ResNet
                                </label>
                            </div>
                            <div className="row">
                                <label className="checkbox">
                                    <input type="checkbox" />
                                    IM2TXT
                                </label>
                            </div>
                            <div className="row">
                                <label className="checkbox">
                                    <input type="checkbox" />
                                    Inception
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </body>
    );
}