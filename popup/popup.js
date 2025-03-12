document.addEventListener("DOMContentLoaded", () => {
    const adsBlockedElement = document.getElementById("adsBlocked");
    chrome.storage.local.get(["adsBlocked"], (result) => {
        adsBlockedElement.textContent = result.adsBlocked || 0;
    });
});

