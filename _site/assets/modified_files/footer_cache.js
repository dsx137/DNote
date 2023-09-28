// 这个文件是用来持久化提交时间数据的，用了共享worker的方法
var commitsOverview=null;
var commitsCache=new Array();
onconnect = function(e){
    var port=e.ports[0];
    var data={commitsOverview,commitsCache};
    port.postMessage(data);
    
    port.onmessage=function(e){
        commitsOverview=e.data.commitsOverview;
        if(singleCache)
            for(var i in commitsCache)
                if(commitsCache[i].pageURL==e.data.singleCache.pageURL)
                    return;
        commitsCache.push(e.data.singleCache);
        port.postMessage(data);
    }
}