// set extension as off by default
chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: "Off",
    });
});