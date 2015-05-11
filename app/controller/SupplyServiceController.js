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
            },
            "panel#SupplyServiceView3": {
                initialize: 'onSupplyServiceView3Initialize'
            },
            "button#btnSupplyNext3": {
                tap: 'onBtnSupplyNext3Tap'
            },
            "panel#SupplyServiceNearestDealer": {
                initialize: 'onSupplyServiceNearestDealerInitialize'
            },
            "panel#SupplyServiceMyData": {
                initialize: 'onSupplyServiceMyDataInitialize'
            }
        }
    },

    onSupplyServiceView1Initialize: function(component, eOpts) {
        var me = this;
        var view = component;


        //var phoneName = window.device.name;
        //https://cordova.apache.org/docs/en/3.0.0/cordova_device_device.md.html#device.name



        // localization
        Ext.Localization.LocalizeView(view);


        Ext.AnimationHelper.ShowLoading();


        // ceate session

        var url = Ext.Global.GetConfig('supplyWebServiceUrl')+ '/CreateSession';

        var requestData = {"mobileDeviceID":Ext.Global.userToken};

        console.log(Ext.Global.userToken);


        Ext.Ajax.request({

            url : url,
            method : 'POST',
            jsonData :requestData,
            success : function (response) {

                var json1 = Ext.util.JSON.decode(response.responseText);
                var json2 = Ext.util.JSON.decode(json1.d);


                Ext.Global.userSupplyToken = json2.Data.SessionID;


                /////////////////////////////////

                // get allocated items
                var url2 = Ext.Global.GetConfig('supplyWebServiceUrl')+ '/GetFamilyItemDetails';

                var language = Ext.Global.LanguageFlag == 'en' ? 1 : 2;

                var requestData2 = {"qid":"21463400042", //Ext.Global.identityNum,//
                                    "languageID":language,
                                    "mobileDeviceID":"1231",
                                    "sessionID": Ext.Global.userSupplyToken};


                Ext.Ajax.request({

                    url : url2,
                    method : 'POST',
                    jsonData :requestData2,
                    success : function (response) {

                        var json1 = Ext.util.JSON.decode(response.responseText);
                        var json2 = Ext.util.JSON.decode(json1.d);

                        view.setData(json2.Data.Items);

                        var fsItems = view.down('#fsItems');

                        Ext.each(json2.Data.Items, function(item){
                            fsItems.add(

                                {
                                    xtype: 'spinnerfield',
                                    label: item.Name,
                                    value: item.AllocatedQty,
                                    name: item.ItemID,
                                    stepValue: 1,
                                    minValue: 0,
                                    maxValue:item.AllocatedQty
                                }

                            );

                        });

                        Ext.AnimationHelper.HideLoading();


                    },
                    failure: function(request, resp) {
                        Ext.device.Notification.show({
                            title: Ext.Localization.GetMessage('Error'),
                            buttons: [Ext.Localization.GetMessage('OK')],
                            message:  Ext.Localization.GetMessage('Failure'),
                            callback: function(button) {

                                //return user to home page

                                Ext.Viewport.getActiveItem().reset();

                            }
                        });
                    }
                });


            },
            failure: function(request, resp) {
                Ext.device.Notification.show({
                    title: Ext.Localization.GetMessage('Error'),
                    buttons: [Ext.Localization.GetMessage('OK')],
                    message:  Ext.Localization.GetMessage('Failure'),
                    callback: function(button) {

                        //return user to home page

                        Ext.Viewport.getActiveItem().reset();

                    }
                });
            }
        });
















    },

    onBtnSupplyNext1Tap: function(button, e, eOpts) {


        var view = this.getSupplyServiceView1();


        var consolidatedData= [];

        var formData = view.getValues();
        var viewData = view.getData();


        Ext.each(viewData,function(item){
            var price = formData[item.ItemID] * item.Price;
            consolidatedData.push({ ItemID: item.ItemID,ItemName:item.Name,  Quantity: formData[item.ItemID],ItemPrice:price});
        });


        Ext.Viewport.getActiveItem().push({
            xtype: 'SupplyServiceView2',
            title:  Ext.Global.GetFixedTitle(),
            data: consolidatedData
        });









    },

    onSupplyServiceView2Initialize: function(component, eOpts) {
        var view = component;


        Ext.Localization.LocalizeView(view);
            Ext.AnimationHelper.ShowLoading();


            var mapPanel = view.down('#mapDealers');
            var gMap = mapPanel.getMap();


        navigator.geolocation.getCurrentPosition(function(position){


        //console.log(view.getData());

        Ext.Function.defer(function(){



                  gMap.setCenter(new google.maps.LatLng (position.coords.latitude,position.coords.longitude));
                  gMap.setZoom(11);


            // get dealers

            var url = Ext.Global.GetConfig('supplyWebServiceUrl')+ '/GetNearbyDealers';


            var orderItems =[];
            var viewData={};
            viewData.Items = view.getData();


            Ext.each(viewData.Items,function(item){
            //alert(item.ItemID);
                orderItems.push({ ItemID: item.ItemID, value: item.Quantity });

            });





            var language = Ext.Global.LanguageFlag == 'en' ? 1 : 2;

            var requestData =  {"qid":Ext.Global.identityNum,//"24263400239",
                                "languageID":language,
                                "mobileDeviceID":"1231",
                                "restrictDealerBasedOnStock":"true",
                                "latitude": position.coords.latitude, //"25.321283",//location.lat,
                                "longtitude":position.coords.longitude, //"51.528329", //location.lng,
                                "orderItems": orderItems,
                                "sessionID": Ext.Global.userSupplyToken
                               };


        //console.log(requestData);



            Ext.Ajax.request({

                url : url,
                method : 'POST',
                jsonData :requestData,
                success : function (response) {

                    var json1 = Ext.util.JSON.decode(response.responseText);
                    var json2 = Ext.util.JSON.decode(json1.d);


                    Ext.AnimationHelper.HideLoading();


                   //console.log(json2);



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

                           view.down('#hiddenDealerName').setValue(marker.data.DealerName);

                        // console.log(marker.data.DealerID);


                         viewData.DealerID = marker.data.DealerID;
                         viewData.DealerName = marker.data.DealerName;

                         view.setData(viewData);




                        });





                });

                },
                failure: function(request, resp) {
                    Ext.device.Notification.show({
                        title: Ext.Localization.GetMessage('Error'),
                        buttons: [Ext.Localization.GetMessage('OK')],
                        message:  Ext.Localization.GetMessage('Failure'),
                        callback: function(button) {

                            //return user to home page

                            Ext.Viewport.getActiveItem().reset();

                        }
                    });
                }
            });

        }, 1100,this);


        }, function(error){
                //alert('code: '    + error.code    + '\n' +
                //  'message: ' + error.message + '\n');



                //alert('code: '    + error.code    + '\n' +
                  //'message: ' + error.message + '\n');

                 Ext.AnimationHelper.HideLoading();


                gMap.setCenter(new google.maps.LatLng (25.321283,51.528329));
                gMap.setZoom(11);



                var m = Ext.Localization.GetMessage('LocationNotEnabled');
                            Ext.device.Notification.show({
                                title: Ext.Localization.GetMessage('Error'),
                                buttons:[Ext.Localization.GetMessage('OK')],
                                message: m
                            });



        });

    },

    onBtnSupplyNext2Tap: function(button, e, eOpts) {





        var view = this.getSupplyServiceView2();
        var view2Data = view.getData();



        var orderItems =[];


        Ext.each(view2Data.Items,function(item){

            //console.log(item.ItemID +'===' + item.Quantity);

            orderItems.push({ ItemID: item.ItemID, value: item.Quantity });
        });




        var allocationID =0;

        var url = Ext.Global.GetConfig('supplyWebServiceUrl')+ '/AllocateItems';

        var requestData =
            {"qid": Ext.Global.identityNum,//"21463400042",//
             "languageID": Ext.Global.LanguageFlag=='ar'?2:1,
             "mobileDeviceID":"1231",
             "dealerID": view2Data.DealerID,
             orderItems: orderItems,
             "sessionID": Ext.Global.userSupplyToken
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

                //console.log(json2);



                if(json2.ErrorMessage==='StockNotFound')
                {


                    var m = Ext.Localization.GetMessage('StockNotFound');
                    Ext.device.Notification.show({
                        title: 'خطأ',
                        buttons:["موافق"],
                        message: m
                    });

                    //alert(m);

                    Ext.AnimationHelper.HideLoading();


                }else{


                    allocationID = json2.Data.Allocations[0].AllocationID;

                    view2Data.AllocationID = allocationID;

                    Ext.AnimationHelper.HideLoading();

                    Ext.Viewport.getActiveItem().push({
                        xtype: 'SupplyServiceView3',
                        title: Ext.Global.GetFixedTitle(),
                        data: view2Data
                    });

                }


            },
            failure: function(request, resp) {
                Ext.device.Notification.show({
                    title: Ext.Localization.GetMessage('Error'),
                    buttons: [Ext.Localization.GetMessage('OK')],
                    message:  Ext.Localization.GetMessage('Failure'),
                    callback: function(button) {

                        //return user to home page

                        Ext.Viewport.getActiveItem().reset();

                    }
                });
            }
        });



    },

    onSupplyServiceView3Initialize: function(component, eOpts) {
        var view  = component;


        //localization
        Ext.Localization.LocalizeView(view);



        var view2Data = view.getData();

        var userName = Ext.Global.LanguageFlag == 'ar' ? Ext.Global.identityNameAr : Ext.Global.identityNameEn;

        view.down('#lblUserName2').setHtml(userName);
        view.down('#lblDealer2').setHtml(view2Data.DealerName);

        var totalPrice =0;

        var pnlItems = view.down('#pnlItems');

        Ext.each(view2Data.Items, function(item){



            totalPrice += item.ItemPrice;


            pnlItems.add(
                {
                    xtype: 'panel',
                    layout: 'hbox',
                    items:
                    [

                        {
                            xtype: 'label',
                            html: item.ItemName,
                            flex: 1

                        },
                        {
                            xtype: 'label',
                            html: item.Quantity,
                            cls:'label-value',
                            flex: 2
                        }

                    ]

                });


        });

        view.down('#lblFees2').setHtml(totalPrice);

        //view.setData(view2Data);



    },

    onBtnSupplyNext3Tap: function(button, e, eOpts) {
                var view = this.getSupplyServiceView3();
                var view3Data = view.getData();
                view3Data.TotalPrice = view.down('#lblFees2').getHtml();



                Ext.Viewport.getActiveItem().push({
                    xtype: 'SupplyServiceView4',
                    title: Ext.Global.GetFixedTitle(),
                    data: view3Data
                });






    },

    onSupplyServiceNearestDealerInitialize: function(component, eOpts) {
        var me = this;
        var view = component;

        Ext.Localization.LocalizeView(view);


        Ext.AnimationHelper.ShowLoading();


        var mapPanel = view.down('#mapDealers');
        var gMap = mapPanel.getMap();



        // get user location then get near dealers
        navigator.geolocation.getCurrentPosition(function(position){





            Ext.Function.defer(function(){


                gMap.setCenter(new google.maps.LatLng(position.coords.latitude,position.coords.longitude));
                gMap.setZoom(11);


                // get dealers
                me.GetDealers(gMap,position.coords.latitude,position.coords.longitude,[],view,'');

            }, 300,this);






        }, function(error){


           // alert('code: '    + error.code    + '\n' +
           // 'message: ' + error.message + '\n');


            var m = Ext.Localization.GetMessage('LocationNotEnabled');
            Ext.device.Notification.show({
                title: Ext.Localization.GetMessage('Error'),
                buttons: [Ext.Localization.GetMessage('OK')],
                message: m
            });




           Ext.Function.defer(function(){

                gMap.setCenter(new google.maps.LatLng (25.321283,51.528329));
                gMap.setZoom(11);

                me.GetDealers(gMap,lat,lng,[],view,'');

             }, 300,this);


               Ext.AnimationHelper.HideLoading();

        });






    },

    onSupplyServiceMyDataInitialize: function(component, eOpts) {
        var me = this;
        var view = component;


        // localization
        Ext.Localization.LocalizeView(view);




        var url = Ext.Global.GetConfig('supplyWebServiceUrl')+ '/GetFamilyDetails';

        var language = Ext.Global.LanguageFlag == 'en' ? 1 : 2;


        var requestData=
            {"qid":Ext.Global.identityNum,//"21463400042",
             "languageID":language,
             "mobileDeviceID":"1231",
            "sessionID": Ext.Global.userSupplyToken};




        Ext.AnimationHelper.ShowLoading();

        Ext.Ajax.request({

            url : url,
            method : 'POST',
            jsonData :requestData,
            success : function (response) {

                var json1 = Ext.util.JSON.decode(response.responseText);
                var json2 = Ext.util.JSON.decode(json1.d);

               // console.log(json2);




                        var store = new Ext.data.Store({
                            data : json2.Data.FamilyMembers
                        });

                        var lst = view.down('#lstFamily');
                        lst.setStore(store);

                        lst.setHeight(json2.Data.FamilyMembers.length*3.3 + 'em');
                        lst.setScrollable(false);







                Ext.AnimationHelper.HideLoading();


            },
            failure: function(request, resp) {
                Ext.device.Notification.show({
                    title: Ext.Localization.GetMessage('Error'),
                    buttons: [Ext.Localization.GetMessage('OK')],
                    message:  Ext.Localization.GetMessage('Failure'),
                    callback: function(button) {

                        //return user to home page

                        Ext.Viewport.getActiveItem().reset();

                    }
                });
            }
        });











    },

    GetDealers: function(gMap, lat, lng, orderItems, view, token) {
        //alert(view);


        //alert('start');


                var url = Ext.Global.GetConfig('supplyWebServiceUrl')+ '/GetNearbyDealers';


                var language = Ext.Global.LanguageFlag == 'en' ? 1 : 2;

                var requestData =  {"qid":Ext.Global.identityNum,//"24263400239",
                                    "languageID":language,
                                    "mobileDeviceID":"1231",
                                    "restrictDealerBasedOnStock":"false",
                                    "latitude": lat, //"25.321283",//location.lat,
                                    "longtitude":lng, //"51.528329", //location.lng,
                                    "orderItems": orderItems,
                                    "sessionID": token
                                   };


             //console.log(requestData);



                Ext.Ajax.request({

                    url : url,
                    method : 'POST',
                    jsonData :requestData,
                    success : function (response) {

                        var json1 = Ext.util.JSON.decode(response.responseText);
                        var json2 = Ext.util.JSON.decode(json1.d);


                        Ext.AnimationHelper.HideLoading();


                        //console.log(json2);



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


                            });





                        });

                    },
                    failure: function(request, resp) {
                        Ext.device.Notification.show({
                            title: Ext.Localization.GetMessage('Error'),
                            buttons: [Ext.Localization.GetMessage('OK')],
                            message:  Ext.Localization.GetMessage('Failure'),
                            callback: function(button) {

                                //return user to home page

                                Ext.Viewport.getActiveItem().reset();

                            }
                        });
                    }
                });
    }

});