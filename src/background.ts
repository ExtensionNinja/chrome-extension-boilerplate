import * as Content from "./content";

chrome.action.onClicked.addListener(tab => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: Content.start,
    });
});
