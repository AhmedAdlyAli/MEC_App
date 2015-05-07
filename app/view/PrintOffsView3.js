/*
 * File: app/view/PrintOffsView3.js
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

Ext.define('MEC_App.view.PrintOffsView3', {
    extend: 'Ext.Panel',
    alias: 'widget.PrintOffsView3',

    requires: [
        'Ext.Label',
        'Ext.Panel'
    ],

    config: {
        itemId: 'PrintOffsView3',
        layout: 'vbox',
        scrollable: false,
        items: [
            {
                xtype: 'label',
                cls: 'inners-title',
                html: 'طلب مستخرجات',
                itemId: 'lblTitle'
            },
            {
                xtype: 'panel',
                flex: 1,
                html: '<div style="-webkit-overflow-scrolling: touch;overflow-x:scroll;overflow-y: scroll; height:500px"> <iframe name="paymentframe"    class="web-frame" height="100%" width="100%"  ></iframe></div>',
                itemId: 'pnlIframe'
            }
        ]
    },

    initialize: function() {
        var view = this;
        var data = view.getData();

        Ext.Localization.LocalizeView(view);


        Ext.Function.defer(function(){
            // payment gateway redirection

            var form = Ext.create('Ext.form.Panel', {
                standardSubmit: true,
                url: 'http://eservicesstg.mec.gov.qa/QNB_PaymentGateway/CS_VPC_3Party_DO_mob.aspx',
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
                vpc_MerchTxnRef: data.recordID, //'Ahmed Adly Ali',
                vpc_OrderInfo: data.caseSerialNum + '_' + data.typeCode,//'Test',
                vpc_Amount: data.fees * 100,
                vpc_Locale : Ext.Global.LanguageFlag


            });

            var tr= 'vpc_OrderInfo:+' +  data.recordID + '+\n';
            tr+= 'vpc_OrderInfo' + data.caseSerialNum + '_' + data.typeCode + '\n';
            tr+= 'vpc_Amount:'  +  data.fees    + '\n';
            tr+= 'locale' + Ext.Global.LanguageFlag ;

            alert(tr);






            form.element.dom.target = 'paymentframe';
            form.submit(); //{target: 'paymentframe'}


        } ,	400,this);


        this.callParent();
    }

});