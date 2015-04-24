/*
 * File: app.js
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

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.application({

    requires: [
        'MEC_App.controller.Global',
        'MEC_App.controller.LocAr',
        'Ext.device.Camera',
        'Ext.device.Notification',
        'Ext.Img'
    ],
    uses: [
        'Ext.Ajax'
    ],
    models: [
        'PrintOffice',
        'MenuModel',
        'ComplaintsModel',
        'MinistryNewsModel',
        'RSSModel',
        'TradeNameResultModel'
    ],
    stores: [
        'MenuArrayStore',
        'PrintOffices',
        'MinistryNewsStore'
    ],
    views: [
        'HomeView',
        'PublicServiceView',
        'MediaCenterView',
        'InquiriesView',
        'ContactUsView',
        'ProjectsView',
        'ReportsView',
        'SettingsView',
        'MyBusinessView',
        'ComplaintsView',
        'MinistryPublicationView',
        'MinistryInThePressView',
        'EconomyNewsView',
        'TradeNameAvailabilityView',
        'ConsumerEducationView',
        'InvestorEducationView',
        'ViolationsView',
        'AboutMinistryView',
        'MinistryBranchesView',
        'FeedbackFormView',
        'MinistryEmployeesView',
        'MicroEconomicReport',
        'BusinessIndicatorsReport',
        'ConsumerIndicatorsView',
        'PricingView',
        'WhereToShopView',
        'MonthlyFruitView',
        'TrademarkReportView',
        'MainNavView',
        'SideMenu',
        'PrintOffices',
        'PrintOfficeDetails',
        'PrintOfficeForm',
        'MenuModels',
        'MenuModelDetails',
        'MenuModelForm',
        'ContactUs2View',
        'NewsDetailsView',
        'MinistryNewsView',
        'NewsListItem',
        'TradeNameEstablishmentDetails',
        'MinistryReflectionsView',
        'MinistryNewsSection3View',
        'MinistryNewsSection4View',
        'MinistryNewsSection5View',
        'MinistryNewsSection6View',
        'TradeActivityAvailabilityView',
        'SupplyServiceView1',
        'SupplyServiceView2',
        'LoginFomView',
        'PrintOffsView1',
        'PrintOffsView2',
        'MyEstablishmentDetails',
        'MyBranchDetails',
        'TradeNameBranchDetails',
        'MyRequestsView',
        'MyRequestDetails',
        'PrintOffsView3',
        'AdminServicesView',
        'WebFrameView',
        'RecallsView',
        'RecallDetailsView'
    ],
    controllers: [
        'HomeController',
        'PublicServicesController',
        'PrintOffices',
        'PrintOffsController',
        'SideMenuController',
        'MediaCenterController',
        'InquiriesController',
        'ReportsController',
        'ContactController',
        'ComplaintsController',
        'MinistryNewsController',
        'TradeNameAvailabilityController',
        'TradeActivityAvailabilityController',
        'SupplyServiceController',
        'LoginController',
        'MyBusinessController',
        'MyRequestsController',
        'WebformViewController',
        'RecallsController'
    ],
    name: 'MEC_App',

    launch: function() {
        //Ext.Viewport.add(Ext.create('HelloWorld.view.Main'));


        //var loc = Ext.create('MEC_App.controller.LocAr');
        Ext.Global.LoadLocalization();

        Ext.Global.LoadSessionVariables();

        Ext.create('MEC_App.view.MainNavView', {fullscreen: true});
    }

});
