/*
 * File: app/controller/TradeNameAvailabilityController.js
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

Ext.define('MEC_App.controller.TradeNameAvailabilityController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            txtActivityName: '#txtActivityName',
            lstResults: '#lstResults'
        },

        control: {
            "button#btnSubmit": {
                tap: 'onBtnSubmitTap'
            },
            "list#lstTradeNameResults": {
                itemtap: 'onLstTradeNameResultsItemTap'
            },
            "panel#TradeNameEstablishmentDetails": {
                initialize: 'onTradeNameEstablishmentDetailsInitialize'
            },
            "list#lstBranches": {
                itemtap: 'onLstBranchesItemTap'
            },
            "panel#TradeNameBranchDetails": {
                initialize: 'onTradeNameBranchDetailsInitialize'
            }
        }
    },

    onBtnSubmitTap: function(button, e, eOpts) {


        //validation


        var searchKeyword= this.getTxtActivityName().getValue();


        if(searchKeyword===''){


            Ext.device.Notification.show({
                title: 'خطأ',
                buttons:["موافق"],
                message: 'يجب إدخال كلمة البحث'
            });

            return;

        }








        var url = Ext.Global.GetConfig('webServiceUrl');


        var requestData = {
            "serviceId":"6",
            "language":"ARA",
            "tradeNameLanguage":"ARA",
            "tradeName":searchKeyword
        };



        Ext.AnimationHelper.ShowLoading();





        Ext.Ajax.request({

            url : url,
            method : 'POST',
            // useDefaultXhrHeader: false,
            jsonData :requestData,
            success : function (response) {
                var json = Ext.util.JSON.decode(response.responseText);
                var store = new Ext.data.Store({
                    //model: 'MEC_App.model.TradeNameResultModel',
                    data : json.listOfMecReservedTradeNamesIo.mecReservedTradeNames
                });

                var lst = Ext.getCmp('lstTradeNameResults');
                lst.setStore(store);


                Ext.AnimationHelper.HideLoading();


            },
            failure: function(request, resp) {
                alert("in failure");
            }
        });






    },

    onLstTradeNameResultsItemTap: function(dataview, index, target, record, e, eOpts) {

        dataview.up('MainNavView').push({
            xtype: 'TradeNameEstablishmentDetails',
            title: 'بيانات الشركة',
            data: record.data

        });





    },

    onTradeNameEstablishmentDetailsInitialize: function(component, eOpts) {



        var cr = component.getData().listOfMecPrimaryEstablishment2.mecPrimaryEstablishment2[0].commercialRegistration;

        if(cr===''){

            Ext.device.Notification.show({
                title: 'Data Issue ',
                buttons: ["OK"],
                message: 'رقم السجل التجاري غير صحيح٫ برجاء العودة واختيار شركة اخرى'
            });

            return;

        }


        var view = component;

           Ext.AnimationHelper.ShowLoading();





        var url = Ext.Global.GetConfig('webServiceUrl');






        // get establishment details


        console.log(cr);

                 requestData = {
          "serviceId": "88",
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

                    url : url,
                    method : 'POST',
                    // useDefaultXhrHeader: false,
                    jsonData :requestData,
                    success : function (response) {
                       var json = Ext.util.JSON.decode(response.responseText);




                        //Bind Data to controls
                        var company= json.listOfMecPrimaryEstablishment.companyEstablishment[0];



                        console.log(company.listOfCRBusinessActivities);
                        console.log(company.listOfBranches);

                        console.log(company.listOfSignatories);


                        Ext.getCmp('commercialRegistration1').setHtml(company.commercialRegistration);
                        Ext.getCmp('commercialRegistrationExpiryDate1').setHtml(company.commercialRegistrationExpiryDate);
                        Ext.getCmp('commercialRegistrationStatus1').setHtml(company.commercialRegistrationStatus);
                        Ext.getCmp('establishmentEnglishName1').setHtml(company.establishmentEnglishName);
                        Ext.getCmp('establishmentArabicName1').setHtml(company.establishmentArabicName);
                        Ext.getCmp('companyCapital1').setHtml(company.companyCapital);
                        Ext.getCmp('commercialPermit1').setHtml(company.commercialPermit);
                        Ext.getCmp('commercialPermitStatus1').setHtml(company.commercialPermitStatus);
                        Ext.getCmp('commercialPermitExpiryDate1').setHtml(company.commercialPermitExpiryDate);
                        Ext.getCmp('establishmentDate1').setHtml(company.establishmentDate);
                        Ext.getCmp('establishmentType1').setHtml(company.establishmentType);
                        Ext.getCmp('establishmentLegalForm1').setHtml(company.establishmentLegalForm);
                        Ext.getCmp('establishmentStatus1').setHtml(company.establishmentStatus);



                        //signatories
                        var storeSignatories = new Ext.data.Store({
                            data : company.listOfSignatories.signatories
                        });

                        var lst = Ext.getCmp('lstSignatories');
                        lst.setStore(storeSignatories);

                        lst.setHeight(company.listOfSignatories.signatories.length*6 + 'em');
                            lst.setScrollable(false);



                        //Branches

                        if(company.listOfBranches.branches.length > 0){
                        var storeBranches = new Ext.data.Store({
                            data : company.listOfBranches.branches
                        });



                        var lstBranches = Ext.getCmp('lstBranches');
                        lstBranches.setStore(storeBranches);

                        lstBranches.setHeight(company.listOfBranches.branches.length*6 + 'em');
                        lstBranches.setScrollable(false);


                        }


                       // business activities


                      if(company.listOfCRBusinessActivities.crBusinessActivities.length > 0){
                        var storActivities = new Ext.data.Store({
                            data : company.listOfCRBusinessActivities.crBusinessActivities
                        });



                        var lstBizActivities = view.down('#lstBizActivities');
                        lstBizActivities.setStore(storActivities);

                        lstBizActivities.setHeight(company.listOfCRBusinessActivities.crBusinessActivities.length*6 + 'em');
                        lstBizActivities.setScrollable(false);

                        }




                        Ext.AnimationHelper.HideLoading();


                    }
                });



    },

    onLstBranchesItemTap: function(dataview, index, target, record, e, eOpts) {
        dataview.up('MainNavView').push({
            xtype: 'TradeNameBranchDetails',
            title: Ext.Global.GetFixedTitle(),
            data: record.data

        });

    },

    onTradeNameBranchDetailsInitialize: function(component, eOpts) {
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