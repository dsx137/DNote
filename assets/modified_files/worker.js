var git_url=null;
var commitsOverview=null;
var commitsCache=null;
var singleCache=null;
var pageURL=null;
//这些函数的功能是用XMLHttpRequest获取反序列化后的github api的信息
function getHtmlText(url) {
    var request = new XMLHttpRequest();
    var token = "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";
    request.open('GET', url, false);
    // request.setRequestHeader("Authorization","token "+token);
    request.send();
    return request.responseText;
}
function getGitFileInfo(pageURL){
    return JSON.parse(getHtmlText(git_url+"contents/"+pageURL));
}
function getCommit(sha=null){
    return JSON.parse(getHtmlText(git_url+"commits"+(sha?"/"+sha:"?per_page=1000")));
}
function getCurrentCommit(pageURL){
    
    commitsOverview=commitsOverview?commitsOverview:getCommit();
    if(singleCache)
        return singleCache.commit;
    if(commitsCache)
        for(var i in commitsCache){
            if(commitsCache[i].pageURL==pageURL)
                return commitsCache[i].commit;
        }

    var fileSHA=getGitFileInfo(pageURL).sha;

    for(var i in commitsOverview){
        var commit= getCommit(commitsOverview[i].sha);
        for(var k in commit.files)
            if(commit.files[k].sha==fileSHA){
                singleCache={pageURL,commit};
                return commit;
            }
    }
    singleCache={pageURL,commit:null};
    return null;
}

onmessage = function(e){
    git_url=e.data.git_url;
    pageURL=e.data.pageURL;
    commitsOverview=e.data.commitsOverview;
    commitsCache=e.data.commitsCache;
    var commit=getCurrentCommit(pageURL);
    var data={commit,commitsOverview,singleCache};
    postMessage(data);
    self.close();
}