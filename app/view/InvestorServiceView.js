/*
 * File: app/view/InvestorServiceView.js
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

Ext.define('MEC_App.view.InvestorServiceView', {
    extend: 'Ext.Panel',
    alias: 'widget.InvestorServiceView',

    requires: [
        'Ext.Label',
        'Ext.Panel',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        fullscreen: true,
        itemId: 'InvestorServiceView',
        layout: 'vbox',
        items: [
            {
                xtype: 'label',
                cls: 'service-title',
                docked: 'top',
                html: 'خدمات المستثمر',
                itemId: 'lblInvestor'
            },
            {
                xtype: 'panel',
                flex: 1,
                cls: 'inner-panel',
                height: 'auto',
                scrollable: {
                    direction: 'vertical',
                    directionLock: true
                },
                items: [
                    {
                        xtype: 'panel',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'list',
                                cls: 'CompanyList',
                                height: 391,
                                itemId: 'lstLinks1',
                                itemCls: 'item-link',
                                itemTpl: [
                                    '<div class=\'nav-item\' style=\'background:url(resources/images/{Icon})\'>{Name}</div>'
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onLstLinks1ItemTap',
                event: 'itemtap',
                delegate: '#lstLinks1'
            }
        ]
    },

    onLstLinks1ItemTap: function(dataview, index, target, record, e, eOpts) {
                    Ext.Global.RedirectToView(record.data);

    },

    initialize: function() {

        this.callParent();

        Ext.Localization.LocalizeView(this);

        var links = Ext.Localization.getLinks(this);

        var store = new Ext.data.Store({
            data : links
        });

        var lst = this.down('#lstLinks1');
        lst.setStore(store);
        lst.setScrollable(false);

    }

});