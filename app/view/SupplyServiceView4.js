/*
 * File: app/view/SupplyServiceView4.js
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

Ext.define('MEC_App.view.SupplyServiceView4', {
    extend: 'Ext.Panel',
    alias: 'widget.SupplyServiceView4',

    requires: [
        'Ext.Label',
        'Ext.Panel'
    ],

    config: {
        itemId: 'SupplyServiceView4',
        scrollable: false,
        cls: [
            'complaint-view',
            'rtl'
        ],
        items: [
            {
                xtype: 'label',
                cls: 'inners-title',
                html: 'نموذج طلب تموين',
                itemId: 'lblTitle'
            },
            {
                xtype: 'panel',
                height: '100%',
                items: [
                    {
                        xtype: 'panel',
                        height: '100%',
                        html: '<div style="-webkit-overflow-scrolling: touch;overflow-x:scroll;overflow-y: scroll; height:500px"> <iframe name="paymentframe"    class="web-frame" height="100%" width="100%"  ></iframe></div>',
                        itemId: 'pnlIframe'
                    }
                ]
            }
        ]
    },

    initialize: function() {

        var view = this;

        //localization
        Ext.Localization.LocalizeView(view);


        var data = view.getData();

        console.log(data);

        Ext.Function.defer(function(){
            // payment gateway redirection

            var form = Ext.create('Ext.form.Panel', {
                standardSubmit: true,
                url: Ext.Global.GetConfig('SupplyServicePaymentUrl'),
                method: 'POST',
                items: [
                    {xtype: 'textfield',name: 'vpc_MerchTxnRef'},
                    {xtype: 'textfield',name: 'vpc_OrderInfo'},
                    {xtype: 'textfield',name: 'vpc_Amount'},
                    {xtype: 'textfield',name: 'vpc_Locale'}
                ],
            });

            //alert(data.fees);

            form.setValues({
                vpc_MerchTxnRef: data.AllocationID, //'Ahmed Adly Ali',
                vpc_OrderInfo: data.AllocationID + '_' + data.DealerID,//'Test',
                vpc_Amount: data.TotalPrice+'00',
                vpc_Locale : Ext.Global.LanguageFlag

            });

            form.element.dom.target = 'paymentframe';
            form.submit(); //{target: 'paymentframe'}


        } ,	400,this);


        this.callParent();
    }

});