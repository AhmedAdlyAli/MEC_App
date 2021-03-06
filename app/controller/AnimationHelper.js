/*
 * File: app/controller/AnimationHelper.js
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

Ext.define('MEC_App.controller.AnimationHelper', {
    extend: 'Ext.Base',

    alternateClassName: [
        'Ext.AnimationHelper'
    ],
    singleton: true,

    config: {
    },

    HandleShowHidePanel: function(element, panelID) {
        var panel = Ext.getCmp(panelID); //Ext.ComponentQuery.Query(panelID);




        element.on('tap', function () {


            if (panel.isHidden()) {
                panel.show({type: 'slide', direction: 'down'});

                element.removeCls('acc-header2');
            }
            else {
                panel.hide();
                element.addCls('acc-header2');
                //{type: 'slide', direction: 'up'}
            }

        });



    },

    ShowLoading: function() {

        var message = 'جاري التحميل';

        if(Ext.Global.LanguageFlag == 'en'){
            message = 'Loading';
        }

        if(Ext.Global.Loading === false)
        {
            try {

                //ActivityIndicator.show(message);
                ProgressIndicator.showSimple(true);

            }
            catch(err) {

                Ext.Viewport.setMasked({
                    xtype: 'loadmask',
                    message: 'جاري التحميل ..'
                });


            }

            Ext.Global.Loading = true;

        }


    },

    HideLoading: function() {
        if(Ext.Global.Loading === true)
        {
            try {

                //ActivityIndicator.hide();


                ProgressIndicator.hide();

            }
            catch(err) {

                Ext.Viewport.setMasked(false);

            }
            Ext.Global.Loading = false;

        }



    }

});