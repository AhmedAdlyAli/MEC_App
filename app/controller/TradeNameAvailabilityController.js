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
            lstResults: '#lstResults',
            btnSubmit: '#btnSubmit'
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
            },
            "formpanel#TradeNameAvailabilityView": {
                initialize: 'onTradeNameAvailabilityViewInitialize'
            },
            "searchfield#txtActivityName": {
                action: 'onTxtActivityNameAction'
            }
        }
    },

    onBtnSubmitTap: function(button, e, eOpts) {


        //validation


        var searchKeyword= this.getTxtActivityName().getValue();


        if(searchKeyword===''){


            Ext.device.Notification.show({
                title: Ext.Localization.GetMessage('Message'),
                buttons:[Ext.Localization.GetMessage('OK')],
                message: Ext.Localization.GetMessage('ErrSearchKeyword')
            });

            return;

        }




        var url = Ext.Global.GetConfig('webServiceUrl');


        var requestData = {
            "serviceId":"6",
            "language":Ext.Global.LanguageFlag,
            "tradeNameLanguage": Ext.Global.LanguageFlag=='ar'?'ARA':'ENU',
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


                if(json.listOfMecReservedTradeNamesIo.mecReservedTradeNames.length>0)
                {
                    var store = new Ext.data.Store({

                        data : json.listOfMecReservedTradeNamesIo.mecReservedTradeNames
                    });


                    //console.log(json.listOfMecReservedTradeNamesIo.mecReservedTradeNames);


                    var lst = Ext.getCmp('lstTradeNameResults');
                    lst.setStore(store);
                }else{

                    Ext.device.Notification.show({
                        title: Ext.Localization.GetMessage('Message'),
                        buttons:[Ext.Localization.GetMessage('OK')],
                        message: Ext.Localization.GetMessage('errNoSearchData')
                    });

                }




                Ext.AnimationHelper.HideLoading();


            }
        });






    },

    onLstTradeNameResultsItemTap: function(dataview, index, target, record, e, eOpts) {
        var cr='';
        var cp='';


        if(record.data.listOfMecPrimaryEstablishment2.mecPrimaryEstablishment2.length>0)

         {
             cr = record.data.listOfMecPrimaryEstablishment2.mecPrimaryEstablishment2[0].commercialRegistration;
             cp = record.data.listOfMecPrimaryEstablishment2.mecPrimaryEstablishment2[0].commercialPermit;

        }


        if(cr==='' && cp===''){

            Ext.device.Notification.show({
                title: Ext.Localization.GetMessage('Message'),
                buttons: [ Ext.Localization.GetMessage('OK')],
                message:  Ext.Localization.GetMessage('ErrNocrcp')
            });


        }else{


        dataview.up('MainNavView').push({
            xtype: 'TradeNameEstablishmentDetails',
            title: Ext.Global.GetFixedTitle(),
            data: record.data
        });



        }



    },

    onTradeNameEstablishmentDetailsInitialize: function(component, eOpts) {



        var cr = component.getData().listOfMecPrimaryEstablishment2.mecPrimaryEstablishment2[0].commercialRegistration;
        var cp = component.getData().listOfMecPrimaryEstablishment2.mecPrimaryEstablishment2[0].commercialPermit;



        if(cr==='' && cp===''){

            Ext.device.Notification.show({
                title: Ext.Localization.GetMessage('Message'),
                buttons: [ Ext.Localization.GetMessage('Ok')],
                message:  Ext.Localization.GetMessage('ErrNocrcp')
            });

            return;

        }





        if(cr!=='')cp=null;




        var view = component;

        Ext.AnimationHelper.ShowLoading();





        var url = Ext.Global.GetConfig('webServiceUrl');






        // get establishment details


        requestData = {
            "serviceId": "88",
            "language": Ext.Global.LanguageFlag,
            "commercialRegistrationNum":cr,
            "moiEstablishmentNum":"",
            "siebelSpcOperationSpcObjectSpcId":"",
            "qatarChamberNum":"",
            "statusMsg":"",
            "commercialPermitNum":cp,
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



                Ext.getCmp('commercialRegistration1').setHtml(company.commercialRegistration);
                Ext.getCmp('commercialRegistrationIssueDate1').setHtml(company.commercialRegistrationIssueDate);



                Ext.getCmp('commercialRegistrationExpiryDate1').setHtml(company.commercialRegistrationExpiryDate);
                Ext.getCmp('commercialRegistrationStatus1').setHtml(company.commercialRegistrationStatus);
                Ext.getCmp('establishmentEnglishName1').setHtml(company.establishmentEnglishName);
                Ext.getCmp('establishmentArabicName1').setHtml(company.establishmentArabicName);
                Ext.getCmp('companyCapital1').setHtml(company.companyCapital);
                Ext.getCmp('commercialPermit1').setHtml(company.commercialPermit);
                Ext.getCmp('commercialPermitStatus1').setHtml(company.commercialPermitStatus);
                Ext.getCmp('commercialPermitExpiryDate1').setHtml(company.commercialPermitExpiryDate);
                Ext.getCmp('establishmentDate1').setHtml((company.establishmentDate));
                Ext.getCmp('establishmentType1').setHtml(company.establishmentType);
                Ext.getCmp('establishmentLegalForm1').setHtml(company.establishmentLegalForm);
                Ext.getCmp('establishmentStatus1').setHtml(company.establishmentStatus);
                Ext.getCmp('establishmentRegNumber').setHtml(company.moiEstablishmentId);




                if(company.listOfSignatories.signatories.length>0)
                {
                    //signatories
                    var storeSignatories = new Ext.data.Store({
                        data : company.listOfSignatories.signatories
                    });

                    var lst = Ext.getCmp('lstSignatories');
                    lst.setStore(storeSignatories);

                    lst.setHeight(company.listOfSignatories.signatories.length*6 + 'em');
                    lst.setScrollable(false);

                }




                //Branches

                if(company.listOfBranches.branches.length > 0){
                    var storeBranches = new Ext.data.Store({
                        data : company.listOfBranches.branches
                    });



                    var lstBranches = view.down('#lstBranches');
                    lstBranches.setStore(storeBranches);

                    lstBranches.setHeight(company.listOfBranches.branches.length* 4.4 + 'em');
                    lstBranches.setScrollable(false);

                }





                /*
                if(company.listOfHumanPartners.humanPartners.length>0)
                {
                    //partners
                    var storePartners = new Ext.data.Store({
                        data : company.listOfHumanPartners.humanPartners
                    });

                    var lstPartners = view.down('#lstPartners');
                    lstPartners.setStore(storePartners);

                    lstPartners.setHeight(company.listOfHumanPartners.humanPartners.length*6 + 'em');
                    lstPartners.setScrollable(false);


                }
        */





                // business activities


                if(company.listOfCRBusinessActivities.crBusinessActivities.length > 0){
                    var storActivities = new Ext.data.Store({
                        data : company.listOfCRBusinessActivities.crBusinessActivities
                    });



                    var lstBizActivities = view.down('#lstBizActivities');
                    lstBizActivities.setStore(storActivities);

                    lstBizActivities.setHeight(company.listOfCRBusinessActivities.crBusinessActivities.length*3.6 + 'em');
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

        //console.log(cr);

         requestData = {
          "serviceId": "88",
          "language": Ext.Global.LanguageFlag,
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

                         Ext.AnimationHelper.HideLoading();

                       var json = Ext.util.JSON.decode(response.responseText);

                        //console.log(json);
                        //Bind Data to controls
                        var company= json.listOfMecPrimaryEstablishment.companyEstablishment[0];



                        view.down('#commercialRegistration').setHtml(company.commercialRegistration);
                        view.down('#commercialRegistrationIssueDate').setHtml(Ext.Global.FormatDate(company.commercialRegistrationIssueDate));
                        view.down('#commercialRegistrationExpiryDate').setHtml(Ext.Global.FormatDate(company.commercialRegistrationExpiryDate));
                        view.down('#commercialRegistrationStatus').setHtml(company.commercialRegistrationStatus);
                        view.down('#establishmentEnglishName').setHtml(company.establishmentEnglishName);
                        view.down('#establishmentArabicName').setHtml(company.establishmentArabicName);
                        view.down('#companyCapital').setHtml(company.companyCapital);
                        view.down('#commercialPermit').setHtml(company.commercialPermit);
                        view.down('#commercialPermitStatus').setHtml(company.commercialPermitStatus);
                        view.down('#commercialPermitExpiryDate').setHtml(Ext.Global.FormatDate(company.commercialPermitExpiryDate));
                        view.down('#establishmentDate').setHtml(Ext.Global.FormatDate(company.establishmentDate));
                        view.down('#establishmentType').setHtml(company.establishmentType);
                        view.down('#establishmentLegalForm').setHtml(company.establishmentLegalForm);
                        view.down('#establishmentStatus').setHtml(company.establishmentStatus);
                        view.down('#establishmentRegNumber').setHtml(company.moiEstablishmentId);


                        //signatories

                                if(company.listOfSignatories.signatories.length>0)
                {
                        var storeSignatories = new Ext.data.Store({
                            data : company.listOfSignatories.signatories
                        });

                        var lst = view.down('#lstSignatories');
                        lst.setStore(storeSignatories);

                        lst.setHeight(company.listOfSignatories.signatories.length*6 + 'em');
                            lst.setScrollable(false);

                }




                        //activites
                                if(company.listOfCRBusinessActivities.crBusinessActivities.length>0)
                {

                    //activites
                    var storeAct = new Ext.data.Store({
                        data : company.listOfCRBusinessActivities.crBusinessActivities
                    });

                    var lst2 = view.down('#lstBizActivities');
                    lst2.setStore(storeAct);

                    lst2.setHeight(company.listOfCRBusinessActivities.crBusinessActivities.length*6 + 'em');
                    lst2.setScrollable(false);

                }







                    }
                });

    },

    onTradeNameAvailabilityViewInitialize: function(component, eOpts) {
        Ext.Localization.LocalizeView(component);
    },

    onTxtActivityNameAction: function(textfield, e, eOpts) {

        var btn = this.getBtnSubmit();
        btn.fireEvent('tap');
    }

});