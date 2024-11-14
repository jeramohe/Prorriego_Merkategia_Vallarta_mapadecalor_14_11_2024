var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_Arquitecturaypaisajeurbano_2 = new ol.format.GeoJSON();
var features_Arquitecturaypaisajeurbano_2 = format_Arquitecturaypaisajeurbano_2.readFeatures(json_Arquitecturaypaisajeurbano_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arquitecturaypaisajeurbano_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arquitecturaypaisajeurbano_2.addFeatures(features_Arquitecturaypaisajeurbano_2);
var lyr_Arquitecturaypaisajeurbano_2 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Arquitecturaypaisajeurbano_2, 
                radius: 6 * 2,
                gradient: ['#d7191c', '#fdae61', '#ffffbf', '#abdda4', '#2b83ba'],
                blur: 15,
                shadow: 250,
                title: 'Arquitectura y paisaje urbano '
            });
var format_Cementerios_3 = new ol.format.GeoJSON();
var features_Cementerios_3 = format_Cementerios_3.readFeatures(json_Cementerios_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cementerios_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cementerios_3.addFeatures(features_Cementerios_3);
var lyr_Cementerios_3 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Cementerios_3, 
                radius: 6 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: 'Cementerios '
            });
var format_Camposdegolf_4 = new ol.format.GeoJSON();
var features_Camposdegolf_4 = format_Camposdegolf_4.readFeatures(json_Camposdegolf_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Camposdegolf_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Camposdegolf_4.addFeatures(features_Camposdegolf_4);
var lyr_Camposdegolf_4 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Camposdegolf_4, 
                radius: 6 * 2,
                gradient: ['#d01c8b', '#f1b6da', '#f7f7f7', '#b8e186', '#4dac26'],
                blur: 15,
                shadow: 250,
                title: 'Campos de golf '
            });
var format_Clubesyparques_5 = new ol.format.GeoJSON();
var features_Clubesyparques_5 = format_Clubesyparques_5.readFeatures(json_Clubesyparques_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clubesyparques_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clubesyparques_5.addFeatures(features_Clubesyparques_5);
var lyr_Clubesyparques_5 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Clubesyparques_5, 
                radius: 6 * 2,
                gradient: ['#f1eef6', '#bdc9e1', '#74a9cf', '#2b8cbe', '#045a8d'],
                blur: 15,
                shadow: 250,
                title: 'Clubes y parques '
            });
var format_Universidades_6 = new ol.format.GeoJSON();
var features_Universidades_6 = format_Universidades_6.readFeatures(json_Universidades_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Universidades_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Universidades_6.addFeatures(features_Universidades_6);
var lyr_Universidades_6 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Universidades_6, 
                radius: 6 * 2,
                gradient: ['#f1eef6', '#d7b5d8', '#df65b0', '#dd1c77', '#980043'],
                blur: 15,
                shadow: 250,
                title: 'Universidades '
            });
var format_Administracindebienesraces_7 = new ol.format.GeoJSON();
var features_Administracindebienesraces_7 = format_Administracindebienesraces_7.readFeatures(json_Administracindebienesraces_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Administracindebienesraces_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Administracindebienesraces_7.addFeatures(features_Administracindebienesraces_7);
var lyr_Administracindebienesraces_7 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Administracindebienesraces_7, 
                radius: 6 * 2,
                gradient: ['#440154', '#46085c', '#471063', '#481769', '#481d6f', '#482475', '#472a7a', '#46307e', '#453781', '#433d84', '#414287', '#3f4889', '#3d4e8a', '#3a538b', '#38598c', '#355e8d', '#33638d', '#31688e', '#2e6d8e', '#2c718e', '#2a768e', '#297b8e', '#27808e', '#25848e', '#23898e', '#218e8d', '#20928c', '#1f978b', '#1e9c89', '#1fa188', '#21a585', '#24aa83', '#28ae80', '#2eb37c', '#35b779', '#3dbc74', '#46c06f', '#50c46a', '#5ac864', '#65cb5e', '#70cf57', '#7cd250', '#89d548', '#95d840', '#a2da37', '#b0dd2f', '#bddf26', '#cae11f', '#d8e219', '#e5e419', '#f1e51d', '#fde725'],
                blur: 15,
                shadow: 250,
                title: 'Administración de bienes raíces '
            });
