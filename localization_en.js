var localeEn = 

{
	Name : "English translation",
	LanguageCode : "en",
	Links: [
		{
			itemId:"PublicServiceView",
			items: [
				{Name:"Investor Services", Url:"InvestorServiceView", RequireLogin:false, Icon:"ico-investorService.png"},
				{Name:"Consumer Services", Url:"ConsumerServiceView", RequireLogin:false, Icon:"ico-consumerService.png"}
			]
		},

		{
			itemId:"ConsumerServiceView",
			items: [
				{Name:"Report Complaint", Url:"ComplaintsView", RequireLogin:false, Icon:"ico-complaints.png"},
				{Name:"Supply Services", Url:"SupplyServiceListing", RequireLogin:false, Icon:"ico-supplyService.png"}
			]
		},
		{
			itemId:"SupplyServiceListing",
			items: [
				{Name:"How to request Supply Service", Url:"SupplyServiceHowTo", RequireLogin:false, Icon:"ico-supplyService.png"},
				{Name:"My Details", Url:"SupplyServiceMyData", RequireLogin:true, Icon:"ico-supplyService.png"},
				{Name:"Supply Service Request Form", Url:"SupplyServiceView1", RequireLogin:true, Icon:"ico-supplyService.png"},
				{Name:"Nearest Dealer", Url:"SupplyServiceNearestDealer", RequireLogin:false, Icon:"ico-supplyService.png"},
				{Name:"Departnment Services", Url:"SupplyServiceDepartmentServices", RequireLogin:false, Icon:"ico-supplyService.png"}
			]
		},
		{
			itemId:"MediaCenterView",
			items: [
				{Name:"Ministry News", CatID:1, Icon:"ico-ministry-news.png"},
				{Name:"Reflections", CatID:8, Icon:"ico-news-about.png"},
				{Name:"Similar Regional Official News", CatID:2, Icon:"ico-news-local-similar.png"},
				{Name:"Regional Economic News", CatID:4, Icon:"ico-news-local-economic.png"},
				{Name:"Similar International Official News", CatID:6, Icon:"ico-news-international-similar.png"},
				{Name:"International Economic News", CatID:9, Icon:"ico-news-international-economic.png"}
			]
		},

		{
			itemId:"InquiriesView",
			items: [
				{Name:"Find a Commercial Name", Url:"TradeNameAvailabilityView", Icon:"ico-search-trade-name.png"},
				{Name:"Find a Commercial Activity", Url:"TradeActivityAvailabilityView", Icon:"ico-search-trade-activity.png"},
				{Name:"Recalls", Url:"RecallsView", Icon:"ico-recall-item.png"},
				{Name:"Consumer Awarness", Url:"ConsumerEducationView", Icon:"ico-consumer-cultuer.png"},
				{Name:"Investor Awarness", Url:"InvestorEducationView", Icon:"ico-investor-culture.png"},
				{Name:"Violations & Closures", Url:"ViolationsView", Icon:"ico-violations.png"}
			]
		},

{
			itemId:"ReportsView",
			items: [
				{Name:'Economic Indicators',Url:'EconomicIndicatorsListing', OpenExternalWindow:false, Icon:'ico-economy-indicator.png'},
             	{Name:'Business Indicators',Url:'BusinessIndicatorsView',OpenExternalWindow:false,Icon:'ico-work-indicator.png'},
             	{Name:'Consumer Indicators',Url:'ConsumerIndicatorsListing' ,OpenExternalWindow:false,Icon:'ico-consume-indicators.png'},
             	{Name:'Trademark Report',Url:'http://www.google.com',OpenExternalWindow:true,Icon:'ico-trade.png'}
			]
		},

		{
			itemId:"ConnectView",
			items: [
				{Name:'About The Ministry',Url:'AboutView',OpenExternalWindow:false, Icon:'about-minstry.png'},
             	{Name:'Ministry Branches',Url:'MinistryBranchesView',OpenExternalWindow:false,Icon:'ico-branches.png'},
             	{Name:'Ministry Staff',Url:'http://www.google.com', OpenExternalWindow:true ,Icon:'ico-employees.png'},
             	{Name:'Contact Us',Url:'ContactUs2View',OpenExternalWindow:false,Icon:'ico-contact.png'},
             	{Name:'Suggestions',Url:'FeedbackFormView',OpenExternalWindow:false,Icon:'ico-suggesstion.png'}
			]
		},

		{
			itemId:"EconomicIndicatorsListing",
			items: [
				{Name:'Monthly Economic Indicators',Url:'EconomicIndicatorsView'},
             	{Name:'Quarterly Economic Indicators',Url:'EconomicIndicatorsView'},
             	{Name:'Annual Economic Indicators',Url:'EconomicIndicatorsView'}
			]
		},

		{
			itemId:"ConsumerIndicatorsListing",
			items: [
				{Name:'Daily Bulletin',Url:'DailyReportView'},
             	{Name:'Where to Shop',Url:'WhereToShopView'},
             	{Name:'Weekly Report for Fruit & Vegetable',Url:'http://www.google.com'}
			]
		},

		{
			itemId:"DailyReportView",
			items: [
				{Name:'Daily Prices',Url:'DailyPricesView', Icon:'ico-daily-prices.png'},
             	{Name:'Consumer Goods Prices',Url:'GoodsPricesView', Icon:'ico-consumer-goods.png'}
			]
		},

		{
			itemId:"InvestorServiceView",
			items: [{Name:'My Establishments',Url:'MyBusinessView',RequireLogin:true , Icon:'ico-myBusiness.png'},
                    {Name:'Administrative Services',Url:'AdminServicesView',RequireLogin:false ,Icon:'ico-adminServices.png'},
                    {Name:'PrintOffs Request',Url:'PrintOffsView1', RequireLogin:true , Icon:'ico-printOffs.png'},
                    {Name:'My Requests',Url:'MyRequestsView',RequireLogin:true,Icon:'ico-myRequests.png'},
                    {Name:'Establishment Services',Url:'http://eservicesstg.mec.gov.qa/eservice_enu/start.swe?SWECmd=GotoView&SWEView=MEC+Issue+Representative+Office+General+Instruction+View+eService',RequireLogin:false ,Icon:'ico-registerService.png'},
                    {Name:'Reserve Trade Name',Url:'http://eservicesstg.mec.gov.qa/eservice_enu/start.swe?SWECmd=GotoView&SWEView=MEC+Trade+Names+Reg+General+Instructions+View+eService',RequireLogin:false , Icon:'ico-reserveTradeName.png'}
                    ]
		},

		{
			itemId:"AdminServicesView",
			items: [{Name:'Renew Commercial Registration',Url:'http://eservicesstg.mec.gov.qa/eservice_enu/start.swe?SWECmd=GotoView&SWEView=MEC+Renewal+General+Instructions+View+eService'},
             {Name:'Renew Commercial Permit',Url:'http://eservicesstg.mec.gov.qa/eservice_enu/start.swe?SWECmd=GotoView&SWEView=MEC+CP+Renew+General+Instructions+View+eService'},
             {Name:'Change Trade Name',Url:'http://eservicesstg.mec.gov.qa/eservice_enu/start.swe?SWECmd=GotoView&SWEView=MEC+Change+Services+General+Instructions+View+eService'},
             {Name:'Change Signatories',Url:'http://eservicesstg.mec.gov.qa/eservice_enu/start.swe?SWECmd=GotoView&SWEView=MEC+Change+Services+General+Instructions+View+eService'},
             {Name:'Terminate Branch',Url:'http://eservicesstg.mec.gov.qa/eservice_enu/start.swe?SWECmd=GotoView&SWEView=MEC+Delete+CR+General+Instructions+View+eService'},
             {Name:'Terminate Commercial Registration',Url:'http://eservicesstg.mec.gov.qa/eservice_enu/start.swe?SWECmd=GotoView&SWEView=MEC+Delete+CR+General+Instructions+View+eService'}

            ]
		}


	],

	Views: [


		{
			itemId:"MyBusinessView",
			description: "",
			items:
			[
				{itemId:"lblTitle", "xtype": "label","value":"My Establishments"},
				{itemId:"lstMyCompanies", "xtype": "cls","value":"ltr-cls"}
			]
		},



		{
			itemId:"MyRequestDetails",
			description: "",
			items:
			[
				{itemId:"pnlData", "xtype": "cls","value":"ltr-cls"},
				{itemId:"lbl1", "xtype": "label","value":"Request No"},
				{itemId:"lbl2", "xtype": "label","value":"Request Status"},
				{itemId:"lbl3", "xtype": "label","value":"Request Type"},
				{itemId:"lbl4", "xtype": "label","value":"Request Date"},
				{itemId:"lbl5", "xtype": "label","value":"Request Last Updated"},
				{itemId:"lbl6", "xtype": "label","value":"Request Closure Date"},
				{itemId:"lbl7", "xtype": "label","value":"Requester ID Number"},
				{itemId:"lbl8", "xtype": "label","value":"Requester Arabic Name"},
				{itemId:"lbl9", "xtype": "label","value":"Requester English Name"},
				{itemId:"lbl10", "xtype": "label","value":"CR Number"},
				{itemId:"lbl11", "xtype": "label","value":"Establishment Arabic Name"},
				{itemId:"lbl12", "xtype": "label","value":"Establishment English Name"},
				{itemId:"lbl13", "xtype": "label","value":"Total Fees"}

			]
		},


		{
			itemId:"PrintOffsView1",
			description: "",
			items:
			[
				{itemId:"fsForm", "xtype": "cls","value":"ltr-cls"},
				{itemId:"companyName", "xtype": "textfield","value":"Company Name"},
				{itemId:"txtPrintoutType", "xtype": "textfield","value":"PrintOff Type"},
				{itemId:"txtDeliveryMethod", "xtype": "textfield","value":"Delivery Method"},
				{itemId:"txtNoOfCopies", "xtype": "textfield","value":"No of Copies"},
				{itemId:"btnPrintoffsNext", "xtype": "button","value":"Next"},
				{itemId:"lblTitle", "xtype": "label","value":"PrintOff Request"}

			]
		},

		{
			itemId:"PrintOffsView2",
			description: "",
			items:
			[
				{itemId:"pnlData", "xtype": "cls","value":"ltr-cls"},
				{itemId:"lbl1", "xtype": "label","value":"PrintOff Type"},
				{itemId:"lbl2", "xtype": "label","value":"No Of Copies"},
				{itemId:"lbl3", "xtype": "label","value":"Establishment Name"},
				{itemId:"lbl4", "xtype": "label","value":"Total Fees"},
				{itemId:"lbl5", "xtype": "label","value":"Request Number"},
				{itemId:"lbl6", "xtype": "label","value":"Request Status"},
				{itemId:"lbl7", "xtype": "label","value":"Required Attachments"},
				{itemId:"btnPrintoffs2Next", "xtype": "button","value":"Confrim & Pay"},
				{itemId:"lblTitle", "xtype": "label","value":"PrintOff Request"}

			]
		},


		{
			itemId:"PrintOffsView3",
			description: "",
			items:
			[
				{itemId:"lblTitle", "xtype": "label","value":"PrintOff Request"}
			]
		},	



		{
			itemId:"MyEstablishmentDetails",
			description: "",
			items:
			[
				
				{itemId:"lbl1", "xtype": "label","value":"CR Number"},
				{itemId:"lbl2", "xtype": "label","value":"CR Registration Date"},
				{itemId:"lbl3", "xtype": "label","value":"CR Expiry Date"},
				{itemId:"lbl4", "xtype": "label","value":"CR Status"},
				{itemId:"lbl5", "xtype": "label","value":"CR English Name"},
				{itemId:"lbl6", "xtype": "label","value":"CR Arabic Name"},
				{itemId:"lbl7", "xtype": "label","value":"Capital"},
				{itemId:"lbl8", "xtype": "label","value":"CP Number"},
				{itemId:"lbl9", "xtype": "label","value":"CP Status"},
				{itemId:"lbl10", "xtype": "label","value":"CP Expiry Date"},
				{itemId:"lbl11", "xtype": "label","value":"Establishment Date"},
				{itemId:"lbl12", "xtype": "label","value":"Establishment Type"},
				{itemId:"lbl13", "xtype": "label","value":"Legal Form"},
				{itemId:"lbl14", "xtype": "label","value":"Establishment Status"},

				{itemId:"titlebar1", "xtype": "titlebar","value":"Establishment Information"},
				{itemId:"titlebar2", "xtype": "titlebar","value":"Business Activities"},
				{itemId:"titlebar3", "xtype": "titlebar","value":"Branches"},
				{itemId:"titlebar4", "xtype": "titlebar","value":"Signatories"},

				{itemId:"EstablishmentInfo", "xtype": "cls","value":"ltr-cls"},
				{itemId:"BusinessActivities", "xtype": "cls","value":"ltr-cls"},
				{itemId:"Branches", "xtype": "cls","value":"ltr-cls"},
				{itemId:"Signatories", "xtype": "cls","value":"ltr-cls"}
				

			]
		},

{
			itemId:"MyBranchDetails",
			description: "",
			items:
			[
				
				{itemId:"lbl1", "xtype": "label","value":"CR Number"},
				{itemId:"lbl2", "xtype": "label","value":"CR Registration Date"},
				{itemId:"lbl3", "xtype": "label","value":"CR Expiry Date"},
				{itemId:"lbl4", "xtype": "label","value":"CR Status"},
				{itemId:"lbl5", "xtype": "label","value":"CR English Name"},
				{itemId:"lbl6", "xtype": "label","value":"CR Arabic Name"},
				{itemId:"lbl7", "xtype": "label","value":"Capital"},
				{itemId:"lbl8", "xtype": "label","value":"CP Number"},
				{itemId:"lbl9", "xtype": "label","value":"CP Status"},
				{itemId:"lbl10", "xtype": "label","value":"CP Expiry Date"},
				{itemId:"lbl11", "xtype": "label","value":"Establishment Date"},
				{itemId:"lbl12", "xtype": "label","value":"Establishment Type"},
				{itemId:"lbl13", "xtype": "label","value":"Legal Form"},
				{itemId:"lbl14", "xtype": "label","value":"Establishment Status"},

				{itemId:"titlebar1", "xtype": "titlebar","value":"Establishment Information"},
				{itemId:"titlebar2", "xtype": "titlebar","value":"Business Activities"},
			 
				{itemId:"titlebar4", "xtype": "titlebar","value":"Signatories"},

				{itemId:"EstablishmentInfo", "xtype": "cls","value":"ltr-cls"},
				{itemId:"BusinessActivities", "xtype": "cls","value":"ltr-cls"},
				 
				{itemId:"Signatories", "xtype": "cls","value":"ltr-cls"}
				

			]
		},

		{
			itemId:"MyRequestsView",
			description: "",
			items:
			[
				{itemId:"lblTitle", "xtype": "label","value":"My Requests"},
				{itemId:"lstMyRequests", "xtype": "cls","value":"ltr-cls"}
			]
		},

		{
			itemId:"InvestorServiceView",
			description: "",
			items:
			[
				{itemId:"lblInvestor", "xtype": "label","value":"investor Services"},
				{itemId:"lstLinks1", "xtype": "cls","value":"ltr-cls"}
			]
		},

		{
			itemId:"LoginFomView",
			description: "login form",
			items:
			[
				{itemId:"lblForgotPassword", "xtype": "label","value":"Forgot Password"},
				{itemId:"lblTitle", "xtype": "label","value":"User Login"},
				{itemId:"btnRegister", "xtype": "button","value":"New User"},
				{itemId:"btnSubmitLogin", "xtype": "button","value":"Login"},
				{itemId:"txtUserName", "xtype": "textfield","value":"User Name"},
				{itemId:"txtPassword", "xtype": "textfield","value":"Password"},
				{itemId:"fSet", "xtype": "cls","value":"ltr-cls"}
			]
		},


		{
			itemId:"MainNavView",
			description: "Home...",
			items:
			[
				{itemId:"homeServices", xtype: "label",value:"Public Services"},
				{itemId:"btnMediaCenter", xtype: "label",value:"Media Center"},
				{itemId:"homeInquire", xtype: "label",value:"Inquiries & Extracts"},
				{itemId:"homeReports", xtype: "label",value:"Indicators & Reports"},
				{itemId:"btnProjects", xtype: "label",value:"Projects"},
				{itemId:"homeContact", xtype: "label",value:"Connect"}

			]
		},


		{
			itemId:"MediaCenterView",
			description: "Media Center...",
			items:
			[
				{itemId:"viewLbl", xtype: "label",value:"Media Center"},
				{itemId:"lstViewLinks", xtype: "cls",value:"ltr-cls"}

			]
		},


		{
			itemId:"InquiriesView",
			description: "inquiries and Extracts...",
			items:
			[
				{itemId:"viewLbl", xtype: "label",value:"Inquiries & Extracts"},
				{itemId:"lstViewLinks", xtype: "cls",value:"ltr-cls"}

			]
		},


		{
			itemId:"ReportsView",
			description: "Reportss...",
			items:
			[
				{itemId:"viewLbl", xtype: "label",value:"Indicators & Reports"},
				{itemId:"lstViewLinks", xtype: "cls",value:"ltr-cls"}

			]
		},


		{
			itemId:"ConnectView",
			description: "Contactus...",
			items:
			[
				{itemId:"viewLbl", xtype: "label",value:"Connect"},
				{itemId:"lstViewLinks", xtype: "cls",value:"ltr-cls"}

			]
		},


		{
			itemId:"ComplaintsView",
			description: "Complaints...",
			items:
			[
				{itemId:"frmComplaint", xtype: "cls",value:"ltr-cls"},
				{itemId:"viewLbl", xtype: "label",value:"Report Complaint"},
				{itemId:"shopName", xtype: "textfield",value:"Store Name"},
				{itemId:"shopLocation", xtype: "textfield",value:"Store Location"},
				{itemId:"txtCategory", xtype: "textfield",value:"Complaint Type"},
				{itemId:"txtComplaint", xtype: "textfield",value:"Complaint Description"},
				{itemId:"fullName", xtype: "textfield",value:"Full Name"},
				{itemId:"email", xtype: "textfield",value:"Email"},
				{itemId:"mobile", xtype: "textfield",value:"Mobile"},
				{itemId:"mytextfield", xtype: "textfield",value:"Barcode Scan"},
				{itemId:"lblAttachImage", xtype: "label",value:"Attach Image"},
				{itemId:"btnSubmitComplaint", xtype: "button",value:"Send"}

			]
		},


		{
			itemId:"PublicServiceView",
			description: "Public Services...",
			items:
			[
				{itemId:"viewLbl", xtype: "label",value:"Public Services"},
				{itemId:"lstLinks", xtype: "cls",value:"ltr-cls"}

			]
		},


		{
			itemId:"ConsumerServiceView",
			description: "Consumer Services...",
			items:
			[
				{itemId:"lblConsumer", xtype: "label",value:"Consumer Services"},
				{itemId:"lstLinks2", xtype: "cls",value:"ltr-cls"}

			]
		},


		{
			itemId:"SupplyServiceView1",
			description: "Supply Services...",
			items:
			[
				{itemId:"viewLbl", xtype: "label",value:"Supply Services Request Form"},
				{itemId:"itemQuantityTitle", xtype: "titlebar",value:"Items and Quantities", align:"left"},
				{itemId:"frmSupplyService1", xtype: "cls",value:"ltr-cls"},
				{itemId:"btnSupplyNext1", xtype: "button",value:"Next"}

			]
		},


		{
			itemId:"SupplyServiceView2",
			description: "Supply Services...",
			items:
			[
				{itemId:"viewLbl", xtype: "label",value:"Supply Services Request Form"},
				{itemId:"btnSupplyNext2", xtype: "button",value:"Next"}

			]
		},

		{
			itemId:"SupplyServiceView3",
			description: "Supply Services view 3 - order confirmation",
			items:
			[
				{itemId:"pnlConfirm", xtype: "cls",value:"ltr-cls"},
				
				{itemId:"lblTitle", xtype: "label",value:"Supply Services Request Form"},
				{itemId:"lblUserName", xtype: "label",value:"User Name"},
				
				{itemId:"lblItems", xtype: "label",value:"Items & Quantities"},
				{itemId:"lblDealer", xtype: "label",value:"Selected Dealer"},
				{itemId:"lblFees", xtype: "label",value:"Required Fees"},

				{itemId:"btnSupplyNext3", xtype: "button",value:"Confirm & Pay"}

			]
		},


		{
			itemId:"SupplyServiceView4",
			description: "Supply Services view 4 - payment",
			items:
			[
	
				{itemId:"lblTitle", xtype: "label",value:"Supply Services Request Form"}
			]
		},
		{
			itemId:"SupplyServiceNearestDealer",
			description: "Supply Service Nearby Dealer",
			items:
			[
	
				{itemId:"viewLbl", xtype: "label",value:"Supply Services Nearby Dealers"}
			]
		},
		{
			itemId:"SupplyServiceMyData",
			description: "Supply Service Nearby Dealer",
			items:
			[
	
				{itemId:"viewLbl", xtype: "label",value:"My Family Details"}
			]
		},
   
		{
			itemId:"SupplyServiceListing",
			description: "Supply Services view 4 - payment",
			items:
			[
				{itemId:"lblTitle", xtype: "label",value:"Supply Services"},
				{itemId:"lstLinks2", xtype: "cls",value:"ltr-cls"}

			]
		},





		{
			itemId:"AdminServicesView",
			description: "",
			items:
			[
				{itemId:"lblTitle", xtype: "label",value:"Administrative Services"},
				{itemId:"lstViewLinks", xtype: "cls",value:"ltr-cls"}

			]
		},







		{
			itemId:"EconomicIndicatorsListing",
			description: "Economic Indicators Listing",
			items:
			[
				{itemId:"lblTitle", xtype: "label",value:"Economic Indicators"},
				{itemId:"lstItems", xtype: "cls",value:"ltr-cls"}

			]
		},


		{
			itemId:"ConsumerIndicatorsListing",
			description: "Consumer Indicators Listing",
			items:
			[
				{itemId:"lblTitle", xtype: "label",value:"Consumer Indicators"},
				{itemId:"lstItems", xtype: "cls",value:"ltr-cls"}

			]
		},


		{
			itemId:"DailyReportView",
			description: "Daily Report",
			items:
			[
				{itemId:"lblTitle", xtype: "label",value:"Daily Bulletin"},
				{itemId:"lstItems", xtype: "cls",value:"ltr-cls"}

			]
		},


		{
			itemId:"GoodsPricesView",
			description: "Goods Prices",
			items:
			[
				{itemId:"lblTitle", xtype: "label",value:"Consumer Goods Prices"},
				//{itemId:"ShopsContainer", xtype: "container",value:"Shops"},
				//{itemId:"GoodsContainer", xtype: "container",value:"Goods"},
				{itemId:"GoodsPricesList", xtype: "cls",value:"ltr-cls"},
				{itemId:"lstShops", xtype: "cls",value:"ltr-cls"},
				{itemId:"lstProducts", xtype: "cls",value:"ltr-cls"}
			]
		},


		{
			itemId:"SettingsView",
			description: "Settings...",
			items:
			[
				{itemId:"viewLbl", xtype: "label",value:"Settings"},
				{itemId:"LanguageButtonsLabel", xtype: "label",value:"Current Language"},
				{itemId:"ChangeButtonPanel", xtype: "cls",value:"ltr-cls"},
				{itemId:"saveButton", xtype: "button",value:"Save"}
			]

		},


		{
			itemId:"SideMenu",
			description: "Side Menu...",
			items:
			[
				{itemId:"btnHome", "xtype": "button","value":"Home"},
				{itemId:"btnServices", "xtype": "button","value":"Public Services"},
				{itemId:"btnInquiry", "xtype": "button","value":"Inquiries & Extracts"},
				{itemId:"btnMedai", "xtype": "button","value":"Media Center"},
				{itemId:"btnContact", "xtype": "button","value":"Connect"},
				{itemId:"btnProjects", "xtype": "button","value":"Projects"},
				{itemId:"btnReports", "xtype": "button","value":"Indicators & Reports"},
				{itemId:"btnSettings", "xtype": "button","value":"Settings"},
				{itemId:"btnLogin", "xtype": "button","value":"Login"},
				{itemId:"btnLogout", "xtype": "button","value":"Logout"}

			]

		}




	],

	Messages: {
				StockNotFound:'There is No stock on the selected dealer',
								EstName:'Establishment Name',
				Choose:'Choose',
				Cancel:'Cancel',
				CRPrint:'CR PrintOff Arabic',
				CRPrint2: 'CR PrintOff English',
				CRPrint3: 'CP PrintOff',
				CRPrint4: 'NOC Certificate'	,
				PrintType: 'Printiff Type' ,
				DeliveryMethod: 'Delivery Method',
				Personal: 'Personal',
				Email: 'Email',
				ActiveRequestError: 'There is already active request of the same type for this Establishment',
				Error: 'Error',
				OK: 'Ok'				
				}

}
