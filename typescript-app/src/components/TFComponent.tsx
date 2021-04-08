import {Component} from "react";
import React, {ChangeEvent, FormEvent, useState} from 'react';
import * as tf from '@tensorflow/tfjs';
import { train } from "@tensorflow/tfjs";

interface PredObj{
    predictionObj: PredictionValue;
}

export interface PredictionValue{
    linearModel?: tf.Sequential;
    prediction?: any;
}
export class TFComponent extends React.Component<PredObj> {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: 0
        };}
    static defaultProps = {predictionObj: {}};

    handleChange(e) {
        this.setState({value: e.target.value});
        console.log("train&predict")
        this.train();
        this.predict(e.target.value);
    }

    async train() {
                      // Define a model for linear regression.
    this.props.predictionObj.linearModel = tf.sequential();
    this.props.predictionObj.linearModel.add(tf.layers.dense({units: 1, inputShape: [1]}));

    // Prepare the model for training: Specify the loss and the optimizer.
    this.props.predictionObj.linearModel.compile({loss: 'meanSquaredError', optimizer: 'sgd'});


    // Training data, completely random stuff
    const xs = tf.tensor1d([3.2, 4.4, 5.5]);
    const ys = tf.tensor1d([1.6, 2.7, 3.5]);


    // Train
    await this.props.predictionObj.linearModel.fit(xs, ys)

    console.log('model trained!')
    }

    predict(val: number) {
        if (this.props.predictionObj.linearModel){
            console.log("defined")
            val = val.valueOf();
            const output = this.props.predictionObj.linearModel.predict(tf.tensor2d([val], [1, 1],'int32')) as any;
            this.props.predictionObj.prediction = Array.from(output.dataSync())[0]
            }
    }

    render() {
        return (<div>
            <h4>Predicted value: {this.props.predictionObj.prediction}</h4>
            <input type="number" onChange={this.handleChange}/>
                </div>
        );
    }




}
