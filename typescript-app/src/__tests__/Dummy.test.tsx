import React from 'react';
import * as ReactDOM from 'react-dom';

import Dummy from '../components/Dummy';

describe("<Dummy />", () => {
    test("Render correct information", async () => {
        const root = document.createElement("div");
        ReactDOM.render(<Dummy />, root);

        expect(root.querySelector("h1")?.textContent).toBe("Header One");
        expect(root.querySelector("h2")?.textContent).toBe("Header Two");
        expect(root.querySelector("h3")?.textContent).toBe("Header Three");
        expect(root.querySelector("h4")?.textContent).toBe("Header Four");

        expect(root.querySelector("p")?.textContent).toBe("Paragraph");

        expect(root.querySelector("label")?.textContent).toBe("Label");
    })
})