/*
 * File: app/controller/LoginController.js
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

Ext.define('MEC_App.controller.LoginController', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.device.Notification'
    ],

    config: {
        refs: {
            LoginFormView: '#LoginFomView'
        },

        control: {
            "button#btnSubmitLogin": {
                tap: 'onBtnSubmitLoginTap'
            },
            "formpanel#LoginFomView": {
                initialize: 'onLoginFomViewInitialize'
            },
            "button#btnRegister": {
                tap: 'onBtnRegisterTap'
            }
        }
    },

    onBtnSubmitLoginTap: function(button, e, eOpts) {
        var view = this.getLoginFormView();

        var formData =view.getValues();

        var err='';

        if(formData.txtUserName===''){

            err+=Ext.Localization.GetMessage('errUserName');
        }


        if(formData.txtPassword===''){

            err+=Ext.Localization.GetMessage('errPassword');
        }


        if(err.length>0){

            Ext.device.Notification.show({
                title: Ext.Localization.GetMessage('Error'),
                buttons:[Ext.Localization.GetMessage('OK')],
                message: err
            });

            return;
        }




        var requestData = {
            "serviceId": "1",
            "userName":  view.down('#txtUserName').getValue(),
            "password":  view.down('#txtPassword').getValue()
        };



        Ext.AnimationHelper.ShowLoading();

        Ext.Ajax.request({

            url : Ext.Global.GetConfig('webServiceUrl'),
            method : 'POST',
            jsonData :requestData,
            success : function (response) {
                var json = Ext.util.JSON.decode(response.responseText);

                if(json.result=='True'){

                    //success set session var + redirect

                    Ext.Global.isLogged = true;
                    Ext.Global.userToken = json.token;

                    //console.log(json);


                    Ext.Global.identityType = json.listOfMecContactInfoIo.contact[0].identityType;
                    Ext.Global.identityNum = json.listOfMecContactInfoIo.contact[0].identityNum;
                    Ext.Global.identityNationality = json.listOfMecContactInfoIo.contact[0].identityNationality;


                    Ext.Global.identityNameAr = json.listOfMecContactInfoIo.contact[0].fullNameACalc;
                    Ext.Global.identityNameEn = json.listOfMecContactInfoIo.contact[0].fullNameECalc;



                    var identityTypeCode = json.listOfMecContactInfoIo.contact[0].identityTypeCode;


                    if(identityTypeCode==='SSN') identityTypeCode = 'QID';
                    if(identityTypeCode==='Passport') identityTypeCode = 'PASSPORT';


                    Ext.Global.identityTypeCode = identityTypeCode;




                    Ext.AnimationHelper.HideLoading();



                    // check if there is Return Url (view.getData)


                    if(view.getData()!==null && view.getData()!=='')
                    {
                        Ext.Viewport.getActiveItem().push({
                            xtype: view.getData(),
                            title: Ext.Global.GetFixedTitle()
                        });
                    }else{

                        Ext.Viewport.getActiveItem().reset();// redirect to home

                    }


                }else{

                    Ext.AnimationHelper.HideLoading();

                    Ext.device.Notification.show({
                        title: Ext.Localization.GetMessage('Error'),
                        buttons:[Ext.Localization.GetMessage('OK')],
                        message: Ext.Localization.GetMessage('errUserPass')
                    });


                }

            },
            failure: function(request, resp) {

                Ext.AnimationHelper.HideLoading();


                Ext.device.Notification.show({
                    title: Ext.Localization.GetMessage('Error'),
                    buttons:[Ext.Localization.GetMessage('OK')],
                    message: Ext.Localization.GetMessage('errConnection')
                });


            }
        });




    },

    onLoginFomViewInitialize: function(component, eOpts) {
                    Ext.Localization.LocalizeView(component);


    },

    onBtnRegisterTap: function(button, e, eOpts) {

        if(Ext.Global.LanguageFlag=='ar')
        window.open('https://services.mec.gov.qa/ara/start.swe?SWECmd=GotoView&SWEView=MEC+Create+User+General+Instructions+View+eService','_system');
        else
        window.open('https://services.mec.gov.qa/enu/start.swe?SWECmd=GotoView&SWEView=MEC+Create+User+General+Instructions+View+eService','_system');




    }

});