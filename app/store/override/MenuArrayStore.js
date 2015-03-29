Ext.define('MEC_App.store.override.MenuArrayStore', {
    override: 'MEC_App.store.MenuArrayStore',
    config: {
        data: [
            {
                ItemName: 'الرئيسية',
                ItemView: 'MainNavView',
                ItemIconURL: 'resources/images/m-home.png'
            },
            {
                ItemName: 'الخدمات العامة',
                ItemView: 'PublicServiceView',
                ItemIconURL: 'resources/images/m-services.png'
            },
            {
                ItemName: 'المركز الاعلامي',
                ItemView: 'MediaCenterView',
                ItemIconURL: 'resources/images/m-media.png'
            },
            {
                ItemName: 'الاستعلامات والاصدارات ',
                ItemView: 'InquiriesView',
                ItemIconURL: 'resources/images/m-inq.png'
            },
            {
                ItemName: 'التواصل',
                ItemView: 'ContactUsView',
                ItemIconURL: 'resources/images/m-contact.png'
            },
            {
                ItemName: 'المبادرات والمشاريع',
                ItemView: 'ProjectsView',
                ItemIconURL: 'resources/images/m-projects.png'
            },
            {
                ItemName: 'المؤشرات والتقارير',
                ItemView: 'ReportsView',
                ItemIconURL: 'resources/images/m-reports.png'
            },
            {
                ItemName: 'الاعدادات',
                ItemView: 'SettingsView',
                ItemIconURL: 'resources/images/m-settings.png'
            },
            {
                ItemName: 'تسجيل الدخول',
                ItemView: 'LogivFormView',
                ItemIconURL: 'resources/images/m-login.png'
            }
        ]
       
    }
});