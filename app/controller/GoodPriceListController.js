/*
 * File: app/controller/GoodPriceListController.js
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

Ext.define('MEC_App.controller.GoodPriceListController', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            "panel#GoodPriceListView": {
                initialize: 'onGoodPriceListViewInitialize'
            }
        }
    },

    onGoodPriceListViewInitialize: function(component, eOpts) {
        var view = component;
        Ext.Localization.LocalizeView(view);

        var data = view.getData();

        view.down('#lblTitle').setHtml(data.ProductName);

        Ext.AnimationHelper.ShowLoading();

        Ext.Ajax.request({

            url : Ext.Global.GetConfig('CMSWSUrl')+ '/Product/GetProduct/'+data.Id+'?culture='+Ext.Global.LanguageFlag,
            method : 'Get',
            success : function (response) {

                        Ext.AnimationHelper.HideLoading();





                var json = Ext.util.JSON.decode(response.responseText);

                if(json.ProductPrices.length>0)

                {

                    var store = new Ext.data.Store({
                        data : json.ProductPrices
                    });

                    var lstPrices = view.down('#lstPrices');
                    lstPrices.setStore(store);

                }


            }
        });

    }

});