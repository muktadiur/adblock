chrome.runtime.onInstalled.addListener(() => {
    console.log("Blockor Adblock extension installed and rules applied.");
});

chrome.declarativeNetRequest.onRuleMatchedDebug.addListener((details) => {
    chrome.storage.local.get(["adsBlocked"], (result) => {
        let count = result.adsBlocked || 0;
        count++;
        chrome.storage.local.set({ adsBlocked: count });
    });
});
