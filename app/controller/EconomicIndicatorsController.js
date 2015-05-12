/*
 * File: app/controller/EconomicIndicatorsController.js
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

Ext.define('MEC_App.controller.EconomicIndicatorsController', {
    extend: 'Ext.app.Controller',

    requires: [
        'MEC_App.view.EconomicIndicatorsView'
    ],

    config: {
        control: {
            "panel#EconomicIndicatorsView": {
                initialize: 'onEconomicIndicatorsViewInitialize'
            },
            "list#lstIndicators": {
                itemtap: 'onLstIndicatorsItemTap'
            },
            "panel#EconomicIndicatorsDetailsView": {
                initialize: 'onEconomicIndicatorsDetailsViewInitialize'
            },
            "panel#EconomicIndicatorsBrief": {
                initialize: 'onEconomicIndicatorsBriefInitialize'
            }
        }
    },

    onEconomicIndicatorsViewInitialize: function(component, eOpts) {
        var view = component;//me.getMyBusinessView();


        Ext.AnimationHelper.ShowLoading();


        view.down('#lblTitle').setHtml(view.getData());



        var me = this;

        Ext.Ajax.request({

            url : Ext.Global.GetConfig('CMSWSUrl')+ '/IndicatorsAndReport/GetAllIndicatorsAndReports?culture='+ Ext.Global.LanguageFlag +'&pageIndex=0&pageSize=20',
            method : 'Get',
            success : function (response) {

                var json = Ext.util.JSON.decode(response.responseText);

                console.log(json);


                var store = new Ext.data.Store({
                    data : json
                });

                var lstIndicators = view.down('#lstIndicators');
                lstIndicators.setStore(store);

                Ext.AnimationHelper.HideLoading();
            }
        });

    },

    onLstIndicatorsItemTap: function(dataview, index, target, record, e, eOpts) {
        dataview.up('MainNavView').push({
            xtype: 'EconomicIndicatorsDetailsView',
            title: Ext.Global.GetFixedTitle(),
            data: record.data

        });
    },

    onEconomicIndicatorsDetailsViewInitialize: function(component, eOpts) {
        var view = component;
        var data = view.getData();

        //console.log(data);

        view.down('#lblTitle').setHtml(data.Title);
        view.down('#lblValue').setHtml(data.Value+ ' مليون (ر.ق)') ;

        if(data.ChangePercent>0){
            view.down('#lblPercentOfChange').addCls('arrow-up-details');
        }else{
            view.down('#lblPercentOfChange').addCls('arrow-down-details');
        }



        view.down('#lblPercentOfChange').setHtml(data.ChangePercent);


        view.down('#lblLastUpdate2').setHtml(Ext.Global.FormatDate(data.LastUpdated));


        view.down('#lblWhatIS').setHtml(view.down('#lblWhatIS').getHtml()+ data.Title);

        view.down('#pnlPDF').element.on('tap', function () {
            window.open("http://www.google.com", "_blank");
        });


        view.down('#pnlBrief').element.on('tap', function () {


            Ext.Viewport.getActiveItem().push({
                xtype: 'EconomicIndicatorsBrief',
                title: Ext.Global.GetFixedTitle(),
                data: data
            });


        });




    },

    onEconomicIndicatorsBriefInitialize: function(component, eOpts) {
        var view = component;
                var data = view.getData();

         view.down('#lblTitle').setHtml(data.Title);
        view.down('#lblBrief').setHtml(data.Description);


    }

});