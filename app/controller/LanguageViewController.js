/*
 * File: app/controller/LanguageViewController.js
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

Ext.define('MEC_App.controller.LanguageViewController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.LanguageViewController',

    requires: [
        'Ext.Global'
    ],

    config: {
        control: {
            "button#btrnEnglish": {
                tap: 'onBtrnEnglishTap'
            },
            "button#btnArabic": {
                tap: 'onBtnArabicTap'
            },
            "panel#LanguageView": {
                initialize: 'onLanguageViewInitialize'
            }
        }
    },

    onBtrnEnglishTap: function(button, e, eOpts) {


        localStorage.setItem('LanguageFlag', 'en');


        Ext.Global.LanguageFlag = 'en';

        var home = Ext.create('widget.MainNavView');
        Ext.Viewport.setActiveItem(home);




    },

    onBtnArabicTap: function(button, e, eOpts) {
        localStorage.setItem('LanguageFlag', 'ar');
        Ext.Global.LanguageFlag = 'ar';

        var home = Ext.create('widget.MainNavView');
        Ext.Viewport.setActiveItem(home);


    },

    onLanguageViewInitialize: function(component, eOpts) {
        var languageFlag  = localStorage.getItem('LanguageFlag');


        //alert(languageFlag);

        if(languageFlag){



            Ext.Global.LanguageFlag = languageFlag;

            var home = Ext.create('widget.MainNavView');
            Ext.Viewport.setActiveItem(home);
        }




    }

});