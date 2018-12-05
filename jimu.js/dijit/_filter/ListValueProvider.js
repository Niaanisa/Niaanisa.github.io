// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/_filter/ListValueProvider.html":'\x3cdiv\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"valuesSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" data-dojo-props\x3d\'searchAttr:"label",required:false,intermediateChanges:true\' style\x3d"width:100%;" data-dojo-attach-event\x3d"input:_onFilteringSelectInput"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/aspect dojo/Deferred dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/_base/declare ./ValueProvider dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./ListValueProvider.html dojo/store/Memory jimu/utils dijit/form/FilteringSelect".split(" "),function(l,k,d,f,h,m,n,p,q,r,t,u,g){return n([p,q,r],{templateString:t,codedValues:null,staticValues:null,showNullValues:!1,layerDataChanged:!1,ifDropDown:!1,postCreate:function(){this.inherited(arguments);f.addClass(this.domNode,
"jimu-filter-list-value-provider");this._uniqueValueCache={};this.noDataTips='\x3cdiv class\x3d"error-tip-section" style\x3d"display: block;"\x3e\x3cspan class\x3d"jimu-icon jimu-icon-error"\x3e\x3c/span\x3e\x3cspan class\x3d"jimu-state-error-text"\x3e'+this.nls.noFilterValueTip+"\x3c/span\x3e\x3c/div\x3e";var a=new u({idProperty:"id",data:[]});this.valuesSelect.set("store",a);this.isNumberField=g.isNumberField(this.fieldInfo.type);!this.staticValues&&"function"===typeof this.valuesSelect._onDropDownMouseDown&&
(!this.codedValues||this.codedValues&&this.filterCodedValue)&&(this.own(l.before(this.valuesSelect,"_onDropDownMouseDown",d.hitch(this,this._onBeforeDropDownMouseDown))),this.own(m(document.body,"click",d.hitch(this,this._onBodyClick))),this.layerInfo&&this.layerInfo.getLayerObject().then(d.hitch(this,function(a){a.on("edits-complete",d.hitch(this,function(){this.layerDataChanged=!0}))})))},_onFilteringSelectInput:function(){this.emit("change")},_getCodedValueLabelsBySubTypeId:function(){var a=this.getDropdownFilterPartsObj();
return this.getCodedValueListByPartsObj(this.layerDefinition,this.fieldName,a,this.codedValues)},_onBeforeDropDownMouseDown:function(){this.ifDropDown=!0;this._tryUpdatingUniqueValues(void 0,!0);return arguments},_onBodyClick:function(a){a=a.target||a.srcElement;a===this.domNode||f.isDescendant(a,this.domNode)||this.msgDiv&&f.setStyle(this.msgDiv,"display","none")},getDijits:function(){return[this.valuesSelect]},isValidValue:function(){return 0<this.getStatus()},getStatus:function(){var a=this.valuesSelect.get("item");
if(a&&void 0!==a.value){if(this.isNumberField&&!g.isValidNumber(a.value)){var c=parseFloat(a.value);return g.isValidNumber(c)?(a.value=c,this._getStatusForDijit(this.valuesSelect)):-1}return this._getStatusForDijit(this.valuesSelect)}return 0},_getStatusForDijit:function(a){return a.validate()?a.get("DisplayedValue")?1:0:-1},setValueObject:function(a){return this.staticValues?this._setValueForStaticValues(a.value,this.staticValues):this.codedValues?this.filterCodedValue?this._tryUpdatingUniqueValues(a.value,
!1):this._setValueForStaticValues(a.value,this.codedValues):this._tryUpdatingUniqueValues(a.value,!1)},getValueObject:function(){if(this.isValidValue()){var a=this.valuesSelect.get("item").value;return{isValid:!0,type:this.partObj.valueObj.type,value:a}}return null},tryGetValueObject:function(){return this.isValidValue()?this.getValueObject():this.isEmptyValue()?{isValid:!0,type:this.partObj.valueObj.type,value:"string"===this.shortType?"":null}:null},setRequired:function(a){this.valuesSelect.set("required",
a)},_setValueForStaticValues:function(a,c){var b=null,e=-1,b=null;c&&(b=h.map(c,d.hitch(this,function(b,c){b={id:c,value:b.value,label:b.label};b.value+""===a+""&&(e=c);return b})),this.valuesSelect.store.setData(b),0<=e&&(b=this.valuesSelect.store.get(e))&&this.valuesSelect.set("item",b),this._checkIfNoData())},_uniqueValueLoadingDef:null,_uniqueValueLoadingExpr:"",_uniqueValueCache:null,_tryUpdatingUniqueValues:function(a,c){var b=new k;if(this.valuesSelect._opened)this._checkIfNoData(),b.resolve();
else{var e=this.getDropdownFilterExpr();e!==this._uniqueValueLoadingExpr||this.layerDataChanged?(this.valuesSelect.readOnly=!0,this._uniqueValueLoadingDef&&(this._uniqueValueLoadingDef.reject(),this._uniqueValueLoadingDef=null),this._uniqueValueLoadingExpr=e,this._uniqueValueLoadingDef=this._getUniqueValues(e),this._uniqueValueLoadingDef.then(d.hitch(this,function(v){this.domNode&&(this._uniqueValueLoadingDef=null,this.valuesSelect.readOnly=!1,this._setValueForUniqueValues(a,v),this._hideLoadingIcon(),
c&&this.valuesSelect.toggleDropDown(),this._checkIfNoData(),b.resolve())}),d.hitch(this,function(a){console.error(a);this.domNode&&(this._uniqueValueLoadingDef=null,this.valuesSelect.readOnly=!1,this._hideLoadingIcon(),this._checkIfNoData(),b.reject(a))}))):(this._checkIfNoData(),b.resolve())}return b},_setValueForUniqueValues:function(a,c){c.sort(function(a,b){return a.value<b.value?-1:a.value===b.value?0:1});this.showNullValues||(c=h.filter(c,d.hitch(this,function(a){return"\x3cNull\x3e"!==a.value&&
null!==a.value})));if(void 0===a){var b=this.getValueObject();b&&(a=b.value)}var e=-1,b=null;c=h.map(c,d.hitch(this,function(b,c){var d={id:c,value:b.value,label:b.label};b.value+""===a+""&&(e=c);return d}));this.valuesSelect.store.setData(c);0<=e&&(b=this.valuesSelect.store.get(e));this.valuesSelect.set("item",b)},_checkIfNoData:function(){this.runtime&&this.ifDropDown&&(this.ifDropDown=!1,0===this.valuesSelect.store.data.length&&(this.msgDiv?f.setStyle(this.msgDiv,"display","block"):(this.msgDiv=
document.createElement("div"),f.addClass(this.msgDiv,"jimu-filter-list-value-provider-tip-container"),this.msgDiv.innerHTML=this.noDataTips,this.valuesSelect.domNode.parentNode.appendChild(this.msgDiv))))},_showLoadingIcon:function(){f.addClass(this.valuesSelect.domNode,"loading")},_hideLoadingIcon:function(){f.removeClass(this.valuesSelect.domNode,"loading")},_getUniqueValues:function(a){var c=new k;this._uniqueValueCache[a]&&!this.layerDataChanged?c.resolve(this._uniqueValueCache[a]):(this._showLoadingIcon(),
g.getUniqueValues(this.url,this.fieldName,a,this.layerDefinition,this.fieldPopupInfo).then(d.hitch(this,function(b){this.domNode&&(this._uniqueValueCache[a]=b,c.resolve(b),this._hideLoadingIcon())}),d.hitch(this,function(a){this.domNode&&(c.reject(a),this._hideLoadingIcon())})));this.layerDataChanged=!1;return c}})});