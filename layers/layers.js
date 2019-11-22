var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_OperationalTradeAreas_1 = new ol.format.GeoJSON();
var features_OperationalTradeAreas_1 = format_OperationalTradeAreas_1.readFeatures(json_OperationalTradeAreas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OperationalTradeAreas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OperationalTradeAreas_1.addFeatures(features_OperationalTradeAreas_1);
var lyr_OperationalTradeAreas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OperationalTradeAreas_1, 
                style: style_OperationalTradeAreas_1,
                interactive: true,
    title: 'Operational Trade Areas<br />\
    <img src="styles/legend/OperationalTradeAreas_1_0.png" /> HN<br />\
    <img src="styles/legend/OperationalTradeAreas_1_1.png" /> HZ<br />\
    <img src="styles/legend/OperationalTradeAreas_1_2.png" /> JA<br />\
    <img src="styles/legend/OperationalTradeAreas_1_3.png" /> JI<br />\
    <img src="styles/legend/OperationalTradeAreas_1_4.png" /> KG<br />\
    <img src="styles/legend/OperationalTradeAreas_1_5.png" /> NN<br />\
    <img src="styles/legend/OperationalTradeAreas_1_6.png" /> PL<br />\
    <img src="styles/legend/OperationalTradeAreas_1_7.png" /> TD<br />\
    <img src="styles/legend/OperationalTradeAreas_1_8.png" /> TT<br />\
    <img src="styles/legend/OperationalTradeAreas_1_9.png" /> UL<br />\
    <img src="styles/legend/OperationalTradeAreas_1_10.png" /> ZU<br />'
        });
var format_DistanceBufferedTradeArea35km_2 = new ol.format.GeoJSON();
var features_DistanceBufferedTradeArea35km_2 = format_DistanceBufferedTradeArea35km_2.readFeatures(json_DistanceBufferedTradeArea35km_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistanceBufferedTradeArea35km_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistanceBufferedTradeArea35km_2.addFeatures(features_DistanceBufferedTradeArea35km_2);
var lyr_DistanceBufferedTradeArea35km_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DistanceBufferedTradeArea35km_2, 
                style: style_DistanceBufferedTradeArea35km_2,
                interactive: true,
                title: '<img src="styles/legend/DistanceBufferedTradeArea35km_2.png" /> Distance-Buffered Trade Area (3.5km)'
            });
var format_DistanceBufferedTradeArea3km_3 = new ol.format.GeoJSON();
var features_DistanceBufferedTradeArea3km_3 = format_DistanceBufferedTradeArea3km_3.readFeatures(json_DistanceBufferedTradeArea3km_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistanceBufferedTradeArea3km_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistanceBufferedTradeArea3km_3.addFeatures(features_DistanceBufferedTradeArea3km_3);
var lyr_DistanceBufferedTradeArea3km_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DistanceBufferedTradeArea3km_3, 
                style: style_DistanceBufferedTradeArea3km_3,
                interactive: true,
                title: '<img src="styles/legend/DistanceBufferedTradeArea3km_3.png" /> Distance-Buffered Trade Area (3km)'
            });
var format_DistanceBufferedTradeArea25km_4 = new ol.format.GeoJSON();
var features_DistanceBufferedTradeArea25km_4 = format_DistanceBufferedTradeArea25km_4.readFeatures(json_DistanceBufferedTradeArea25km_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistanceBufferedTradeArea25km_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistanceBufferedTradeArea25km_4.addFeatures(features_DistanceBufferedTradeArea25km_4);
var lyr_DistanceBufferedTradeArea25km_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DistanceBufferedTradeArea25km_4, 
                style: style_DistanceBufferedTradeArea25km_4,
                interactive: true,
                title: '<img src="styles/legend/DistanceBufferedTradeArea25km_4.png" /> Distance-Buffered Trade Area (2.5km)'
            });
var format_DrivetimeDeterminedTradeArea20mins_5 = new ol.format.GeoJSON();
var features_DrivetimeDeterminedTradeArea20mins_5 = format_DrivetimeDeterminedTradeArea20mins_5.readFeatures(json_DrivetimeDeterminedTradeArea20mins_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DrivetimeDeterminedTradeArea20mins_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrivetimeDeterminedTradeArea20mins_5.addFeatures(features_DrivetimeDeterminedTradeArea20mins_5);
var lyr_DrivetimeDeterminedTradeArea20mins_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DrivetimeDeterminedTradeArea20mins_5, 
                style: style_DrivetimeDeterminedTradeArea20mins_5,
                interactive: true,
                title: '<img src="styles/legend/DrivetimeDeterminedTradeArea20mins_5.png" /> Drivetime-Determined Trade Area (20mins)'
            });
var format_DrivetimeDeterminedTradeArea15mins_6 = new ol.format.GeoJSON();
var features_DrivetimeDeterminedTradeArea15mins_6 = format_DrivetimeDeterminedTradeArea15mins_6.readFeatures(json_DrivetimeDeterminedTradeArea15mins_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DrivetimeDeterminedTradeArea15mins_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrivetimeDeterminedTradeArea15mins_6.addFeatures(features_DrivetimeDeterminedTradeArea15mins_6);
var lyr_DrivetimeDeterminedTradeArea15mins_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DrivetimeDeterminedTradeArea15mins_6, 
                style: style_DrivetimeDeterminedTradeArea15mins_6,
                interactive: true,
                title: '<img src="styles/legend/DrivetimeDeterminedTradeArea15mins_6.png" /> Drivetime-Determined Trade Area (15mins)'
            });
