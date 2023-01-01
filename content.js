document.addEventListener("click", () =>
  chrome.runtime.sendMessage("get", (response) => {
    console.log("received user data", response);
  })
);
