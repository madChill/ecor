import { printLine } from './modules/print';
import { loadScript, loadScriptUrl, loadHtml } from "../../utils/helpers"
console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

printLine("==========1");
// https://madchill.github.io/demo.html

const checkReady = setInterval(()=>{
  if(document.readyState === 'complete'){
    clearInterval(checkReady)
      // console.log('document.readyState === \'completdsadsae\'',document.readyState === 'complete');
    // console.log('document.readyState === \'complete\'',document.readyState === 'complete');
    console.log("=================");
  
    // loadScriptUrl(`https://unpkg.com/axios/dist/axios.min.js`, () => {
      // loadScriptUrl(`https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/core.js`, () => {
        loadHtml(`<div id="root-react">we're here</div>`, ()=>{
          console.log("=================12");
          // loadScriptUrl('./InPages.bundle.js', ()=>{
  
          //   const main = () => {
          //     // ...
          //     console.log('C:\\Users\\Admin\\WebstormProjects\\extentions\\chrome-extension-webpack-boilerplate');
          //     // ...
          //   };
          //   var script = document.createElement('script');
          //   script.appendChild(document.createTextNode('(' + main + ')();'));
          //   (document.body || document.head || document.documentElement).appendChild(script);
          // })
        })
  
      // });
    // });
  }
},500)

