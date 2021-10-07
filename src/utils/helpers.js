
export const loadStyle = (content, callback) => {
  // script.text
  const script = document.createElement('style')
  if (script.readyState) { //IE
    script.onreadystatechange = function() {
      if (script.readyState == 'loaded' || script.readyState == 'complete') {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else { //Others
    script.onload = function() {
      callback();
    };
  }
  script.textContent = content;
  document.getElementsByTagName('head')[0].appendChild(script);
}

export const loadHtml = (content, callback) => {
  // script.text
  const script = document.createElement('div')
  if (script.readyState) { //IE
    script.onreadystatechange = function() {
      if (script.readyState == 'loaded' || script.readyState == 'complete') {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else { //Others
    script.onload = function() {
      callback();
    };
  }
  script.innerHTML = content;
  document.getElementsByTagName('body')[0].appendChild(script);
}
export const loadScript = (content, callback) => {
  // script.text
  const script = document.createElement('script')
  if (script.readyState) { //IE
    script.onreadystatechange = function() {
      if (script.readyState == 'loaded' || script.readyState == 'complete') {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else { //Others
    script.onload = function() {
      callback();
    };
  }
  script.text = content;
    document.getElementsByTagName('head')[0].appendChild(script);
}

export const loadScriptUrl = (url, callback) => {
  debugger
    var script = document.createElement('script');
    script.type = 'text/javascript';
    if (script.readyState) { //IE
      script.onreadystatechange = function() {
        if (script.readyState == 'loaded' || script.readyState == 'complete') {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else { //Others
      script.onload = function() {
        callback();
      };
    }
  
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
};
  

  
  

  
  