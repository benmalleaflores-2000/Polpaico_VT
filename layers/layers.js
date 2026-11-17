ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32719").setExtent([141965.096287, 6250946.040592, 567730.793992, 6521677.489676]);
var wms_layers = [];


        var lyr_ESRIPhysical_0 = new ol.layer.Tile({
            'title': 'ESRI Physical',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_CanterasQuillota_2 = new ol.format.GeoJSON();
var features_CanterasQuillota_2 = format_CanterasQuillota_2.readFeatures(json_CanterasQuillota_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_CanterasQuillota_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanterasQuillota_2.addFeatures(features_CanterasQuillota_2);
var lyr_CanterasQuillota_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanterasQuillota_2, 
                style: style_CanterasQuillota_2,
                popuplayertitle: 'Canteras Quillota',
                interactive: true,
                title: '<img src="styles/legend/CanterasQuillota_2.png" /> Canteras Quillota'
            });
var format_yacimientosminerosaridos_3 = new ol.format.GeoJSON();
var features_yacimientosminerosaridos_3 = format_yacimientosminerosaridos_3.readFeatures(json_yacimientosminerosaridos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_yacimientosminerosaridos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_yacimientosminerosaridos_3.addFeatures(features_yacimientosminerosaridos_3);
var lyr_yacimientosminerosaridos_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_yacimientosminerosaridos_3, 
                style: style_yacimientosminerosaridos_3,
                popuplayertitle: 'yacimientos mineros aridos',
                interactive: true,
                title: '<img src="styles/legend/yacimientosminerosaridos_3.png" /> yacimientos mineros aridos'
            });
var format_yacimientosmineroscanteras_4 = new ol.format.GeoJSON();
var features_yacimientosmineroscanteras_4 = format_yacimientosmineroscanteras_4.readFeatures(json_yacimientosmineroscanteras_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_yacimientosmineroscanteras_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_yacimientosmineroscanteras_4.addFeatures(features_yacimientosmineroscanteras_4);
var lyr_yacimientosmineroscanteras_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_yacimientosmineroscanteras_4, 
                style: style_yacimientosmineroscanteras_4,
                popuplayertitle: 'yacimientos mineros canteras',
                interactive: true,
                title: '<img src="styles/legend/yacimientosmineroscanteras_4.png" /> yacimientos mineros canteras'
            });
var format_Concesionescolindantes_5 = new ol.format.GeoJSON();
var features_Concesionescolindantes_5 = format_Concesionescolindantes_5.readFeatures(json_Concesionescolindantes_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Concesionescolindantes_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Concesionescolindantes_5.addFeatures(features_Concesionescolindantes_5);
var lyr_Concesionescolindantes_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Concesionescolindantes_5, 
                style: style_Concesionescolindantes_5,
                popuplayertitle: 'Concesiones colindantes',
                interactive: true,
                title: '<img src="styles/legend/Concesionescolindantes_5.png" /> Concesiones colindantes'
            });
var format_AsociacindePueblosOriginariosdeQuillota_6 = new ol.format.GeoJSON();
var features_AsociacindePueblosOriginariosdeQuillota_6 = format_AsociacindePueblosOriginariosdeQuillota_6.readFeatures(json_AsociacindePueblosOriginariosdeQuillota_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_AsociacindePueblosOriginariosdeQuillota_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AsociacindePueblosOriginariosdeQuillota_6.addFeatures(features_AsociacindePueblosOriginariosdeQuillota_6);
var lyr_AsociacindePueblosOriginariosdeQuillota_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AsociacindePueblosOriginariosdeQuillota_6, 
                style: style_AsociacindePueblosOriginariosdeQuillota_6,
                popuplayertitle: 'Asociación de Pueblos Originarios de Quillota',
                interactive: true,
                title: '<img src="styles/legend/AsociacindePueblosOriginariosdeQuillota_6.png" /> Asociación de Pueblos Originarios de Quillota'
            });
var format_AsociacinMapucheNewen_7 = new ol.format.GeoJSON();
var features_AsociacinMapucheNewen_7 = format_AsociacinMapucheNewen_7.readFeatures(json_AsociacinMapucheNewen_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_AsociacinMapucheNewen_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AsociacinMapucheNewen_7.addFeatures(features_AsociacinMapucheNewen_7);
var lyr_AsociacinMapucheNewen_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AsociacinMapucheNewen_7, 
                style: style_AsociacinMapucheNewen_7,
                popuplayertitle: 'Asociación Mapuche Newen',
                interactive: true,
                title: '<img src="styles/legend/AsociacinMapucheNewen_7.png" /> Asociación Mapuche Newen'
            });
var format_radio30kmplantas_8 = new ol.format.GeoJSON();
var features_radio30kmplantas_8 = format_radio30kmplantas_8.readFeatures(json_radio30kmplantas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_radio30kmplantas_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_radio30kmplantas_8.addFeatures(features_radio30kmplantas_8);
var lyr_radio30kmplantas_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_radio30kmplantas_8, 
                style: style_radio30kmplantas_8,
                popuplayertitle: 'radio 30 km plantas',
                interactive: true,
                title: '<img src="styles/legend/radio30kmplantas_8.png" /> radio 30 km plantas'
            });
var format_radio15kmplantas_9 = new ol.format.GeoJSON();
var features_radio15kmplantas_9 = format_radio15kmplantas_9.readFeatures(json_radio15kmplantas_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_radio15kmplantas_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_radio15kmplantas_9.addFeatures(features_radio15kmplantas_9);
var lyr_radio15kmplantas_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_radio15kmplantas_9, 
                style: style_radio15kmplantas_9,
                popuplayertitle: 'radio 15 km plantas',
                interactive: true,
                title: '<img src="styles/legend/radio15kmplantas_9.png" /> radio 15 km plantas'
            });
