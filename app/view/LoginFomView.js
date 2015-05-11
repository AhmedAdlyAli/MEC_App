/*
 * File: app/view/LoginFomView.js
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

Ext.define('MEC_App.view.LoginFomView', {
    extend: 'Ext.form.Panel',
    alias: 'widget.LoginFomView',

    requires: [
        'Ext.Panel',
        'Ext.Label',
        'Ext.Button',
        'Ext.form.FieldSet',
        'Ext.field.Password',
        'Ext.device.Notification'
    ],

    config: {
        cls: 'complaint-view',
        itemId: 'LoginFomView',
        layout: 'vbox',
        scrollable: false,
        items: [
            {
                xtype: 'panel',
                flex: 1,
                cls: 'print-office-header',
                items: [
                    {
                        xtype: 'panel',
                        cls: 'print-office-header-overlay',
                        height: '100%',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'panel',
                                flex: 2,
                                cls: 'sign-in-header-icon'
                            },
                            {
                                xtype: 'label',
                                flex: 1,
                                cls: 'print-office-header-title',
                                docked: 'bottom',
                                html: 'تسجيل الدخول',
                                itemId: 'lblTitle'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'panel',
                flex: 2.7,
                cls: 'login-form',
                items: [
                    {
                        xtype: 'button',
                        cls: 'btn-alt',
                        docked: 'bottom',
                        itemId: 'btnRegister',
                        text: 'مستخدم جديد'
                    },
                    {
                        xtype: 'button',
                        cls: 'btn-send',
                        docked: 'bottom',
                        id: 'btnSubmitLogin',
                        text: 'تسجيل الدخول'
                    },
                    {
                        xtype: 'fieldset',
                        centered: true,
                        itemId: 'fSet',
                        width: '100%',
                        items: [
                            {
                                xtype: 'textfield',
                                itemId: 'txtUserName',
                                label: 'اسم المستخدم',
                                labelWidth: '40%',
                                name: 'txtUserName',
                                value: 28881809077,
                                placeHolder: 'اسم المستخدم'
                            },
                            {
                                xtype: 'passwordfield',
                                itemId: 'txtPassword',
                                label: 'كلمة المرور',
                                labelWidth: '40%',
                                name: 'txtPassword',
                                value: 34567,
                                placeHolder: 'كلمة المرور'
                            },
                            {
                                xtype: 'label',
                                cls: 'login-links',
                                html: 'نسيت كلمة السر',
                                itemId: 'lblForgotPassword',
                                listeners: [
                                    {
                                        fn: function(component, eOpts) {



                                            // add tab function on text field
                                            var me = this;
                                            me.element.on('tap', function(){


                                                if(Ext.Global.LanguageFlag=='ar')
                                                window.open('https://services.mec.gov.qa/ara/start.swe?SWECmd=Login&SWECM=S&SRN=&SWEHo=services.mec.gov.qa','_system');
                                                else
                                                window.open('https://services.mec.gov.qa/enu/start.swe?SWECmd=Login&SWECM=S&SRN=&SWEHo=services.mec.gov.qa','_system');
                                            }, me);


                                        },
                                        event: 'initialize'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }

});