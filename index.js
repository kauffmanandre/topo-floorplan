import L from 'leaflet';
import turf from 'turf';

var map = L.map("map", {
    crs: L.CRS.Simple,
    minZoom: -3
});

var floorplan = [
    {type:"Polygon", coordinates: [[[0.0, 0.0],[5.0, 0.0],[5.0, 7.0],[0.0, 7.0],[0.0, 0.0]]]},
    {type:"Polygon", coordinates: [[[5.0, 3.5],[7.5, 3.5],[7.5, 7.0],[5.0, 7.0],[5.0, 3.5]]]},
    {type:"Polygon", coordinates: [[[7.5, 3.5],[10.0, 3.5],[10.0, 7.0],[7.5, 7.0],[7.5, 3.5]]]},
    {type:"Polygon", coordinates: [[[5.0, 2.5],[10.0, 2.5],[10.0, 3.5],[5.0, 3.5],[5.0, 2.5]]]},
    {type:"Polygon", coordinates: [[[5.0, 0.0],[7.5, 0.0],[7.5, 2.5],[5.0, 2.5],[5.0, 0.0]]]},
    {type:"Polygon", coordinates: [[[7.5, 1.25],[10.0, 1.25],[10.0, 2.5],[7.5, 2.5],[7.5, 1.25]]]},
    {type:"Polygon", coordinates: [[[7.5, 0.0],[10.0, 0.0],[10.0, 1.25],[7.5, 1.25],[7.5, 0.0]]]},
]

var collection = turf.featureCollection(floorplan.map(obj=>turf.feature(obj)));

var myStyle = {
    color: "#f000",
    weight: 25,
    opacity: 0.65
};

L.geoJSON(collection).addTo(map);

var bbox = turf.bbox(collection);
map.fitBounds([[bbox[0],bbox[1]],[bbox[2],bbox[3]]]);

