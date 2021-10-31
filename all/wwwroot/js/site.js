window.addEventListener('DOMContentLoaded', () => {

    getRouteAsync();
});

var routeCa = document.getElementById('routeCa');
var routeTx = document.getElementById('routeTx');
var routeNy = document.getElementById('routeNy');



getRouteAsync = async function () {


    const response = await fetch('../example.json', {
        method: 'GET',
        headers:
        {
            'Accept': 'application/json'
        }
    })
    var data = await response.json();


    var arr = Object.entries(data);


    var arrCA = arr[0];

    var arrTX = arr[1];

    var arrNY = arr[2];



    routeCa.addEventListener('click', () => {
        var index1 = 0;
        const ulList = document.getElementById('myUL');
        ulList.innerHTML = '';
        for (var i = 0; i < arrCA[1].length; i++) {
            let liItem = document.createElement('li');
            liItem.dataset.id = index1;
            liItem.innerHTML = arrCA[1][i].time + arrCA[1][i].title;
            liItem.dataset.title = arrCA[1][i].title;
            liItem.addEventListener('click', (e) => {
                var title = e.target.dataset.title;
                var eventDetail = showDetails(title);

            });
            ulList.appendChild(liItem);
            let brt = document.createElement('br');
            let hrt = document.createElement('hr');
            ulList.appendChild(hrt);
            ulList.appendChild(brt);
            index1++;
        }
    });
    routeTx.addEventListener('click', () => {
        var index2 = 0;
        const ulList = document.getElementById('myUL');
        ulList.innerHTML = '';
        for (var i = 0; i < arrTX[1].length; i++) {
            let liItem = document.createElement('li');
            liItem.dataset.id = index2;
            liItem.innerHTML = arrTX[1][i].time + arrTX[1][i].title;
            liItem.dataset.title = arrTX[1][i].title;
            liItem.addEventListener('click', (e) => {
                var title = e.target.dataset.title;
                var eventDetail = showDetails(title);

            });
            ulList.appendChild(liItem);
            let brt = document.createElement('br');
            let hrt = document.createElement('hr');
            ulList.appendChild(hrt);
            ulList.appendChild(brt);
            index2++;
        }
    });
    routeNy.addEventListener('click', () => {
        var index3 = 0;
        const ulList = document.getElementById('myUL');
        ulList.innerHTML = '';
        for (var i = 0; i < arrNY[1].length; i++) {
            let liItem = document.createElement('li');
            liItem.dataset.id = index3;
            liItem.innerHTML = arrNY[1][i].time + arrNY[1][i].title;
            liItem.dataset.title = arrNY[1][i].title;
            liItem.addEventListener('click', (e) => {
                var title = e.target.dataset.title;
                var eventDetail = showDetails(title);

            });

            ulList.appendChild(liItem);

            let brt = document.createElement('br');
            let hrt = document.createElement('hr');
            ulList.appendChild(hrt);
            ulList.appendChild(brt);
            index3++;
        }

    });

};


function showDetails(title) {

    fetch('../detail.json')
        .then((response) => response.json())
        .then((data) => {

            switch (title) {
                case "Intro to 3D Modeling": var detail = data.details[0];
                    break;
                case "Circuit Hacking": var detail = data.details[1];
                    break;
                case "Arduino Antics": var detail = data.details[2];
                    break;
                case "The Printed Lunch": var detail = data.details[3];
                    break;
                case "Droning On": var detail = data.details[4];
                    break;
                case "Brain Hacking": var detail = data.details[5];
                    break;
                case "Make The Future": var detail = data.details[6];
                    break;
                default: detail = "";
            }

            var x = detail[title];

            renderDetails(x);
        }
        );
    function renderDetails(title) {
        var eventDetailContainer = document.getElementById('eventDetails');
        eventDetailContainer.innerHTML = title;

    }
}

