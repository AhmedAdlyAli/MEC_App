/*
 * File: app/controller/SupplyServiceController.js
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

Ext.define('MEC_App.controller.SupplyServiceController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.SupplyServiceController',

    config: {
        refs: {
            lblFamilyCount: '#lblFamilyCount',
            fsItems: '#fsItems',
            SupplyServiceView1: 'SupplyServiceView1',
            SupplyServiceView2: 'SupplyServiceView2',
            SupplyServiceView3: 'SupplyServiceView3'
        },

        control: {
            "panel#SupplyServiceView1": {
                initialize: 'onSupplyServiceView1Initialize'
            },
            "button#btnSupplyNext1": {
                tap: 'onBtnSupplyNext1Tap'
            },
            "panel#SupplyServiceView2": {
                initialize: 'onSupplyServiceView2Initialize'
            },
            "button#btnSupplyNext2": {
                tap: 'onBtnSupplyNext2Tap'
            }
        }
    },

    onSupplyServiceView1Initialize: function(component, eOpts) {

        var me = this;


        var url2 = Ext.Global.GetConfig('supplyWebServiceUrl')+ '/GetFamilyItemDetails';

        var requestData2 = {"qid":"21463400042", "languageID":"2", "mobileDeviceID":"1231"};


        //Ext.AnimationHelper.ShowLoading();

        Ext.Ajax.request({

            url : url2,
            method : 'POST',
            jsonData :requestData2,
            success : function (response) {

                var json1 = Ext.util.JSON.decode(response.responseText);
                var json2 = Ext.util.JSON.decode(json1.d);


                var fsItems = me.getFsItems();


                 Ext.each(json2.Data.Items, function(item){

                        fsItems.add(

                            {
                                xtype: 'spinnerfield',
                                label: item.Name,
                                placeholder: item.Name,
                                value: item.AllocatedQty,
                                name: item.ItemID,
                                stepValue: 1,
                                minValue: 0,
                                maxValue:100,
                                listeners : {
                                    spin : function(spinnerfield, newValue, direction, eOpts) {
                                        if(newValue>item.AllocatedQty){
                                            this.setValue(item.AllocatedQty);
                                        }
                                    }
                                }



                             }

                        );

                    });



                Ext.AnimationHelper.HideLoading();


            },
            failure: function(request, resp) {
                alert("in failure");
            }
        });












    },

    onBtnSupplyNext1Tap: function(button, e, eOpts) {


        var view = this.getSupplyServiceView1();


        Ext.Viewport.getActiveItem().push({
            xtype: 'SupplyServiceView2',
            title:  Ext.Global.GetFixedTitle(),
            data: view.getValues()
        });



    },

    onSupplyServiceView2Initialize: function(component, eOpts) {

        // initialize google maps
        var view = component;

        console.log(view.getData());

        Ext.Function.defer(function(){


            var mapPanel = view.down('#mapDealers');
            var gMap = mapPanel.getMap();

                gMap.setCenter(new google.maps.LatLng (25.321283,51.528329));
                gMap.setZoom(11);


            // get dealers

            var url = Ext.Global.GetConfig('supplyWebServiceUrl')+ '/GetNearbyDealers';


            var orderItems =[];
            var formData = view.getData();

         for (var key in formData) {
          if (formData.hasOwnProperty(key)) {
                orderItems.push({ ItemID: key, value: formData[key] });
          }
        }




            var language = Ext.Global.LanguageFlag == 'en' ? 1 : 2;

            var requestData =  {"qid":"24263400239",
                                "languageID":language,
                                "mobileDeviceID":"1231",
                                "restrictDealerBasedOnStock":"true",
                                "latitude":"25.321283",//location.lat,
                                "longtitude":"51.528329",//location.lng,
                                "orderItems": orderItems
                               };


        //console.log(requestData);


            Ext.AnimationHelper.ShowLoading();

            Ext.Ajax.request({

                url : url,
                method : 'POST',
                jsonData :requestData,
                success : function (response) {

                    var json1 = Ext.util.JSON.decode(response.responseText);
                    var json2 = Ext.util.JSON.decode(json1.d);


                    Ext.AnimationHelper.HideLoading();


                   console.log(json2);



             var infowindow = new google.maps.InfoWindow();


                Ext.each(json2.Data.Dealers,function(item){

                        var marker = new google.maps.Marker({
                            map: gMap,
                            animation: google.maps.Animation.DROP,
                            position: new google.maps.LatLng(item.Longtitude,item.Latitude),
                            icon: 'resources/images/drop-pin.png',
                            data:item
                        });




                     google.maps.event.addListener(marker,'click',function(pos) {

                            var info = '<div style="font-size:16px;font-family:PFDinTextUniversal;padding-right:5px" class="branch-title">'+marker.data.DealerName+'</div>';
                               infowindow.setContent(info);
                               infowindow.open(gMap,marker);

                           view.down('#lblTitle').setHtml(marker.data.DealerName);
                           view.down('#lblAddress').setHtml(marker.data.Address);
                           view.down('#hiddenDealerID').setValue(marker.data.DealerID);



                         console.log(marker.data.DealerID);


                         formData.DealerID = marker.data.DealerID;

                         view.setData(formData);



                        });




                });















                },
                failure: function(request, resp) {
                    alert("in failure");
                }
            });









        }, 1100,this);














    },

    onBtnSupplyNext2Tap: function(button, e, eOpts) {
        var view = this.getSupplierServiceView3();

        console.log(view.getData());

        // collect form data
        // get supplier
        // call allocate to get fees













    }

});