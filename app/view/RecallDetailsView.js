/*
 * File: app/view/RecallDetailsView.js
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

Ext.define('MEC_App.view.RecallDetailsView', {
    extend: 'Ext.Panel',
    alias: 'widget.RecallDetailsView',

    requires: [
        'Ext.Label',
        'Ext.Img',
        'Ext.Panel'
    ],

    config: {
        cls: 'rtl',
        itemId: 'RecallDetailsView',
        layout: 'vbox',
        scrollable: 'vertical',
        items: [
            {
                xtype: 'label',
                cls: 'inners-title',
                html: '',
                itemId: 'lblTitle'
            },
            {
                xtype: 'image',
                cls: 'img',
                height: 201,
                itemId: 'imgDetails'
            },
            {
                xtype: 'panel',
                cls: 'text-panel',
                items: [
                    {
                        xtype: 'label',
                        cls: 'recall-label-1',
                        html: 'الخلل'
                    },
                    {
                        xtype: 'label',
                        cls: 'text-container2',
                        itemId: 'lblDetails'
                    }
                ]
            },
            {
                xtype: 'panel',
                cls: 'text-panel',
                items: [
                    {
                        xtype: 'label',
                        cls: 'recall-label-2',
                        html: 'الاجراء'
                    },
                    {
                        xtype: 'label',
                        cls: 'text-container2',
                        itemId: 'lblProdcedure'
                    },
                    {
                        xtype: 'panel',
                        cls: 'text-panel',
                        items: [
                            {
                                xtype: 'label',
                                cls: 'recall-label-3',
                                html: 'التواصل'
                            },
                            {
                                xtype: 'label',
                                cls: 'text-container2',
                                itemId: 'lblContact'
                            }
                        ]
                    }
                ]
            }
        ]
    }

});