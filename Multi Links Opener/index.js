var btn = document.getElementById('btn');
btn.addEventListener('click', (e)=>{
    e.preventDefault();
    var val = document.getElementById('links');
    var value = val.value;
    var arrayOfLinks = value.split(',');
    //console.log(arrayOfLinks);
    openTabs(arrayOfLinks);
});


function openTabs(arrayOfLinks){
    //console.log(arrayOfLinks);
    for(var i = 0; i<arrayOfLinks.length; i++){
        var open = checkForLink(arrayOfLinks[i]);
        chrome.tabs.create({
            url: open
        });
    }
    //openMultipleTabs();
}

function checkForLink(link){
    var newlink = '';
    if(link.indexOf('https://') == -1 && link.indexOf('www') == -1){
        newlink = 'https://www.'+link;
    }
    else if(link.indexOf('https') == -1){
        newlink = 'https://'+link;
    }
    else{
        newlink = link;
    }
    return newlink;
}

// $(document).ready(function() {
    
//         var linksArray =['https://www.google.com','http://www.facebook.com','http://www.stackoverflow.com'],i;
    
//         $('#btn').click(function() {for(i=0; linksArray.length > i; i++){
    
//             var ne = window.open(linksArray[i]);
//             ne.blur();
//       }
//         });
//     });