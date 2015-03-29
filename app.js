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
    models: [
        'PrintOffice'
    ],
    stores: [
        null,
        'PrintOffices'
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
        'LogivFormView',
        'MyBusinessView',
        'PrintOffsView',
        'MyRequestsView',
        'ComplaintsView',
        'SupplyServiceView',
        'MinistryPublicationView',
        'MinistryInThePressView',
        'EconomyNewsView',
        'TradeNameAvailabilityView',
        'RecallsView',
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
        'SideMenuView',
        'SideMenu',
        'PrintOffices',
        'PrintOfficeDetails',
        'PrintOfficeForm'
    ],
    controllers: [
        'HomeController',
        'PublicServicesController',
        'PrintOffices',
        'PrintOffsController'
    ],
    name: 'MEC_App',

    launch: function() {

        Ext.create('MEC_App.view.MainNavView', {fullscreen: true});
    }

});
