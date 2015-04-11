/*
 * File: app/view/TradeNameEstablishmentDetails.js
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

Ext.define('MEC_App.view.TradeNameEstablishmentDetails', {
    extend: 'Ext.Panel',
    alias: 'widget.TradeNameEstablishmentDetails',

    requires: [
        'Ext.Panel',
        'Ext.TitleBar',
        'Ext.Label',
        'MEC_App.controller.AnimationHelper'
    ],

    config: {
        fullscreen: true,
        layout: 'vbox',
        items: [
            {
                xtype: 'panel',
                items: [
                    {
                        xtype: 'titlebar',
                        docked: 'top',
                        itemId: 'mytitlebar',
                        title: 'Panel 1',
                        listeners: [
                            {
                                fn: function(element, eOpts) {
                                    Ext.AnimationHelper.HandleShowHidePanel(element,'pnlData');

                                },
                                event: 'painted'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        id: 'pnlData',
                        itemId: 'pnlData',
                        items: [
                            {
                                xtype: 'label',
                                html: 'label1'
                            },
                            {
                                xtype: 'label',
                                html: 'label1'
                            },
                            {
                                xtype: 'label',
                                html: 'label1'
                            }
                        ]
                    }
                ]
            }
        ]
    }

});