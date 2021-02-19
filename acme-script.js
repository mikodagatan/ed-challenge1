function injectIframe() {
  var iframe = document.createElement('iframe');
  
  // style iframe
  iframe.style.position = "fixed";
  iframe.style.top = "40%";
  iframe.style.left = "40%";
  iframe.style.height = "300px";
  iframe.style.width = "500px";
  iframe.style.overflow ="hidden";

  iframe.style.borderRadius = "12px";
  iframe.id = 'acme-script'
  iframe.src = "./iframe.html";

  document.body.appendChild(iframe);

  top.func = addEventListenerToParent();
    
}

function addEventListenerToParent() {
  if (window.addEventListener) {
    window.addEventListener("message", onMessage);
  } else {
      // IE8
      window.attachEvent("onmessage", onMessage);
  }
}

function onMessage(event) {
  var data = event.data;
  console.log('data function', window[data.func])

  if (typeof(window[data.func]) == "function") {
      window[data.func].call(null, data.message);
  }
}


function alertFunction(message) {
  alert(message);
  document.getElementById('acme-script').remove();
}

(function () {
  injectIframe()
})();