var format_radio3kmplantas_10 = new ol.format.GeoJSON();
var features_radio3kmplantas_10 = format_radio3kmplantas_10.readFeatures(json_radio3kmplantas_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_radio3kmplantas_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_radio3kmplantas_10.addFeatures(features_radio3kmplantas_10);
var lyr_radio3kmplantas_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_radio3kmplantas_10, 
                style: style_radio3kmplantas_10,
                popuplayertitle: 'radio 3 km plantas',
                interactive: true,
                title: '<img src="styles/legend/radio3kmplantas_10.png" /> radio 3 km plantas'
            });
var format_NuevaPlantaBSA_11 = new ol.format.GeoJSON();
var features_NuevaPlantaBSA_11 = format_NuevaPlantaBSA_11.readFeatures(json_NuevaPlantaBSA_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_NuevaPlantaBSA_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NuevaPlantaBSA_11.addFeatures(features_NuevaPlantaBSA_11);
var lyr_NuevaPlantaBSA_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NuevaPlantaBSA_11, 
                style: style_NuevaPlantaBSA_11,
                popuplayertitle: 'Nueva Planta BSA',
                interactive: true,
                title: '<img src="styles/legend/NuevaPlantaBSA_11.png" /> Nueva Planta BSA'
            });
var format_PlantaAggPtreosAconcagua_12 = new ol.format.GeoJSON();
var features_PlantaAggPtreosAconcagua_12 = format_PlantaAggPtreosAconcagua_12.readFeatures(json_PlantaAggPtreosAconcagua_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_PlantaAggPtreosAconcagua_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantaAggPtreosAconcagua_12.addFeatures(features_PlantaAggPtreosAconcagua_12);
var lyr_PlantaAggPtreosAconcagua_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantaAggPtreosAconcagua_12, 
                style: style_PlantaAggPtreosAconcagua_12,
                popuplayertitle: 'Planta Agg Pétreos Aconcagua',
                interactive: true,
                title: '<img src="styles/legend/PlantaAggPtreosAconcagua_12.png" /> Planta Agg Pétreos Aconcagua'
            });
var format_PlantaBSA_13 = new ol.format.GeoJSON();
var features_PlantaBSA_13 = format_PlantaBSA_13.readFeatures(json_PlantaBSA_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_PlantaBSA_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantaBSA_13.addFeatures(features_PlantaBSA_13);
var lyr_PlantaBSA_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantaBSA_13, 
                style: style_PlantaBSA_13,
                popuplayertitle: 'Planta BSA',
                interactive: true,
                title: '<img src="styles/legend/PlantaBSA_13.png" /> Planta BSA'
            });
var format_localidades_14 = new ol.format.GeoJSON();
var features_localidades_14 = format_localidades_14.readFeatures(json_localidades_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_localidades_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_localidades_14.addFeatures(features_localidades_14);
var lyr_localidades_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_localidades_14, 
                style: style_localidades_14,
                popuplayertitle: 'localidades',
                interactive: true,
                title: '<img src="styles/legend/localidades_14.png" /> localidades'
            });
var format_Comunasdelpoligono_15 = new ol.format.GeoJSON();
var features_Comunasdelpoligono_15 = format_Comunasdelpoligono_15.readFeatures(json_Comunasdelpoligono_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Comunasdelpoligono_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comunasdelpoligono_15.addFeatures(features_Comunasdelpoligono_15);
var lyr_Comunasdelpoligono_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Comunasdelpoligono_15, 
                style: style_Comunasdelpoligono_15,
                popuplayertitle: 'Comunas del poligono',
                interactive: false,
                title: '<img src="styles/legend/Comunasdelpoligono_15.png" /> Comunas del poligono'
            });
var format_PREMVALPREDIO50_16 = new ol.format.GeoJSON();
var features_PREMVALPREDIO50_16 = format_PREMVALPREDIO50_16.readFeatures(json_PREMVALPREDIO50_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_PREMVALPREDIO50_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PREMVALPREDIO50_16.addFeatures(features_PREMVALPREDIO50_16);
var lyr_PREMVALPREDIO50_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PREMVALPREDIO50_16, 
                style: style_PREMVALPREDIO50_16,
                popuplayertitle: 'PREMVAL PREDIO 50',
                interactive: true,
                title: '<img src="styles/legend/PREMVALPREDIO50_16.png" /> PREMVAL PREDIO 50'
            });
var format_PRC7COMUNAS_17 = new ol.format.GeoJSON();
var features_PRC7COMUNAS_17 = format_PRC7COMUNAS_17.readFeatures(json_PRC7COMUNAS_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_PRC7COMUNAS_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRC7COMUNAS_17.addFeatures(features_PRC7COMUNAS_17);
var lyr_PRC7COMUNAS_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PRC7COMUNAS_17, 
                style: style_PRC7COMUNAS_17,
                popuplayertitle: 'PRC 7 COMUNAS',
                interactive: true,
                title: '<img src="styles/legend/PRC7COMUNAS_17.png" /> PRC 7 COMUNAS'
            });
var format_Uv_comunasdelproyecto_18 = new ol.format.GeoJSON();
var features_Uv_comunasdelproyecto_18 = format_Uv_comunasdelproyecto_18.readFeatures(json_Uv_comunasdelproyecto_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Uv_comunasdelproyecto_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Uv_comunasdelproyecto_18.addFeatures(features_Uv_comunasdelproyecto_18);
var lyr_Uv_comunasdelproyecto_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Uv_comunasdelproyecto_18, 
                style: style_Uv_comunasdelproyecto_18,
                popuplayertitle: 'Uv_comunas del proyecto',
                interactive: true,
                title: '<img src="styles/legend/Uv_comunasdelproyecto_18.png" /> Uv_comunas del proyecto'
            });
var format_CCU20237COMUNAS_19 = new ol.format.GeoJSON();
var features_CCU20237COMUNAS_19 = format_CCU20237COMUNAS_19.readFeatures(json_CCU20237COMUNAS_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_CCU20237COMUNAS_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CCU20237COMUNAS_19.addFeatures(features_CCU20237COMUNAS_19);
var lyr_CCU20237COMUNAS_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CCU20237COMUNAS_19, 
                style: style_CCU20237COMUNAS_19,
                popuplayertitle: 'CCU 2023 7 COMUNAS',
                interactive: true,
                title: '<img src="styles/legend/CCU20237COMUNAS_19.png" /> CCU 2023 7 COMUNAS'
            });