var format_Condominiosycotos_8 = new ol.format.GeoJSON();
var features_Condominiosycotos_8 = format_Condominiosycotos_8.readFeatures(json_Condominiosycotos_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Condominiosycotos_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Condominiosycotos_8.addFeatures(features_Condominiosycotos_8);
var lyr_Condominiosycotos_8 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Condominiosycotos_8, 
                radius: 6 * 2,
                gradient: ['#03051a', '#04051a', '#05061b', '#06071c', '#07071d', '#08081e', '#0a091f', '#0b0920', '#0d0a21', '#0e0b22', '#100b23', '#110c24', '#130d25', '#140e26', '#160e27', '#170f28', '#180f29', '#1a102a', '#1b112b', '#1d112c', '#1e122d', '#20122e', '#211330', '#221331', '#241432', '#251433', '#271534', '#281535', '#2a1636', '#2b1637', '#2d1738', '#2e1739', '#30173a', '#31183b', '#33183c', '#34193d', '#35193e', '#37193f', '#381a40', '#3a1a41', '#3c1a42', '#3d1a42', '#3f1b43', '#401b44', '#421b45', '#431c46', '#451c47', '#461c48', '#481c48', '#491d49', '#4b1d4a', '#4c1d4b', '#4e1d4b', '#501d4c', '#511e4d', '#531e4d', '#541e4e', '#561e4f', '#581e4f', '#591e50', '#5b1e51', '#5c1e51', '#5e1f52', '#601f52', '#611f53', '#631f53', '#641f54', '#661f54', '#681f55', '#691f55', '#6b1f56', '#6d1f56', '#6e1f57', '#701f57', '#711f57', '#731f58', '#751f58', '#761f58', '#781f59', '#7a1f59', '#7b1f59', '#7d1f5a', '#7f1e5a', '#811e5a', '#821e5a', '#841e5a', '#861e5b', '#871e5b', '#891e5b', '#8b1d5b', '#8c1d5b', '#8e1d5b', '#901d5b', '#921c5b', '#931c5b', '#951c5b', '#971c5b', '#981b5b', '#9a1b5b', '#9c1b5b', '#9e1a5b', '#9f1a5b', '#a11a5b', '#a3195b', '#a4195b', '#a6195a', '#a8185a', '#aa185a', '#ab185a', '#ad1759', '#af1759', '#b01759', '#b21758', '#b41658', '#b51657', '#b71657', '#b91657', '#ba1656', '#bc1656', '#bd1655', '#bf1654', '#c11754', '#c21753', '#c41753', '#c51852', '#c71951', '#c81951', '#ca1a50', '#cb1b4f', '#cd1c4e', '#ce1d4e', '#cf1e4d', '#d11f4c', '#d2204c', '#d3214b', '#d5224a', '#d62449', '#d72549', '#d82748', '#d92847', '#db2946', '#dc2b46', '#dd2c45', '#de2e44', '#df2f44', '#e03143', '#e13342', '#e23442', '#e33641', '#e43841', '#e53940', '#e63b40', '#e73d3f', '#e83f3f', '#e8403e', '#e9423e', '#ea443e', '#eb463e', '#eb483e', '#ec4a3e', '#ec4c3e', '#ed4e3e', '#ed503e', '#ee523f', '#ee543f', '#ef5640', '#ef5840', '#ef5a41', '#f05c42', '#f05e42', '#f06043', '#f16244', '#f16445', '#f16646', '#f26747', '#f26948', '#f26b49', '#f26d4b', '#f26f4c', '#f3714d', '#f3734e', '#f37450', '#f37651', '#f37852', '#f47a54', '#f47c55', '#f47d57', '#f47f58', '#f4815a', '#f4835b', '#f4845d', '#f4865e', '#f58860', '#f58a61', '#f58b63', '#f58d64', '#f58f66', '#f59067', '#f59269', '#f5946b', '#f5966c', '#f5976e', '#f59970', '#f69b71', '#f69c73', '#f69e75', '#f6a077', '#f6a178', '#f6a37a', '#f6a47c', '#f6a67e', '#f6a880', '#f6a981', '#f6ab83', '#f6ad85', '#f6ae87', '#f6b089', '#f6b18b', '#f6b38d', '#f6b48f', '#f6b691', '#f6b893', '#f6b995', '#f6bb97', '#f6bc99', '#f6be9b', '#f6bf9d', '#f6c19f', '#f7c2a2', '#f7c4a4', '#f7c6a6', '#f7c7a8', '#f7c9aa', '#f7caac', '#f7ccaf', '#f7cdb1', '#f7cfb3', '#f7d0b5', '#f8d1b8', '#f8d3ba', '#f8d4bc', '#f8d6be', '#f8d7c0', '#f8d9c3', '#f8dac5', '#f8dcc7', '#f9ddc9', '#f9dfcb', '#f9e0cd', '#f9e2d0', '#f9e3d2', '#f9e5d4', '#fae6d6', '#fae8d8', '#faebdd'],
                blur: 15,
                shadow: 250,
                title: 'Condominios y cotos'
            });
