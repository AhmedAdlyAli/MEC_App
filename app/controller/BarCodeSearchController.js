/*
 * File: app/controller/BarCodeSearchController.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MEC_App.controller.BarCodeSearchController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.BarCodeSearchController',

    config: {
        control: {
            "button#btnSearch": {
                tap: 'onBtnSearchTap'
            }
        }
    },

    onBtnSearchTap: function(button, e, eOpts) {
        cordova.plugins.barcodeScanner.scan(
            function (result) {



                var data = {commercialRegistration:result.text};

                Ext.Viewport.getActiveItem().push({
                    xtype: 'MyEstablishmentDetails',
                    title: Ext.Global.GetFixedTitle(),
                    data: data
                });


            },
            function (error) {
                alert("Barcode Scanning failed: " + error);
            }
        );














    }

});