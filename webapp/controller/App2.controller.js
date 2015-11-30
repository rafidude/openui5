sap.ui.define([
   "sap/ui/core/mvc/Controller"
], function (Controller) {
   "use strict";
   return Controller.extend("demo.controller.App2", {
       onOpenDialog : function () {
			this.getOwnerComponent().helloDialog.open(this.getView());
		}
   });
});