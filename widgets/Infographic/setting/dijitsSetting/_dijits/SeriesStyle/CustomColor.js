// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Infographic/setting/dijitsSetting/_dijits/SeriesStyle/CustomColor.html":'\x3cdiv\x3e\r\n\r\n   \x3cdiv class\x3d"header"\x3e\r\n      \x3cdiv class\x3d"color-choose"\x3e\r\n         \x3cdiv class\x3d"text-label color-text text-over" title\x3d"${nls.colorSchema}"\x3e${nls.colorSchema}\x3c/div\x3e\r\n         \x3cdiv data-dojo-attach-point\x3d"colorsPickerDiv" class\x3d"colors-picker"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n   \x3c/div\x3e\r\n\r\n   \x3cdiv data-dojo-attach-point\x3d"content" class\x3d"content"\x3e\x3c/div\x3e\r\n\r\n   \x3cdiv class\x3d"bottom"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"dispatchAdd" class\x3d"add-dispatch"\x3e\r\n        \x3cdiv class\x3d"disptch-div" data-dojo-attach-event\x3d"click:_onAddCategoryClick" title\x3d"${nls.addCategory}"\x3e\r\n           \x3cdiv class\x3d"disptch-add-icon"\x3e\x3c/div\x3e\r\n           \x3cdiv class\x3d"disptch-add-text"\x3e${nls.addCategory}\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"actionAdd" class\x3d"add-action hide"\x3e\r\n        \x3cdiv class\x3d"category-tip textOverFlow" title\x3d"${nls.category}"\x3e${nls.category}\x3c/div\x3e\r\n\r\n        \x3cdiv data-dojo-attach-point\x3d"addActionDiv" class\x3d"add-action-div"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"colorDiv" class\x3d"color-div"\x3e\x3c/div\x3e\r\n            \x3cdiv class\x3d"action-button-container" data-dojo-attach-event\x3d"click:_onDoAddClick" title\x3d"${nls.ok}"\x3e\r\n               \x3cdiv class\x3d"action-btn add-btn"\x3e\x3c/div\x3e\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"action-button-container" data-dojo-attach-event\x3d"click:_onCancelClick" title\x3d"${nls.cancel}"\x3e\r\n               \x3cdiv class\x3d"action-btn cancel-btn"\x3e\x3c/div\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n       \r\n      \x3c/div\x3e\r\n   \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/text!./CustomColor.html dojo/Evented dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin jimu/DataSourceManager jimu/LayerInfos/LayerInfos jimu/dijit/_chartDijitOption ../ChartColorSetting jimu/dijit/ColorPickerPopup ./CustomColorList ../../../utils dojo/on dojo/_base/Color dojo/_base/lang dojo/_base/html dojo/store/Memory ./CustomCombox jimu/dijit/LoadingIndicator".split(" "),function(f,g,h,k,l,m,n,p,q,r,t,u,v,e,w,b,d,x,y){return f([k,l,m,h],{baseClass:"infographic-custom-color",
templateString:g,constructor:function(){this.inherited(arguments);this.layerInfosObj=p.getInstanceSync();this.dataSourceManager=n.getInstance();this.chartDijitOption=new q({});this._existCategories=[];this._customColorSelectOption=[]},postCreate:function(){this.inherited(arguments);this._initDom();this._initEvents();this._updateColorArray()},setConfig:function(a){a&&a.categories&&Array.isArray(a.categories)&&this.customColorList.setConfig(a)},getConfig:function(){return this.customColorList?this.customColorList.getConfig():
!1},_onChange:function(){var a=this.getConfig();a&&this.emit("change",a)},_getComboxStoreIdByName:function(a,c){var b;a&&a.store&&a.store.data&&a.store.data.length&&(a=a.store.data.filter(function(a){return a.name===c})[0])&&"undefined"!==typeof a.id&&(b=a.id);return b},_onDoAddClick:function(a){a.stopPropagation();a=this.selectInput.get("value");var c=this._getComboxStoreIdByName(this.selectInput,a);c||(c=a);var b=this.singleColorPicker.getColor();-1<this._existCategories.indexOf(c)||!c||(this._showAddCategoryDisptch(),
this.customColorList.addNewColorItem({id:c,text:a,label:a,color:b},!0))},_onCancelClick:function(a){a.stopPropagation();this._showAddCategoryDisptch()},_getRandomColor:function(){var a;a=0;if(this._lastColor){var c=this._colors.indexOf(this._lastColor);-1<c&&(a=c+1,a>this._colors.length-1&&(a=0))}return this._lastColor=a=this._colors[a]},_initDom:function(){this.selectInput=new y({placeHolder:this.nls.comboxHint,style:{width:"150px"}});this.selectInput.placeAt(this.addActionDiv,"first");this.selectInput.disableInput();
this.selectInput.invalidMessage=this.nls.categoryExists;this.colorsPicker=new r;this.colorsPicker.placeAt(this.colorsPickerDiv);this.colorsPicker.setMode(!1);this.customColorList=new u({nls:this.nls});this.customColorList.placeAt(this.content);this.singleColorPicker=new t({appearance:{showTransparent:!1,showColorPalette:!0,showCoustom:!0,showCoustomRecord:!0}});this.singleColorPicker.placeAt(this.colorDiv);this.singleColorPicker.startup()},_initEvents:function(){this.own(e(this.customColorList,"change",
b.hitch(this,function(){this._onChange()})));this.own(e(this.colorsPicker,"change",b.hitch(this,function(){this._updateColorArray()})));this.own(e(this.customColorList,"color-list-change",b.hitch(this,function(a){this._updateExistCategories(a)})))},_updateExistCategories:function(a){this._existCategories=a;this._setCategoriesToSelect();this._updateSelectInputValidator()},_updateSelectInputValidator:function(){this.selectInput.set("validator",function(a){return 0>this._existCategories.indexOf(a)}.bind(this))},
setCustomColorSelectOption:function(a){a&&(this._customColorSelectOption=b.clone(a),this._setCategoriesToSelect())},setCategoryType:function(a){this._isCodedValueType=a&&a.isCodedValueType;this._updateSeelectInputState();this.customColorList&&this.customColorList.setCategoryType(a)},_updateSeelectInputState:function(){this._isCodedValueType?(this.selectInput.disableInput(),this.selectInput.set("placeHolder",this.nls.comboxDisableInputHint)):(this.selectInput.enableInput(),this.selectInput.set("placeHolder",
this.nls.comboxHint))},_setCategoriesToSelect:function(){this._updateSeelectInputState();var a=b.clone(this._customColorSelectOption),a=a.filter(function(a){return 0>this._existCategories.indexOf(a.value+"")}.bind(this)),a=a.map(function(a){return{id:a.value,name:a.label}}),a=new x({data:a});this.selectInput.store=a;this.selectInput.setValue("")},_onAddCategoryClick:function(a){a.stopPropagation();a=this._getRandomColor();this.singleColorPicker.setColor(new w(a));this._showAddCategoryAction()},_showAddCategoryDisptch:function(){d.removeClass(this.dispatchAdd,
"hide");d.addClass(this.actionAdd,"hide");this.selectInput.setValue("")},_showAddCategoryAction:function(){d.addClass(this.dispatchAdd,"hide");d.removeClass(this.actionAdd,"hide")},_updateColorArray:function(){var a=this.colorsPicker.getColors();2===a.length&&(a=v.separationGradientColors(a,6));this._colors=a;this.emit("update-colors",a)}})});