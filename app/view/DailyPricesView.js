/*
 * File: app/view/DailyPricesView.js
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

Ext.define('MEC_App.view.DailyPricesView', {
    extend: 'Ext.Panel',
    alias: 'widget.DailyPricesView',

    requires: [
        'Ext.Label',
        'Ext.tab.Panel',
        'Ext.field.Search',
        'Ext.Panel',
        'Ext.dataview.List',
        'Ext.XTemplate',
        'Ext.plugin.ListPaging'
    ],

    config: {
        cls: 'complaint-view',
        itemId: 'DailyPricesView',
        layout: 'fit',
        items: [
            {
                xtype: 'label',
                cls: 'inners-title',
                docked: 'top',
                html: 'الاسعار اليومية',
                itemId: 'lblTitle'
            },
            {
                xtype: 'tabpanel',
                cls: [
                    'rtl',
                    'tap-panel'
                ],
                itemId: 'PricesGrid',
                items: [
                    {
                        xtype: 'container',
                        title: 'الخضروات',
                        itemId: 'VegentsblesContainer',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'searchfield',
                                docked: 'top',
                                itemId: 'mysearchfield',
                                margin: 10,
                                placeHolder: 'بحث'
                            },
                            {
                                xtype: 'panel',
                                cls: 'grid-header',
                                docked: 'top',
                                layout: 'hbox',
                                items: [
                                    {
                                        xtype: 'label',
                                        flex: 3,
                                        cls: 'header-cell1',
                                        html: 'اسم المنتج',
                                        itemId: 'ProductName1'
                                    },
                                    {
                                        xtype: 'label',
                                        flex: 2,
                                        cls: 'header-cell2',
                                        html: 'سعر الكيلو (ر.ق)',
                                        itemId: 'ProductPrice1'
                                    }
                                ]
                            },
                            {
                                xtype: 'list',
                                flex: 1,
                                height: '100%',
                                itemId: 'lstPrices',
                                deferEmptyText: false,
                                emptyText: 'لايوجد بيانات',
                                itemCls: 'grid-row',
                                itemTpl: [
                                    '',
                                    '    <div class=\'row-cell1\'>{ProductName}</div>    ',
                                    '    <div class=\'row-cell2\'>{Price}</div>    ',
                                    ''
                                ],
                                scrollToTopOnRefresh: false,
                                plugins: [
                                    {
                                        autoPaging: true,
                                        type: 'listpaging'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        title: 'الفاكهة',
                        itemId: 'FruitsContainer',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'searchfield',
                                docked: 'top',
                                itemId: 'mysearchfield1',
                                margin: 10,
                                placeHolder: 'بحث'
                            },
                            {
                                xtype: 'panel',
                                cls: 'grid-header',
                                docked: 'top',
                                layout: 'hbox',
                                items: [
                                    {
                                        xtype: 'label',
                                        flex: 3,
                                        cls: 'header-cell1',
                                        html: 'اسم المنتج',
                                        itemId: 'ProductName2'
                                    },
                                    {
                                        xtype: 'label',
                                        flex: 2,
                                        cls: 'header-cell2',
                                        html: 'سعر الكيلو (ر.ق)',
                                        itemId: 'ProductPrice2'
                                    }
                                ]
                            },
                            {
                                xtype: 'list',
                                flex: 1,
                                height: '100%',
                                itemId: 'lstPrices1',
                                deferEmptyText: false,
                                emptyText: 'لايوجد بيانات',
                                itemCls: 'grid-row',
                                itemTpl: [
                                    '',
                                    '    <div class=\'row-cell1\'>{ProductName}</div>    ',
                                    '    <div class=\'row-cell2\'>{Price}</div>    ',
                                    ''
                                ],
                                scrollToTopOnRefresh: false,
                                plugins: [
                                    {
                                        autoPaging: true,
                                        type: 'listpaging'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        title: 'الأسماك',
                        itemId: 'FishContainer',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'searchfield',
                                docked: 'top',
                                itemId: 'mysearchfield2',
                                margin: 10,
                                placeHolder: 'بحث'
                            },
                            {
                                xtype: 'panel',
                                cls: 'grid-header',
                                docked: 'top',
                                layout: 'hbox',
                                items: [
                                    {
                                        xtype: 'label',
                                        flex: 3,
                                        cls: 'header-cell1',
                                        html: 'اسم المنتج',
                                        itemId: 'ProductName3'
                                    },
                                    {
                                        xtype: 'label',
                                        flex: 2,
                                        cls: 'header-cell2',
                                        html: 'سعر الكيلو (ر.ق)',
                                        itemId: 'ProductPrice3'
                                    }
                                ]
                            },
                            {
                                xtype: 'list',
                                flex: 1,
                                height: '100%',
                                itemId: 'lstPrices2',
                                deferEmptyText: false,
                                emptyText: 'لايوجد بيانات',
                                itemCls: 'grid-row',
                                itemTpl: [
                                    '',
                                    '    <div class=\'row-cell1\'>{ProductName}</div>    ',
                                    '    <div class=\'row-cell2\'>{Price}</div>    ',
                                    ''
                                ],
                                scrollToTopOnRefresh: false,
                                plugins: [
                                    {
                                        autoPaging: true,
                                        type: 'listpaging'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'label',
                cls: 'latest-update',
                docked: 'bottom',
                html: 'اخر تحديث',
                itemId: 'lblLastUpdate'
            }
        ]
    },

    initialize: function() {
        this.callParent();

        Ext.Localization.LoadLocalization();

        Ext.Localization.LocalizeView(this);
    }

});