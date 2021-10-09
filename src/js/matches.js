const loadScript = (url, callback) => {
  var script = document.createElement("script");
  script.type = "text/javascript";
  if (script.readyState) {
    //IE
    script.onreadystatechange = function () {
      if (script.readyState == "loaded" || script.readyState == "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    //Others
    script.onload = function () {
      callback();
    };
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

const loadStyle = (url) => {
  document.createElement("style");
};

if (document.readyState === "complete") {
  // console.log('document.readyState === \'completdsadsae\'',document.readyState === 'complete');
}
// console.log('document.readyState === \'complete\'',document.readyState === 'complete');
loadScript(`https://unpkg.com/axios/dist/axios.min.js`, () => {
  loadScript(`https://madchill.github.io/ecor/main/main.bundle.js`, () => {
    //add js by cheat.
    main = () => {
      // ...
      console.log(
        "C:\\Users\\Admin\\WebstormProjects\\extentions\\chrome-extension-webpack-boilerplate21212"
      );
      // ...
    };
    var script = document.createElement("script");
    script.appendChild(document.createTextNode("(" + main + ")();"));
    (document.body || document.head || document.documentElement).appendChild(
      script
    );
  });
});
