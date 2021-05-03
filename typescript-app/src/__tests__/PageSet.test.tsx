import React from "react";
import * as ReactDOM from 'react-dom';
import { render, fireEvent, waitForElement } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import PageSet from '../components/PageSet';

jest.unmock('../components/PageSet');

describe('PageSet with certain values', () => {
    it('changes certain value', () => {
        const root = document.createElement("div");
        ReactDOM.render(<Router><PageSet viewHeight={480}
            viewWidth={1080}
            pct_size={5}
            x__={0}
            y__={0}
            paths={5}
            pagesm={16}
            pages1={10}
            pages2={8} /></Router>
        , root);

        expect(root.querySelector('viewWidth')).toEqual(null);
    })
})
