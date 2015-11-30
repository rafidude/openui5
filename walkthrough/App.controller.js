sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
   "use strict";
   return Controller.extend("demo.App", {
       onInit: function(){
           //set data modelon view
           var oData={
               person:{
                   name: 'WD',
                   age: 25
               }
           }
           var oModel = new JSONModel(oData);
           this.getView().setModel(oModel);
       },
       onShowHello: function(){
            var name = this.getView().getModel().getProperty("/person/name");
            MessageToast.show("Hello " + name);
       }
   });
});