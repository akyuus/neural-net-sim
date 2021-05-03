import React from "react";
import * as ReactDOM from 'react-dom';
import { render, fireEvent, waitForElement } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import SubFlowUI from "../components/SubflowUI";

describe("<SubFlowUI />", () => {
  test("should display working SubFlow charts", async () => {
    const root = document.createElement("div");
    ReactDOM.render(<Router><SubFlowUI /></Router>, root);

    // Content
    expect(root.querySelector("h1")?.textContent).toBe(" SUBFLOW UI ");
  });
});