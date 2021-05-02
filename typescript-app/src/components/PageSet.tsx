import {useState, useEffect} from 'react';

export interface Set {
  pct_size: number,
  x__: number,
  y__: number,
  paths: number,
  pagesm: number,
  pages1: number,
  pages2: number,
  viewWidth: number,
  viewHeight: number
}
var row: SVGRectElement[];
var path: SVGPathElement[];

const PageSet = ({pct_size,x__,y__,paths,pagesm,pages1,pages2,viewWidth,viewHeight}: Set): JSX.Element =>
{

  const [items1, setItems1] = useState<SVGRectElement[]>([]);
  const [items2, setItems2] = useState<SVGRectElement[]>([]);
  const [itemsm, setItemsm] = useState<SVGRectElement[]>([]);
  const [items, setItems] = useState<SVGPathElement[]>([]);

  useEffect(() => {



    const svgns = "http://www.w3.org/2000/svg";
    let x;
    let y;
    let odd;
    row = [];
    let counter = 0;
    const colorArray = ["#94c356", "#46a4cc"];
    
    let left = [];

    if(pages1 % 2 == 1) {
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
        left.push([(x+(pct_size/100)*viewWidth),(y+(((pct_size/100)*viewWidth)/2))]);
      }
    }
    setItems1(row);

    odd = 0;

    let right = [];

    if(pages2 % 2 == 1) {
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
    
        //   } ///////////////////// STORE ARRAY OF COORDINATES FOR PATH GENERATION THEN MODULATE PATH GENERATION TO PERFORM ONE PAGE SET TO ANOTHER
        // });///////////////  GENERATE PAGES GIVEN DISTANCE FORMULAS FROM PATHGEN
        // /////////  
        row.push(newRect);
        right.push([(x+(((pct_size/100)*viewWidth)/2)),(y+(((pct_size/100)*viewWidth)/2))]);
      }
    }
    setItems2(row);

    odd = 0;

    if(pagesm % 2 == 1) {
      odd = 1;
      pagesm+=1;
    }
    row = [];

    let middle = [];

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
    
        //   } ///////////////////// STORE ARRAY OF COORDINATES FOR PATH GENERATION THEN MODULATE PATH GENERATION TO PERFORM ONE PAGE SET TO ANOTHER
        // });///////////////  GENERATE PAGES GIVEN DISTANCE FORMULAS FROM PATHGEN
        // /////////  
        row.push(newRect);
        middle.push([x,y]);
      }
    }
    setItemsm(row);
    path = [];
    
    for (let i = 0; i < paths; i++) {
      let leftPath = document.createElementNS(svgns, "path");
      leftPath.setAttribute("d", "M"+left[i][0]+" "+left[i][1]+ ", "+middle[i][0]+" "+middle[i][1]);
      path.push(leftPath);
      let rightPath = document.createElementNS(svgns, "path");
      rightPath.setAttribute("d", "M"+right[i][0]+" "+right[i][1]+ ", "+middle[i][0]+" "+middle[i][1]);
      path.push(rightPath);
    }
    setItems(path);

  }, []);

    return(<svg width={viewWidth} height={viewHeight} viewBox="0 0 1080 480">

     {
       items1.map( (n) =>{return (<rect x={n.x.baseVal.valueInSpecifiedUnits} y={n.y.baseVal.valueInSpecifiedUnits}width={n.width.baseVal.valueAsString} height={n.height.baseVal.valueAsString} />)})
     }
          {
       items2.map( (n) =>{return (<rect x={n.x.baseVal.valueInSpecifiedUnits} y={n.y.baseVal.valueInSpecifiedUnits}width={n.width.baseVal.valueAsString} height={n.height.baseVal.valueAsString} />)})
     }
          {
       itemsm.map( (n) =>{return (<rect x={n.x.baseVal.valueInSpecifiedUnits} y={n.y.baseVal.valueInSpecifiedUnits}width={n.width.baseVal.valueAsString} height={n.height.baseVal.valueAsString} fill={n.getAttribute("fill")?.toString()} />)})
     }
          {/* <path  stroke-width="5px" stroke="rgba(200,100,100,200)"
          d="M100 112, 243 112"/>
          <path  stroke-width="5px" stroke="rgba(200,100,100,200)"
          d="M100 100, 150 100"/>  
          <path stroke-width="5px" stroke="rgba(200,100,100,200)"
          d="M150 100, 150 150"/>   */}
         { 
            items.map( (n) =>{ const d = n.getAttribute("d");
            if(d) return (<path stroke-width="5px" stroke="rgba(200,100,100,200)" d={d}/>)})
     }
\
   </svg>);
  }
  

  export default PageSet;