var format_redvialproyecto_20 = new ol.format.GeoJSON();
var features_redvialproyecto_20 = format_redvialproyecto_20.readFeatures(json_redvialproyecto_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_redvialproyecto_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_redvialproyecto_20.addFeatures(features_redvialproyecto_20);
var lyr_redvialproyecto_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_redvialproyecto_20, 
                style: style_redvialproyecto_20,
                popuplayertitle: 'red vial proyecto',
                interactive: true,
                title: '<img src="styles/legend/redvialproyecto_20.png" /> red vial proyecto'
            });
var format_LU7COMUNAS_21 = new ol.format.GeoJSON();
var features_LU7COMUNAS_21 = format_LU7COMUNAS_21.readFeatures(json_LU7COMUNAS_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_LU7COMUNAS_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LU7COMUNAS_21.addFeatures(features_LU7COMUNAS_21);
var lyr_LU7COMUNAS_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LU7COMUNAS_21, 
                style: style_LU7COMUNAS_21,
                popuplayertitle: 'LU 7 COMUNAS',
                interactive: true,
                title: '<img src="styles/legend/LU7COMUNAS_21.png" /> LU 7 COMUNAS'
            });
var format_Uesgeomorfologicascomunas_22 = new ol.format.GeoJSON();
var features_Uesgeomorfologicascomunas_22 = format_Uesgeomorfologicascomunas_22.readFeatures(json_Uesgeomorfologicascomunas_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Uesgeomorfologicascomunas_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Uesgeomorfologicascomunas_22.addFeatures(features_Uesgeomorfologicascomunas_22);
var lyr_Uesgeomorfologicascomunas_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Uesgeomorfologicascomunas_22, 
                style: style_Uesgeomorfologicascomunas_22,
                popuplayertitle: 'Ues geomorfologicas comunas',
                interactive: true,
                title: '<img src="styles/legend/Uesgeomorfologicascomunas_22.png" /> Ues geomorfologicas comunas'
            });
var format_mapageologicocomunas_23 = new ol.format.GeoJSON();
var features_mapageologicocomunas_23 = format_mapageologicocomunas_23.readFeatures(json_mapageologicocomunas_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_mapageologicocomunas_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mapageologicocomunas_23.addFeatures(features_mapageologicocomunas_23);
var lyr_mapageologicocomunas_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mapageologicocomunas_23, 
                style: style_mapageologicocomunas_23,
                popuplayertitle: 'mapa geologico comunas',
                interactive: true,
                title: '<img src="styles/legend/mapageologicocomunas_23.png" /> mapa geologico comunas'
            });
var format_Esteros_24 = new ol.format.GeoJSON();
var features_Esteros_24 = format_Esteros_24.readFeatures(json_Esteros_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Esteros_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Esteros_24.addFeatures(features_Esteros_24);
var lyr_Esteros_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Esteros_24, 
                style: style_Esteros_24,
                popuplayertitle: 'Esteros',
                interactive: true,
                title: '<img src="styles/legend/Esteros_24.png" /> Esteros'
            });
var format_CURSORIOACONCAGUA_25 = new ol.format.GeoJSON();
var features_CURSORIOACONCAGUA_25 = format_CURSORIOACONCAGUA_25.readFeatures(json_CURSORIOACONCAGUA_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_CURSORIOACONCAGUA_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CURSORIOACONCAGUA_25.addFeatures(features_CURSORIOACONCAGUA_25);
var lyr_CURSORIOACONCAGUA_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CURSORIOACONCAGUA_25, 
                style: style_CURSORIOACONCAGUA_25,
                popuplayertitle: 'CURSO RIO ACONCAGUA',
                interactive: true,
                title: '<img src="styles/legend/CURSORIOACONCAGUA_25.png" /> CURSO RIO ACONCAGUA'
            });
var format_HumedalesUrbanosMMA2025_26 = new ol.format.GeoJSON();
var features_HumedalesUrbanosMMA2025_26 = format_HumedalesUrbanosMMA2025_26.readFeatures(json_HumedalesUrbanosMMA2025_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_HumedalesUrbanosMMA2025_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HumedalesUrbanosMMA2025_26.addFeatures(features_HumedalesUrbanosMMA2025_26);
var lyr_HumedalesUrbanosMMA2025_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HumedalesUrbanosMMA2025_26, 
                style: style_HumedalesUrbanosMMA2025_26,
                popuplayertitle: 'Humedales Urbanos MMA 2025',
                interactive: true,
                title: '<img src="styles/legend/HumedalesUrbanosMMA2025_26.png" /> Humedales Urbanos MMA 2025'
            });
var format_Sitiosprioritarios2021proyecto_27 = new ol.format.GeoJSON();
var features_Sitiosprioritarios2021proyecto_27 = format_Sitiosprioritarios2021proyecto_27.readFeatures(json_Sitiosprioritarios2021proyecto_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Sitiosprioritarios2021proyecto_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitiosprioritarios2021proyecto_27.addFeatures(features_Sitiosprioritarios2021proyecto_27);
var lyr_Sitiosprioritarios2021proyecto_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sitiosprioritarios2021proyecto_27, 
                style: style_Sitiosprioritarios2021proyecto_27,
                popuplayertitle: 'Sitios prioritarios 2021 proyecto',
                interactive: true,
                title: '<img src="styles/legend/Sitiosprioritarios2021proyecto_27.png" /> Sitios prioritarios 2021 proyecto'
            });
