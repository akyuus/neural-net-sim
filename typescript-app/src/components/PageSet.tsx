// import { render } from 'enzyme';
import {useState, useEffect} from 'react';
// import PageMatching from './PageMatching';

export interface Set {
  pct_size: number,
  x__: number,
  y__: number,
  pagesm:number,
  pages1:number,
  pages2:number,
  viewWidth: number,
  viewHeight: number
}
var row: SVGRectElement[];
var path: SVGPathElement[];

const PageSet = ({pct_size,x__,y__,pagesm,pages1,pages2,viewWidth,viewHeight}: Set):JSX.Element =>
{

  const [items1, setItems1] = useState<SVGRectElement[]>([]);
  const [items2, setItems2] = useState<SVGRectElement[]>([]);
  const [itemsm, setItemsm] = useState<SVGRectElement[]>([]);
  const [items, setItems] = useState<SVGPathElement[]>([]);
  const [MemPages, setMemPages] = useState(8);
  const [DNN1Pages, setDNN1Pages] = useState(6);
  const [DNN2Pages, setDNN2Pages] = useState(7);

  function getSubDocument(embedding_element)
  {
    if (embedding_element.contentDocument) 
    {
      return embedding_element.contentDocument;
    } 
    else 
    {
      var subdoc = null;
      try {
        subdoc = embedding_element.getSVGDocument();
      } catch(e) {}
      return subdoc;
    }
  }

  function findSVGElements()
  {
    var elms = document.querySelectorAll(".emb");
    for (var i = 0; i < elms.length; i++)
    {
      var subdoc = getSubDocument(elms[i])
      if (subdoc)
      
        subdoc.getElementById("render")?.focus();

    }
  }

  function handleMChange(e) {
    setMemPages(e.target.value);
    pagesm=e.target.value
    findSVGElements();
  }

function handle1Change(e) {
    setDNN1Pages(e.target.value);
    pages1=e.target.value;
    findSVGElements();
  }
function handle2Change(e) {
    setDNN2Pages(e.target.value);
    pages2=e.target.value;
    findSVGElements();
  }

  useEffect(() => {
    let paths:number=0;
    if(pages1>pages2) {paths=pages1} 
    else {paths=pages2};
    console.log(paths+"-paths...UseEffect")

    const svgns = "http://www.w3.org/2000/svg";
    let x;
    let y;
    let odd;
    row = [];
    let counter = 0;
    const colorArray = ["aqua"];
    let arr: number[];
    let left:number[][] = [];

    if(pages1 % 2 === 1) {
      odd = 1;
      pages1+=1;
    }

    for (let j = 0; j <(pages1/2); j++) {
      for (let i = 0; i < 2; i++) {
      //  counter++;
        let newRect = document.createElementNS(svgns, "rect");
        x = (i*60)+50+x__; // IF YOU CHANGE PCT_SIZE, YOU MUST ADJUST THESE NUMBERS TO APPROPRIATELY SPACE PAGES OUT
        y = (j*30)+11+y__;
        newRect.setAttribute("x", x.toString());
        newRect.setAttribute("y", y.toString());
        newRect.setAttribute("width", pct_size+"%");
        newRect.setAttribute("height", pct_size+"%");
        newRect.setAttribute("fill", colorArray[counter % colorArray.length]);
        if(odd === 1 && j === (pages1/2)-1 && i === 2-1){break;}
    
        row.push(newRect);
        
        let x_ = (x+(pct_size/100)*viewWidth);
        let y_ = (y+(((pct_size/100)*viewHeight)/2));

        arr=[];
        arr.push(x_);
        arr.push(y_);
        left.push(arr);
      }
    }
    setItems1(row);

    odd = 0;

    let right:number[][] = [];

    if(pages2 % 2 === 1) {
      odd = 1;
      pages2+=1;
    }
    row = [];
    for (let j = 0; j <pages2/2; j++) {
      for (let i = 0; i < 2; i++) {
      //  counter++;
        let newRect = document.createElementNS(svgns, "rect");
        x = (i*60)+50+x__+600; // IF YOU CHANGE PCT_SIZE, YOU MUST ADJUST THESE NUMBERS TO APPROPRIATELY SPACE PAGES OUT
        y = (j*30)+11+y__;
        newRect.setAttribute("x", x.toString());
        newRect.setAttribute("y", y.toString());
        newRect.setAttribute("width", pct_size+"%");
        newRect.setAttribute("height", pct_size+"%");
        newRect.setAttribute("fill", colorArray[counter % colorArray.length]);
        if(odd === 1 && j === (pages2/2)-1 && i === 2-1){break;}
    

        row.push(newRect);
        right.push([(x+(((pct_size/100)*viewWidth)/2)),(y+(((pct_size/100)*viewHeight)/2))]);
      }
    }
    setItems2(row);

    odd = 0;

    if(pagesm % 2 === 1) {
      odd = 1;
      pagesm+=1;
    }
    row = [];

    let middle:number[][] = [];

    for (let j = 0; j < pagesm/2; j++) {
      for (let i = 0; i < 2; i++) {
        counter++;
        let newRect = document.createElementNS(svgns, "rect");
        let x = (i*60)+50+x__+300; // IF YOU CHANGE PCT_SIZE, YOU MUST ADJUST THESE NUMBERS TO APPROPRIATELY SPACE PAGES OUT
        let y = (j*30)+11+y__;
        newRect.setAttribute("x", x.toString());
        newRect.setAttribute("y", y.toString());
        newRect.setAttribute("width", pct_size+"%");
        newRect.setAttribute("height", pct_size+"%");
        if(counter-1<paths){newRect.setAttribute("fill", colorArray[counter % colorArray.length]);}
        if(odd === 1 && j === (pagesm/2)-1 && i === 2-1){break;}
    

        row.push(newRect);
        middle.push([x,(y+(((pct_size/100)*viewHeight)/2))]);
      }
    }
    setItemsm(row);
    path = [];

    
    for (let i = 0; i < paths; i++) {
      let leftPath = document.createElementNS(svgns, "path");
      if(left.length > i)
      {leftPath.setAttribute("d", "M"+left[i][0]+" "+left[i][1]+ ", "+middle[i][0]+" "+middle[i][1]);
      path.push(leftPath);
      }
      if(right.length > i)
      {let rightPath = document.createElementNS(svgns, "path");
      rightPath.setAttribute("d", "M"+right[i][0]+" "+right[i][1]+ ", "+middle[i][0]+" "+middle[i][1]);
      path.push(rightPath);}
    }
    setItems(path);

  }, []);

    return(
      <div>
      <div className="columns">
      <div className="column">
        <div className="box">
          <div className="columns">
          <div className="column">
              <h3
                className="title is-4 has-text-centered"
              >
                DNN 1
              </h3>
              <label htmlFor="main-pages">PAGES:</label>{" "}
              <input
                type="number"
                id="main-pages-1"
                name="main-pages"
                min="0"
                max="20"
                onChange={handle1Change}
                value={DNN1Pages}
              />
            </div>
            <div className="column">
              <h3
                className="title is-4 has-text-centered"
              >
                MAIN MEMORY
              </h3>
              <label htmlFor="main-pages">PAGES:</label>{" "}
              <input
                type="number"
                id="main-pages-mem"
                name="main-pages"
                min="0"
                max="20"
                onChange={handleMChange}
                value={MemPages}
              />
            </div>
            <div className="column">
              <h3
                className="title is-4 has-text-centered"
              >
                DNN 2
              </h3>
              <label htmlFor="main-pages">PAGES:</label>{" "}
              <input
                type="number"
                id="main-pages-2"
                name="main-pages"
                min="0"
                max="20"
                onChange={handle2Change}
                value={DNN2Pages}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <svg key={Math.floor(Math.random() * 50000)} id="render" width={viewWidth} height={viewHeight} viewBox="0 0 1080 480">
      <g key={Math.floor(Math.random() * 50000)}>

    { 
            items.map( (n) =>{ const d = n.getAttribute("d");
            if(d) return (<path key={Math.floor(Math.random() * 50000)} strokeWidth="5px" stroke="rgba(0,0,0,0.42)" d={d}/>)})
     }
      <g key={Math.floor(Math.random() * 50000)} fill="skyblue" stroke="skyblue" strokeWidth="4" >
     {
       items1.map( (n) =>{ 
         return (<rect key={Math.floor(Math.random() * 50000)} x={n.x?.baseVal.valueInSpecifiedUnits} y={n.y?.baseVal.valueInSpecifiedUnits}width={n.width?.baseVal.valueAsString} height={n.height?.baseVal.valueAsString} />)})
     }
          {
       items2.map( (n) =>{return (<rect key={Math.floor(Math.random() * 50000)} x={n.x?.baseVal.valueInSpecifiedUnits} y={n.y?.baseVal.valueInSpecifiedUnits}width={n.width?.baseVal.valueAsString} height={n.height?.baseVal.valueAsString} />)})
     }
          {
       itemsm.map( (n) =>{return (<rect key={Math.floor(Math.random() * 50000)} x={n.x?.baseVal.valueInSpecifiedUnits} y={n.y?.baseVal.valueInSpecifiedUnits}width={n.width?.baseVal.valueAsString} height={n.height?.baseVal.valueAsString} fill={n.getAttribute("fill")?.toString()} />)})
     }
     </g>

</g>
</svg>
</div>)
};
  
  export default PageSet;