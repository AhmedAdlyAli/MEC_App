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
        'MenuModel',
        'EmptyModel'
    ],
    stores: [
        'MenuArrayStore'
    ],
    views: [
        'PublicServiceView',
        'MediaCenterView',
        'InquiriesView',
        'ContactUsView',
        'ReportsView',
        'SettingsView',
        'MyBusinessView',
        'ComplaintsView',
        'MinistryPublicationView',
        'MinistryInThePressView',
        'EconomyNewsView',
        'TradeNameAvailabilityView',
        'MinistryEmployeesView',
        'MicroEconomicReport',
        'PricingView',
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
        'RecallDetailsView',
        'ViolationsView',
        'ViolationsDetailsView',
        'ConsumerEducationView',
        'InvestorEducationView',
        'ProjectsView',
        'ProjectDetailsView',
        'BusinessIndicatorsView',
        'EconomicIndicatorsListing',
        'ConsumerIndicatorsListing',
        'DailyReportView',
        'DailyPricesView',
        'GoodsPricesView',
        'ShopPriceListView',
        'AboutView',
        'MinistryBranchesView',
        'EconomicIndicatorsBrief',
        'InvestorServiceView',
        'ConsumerServiceView',
        'FeedbackFormView',
        'NotificationView',
        'LanguageView',
        'SupplyServiceView3',
        'SupplyServiceView4',
        'SupplyServiceListing',
        'SupplyServiceHowTo',
        'SupplyServiceDepartmentServices',
        'SupplyServiceNearestDealer',
        'SupplyServiceMyData',
        'WebFrameView1',
        'AboutAppView',
        'MyBisunessFixed',
        'GenericSelectListView',
        'BarCodeSearchView',
        'TradeExchangeView'
    ],
    controllers: [
        'HomeController',
        'SideMenuController',
        'ComplaintsController',
        'MinistryNewsController',
        'TradeNameAvailabilityController',
        'TradeActivityAvailabilityController',
        'SupplyServiceController',
        'LoginController',
        'MyBusinessController',
        'MyRequestsController',
        'WebformViewController',
        'RecallsController',
        'ViolationsController',
        'ConsumerEducationController',
        'InvestorEducationController',
        'ProjectsController',
        'BusinessIndicatorsController',
        'EconomicIndicatorsController',
        'DailyPricesController',
        'GoodsPricesController',
        'GoodPriceListController',
        'ShopPriceListController',
        'WhereToShopController',
        'LanguageViewController',
        'SettingsViewController',
        'BarCodeSearchController'
    ],
    name: 'MEC_App',

    launch: function() {

        Ext.Ajax.setTimeout(90000);

        Ext.Ajax.on('requestexception', function (conn, response, options) {

            Ext.device.Notification.show({
                title: Ext.Localization.GetMessage('Error'),
                buttons:[Ext.Localization.GetMessage('OK')],
                message: Ext.Localization.GetMessage('errConnection')
            });


            Ext.AnimationHelper.HideLoading();

            Ext.Viewport.getActiveItem().getNavigationBar().fireEvent('back');


        });


        Ext.Global.LoadLocalization();

        Ext.Global.LoadSessionVariables();

        Ext.Global.Loading=false;

        if (Ext.os.is('Android')) {

            document.addEventListener("backbutton", Ext.bind(onBackKeyDown, this), false);

            function onBackKeyDown(eve) {

                if(Ext.Viewport.getActiveItem().innerItems.length > 1) {
                    eve.preventDefault();

                    Ext.Viewport.getActiveItem().getNavigationBar().fireEvent('back');
                }
                else {
                    return;
                }

            }
        }

        Ext.create('MEC_App.view.LanguageView', {fullscreen: true});
    }

});
