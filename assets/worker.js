var git_url=null;
var commits=null;
var commitCache=null;
var singleCache=null;
function getHtmlText(url) {
    var request = new XMLHttpRequest();
    var token = "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";
    request.open('GET', url, false);
    request.setRequestHeader("Authorization","token "+token);
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
    
    commits=commits?commits:getCommit();
    if(singleCache)
        return singleCache.commit;
    if(commitCache)
        for(var i in commitCache){
            if(commitCache[i].pageURL==pageURL)
                return commitCache[i].commit;
        }

    var fileSHA=getGitFileInfo(pageURL).sha;

    for(var i in commits){
        var commit= getCommit(commits[i].sha);
        for(var k in commit.files)
            if(commit.files[k].sha==fileSHA){
                singleCache={pageURL,commit};
                return commit;
            }
    }
    return null;
}
// onconnect=async function(e){
//     var port=e.ports[0];
//     port.onmessage=function(e){
//         git_url=e.data.git_url;
//         var pageURL=e.data.pageURL;
//         var commit=getCurrentCommit(pageURL);
//         var data={commit,pageURL};
//         port.postMessage(data);
//     }
// }

onmessage = function(e){
    git_url=e.data.git_url;
    var pageURL=e.data.pageURL;
    commits=e.data.commits;
    commitCache=e.data.commitCache;
    var commit=getCurrentCommit(pageURL);
    var data={commit,pageURL,commits,singleCache};
    postMessage(data);
}