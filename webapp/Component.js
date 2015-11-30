sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "demo/controller/HelloDialog"
], function (UIComponent, JSONModel, HelloDialog) {
   "use strict";
   return UIComponent.extend("demo.Component", {
      metadata : {
		manifest: "json"
	},
      init : function () {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
         // set data model
         var oData = {
            recipient : {
               name : "World2"
            }
         };
         var oModel = new JSONModel(oData);
         this.setModel(oModel);
      // set invoice model - local
      var oConfig = this.getMetadata().getConfig();
      var sNamespace = this.getMetadata().getManifestEntry("sap.app").id;
      var oInvoiceModel = new JSONModel(jQuery.sap.getModulePath(sNamespace, oConfig.invoiceLocal));
      this.setModel(oInvoiceModel, "invoice");
      
      //var oModel = new sap.ui.model.odata.ODataModel("https://cors-anywhere.herokuapp.com/http://services.odata.org/V4/Northwind/Northwind.svc/");
         // set dialog
	   this.helloDialog = new HelloDialog();
      }
   });
});