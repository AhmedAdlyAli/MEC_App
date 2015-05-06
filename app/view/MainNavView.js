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
        'Ext.carousel.Carousel',
        'Ext.Label',
        'Ext.Button',
        'Ext.Menu',
        'MEC_App.controller.Localization',
        'Ext.data.proxy.JsonP'
    ],

    config: {
        cls: 'home-wrapper',
        fullscreen: true,
        itemId: 'MainNavView',
        defaultBackButtonText: ' عودة',
        items: [
            {
                xtype: 'panel',
                title: '<img src="resources/images/toplogo.png" />',
                id: 'pnlMain',
                itemId: 'pnlMain',
                layout: 'vbox',
                items: [
                    {
                        xtype: 'carousel',
                        flex: 1,
                        cls: 'home-carousel',
                        itemId: 'NewsCarousel',
                        indicator: false,
                        items: [
                            {
                                xtype: 'panel',
                                cls: 'home-header',
                                html: '<div class="header-text-bg"><b>اخبار عامّة اخبار عامّة اخبار عامّة</b><br />اخبار عامّة اخبار عامّة  </div>',
                                id: 'pnlNews',
                                itemId: 'pnlNews'
                            },
                            {
                                xtype: 'panel',
                                cls: 'home-header2',
                                html: '<div class="header-text-bg"><b>اخبار عامّة اخبار عامّة اخبار عامّة</b><br />اخبار عامّة اخبار عامّة  </div>',
                                id: 'pnlNews1',
                                itemId: 'pnlNews1'
                            },
                            {
                                xtype: 'panel',
                                cls: 'home-header3',
                                html: '<div class="header-text-bg"><b>اخبار عامّة اخبار عامّة اخبار عامّة</b><br />اخبار عامّة اخبار عامّة  </div>',
                                id: 'pnlNews2',
                                itemId: 'pnlNews2'
                            }
                        ],
                        listeners: [
                            {
                                fn: function(component, eOpts) {
                                    var carousel = this;

                                    setInterval(function(){
                                        carousel.next();
                                    },3000);
                                },
                                event: 'initialize'
                            }
                        ]
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
                                        xtype: 'panel',
                                        flex: 1,
                                        cls: 'btn-services',
                                        layout: 'vbox',
                                        items: [
                                            {
                                                xtype: 'panel',
                                                flex: 2,
                                                cls: 'services'
                                            },
                                            {
                                                xtype: 'label',
                                                flex: 1,
                                                cls: 'home-icon-text',
                                                html: 'الخدمات العامة',
                                                id: 'homeServices',
                                                itemId: 'homeServices'
                                            },
                                            {
                                                xtype: 'button',
                                                bottom: 0,
                                                centered: true,
                                                itemId: 'homeServices1',
                                                left: 0,
                                                right: 0,
                                                top: 0,
                                                text: ''
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'panel',
                                        flex: 1,
                                        cls: 'btn-news',
                                        layout: 'vbox',
                                        items: [
                                            {
                                                xtype: 'panel',
                                                flex: 2,
                                                cls: 'media'
                                            },
                                            {
                                                xtype: 'label',
                                                flex: 1,
                                                cls: 'home-icon-text',
                                                html: 'المركز الاعلامي',
                                                itemId: 'btnMediaCenter'
                                            },
                                            {
                                                xtype: 'button',
                                                bottom: 0,
                                                centered: true,
                                                itemId: 'btnMediaCenter1',
                                                left: 0,
                                                right: 0,
                                                top: 0,
                                                text: ''
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'panel',
                                flex: 1,
                                layout: 'hbox',
                                items: [
                                    {
                                        xtype: 'panel',
                                        flex: 1,
                                        cls: 'btn-reports',
                                        layout: 'vbox',
                                        items: [
                                            {
                                                xtype: 'panel',
                                                flex: 2,
                                                cls: 'inquiries'
                                            },
                                            {
                                                xtype: 'label',
                                                flex: 1,
                                                cls: 'home-icon-text',
                                                html: 'الاستعلامات والاصدارات ',
                                                itemId: 'homeInquire'
                                            },
                                            {
                                                xtype: 'button',
                                                bottom: 0,
                                                centered: true,
                                                itemId: 'homeInquire1',
                                                left: 0,
                                                right: 0,
                                                top: 0,
                                                text: ''
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'panel',
                                        flex: 1,
                                        cls: 'btn-inquire',
                                        itemId: 'mypanel18',
                                        layout: 'vbox',
                                        items: [
                                            {
                                                xtype: 'panel',
                                                flex: 2,
                                                cls: 'reports'
                                            },
                                            {
                                                xtype: 'label',
                                                flex: 1,
                                                cls: 'home-icon-text',
                                                html: 'المؤشرات والتقارير',
                                                itemId: 'homeReports'
                                            },
                                            {
                                                xtype: 'button',
                                                bottom: 0,
                                                centered: true,
                                                itemId: 'homeReports1',
                                                left: 0,
                                                right: 0,
                                                top: 0,
                                                text: ''
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'panel',
                                flex: 1,
                                layout: 'hbox',
                                items: [
                                    {
                                        xtype: 'panel',
                                        flex: 1,
                                        cls: 'btn-projects',
                                        itemId: 'homeProjects',
                                        layout: 'vbox',
                                        items: [
                                            {
                                                xtype: 'panel',
                                                flex: 2,
                                                cls: 'projects'
                                            },
                                            {
                                                xtype: 'label',
                                                flex: 1,
                                                cls: 'home-icon-text',
                                                html: 'المبادرات والمشاريع',
                                                itemId: 'btnProjects'
                                            },
                                            {
                                                xtype: 'button',
                                                bottom: 0,
                                                centered: true,
                                                itemId: 'btnProjects1',
                                                left: 0,
                                                right: 0,
                                                top: 0,
                                                text: ''
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'panel',
                                        flex: 1,
                                        cls: 'btn-contact',
                                        itemId: 'homeeContact',
                                        layout: 'vbox',
                                        items: [
                                            {
                                                xtype: 'panel',
                                                flex: 2,
                                                cls: 'contact'
                                            },
                                            {
                                                xtype: 'label',
                                                flex: 1,
                                                cls: 'home-icon-text',
                                                html: 'التواصل',
                                                itemId: 'homeContact'
                                            },
                                            {
                                                xtype: 'button',
                                                bottom: 0,
                                                centered: true,
                                                itemId: 'homeContact1',
                                                left: 0,
                                                right: 0,
                                                top: 0,
                                                text: ''
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                listeners: [
                    {
                        fn: function(element, eOpts) {
                            Ext.Viewport.getActiveItem().getNavigationBar().down('#btnNotofication').show();

                        },
                        event: 'painted'
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onNewsCarouselActiveItemChange',
                event: 'activeitemchange',
                delegate: '#NewsCarousel'
            },
            {
                fn: 'onMainNavPush',
                event: 'push'
            },
            {
                fn: 'onMainNavViewActiveItemChange',
                event: 'activeitemchange'
            }
        ]
    },

    onNewsCarouselActiveItemChange: function(container, value, oldValue, eOpts) {
        if(container.activeIndex == container.items.length-1) {
            setTimeout(function(){
                container.setActiveItem(0);
            },3501);
        }
    },

    onMainNavPush: function(navigationview, view, eOpts) {
        //console.log(view);

        Ext.Viewport.getActiveItem().getNavigationBar().down('#btnNotofication').hide();

    },

    onMainNavViewActiveItemChange: function(container, value, oldValue, eOpts) {

        if(value.getId() == 'pnlMain' && oldValue.getId() == 'SettingsView') {

            Ext.Localization.LoadLocalization();
            Ext.Localization.LocalizeView(container);
            Ext.Localization.LocalizeView(Ext.Viewport.getMenus().right);

        }

    },

    initialize: function() {
        this.callParent();


        // load Localization
        Ext.Localization.LoadLocalization();



        //Localize myself
        Ext.Localization.LocalizeView(this);








        //Create Menu
        var theMenu = Ext.create('MEC_App.view.SideMenu');
        Ext.Viewport.setMenu(theMenu,{
            side: 'right',
            reveal: false,
            cover: false
        });









        // Add menu button
        var navBar = this.getNavigationBar();
        navBar.add({
            xtype:'button',
            iconCls: 'list',
            align:'right',
            handler: function(){
                Ext.Viewport.toggleMenu('right');
            }
        });


        // Add Notification Icon
        var me = this;
        navBar.add({
            xtype:'button',
            cls: 'notify-icon',
            align:'left',
            itemId:'btnNotofication',
            handler: function(){


                Ext.Global.RedirectLoggedUser('NotificationView');


            }
        });



        //Localization


        //Ext.Viewport.getActiveItem().getNavigationBar().titleComponent.setTitle(Ext.Global.GetViewTitle('Home'));

        //this.down('#homeServices').setHtml(Ext.Global.GetViewTitle('PublicServices'));
        //this.down('#btnMediaCenter').setHtml(Ext.Global.GetViewTitle('MediaCenter'));
        //this.down('#homeInquire').setHtml(Ext.Global.GetViewTitle('Inquiries'));
        //this.down('#btnProjects').setHtml(Ext.Global.GetViewTitle('Projects'));
        //this.down('#homeReports').setHtml(Ext.Global.GetViewTitle('Reports'));
        //this.down('#homeContact').setHtml(Ext.Global.GetViewTitle('ContactUs'));
        //this.down('#pnlNews').setHtml(Ext.Global.GetGenericContent('HomeNews'));


        Ext.Viewport.bodyElement.on('swipe', function (event, node, options){

            //if (node.closest('.x-carousel-item')) {
                //event.stopPropagation();
            //}

            //else {
                if (event.direction == 'left' && theMenu.isHidden()) {
                    Ext.Viewport.showMenu('right');
                } else if (event.direction == 'right') {
                    if (theMenu.isHidden()) {
                        Ext.Viewport.getActiveItem().getNavigationBar().getBackButton().fireAction('tap');
                    }

                }
            //}

        });

    }

});