/*
 * File: app/controller/MyRequestsController.js
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

Ext.define('MEC_App.controller.MyRequestsController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.MyRequestsController',

    config: {
        control: {
            "panel#MyRequestsView": {
                initialize: 'onMyRequestsViewInitialize'
            },
            "list#lstMyRequests": {
                itemtap: 'onLstMyRequestsItemTap'
            },
            "panel#MyRequestDetails": {
                initialize: 'onMyRequestDetailsInitialize'
            }
        }
    },

    onMyRequestsViewInitialize: function(component, eOpts) {
        var view = component;//me.getMyBusinessView();

        Ext.Localization.LocalizeView(view);



        Ext.AnimationHelper.ShowLoading();

        //alert('loading');


        var requestData = {
            "serviceId": "3",
            "token": Ext.Global.userToken,
            "language": Ext.Global.LanguageFlag,
            "identityType": Ext.Global.identityTypeCode,//'QID',
            "identityNum": Ext.Global.identityNum,
            "identityNationality":  Ext.Global.identityNationality
        };


        var me = this;

        Ext.Ajax.request({

            url : Ext.Global.GetConfig('webServiceUrl'),
            method : 'POST',
            jsonData :requestData,
            success : function (response) {


                Ext.AnimationHelper.HideLoading();

                var json = Ext.util.JSON.decode(response.responseText);



        if(json.listOfMecBssAllRequestsWs.mecLlcEstablishment.length>0)
                {


                var storeRequests = new Ext.data.Store({
                    data : json.listOfMecBssAllRequestsWs.mecLlcEstablishment
                });
                var lstRequests = view.down('#lstMyRequests');
                lstRequests.setStore(storeRequests);
                }else{



                            Ext.device.Notification.show({
                                title: Ext.Localization.GetMessage('Error'),
                                buttons:[Ext.Localization.GetMessage('OK')],
                                message: Ext.Localization.GetMessage('NoData')
                            });



                }



            }
        });

    },

    onLstMyRequestsItemTap: function(dataview, index, target, record, e, eOpts) {
        dataview.up('MainNavView').push({
            xtype: 'MyRequestDetails',
            title: Ext.Global.GetFixedTitle(),
            data: record.data

        });

    },

    onMyRequestDetailsInitialize: function(component, eOpts) {
        Ext.Localization.LocalizeView(component);


        var view = component; //me.getMyEstablishmentDetails();

        var serial = view.getData().requestCaseNum;

        if(serial===''){

            Ext.device.Notification.show({
                title: 'Data Issue ',
                buttons: ["OK"],
                message: 'رقم الطلب غير موجود'
            });

            return;

        }


        Ext.AnimationHelper.ShowLoading();


        // get request details

        var me = this;

        requestData = {
            "serviceId": "4",
            "token": Ext.Global.userToken,
            "language": Ext.Global.LanguageFlag,
            "requestNumber":serial
        };


        Ext.Ajax.request({

            url : Ext.Global.GetConfig('webServiceUrl'),
            method : 'POST',
            jsonData :requestData,
            success : function (response) {
                var json = Ext.util.JSON.decode(response.responseText);



                //Bind Data to controls
                var request = json.listOfMecBssOneRequest.request[0];

                view.down('#serialNumber').setHtml(request.serialNumber);
                view.down('#caseStatus').setHtml(request.caseStatus);
                view.down('#caseType').setHtml(request.caseType);
                view.down('#caseEstablishmentCRN').setHtml(request.caseEstablishmentCRN);
                view.down('#caseSubmissionDate').setHtml(Ext.Global.FormatDate(request.caseSubmissionDate));
                view.down('#caseLastUpdateDate').setHtml(Ext.Global.FormatDate(request.caseLastUpdateDate));
                view.down('#caseRepresentativeIDNum').setHtml(request.caseRepresentativeIDNum);
                view.down('#caseRepresentativeName').setHtml(request.caseRepresentativeName);
                view.down('#caseRepresentativeNameENU').setHtml(request.caseRepresentativeNameENU);
                view.down('#caseEstablishmentName').setHtml(request.caseEstablishmentName);
                view.down('#caseEstablishmentNameENU').setHtml(request.caseEstablishmentNameENU);
                view.down('#totlaRemainingFees').setHtml(request.totlaRemainingFees);


                Ext.AnimationHelper.HideLoading();




            }
        });


    }

});