var format_PoligonosfinalesdePolpaico_28 = new ol.format.GeoJSON();
var features_PoligonosfinalesdePolpaico_28 = format_PoligonosfinalesdePolpaico_28.readFeatures(json_PoligonosfinalesdePolpaico_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_PoligonosfinalesdePolpaico_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonosfinalesdePolpaico_28.addFeatures(features_PoligonosfinalesdePolpaico_28);
var lyr_PoligonosfinalesdePolpaico_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonosfinalesdePolpaico_28, 
                style: style_PoligonosfinalesdePolpaico_28,
                popuplayertitle: 'Poligonos finales de Polpaico',
                interactive: true,
                title: '<img src="styles/legend/PoligonosfinalesdePolpaico_28.png" /> Poligonos finales de Polpaico'
            });
var format_PrediosfinalesdePolpaico_29 = new ol.format.GeoJSON();
var features_PrediosfinalesdePolpaico_29 = format_PrediosfinalesdePolpaico_29.readFeatures(json_PrediosfinalesdePolpaico_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_PrediosfinalesdePolpaico_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrediosfinalesdePolpaico_29.addFeatures(features_PrediosfinalesdePolpaico_29);
var lyr_PrediosfinalesdePolpaico_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrediosfinalesdePolpaico_29, 
                style: style_PrediosfinalesdePolpaico_29,
                popuplayertitle: 'Predios finales de Polpaico',
                interactive: true,
                title: '<img src="styles/legend/PrediosfinalesdePolpaico_29.png" /> Predios finales de Polpaico'
            });
var group_AMBIENTAL = new ol.layer.Group({
                                layers: [lyr_HumedalesUrbanosMMA2025_26,lyr_Sitiosprioritarios2021proyecto_27,],
                                fold: 'open',
                                title: 'AMBIENTAL'});
var group_HIDROLOGIA = new ol.layer.Group({
                                layers: [lyr_Esteros_24,lyr_CURSORIOACONCAGUA_25,],
                                fold: 'open',
                                title: 'HIDROLOGIA'});
var group_Mediofsico = new ol.layer.Group({
                                layers: [lyr_Uesgeomorfologicascomunas_22,lyr_mapageologicocomunas_23,],
                                fold: 'open',
                                title: 'Medio físico'});
var group_URBANO = new ol.layer.Group({
                                layers: [lyr_CCU20237COMUNAS_19,lyr_redvialproyecto_20,lyr_LU7COMUNAS_21,],
                                fold: 'open',
                                title: 'URBANO'});
var group_IPT = new ol.layer.Group({
                                layers: [lyr_PREMVALPREDIO50_16,lyr_PRC7COMUNAS_17,lyr_Uv_comunasdelproyecto_18,],
                                fold: 'open',
                                title: 'IPT'});
var group_DPA = new ol.layer.Group({
                                layers: [lyr_localidades_14,lyr_Comunasdelpoligono_15,],
                                fold: 'open',
                                title: 'DPA'});
var group_PLANTASRIDOS = new ol.layer.Group({
                                layers: [lyr_radio30kmplantas_8,lyr_radio15kmplantas_9,lyr_radio3kmplantas_10,lyr_NuevaPlantaBSA_11,lyr_PlantaAggPtreosAconcagua_12,lyr_PlantaBSA_13,],
                                fold: 'open',
                                title: 'PLANTAS ÁRIDOS'});
var group_PPOO = new ol.layer.Group({
                                layers: [lyr_AsociacindePueblosOriginariosdeQuillota_6,lyr_AsociacinMapucheNewen_7,],
                                fold: 'open',
                                title: 'PP OO'});
var group_YACIMIENTOS = new ol.layer.Group({
                                layers: [lyr_CanterasQuillota_2,lyr_yacimientosminerosaridos_3,lyr_yacimientosmineroscanteras_4,lyr_Concesionescolindantes_5,],
                                fold: 'open',
                                title: 'YACIMIENTOS'});

