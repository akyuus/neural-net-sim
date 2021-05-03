
import  {useState, useEffect} from 'react';
import PageSet from './PageSet';

export interface view {
  ViewHeight:number,
  ViewWidth:number
}

const PageMatching =  ({ViewWidth,ViewHeight}: view): JSX.Element =>
{

  const [MemPages, setMemPages] = useState(8);
  const [DNN1Pages, setDNN1Pages] = useState(7);
  const [DNN2Pages, setDNN2Pages] = useState(6);

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
    console.log(e.target.value);
    findSVGElements();
  }

function handle1Change(e) {
    setDNN1Pages(e.target.value);
    console.log(e.target.value);
    findSVGElements();
  }
function handle2Change(e) {
    setDNN2Pages(e.target.value);
    console.log(e.target.value);
    findSVGElements();
  }



    useEffect(() => {

      
    // const pageManager = (num:number): Promise<number> => { 
    //   return new Promise((resolve) => {
    //     let returnNum: number = Number(num % 2);
    //     resolve(returnNum);
    //   })
    // }
    // const getOddorEven = async (num:number) => {
    //   let result:number = await pageManager(num);
    //   setItem(result);
    // }
    // getOddorEven(pages1);
    // setItem1(item);
    // getOddorEven(pages2);
    // setItem2(item);
    // getOddorEven(pagesm);
    // setItemm(item);

    // console.log(pages1 + " " + pagesm + " " + pages2);
    // console.log(item1 + " " + itemm + " " + item2);


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
                id="text_center"
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
                id="text_center"
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
                id="text_center"
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
    
    <svg id="render" width={ViewWidth} height={ViewHeight} viewBox="0 0 1080 480">
    <PageSet
                  viewHeight={ViewHeight}
                  viewWidth={ViewWidth}
                  pct_size={5}
                  x__={0}
                  y__={0}
                  pages1={DNN1Pages}
                  pages2={DNN2Pages}
                  pagesm={MemPages}
                />
                </svg>
                </div>
                
    );
    }
// GENERATE AUTOMATIC PATHS GIVEN + X__ , Y___




  export default PageMatching;