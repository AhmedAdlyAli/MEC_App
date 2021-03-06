/*
 * File: app/controller/ProjectsController.js
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

Ext.define('MEC_App.controller.ProjectsController', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            "panel#ProjectsView": {
                initialize: 'onProjectsViewInitialize'
            },
            "list#lstProjects": {
                itemtap: 'onLstProjectsItemTap'
            },
            "panel#ProjectDetailsView": {
                initialize: 'onProjectDetailsViewInitialize'
            }
        }
    },

    onProjectsViewInitialize: function(component, eOpts) {

        var view = component;

        var ajaxAndPagingParams = {
            list: view.down('#lstProjects'),
            moreText: Ext.Localization.GetMessage('LoadMore'),
            noRecords: Ext.Localization.GetMessage('NoMoreInfo'),
            url: Ext.Global.GetConfig('CMSWSUrl')+ '/InitiativesAndProject/GetAllInitiativesAndProjects?culture='+ Ext.Global.LanguageFlag,
            pageSize: 10
        };

        Ext.Global.LoadAjaxWithPaging(ajaxAndPagingParams);

    },

    onLstProjectsItemTap: function(dataview, index, target, record, e, eOpts) {
        dataview.up('MainNavView').push({
            xtype: 'ProjectDetailsView',
            title: Ext.Global.GetFixedTitle(),
            data: record.data

        });
    },

    onProjectDetailsViewInitialize: function(component, eOpts) {
        var view = component;
        var data = view.getData();
        view.down('#lblTitle').setHtml(data.ProjectTitle);
        view.down('#lblDescription').setHtml(data.ProjectDescription);

        view.down('#lblUrl').setHtml(data.ProjectURL);

        view.down('#imgDetails').setSrc(Ext.Global.GetConfig('CMSWSUrl')+"/InitiativesAndProject/Image/"+data.Id);//.setSrc(this.getData().NewsImgUrl);

    }

});