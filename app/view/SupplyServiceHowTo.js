/*
 * File: app/view/SupplyServiceHowTo.js
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

Ext.define('MEC_App.view.SupplyServiceHowTo', {
    extend: 'Ext.Panel',
    alias: 'widget.SupplyServiceHowTo',

    requires: [
        'Ext.Label',
        'Ext.Panel'
    ],

    config: {
        fullscreen: true,
        itemId: 'SupplyServiceHowTo',
        layout: 'vbox',
        cls: [
            'complaint-view',
            'rtl'
        ],
        items: [
            {
                xtype: 'label',
                cls: 'inners-title',
                docked: 'top',
                html: 'كيفية الحصول على خدمات التموين',
                id: 'lblTitle',
                itemId: 'lblTitle'
            },
            {
                xtype: 'panel',
                flex: 1,
                cls: 'text-panel',
                height: 'auto',
                scrollable: {
                    direction: 'vertical',
                    directionLock: true
                },
                items: [
                    {
                        xtype: 'label',
                        html: '<h1>للحصول على السلع التموينية او الاعلاف يرجى ملى النموذج التالي وارساله من خلال البريد الالكتروني: <a href="mailto:tamween@mec.gov.qa">tamween@mec.gov.qa</a></h1>'
                    },
                    {
                        xtype: 'label',
                        cls: 'inner-title',
                        html: 'مع ضرورة ارفاق البيانات التالية',
                        itemId: 'SuppliesCardTitle2'
                    },
                    {
                        xtype: 'label',
                        html: 'صورة من البطاقة الشخصية للزوج والزوجة وأفراد الاسرة. <br/>صورة من شهادة الميلاد للأبناء موضح بها الارقام الشخصية. '
                    },
                    {
                        xtype: 'label',
                        cls: 'inner-title',
                        html: 'لطلب الاعلاف',
                        itemId: 'SuppliesCardTitle1'
                    },
                    {
                        xtype: 'label',
                        html: 'صورة من البطاقة الشخصية<br/>شهادة حيازة مواشي صادرة من وزارة البيئة - ادارة الثروة الحيوانية'
                    },
                    {
                        xtype: 'label',
                        cls: 'inner-title',
                        html: 'الاستثناءات',
                        itemId: 'SuppliesCardTitle'
                    },
                    {
                        xtype: 'label',
                        cls: 'text-container',
                        html: '<ol><li>في حالة عدم وجود ابناء:<ul><li> صورة من عقد الزواج</li><li> صورة من البطاقة الشخصية للزوج و الزوجة</li></ul></li><li>في حالة وفاة رب الاسرة :<ul><li>صورة من شهادة الوفاة</li><li>صورة من البطاقة الشخصية او شهادة الميلاد للأبناء</li></ul></li><li>في حالة الطلاق<ul><li>صورة من شهادة الطلاق</li><li>صورة من البطاقة الشخصية</li><li>صورة من شهادة الميلاد للأبناء</li><li>صورة من حضانة على الابناء</li></ul></li></ol>',
                        itemId: 'SuppliesCardDesc'
                    },
                    {
                        xtype: 'label',
                        cls: 'inner-title',
                        html: 'آلية صرف المواد التموينية',
                        itemId: 'FodderCardTitle'
                    },
                    {
                        xtype: 'label',
                        cls: 'text-container',
                        html: 'يصرف كيس مادةا لارز بالاضافة كيس سكر لكل ٣ افرادا لاسرة<br/>يصرف صندوق زيت وحليب لكل ٤ افراد من الاسرة<br/><br/>يتم اضافة عدد )٢( خدم لكل آسرة',
                        itemId: 'FodderCardDesc'
                    }
                ]
            }
        ]
    },

    initialize: function() {
        this.callParent();

        Ext.Localization.LoadLocalization();

        Ext.Localization.LocalizeView(this);
    }

});