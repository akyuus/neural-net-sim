import React from "react";
import * as ReactDOM from 'react-dom';
import { render, fireEvent, waitForElement } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import NeuralWeightUI from "../components/NeuralWeightUI";

describe("<NeuralWeightUI />", () => {
  test("renders the correct content", async () => {
    const root = document.createElement("div");
    ReactDOM.render(<Router><NeuralWeightUI /></Router>, root);

    // Content
    expect(root.querySelector("h1")?.textContent).toBe("NEURAL WEIGHT VIRTUALIZATION");
  });
});