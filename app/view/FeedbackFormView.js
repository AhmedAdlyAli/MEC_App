/*
 * File: app/view/FeedbackFormView.js
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

Ext.define('MEC_App.view.FeedbackFormView', {
    extend: 'Ext.form.Panel',
    alias: 'widget.FeedbackFormView',

    requires: [
        'Ext.Label',
        'Ext.form.FieldSet',
        'Ext.field.Email',
        'Ext.field.Number',
        'Ext.field.TextArea',
        'Ext.Panel',
        'Ext.Img',
        'Ext.Button',
        'Ext.device.Camera',
        'Ext.device.Notification',
        'MEC_App.controller.DeviceController'
    ],

    config: {
        cls: 'complaint-view',
        itemId: 'FeedbackFormView',
        layout: 'vbox',
        enableSubmissionForm: false,
        items: [
            {
                xtype: 'label',
                cls: 'inners-title',
                html: 'مقترحات',
                itemId: 'lblTitle'
            },
            {
                xtype: 'fieldset',
                flex: 1,
                itemId: 'FeedbackForm',
                scrollable: {
                    direction: 'vertical',
                    directionLock: true
                },
                items: [
                    {
                        xtype: 'textfield',
                        itemId: 'txtFullName',
                        label: 'الاسم بالكامل',
                        labelWidth: '40%',
                        name: 'fullName',
                        required: true,
                        placeHolder: 'الاسم بالكامل'
                    },
                    {
                        xtype: 'emailfield',
                        itemId: 'txtEmail',
                        label: 'البريد الالكتروني',
                        labelWidth: '40%',
                        name: 'email',
                        placeHolder: 'البريد الالكتروني'
                    },
                    {
                        xtype: 'numberfield',
                        itemId: 'txtMobile',
                        component: {
                            type: 'tel'
                        },
                        label: 'رقم الهاتف',
                        labelWidth: '40%',
                        name: 'mobile',
                        required: true,
                        placeHolder: 'رقم الهاتف'
                    },
                    {
                        xtype: 'textareafield',
                        itemId: 'txtComment',
                        label: 'نص المقترح',
                        labelWidth: '40%',
                        name: 'suggestion',
                        required: true,
                        placeHolder: 'نص المقترح'
                    },
                    {
                        xtype: 'label',
                        html: 'ارفق صورة',
                        id: 'lblAttachImage1',
                        itemId: 'lblAttachImage1'
                    },
                    {
                        xtype: 'panel',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'image',
                                flex: 1,
                                height: 120,
                                id: 'img5',
                                itemId: 'img1',
                                src: 'resources/images/attach-default.png'
                            },
                            {
                                xtype: 'image',
                                flex: 1,
                                id: 'img6',
                                itemId: 'img2',
                                src: 'resources/images/attach-default.png'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'image',
                                flex: 1,
                                height: 120,
                                id: 'img7',
                                itemId: 'img3',
                                src: 'resources/images/attach-default.png'
                            },
                            {
                                xtype: 'image',
                                flex: 1,
                                height: 120,
                                id: 'img8',
                                itemId: 'img4',
                                width: 200,
                                src: 'resources/images/attach-default.png'
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        handler: function(button, e) {

                            var frm = button.up('FeedbackFormView');



                            //alert(frm.getValues().shopName);
                            var formData =frm.getValues(),
                                ereg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
                                testResult = ereg.test(formData.email),
                                err='';
                            console.log(formData);



                            if(formData.fullName===''){

                                err+=Ext.Localization.GetMessage('errFullName');
                            }

                            if(formData.email !=='' && !testResult){
                                err+=Ext.Localization.GetMessage('errMail');
                            }

                            if(formData.mobile === null){
                                err+=Ext.Localization.GetMessage('errMobile');
                            }

                            if(formData.suggestion===''){

                                err+=Ext.Localization.GetMessage('errSuggestion');
                            }



                            if(err.length>0){

                                Ext.device.Notification.show({
                                    title: Ext.Localization.GetMessage('Error'),
                                    buttons:[Ext.Localization.GetMessage('OK')],
                                    message: err
                                });
                            }else{




                                var requestData = {


                                    "fullName":formData.fullName,
                                    "email":formData.email,
                                    "mobile":formData.mobile,
                                    "comment": formData.comment

                                };



                                console.log(requestData);


                                var me = this;

                                var url =  Ext.Global.GetConfig('CMSWSUrlEmails') +'/SendComplaintsEmail';


                                Ext.AnimationHelper.ShowLoading();

                                Ext.Ajax.request({

                                    url : url,
                                    method : 'POST',
                                    jsonData :requestData,
                                    success : function (response) {

                                        Ext.AnimationHelper.HideLoading();


                                        Ext.device.Notification.show({
                                            title: Ext.Localization.GetMessage('Error'),
                                            buttons:[Ext.Localization.GetMessage('OK')],
                                            message: Ext.Localization.GetMessage('ComplaintsConfirmation'),
                                            callback: function(button) {

                                                //return user to home page

                                                Ext.Viewport.getActiveItem().reset();

                                            }
                                        });



                                    }


                                });


                            }


                        },
                        cls: 'btn-send',
                        id: 'btnSubmitComplaint1',
                        itemId: 'btnSubmitComplaint1',
                        text: 'إرسال'
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onImg1Tap',
                event: 'tap',
                delegate: '#img5'
            },
            {
                fn: 'onImg2Tap',
                event: 'tap',
                delegate: '#img6'
            },
            {
                fn: 'onImg3Tap',
                event: 'tap',
                delegate: '#img7'
            },
            {
                fn: 'onImg4Tap',
                event: 'tap',
                delegate: '#img8'
            }
        ]
    },

    onImg1Tap: function(image, e, eOpts) {
                //custom class MEC_App.controller.DeviceController
                Ext.DeviceController.CaptureImage(image);


    },

    onImg2Tap: function(image, e, eOpts) {

                //custom class MEC_App.controller.DeviceController
                Ext.DeviceController.CaptureImage(image);

    },

    onImg3Tap: function(image, e, eOpts) {

                //custom class MEC_App.controller.DeviceController
                Ext.DeviceController.CaptureImage(image);

    },

    onImg4Tap: function(image, e, eOpts) {

                //custom class MEC_App.controller.DeviceController
                Ext.DeviceController.CaptureImage(image);

    },

    initialize: function() {
        this.callParent();

        Ext.Localization.LoadLocalization();

        Ext.Localization.LocalizeView(this);

    }

});