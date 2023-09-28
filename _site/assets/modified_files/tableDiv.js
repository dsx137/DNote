// 给所有table元素加一层div作为父元素
var tables = document.getElementsByTagName("table");

for (var i = 0; i < tables.length; i++) {
    var div = document.createElement("div");
    div.className = "tableDiv";
    var parent = tables[i].parentNode;
    var tb = tables[i];
    parent.replaceChild(div, tables[i]);
    div.appendChild(tb);
}