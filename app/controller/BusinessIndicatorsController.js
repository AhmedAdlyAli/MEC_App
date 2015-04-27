/*
 * File: app/controller/BusinessIndicatorsController.js
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

Ext.define('MEC_App.controller.BusinessIndicatorsController', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            "panel#BusinessIndicatorsView": {
                initialize: 'onBusinessIndicatorsViewInitialize'
            }
        }
    },

    onBusinessIndicatorsViewInitialize: function(component, eOpts) {
        var view = component;//me.getMyBusinessView();


        Ext.AnimationHelper.ShowLoading();




        var me = this;

        Ext.Ajax.request({

            url : Ext.Global.GetConfig('CMSWSUrl')+ '/QuarterlyBusinessReport/GetLastQuarterlyBusinessReports?culture=ar&pageIndex=0&pageSize=2&categoryId=3',
            method : 'Get',
            success : function (response) {

                var json = Ext.util.JSON.decode(response.responseText);

                console.log(json);


                var store = new Ext.data.Store({
                    data : json
                });


                view.down('#grdMainCRs').setStore(store).setHeight(json.length * 2.3 +'em').setScrollable(false);
                view.down('#grdSubCRs').setStore(store).setHeight(json.length * 2.3 +'em').setScrollable(false);
                view.down('#grdMainCRs2').setStore(store).setHeight(json.length * 2.3 +'em').setScrollable(false);
                view.down('#grdSubCRs2').setStore(store).setHeight(json.length * 2.3 +'em').setScrollable(false);




                Ext.AnimationHelper.HideLoading();
            }
        });



    }

});