var format_DrivetimeDeterminedTradeArea10mins_7 = new ol.format.GeoJSON();
var features_DrivetimeDeterminedTradeArea10mins_7 = format_DrivetimeDeterminedTradeArea10mins_7.readFeatures(json_DrivetimeDeterminedTradeArea10mins_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DrivetimeDeterminedTradeArea10mins_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrivetimeDeterminedTradeArea10mins_7.addFeatures(features_DrivetimeDeterminedTradeArea10mins_7);
var lyr_DrivetimeDeterminedTradeArea10mins_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DrivetimeDeterminedTradeArea10mins_7, 
                style: style_DrivetimeDeterminedTradeArea10mins_7,
                interactive: true,
                title: '<img src="styles/legend/DrivetimeDeterminedTradeArea10mins_7.png" /> Drivetime-Determined Trade Area (10mins)'
            });
var format_DrivetimeDeterminedTradeArea5mins_8 = new ol.format.GeoJSON();
var features_DrivetimeDeterminedTradeArea5mins_8 = format_DrivetimeDeterminedTradeArea5mins_8.readFeatures(json_DrivetimeDeterminedTradeArea5mins_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DrivetimeDeterminedTradeArea5mins_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrivetimeDeterminedTradeArea5mins_8.addFeatures(features_DrivetimeDeterminedTradeArea5mins_8);
var lyr_DrivetimeDeterminedTradeArea5mins_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DrivetimeDeterminedTradeArea5mins_8, 
                style: style_DrivetimeDeterminedTradeArea5mins_8,
                interactive: true,
                title: '<img src="styles/legend/DrivetimeDeterminedTradeArea5mins_8.png" /> Drivetime-Determined Trade Area (5mins)'
            });
var format_BusinessHotspots_9 = new ol.format.GeoJSON();
var features_BusinessHotspots_9 = format_BusinessHotspots_9.readFeatures(json_BusinessHotspots_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BusinessHotspots_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BusinessHotspots_9.addFeatures(features_BusinessHotspots_9);cluster_BusinessHotspots_9 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_BusinessHotspots_9
});
var lyr_BusinessHotspots_9 = new ol.layer.Vector({
                declutter: true,
                source:cluster_BusinessHotspots_9, 
                style: style_BusinessHotspots_9,
                interactive: true,
                title: '<img src="styles/legend/BusinessHotspots_9.png" /> Business Hotspots'
            });
var format_PointofInterestsWithinOperationalTradeArea_10 = new ol.format.GeoJSON();
var features_PointofInterestsWithinOperationalTradeArea_10 = format_PointofInterestsWithinOperationalTradeArea_10.readFeatures(json_PointofInterestsWithinOperationalTradeArea_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PointofInterestsWithinOperationalTradeArea_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PointofInterestsWithinOperationalTradeArea_10.addFeatures(features_PointofInterestsWithinOperationalTradeArea_10);cluster_PointofInterestsWithinOperationalTradeArea_10 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_PointofInterestsWithinOperationalTradeArea_10
});
var lyr_PointofInterestsWithinOperationalTradeArea_10 = new ol.layer.Vector({
                declutter: true,
                source:cluster_PointofInterestsWithinOperationalTradeArea_10, 
                style: style_PointofInterestsWithinOperationalTradeArea_10,
                interactive: true,
                title: '<img src="styles/legend/PointofInterestsWithinOperationalTradeArea_10.png" /> Point of Interests Within Operational Trade Area'
            });
