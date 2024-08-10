chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url && tab.url.includes("youtube.com/results?search_query=")) {
        let url = new URL(changeInfo.url);
        let query = url.searchParams.get("search_query");

        if (query && !query.includes("before:2025")) {
            query = `before:2025 ${query}`;
            url.searchParams.set("search_query", query);
            chrome.tabs.update(tabId, { url: url.toString() });
        }
    }
});