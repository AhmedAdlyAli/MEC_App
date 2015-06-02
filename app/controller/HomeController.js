/*
 * File: app/controller/HomeController.js
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

Ext.define('MEC_App.controller.HomeController', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            "button#mybutton1": {
                tap: 'onMybutton1Tap'
            },
            "button#mybutton2": {
                tap: 'onMybutton2Tap'
            },
            "button#mybutton": {
                tap: 'onMybuttonTap'
            },
            "button#homeServices": {
                tap: 'onHomeServicesTap'
            },
            "button#homeNews": {
                tap: 'onHomeNewsTap'
            },
            "button#homeInquire": {
                tap: 'onHomeInquireTap'
            },
            "button#homeGeneralInfo": {
                tap: 'onHomeGeneralInfoTap'
            },
            "button#homeReports": {
                tap: 'onHomeReportsTap'
            },
            "button#homeProjects": {
                tap: 'onHomeProjectsTap'
            },
            "button#homeeContact": {
                tap: 'onHomeeContactTap'
            },
            "button#homeServices1": {
                tap: 'onHomeServices1Tap'
            },
            "button#btnMediaCenter1": {
                tap: 'onBtnMediaCenter1Tap'
            },
            "button#homeInquire1": {
                tap: 'onHomeInquire1Tap'
            },
            "button#homeReports1": {
                tap: 'onHomeReports1Tap'
            },
            "button#btnProjects1": {
                tap: 'onBtnProjects1Tap'
            },
            "button#homeContact1": {
                tap: 'onHomeContact1Tap'
            }
        }
    },

    onMybutton1Tap: function(button, e, eOpts) {

        Ext.Global.ResetHistory();

        button.up('MainNavView').push({
            xtype: 'ContactUsView',
            title: 'Contact Us'
        });




    },

    onMybutton2Tap: function(button, e, eOpts) {

        Ext.Global.ResetHistory();

        button.up('MainNavView').push({
            xtype: 'EconomyNewsView',
            title: 'testttttt'
        });

    },

    onMybuttonTap: function(button, e, eOpts) {


        Ext.Viewport.setActiveItem({xtype:'SideMenuView'});




    },

    onHomeServicesTap: function(button, e, eOpts) {

        Ext.Global.ResetHistory();

        button.up('MainNavView').push({
            xtype: 'PublicServiceView',
            title: 'الخدمات العامة'
        });
    },

    onHomeNewsTap: function(button, e, eOpts) {

        Ext.Global.ResetHistory();

        button.up('MainNavView').push({
                    xtype: 'MediaCenterView',
                    title: 'المركز الاعلامي'
                });
    },

    onHomeInquireTap: function(button, e, eOpts) {

        Ext.Global.ResetHistory();

        button.up('MainNavView').push({
            xtype: 'InquiriesView',
            title: "الاستعلامات و الاصدارات"
        });
    },

    onHomeGeneralInfoTap: function(button, e, eOpts) {

        Ext.Global.ResetHistory();

        button.up('MainNavView').push({
            xtype: 'InquiriesView',
            title: "معلومات عامة"
        });
    },

    onHomeReportsTap: function(button, e, eOpts) {

        Ext.Global.ResetHistory();

        button.up('MainNavView').push({
            xtype: 'ReportsView',
            title: "المؤشرات و التقارير"
        });
    },

    onHomeProjectsTap: function(button, e, eOpts) {

        Ext.Global.ResetHistory();

        button.up('MainNavView').push({
            xtype: 'ProjectsView',
            title: "المبادرات و المشاريع"
        });
    },

    onHomeeContactTap: function(button, e, eOpts) {

        Ext.Global.ResetHistory();

        button.up('MainNavView').push({
            xtype: 'ContactUsView',
            title: "التواصل"
        });
    },

    onHomeServices1Tap: function(button, e, eOpts) {
        //heeeeeee

        Ext.Global.ResetHistory();

        button.up('MainNavView').push({
            xtype: 'PublicServiceView',
            title: Ext.Global.GetFixedTitle()
        });


    },

    onBtnMediaCenter1Tap: function(button, e, eOpts) {

        Ext.Global.ResetHistory();

        button.up('MainNavView').push({
            xtype: 'MediaCenterView',
            title: Ext.Global.GetFixedTitle()
        });

    },

    onHomeInquire1Tap: function(button, e, eOpts) {

        Ext.Global.ResetHistory();

        button.up('MainNavView').push({
            xtype: 'InquiriesView',
            title: Ext.Global.GetFixedTitle()
        });

    },

    onHomeReports1Tap: function(button, e, eOpts) {

        Ext.Global.ResetHistory();

        button.up('MainNavView').push({
            xtype: 'ReportsView',
            title: Ext.Global.GetFixedTitle()
        });


    },

    onBtnProjects1Tap: function(button, e, eOpts) {

        Ext.Global.ResetHistory();

        button.up('MainNavView').push({
            xtype: 'ProjectsView',
            title: Ext.Global.GetFixedTitle()
        });

    },

    onHomeContact1Tap: function(button, e, eOpts) {

        Ext.Global.ResetHistory();

        button.up('MainNavView').push({
            xtype: 'ContactUsView',
            title: Ext.Global.GetFixedTitle()
        });

    }

});