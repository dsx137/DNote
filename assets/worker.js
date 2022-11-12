var git_url=null;
var pageURL=null;
function getHtmlText(url) {
    var request = new XMLHttpRequest();
    request.open('GET', url, false);
    request.send();
    return request.responseText;
}
function getGitFileInfo(){
    return JSON.parse(getHtmlText(git_url+"contents/"+pageURL));
}
function getCommit(sha=null){
    return JSON.parse(getHtmlText(git_url+"commits"+(sha?"/"+sha:"?per_page=1000")));
}
function getCurrentCommit(){
    var fileSHA=getGitFileInfo().sha;
    var commits = getCommit();
    for(var i in commits){
        var commit= getCommit(commits[i].sha);
        for(var k in commit.files)
            if(commit.files[k].sha==fileSHA)
                return commit;
    }
}
onmessage=function(e){
    git_url=e.data.git_url;
    pageURL=e.data.pageURL;
    this.postMessage(getCurrentCommit());
}