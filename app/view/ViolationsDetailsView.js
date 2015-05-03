/*
 * File: app/view/ViolationsDetailsView.js
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

Ext.define('MEC_App.view.ViolationsDetailsView', {
    extend: 'Ext.Panel',
    alias: 'widget.ViolationsDetailsView',

    requires: [
        'Ext.Panel',
        'Ext.Img',
        'Ext.Label'
    ],

    config: {
        itemId: 'ViolationsDetailsView',
        layout: 'vbox',
        items: [
            {
                xtype: 'panel',
                flex: 1,
                cls: 'newsDetails',
                items: [
                    {
                        xtype: 'image',
                        cls: 'img',
                        height: 201,
                        itemId: 'imgDetails'
                    },
                    {
                        xtype: 'panel',
                        items: [
                            {
                                xtype: 'label',
                                itemId: 'lblCompanyName'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        items: [
                            {
                                xtype: 'label',
                                itemId: 'lblViolation'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        items: [
                            {
                                xtype: 'label',
                                itemId: 'lblPunishment'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        items: [
                            {
                                xtype: 'label',
                                itemId: 'lblDecisionNumber'
                            }
                        ]
                    }
                ]
            }
        ]
    }

});