var format_Hoteles_9 = new ol.format.GeoJSON();
var features_Hoteles_9 = format_Hoteles_9.readFeatures(json_Hoteles_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hoteles_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hoteles_9.addFeatures(features_Hoteles_9);
var lyr_Hoteles_9 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Hoteles_9, 
                radius: 6 * 2,
                gradient: ['#ca0020', '#f4a582', '#ffffff', '#bababa', '#404040'],
                blur: 15,
                shadow: 250,
                title: 'Hoteles'
            });
var format_Desarrolladores_10 = new ol.format.GeoJSON();
var features_Desarrolladores_10 = format_Desarrolladores_10.readFeatures(json_Desarrolladores_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Desarrolladores_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Desarrolladores_10.addFeatures(features_Desarrolladores_10);
var lyr_Desarrolladores_10 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Desarrolladores_10, 
                radius: 6 * 2,
                gradient: ['#000004', '#02020b', '#050416', '#090720', '#0e0b2b', '#140e36', '#1a1042', '#21114e', '#29115a', '#311165', '#390f6e', '#420f75', '#4a1079', '#52137c', '#5a167e', '#621980', '#6a1c81', '#721f81', '#792282', '#812581', '#892881', '#912b81', '#992d80', '#a1307e', '#aa337d', '#b2357b', '#ba3878', '#c23b75', '#ca3e72', '#d2426f', '#d9466b', '#e04c67', '#e75263', '#ec5860', '#f1605d', '#f4695c', '#f7725c', '#f97b5d', '#fb8560', '#fc8e64', '#fd9869', '#fea16e', '#feaa74', '#feb47b', '#febd82', '#fec68a', '#fecf92', '#fed89a', '#fde2a3', '#fdebac', '#fcf4b6', '#fcfdbf'],
                blur: 15,
                shadow: 250,
                title: 'Desarrolladores'
            });
var format_Equipoderiegoagrcola_11 = new ol.format.GeoJSON();
var features_Equipoderiegoagrcola_11 = format_Equipoderiegoagrcola_11.readFeatures(json_Equipoderiegoagrcola_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Equipoderiegoagrcola_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Equipoderiegoagrcola_11.addFeatures(features_Equipoderiegoagrcola_11);
var lyr_Equipoderiegoagrcola_11 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Equipoderiegoagrcola_11, 
                radius: 6 * 2,
                gradient: ['#fafafa', '#050505'],
                blur: 15,
                shadow: 250,
                title: 'Equipo de riego agrícola '
            });
