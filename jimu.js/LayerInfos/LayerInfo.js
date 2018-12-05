// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/Deferred dojo/promise/all dojo/dom-construct dojo/topic dojo/aspect dojo/Evented dojo/request/script jimu/portalUrlUtils jimu/portalUtils jimu/LayerNode jimu/utils ./RequestBuffer esri/kernel esri/request".split(" "),function(q,k,d,e,l,t,h,n,u,v,m,r,w,g,x,y,z){var p=q([u],{declaredClass:"jimu.LayerInfo",originOperLayer:null,layerObject:null,map:null,title:null,id:null,subId:null,newSubLayers:null,parentLayerInfo:null,isTable:null,isTiled:null,
_oldIsShowInMap:null,_oldFilter:null,_eventHandles:null,_subLayerInfoIndex:null,_serviceDefinitionBuffer:null,_flag:null,_objectId:null,_itemInfo:null,_adaptor:null,constructor:function(a,b,c,d){this.originOperLayer=a;this.layerObject=a.layerObject;this.map=b;this.title=this.originOperLayer.title||this.originOperLayer.id||"";this.id=this.originOperLayer.id;this.subId=void 0!==this.originOperLayer.subId?this.originOperLayer.subId:this.id;this.parentLayerInfo=a.parentLayerInfo?a.parentLayerInfo:null;
this.isTiled=this.isTable=!1;this._eventHandles=[];this._layerInfoFactory=c;this._layerInfos=d;this._flag={};this._objectId=Math.random();this._adaptor=new w(this)},init:function(){this.newSubLayers=this.obtainNewSubLayers();this._initSubLayerInfoIndex();this._initVisible();this.originOperLayer.popupInfo&&(this.popupVisible=!0);this._oldIsShowInMap=this.isShowInMap();this._initOldFilter();this._initServiceDefinitionBuffer();this._bindEvent()},_initOldFilter:function(){this._oldFilter=null},_initServiceDefinitionBuffer:function(){this._serviceDefinitionBuffer=
new x(d.hitch(this,this._serviceDefinitionRequest))},isGraphicLayer:function(){var a=this._obtainLayerIndexesInMap();return a.length?a[0].isGraphicLayer:!1},obtainLayerIndexesInMap:function(){return this._obtainLayerIndexesInMap()},getObjectId:function(){return this._objectId},getOpacity:function(){return this.layerObject.opacity?this.layerObject.opacity:1},setOpacity:function(a){this.layerObject.setOpacity&&this.layerObject.setOpacity(a)},moveLayerByIndex:function(a){this.map.reorderLayer(this.layerObject,
a)},traversal:function(a){if(a(this))return!0;for(var b=this.getSubLayers(),c=0;c<b.length;c++)if(b[c].traversal(a))return!0},findLayerInfoById:function(a){var b=null,c=0;if(this.id&&this.id===a)return this;for(c=0;c<this.newSubLayers.length&&!(b=this.newSubLayers[c].findLayerInfoById(a));c++);return b},setTopLayerVisible:function(a){this._setTopLayerVisible(a)},_setTopLayerVisible:function(a){},_setSubLayerVisible:function(a,b){},setLayerVisiblefromTopLayer:function(){},_resetLayerObjectVisiblity:function(){},
resetLayerObjectVisibility:function(a){var b=a?a[this.id]:null;this.isRootLayer()&&b&&this._resetLayerObjectVisiblity(a)},_initVisible:function(){},isVisible:function(){return this._visible?!0:!1},show:function(){this._setTopLayerVisible(!0)},hide:function(){this._setTopLayerVisible(!1)},_obtainLayerIndexesInMap:function(){var a=[],b;(b=this._getLayerIndexesInMapByLayerId(this.id))&&a.push(b);return a},_getLayerIndexesInMapByLayerId:function(a){var b;for(b=0;b<this.map.graphicsLayerIds.length;b++)if(this.map.graphicsLayerIds[b]===
a)return{isGraphicLayer:!0,index:b};for(b=0;b<this.map.layerIds.length;b++)if(this.map.layerIds[b]===a)return{isGraphicLayer:!1,index:b};return null},_isShowInMapChanged:function(){var a=!1,b=this.isShowInMap();!1===b&&this.map.infoWindow.hide();this._oldIsShowInMap!==b&&(this._oldIsShowInMap=b,a=!0);return a},_isShowInMapChanged2:function(){var a=[];this.traversal(function(b){b._isShowInMapChanged()&&a.push(b)});h.publish("layerInfos/layerInfo/isShowInMapChanged",a)},_visibleChanged:function(){h.publish("layerInfos/layerInfo/visibleChanged",
[this])},_initSubLayerInfoIndex:function(){var a={};this.isRootLayer()&&this.traversal(function(b){b.isRootLayer()||(a[b.subId]=b)});this._subLayerInfoIndex=a},_getLayerInfosObj:function(){return this._layerInfos},obtainNewSubLayers:function(){return[]},createLegendsNode:function(){return t.create("div",{"class":"legends-div"})},drawLegends:function(a,b){},_getLayerTypesOfSupportTable:function(){return"FeatureLayer,CSVLayer,Table,ArcGISImageServiceLayer,StreamLayer,ArcGISImageServiceVectorLayer"},
_getShowLegendOfWebmap:function(){return void 0!==this.originOperLayer.showLegend?this.originOperLayer.showLegend:!0},_needToRenew:function(){return!1},_getServiceDefinition:function(){var a=new e;a.resolve(null);return a},_serviceDefinitionRequest:function(a){return this._normalRequest(a,{f:"json"},"json")},getServiceDefinition:function(){return this._getServiceDefinition()},_normalRequest:function(a,b,c){return z({url:a,content:b,handleAs:c,callbackParamName:"callback"})},getLayerObject:function(){var a=
new e;this.layerObject?a.resolve(this.layerObject):a.resolve(null);return a},getLayerObjectTryUsingFeatureService:function(){return this.getLayerObject()},getSubLayers:function(){return this.newSubLayers},isLeaf:function(){return 0===this.getSubLayers().length?!0:!1},isRootLayer:function(){return this.parentLayerInfo?!1:!0},getLayerLevel:function(){for(var a=0,b=this;b.parentLayerInfo;)a++,b=b.parentLayerInfo;return a},getRootLayerInfo:function(){for(var a=this;a.parentLayerInfo;)a=a.parentLayerInfo;
return a},isShowInMap:function(){for(var a=!0,b=this;b;)a=a&&b.isVisible(),b=b.parentLayerInfo;return a},getLayerType:function(){var a=[null],b=new e;this.layerObject.declaredClass&&(a=this.layerObject.declaredClass.split("."));b.resolve(a[a.length-1]);return b},getPopupInfo:function(){return this.originOperLayer.popupInfo},getPopupInfoFromLayerObject:function(){var a=this.getInfoTemplate(),b=null;a&&(b=a.info);return b},loadPopupInfo:function(){var a=new e;this.loadInfoTemplate().then(d.hitch(this,
function(b){var c=null;b&&(c=b.info);a.resolve(c)}));return a},loadInfoTemplate:function(){var a=new e;a.resolve(null);return a},getInfoTemplate:function(){return null},getFilterOfWebmap:function(){return this.originOperLayer.layerDefinition?this.originOperLayer.layerDefinition.definitionExpression:null},getFilter:function(){return null},setFilter:function(){},getShowLegendOfWebmap:function(){for(var a=this,b=!0;a;)b=b&&a._getShowLegendOfWebmap(),a=a.parentLayerInfo;return b},getUrl:function(){return this.layerObject.url||
this.layerObject._url},hasLayerTypes:function(a){},getSupportTableInfo:function(){var a=new e,b={isSupportedLayer:!1,isSupportQuery:!1,layerType:null},c=this.getLayerType(),f=this.getLayerObject();l({type:c,layerObject:f}).then(d.hitch(this,function(c){var d=c.type;c=c.layerObject;b.layerType=d;0<=this._getLayerTypesOfSupportTable().indexOf(d)&&(b.isSupportedLayer=!0);if(!c)b.isSupportQuery=!1;else if(this.parentLayerInfo&&this.parentLayerInfo.isMapNotesLayerInfo())b.isSupportQuery=!1;else if(!c.url||
c.capabilities&&c.capabilities.indexOf&&0<=c.capabilities.indexOf("Query"))b.isSupportQuery=!0;a.resolve(b)}),function(){a.resolve(b)});return a},getRelatedTableInfoArray:function(a){a=new e;a.resolve([]);return a},removeSubLayerById:function(a){var b=[];k.forEach(this.newSubLayers,function(c){c.id!==a?b.push(c):c.destroy()});this.newSubLayers=b},releaseResource:function(){k.forEach(this._eventHandles,function(a){a.remove()});this.destroyLabelLayer();this._adaptor&&this._adaptor.destroy()},destroy:function(){k.forEach(this.newSubLayers,
function(a){a.destroy()});this.releaseResource();this.inherited(arguments)},update:function(){k.forEach(this.newSubLayers,function(a){a.destroy()});this.releaseResource();this.init()},isMapNotesLayerInfo:function(){return this.originOperLayer.featureCollection&&0===this.id.indexOf("mapNotes_")&&"ArcGISFeatureLayer"===this.originOperLayer.layerType&&!this.map.getLayer(this.id)?!0:!1},_getExtent:function(){var a=new e;a.resolve(this.layerObject.fullExtent||this.layerObject.initialExtent);return a},
getExtent:function(){var a=new e;this._getExtent().then(d.hitch(this,function(b){g.projectToMapSpatialReference(this.map,b).then(d.hitch(this,function(b){a.resolve(b)}),d.hitch(this,function(){a.resolve(null)}))}),d.hitch(this,function(){a.resolve(null)}));return a},zoomTo:function(a){return a?g.projectToMapSpatialReference(this.map,a).then(d.hitch(this,function(a){return this._zoomTo(a)})):this.getExtent().then(d.hitch(this,function(a){return this._zoomTo(a)}))},_zoomTo:function(a){if(g.isValidExtent(a)){a=
d.clone(a);var b=this.getLayerScaleRange(),c=b.minScale,b=b.maxScale;if(a.isSinglePoint){if(c=g.getTargetScale(this.map,3,c,b))a=g.adjustHeightToAspectRatio(this.map,a),a=g.getExtentForScale(a,this.map.width,c),this.map.setExtent(a)}else{a=g.adjustExtentToAspectRatio(this.map,a);var f=g.getScaleForExtent(a,this.map.width);0<c&&f>c?(c=g.getScaleForNextTileLevel(this.map,c,!0),a=g.adjustHeightToAspectRatio(this.map,a),a=g.getExtentForScale(a,this.map.width,c),this.map.setExtent(a)):f<b?(b=g.getScaleForNextTileLevel(this.map,
b,!1),a=g.adjustHeightToAspectRatio(this.map,a),a=g.getExtentForScale(a,this.map.width,b),this.map.setExtent(a)):this.map.setExtent(a,!0)}}},mergeScale:function(a,b,c,d){var f=0,e=0;0===a&&0<c?f=c:0<a&&0===c?f=a:0<a&&0<c&&(f=Math.min(a,c));e=Math.max(b,d);return{minScale:f,maxScale:e}},unionScale:function(a,b,c,d){var f=0,e=0,f=0===a||0===c?0:Math.max(a,c),e=Math.min(b,d);return{minScale:f,maxScale:e}},getScaleRange:function(){return this.layerObject&&0<=this.layerObject.minScale&&0<=this.layerObject.maxScale?
{minScale:this.layerObject.minScale,maxScale:this.layerObject.maxScale}:{minScale:0,maxScale:0}},getLayerScaleRange:function(){var a,b=this.getScaleRange();this.traversal(d.hitch(this,function(b){b.id!==this.id&&(b=b.getScaleRange(),a=a?this.unionScale(a.minScale,a.maxScale,b.minScale,b.maxScale):b)}));return a?this.mergeScale(b.minScale,b.maxScale,a.minScale,a.maxScale):b},isCurrentScaleInTheScaleRange:function(){var a=this.getScaleRange(),b=this.map.getScale();return 0===a.minScale&&0===a.maxScale?
!0:(0===a.minScale||a.minScale>=b)&&(0===a.maxScale||b>=a.maxScale)?!0:!1},isInScale:function(){for(var a=!0,b=this;b&&(a=b.isCurrentScaleInTheScaleRange(),b=b.parentLayerInfo,a););return a},enablePopup:function(){},disablePopup:function(){},isPopupEnabled:function(){return!1},getCapabilitiesOfWebMap:function(){return this.originOperLayer.capabilities},isItemLayer:function(){return this._getBasicItemInfo()},isPublicService:function(){var a=new e,b=this.getUrl()+"?f\x3djson";b?("https"===m.getProtocol(window.location.href)&&
(b=m.setHttpsProtocol(b)),v.get(b,{jsonp:"callback"}).then(d.hitch(this,function(b){b&&b.error?a.resolve(!1):a.resolve(!0)}),d.hitch(this,function(){a.resolve(!1)}))):a.resolve(!0);return a},isEditable:function(){var a=!1,b=!0,c=r.getPortal(window.portalUrl),f=this.isPublicService(),g=new e,h=new e;c.getUser().then(d.hitch(this,function(a){h.resolve(a)}),d.hitch(this,function(){h.resolve(null)}));l({user:h,isPublicService:f}).then(d.hitch(this,function(c){var d=c.user&&c.user.privileges;c=c.isPublicService;
d&&-1===k.indexOf(d,"features:user:edit")&&y.id&&!c&&(b=!1);a=this.layerObject&&this.layerObject.isEditable?this.layerObject.isEditable()&&b?!0:!1:!1;g.resolve(a)}),d.hitch(this,function(){g.resolve(!1)}));return g},_getBasicItemInfo:function(){var a=null,b=this.getRootLayerInfo(),c=window.appConfig||window.getAppConfig(),f=d.getObject("_wabProperties.itemLayerInfo",!1,b.layerObject);b.originOperLayer.itemId?(a={},a.itemId=b.originOperLayer.itemId,a.portalUrl=m.getStandardPortalUrl(c.map.portalUrl||
c.portalUrl)):f&&f.portalUrl&&f.itemId&&(a={},a.itemId=f.itemId,a.portalUrl=m.getStandardPortalUrl(f.portalUrl));return a},getItemInfo:function(){var a=new e,b=this.getRootLayerInfo();b.isItemLayer()?(b._itemInfo||(b._itemInfo=new p.ItemInfo(this,b)),b._itemInfo.onLoad().then(d.hitch(this,function(){a.resolve(b._itemInfo)}),d.hitch(this,function(){a.resolve(null)}))):a.resolve(null);return a},isHostedService:function(){var a=new e;this._getServiceDefinition().then(d.hitch(this,function(b){a.resolve(b&&
b.serviceItemId?!0:!1)}));return a},isHostedLayer:function(){var a;this.isItemLayer()?a=this.isHostedService():(a=new e,a.resolve(!1));return a},obtainLabelControl:function(){},restoreLabelControl:function(){},destroyRealtedLabelLayer:function(){},destroyLabelLayer:function(){},canShowLabel:function(){},isShowLabels:function(){},showLabels:function(){},hideLabels:function(){},isBasemap:function(){return this.getRootLayerInfo().layerObject._basemapGalleryLayerType?!0:!1},emitEvent:function(){try{this.emit.apply(this,
arguments),this._adaptor&&this._adaptor.emitEvent.apply(this._adaptor,arguments)}catch(a){console.error(a)}},_bindEvent:function(){var a;this.layerObject&&!this.layerObject.empty&&(a=this.layerObject.on("visibility-change",d.hitch(this,this._onVisibilityChanged)),this._eventHandles.push(a),a=n.after(this.layerObject,"setDefinitionExpression",d.hitch(this,this._onFilterChanged)),this._eventHandles.push(a),a=n.after(this.layerObject,"setRenderer",d.hitch(this,this._onRendererChanged)),this._eventHandles.push(a),
this.isRootLayer()&&(a=this.layerObject.on("opacity-change",d.hitch(this,this._onOpacityChanged)),this._eventHandles.push(a)),this.isRootLayer()&&(a=this.map.on("time-extent-change",d.hitch(this,function(){this.layerObject&&this.layerObject.useMapTime&&this._onTimeExtentChanged()})),this._eventHandles.push(a)),this.isRootLayer()&&(a=n.after(this.layerObject,"setTimeDefinition",d.hitch(this,function(){this.layerObject&&this.layerObject.timeInfo&&this.layerObject.mode===esri.layers.FeatureLayer.MODE_SNAPSHOT&&
this._onTimeExtentChanged()})),this._eventHandles.push(a)))},_onVisibilityChanged:function(){this._initVisible();this._visibleChanged();this._isShowInMapChanged2()},_onFilterChanged:function(){var a=this._oldFilter?this._oldFilter:null,b=this.layerObject.getDefinitionExpression(),b=b?b:null;a!==b&&(h.publish("layerInfos/layerInfo/filterChanged",[this]),this._oldFilter=b)},_onRendererChanged:function(){h.publish("layerInfos/layerInfo/rendererChanged",[this])},_onOpacityChanged:function(){h.publish("layerInfos/layerInfo/opacityChanged",
[this])},_onTimeExtentChanged:function(){var a=[],b=[];this.traversal(function(c){var d=c.getServiceDefinition().then(function(b){b&&b.timeInfo&&a.push(c)});b.push(d)});l(b).then(d.hitch(this,function(){h.publish("layerInfos/layerInfo/timeExtentChanged",a)}))}});p.ItemInfo=q(null,{_currentLayerInfo:null,_rootLayerInfo:null,_portalUrl:null,_itemId:null,_item:null,_itemData:null,_serviceDefinition:null,_itemInfoLoadedDef:null,constructor:function(a,b){this._currentLayerInfo=a;this._rootLayerInfo=b;
this._loadResource()},_loadResource:function(){this._itemInfoLoadedDef=new e;var a=this._rootLayerInfo.isItemLayer();if(a){this._portalUrl=a.portalUrl;this._itemId=a.itemId;var b=r.getPortal(this._portalUrl),a=b.getItemById(this._itemId),b=b.getItemData(this._itemId),c=this._currentLayerInfo._getServiceDefinition();l({item:a,itemData:b,serviceDefinition:c}).then(d.hitch(this,function(a){this._item=a.item;this._itemData=a.itemData;this._serviceDefinition=a.serviceDefinition;this._itemInfoLoadedDef.resolve(this)}),
d.hitch(this,function(a){a&&a.message&&console.log(a.message);this._itemInfoLoadedDef.reject()}))}else this._itemInfoLoadedDef.reject()},onLoad:function(){return this._itemInfoLoadedDef},getPortalUrl:function(){return this._portalUrl},getItemId:function(){return this._itemId},getItem:function(){return this._item},getItemData:function(){return this._itemData},isHostedLayer:function(){return this._serviceDefinition&&this._serviceDefinition.serviceItemId?!0:!1}});return p});