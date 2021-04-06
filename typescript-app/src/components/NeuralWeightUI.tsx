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
    Bar
  } from "recharts";

export default function NeuralWeightUI() {
    return (
        <body>
            <section className="section">
                <div className="container">
                    <h1 className="title">
                        Neural Network Models
                    </h1>
                    <div className="columns">
                        <div className="column">
                            <label className="checkbox">
                                <input type="checkbox"/>
                                ResNet
                            </label>
                            <label className="checkbox">
                                <input type="checkbox"/>
                                IM2TXT
                            </label>
                            <label className="checkbox">
                                <input type="checkbox"/>
                                Inception
                            </label>
                        </div>
                    </div>
                </div>
            </section>
        </body>
    );
}