var format_Competidores_12 = new ol.format.GeoJSON();
var features_Competidores_12 = format_Competidores_12.readFeatures(json_Competidores_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Competidores_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Competidores_12.addFeatures(features_Competidores_12);
var lyr_Competidores_12 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Competidores_12, 
                radius: 7 * 2,
                gradient: ['#00204d', '#00214e', '#002250', '#002252', '#002353', '#002455', '#002557', '#002558', '#00265a', '#00275c', '#00275e', '#002860', '#002961', '#002a63', '#002a65', '#002b67', '#002c69', '#002c6a', '#002d6c', '#002e6e', '#002e6f', '#002f6f', '#002f6f', '#00306f', '#00306f', '#00316f', '#00326f', '#00336f', '#00336f', '#00346f', '#00356e', '#01366e', '#06366e', '#0b376e', '#0f386e', '#12386d', '#15396d', '#183a6d', '#1a3b6d', '#1d3b6d', '#1f3c6d', '#213d6d', '#233e6c', '#243e6c', '#263f6c', '#28406c', '#2a406c', '#2b416c', '#2d426c', '#2e436c', '#30436c', '#31446b', '#32456b', '#34456b', '#35466b', '#36476b', '#38486b', '#39486b', '#3a496b', '#3b4a6b', '#3d4a6b', '#3e4b6b', '#3f4c6b', '#404d6b', '#414d6b', '#424e6b', '#434f6b', '#444f6b', '#46506b', '#47516b', '#48526b', '#49526b', '#4a536b', '#4b546c', '#4c546c', '#4d556c', '#4e566c', '#4f576c', '#50576c', '#51586c', '#52596c', '#53596c', '#545a6c', '#555b6d', '#565c6d', '#575c6d', '#585d6d', '#595e6d', '#595f6d', '#5a5f6d', '#5b606e', '#5c616e', '#5d616e', '#5e626e', '#5f636e', '#60646f', '#61646f', '#62656f', '#63666f', '#64666f', '#646770', '#656870', '#666970', '#676970', '#686a71', '#696b71', '#6a6c71', '#6b6c71', '#6c6d72', '#6c6e72', '#6d6e72', '#6e6f73', '#6f7073', '#707173', '#717174', '#727274', '#727374', '#737475', '#747475', '#757575', '#767676', '#777776', '#787777', '#787877', '#797977', '#7a7a78', '#7b7a78', '#7c7b78', '#7d7c78', '#7e7d78', '#7f7d78', '#807e79', '#817f79', '#828079', '#838079', '#848179', '#848279', '#858379', '#868379', '#878479', '#888579', '#898679', '#8a8779', '#8b8779', '#8c8879', '#8d8979', '#8e8a79', '#8f8a79', '#908b79', '#918c78', '#928d78', '#938e78', '#948e78', '#958f78', '#969078', '#979178', '#989278', '#999278', '#9a9377', '#9b9477', '#9c9577', '#9d9677', '#9e9677', '#9f9777', '#a09877', '#a19976', '#a29a76', '#a39a76', '#a49b76', '#a59c76', '#a69d75', '#a89e75', '#a99f75', '#aa9f75', '#aba074', '#aca174', '#ada274', '#aea374', '#afa473', '#b0a473', '#b1a573', '#b2a672', '#b3a772', '#b4a872', '#b5a971', '#b6a971', '#b7aa71', '#b8ab70', '#b9ac70', '#baad70', '#bbae6f', '#bcaf6f', '#beaf6f', '#bfb06e', '#c0b16e', '#c1b26d', '#c2b36d', '#c3b46d', '#c4b56c', '#c5b56c', '#c6b66b', '#c7b76b', '#c8b86a', '#c9b96a', '#cbba69', '#ccbb69', '#cdbc68', '#cebc68', '#cfbd67', '#d0be67', '#d1bf66', '#d2c066', '#d3c165', '#d4c264', '#d6c364', '#d7c463', '#d8c563', '#d9c562', '#dac661', '#dbc761', '#dcc860', '#ddc95f', '#deca5f', '#e0cb5e', '#e1cc5d', '#e2cd5c', '#e3ce5c', '#e4cf5b', '#e5d05a', '#e6d159', '#e8d259', '#e9d358', '#ead357', '#ebd456', '#ecd555', '#edd654', '#efd753', '#f0d852', '#f1d951', '#f2da50', '#f3db4f', '#f4dc4e', '#f6dd4d', '#f7de4c', '#f8df4b', '#f9e04a', '#fae149', '#fbe248', '#fde346', '#fee445', '#ffe544', '#ffe642', '#ffe742', '#ffe843', '#ffea46'],
                blur: 15,
                shadow: 250,
                title: 'Competidores'
            });
var format_Contratistas_13 = new ol.format.GeoJSON();
var features_Contratistas_13 = format_Contratistas_13.readFeatures(json_Contratistas_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contratistas_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contratistas_13.addFeatures(features_Contratistas_13);
var lyr_Contratistas_13 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Contratistas_13, 
                radius: 6 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: 'Contratistas '
            });
var group_Mapadecalor = new ol.layer.Group({
                                layers: [lyr_Arquitecturaypaisajeurbano_2,lyr_Cementerios_3,lyr_Camposdegolf_4,lyr_Clubesyparques_5,lyr_Universidades_6,lyr_Administracindebienesraces_7,lyr_Condominiosycotos_8,lyr_Hoteles_9,lyr_Desarrolladores_10,lyr_Equipoderiegoagrcola_11,lyr_Competidores_12,lyr_Contratistas_13,],
                                fold: "open",
                                title: "Mapa de calor"});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_Arquitecturaypaisajeurbano_2.setVisible(false);lyr_Cementerios_3.setVisible(false);lyr_Camposdegolf_4.setVisible(false);lyr_Clubesyparques_5.setVisible(false);lyr_Universidades_6.setVisible(false);lyr_Administracindebienesraces_7.setVisible(false);lyr_Condominiosycotos_8.setVisible(false);lyr_Hoteles_9.setVisible(false);lyr_Desarrolladores_10.setVisible(false);lyr_Equipoderiegoagrcola_11.setVisible(false);lyr_Competidores_12.setVisible(true);lyr_Contratistas_13.setVisible(false);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_GoogleMaps_1,group_Mapadecalor];
