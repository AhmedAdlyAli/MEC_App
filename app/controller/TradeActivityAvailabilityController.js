/*
 * File: app/controller/TradeActivityAvailabilityController.js
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

Ext.define('MEC_App.controller.TradeActivityAvailabilityController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            txtActivity: '#txtActivity'
        },

        control: {
            "button#btnSubmitActivity": {
                tap: 'onBtnSubmitActivityTap'
            }
        }
    },

    onBtnSubmitActivityTap: function(button, e, eOpts) {
        //validation


        var searchKeyword= this.getTxtActivity().getValue();


        if(searchKeyword===''){


            Ext.device.Notification.show({
                title: 'خطأ',
                buttons:["موافق"],
                message: 'يجب إدخال اسم النشاط'
            });

            return;

        }





        var url = Ext.Global.GetConfig('webServiceUrl');


        var requestData = {
            "serviceId":"5",
            "language":"ARA",
            "englishSearchClause":"",
            "arabicSearchClause":searchKeyword
        };



        Ext.AnimationHelper.ShowLoading();
        Ext.Ajax.request({

            url : url,
            method : 'POST',
            jsonData :requestData,
            success : function (response) {
                var json = Ext.util.JSON.decode(response.responseText);
                var store = new Ext.data.Store({
                    data : json.listOfMecBusinessActivitiesIo.mecBusinessActivitiesIo
                });

                var lst = Ext.getCmp('lstTradeActivityResults');
                lst.setStore(store);


                Ext.AnimationHelper.HideLoading();


            },
            failure: function(request, resp) {
                alert("in failure");
            }
        });



    }

});