var format_Stores_11 = new ol.format.GeoJSON();
var features_Stores_11 = format_Stores_11.readFeatures(json_Stores_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stores_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stores_11.addFeatures(features_Stores_11);
var lyr_Stores_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Stores_11, 
                style: style_Stores_11,
                interactive: true,
    title: 'Stores<br />\
    <img src="styles/legend/Stores_11_0.png" /> Closed<br />\
    <img src="styles/legend/Stores_11_1.png" /> Opened<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_OperationalTradeAreas_1.setVisible(true);lyr_DistanceBufferedTradeArea35km_2.setVisible(true);lyr_DistanceBufferedTradeArea3km_3.setVisible(true);lyr_DistanceBufferedTradeArea25km_4.setVisible(true);lyr_DrivetimeDeterminedTradeArea20mins_5.setVisible(true);lyr_DrivetimeDeterminedTradeArea15mins_6.setVisible(true);lyr_DrivetimeDeterminedTradeArea10mins_7.setVisible(true);lyr_DrivetimeDeterminedTradeArea5mins_8.setVisible(true);lyr_BusinessHotspots_9.setVisible(true);lyr_PointofInterestsWithinOperationalTradeArea_10.setVisible(true);lyr_Stores_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_OperationalTradeAreas_1,lyr_DistanceBufferedTradeArea35km_2,lyr_DistanceBufferedTradeArea3km_3,lyr_DistanceBufferedTradeArea25km_4,lyr_DrivetimeDeterminedTradeArea20mins_5,lyr_DrivetimeDeterminedTradeArea15mins_6,lyr_DrivetimeDeterminedTradeArea10mins_7,lyr_DrivetimeDeterminedTradeArea5mins_8,lyr_BusinessHotspots_9,lyr_PointofInterestsWithinOperationalTradeArea_10,lyr_Stores_11];
lyr_OperationalTradeAreas_1.set('fieldAliases', {'fid': 'fid', 'Store Code': 'Store Code', 'POD Code': 'POD Code', 'ATM': 'ATM', 'Train Station': 'Train Station', 'Commuter Rail Station': 'Commuter Rail Station', 'Bus Station': 'Bus Station', 'Business Facility': 'Business Facility', 'Grocery Store': 'Grocery Store', 'Restaurant': 'Restaurant', 'Bank': 'Bank', 'Shopping': 'Shopping', 'Hotel': 'Hotel', 'Cinema': 'Cinema', 'Bowling Centre': 'Bowling Centre', 'Sports Complex': 'Sports Complex', 'Sports Centre': 'Sports Centre', 'Hospital': 'Hospital', 'Higher Education': 'Higher Education', 'School': 'School', 'Government Office': 'Government Office', 'Bar or Pub': 'Bar or Pub', 'Convenience Store': 'Convenience Store', 'Clothing Store': 'Clothing Store', 'Department Store': 'Department Store', 'Pharmacy': 'Pharmacy', 'Medical Service': 'Medical Service', 'Residential Area/Building': 'Residential Area/Building', 'Consumer Electronics Store': 'Consumer Electronics Store', 'Bookstore': 'Bookstore', 'Coffee Shop': 'Coffee Shop', 'Industrial Zone': 'Industrial Zone', 'Nightlife': 'Nightlife', 'Performing Arts': 'Performing Arts', 'Speciality Store': 'Speciality Store', 'Sales Numbers': 'Sales Numbers', 'Sales Revenue (TWD)': 'Sales Revenue (TWD)', 'Average Revenue per Bill (TWD)': 'Average Revenue per Bill (TWD)', });
lyr_DistanceBufferedTradeArea35km_2.set('fieldAliases', {'fid': 'fid', 'Store Code': 'Store Code', 'ATM': 'ATM', 'Train Station': 'Train Station', 'Commuter Rail Station': 'Commuter Rail Station', 'Bus Station': 'Bus Station', 'Business Facility': 'Business Facility', 'Grocery Store': 'Grocery Store', 'Restaurant': 'Restaurant', 'Bank': 'Bank', 'Shopping': 'Shopping', 'Hotel': 'Hotel', 'Cinema': 'Cinema', 'Bowling Centre': 'Bowling Centre', 'Sports Complex': 'Sports Complex', 'Sports Centre': 'Sports Centre', 'Hospital': 'Hospital', 'Higher Education': 'Higher Education', 'School': 'School', 'Government Office': 'Government Office', 'Bar or Pub': 'Bar or Pub', 'Convenience Store': 'Convenience Store', 'Clothing Store': 'Clothing Store', 'Department Store': 'Department Store', 'Pharmacy': 'Pharmacy', 'Medical Service': 'Medical Service', 'Residential Area/Building': 'Residential Area/Building', 'Consumer Electronics Store': 'Consumer Electronics Store', 'Bookstore': 'Bookstore', 'Coffee Shop': 'Coffee Shop', 'Industrial Zone': 'Industrial Zone', 'Nightlife': 'Nightlife', 'Performing Arts': 'Performing Arts', 'Speciality Store': 'Speciality Store', });
lyr_DistanceBufferedTradeArea3km_3.set('fieldAliases', {'fid': 'fid', 'Store Code': 'Store Code', 'ATM': 'ATM', 'Train Station': 'Train Station', 'Commuter Rail Station': 'Commuter Rail Station', 'Bus Station': 'Bus Station', 'Business Facility': 'Business Facility', 'Grocery Store': 'Grocery Store', 'Restaurant': 'Restaurant', 'Bank': 'Bank', 'Shopping': 'Shopping', 'Hotel': 'Hotel', 'Cinema': 'Cinema', 'Bowling Centre': 'Bowling Centre', 'Sports Complex': 'Sports Complex', 'Sports Centre': 'Sports Centre', 'Hospital': 'Hospital', 'Higher Education': 'Higher Education', 'School': 'School', 'Government Office': 'Government Office', 'Bar or Pub': 'Bar or Pub', 'Convenience Store': 'Convenience Store', 'Clothing Store': 'Clothing Store', 'Department Store': 'Department Store', 'Pharmacy': 'Pharmacy', 'Medical Service': 'Medical Service', 'Residential Area/Building': 'Residential Area/Building', 'Consumer Electronics Store': 'Consumer Electronics Store', 'Bookstore': 'Bookstore', 'Coffee Shop': 'Coffee Shop', 'Industrial Zone': 'Industrial Zone', 'Nightlife': 'Nightlife', 'Performing Arts': 'Performing Arts', 'Speciality Store': 'Speciality Store', });
lyr_DistanceBufferedTradeArea25km_4.set('fieldAliases', {'fid': 'fid', 'Store Code': 'Store Code', 'ATM': 'ATM', 'Train Station': 'Train Station', 'Commuter Rail Station': 'Commuter Rail Station', 'Bus Station': 'Bus Station', 'Business Facility': 'Business Facility', 'Grocery Store': 'Grocery Store', 'Restaurant': 'Restaurant', 'Nightlife': 'Nightlife', 'Bank': 'Bank', 'Shopping': 'Shopping', 'Hotel': 'Hotel', 'Cinema': 'Cinema', 'Bowling Centre': 'Bowling Centre', 'Sports Complex': 'Sports Complex', 'Sports Centre': 'Sports Centre', 'Hospital': 'Hospital', 'Higher Education': 'Higher Education', 'School': 'School', 'Government Office': 'Government Office', 'Bar or Pub': 'Bar or Pub', 'Convenience Store': 'Convenience Store', 'Clothing Store': 'Clothing Store', 'Department Store': 'Department Store', 'Pharmacy': 'Pharmacy', 'Medical Service': 'Medical Service', 'Residential Area/Building': 'Residential Area/Building', 'Consumer Electronics Store': 'Consumer Electronics Store', 'Bookstore': 'Bookstore', 'Coffee Shop': 'Coffee Shop', 'Industrial Zone': 'Industrial Zone', 'Performing Arts': 'Performing Arts', 'Speciality Store': 'Speciality Store', });
lyr_DrivetimeDeterminedTradeArea20mins_5.set('fieldAliases', {'fid': 'fid', 'Store Name': 'Store Name', 'Store Code': 'Store Code', 'ATM': 'ATM', 'Train Station': 'Train Station', 'Bus Station': 'Bus Station', 'Commuter Rail Station': 'Commuter Rail Station', 'Business Facility': 'Business Facility', 'Grocery Store': 'Grocery Store', 'Restaurant': 'Restaurant', 'Nightlife': 'Nightlife', 'Bank': 'Bank', 'Shopping': 'Shopping', 'Hotel': 'Hotel', 'Cinema': 'Cinema', 'Performing Arts': 'Performing Arts', 'Bowling Centre': 'Bowling Centre', 'Sports Complex': 'Sports Complex', 'Sports Centre': 'Sports Centre', 'Hospital': 'Hospital', 'Higher Education': 'Higher Education', 'School': 'School', 'Government Office': 'Government Office', 'Bar or Pub': 'Bar or Pub', 'Convenience Store': 'Convenience Store', 'Clothing Store': 'Clothing Store', 'Department Store': 'Department Store', 'Pharmacy': 'Pharmacy', 'Speciality Store': 'Speciality Store', 'Medical Service': 'Medical Service', 'Residential Area/Building': 'Residential Area/Building', 'Consumer Electronics Store': 'Consumer Electronics Store', 'Industrial Zone': 'Industrial Zone', 'Bookstore': 'Bookstore', 'Coffee Shop': 'Coffee Shop', });
lyr_DrivetimeDeterminedTradeArea15mins_6.set('fieldAliases', {'fid': 'fid', 'Store Name': 'Store Name', 'Store Code': 'Store Code', 'ATM': 'ATM', 'Train Station': 'Train Station', 'Bus Station': 'Bus Station', 'Commuter Rail Station': 'Commuter Rail Station', 'Business Facility': 'Business Facility', 'Grocery Store': 'Grocery Store', 'Restaurant': 'Restaurant', 'Nightlife': 'Nightlife', 'Bank': 'Bank', 'Shopping': 'Shopping', 'Hotel': 'Hotel', 'Cinema': 'Cinema', 'Performing Arts': 'Performing Arts', 'Bowling Centre': 'Bowling Centre', 'Sports Complex': 'Sports Complex', 'Sports Centre': 'Sports Centre', 'Hospital': 'Hospital', 'Higher Education': 'Higher Education', 'School': 'School', 'Government Office': 'Government Office', 'Bar or Pub': 'Bar or Pub', 'Convenience Store': 'Convenience Store', 'Clothing Store': 'Clothing Store', 'Department Store': 'Department Store', 'Pharmacy': 'Pharmacy', 'Speciality Store': 'Speciality Store', 'Medical Service': 'Medical Service', 'Residential Area/Building': 'Residential Area/Building', 'Consumer Electronics Store': 'Consumer Electronics Store', 'Industrial Zone': 'Industrial Zone', 'Bookstore': 'Bookstore', 'Coffee Shop': 'Coffee Shop', });
lyr_DrivetimeDeterminedTradeArea10mins_7.set('fieldAliases', {'fid': 'fid', 'Store Name': 'Store Name', 'Store Code': 'Store Code', 'ATM': 'ATM', 'Train Station': 'Train Station', 'Bus Station': 'Bus Station', 'Commuter Rail Station': 'Commuter Rail Station', 'Business Facility': 'Business Facility', 'Grocery Store': 'Grocery Store', 'Restaurant': 'Restaurant', 'Nightlife': 'Nightlife', 'Bank': 'Bank', 'Shopping': 'Shopping', 'Hotel': 'Hotel', 'Cinema': 'Cinema', 'Performing Arts': 'Performing Arts', 'Bowling Centre': 'Bowling Centre', 'Sports Complex': 'Sports Complex', 'Sports Centre': 'Sports Centre', 'Hospital': 'Hospital', 'Higher Education': 'Higher Education', 'School': 'School', 'Government Office': 'Government Office', 'Bar or Pub': 'Bar or Pub', 'Convenience Store': 'Convenience Store', 'Clothing Store': 'Clothing Store', 'Department Store': 'Department Store', 'Pharmacy': 'Pharmacy', 'Speciality Store': 'Speciality Store', 'Medical Service': 'Medical Service', 'Residential Area/Building': 'Residential Area/Building', 'Consumer Electronics Store': 'Consumer Electronics Store', 'Industrial Zone': 'Industrial Zone', 'Bookstore': 'Bookstore', 'Coffee Shop': 'Coffee Shop', });
lyr_DrivetimeDeterminedTradeArea5mins_8.set('fieldAliases', {'fid': 'fid', 'Store Name': 'Store Name', 'Store Code': 'Store Code', 'ATM': 'ATM', 'Train Station': 'Train Station', 'Bus Station': 'Bus Station', 'Commuter Rail Station': 'Commuter Rail Station', 'Business Facility': 'Business Facility', 'Grocery Store': 'Grocery Store', 'Restaurant': 'Restaurant', 'Nightlife': 'Nightlife', 'Bank': 'Bank', 'Shopping': 'Shopping', 'Hotel': 'Hotel', 'Cinema': 'Cinema', 'Performing Arts': 'Performing Arts', 'Bowling Centre': 'Bowling Centre', 'Sports Complex': 'Sports Complex', 'Sports Centre': 'Sports Centre', 'Hospital': 'Hospital', 'Higher Education': 'Higher Education', 'School': 'School', 'Government Office': 'Government Office', 'Bar or Pub': 'Bar or Pub', 'Convenience Store': 'Convenience Store', 'Clothing Store': 'Clothing Store', 'Department Store': 'Department Store', 'Pharmacy': 'Pharmacy', 'Speciality Store': 'Speciality Store', 'Medical Service': 'Medical Service', 'Residential Area/Building': 'Residential Area/Building', 'Consumer Electronics Store': 'Consumer Electronics Store', 'Industrial Zone': 'Industrial Zone', 'Bookstore': 'Bookstore', 'Coffee Shop': 'Coffee Shop', });
lyr_BusinessHotspots_9.set('fieldAliases', {'fid': 'fid', 'Facility': 'Facility', 'Hotspot': 'Hotspot', });
lyr_PointofInterestsWithinOperationalTradeArea_10.set('fieldAliases', {'fid': 'fid', 'Store Code': 'Store Code', 'POD Code': 'POD Code', 'Facility': 'Facility', 'Distance from Stores (meters)': 'Distance from Stores (meters)', });
lyr_Stores_11.set('fieldAliases', {'fid': 'fid', 'Milestone': 'Milestone', 'Store Name': 'Store Name', 'Store Address': 'Store Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Sales Revenue (TWD)': 'Sales Revenue (TWD)', 'Average Revenue per Bill (TWD)': 'Average Revenue per Bill (TWD)', 'Sales Numbers': 'Sales Numbers', 'No. of POI': 'No. of POI', });
lyr_OperationalTradeAreas_1.set('fieldImages', {'fid': 'TextEdit', 'Store Code': 'TextEdit', 'POD Code': 'TextEdit', 'ATM': 'Range', 'Train Station': 'Range', 'Commuter Rail Station': 'Range', 'Bus Station': 'Range', 'Business Facility': 'Range', 'Grocery Store': 'Range', 'Restaurant': 'Range', 'Bank': 'Range', 'Shopping': 'Range', 'Hotel': 'Range', 'Cinema': 'Range', 'Bowling Centre': 'Range', 'Sports Complex': 'Range', 'Sports Centre': 'Range', 'Hospital': 'Range', 'Higher Education': 'Range', 'School': 'Range', 'Government Office': 'Range', 'Bar or Pub': 'Range', 'Convenience Store': 'Range', 'Clothing Store': 'Range', 'Department Store': 'Range', 'Pharmacy': 'Range', 'Medical Service': 'Range', 'Residential Area/Building': 'Range', 'Consumer Electronics Store': 'Range', 'Bookstore': 'Range', 'Coffee Shop': 'Range', 'Industrial Zone': 'Range', 'Nightlife': 'Range', 'Performing Arts': 'Range', 'Speciality Store': 'Range', 'Sales Numbers': 'Range', 'Sales Revenue (TWD)': 'TextEdit', 'Average Revenue per Bill (TWD)': 'TextEdit', });
lyr_DistanceBufferedTradeArea35km_2.set('fieldImages', {'fid': '', 'Store Code': '', 'ATM': '', 'Train Station': '', 'Commuter Rail Station': '', 'Bus Station': '', 'Business Facility': '', 'Grocery Store': '', 'Restaurant': '', 'Bank': '', 'Shopping': '', 'Hotel': '', 'Cinema': '', 'Bowling Centre': '', 'Sports Complex': '', 'Sports Centre': '', 'Hospital': '', 'Higher Education': '', 'School': '', 'Government Office': '', 'Bar or Pub': '', 'Convenience Store': '', 'Clothing Store': '', 'Department Store': '', 'Pharmacy': '', 'Medical Service': '', 'Residential Area/Building': '', 'Consumer Electronics Store': '', 'Bookstore': '', 'Coffee Shop': '', 'Industrial Zone': '', 'Nightlife': '', 'Performing Arts': '', 'Speciality Store': '', });
lyr_DistanceBufferedTradeArea3km_3.set('fieldImages', {'fid': '', 'Store Code': '', 'ATM': '', 'Train Station': '', 'Commuter Rail Station': '', 'Bus Station': '', 'Business Facility': '', 'Grocery Store': '', 'Restaurant': '', 'Bank': '', 'Shopping': '', 'Hotel': '', 'Cinema': '', 'Bowling Centre': '', 'Sports Complex': '', 'Sports Centre': '', 'Hospital': '', 'Higher Education': '', 'School': '', 'Government Office': '', 'Bar or Pub': '', 'Convenience Store': '', 'Clothing Store': '', 'Department Store': '', 'Pharmacy': '', 'Medical Service': '', 'Residential Area/Building': '', 'Consumer Electronics Store': '', 'Bookstore': '', 'Coffee Shop': '', 'Industrial Zone': '', 'Nightlife': '', 'Performing Arts': '', 'Speciality Store': '', });
lyr_DistanceBufferedTradeArea25km_4.set('fieldImages', {'fid': '', 'Store Code': '', 'ATM': '', 'Train Station': '', 'Commuter Rail Station': '', 'Bus Station': '', 'Business Facility': '', 'Grocery Store': '', 'Restaurant': '', 'Nightlife': '', 'Bank': '', 'Shopping': '', 'Hotel': '', 'Cinema': '', 'Bowling Centre': '', 'Sports Complex': '', 'Sports Centre': '', 'Hospital': '', 'Higher Education': '', 'School': '', 'Government Office': '', 'Bar or Pub': '', 'Convenience Store': '', 'Clothing Store': '', 'Department Store': '', 'Pharmacy': '', 'Medical Service': '', 'Residential Area/Building': '', 'Consumer Electronics Store': '', 'Bookstore': '', 'Coffee Shop': '', 'Industrial Zone': '', 'Performing Arts': '', 'Speciality Store': '', });
lyr_DrivetimeDeterminedTradeArea20mins_5.set('fieldImages', {'fid': '', 'Store Name': '', 'Store Code': '', 'ATM': '', 'Train Station': '', 'Bus Station': '', 'Commuter Rail Station': '', 'Business Facility': '', 'Grocery Store': '', 'Restaurant': '', 'Nightlife': '', 'Bank': '', 'Shopping': '', 'Hotel': '', 'Cinema': '', 'Performing Arts': '', 'Bowling Centre': '', 'Sports Complex': '', 'Sports Centre': '', 'Hospital': '', 'Higher Education': '', 'School': '', 'Government Office': '', 'Bar or Pub': '', 'Convenience Store': '', 'Clothing Store': '', 'Department Store': '', 'Pharmacy': '', 'Speciality Store': '', 'Medical Service': '', 'Residential Area/Building': '', 'Consumer Electronics Store': '', 'Industrial Zone': '', 'Bookstore': '', 'Coffee Shop': '', });
lyr_DrivetimeDeterminedTradeArea15mins_6.set('fieldImages', {'fid': 'TextEdit', 'Store Name': 'TextEdit', 'Store Code': 'TextEdit', 'ATM': 'Range', 'Train Station': 'Range', 'Bus Station': 'Range', 'Commuter Rail Station': 'Range', 'Business Facility': 'Range', 'Grocery Store': 'Range', 'Restaurant': 'Range', 'Nightlife': 'Range', 'Bank': 'Range', 'Shopping': 'Range', 'Hotel': 'Range', 'Cinema': 'Range', 'Performing Arts': 'Range', 'Bowling Centre': 'Range', 'Sports Complex': 'Range', 'Sports Centre': 'Range', 'Hospital': 'Range', 'Higher Education': 'Range', 'School': 'Range', 'Government Office': 'Range', 'Bar or Pub': 'Range', 'Convenience Store': 'Range', 'Clothing Store': 'Range', 'Department Store': 'Range', 'Pharmacy': 'Range', 'Speciality Store': 'Range', 'Medical Service': 'Range', 'Residential Area/Building': 'Range', 'Consumer Electronics Store': 'Range', 'Industrial Zone': 'Range', 'Bookstore': 'Range', 'Coffee Shop': 'Range', });
lyr_DrivetimeDeterminedTradeArea10mins_7.set('fieldImages', {'fid': 'TextEdit', 'Store Name': 'TextEdit', 'Store Code': 'TextEdit', 'ATM': 'Range', 'Train Station': 'Range', 'Bus Station': 'Range', 'Commuter Rail Station': 'Range', 'Business Facility': 'Range', 'Grocery Store': 'Range', 'Restaurant': 'Range', 'Nightlife': 'Range', 'Bank': 'Range', 'Shopping': 'Range', 'Hotel': 'Range', 'Cinema': 'Range', 'Performing Arts': 'Range', 'Bowling Centre': 'Range', 'Sports Complex': 'Range', 'Sports Centre': 'Range', 'Hospital': 'Range', 'Higher Education': 'Range', 'School': 'Range', 'Government Office': 'Range', 'Bar or Pub': 'Range', 'Convenience Store': 'Range', 'Clothing Store': 'Range', 'Department Store': 'Range', 'Pharmacy': 'Range', 'Speciality Store': 'Range', 'Medical Service': 'Range', 'Residential Area/Building': 'Range', 'Consumer Electronics Store': 'Range', 'Industrial Zone': 'Range', 'Bookstore': 'Range', 'Coffee Shop': 'Range', });
lyr_DrivetimeDeterminedTradeArea5mins_8.set('fieldImages', {'fid': 'TextEdit', 'Store Name': 'TextEdit', 'Store Code': 'TextEdit', 'ATM': 'Range', 'Train Station': 'Range', 'Bus Station': 'Range', 'Commuter Rail Station': 'Range', 'Business Facility': 'Range', 'Grocery Store': 'Range', 'Restaurant': 'Range', 'Nightlife': 'Range', 'Bank': 'Range', 'Shopping': 'Range', 'Hotel': 'Range', 'Cinema': 'Range', 'Performing Arts': 'Range', 'Bowling Centre': 'Range', 'Sports Complex': 'Range', 'Sports Centre': 'Range', 'Hospital': 'Range', 'Higher Education': 'Range', 'School': 'Range', 'Government Office': 'Range', 'Bar or Pub': 'Range', 'Convenience Store': 'Range', 'Clothing Store': 'Range', 'Department Store': 'Range', 'Pharmacy': 'Range', 'Speciality Store': 'Range', 'Medical Service': 'Range', 'Residential Area/Building': 'Range', 'Consumer Electronics Store': 'Range', 'Industrial Zone': 'Range', 'Bookstore': 'Range', 'Coffee Shop': 'Range', });
lyr_BusinessHotspots_9.set('fieldImages', {'fid': '', 'Facility': '', 'Hotspot': '', });
lyr_PointofInterestsWithinOperationalTradeArea_10.set('fieldImages', {'fid': '', 'Store Code': '', 'POD Code': '', 'Facility': '', 'Distance from Stores (meters)': '', });
lyr_Stores_11.set('fieldImages', {'fid': 'TextEdit', 'Milestone': 'TextEdit', 'Store Name': 'TextEdit', 'Store Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Sales Revenue (TWD)': 'TextEdit', 'Average Revenue per Bill (TWD)': 'TextEdit', 'Sales Numbers': 'Range', 'No. of POI': 'Range', });
lyr_OperationalTradeAreas_1.set('fieldLabels', {'fid': 'inline label', 'Store Code': 'inline label', 'POD Code': 'inline label', 'ATM': 'inline label', 'Train Station': 'inline label', 'Commuter Rail Station': 'inline label', 'Bus Station': 'inline label', 'Business Facility': 'inline label', 'Grocery Store': 'inline label', 'Restaurant': 'inline label', 'Bank': 'inline label', 'Shopping': 'inline label', 'Hotel': 'inline label', 'Cinema': 'inline label', 'Bowling Centre': 'inline label', 'Sports Complex': 'inline label', 'Sports Centre': 'inline label', 'Hospital': 'inline label', 'Higher Education': 'inline label', 'School': 'inline label', 'Government Office': 'inline label', 'Bar or Pub': 'inline label', 'Convenience Store': 'inline label', 'Clothing Store': 'inline label', 'Department Store': 'inline label', 'Pharmacy': 'inline label', 'Medical Service': 'inline label', 'Residential Area/Building': 'inline label', 'Consumer Electronics Store': 'inline label', 'Bookstore': 'inline label', 'Coffee Shop': 'inline label', 'Industrial Zone': 'inline label', 'Nightlife': 'inline label', 'Performing Arts': 'inline label', 'Speciality Store': 'inline label', 'Sales Numbers': 'inline label', 'Sales Revenue (TWD)': 'inline label', 'Average Revenue per Bill (TWD)': 'inline label', });
lyr_DistanceBufferedTradeArea35km_2.set('fieldLabels', {'fid': 'inline label', 'Store Code': 'inline label', 'ATM': 'inline label', 'Train Station': 'inline label', 'Commuter Rail Station': 'inline label', 'Bus Station': 'inline label', 'Business Facility': 'inline label', 'Grocery Store': 'inline label', 'Restaurant': 'inline label', 'Bank': 'inline label', 'Shopping': 'inline label', 'Hotel': 'inline label', 'Cinema': 'inline label', 'Bowling Centre': 'inline label', 'Sports Complex': 'inline label', 'Sports Centre': 'inline label', 'Hospital': 'inline label', 'Higher Education': 'inline label', 'School': 'inline label', 'Government Office': 'inline label', 'Bar or Pub': 'inline label', 'Convenience Store': 'inline label', 'Clothing Store': 'inline label', 'Department Store': 'inline label', 'Pharmacy': 'inline label', 'Medical Service': 'inline label', 'Residential Area/Building': 'inline label', 'Consumer Electronics Store': 'inline label', 'Bookstore': 'inline label', 'Coffee Shop': 'inline label', 'Industrial Zone': 'inline label', 'Nightlife': 'inline label', 'Performing Arts': 'inline label', 'Speciality Store': 'inline label', });
lyr_DistanceBufferedTradeArea3km_3.set('fieldLabels', {'fid': 'inline label', 'Store Code': 'inline label', 'ATM': 'inline label', 'Train Station': 'inline label', 'Commuter Rail Station': 'inline label', 'Bus Station': 'inline label', 'Business Facility': 'inline label', 'Grocery Store': 'inline label', 'Restaurant': 'inline label', 'Bank': 'inline label', 'Shopping': 'inline label', 'Hotel': 'inline label', 'Cinema': 'inline label', 'Bowling Centre': 'inline label', 'Sports Complex': 'inline label', 'Sports Centre': 'inline label', 'Hospital': 'inline label', 'Higher Education': 'inline label', 'School': 'inline label', 'Government Office': 'inline label', 'Bar or Pub': 'inline label', 'Convenience Store': 'inline label', 'Clothing Store': 'inline label', 'Department Store': 'inline label', 'Pharmacy': 'inline label', 'Medical Service': 'inline label', 'Residential Area/Building': 'inline label', 'Consumer Electronics Store': 'inline label', 'Bookstore': 'inline label', 'Coffee Shop': 'inline label', 'Industrial Zone': 'inline label', 'Nightlife': 'inline label', 'Performing Arts': 'inline label', 'Speciality Store': 'inline label', });
lyr_DistanceBufferedTradeArea25km_4.set('fieldLabels', {'fid': 'inline label', 'Store Code': 'inline label', 'ATM': 'inline label', 'Train Station': 'inline label', 'Commuter Rail Station': 'inline label', 'Bus Station': 'inline label', 'Business Facility': 'inline label', 'Grocery Store': 'inline label', 'Restaurant': 'inline label', 'Nightlife': 'inline label', 'Bank': 'inline label', 'Shopping': 'inline label', 'Hotel': 'inline label', 'Cinema': 'inline label', 'Bowling Centre': 'inline label', 'Sports Complex': 'inline label', 'Sports Centre': 'inline label', 'Hospital': 'inline label', 'Higher Education': 'inline label', 'School': 'inline label', 'Government Office': 'inline label', 'Bar or Pub': 'inline label', 'Convenience Store': 'inline label', 'Clothing Store': 'inline label', 'Department Store': 'inline label', 'Pharmacy': 'inline label', 'Medical Service': 'inline label', 'Residential Area/Building': 'inline label', 'Consumer Electronics Store': 'inline label', 'Bookstore': 'inline label', 'Coffee Shop': 'inline label', 'Industrial Zone': 'inline label', 'Performing Arts': 'inline label', 'Speciality Store': 'inline label', });
lyr_DrivetimeDeterminedTradeArea20mins_5.set('fieldLabels', {'fid': 'inline label', 'Store Name': 'inline label', 'Store Code': 'inline label', 'ATM': 'inline label', 'Train Station': 'inline label', 'Bus Station': 'inline label', 'Commuter Rail Station': 'inline label', 'Business Facility': 'inline label', 'Grocery Store': 'inline label', 'Restaurant': 'inline label', 'Nightlife': 'inline label', 'Bank': 'inline label', 'Shopping': 'inline label', 'Hotel': 'inline label', 'Cinema': 'inline label', 'Performing Arts': 'inline label', 'Bowling Centre': 'inline label', 'Sports Complex': 'inline label', 'Sports Centre': 'inline label', 'Hospital': 'inline label', 'Higher Education': 'inline label', 'School': 'inline label', 'Government Office': 'inline label', 'Bar or Pub': 'inline label', 'Convenience Store': 'inline label', 'Clothing Store': 'inline label', 'Department Store': 'inline label', 'Pharmacy': 'inline label', 'Speciality Store': 'inline label', 'Medical Service': 'inline label', 'Residential Area/Building': 'inline label', 'Consumer Electronics Store': 'inline label', 'Industrial Zone': 'inline label', 'Bookstore': 'inline label', 'Coffee Shop': 'inline label', });
lyr_DrivetimeDeterminedTradeArea15mins_6.set('fieldLabels', {'fid': 'inline label', 'Store Name': 'inline label', 'Store Code': 'inline label', 'ATM': 'inline label', 'Train Station': 'inline label', 'Bus Station': 'inline label', 'Commuter Rail Station': 'inline label', 'Business Facility': 'inline label', 'Grocery Store': 'inline label', 'Restaurant': 'inline label', 'Nightlife': 'inline label', 'Bank': 'inline label', 'Shopping': 'inline label', 'Hotel': 'inline label', 'Cinema': 'inline label', 'Performing Arts': 'inline label', 'Bowling Centre': 'inline label', 'Sports Complex': 'inline label', 'Sports Centre': 'inline label', 'Hospital': 'inline label', 'Higher Education': 'inline label', 'School': 'inline label', 'Government Office': 'inline label', 'Bar or Pub': 'inline label', 'Convenience Store': 'inline label', 'Clothing Store': 'inline label', 'Department Store': 'inline label', 'Pharmacy': 'inline label', 'Speciality Store': 'inline label', 'Medical Service': 'inline label', 'Residential Area/Building': 'inline label', 'Consumer Electronics Store': 'inline label', 'Industrial Zone': 'inline label', 'Bookstore': 'inline label', 'Coffee Shop': 'inline label', });
lyr_DrivetimeDeterminedTradeArea10mins_7.set('fieldLabels', {'fid': 'inline label', 'Store Name': 'inline label', 'Store Code': 'inline label', 'ATM': 'inline label', 'Train Station': 'inline label', 'Bus Station': 'inline label', 'Commuter Rail Station': 'inline label', 'Business Facility': 'inline label', 'Grocery Store': 'inline label', 'Restaurant': 'inline label', 'Nightlife': 'inline label', 'Bank': 'inline label', 'Shopping': 'inline label', 'Hotel': 'inline label', 'Cinema': 'inline label', 'Performing Arts': 'inline label', 'Bowling Centre': 'inline label', 'Sports Complex': 'inline label', 'Sports Centre': 'inline label', 'Hospital': 'inline label', 'Higher Education': 'inline label', 'School': 'inline label', 'Government Office': 'inline label', 'Bar or Pub': 'inline label', 'Convenience Store': 'inline label', 'Clothing Store': 'inline label', 'Department Store': 'inline label', 'Pharmacy': 'inline label', 'Speciality Store': 'inline label', 'Medical Service': 'inline label', 'Residential Area/Building': 'inline label', 'Consumer Electronics Store': 'inline label', 'Industrial Zone': 'inline label', 'Bookstore': 'inline label', 'Coffee Shop': 'inline label', });
lyr_DrivetimeDeterminedTradeArea5mins_8.set('fieldLabels', {'fid': 'inline label', 'Store Name': 'inline label', 'Store Code': 'inline label', 'ATM': 'inline label', 'Train Station': 'inline label', 'Bus Station': 'inline label', 'Commuter Rail Station': 'inline label', 'Business Facility': 'inline label', 'Grocery Store': 'inline label', 'Restaurant': 'inline label', 'Nightlife': 'inline label', 'Bank': 'inline label', 'Shopping': 'inline label', 'Hotel': 'inline label', 'Cinema': 'inline label', 'Performing Arts': 'inline label', 'Bowling Centre': 'inline label', 'Sports Complex': 'inline label', 'Sports Centre': 'inline label', 'Hospital': 'inline label', 'Higher Education': 'inline label', 'School': 'inline label', 'Government Office': 'inline label', 'Bar or Pub': 'inline label', 'Convenience Store': 'inline label', 'Clothing Store': 'inline label', 'Department Store': 'inline label', 'Pharmacy': 'inline label', 'Speciality Store': 'inline label', 'Medical Service': 'inline label', 'Residential Area/Building': 'inline label', 'Consumer Electronics Store': 'inline label', 'Industrial Zone': 'inline label', 'Bookstore': 'inline label', 'Coffee Shop': 'inline label', });
lyr_BusinessHotspots_9.set('fieldLabels', {'fid': 'inline label', 'Facility': 'inline label', 'Hotspot': 'inline label', });
lyr_PointofInterestsWithinOperationalTradeArea_10.set('fieldLabels', {'fid': 'inline label', 'Store Code': 'inline label', 'POD Code': 'inline label', 'Facility': 'inline label', 'Distance from Stores (meters)': 'inline label', });
lyr_Stores_11.set('fieldLabels', {'fid': 'inline label', 'Milestone': 'inline label', 'Store Name': 'inline label', 'Store Address': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'Sales Revenue (TWD)': 'inline label', 'Average Revenue per Bill (TWD)': 'inline label', 'Sales Numbers': 'inline label', 'No. of POI': 'inline label', });
lyr_Stores_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});