chrome.webRequest.onBeforeRequest.addListener(
    () => { return { cancel: true } },
    {
        urls: ["*://*.moatads.com/*", "*://*.googlesyndication.com/*", "*://*.advertising.com/*",
            "*://*.doubleclick.net/*", "*://*.rubiconproject.com/*", "*://*.adnxs.com/*", "*://*.zemanta.com/*",
            "*://*.crwdcntrl.com/*", "*://*.erne.co/*", "*://*.imrworldwide.com/*", "*://*.chartbeat.net/*",
            "*://*.pub.network/*", "*://*.quantserve.com/*", "*://*.ad-delivery.net/*", "*://*.googletagservices.com/*",
            "*://*.btloader.com/*", "*://adservice.google.com/*", "*://*.scorecardresearch.com/*",
            "*://*.revcontent.com/*", "*://*.tynt.com/*", "*://*.infolinks.com/*", "*://*.gstatic.com/*"]
    },
    ["blocking"]
)
