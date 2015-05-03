/*
 * File: app/view/AdminServicesView.js
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

Ext.define('MEC_App.view.AdminServicesView', {
    extend: 'Ext.Panel',
    alias: 'widget.AdminServicesView',

    requires: [
        'Ext.Label',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        cls: 'complaint-view',
        itemId: 'AdminServicesView',
        layout: 'fit',
        scrollable: false,
        items: [
            {
                xtype: 'label',
                cls: 'inners-title',
                docked: 'top',
                html: 'الخدمات الإدارية'
            },
            {
                xtype: 'list',
                cls: 'CompanyList',
                height: '100%',
                itemId: 'lstViewLinks',
                itemTpl: [
                    '<div class=\'CompanyListItem\'>{Name}</div>'
                ]
            }
        ],
        listeners: [
            {
                fn: 'onLstLinksItemTap',
                event: 'itemtap',
                delegate: '#lstViewLinks'
            }
        ]
    },

    onLstLinksItemTap: function(dataview, index, target, record, e, eOpts) {

                    Ext.Global.RedirectToView(record.data);



    },

    initialize: function() {

        var links = [{Name:'تجديد السجل التجاري',Url:'http://eservicesstg.mec.gov.qa/eservice_ara/start.swe?SWECmd=GotoView&SWEView=MEC+Renewal+General+Instructions+View+eService'},
                     {Name:'تجديد الرخصة التجارية',Url:'http://eservicesstg.mec.gov.qa/eservice_ara/start.swe?SWECmd=GotoView&SWEView=MEC+CP+Renew+General+Instructions+View+eService'},
                     {Name:'تغيير الإسم التجارى',Url:'http://eservicesstg.mec.gov.qa/eservice_ara/start.swe?SWECmd=GotoView&SWEView=MEC+Change+Services+General+Instructions+View+eService'},
                     {Name:'تغيير المدراء (المخولين بالتوقيع)',Url:'http://eservicesstg.mec.gov.qa/eservice_ara/start.swe?SWECmd=GotoView&SWEView=MEC+Change+Services+General+Instructions+View+eService'},
                     {Name:'محو فرع',Url:'http://eservicesstg.mec.gov.qa/eservice_ara/start.swe?SWECmd=GotoView&SWEView=MEC+Delete+CR+General+Instructions+View+eService'},
                     {Name:'محو سجل رئيسي',Url:'http://eservicesstg.mec.gov.qa/eservice_ara/start.swe?SWECmd=GotoView&SWEView=MEC+Delete+CR+General+Instructions+View+eService'}

                    ];

        var store = new Ext.data.Store({
                            data : links
                        });

                var lst = this.down('#lstViewLinks');
                lst.setStore(store);





        this.callParent();
    }

});