sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
	"use strict";
	return Controller.extend("gdt.App2", {
        onInit: function(){
            //set data model on view
            var oData = {
                recipient: {
                    name: "World"
                }
            }
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },
		onShowHello : function () {
			// show a native JavaScript alert
			//alert("Hello World Alert");
			MessageToast.show("Hello World in MessageToast");
		}
	});

});