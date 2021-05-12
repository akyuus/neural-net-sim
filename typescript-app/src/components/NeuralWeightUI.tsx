import "../styles.css";
import PageSet from "./PageSet";
// import PageMatching from "./PageMatching";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Label } from "recharts";

import Navigation from "./Navigation";
import fisherdata from "./fisherdata.json";

/*
  IMPORT TENSORFLOW DATA HERE
*/

import "./background-styles.css";

export default function NeuralWeightUI() {



  return (
    <div className="background">
      <Navigation />
      <section className="section" id="title_section">
        <h1 className="has-text-centered title is-1">
          NEURAL WEIGHT VIRTUALIZATION
        </h1>
      </section>
      <section className="section">
        <div className="container">
          <div className="box">
            <p className="is-large">
              The Neural Weight Virtulization method, developed by Seulki Lee
              and Shahriar Nirjon, is a method that allows for multiple Deep
              Neural Networks (DNN) to be packaged in the a small space. This
              method optimizes data storage by having Neural Networks that have
              the same weights share a page in main memory. The Neural Weight
              Virtulization UI page is a tool to allow users to witness first
              hand how page sharing works, as well as graphs that visualize data
              gathered from the Neural Weight Virtulization method. <a href="https://drive.google.com/file/d/1Ceu84h8JvR6ruGjw3jji0Zf5GwbHVMNz/view">
              Further information can be found in Lee and Nirjon's paper.  </a>
            </p>
          </div>
          <div className="columns">
            <div className="column">
              <div className="box">
                <div className="columns" id="top_row">
                  <div className="column is-one-fifth">
                  <h3
                      className="subtitle is-2 has-text-centered"
                    > DNN 1
                        </h3>
                  <div className="control">
                    <label className="radio">
                      <input type="radio" name="DNN" id="ResNet"></input> ResNet
                    </label>
                    <br></br>
                    <label className="radio">
                      <input
                        type="radio"
                        name="DNN"
                        id="IM2TXT"
                        defaultChecked
                      ></input>{" "}
                      IM2TXT
                    </label>
                    <br></br>
                    <label className="radio">
                      <input type="radio" name="DNN" id="Inception2"></input> Inception
                    </label>
                    </div>
                  </div>
                  <div className="column is-one-fifth">
                  <h3
                      className="subtitle is-2 has-text-centered"
                    > DNN 2
                        </h3>
                  <div className="control">
                    <label className="radio">
                      <input type="radio" name="DNN2" id="ResNet2"></input> ResNet
                    </label>
                    <br></br>
                    <label className="radio">
                      <input
                        type="radio"
                        name="DNN2"
                        id="IM2TXT"
                        defaultChecked
                      ></input>{" "}
                      IM2TXT
                    </label>
                    <br></br>
                    <label className="radio">
                      <input type="radio" name="DNN2" id="Inception2"></input> Inception
                    </label>
                    </div>
                  </div>
                  <div className="column is-three-fifths">
                <div id="page_set_location">
                  {/* UTILIZE IMPORTED TENSORFLOW DATA HERE */}
                    <PageSet pct_size={5}
                    x__={0}
                    y__={0}
                    pagesm={8}
                    pages1={6}
                    pages2={7}
                    viewWidth={1080}
                    viewHeight={480}
                    />
                </div>
                  </div>
                  <script>

                  </script>
                </div>
                <div className="columns">
                    <div className="column">
                    <h2 className="subtitle is-2 has-text-centered">FISHER DATA</h2>
                    {/* UTILIZE IMPORTED TENSORFLOW DATA HERE */}
                    <LineChart
                  width={600}
                  height={400}
                  data={fisherdata}
                  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                  <XAxis dataKey="name" type="category" />
                  <YAxis yAxisId="0" dataKey="fisher">
                  <Label value = {'Fisher Information'} angle ={90} position = 'insideLeft' fontSize={26} fontFamily={"Arial"} color={"#4a4a4a"}/>
                  </YAxis>
                  <Tooltip />
                  <CartesianGrid stroke="#f5f5f5" />
                  <Line
                    type="monotone"
                    dataKey="fisher"
                    dot={false}
                    stroke="#ff7300"
                    yAxisId="0"
                  />
                  <Line
                    type="monotone"
                    dataKey="smooth_fisher"
                    dot={false}
                    stroke="#387908"
                    yAxisId="0"
                  />
                </LineChart>
                <h4 className="subtitle is-4 has-text-centered">
                    Weight Parameters {" "}
                  </h4>
                    </div>
                    <div className="column">
                    <h2 className="subtitle is-2 has-text-centered">DENSITY CHART</h2>
                    {/* UTILIZE IMPORTED TENSORFLOW DATA HERE */}
                    <LineChart
                  width={600}
                  height={400}
                  data={fisherdata}
                  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                  <XAxis type="number" tickCount={10} domain={[0,450]}>
                  </XAxis>
                  <YAxis yAxisId="0" tickCount={10} domain={[0,450]}>
                  <Label value = {'DNN1'} angle ={90} position = 'insideLeft' fontSize={26} fontFamily={"Arial"} color={"#4a4a4a"}/>
                  </YAxis>
                  <Tooltip />
                  <Tooltip />
                  <CartesianGrid stroke="#f5f5f5" />
                  <Line
                    type="monotone"
                    dataKey="none"
                    dot={false}
                    stroke="#ff7300"
                    yAxisId={0}
                  />
                </LineChart>
                <h4 className="subtitle is-4 has-text-centered">
                  DNN2
                  </h4>
                    </div>
                </div>
              </div>
            </div>
          </div>             
        </div>
      </section>
    </div>
  );
}
