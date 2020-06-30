import L from 'leaflet';

var map = L.map("map", {
    crs: L.CRS.Simple,
    minZoom: -3
});

var myLines = [
    {
        type: "LineString",
        coordinates: [[175.2, 145.0], [41.6, 130.1], [13.4, 56.5]]
    },
    {
        type: "LineString",
        coordinates: [[0.0, 0.0], [500.0, 500.0]]
    },
    {
        type: "Point",
        coordinates: [175.2, 145.0],
    }
];

var floorplanGeoJson = [
    {type:"Polygon", coordinates: [[[0.0, 0.0],[5.0, 0.0],[5.0, 7.0],[0.0, 7.0],[0.0, 0.0]]]},
    {type:"Polygon", coordinates: [[[5.0, 3.5],[7.5, 3.5],[7.5, 7.0],[5.0, 7.0],[5.0, 3.5]]]},
    {type:"Polygon", coordinates: [[[7.5, 3.5],[10.0, 3.5],[10.0, 7.0],[7.5, 7.0],[7.5, 3.5]]]},
    {type:"Polygon", coordinates: [[[5.0, 2.5],[10.0, 2.5],[10.0, 3.5],[5.0, 3.5],[5.0, 2.5]]]},
    {type:"Polygon", coordinates: [[[5.0, 0.0],[7.5, 0.0],[7.5, 2.5],[5.0, 2.5],[5.0, 0.0]]]},
    {type:"Polygon", coordinates: [[[7.5, 1.25],[10.0, 1.25],[10.0, 2.5],[7.5, 2.5],[7.5, 1.25]]]},
    {type:"Polygon", coordinates: [[[7.5, 0.0],[10.0, 0.0],[10.0, 1.25],[7.5, 1.25],[7.5, 0.0]]]},
]

var myStyle = {
    color: "#f000",
    weight: 25,
    opacity: 0.65
};

L.geoJSON(floorplanGeoJson).addTo(map);

map.setView(L.latLng(0.0,0.0), 4);