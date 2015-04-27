/*
 * File: app/view/ConsumerIndicatorsListing.js
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

Ext.define('MEC_App.view.ConsumerIndicatorsListing', {
    extend: 'Ext.Panel',
    alias: 'widget.ConsumerIndicatorsListing',

    requires: [
        'Ext.Label',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        itemId: 'ConsumerIndicatorsListing',
        layout: 'fit',
        scrollable: false,
        cls: [
            'complaint-view',
            'rtl'
        ],
        items: [
            {
                xtype: 'label',
                cls: 'inners-title',
                docked: 'top',
                html: 'مؤشرات استهلاكية'
            },
            {
                xtype: 'list',
                height: '100%',
                itemId: 'lstItems',
                itemCls: 'item-link',
                itemTpl: [
                    '<div>{Name}</div>'
                ]
            }
        ],
        listeners: [
            {
                fn: 'onLstItemsItemTap',
                event: 'itemtap',
                delegate: '#lstItems'
            }
        ]
    },

    onLstItemsItemTap: function(dataview, index, target, record, e, eOpts) {

        if (record.data.Url.indexOf('http')>-1){
            window.open(record.data.Url,'_blank');
        }else{


            Ext.Viewport.getActiveItem().push({
                xtype: record.data.Url,
                title: Ext.Global.GetFixedTitle()
            });
        }
    },

    initialize: function() {
        this.callParent();


        var links = [{Name:'النشرة اليومية',Url:'DailyReportView'},
                     {Name:'اين تتسوق',Url:'WhereToShopView'},
                     {Name:'التقرير الاسبوعي للخضر والفاكهة',Url:'http://www.google.com'}
                    ];

        var store = new Ext.data.Store({
            data : links
        });

        var lst = this.down('#lstItems');
        lst.setStore(store);












    }

});