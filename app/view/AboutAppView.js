/*
 * File: app/view/AboutAppView.js
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

Ext.define('MEC_App.view.AboutAppView', {
    extend: 'Ext.Panel',
    alias: 'widget.AboutAppView',

    requires: [
        'Ext.Label',
        'Ext.Panel',
        'Ext.Img'
    ],

    config: {
        fullscreen: true,
        itemId: 'AboutAppView',
        layout: 'vbox',
        items: [
            {
                xtype: 'label',
                cls: 'inners-title',
                html: 'عن التطبيق',
                itemId: 'viewLbl'
            },
            {
                xtype: 'panel',
                flex: 1,
                cls: 'services-header',
                height: '30%',
                items: [
                    {
                        xtype: 'panel',
                        cls: 'services-header-overlay',
                        height: '100%',
                        items: [
                            {
                                xtype: 'image',
                                cls: 'img-logo',
                                height: '100%',
                                src: 'resources/images/img-logo.png'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'panel',
                flex: 2.7,
                cls: 'inner-panel',
                scrollable: {
                    direction: 'vertical',
                    directionLock: true
                },
                items: [
                    {
                        xtype: 'label',
                        cls: 'about-text',
                        itemId: 'AboutMinstryTxt'
                    }
                ]
            }
        ]
    },

    initialize: function() {
        this.callParent();

        Ext.Localization.LoadLocalization();

        Ext.Localization.LocalizeView(this);
    }

});