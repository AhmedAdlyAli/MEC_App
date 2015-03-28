/*
 * File: app/view/MainNavView.js
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

Ext.define('MEC_App.view.MainNavView', {
    extend: 'Ext.navigation.View',
    alias: 'widget.MainNavView',

    requires: [
        'Ext.Panel',
        'Ext.Button',
        'Ext.Menu'
    ],

    config: {
        cls: 'home-wrapper',
        fullscreen: true,
        scrollable: false,
        defaultBackButtonText: 'رجوع',
        items: [
            {
                xtype: 'panel',
                title: 'الريئيسية',
                layout: 'vbox',
                items: [
                    {
                        xtype: 'panel',
                        flex: 1,
                        cls: 'home-header',
                        html: 'اخبار عامّة اخبار عامّة اخبار عامّة<br />اخبار عامّة اخبار عامّة  '
                    },
                    {
                        xtype: 'panel',
                        flex: 2,
                        cls: 'home-btns',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'panel',
                                flex: 1,
                                layout: 'hbox',
                                items: [
                                    {
                                        xtype: 'button',
                                        flex: 1,
                                        cls: 'btn-services',
                                        itemId: 'homeServices',
                                        iconAlign: 'top',
                                        iconCls: 'services',
                                        text: 'الخدمات العامة'
                                    },
                                    {
                                        xtype: 'button',
                                        flex: 1,
                                        cls: 'btn-news',
                                        itemId: 'homeNews',
                                        iconAlign: 'top',
                                        iconCls: 'news',
                                        text: 'المركز الاعلامي'
                                    }
                                ]
                            },
                            {
                                xtype: 'panel',
                                flex: 1,
                                layout: 'hbox',
                                items: [
                                    {
                                        xtype: 'button',
                                        flex: 1,
                                        cls: 'btn-general-info',
                                        itemId: 'homeInquire',
                                        iconAlign: 'top',
                                        iconCls: 'general-info',
                                        text: 'الاستعلامات و الاصدارات'
                                    },
                                    {
                                        xtype: 'button',
                                        flex: 1,
                                        cls: 'btn-inquire',
                                        itemId: 'homeReports',
                                        iconAlign: 'top',
                                        iconCls: 'inquire',
                                        text: 'المؤشرات و التقارير'
                                    }
                                ]
                            },
                            {
                                xtype: 'panel',
                                flex: 1,
                                layout: 'hbox',
                                items: [
                                    {
                                        xtype: 'button',
                                        flex: 1,
                                        cls: 'btn-projects',
                                        itemId: 'homeProjects',
                                        iconAlign: 'top',
                                        iconCls: 'contact',
                                        text: 'المبادرات و المشاريع'
                                    },
                                    {
                                        xtype: 'button',
                                        flex: 1,
                                        cls: 'btn-contact',
                                        itemId: 'homeeContact',
                                        iconAlign: 'top',
                                        iconCls: 'contact',
                                        text: 'التواصل'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },

    initialize: function() {
        this.callParent();

        var me = this;


        Ext.ComponentQuery.query('MainNavView')[0].getNavigationBar().add({
            xtype:'button',
            iconCls: 'list',
            align:'right',
            handler: function(){



                //Ext.Viewport.setActiveItem({xtype:'SideMenuView'});


                var theMenu = me.createMenu();




               Ext.Viewport.setMenu(theMenu,{
                   side: 'left',
                  reveal: true
               });


        }


        });


    },

    createMenu: function() {
        var menu = Ext.create('Ext.Menu', {
                    width: 250,
                    scrollable: 'vertical',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Option 1',
                        },
                        {
                            xtype: 'button',
                            text: 'Option 2',
                        }
                    ]
                });
                return menu;



    }

});