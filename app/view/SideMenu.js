/*
 * File: app/view/SideMenu.js
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

Ext.define('MEC_App.view.SideMenu', {
    extend: 'Ext.Menu',
    alias: 'widget.SideMenu',

    requires: [
        'Ext.Panel',
        'Ext.Img',
        'Ext.Button'
    ],

    config: {
        height: '100%',
        width: '85%',
        items: [
            {
                xtype: 'panel',
                height: '100%',
                layout: 'vbox',
                items: [
                    {
                        xtype: 'panel',
                        flex: 1,
                        cls: 'MenuTop',
                        items: [
                            {
                                xtype: 'image',
                                height: 150,
                                itemId: 'imgHome',
                                src: 'resources/images/logo.png'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        flex: 3,
                        cls: 'MenuBtnList',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'button',
                                flex: 1,
                                itemId: 'btnHome',
                                iconAlign: 'right',
                                iconCls: 'm-icon1',
                                text: 'الرئيسية'
                            },
                            {
                                xtype: 'button',
                                flex: 1,
                                itemId: 'btnServices',
                                iconAlign: 'right',
                                iconCls: 'm-icon2',
                                text: 'الخدمات العامة'
                            },
                            {
                                xtype: 'button',
                                flex: 1,
                                cls: 'menuBtn',
                                itemId: 'btnMedai',
                                iconAlign: 'right',
                                iconCls: 'm-icon3',
                                text: 'المركز الاعلامي'
                            },
                            {
                                xtype: 'button',
                                flex: 1,
                                cls: 'menuBtn',
                                itemId: 'btnInquiry',
                                iconAlign: 'right',
                                iconCls: 'm-icon4',
                                text: 'الاستعلامات والاصدارات '
                            },
                            {
                                xtype: 'button',
                                flex: 1,
                                cls: 'menuBtn',
                                itemId: 'btnContact',
                                iconAlign: 'right',
                                iconCls: 'm-icon5',
                                text: 'التواصل'
                            },
                            {
                                xtype: 'button',
                                flex: 1,
                                cls: 'menuBtn',
                                itemId: 'btnProjects',
                                iconAlign: 'right',
                                iconCls: 'm-icon6',
                                text: 'المبادرات والمشاريع'
                            },
                            {
                                xtype: 'button',
                                flex: 1,
                                cls: 'menuBtn',
                                itemId: 'btnReports',
                                iconAlign: 'right',
                                iconCls: 'm-icon7',
                                text: 'المؤشرات والتقارير'
                            },
                            {
                                xtype: 'button',
                                flex: 1,
                                cls: 'menuBtn',
                                itemId: 'btnSettings',
                                iconAlign: 'right',
                                iconCls: 'm-icon8',
                                text: 'الاعدادات'
                            },
                            {
                                xtype: 'button',
                                flex: 1,
                                cls: 'menuBtn',
                                itemId: 'btnLogin',
                                iconAlign: 'right',
                                iconCls: 'm-icon9',
                                text: 'تسجيل الدخول'
                            }
                        ]
                    }
                ]
            }
        ]
    }

});