/*
 * File: app/controller/MyBusinessController.js
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

Ext.define('MEC_App.controller.MyBusinessController', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.Date'
    ],

    config: {
        refs: {
            MyBusinessView: '#MyBusinessView',
            MyEstablishmentDetails: '#MyEstablishmentDetails'
        },

        control: {
            "panel#MyBusinessView": {
                initialize: 'onMyBusinessViewInitialize'
            },
            "list#lstMyCompanies": {
                itemtap: 'onLstMyCompaniesItemTap'
            },
            "panel#MyEstablishmentDetails": {
                initialize: 'onMyEstablishmentDetailsInitialize'
            },
            "list#lstBranches-c1": {
                itemtap: 'onLstBranchesc1ItemTap'
            },
            "panel#MyBranchDetails": {
                initialize: 'onMyBranchDetailsInitialize'
            }
        }
    },

    onMyBusinessViewInitialize: function(component, eOpts) {
        Ext.AnimationHelper.ShowLoading();


        var requestData = {
            "serviceId": "2",
            "token": Ext.Global.userToken,
            "language": "ar",
            "identityType":'QID', //Ext.Global.identityType,
            "identityNum": Ext.Global.identityNum,
            "identityNationality":  Ext.Global.identityNationality
        };


        var me = this;

        Ext.Ajax.request({

            url : Ext.Global.GetConfig('webServiceUrl'),
            method : 'POST',
            jsonData :requestData,
            success : function (response) {

                var json = Ext.util.JSON.decode(response.responseText);

                //Companies
                var storeCompanies = new Ext.data.Store({
                    data : json.listOfPrimaryEstablishment.primaryEstablishment
                });


                var view = me.getMyBusinessView();

                var lstComapnies = view.down('#lstMyCompanies');
                lstComapnies.setStore(storeCompanies);

                Ext.AnimationHelper.HideLoading();


            }
        });


    },

    onLstMyCompaniesItemTap: function(dataview, index, target, record, e, eOpts) {

        dataview.up('MainNavView').push({
            xtype: 'MyEstablishmentDetails',
            title: Ext.Global.GetFixedTitle(),
            data: record.data

        });



    },

    onMyEstablishmentDetailsInitialize: function(component, eOpts) {
        var view = component; //me.getMyEstablishmentDetails();

        var cr = view.getData().commercialRegistration;

        if(cr===''){

            Ext.device.Notification.show({
                title: 'Data Issue ',
                buttons: ["OK"],
                message: 'رقم السجل التجاري غير صحيح٫ برجاء العودة واختيار شركة اخرى'
            });

            return;

        }


        Ext.AnimationHelper.ShowLoading();




        // get establishment details

        var me = this;

        console.log(cr);

        requestData = {
            "serviceId": "8",
            "token": Ext.Global.userToken,
            "language": "ar",
            "commercialRegistrationNum":cr,
            "moiEstablishmentNum":"",
            "siebelSpcOperationSpcObjectSpcId":"",
            "qatarChamberNum":"",
            "statusMsg":"",
            "commercialPermitNum":"",
            "numOutputObjects":"",
            "economicalNum":""
        };


        Ext.Ajax.request({

            url : Ext.Global.GetConfig('webServiceUrl'),
            method : 'POST',
            // useDefaultXhrHeader: false,
            jsonData :requestData,
            success : function (response) {
                var json = Ext.util.JSON.decode(response.responseText);


                //Bind Data to controls
                var company= json.listOfMecPrimaryEstablishment.companyEstablishment[0];



                view.down('#commercialRegistration').setHtml(company.commercialRegistration);
                view.down('#commercialRegistrationExpiryDate').setHtml(company.commercialRegistrationExpiryDate);
                view.down('#commercialRegistrationStatus').setHtml(company.commercialRegistrationStatus);
                view.down('#establishmentEnglishName').setHtml(company.establishmentEnglishName);
                view.down('#establishmentArabicName').setHtml(company.establishmentArabicName);
                view.down('#companyCapital').setHtml(company.companyCapital);
                view.down('#commercialPermit').setHtml(company.commercialPermit);
                view.down('#commercialPermitStatus').setHtml(company.commercialPermitStatus);
                view.down('#commercialPermitExpiryDate').setHtml(company.commercialPermitExpiryDate);
                view.down('#establishmentDate').setHtml(company.establishmentDate);
                view.down('#establishmentType').setHtml(company.establishmentType);
                view.down('#establishmentLegalForm').setHtml(company.establishmentLegalForm);
                view.down('#establishmentStatus').setHtml(company.establishmentStatus);



                //signatories
                var storeSignatories = new Ext.data.Store({
                    data : company.listOfSignatories.signatories
                });

                var lst = view.down('#lstSignatories');
                lst.setStore(storeSignatories);

                lst.setHeight(company.listOfSignatories.signatories.length*6 + 'em');
                lst.setScrollable(false);



                //Branches

                if(company.listOfBranches.branches.length > 0){
                    var storeBranches = new Ext.data.Store({
                        data : company.listOfBranches.branches
                    });



                    var lstBranches = view.down('#lstBranches');
                    lstBranches.setStore(storeBranches);

                    lstBranches.setHeight(company.listOfBranches.branches.length* 4.2 + 'em');
                    lstBranches.setScrollable(false);

                }




                // business activities


                if(company.listOfCRBusinessActivities.crBusinessActivities.length > 0){
                    var storActivities = new Ext.data.Store({
                        data : company.listOfCRBusinessActivities.crBusinessActivities
                    });



                    var lstBizActivities = view.down('#lstBizActivities');
                    lstBizActivities.setStore(storActivities);

                    lstBizActivities.setHeight(company.listOfCRBusinessActivities.crBusinessActivities.length*3 + 'em');
                    lstBizActivities.setScrollable(false);

                }



                Ext.AnimationHelper.HideLoading();


            }
        });



    },

    onLstBranchesc1ItemTap: function(dataview, index, target, record, e, eOpts) {
        dataview.up('MainNavView').push({
            xtype: 'MyBranchDetails',
            title: Ext.Global.GetFixedTitle(),
            data: record.data

        });



    },

    onMyBranchDetailsInitialize: function(component, eOpts) {
        var view = component; //me.getMyEstablishmentDetails();

        var cr = view.getData().branchCR;

        //alert(cr);


        if(cr===''){

            Ext.device.Notification.show({
                title: 'Data Issue ',
                buttons: ["OK"],
                message: 'رقم السجل التجاري غير صحيح٫ برجاء العودة واختيار شركة اخرى'
            });

            return;

        }


           Ext.AnimationHelper.ShowLoading();




        // get establishment details

        var me = this;

        console.log(cr);

         requestData = {
          "serviceId": "8",
          "token": Ext.Global.userToken,
          "language": "ar",
          "commercialRegistrationNum":cr,
          "moiEstablishmentNum":"",
          "siebelSpcOperationSpcObjectSpcId":"",
          "qatarChamberNum":"",
          "statusMsg":"",
          "commercialPermitNum":"",
          "numOutputObjects":"",
          "economicalNum":""
        };


                Ext.Ajax.request({

                    url : Ext.Global.GetConfig('webServiceUrl'),
                    method : 'POST',
                    // useDefaultXhrHeader: false,
                    jsonData :requestData,
                    success : function (response) {
                       var json = Ext.util.JSON.decode(response.responseText);


                        //Bind Data to controls
                        var company= json.listOfMecPrimaryEstablishment.companyEstablishment[0];



                        view.down('#commercialRegistration').setHtml(company.commercialRegistration);
                        view.down('#commercialRegistrationExpiryDate').setHtml(company.commercialRegistrationExpiryDate);
                        view.down('#commercialRegistrationStatus').setHtml(company.commercialRegistrationStatus);
                        view.down('#establishmentEnglishName').setHtml(company.establishmentEnglishName);
                        view.down('#establishmentArabicName').setHtml(company.establishmentArabicName);
                        view.down('#companyCapital').setHtml(company.companyCapital);
                        view.down('#commercialPermit').setHtml(company.commercialPermit);
                        view.down('#commercialPermitStatus').setHtml(company.commercialPermitStatus);
                        view.down('#commercialPermitExpiryDate').setHtml(company.commercialPermitExpiryDate);
                        view.down('#establishmentDate').setHtml(company.establishmentDate);
                        view.down('#establishmentType').setHtml(company.establishmentType);
                        view.down('#establishmentLegalForm').setHtml(company.establishmentLegalForm);
                        view.down('#establishmentStatus').setHtml(company.establishmentStatus);



                        //signatories
                        var storeSignatories = new Ext.data.Store({
                            data : company.listOfSignatories.signatories
                        });

                        var lst = view.down('#lstSignatories');
                        lst.setStore(storeSignatories);

                        lst.setHeight(company.listOfSignatories.signatories.length*6 + 'em');
                            lst.setScrollable(false);



                        //Branches

                        if(company.listOfBranches.branches.length > 0){
                        var storeBranches = new Ext.data.Store({
                            data : company.listOfBranches.branches
                        });



                        var lstBranches = view.down('#lstBranches');
                        lstBranches.setStore(storeBranches);

                        lstBranches.setHeight(company.listOfBranches.branches.length*6 + 'em');
                        lstBranches.setScrollable(false);


                        }




                        Ext.AnimationHelper.HideLoading();


                    }
                });

    }

});