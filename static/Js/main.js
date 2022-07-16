console.log('jefkf')

var labelUsername = document.querySelector('#label-username');
var usernameInput = document.querySelector('#username');
var btnJoin = document.querySelector('#btn-join');

var username;

var webSocket;

function webSocketOnMessage(event) {
    var parsedData = JSON.parse(event.data)
    var message = parsedData['message']

    console.log('message : ', message)
}

btnJoin.addEventListener('click', () => {
    username = usernameInput.value;
    console.log('username:', username);
    if (username == '') {
        return;
    }
    usernameInput.value = '';
    usernameInput.disabled = true;
    usernameInput.style.visibility = 'hidden';

    btnJoin.disabled = true;
    usernameInput.style.visibility = 'hidden';

    var labelUsername = document.querySelector('#label-username');
    labelUsername.innerHTML = username;

    // var loc = window.location;
    // var wsStart = 'ws://';
    // if (loc.protocol == 'https:') {
    //     wsStart = 'ws://';
    // }
    // var endPoint = wsStart + loc.host + loc.pathname;
    // console.log('endpoint: ', endPoint)
    // webSocket = new webSocket(endPoint)

    let url = `ws://${window.location.host}/socket/`
    const webSocket = new WebSocket(url)

    webSocket.addEventListener('open', (e) => {
        console.log('Connection open');
    });
    webSocket.addEventListener('message', webSocketOnMessage);
    webSocket.addEventListener('close', (e) => {
        console.log('Connection close')
    });
    webSocket.addEventListener('error', (e) => {
        console.log('error ---')
    });

});
