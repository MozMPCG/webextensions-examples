//creating context menu for all the search engines

browser.contextMenus.create({
  id: "ddg" ,
  "icons": {
      "16": "data/duckduckgo16.png",
      "32": "data/duckduckgo32.png"
    },
  title: "search on duckduckgo" ,
  contexts: ["selection"]
});

browser.contextMenus.create({
  id: "ggl" ,
  "icons": {
      "16": "data/google16.png",
      "32": "data/google32.png"
    },
  title: "search on google" ,
  contexts: ["selection"]
});

browser.contextMenus.create({
  id: "ggle" ,
  "icons": {
      "16": "data/google16.png",
      "32": "data/google32.png"
    },
  title: "search exactly on google" ,
  contexts: ["selection"]
});

browser.contextMenus.create({
  id: "yho" ,
  "icons": {
      "16": "data/yahoo16.png",
      "32": "data/yahoo32.png"
    },
  title: "search on yahoo" ,
  contexts: ["selection"]
});

browser.contextMenus.create({
 id : "whi" ,
 "icons": {
      "16": "data/whois16.png",
      "32": "data/whois32.png"
    },
 title : "Search on whois ? ",
 contexts: ["link"]
});

browser.contextMenus.create({
 id : "shd" ,
 "icons": {
     "16": "data/Shodan16.png",
     "32": "data/Shodan32.png"
   },
 title : "Search on shodan ",
 contexts: ["selection" , "link"]
});

browser.contextMenus.create({
  id: "bng" ,
  "icons": {
      "16": "data/bing16.png",
      "32": "data/bing32.png"
    },
  title: "search on bing" ,
  contexts: ["selection"]
});

//adding an event listner upon click
browser.contextMenus.onClicked.addListener(contextMenuAction);


var url ;
function contextMenuAction(info , tab) {
   switch (info.menuItemId)
{
   case "ddg" :  url = "https://duckduckgo.com/q="+info.selectionText;
   break ;
   case "ggl" :  url = "https://google.co.in/search?q="+info.selectionText;
   break ;
   case "ggle" :  url = "https://google.co.in/search?q=\""+info.selectionText+"\"";
   break ;

   case "yho" :  url = "https://search.yahoo.com/search?q="+info.selectionText;
   break ;
   case "bng" :  url = "http://www.bing.com/search?q="+info.selectionText;
   break ;
   case "whi" : url = "https://whois.com/whois/"+info.linkUrl;
   case "shd" : {
     if (info.selectionText) {
//To search for a selected text
       url = "https://shodan.io/search?query="+info.selectionText;
     } else {
//to search for a link
url = "shodan.io/search?query="+info.linkUrl;
     }
   }
   break ;
}
//open the link in new tab
browser.tabs.create({url : url });
}
