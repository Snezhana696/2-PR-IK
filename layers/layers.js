var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_YandexSatellite_1 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="">Yandex Satellite</a>',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.1025.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });
var format_highway_2 = new ol.format.GeoJSON();
var features_highway_2 = format_highway_2.readFeatures(json_highway_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_2.addFeatures(features_highway_2);
var lyr_highway_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_2, 
                style: style_highway_2,
                popuplayertitle: 'дороги — highway',
                interactive: true,
                title: '<img src="styles/legend/highway_2.png" /> дороги — highway'
            });
var format_1lab1_3 = new ol.format.GeoJSON();
var features_1lab1_3 = format_1lab1_3.readFeatures(json_1lab1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1lab1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1lab1_3.addFeatures(features_1lab1_3);
var lyr_1lab1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1lab1_3, 
                style: style_1lab1_3,
                popuplayertitle: '1 ПР ИК — lab1',
                interactive: true,
                title: '<img src="styles/legend/1lab1_3.png" /> 1 ПР ИК — lab1'
            });
var format_1building_4 = new ol.format.GeoJSON();
var features_1building_4 = format_1building_4.readFeatures(json_1building_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1building_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1building_4.addFeatures(features_1building_4);
var lyr_1building_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1building_4, 
                style: style_1building_4,
                popuplayertitle: '1 ПР ИК — building',
                interactive: true,
                title: '<img src="styles/legend/1building_4.png" /> 1 ПР ИК — building'
            });

lyr_OSMStandard_0.setVisible(true);lyr_YandexSatellite_1.setVisible(true);lyr_highway_2.setVisible(true);lyr_1lab1_3.setVisible(true);lyr_1building_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_YandexSatellite_1,lyr_highway_2,lyr_1lab1_3,lyr_1building_4];
lyr_highway_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'layer': 'layer', 'bridge': 'bridge', 'surface': 'surface', 'name:ru': 'name:ru', 'name:en': 'name:en', 'name': 'name', 'maxspeed': 'maxspeed', 'lanes': 'lanes', 'int_ref': 'int_ref', 'ref': 'ref', });
lyr_1lab1_3.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_1building_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'source:addr': 'source:addr', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'adress': 'adress', 'адрес': 'адрес', });
lyr_highway_2.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'layer': '', 'bridge': '', 'surface': '', 'name:ru': '', 'name:en': '', 'name': '', 'maxspeed': '', 'lanes': '', 'int_ref': '', 'ref': '', });
lyr_1lab1_3.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_1building_4.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'source:addr': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'adress': '', 'адрес': '', });
lyr_highway_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'layer': 'no label', 'bridge': 'no label', 'surface': 'no label', 'name:ru': 'no label', 'name:en': 'no label', 'name': 'no label', 'maxspeed': 'no label', 'lanes': 'no label', 'int_ref': 'no label', 'ref': 'no label', });
lyr_1lab1_3.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_1building_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'source:addr': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'adress': 'no label', 'адрес': 'no label', });
lyr_1building_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});