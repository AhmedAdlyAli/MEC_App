/*
 * File: app/view/GoodsPricesView.js
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

Ext.define('MEC_App.view.GoodsPricesView', {
    extend: 'Ext.Panel',
    alias: 'widget.GoodsPricesView',

    requires: [
        'Ext.Label',
        'Ext.tab.Panel',
        'Ext.tab.Bar',
        'Ext.dataview.List',
        'Ext.XTemplate',
        'Ext.plugin.ListPaging'
    ],

    config: {
        itemId: 'GoodsPricesView',
        layout: 'fit',
        cls: [
            'complaint-view',
            'rtl'
        ],
        items: [
            {
                xtype: 'label',
                cls: 'inners-title',
                docked: 'top',
                html: 'أسعار السلع الاستهلاكية',
                itemId: 'lblTitle'
            },
            {
                xtype: 'tabpanel',
                cls: [
                    'rtl',
                    'tap-panel'
                ],
                itemId: 'GoodsPricesList',
                tabBar: {
                    docked: 'top',
                    layout: {
                        type: 'hbox',
                        pack: 'center'
                    }
                },
                items: [
                    {
                        xtype: 'container',
                        title: 'المحلات',
                        itemId: 'ShopsContainer',
                        items: [
                            {
                                xtype: 'list',
                                cls: 'CompanyList',
                                height: '100%',
                                itemId: 'lstShops',
                                itemCls: 'item-shop',
                                itemTpl: [
                                    '',
                                    '<div class=\'tpl-shop1-1\'>{ShopName}</div>    ',
                                    '<div class=\'tpl-shop1-2\'>{ShopAddress}</div>    ',
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
                        title: 'المنتجات',
                        itemId: 'GoodsContainer',
                        items: [
                            {
                                xtype: 'list',
                                cls: 'CompanyList',
                                height: '100%',
                                itemId: 'lstProducts',
                                itemCls: 'item-product',
                                itemTpl: [
                                    '',
                                    '    <div class=\'tpl-product-1\'>{ProductName}</div>    ',
                                    '    <div class=\'tpl-product-2\'>{ProductType}</div>    ',
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

        Ext.Localization.LocalizeView(this);
    }

});