lyr_ESRIPhysical_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_CanterasQuillota_2.setVisible(true);lyr_yacimientosminerosaridos_3.setVisible(true);lyr_yacimientosmineroscanteras_4.setVisible(true);lyr_Concesionescolindantes_5.setVisible(true);lyr_AsociacindePueblosOriginariosdeQuillota_6.setVisible(true);lyr_AsociacinMapucheNewen_7.setVisible(true);lyr_radio30kmplantas_8.setVisible(true);lyr_radio15kmplantas_9.setVisible(true);lyr_radio3kmplantas_10.setVisible(true);lyr_NuevaPlantaBSA_11.setVisible(true);lyr_PlantaAggPtreosAconcagua_12.setVisible(true);lyr_PlantaBSA_13.setVisible(true);lyr_localidades_14.setVisible(true);lyr_Comunasdelpoligono_15.setVisible(true);lyr_PREMVALPREDIO50_16.setVisible(true);lyr_PRC7COMUNAS_17.setVisible(true);lyr_Uv_comunasdelproyecto_18.setVisible(true);lyr_CCU20237COMUNAS_19.setVisible(true);lyr_redvialproyecto_20.setVisible(true);lyr_LU7COMUNAS_21.setVisible(true);lyr_Uesgeomorfologicascomunas_22.setVisible(true);lyr_mapageologicocomunas_23.setVisible(true);lyr_Esteros_24.setVisible(true);lyr_CURSORIOACONCAGUA_25.setVisible(true);lyr_HumedalesUrbanosMMA2025_26.setVisible(true);lyr_Sitiosprioritarios2021proyecto_27.setVisible(true);lyr_PoligonosfinalesdePolpaico_28.setVisible(true);lyr_PrediosfinalesdePolpaico_29.setVisible(true);
var layersList = [lyr_ESRIPhysical_0,lyr_GoogleSatellite_1,group_YACIMIENTOS,group_PPOO,group_PLANTASRIDOS,group_DPA,group_IPT,group_URBANO,group_Mediofsico,group_HIDROLOGIA,group_AMBIENTAL,lyr_PoligonosfinalesdePolpaico_28,lyr_PrediosfinalesdePolpaico_29];
lyr_CanterasQuillota_2.set('fieldAliases', {'Name': 'Name', });
lyr_yacimientosminerosaridos_3.set('fieldAliases', {'objectid': 'objectid', 'id_proceso': 'id_proceso', 'id_yacimie': 'id_yacimie', 'nombre': 'nombre', 'otros_nomb': 'otros_nomb', 'tipo_recur': 'tipo_recur', 'grupo_recu': 'grupo_recu', 'edad_geolo': 'edad_geolo', 'modelo_gen': 'modelo_gen', 'tamano_yac': 'tamano_yac', 'actividad_': 'actividad_', 'cantidad_m': 'cantidad_m', 'propietari': 'propietari', 'observacio': 'observacio', 'geologo_te': 'geologo_te', 'fecha_terr': 'fecha_terr', 'latitud_su': 'latitud_su', 'longitud_o': 'longitud_o', 'proyeccion': 'proyeccion', 'utm_este': 'utm_este', 'utm_norte': 'utm_norte', 'proyecci_1': 'proyecci_1', 'error_metr': 'error_metr', 'metodo_coo': 'metodo_coo', 'fuente_coo': 'fuente_coo', 'descripcio': 'descripcio', 'region': 'region', 'provincia': 'provincia', 'comuna': 'comuna', 'carta_igm': 'carta_igm', 'descripc_1': 'descripc_1', 'accesibili': 'accesibili', 'descripc_2': 'descripc_2', 'id_distrit': 'id_distrit', 'nombre_dis': 'nombre_dis', 'descripc_3': 'descripc_3', 'url_pdf': 'url_pdf', 'fme_reject': 'fme_reject', 'cod_epsg': 'cod_epsg', });
lyr_yacimientosmineroscanteras_4.set('fieldAliases', {'objectid': 'objectid', 'id_proceso': 'id_proceso', 'id_yacimie': 'id_yacimie', 'nombre': 'nombre', 'otros_nomb': 'otros_nomb', 'tipo_recur': 'tipo_recur', 'grupo_recu': 'grupo_recu', 'edad_geolo': 'edad_geolo', 'modelo_gen': 'modelo_gen', 'tamano_yac': 'tamano_yac', 'actividad_': 'actividad_', 'cantidad_m': 'cantidad_m', 'propietari': 'propietari', 'observacio': 'observacio', 'geologo_te': 'geologo_te', 'fecha_terr': 'fecha_terr', 'latitud_su': 'latitud_su', 'longitud_o': 'longitud_o', 'proyeccion': 'proyeccion', 'utm_este': 'utm_este', 'utm_norte': 'utm_norte', 'proyecci_1': 'proyecci_1', 'error_metr': 'error_metr', 'metodo_coo': 'metodo_coo', 'fuente_coo': 'fuente_coo', 'descripcio': 'descripcio', 'region': 'region', 'provincia': 'provincia', 'comuna': 'comuna', 'carta_igm': 'carta_igm', 'descripc_1': 'descripc_1', 'accesibili': 'accesibili', 'descripc_2': 'descripc_2', 'id_distrit': 'id_distrit', 'nombre_dis': 'nombre_dis', 'descripc_3': 'descripc_3', 'url_pdf': 'url_pdf', 'fme_reject': 'fme_reject', 'cod_epsg': 'cod_epsg', });
lyr_Concesionescolindantes_5.set('fieldAliases', {'Titular': 'Titular', 'Estado': 'Estado', 'Su (has)': 'Su (has)', 'Ubicación': 'Ubicación', 'Tipo': 'Tipo', 'Año': 'Año', 'Name': 'Name', 'ROL': 'ROL', });
lyr_AsociacindePueblosOriginariosdeQuillota_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AsociacinMapucheNewen_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_radio30kmplantas_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_radio15kmplantas_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_radio3kmplantas_10.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_NuevaPlantaBSA_11.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_PlantaAggPtreosAconcagua_12.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_PlantaBSA_13.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_localidades_14.set('fieldAliases', {'name': 'name', });
lyr_Comunasdelpoligono_15.set('fieldAliases', {'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', });
lyr_PREMVALPREDIO50_16.set('fieldAliases', {'REGION': 'REGION', 'COMUNA': 'COMUNA', 'SECTOR': 'SECTOR', 'ZONA': 'ZONA', 'NOMBRE': 'NOMBRE', 'UPERM': 'UPERM', 'UPROH': 'UPROH', 'Shape_STAr': 'Shape_STAr', 'Shape_STLe': 'Shape_STLe', });
lyr_PRC7COMUNAS_17.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'REG': 'REG', 'COM': 'COM', 'LOC': 'LOC', 'ZONA': 'ZONA', 'NOM': 'NOM', 'UPERM': 'UPERM', 'UPROH': 'UPROH', 'P_DO': 'P_DO', 'N_DOC': 'N_DOC', 'T_DO': 'T_DO', 'OBS': 'OBS', 'OBJECTID': 'OBJECTID', 'N_DO': 'N_DO', 'layer': 'layer', 'path': 'path', });
lyr_Uv_comunasdelproyecto_18.set('fieldAliases', {'t_reg_ca': 't_reg_ca', 't_prov_ca': 't_prov_ca', 't_com': 't_com', 't_reg_nom': 't_reg_nom', 't_prov_nom': 't_prov_nom', 't_com_nom': 't_com_nom', 't_id_uv_ca': 't_id_uv_ca', 'uv_carto': 'uv_carto', 't_uv_nom': 't_uv_nom', });
lyr_CCU20237COMUNAS_19.set('fieldAliases', {'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', });
lyr_redvialproyecto_20.set('fieldAliases', {'shape_leng': 'shape_leng', 'st_length_': 'st_length_', 'Nom_Ruta': 'Nom_Ruta', 'Rol_Mop': 'Rol_Mop', 'Clase_Ruta': 'Clase_Ruta', 'Tipo_Carpe': 'Tipo_Carpe', 'Catego': 'Catego', 'Cod_Region': 'Cod_Region', 'layer': 'layer', 'path': 'path', 'tipo': 'tipo', });
lyr_LU7COMUNAS_21.set('fieldAliases', {'REG': 'REG', 'COM': 'COM', 'NOM': 'NOM', 'INSTRUMENT': 'INSTRUMENT', 'ADMIN': 'ADMIN', 'DO': 'DO', 'N_DOC': 'N_DOC', 'T_DOC': 'T_DOC', 'Shape_STAr': 'Shape_STAr', 'Shape_STLe': 'Shape_STLe', });
lyr_Uesgeomorfologicascomunas_22.set('fieldAliases', {'FID': 'FID', 'unidad': 'unidad', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_mapageologicocomunas_23.set('fieldAliases', {'GEO': 'GEO', 'EPOCA': 'EPOCA', 'COMPOSICIO': 'COMPOSICIO', 'ERA': 'ERA', 'PERIODO': 'PERIODO', 'M2': 'M2', 'HA': 'HA', });
lyr_Esteros_24.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'COD_CUEN': 'COD_CUEN', 'COD_SUBC': 'COD_SUBC', 'COD_SSUBC': 'COD_SSUBC', 'NOM_CUEN': 'NOM_CUEN', 'NOM_SUBC': 'NOM_SUBC', 'NOM_SSUBC': 'NOM_SSUBC', 'STRAHLER_N': 'STRAHLER_N', 'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'DIRECCION': 'DIRECCION', 'Shape_Leng': 'Shape_Leng', });
lyr_CURSORIOACONCAGUA_25.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'COD_CUEN': 'COD_CUEN', 'COD_SUBC': 'COD_SUBC', 'COD_SSUBC': 'COD_SSUBC', 'NOM_CUEN': 'NOM_CUEN', 'NOM_SUBC': 'NOM_SUBC', 'NOM_SSUBC': 'NOM_SSUBC', 'STRAHLER_N': 'STRAHLER_N', 'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'DIRECCION': 'DIRECCION', 'Shape_Leng': 'Shape_Leng', });
lyr_HumedalesUrbanosMMA2025_26.set('fieldAliases', {'objectid': 'objectid', 'region': 'region', 'comuna': 'comuna', 'cod_humeda': 'cod_humeda', 'nombre_hum': 'nombre_hum', 'ha': 'ha', 'proceso_hu': 'proceso_hu', 'resolucion': 'resolucion', 'url_res_bc': 'url_res_bc', 'url_simbio': 'url_simbio', 'srid': 'srid', });
lyr_Sitiosprioritarios2021proyecto_27.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_PoligonosfinalesdePolpaico_28.set('fieldAliases', {'Name': 'Name', 'Superficie': 'Superficie', 'Dueño': 'Dueño', });
lyr_PrediosfinalesdePolpaico_29.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CanterasQuillota_2.set('fieldImages', {'Name': '', });
lyr_yacimientosminerosaridos_3.set('fieldImages', {'objectid': '', 'id_proceso': '', 'id_yacimie': '', 'nombre': '', 'otros_nomb': '', 'tipo_recur': '', 'grupo_recu': '', 'edad_geolo': '', 'modelo_gen': '', 'tamano_yac': '', 'actividad_': '', 'cantidad_m': '', 'propietari': '', 'observacio': '', 'geologo_te': '', 'fecha_terr': '', 'latitud_su': '', 'longitud_o': '', 'proyeccion': '', 'utm_este': '', 'utm_norte': '', 'proyecci_1': '', 'error_metr': '', 'metodo_coo': '', 'fuente_coo': '', 'descripcio': '', 'region': '', 'provincia': '', 'comuna': '', 'carta_igm': '', 'descripc_1': '', 'accesibili': '', 'descripc_2': '', 'id_distrit': '', 'nombre_dis': '', 'descripc_3': '', 'url_pdf': '', 'fme_reject': '', 'cod_epsg': '', });
lyr_yacimientosmineroscanteras_4.set('fieldImages', {'objectid': '', 'id_proceso': '', 'id_yacimie': '', 'nombre': '', 'otros_nomb': '', 'tipo_recur': '', 'grupo_recu': '', 'edad_geolo': '', 'modelo_gen': '', 'tamano_yac': '', 'actividad_': '', 'cantidad_m': '', 'propietari': '', 'observacio': '', 'geologo_te': '', 'fecha_terr': '', 'latitud_su': '', 'longitud_o': '', 'proyeccion': '', 'utm_este': '', 'utm_norte': '', 'proyecci_1': '', 'error_metr': '', 'metodo_coo': '', 'fuente_coo': '', 'descripcio': '', 'region': '', 'provincia': '', 'comuna': '', 'carta_igm': '', 'descripc_1': '', 'accesibili': '', 'descripc_2': '', 'id_distrit': '', 'nombre_dis': '', 'descripc_3': '', 'url_pdf': '', 'fme_reject': '', 'cod_epsg': '', });
lyr_Concesionescolindantes_5.set('fieldImages', {'Titular': '', 'Estado': '', 'Su (has)': '', 'Ubicación': '', 'Tipo': '', 'Año': '', 'Name': '', 'ROL': '', });
lyr_AsociacindePueblosOriginariosdeQuillota_6.set('fieldImages', {'id': '', 'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_AsociacinMapucheNewen_7.set('fieldImages', {'id': '', 'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_radio30kmplantas_8.set('fieldImages', {'id': '', 'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'layer': '', 'path': '', });
lyr_radio15kmplantas_9.set('fieldImages', {'id': '', 'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'layer': '', 'path': '', });
lyr_radio3kmplantas_10.set('fieldImages', {'id': '', 'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'layer': '', 'path': '', });
lyr_NuevaPlantaBSA_11.set('fieldImages', {'id': '', 'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_PlantaAggPtreosAconcagua_12.set('fieldImages', {'id': '', 'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_PlantaBSA_13.set('fieldImages', {'id': '', 'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_localidades_14.set('fieldImages', {'name': '', });
lyr_Comunasdelpoligono_15.set('fieldImages', {'CUT_REG': '', 'CUT_PROV': '', 'CUT_COM': '', 'REGION': '', 'PROVINCIA': '', 'COMUNA': '', 'SUPERFICIE': '', });
lyr_PREMVALPREDIO50_16.set('fieldImages', {'REGION': '', 'COMUNA': '', 'SECTOR': '', 'ZONA': '', 'NOMBRE': '', 'UPERM': '', 'UPROH': '', 'Shape_STAr': '', 'Shape_STLe': '', });
lyr_PRC7COMUNAS_17.set('fieldImages', {'Shape_Leng': '', 'Shape_Area': '', 'REG': '', 'COM': '', 'LOC': '', 'ZONA': '', 'NOM': '', 'UPERM': '', 'UPROH': '', 'P_DO': '', 'N_DOC': '', 'T_DO': '', 'OBS': '', 'OBJECTID': '', 'N_DO': '', 'layer': '', 'path': '', });
lyr_Uv_comunasdelproyecto_18.set('fieldImages', {'t_reg_ca': '', 't_prov_ca': '', 't_com': '', 't_reg_nom': '', 't_prov_nom': '', 't_com_nom': '', 't_id_uv_ca': '', 'uv_carto': '', 't_uv_nom': '', });
lyr_CCU20237COMUNAS_19.set('fieldImages', {'CUT_REG': '', 'CUT_PROV': '', 'CUT_COM': '', 'REGION': '', 'PROVINCIA': '', 'COMUNA': '', 'SUPERFICIE': '', });
lyr_redvialproyecto_20.set('fieldImages', {'shape_leng': '', 'st_length_': '', 'Nom_Ruta': '', 'Rol_Mop': '', 'Clase_Ruta': '', 'Tipo_Carpe': '', 'Catego': '', 'Cod_Region': '', 'layer': '', 'path': '', 'tipo': '', });
lyr_LU7COMUNAS_21.set('fieldImages', {'REG': '', 'COM': '', 'NOM': '', 'INSTRUMENT': '', 'ADMIN': '', 'DO': '', 'N_DOC': '', 'T_DOC': '', 'Shape_STAr': '', 'Shape_STLe': '', });
lyr_Uesgeomorfologicascomunas_22.set('fieldImages', {'FID': '', 'unidad': '', 'Shape__Are': '', 'Shape__Len': '', });
lyr_mapageologicocomunas_23.set('fieldImages', {'GEO': '', 'EPOCA': '', 'COMPOSICIO': '', 'ERA': '', 'PERIODO': '', 'M2': '', 'HA': '', });
lyr_Esteros_24.set('fieldImages', {'OBJECTID_1': '', 'COD_CUEN': '', 'COD_SUBC': '', 'COD_SSUBC': '', 'NOM_CUEN': '', 'NOM_SUBC': '', 'NOM_SSUBC': '', 'STRAHLER_N': '', 'NOMBRE': '', 'TIPO': '', 'DIRECCION': '', 'Shape_Leng': '', });
lyr_CURSORIOACONCAGUA_25.set('fieldImages', {'OBJECTID_1': '', 'COD_CUEN': '', 'COD_SUBC': '', 'COD_SSUBC': '', 'NOM_CUEN': '', 'NOM_SUBC': '', 'NOM_SSUBC': '', 'STRAHLER_N': '', 'NOMBRE': '', 'TIPO': '', 'DIRECCION': '', 'Shape_Leng': '', });
lyr_HumedalesUrbanosMMA2025_26.set('fieldImages', {'objectid': '', 'region': '', 'comuna': '', 'cod_humeda': '', 'nombre_hum': '', 'ha': '', 'proceso_hu': '', 'resolucion': '', 'url_res_bc': '', 'url_simbio': '', 'srid': '', });
lyr_Sitiosprioritarios2021proyecto_27.set('fieldImages', {'id': '', 'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_PoligonosfinalesdePolpaico_28.set('fieldImages', {'Name': '', 'Superficie': '', 'Dueño': '', });
lyr_PrediosfinalesdePolpaico_29.set('fieldImages', {'id': '', 'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_CanterasQuillota_2.set('fieldLabels', {'Name': 'no label', });
lyr_yacimientosminerosaridos_3.set('fieldLabels', {'objectid': 'no label', 'id_proceso': 'no label', 'id_yacimie': 'no label', 'nombre': 'no label', 'otros_nomb': 'no label', 'tipo_recur': 'no label', 'grupo_recu': 'no label', 'edad_geolo': 'no label', 'modelo_gen': 'no label', 'tamano_yac': 'no label', 'actividad_': 'no label', 'cantidad_m': 'no label', 'propietari': 'no label', 'observacio': 'no label', 'geologo_te': 'no label', 'fecha_terr': 'no label', 'latitud_su': 'no label', 'longitud_o': 'no label', 'proyeccion': 'no label', 'utm_este': 'no label', 'utm_norte': 'no label', 'proyecci_1': 'no label', 'error_metr': 'no label', 'metodo_coo': 'no label', 'fuente_coo': 'no label', 'descripcio': 'no label', 'region': 'no label', 'provincia': 'no label', 'comuna': 'no label', 'carta_igm': 'no label', 'descripc_1': 'no label', 'accesibili': 'no label', 'descripc_2': 'no label', 'id_distrit': 'no label', 'nombre_dis': 'no label', 'descripc_3': 'no label', 'url_pdf': 'no label', 'fme_reject': 'no label', 'cod_epsg': 'no label', });
lyr_yacimientosmineroscanteras_4.set('fieldLabels', {'objectid': 'no label', 'id_proceso': 'no label', 'id_yacimie': 'no label', 'nombre': 'no label', 'otros_nomb': 'no label', 'tipo_recur': 'no label', 'grupo_recu': 'no label', 'edad_geolo': 'no label', 'modelo_gen': 'no label', 'tamano_yac': 'no label', 'actividad_': 'no label', 'cantidad_m': 'no label', 'propietari': 'no label', 'observacio': 'no label', 'geologo_te': 'no label', 'fecha_terr': 'no label', 'latitud_su': 'no label', 'longitud_o': 'no label', 'proyeccion': 'no label', 'utm_este': 'no label', 'utm_norte': 'no label', 'proyecci_1': 'no label', 'error_metr': 'no label', 'metodo_coo': 'no label', 'fuente_coo': 'no label', 'descripcio': 'no label', 'region': 'no label', 'provincia': 'no label', 'comuna': 'no label', 'carta_igm': 'no label', 'descripc_1': 'no label', 'accesibili': 'no label', 'descripc_2': 'no label', 'id_distrit': 'no label', 'nombre_dis': 'no label', 'descripc_3': 'no label', 'url_pdf': 'no label', 'fme_reject': 'no label', 'cod_epsg': 'no label', });
lyr_Concesionescolindantes_5.set('fieldLabels', {'Titular': 'no label', 'Estado': 'no label', 'Su (has)': 'no label', 'Ubicación': 'no label', 'Tipo': 'no label', 'Año': 'no label', 'Name': 'no label', 'ROL': 'no label', });
lyr_AsociacindePueblosOriginariosdeQuillota_6.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_AsociacinMapucheNewen_7.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_radio30kmplantas_8.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_radio15kmplantas_9.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_radio3kmplantas_10.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_NuevaPlantaBSA_11.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_PlantaAggPtreosAconcagua_12.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_PlantaBSA_13.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_localidades_14.set('fieldLabels', {'name': 'no label', });
lyr_Comunasdelpoligono_15.set('fieldLabels', {'CUT_REG': 'no label', 'CUT_PROV': 'no label', 'CUT_COM': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'inline label - always visible', 'SUPERFICIE': 'no label', });
lyr_PREMVALPREDIO50_16.set('fieldLabels', {'REGION': 'no label', 'COMUNA': 'no label', 'SECTOR': 'no label', 'ZONA': 'no label', 'NOMBRE': 'no label', 'UPERM': 'no label', 'UPROH': 'no label', 'Shape_STAr': 'no label', 'Shape_STLe': 'no label', });
lyr_PRC7COMUNAS_17.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'REG': 'no label', 'COM': 'no label', 'LOC': 'no label', 'ZONA': 'no label', 'NOM': 'no label', 'UPERM': 'no label', 'UPROH': 'no label', 'P_DO': 'no label', 'N_DOC': 'no label', 'T_DO': 'no label', 'OBS': 'no label', 'OBJECTID': 'no label', 'N_DO': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Uv_comunasdelproyecto_18.set('fieldLabels', {'t_reg_ca': 'no label', 't_prov_ca': 'no label', 't_com': 'no label', 't_reg_nom': 'no label', 't_prov_nom': 'no label', 't_com_nom': 'no label', 't_id_uv_ca': 'no label', 'uv_carto': 'no label', 't_uv_nom': 'no label', });
lyr_CCU20237COMUNAS_19.set('fieldLabels', {'CUT_REG': 'no label', 'CUT_PROV': 'no label', 'CUT_COM': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'SUPERFICIE': 'no label', });
lyr_redvialproyecto_20.set('fieldLabels', {'shape_leng': 'no label', 'st_length_': 'no label', 'Nom_Ruta': 'no label', 'Rol_Mop': 'no label', 'Clase_Ruta': 'no label', 'Tipo_Carpe': 'no label', 'Catego': 'no label', 'Cod_Region': 'no label', 'layer': 'no label', 'path': 'no label', 'tipo': 'no label', });
lyr_LU7COMUNAS_21.set('fieldLabels', {'REG': 'no label', 'COM': 'no label', 'NOM': 'no label', 'INSTRUMENT': 'no label', 'ADMIN': 'no label', 'DO': 'no label', 'N_DOC': 'no label', 'T_DOC': 'no label', 'Shape_STAr': 'no label', 'Shape_STLe': 'no label', });
lyr_Uesgeomorfologicascomunas_22.set('fieldLabels', {'FID': 'no label', 'unidad': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_mapageologicocomunas_23.set('fieldLabels', {'GEO': 'no label', 'EPOCA': 'no label', 'COMPOSICIO': 'no label', 'ERA': 'no label', 'PERIODO': 'no label', 'M2': 'no label', 'HA': 'no label', });
lyr_Esteros_24.set('fieldLabels', {'OBJECTID_1': 'hidden field', 'COD_CUEN': 'no label', 'COD_SUBC': 'no label', 'COD_SSUBC': 'no label', 'NOM_CUEN': 'no label', 'NOM_SUBC': 'no label', 'NOM_SSUBC': 'no label', 'STRAHLER_N': 'no label', 'NOMBRE': 'no label', 'TIPO': 'no label', 'DIRECCION': 'no label', 'Shape_Leng': 'no label', });
lyr_CURSORIOACONCAGUA_25.set('fieldLabels', {'OBJECTID_1': 'no label', 'COD_CUEN': 'no label', 'COD_SUBC': 'no label', 'COD_SSUBC': 'no label', 'NOM_CUEN': 'no label', 'NOM_SUBC': 'no label', 'NOM_SSUBC': 'no label', 'STRAHLER_N': 'no label', 'NOMBRE': 'no label', 'TIPO': 'no label', 'DIRECCION': 'no label', 'Shape_Leng': 'inline label - always visible', });
lyr_HumedalesUrbanosMMA2025_26.set('fieldLabels', {'objectid': 'no label', 'region': 'no label', 'comuna': 'no label', 'cod_humeda': 'no label', 'nombre_hum': 'no label', 'ha': 'no label', 'proceso_hu': 'no label', 'resolucion': 'no label', 'url_res_bc': 'no label', 'url_simbio': 'no label', 'srid': 'no label', });
lyr_Sitiosprioritarios2021proyecto_27.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_PoligonosfinalesdePolpaico_28.set('fieldLabels', {'Name': 'no label', 'Superficie': 'no label', 'Dueño': 'no label', });
lyr_PrediosfinalesdePolpaico_29.set('fieldLabels', {'id': 'no label', 'Name': 'hidden field', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_PrediosfinalesdePolpaico_29.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});