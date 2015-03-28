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
            "button#mybutton": {
                tap: 'onMybuttonTap'
            },
            "button#mybutton1": {
                tap: 'onMybutton1Tap'
            }
        }
    },

    onMybuttonTap: function(button, e, eOpts) {

        button.up('MainNavView').push({
            xtype: 'widget.ContactUsView',
            title: 'Step 3'
        });






    },

    onMybutton1Tap: function(button, e, eOpts) {

        button.up('MainNavView').push({
            xtype: 'ContactUsView1',
            title: 'Step 2'
        });




    }

});