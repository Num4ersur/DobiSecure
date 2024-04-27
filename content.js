// archivo background.js
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    const url = details.url;
    if (url.includes("publicidad")) {
      return { redirectUrl: chrome.extension.getURL("nope.html") };
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);