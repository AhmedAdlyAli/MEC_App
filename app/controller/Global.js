/*
 * File: app/controller/Global.js
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

Ext.define('MEC_App.controller.Global', {
    extend: 'Ext.Base',

    alternateClassName: [
        'Ext.Global'
    ],
    singleton: true,

    config: {
    },

    LoadLocalization: function() {
                var loc = Ext.create('MEC_App.controller.LocAr');
                loc.Load(this);

    },

    GetViewTitle: function(view) {
        //return '<div class=toplogo></div>';

        return this.ViewTitles[view];
    },

    GetGenericContent: function(content) {
                return this.GenericContent[content];
    },

    GetComplaintsTitle: function(title) {
        return this.ComplaintsLabels[title];


    },

    GetValidationMsg: function(msg) {
                 return this.ValidationMsg[msg];

    },

    GetConfirmationMsg: function(msg) {
                 return this.ConfirmationMsg[msg];

    },

    GetConfig: function(key) {

        var config={

            webServiceUrl : 'http://webservicesstg.mec.gov.qa/MECBSSGateway/mecbssgw/bssgateway/accept',
            supplyWebServiceUrl: 'http://ctc.vivensas.com/MService.svc'


        };


        return config[key];
    },

    GetFixedTitle: function() {
                return '<img src="resources/images/toplogo.png" />';
    },

    LoadSessionVariables: function() {
                this.isLogged = false;
                this.userToken ='';
                this.identityType  ='';
                this.identityNum  ='';
                this.identityNationality  ='';



    },

    RedirectLoggedUser: function(view) {
        if(Ext.Global.isLogged){
            Ext.Viewport.getActiveItem().push({
                xtype: view,
                title: Ext.Global.GetFixedTitle()
            });
        }else{
            Ext.Viewport.getActiveItem().push({
                xtype: 'LoginFomView',
                title: Ext.Global.GetFixedTitle(),
                data: view
            });


        }
    }

});