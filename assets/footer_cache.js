var commits=null;
var commitCache=new Array();

onconnect = function(e){
    var port=e.ports[0];
    var data={commits,commitCache};
    port.postMessage(data);
    port.onmessage=function(e){
        commits=e.data.commits;
        for(var i in commitCache)
            if(commitCache[i].pageURL==e.data.singleCache.pageURL)
                return;
        commitCache.push(e.data.singleCache);
        port.postMessage(data);
    }
}