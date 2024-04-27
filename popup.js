document.addEventListener("DOMContentLoaded", function() {
    chrome.storage.sync.get("extensionEnabled", function(data) {
      var toggleButton = document.getElementById("toggleButton");
      toggleButton.textContent = data && data.extensionEnabled ? "Disable" : "Enable";
    });
  });
  
  document.getElementById("toggleButton").addEventListener("click", function() {
    chrome.storage.sync.get("extensionEnabled", function(data) {
      var extensionEnabled = !(data && data.extensionEnabled);
      chrome.storage.sync.set({ "extensionEnabled": extensionEnabled }, function() {
        var toggleButton = document.getElementById("toggleButton");
        toggleButton.textContent = extensionEnabled ? "Disable" : "Enable";
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
          chrome.runtime.sendMessage({ "extensionEnabled": extensionEnabled });
        });
      });
    });
  });
  