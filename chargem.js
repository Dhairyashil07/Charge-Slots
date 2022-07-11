

// const myMap = L.map('map').setView([22.9074872, 79.07306671], 5); 
// const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
// const attribution =
//     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Coded by coder Dhairyashil ❤️';
// const tileLayer = L.tileLayer(tileUrl, { attribution });

// tileLayer.addTo(myMap);


// function generateList() {
//     const ul = document.querySelector('.list');
//     storeList.forEach((shop) => {
//         const li = document.createElement('li');
//         const div = document.createElement('div');
//         const a = document.createElement('a');
//         const p = document.createElement('p');
//         a.addEventListener('click', () => {
//             flyToStore(shop);
//         });
//         div.classList.add('shop-item');
//         a.innerText = shop.properties.name;
//         a.href = '#';
//         p.innerText = shop.properties.address;

//         div.appendChild(a);
//         div.appendChild(p);
//         li.appendChild(div);
//         ul.appendChild(li);
//     });
// }


// generateList();

// function makePopupContent(shop) {
//     return `
//     <div>
//         <h4>${shop.properties.name}</h4>
//         <p>${shop.properties.address}</p>
//         <div class="btn">
//         <button class="btn"> 
//         <a href="showslot.html">Show</a>
//         </button>
//         </div>
//     </div>
//   `;

// }
// function onEachFeature(feature, layer) {
//     layer.bindPopup(makePopupContent(feature), { closeButton: false, offset: L.point(0, -8) });
// }

// var myIcon = L.icon({
//     iconUrl: 'marker.png',
//     iconSize: [30, 40]
// });

// const shopsLayer = L.geoJSON(storeList, {
//     onEachFeature: onEachFeature,
//     pointToLayer: function (feature, latlng) {
//         return L.marker(latlng, { icon: myIcon });
//     }
// });
// shopsLayer.addTo(myMap);

// function flyToStore(store) {
//     const lat = store.geometry.coordinates[1];
//     const lng = store.geometry.coordinates[0];
//     myMap.flyTo([lat, lng], 14, {
//         duration: 3
//     });
//     setTimeout(() => {
//         L.popup({ closeButton: false, offset: L.point(0, -8) })
//             .setLatLng([lat, lng])
//             .setContent(makePopupContent(store))
//             .openOn(myMap);
//     }, 3000);
// }



// function  updateMap()
// {
//     fetch("")
// }
// updateMap();
const myMap = L.map('map').setView([22.9074872, 79.07306671], 5);
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Coded by coder Dhairyashil ❤️';
const tileLayer = L.tileLayer(tileUrl, { attribution });
tileLayer.addTo(myMap);


function generateList() {
const ul = document.querySelector('.list');
storeList.forEach((shop) => {
        const li = document.createElement('li');
        const div = document.createElement('div');
        const a = document.createElement('a');
        const p = document.createElement('p');
        a.addEventListener('click', () => {
            flyToStore(shop);
        });
        div.classList.add('shop-item');
        a.innerText = shop.properties.name;
        a.href = '#';
        p.innerText = shop.properties.address;

        div.appendChild(a);
        div.appendChild(p);
        li.appendChild(div);
        ul.appendChild(li);
    });
}


generateList();

function makePopupContent(shop) {
    return `
    <div>
        <h4>${shop.properties.name}</h4>
        <p>${shop.properties.address}</p>
        <div class="btn">
        <button class="btn"> 
        <a href="showslot.html">Show</a>
        </button>
        </div>
    </div>
  `;

}
function onEachFeature(feature, layer) {
    layer.bindPopup(makePopupContent(feature), { closeButton: false, offset: L.point(0, -8) });
}

var myIcon = L.icon({
    iconUrl: 'marker.png',
    iconSize: [30, 40]
});

const shopsLayer = L.geoJSON(storeList, {
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: myIcon });
    }
});
shopsLayer.addTo(myMap);

function flyToStore(store) {
    const lat = store.geometry.coordinates[1];
    const lng = store.geometry.coordinates[0];
    myMap.flyTo([lat, lng], 14, {
        duration: 3
    });
    setTimeout(() => {
        L.popup({ closeButton: false, offset: L.point(0, -8) })
            .setLatLng([lat, lng])
            .setContent(makePopupContent(store))
            .openOn(myMap);
    }, 3000);
}

const mymap = document.getElementById('#locateMe')

myMap.onclick('click', () => {
    locateMe();
});
function locateMe() {
    function init() {
        const myMap = L.map('map').setView([22.9074872, 79.07306671], 5);
        const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        const attribution =
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Coded by coder Dhairyashil ❤️';
        const tileLayer = L.tileLayer(tileUrl, { attribution });
        tileLayer.addTo(myMap);
        myMap.attributionControl.setPrefix('');

    }

    function onLocationFound(e) {
        var radius = e.accuracy / 2;
        var location = e.latlng
        myMap.marker(location).addTo(map)
        myMap.circle(location, radius).addTo(map);
    }

    function onLocationError(e) {
        alert(e.message);
    }

    function getLocationLeaflet() {
        map.on('locationfound', onLocationFound);
        map.on('locationerror', onLocationError);
        map.locate({ setView: true, maxZoom: 16 });
    }
}

// below list of current location

//
// function init() {
//    myMap = new L.Map('map');
//    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
//       maxZoom: 18
//    }).addTo(map);
//    myMap.attributionControl.setPrefix(''); 
//    myMap.setView(new L.LatLng(51.505, -0.09), 13);
// }
function onLocationFound(e) {
   var radius = e.accuracy / 2;
   var location = e.latlng
   myMap.marker(location).addTo(map)
   myMap.circle(location, radius).addTo(map);
}

function onLocationError(e) {
   alert(e.message);
}

function getLocationLeaflet() {
   myMap.on('locationfound', onLocationFound);
   myMap.on('locationerror', onLocationError);

   myMap.locate({setView: true, maxZoom: 100});
}
//<body onLoad="javascript:init();">
//<input type="button" value="Locate me!" onClick="javascript:getLocationLeaflet();>
//<div id="map" style="height: 500px"></div>
//</body>