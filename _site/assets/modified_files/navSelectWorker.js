var nav = "DNote"

onconnect = function (e) {
    var port = e.ports[0];
    port.postMessage(nav);

    port.onmessage = function (e) {
        nav = e.data;
        port.postMessage(nav);
        self.close();
    }
}