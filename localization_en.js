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
				{Name:"Report Complaint", Url:"ComplaintsView", RequireLogin:true, Icon:"ico-complaints.png"},
				{Name:"Supply Services", Url:"SupplyServiceListing", RequireLogin:false, Icon:"ico-supplyService.png"}
			]
		},
		{
			itemId:"SupplyServiceListing",
			items: [
				{Name:"How to Request Supply Service", Url:"SupplyServiceHowTo", RequireLogin:false, Icon:"ico-supplyService.png"},
				{Name:"My Details", Url:"SupplyServiceMyData", RequireLogin:true, Icon:"ico-supplyService.png"},
				{Name:"Supply Service Request Form", Url:"SupplyServiceView1", RequireLogin:true, Icon:"ico-supplyService.png"},
				{Name:"Nearest Dealers", Url:"SupplyServiceNearestDealer", RequireLogin:false, Icon:"ico-supplyService.png"}
				//{Name:"Department Services", Url:"SupplyServiceDepartmentServices", RequireLogin:false, Icon:"ico-supplyService.png"}
			]
		},
		{
			itemId:"MediaCenterView",
			items: [
				{Name:"Ministry News", CatID:1, Icon:"ico-ministry-news.png"},
				{Name:"Opinions & Reflections", CatID:8, Icon:"ico-news-about.png"},
				{Name:"Official Regional News", CatID:2, Icon:"ico-news-local-similar.png"},
				{Name:"Official International News", CatID:6, Icon:"ico-news-local-economic.png"},
				{Name:"Regional Economic Scenery", CatID:4, Icon:"ico-news-international-similar.png"},
				{Name:"International Economic Scenery", CatID:9, Icon:"ico-news-international-economic.png"}
			]
		},

		{
			itemId:"InquiriesView",
			items: [
				{Name:"Find a Commercial Name", Url:"TradeNameAvailabilityView", Icon:"ico-search-trade-name.png"},
				{Name:"Find a Commercial Activity", Url:"TradeActivityAvailabilityView", Icon:"ico-search-trade-activity.png"},
				{Name:"Recalls", Url:"RecallsView", Icon:"ico-recall-item.png"},
				{Name:"Violations & Closures", Url:"ViolationsView", Icon:"ico-violations.png"},
				{Name:"Consumer Awareness", Url:"ConsumerEducationView", Icon:"ico-consumer-cultuer.png"},
				{Name:"Investor Awareness", Url:"InvestorEducationView", Icon:"ico-investor-culture.png"}
			]
		},

{
			itemId:"ReportsView",
			items: [
				{Name:'Economic Indicators',Url:'EconomicIndicatorsListing', OpenExternalWindow:false, Icon:'ico-economy-indicator.png'},
             	{Name:'Business Indicators',Url:'BusinessIndicatorsView',OpenExternalWindow:false,Icon:'ico-work-indicator.png'},
             	{Name:'Consumer Indicators',Url:'ConsumerIndicatorsListing' ,OpenExternalWindow:false,Icon:'ico-consume-indicators.png'},
             	{Name:'Trademark Report',Url:'http://cms.mec.gov.qa/cms/trdmrkrpt/217edition.pdf',OpenExternalWindow:true,Icon:'ico-trade.png'},
             	{Name:'Trade Exchange Reports',Url:'TradeExchangeView',OpenExternalWindow:false,Icon:'ico-trade-exch.png'}
			]
		},

		{
			itemId:"ConnectView",
			items: [
				{Name:'About The Ministry',Url:'AboutView',OpenExternalWindow:false, Icon:'about-minstry.png'},
             	{Name:'Branches',Url:'MinistryBranchesView',OpenExternalWindow:false,Icon:'ico-branches.png'},
             	{Name:'Contact Us',Url:'ContactUs2View',OpenExternalWindow:false,Icon:'ico-contact.png'},
             	{Name:'Suggestions',Url:'FeedbackFormView',OpenExternalWindow:false,Icon:'ico-suggesstion.png'},
             	{Name:'Ministry Staff',Url:'TradeExchangeView', OpenExternalWindow:false ,Icon:'ico-employees.png'}
			]
		},

		{
			itemId:"EconomicIndicatorsListing",
			items: [
				{Name:'Weekly Economic Indicators',Url:'EconomicIndicatorsView', Icon:'ico-week.png',cat:4},
				{Name:'Monthly Economic Indicators',Url:'EconomicIndicatorsView', Icon:'ico-month.png',cat:3},
             	{Name:'Quarterly Economic Indicators',Url:'EconomicIndicatorsView', Icon:'ico-quarter.png',cat:2},
             	{Name:'Annual Economic Indicators',Url:'EconomicIndicatorsView', Icon:'ico-year.png',cat:1}
			]
		},

		{
			itemId:"ConsumerIndicatorsListing",
			items: [
				{Name:'Daily Bulletin',Url:'DailyReportView',OpenExternalWindow:false,Icon:'ico-daily-prices.png'},
             	{Name:'Where to Shop',Url:'WhereToShopView',OpenExternalWindow:false,Icon:'ico-where.png'},
             	{Name:'Weekly Report for Fruit & Vegetable',OpenExternalWindow:true,Url:'http://www.mec.gov.qa/Arabic/Documents/التقرير%20الاسبوعى%20لأسعار%20الخضار%20و%20الفاكهه%20و%20الاسماك%20%20بالسوق%20المركزي%20حتى%20ي.pdf',Icon:'ico-report.png'}
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
			items: [{Name:'My Establishments',Url:'MyBisunessFixed',RequireLogin:true , Icon:'ico-myBusiness.png', OpenExternalWindow:false},
                    {Name:'Administrative Services',Url:'AdminServicesView',RequireLogin:false ,Icon:'ico-adminServices.png', OpenExternalWindow:false},
                    {Name:'Offprint Request',Url:'PrintOffsView1', RequireLogin:true , Icon:'ico-printOffs.png', OpenExternalWindow:false},
                    {Name:'My Requests',Url:'MyRequestsView',RequireLogin:true,Icon:'ico-myRequests.png', OpenExternalWindow:false},
                    {Name:'Establishment Services',Url:'https://services.mec.gov.qa/enu/start.swe?SWECmd=GotoView&SWEView=MEC+Issue+Representative+Office+General+Instruction+View+eService',RequireLogin:false ,Icon:'ico-registerService.png', OpenExternalWindow:true},
                    {Name:'Reserve a Trade Name',Url:'https://services.mec.gov.qa/enu/start.swe?SWECmd=GotoView&SWEView=MEC+Trade+Names+Reg+General+Instructions+View+eService',RequireLogin:false , Icon:'ico-reserveTradeName.png', OpenExternalWindow:true},
                    {Name:'PrintOffs Validation',Url:'BarCodeSearchView',RequireLogin:true,Icon:'ico-myRequests.png', OpenExternalWindow:false}
                ]
		},

		{
			itemId:"AdminServicesView",
			items: [{Name:'Renew Commercial Registration',Url:'https://services.mec.gov.qa/enu/start.swe?SWECmd=GotoView&SWEView=MEC+Renewal+General+Instructions+View+eService', OpenExternalWindow:true},
             {Name:'Renew Commercial Permit',Url:'https://services.mec.gov.qa/enu/start.swe?SWECmd=GotoView&SWEView=MEC+CP+Renew+General+Instructions+View+eService', OpenExternalWindow:true},
             {Name:'Change Trade Name',Url:'https://services.mec.gov.qa/enu/start.swe?SWECmd=GotoView&SWEView=MEC+Change+Services+General+Instructions+View+eService', OpenExternalWindow:true},
             {Name:'Change Signatories',Url:'https://services.mec.gov.qa/enu/start.swe?SWECmd=GotoView&SWEView=MEC+Change+Services+General+Instructions+View+eService', OpenExternalWindow:true},
             {Name:'Terminate Branch',Url:'https://services.mec.gov.qa/enu/start.swe?SWECmd=GotoView&SWEView=MEC+Delete+CR+General+Instructions+View+eService', OpenExternalWindow:true},
             {Name:'Terminate Main Commercial Registration',Url:'https://services.mec.gov.qa/enu/start.swe?SWECmd=GotoView&SWEView=MEC+Delete+CR+General+Instructions+View+eService', OpenExternalWindow:true}
            ]
		}


	],

	Views: [

		{
			itemId:"MyBisunessFixed",
			description: "",
			cls: "ltr-cls",
			items:
			[
				{itemId:"lblTitle", "xtype": "label","value":"My Establishments"},
				{itemId:"lblWrongInfo", xtype: "label",value:"In case of wrong information, please contact the ministry on hot line <a href='tel:16001' style='padding:0'>16001</a>"},
				{itemId:"lstEstablishments", "xtype": "cls","value":"ltr-cls"}
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
				{itemId:"txtPrintoutType", "xtype": "textfield","value":"Offprint Type"},
				{itemId:"txtDeliveryMethod", "xtype": "textfield","value":"Delivery Method"},
				{itemId:"txtNoOfCopies", "xtype": "textfield","value":"No of Copies"},
				{itemId:"btnPrintoffsNext", "xtype": "button","value":"Next"},
				{itemId:"lblTitle", "xtype": "label","value":"Offprint Request"}
			]
		},

		{
			itemId:"PrintOffsView2",
			description: "",
			items:
			[
				{itemId:"pnlData", "xtype": "cls","value":"ltr-cls"},
				{itemId:"lbl1", "xtype": "label","value":"Offprint Type"},
				{itemId:"lbl2", "xtype": "label","value":"No Of Copies"},
				{itemId:"lbl3", "xtype": "label","value":"Establishment Name"},
				{itemId:"lbl4", "xtype": "label","value":"Total Fees"},
				{itemId:"lbl5", "xtype": "label","value":"Request Number"},
				{itemId:"lbl6", "xtype": "label","value":"Request Status"},
				{itemId:"btnPrintoffs2Next", "xtype": "button","value":"Confirm & Pay"},
				{itemId:"lblTitle", "xtype": "label","value":"Offprint Request"}
			]
		},


		{
			itemId:"PrintOffsView3",
			description: "",
			items:
			[
				{itemId:"lblTitle", "xtype": "label","value":"Offprint Request"}
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
				{itemId:"lbl15", "xtype": "label","value":"Establishment Registration Number"},

				{itemId:"titlebar1", "xtype": "titlebar","value":"Establishment Information"},
				{itemId:"titlebar2", "xtype": "titlebar","value":"Business Activities"},
				{itemId:"titlebar3", "xtype": "titlebar","value":"Branches"},
				{itemId:"titlebar4", "xtype": "titlebar","value":"Signatories"},

				{itemId:"EstablishmentInfo", "xtype": "cls","value":"ltr-cls"},
				{itemId:"pnlData", "xtype": "cls","value":"ltr-cls"},
				{itemId:"BusinessActivities", "xtype": "cls","value":"ltr-cls"},
				{itemId:"Branches", "xtype": "cls","value":"ltr-cls"},
				{itemId:"Signatories", "xtype": "cls","value":"ltr-cls"}
			]
		},




{
			itemId:"BarCodeEstablishmentDetails",
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
				{itemId:"lbl15", "xtype": "label","value":"Establishment Registration Number"},

				{itemId:"titlebar1", "xtype": "titlebar","value":"Establishment Information"},
				{itemId:"titlebar2", "xtype": "titlebar","value":"Business Activities"},
				{itemId:"titlebar3", "xtype": "titlebar","value":"Branches"},
				{itemId:"titlebar4", "xtype": "titlebar","value":"Signatories"},

				{itemId:"EstablishmentInfo", "xtype": "cls","value":"ltr-cls"},
				{itemId:"pnlData", "xtype": "cls","value":"ltr-cls"},
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
			itemId:"TradeNameAvailabilityView",
			description: "",
			items:
			[
				{itemId:"lblTitle", "xtype": "label","value":"Trade Name Availability Search"},
				{itemId:"txtActivityName", "xtype": "textfield","value":"Trade Name"},
				{itemId:"fsForm", "xtype": "cls","value":"ltr-cls"},
				{itemId:"lstTradeNameResults", "xtype": "cls","value":"ltr-cls"},
				{itemId:"btnSubmit", "xtype": "button","value":"Search"}
			]
		},


		{
			itemId:"BarCodeSearchView",
			description: "",
			items:
			[
				{itemId:"lblTitle", "xtype": "label","value":"PrintOffs Validation"},
				{itemId:"lblHelp", "xtype": "label","value":"This Service Allows to Display the details of CR and CP PrintOffs"},
				{itemId:"fsForm", "xtype": "cls","value":"ltr-cls"},
				{itemId:"btnSearch", "xtype": "button","value":"Search"}
			]
		},


		{
			itemId:"tradenameavailabilityview1",
			description: "",
			items:
			[
				{itemId:"lblTitle", "xtype": "label","value":"Business Activity Search"},
				{itemId:"txtActivity", "xtype": "textfield","value":"Business Activity"},
				{itemId:"btnSubmitActivity", "xtype": "button","value":"Search"},
				{itemId:"lstTradeActivityResults", "xtype": "cls","value":"ltr-cls"} ,
				{itemId:"fsForm", "xtype": "cls","value":"ltr-cls"}

		 
			]
		},





		{
			itemId:"InvestorServiceView",
			description: "",
			items:
			[
				{itemId:"lblInvestor", "xtype": "label","value":"Investor Services"},
				{itemId:"lstLinks1", "xtype": "cls","value":"ltr-cls"}
			]
		},

		{
			itemId:"RecallsView",
			description: "",
			items:
			[
				{itemId:"lblTitle", "xtype": "label","value":"Recalls"},
				{itemId:"lstRecalls", "xtype": "cls","value":"ltr-cls"}
			]
		},


	{
			itemId:"ViolationsView",
			description: "",
			items:
			[
				{itemId:"lblTitle", "xtype": "label","value":"Violations"},
				{itemId:"lstViolations", "xtype": "cls","value":"ltr-cls"}
			]
		},


		{
			itemId:"RecallDetailsView",
			description: "",
			items:
			[
				{itemId:"lblTitle", "xtype": "label","value":"Recalls"},
				{itemId:"pnl1", "xtype": "cls","value":"ltr-cls"},
				{itemId:"pnl2", "xtype": "cls","value":"ltr-cls"},
				{itemId:"pnl3", "xtype": "cls","value":"ltr-cls"},
				{itemId:"lbl1", "xtype": "label","value":"Issue"},
				{itemId:"lbl2", "xtype": "label","value":"Procedure"},
				{itemId:"lbl3", "xtype": "label","value":"Contact the Owner"}

			]
		},


				{
			itemId:"ViolationsDetailsView",
			description: "",
			items:
			[
				{itemId:"lblTitle", "xtype": "label","value":"Violations"},
				{itemId:"pnl1", "xtype": "cls","value":"ltr-cls"},
				{itemId:"pnl2", "xtype": "cls","value":"ltr-cls"},
				{itemId:"pnl3", "xtype": "cls","value":"ltr-cls"},
				{itemId:"pnl4", "xtype": "cls","value":"ltr-cls"},
				{itemId:"lbl1", "xtype": "label","value":"Violating Shop"},
				{itemId:"lbl2", "xtype": "label","value":"Violation"},
				{itemId:"lbl3", "xtype": "label","value":"Punishment"},
				{itemId:"lbl4", "xtype": "label","value":"Decision Number"}

			]
		},

		{
			itemId:"ConsumerEducationView",
			description: "",
			items:
			[
				{itemId:"lblTitle", "xtype": "label","value":"Consumer Awareness"},
				{itemId:"lstEducation", "xtype": "cls","value":"ltr-cls"}
				

			]
		},

		{
			itemId:"InvestorEducationView",
			description: "",
			items:
			[
				{itemId:"lblTitle", "xtype": "label","value":"Investor Awareness"},
				{itemId:"lstEducation", "xtype": "cls","value":"ltr-cls"}
				

			]
		},

{
			itemId:"MinistryBranchesView",
			description: "",
			cls:'ltr-cls',
			items:
			[
				{itemId:"viewLbl", "xtype": "label","value":"Branches"},
				{itemId:"lblGoTo", "xtype": "label","value":"Get Directions"}
				
				

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
				{itemId:"txtUserName", "xtype": "textfield","value":"ID Number"},
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
				{itemId:"btnProjects", xtype: "label",value:"Projects & Initiatives"},
				{itemId:"homeContact", xtype: "label",value:"Connect"},
				{itemId:"home-links", "xtype": "cls","value":"ltr-cls"},
				{itemId:"NewsCarousel", "xtype": "cls","value":"ltr-cls"}
				
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
			itemId:"NewsDetailsView",
			description: "News Details",
			items:
			[
				{itemId:"NewsDetailsPanel", xtype: "cls", value:"ltr-cls"},
				{itemId:"lblUrl", xtype: "label", value:"Read the Full Article"}
			]
		},

		{
			itemId:"MinistryNewsList",
			description: "Ministry News...",
			cls: 'ltr-cls',
			items:[]
		},

		{
			itemId:"InquiriesView",
			description: "Inquiries & Extracts...",
			items:
			[
				{itemId:"viewLbl", xtype: "label",value:"Inquiries & Extracts"},
				{itemId:"lstViewLinks", xtype: "cls",value:"ltr-cls"}
			]
		},


		{
			itemId:"ReportsView",
			description: "Reports..",
			items:
			[
				{itemId:"viewLbl", xtype: "label",value:"Indicators & Reports"},
				{itemId:"lstViewLinks", xtype: "cls",value:"ltr-cls"}
			]
		},


		{
			itemId:"ConnectView",
			description: "Connect...",
			items:
			[
				{itemId:"viewLbl", xtype: "label",value:"Connect"},
				{itemId:"lstViewLinks", xtype: "cls",value:"ltr-cls"}
			]
		},


		{
			itemId:"ContactUsView",
			description: "Contact Us...",
			cls: "ltr-cls",
			items:
			[
				{itemId:"viewLbl", xtype: "label",value:"Contact Us"},
				{itemId:"ContactUsTitle", xtype: "label",value:"Contact Us"},
				{itemId:"MailTitle", xtype: "label",value:"E-mail"}
			]
		},

		{
			itemId:"AboutView",
			description: "About Ministry",
			cls: "ltr-cls",
			items:
			[
				{itemId:"viewLbl", xtype: "label",value:"About Ministry"},
			
				{itemId:"AboutMinstryTxt", xtype: "cls",value:"ltr-cls"}
			]
		},



		{
			itemId:"AboutAppView",
			description: "About App",
			cls: "ltr-cls",
			items:
			[
				{itemId:"viewLbl", xtype: "label",value:"About the Application"},
				{itemId:"AboutMinstryTxt", xtype: "label",value:"The application of the Ministry of Economy and Commerce in Qatar, contains many of the services provided by the ministry for the investor and the consumer, including search services for the commercial names and business activities, request the commercial documents, request and buy supply goods and services, query on the prices of goods, following up all the shops closures and products calls, explore the most important economic indicators and commercial reports, Send complaints and suggestions."},
				{itemId:"MalText", xtype: "label",value:"Developed by Malomatia (Q.S.C)"},
				{itemId:"AboutMinstryTxt", xtype: "cls",value:"ltr-cls"},
				{itemId:"beta", xtype: "label",value:"Initial run for new services"}
			]
		},




		{
			itemId:"ComplaintsView",
			description: "Complaints...",
			cls: "ltr-cls",
			items:
			[
				{itemId:"frmComplaint", xtype: "cls",value:"ltr-cls"},
				{itemId:"viewLbl", xtype: "label",value:"Report Complaint"},
				{itemId:"shopName", xtype: "textfield",value:"Store Name"},
				{itemId:"shopLocation", xtype: "textfield",value:"Store Location"},
				{itemId:"txtCategory", xtype: "textfield",value:"Complaint Type"},
				{itemId:"txtComplaint", xtype: "textfield",value:"Complaint Description"},
				{itemId:"fullName", xtype: "textfield",value:"Full Name"},
				{itemId:"email", xtype: "emailfield",value:"Email"},
				{itemId:"mobile", xtype: "numberfield",value:"Mobile"},
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
			cls: "ltr-cls",
			items:
			[
				{itemId:"viewLbl", xtype: "label",value:"Supply Services Request Form"},
				{itemId:"itemQuantityTitle", xtype: "titlebar",value:"Items and Quantities", align:"left"},
				{itemId:"frmSupplyService1", xtype: "cls",value:"ltr-cls"},
				{itemId:"btnSupplyNext1", xtype: "button",value:"Next"},
				{itemId:"lblAllowedQuantities", xtype: "label",value:"Quantities above are the available quantities in user's balance"}
			]
		},


		{
			itemId:"SupplyServiceView2",
			description: "Supply Services...",
			cls: "ltr-cls",
			items:
			[
				{itemId:"viewLbl", xtype: "label",value:"Supply Services Request Form"},
				{itemId:"btnSupplyNext2", xtype: "button",value:"Next"},
				{itemId:"lblGoTo", xtype: "label",value:"Get Directions"},
				{itemId:"set1", "xtype": "cls",value:"ltr-cls"},
				{itemId:"radRequestNearby", "xtype": "radiofield",value:"Nearby Dealers"},
				{itemId:"radRequestAll", "xtype": "radiofield",value:"All Dealers"} 
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
			cls: "ltr-cls",
			items:
			[
	
				{itemId:"viewLbl", xtype: "label",value:"Supply Services Nearby Distributor"},
				{itemId:"lblGoTo", "xtype": "label",value:"Get Directions"},
				{itemId:"set1", "xtype": "cls",value:"ltr-cls"},
				{itemId:"radDisplayNear", "xtype": "radiofield",value:"Nearby Dealers"},
				{itemId:"radDisplayAll", "xtype": "radiofield",value:"All Dealers"}
			]
		},
		{
			itemId:"SupplyServiceMyData",
			description: "Supply Service Nearby Dealer",
			cls: "ltr-cls",
			items:
			[
	
				{itemId:"viewLbl", xtype: "label",value:"My Family Details"},
				{itemId:"lblWrongInfo", xtype: "label",value:"In case of wrong information, please contact the ministry on hot line <a href='tel:16001' style='padding:0'>16001</a>"},
				{itemId:"pnlFamily", xtype: "cls",value:"ltr-cls"},
				{itemId:"pnlUser", xtype: "cls",value:"ltr-cls"},
				{itemId:"lblName1", xtype: "label",value:"User Name"},
				{itemId:"lblID1", xtype: "label",value:"QID"},
				{itemId:"lblMobile1", xtype: "label",value:"Mobile Number"},
				{itemId:"familyTitle", xtype: "titlebar",value:"Family Members", align:"left"}
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
			itemId:"TradeExchangeView",
			description: "",
			items:
			[
				{itemId:"lblTitle", xtype: "label",value:"Trade Exchange Reports"},
				{itemId:"lstViewLinks", xtype: "cls",value:"ltr-cls"}

			]
		},

		{
			itemId:"EconomicIndicatorsListing",
			description: "Economic Indicators Listing",
			cls:"ltr-cls",
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
			cls:"ltr-cls",
			description: "Goods Prices",
			items:
			[
				{itemId:"lblTitle", xtype: "label",value:"Consumer Goods Prices"},
				{itemId:"lblLastUpdate", xtype: "label",value:"Last Updated "},
				{itemId:"ShopsContainer", xtype: "container",value:"Shops"},
				{itemId:"GoodsContainer", xtype: "container",value:"Goods"},
				{itemId:"GoodsPricesList", xtype: "cls",value:"ltr-cls"},
				{itemId:"lstShops", xtype: "cls",value:"ltr-cls"},
				{itemId:"lstProducts", xtype: "cls",value:"ltr-cls"}
			]
		},


		{
			itemId:"DailyPricesView",
			description: "Daily Prices",
			cls:"ltr-cls",
			items:
			[
				{itemId:"lblTitle", xtype: "label",value:"Daily Prices"},
				{itemId:"lblLastUpdate", xtype: "label",value:"Last Updated "},
				{itemId:"lstPrices", xtype: "cls",value:"ltr-cls"},
				{itemId:"lstPrices", xtype: "emptyText",value:"No Data Available"},
				{itemId:"lstPrices1", xtype: "emptyText",value:"No Data Available"},
				{itemId:"lstPrices2", xtype: "emptyText",value:"No Data Available"},
				{itemId:"PricesGrid", xtype: "cls",value:"ltr-cls"},
				{itemId:"ProductName1", xtype: "label",value:"Product Name"},
				{itemId:"ProductPrice1", xtype: "label",value:"Price(QAR) / Kilo"},
				{itemId:"ProductName2", xtype: "label",value:"Product Name"},
				{itemId:"ProductPrice2", xtype: "label",value:"Price(QAR) / Kilo"},
				{itemId:"ProductName3", xtype: "label",value:"Product Name"},
				{itemId:"ProductPrice3", xtype: "label",value:"Price(QAR) / Kilo"},
				{itemId:"VegentsblesContainer", xtype: "container",value:"Vegetables"},
				{itemId:"FruitsContainer", xtype: "container",value:"Fruits"},
				{itemId:"FishContainer", xtype: "container",value:"Fish"},
				{itemId:"mysearchfield", xtype: "searchfield",value:"Search"},
				{itemId:"mysearchfield1", xtype: "searchfield",value:"Search"},
				{itemId:"mysearchfield2", xtype: "searchfield",value:"Search"}



			]
		},


		{
			itemId:"WhereToShopView",
			description: "Where to Shop",
			cls:'ltr-cls',
			items:
			[
				{itemId:"lblTitle", xtype: "label",value:"Where to Shop"},
				{itemId:"lblLastUpdate", xtype: "label",value:"Last Updated "},
				{itemId:"txtProductName", "xtype": "textfield","value":"Choose Product"},
				{itemId:"lstPrices", xtype: "cls",value:"ltr-cls"},
				{itemId:"ShopName", xtype: "label",value:"Shop Name"},
				{itemId:"Quantity", xtype: "label",value:"Quantity"},
				{itemId:"Price", xtype: "label",value:"Price (QAR)"}
			]
		},

	{
			itemId:"GoodPriceListView",
			description: "",
			items:
			[
				{itemId:"shopName", xtype: "label",value:"Shop Name"}
			]
		},



		{
			itemId:"BusinessIndicatorsView",
			description: "Business Indicators",
			cls:'ltr-cls',
			items:
			[
				{itemId:"lblViewTitle", xtype: "label",value:"Business Indicators"},
				{itemId:"NewCommercialReg", "xtype": "label", "value":"New CRs"},
				{itemId:"ValueQAR", xtype: "label",value:"Value (QAR)"},
				{itemId:"ValueQAR2", xtype: "label",value:"Value (QAR)"},
				{itemId:"MainCrs", xtype: "label",value:"Main Commercial Registrations"},
				{itemId:"MainCrs2", xtype: "label",value:"Main Commercial Registrations"},
				{itemId:"BranchCRs", xtype: "label",value:"Branch Commercial Registrations"},
				{itemId:"RenewedCRs", xtype: "label",value:"Renewed CRs"},
				{itemId:"BranchCRs2", xtype: "label",value:"Branch Commercial Registrations"},
				{itemId:"GridHeader", xtype: "cls",value:"ltr-cls"},
				{itemId:"GridSubHeader", xtype: "cls",value:"ltr-cls"},
				{itemId:"grdMainCRs", xtype: "cls",value:"ltr-cls"},
				{itemId:"GridSubHeader1", xtype: "cls",value:"ltr-cls"},
				{itemId:"grdSubCRs", xtype: "cls",value:"ltr-cls"},
				{itemId:"GridHeader1", xtype: "cls",value:"ltr-cls"},
				{itemId:"GridSubHeader2", xtype: "cls",value:"ltr-cls"},
				{itemId:"grdMainCRs2", xtype: "cls",value:"ltr-cls"},
				{itemId:"GridSubHeader3", xtype: "cls",value:"ltr-cls"},
				{itemId:"grdSubCRs2", xtype: "cls",value:"ltr-cls"},
				{itemId:"txtFilter", xtype: "textfield",value:"Report"}
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
				{itemId:"btnProjects", "xtype": "button","value":"Projects & Initiatives"},
				{itemId:"btnReports", "xtype": "button","value":"Indicators & Reports"},
				{itemId:"btnSettings", "xtype": "button","value":"Settings"},
				{itemId:"btnLogin", "xtype": "button","value":"Login"},
				{itemId:"btnLogout", "xtype": "button","value":"Logout"},
				{itemId:"btnAboutApp", "xtype": "button","value":"About the Application"}

			]

		},


		{
			itemId:"ProjectsView",
			description: "Projects",
			items:
			[
				{itemId:"lblTitle", xtype: "label",value:"Projects & Initiatives"},
				{itemId:"lstProjects", xtype: "cls",value:"ltr-cls"}
			]
		},


		{
			itemId:"ProjectDetailsView",
			description: "Projects Details",
			cls: "ltr-cls",
			items:
			[
				{itemId:"InitiativeName", xtype: "label",value:"Initiative Name"},
				{itemId:"AboutInitiative", xtype: "label",value:"About The Initiative"},
				{itemId:"ContactInfo", xtype: "label",value:"Contact Information"}
			]
		},

		{
			itemId:"SupplyServiceHowTo",
			description: "How to Request Supply Service",
			cls: "ltr-cls",
			items:
			[
				{itemId:"lblTitle", xtype: "label",value:"How to Request Supply Service"},
				{itemId:"GeneralInfo", xtype: "label",value:"If you possess a food supply card, you can login and request the food supply service by entering your Qatari ID number and the password that you have selected when creating the account through the app, and you will then receive a text message to activate your account.<br/><ol>If you do not possess a food supply card, please go to <a id=lnk1 href='#'> the  following link</a> and complete the form, attach it to an email and send to the following address: <a href='mailto:Tamween@mec.gov.qa'>Tamween@mec.gov.qa</a><br/>If you have any queries, please contact the supply department by telephone on: <a href='tel:44378160'>4437 8160</a> / <a href='tel:44378162'>4437 8162</a>, or by email: <a href='mailto:Tamween@mec.gov.qa'>Tamween@mec.gov.qa</a><br/>Alternatively, you can visit our offices, located in Al Muntaza area, Al Rawabi Street."},
				{itemId:"SuppliesCardTitle2", xtype: "label",value:"The following documents are required when applying for a food supply card"},
				{itemId:"SuppliesCardDesc2", xtype: "label",value:"<ol><li>A copy of the Qatari ID card of the husband, wife and family members</li><li>Marriage certificate if you do not have children</li></ol><br/> * If you do not have ID cards for your children, they can be registered using their birth certificates, ensuring that the personal numbers are visible."},
				{itemId:"SuppliesCardTitle", xtype: "label",value:"Please note that specific documents are required in the following cases"},
				{itemId:"SuppliesCardDesc", xtype: "label",value:"<ol><li>In the case of the death of the head of the family<ul><li>A copy of the death certificate</li><li>A copy of the Qatari ID card or birth certificate for children</li></ul></li><li>In the event of divorce<ul><li>A copy of the divorce certificate</li><li>A copy of the identity card</li><li>A copy of the birth certificate for children</li><li>A copy of the proof of custody of children certificate</li></ul></li></ol>"},
				{itemId:"FodderCardTitle", xtype: "label",value:"Documents required for fodder supply card"},
				{itemId:"FodderCardDesc", xtype: "label",value:"<ol><li>A copy of the Qatari ID card</li><li>Possession of livestock management certificate issued by the Ministry of Environment</li></ol>"},
				{itemId:"SuppliesCardTitle1", xtype: "label",value:"Food Supply distribution mechanism"},
				{itemId:"SuppliesCardDesc1", xtype: "label",value:"<ol><li>Rice and sugar<ul><li>1 bag of rice and 1 bag of sugar for each three members of the family per month</li></ul></li><li>Oil and milk<ul><li>1 box of oil and 1 box of milk for each four members of the family per month</li></ul></li></ol>"},
			]
		},

		{
			itemId:"SupplyServiceDepartmentServices",
			description: "How to Request Supply Service",
			items:
			[
				{itemId:"lblTitle", xtype: "label",value:"Department Services"}
			]
		},

		{
			itemId:"FeedbackFormView",
			description: "",
			cls: "ltr-cls",
			items:
			[
				{itemId:"lblTitle", xtype: "label",value:"Suggestions"},
				{itemId:"txtFullName", xtype: "textfield",value:"Full Name"},
				{itemId:"txtEmail", xtype: "emailfield",value:"E-mail"},
				{itemId:"txtMobile", xtype: "numberfield",value:"Phone"},
				{itemId:"txtComment", xtype: "textareafield",value:"Suggestion"},
				{itemId:"lblAttachImage1", xtype: "label",value:"Attach Photo"},
				{itemId:"btnSubmitComplaint1", xtype: "button",value:"Send"},
				{itemId:"FeedbackForm", xtype: "cls",value:"ltr-cls"}
			]
		},






		{
			itemId:"EconomicIndicatorsView",
			description: "Economic Indicators",
			cls:"ltr-cls",
			items:
			[
				{itemId:"lstIndicators", xtype: "cls",value:"ltr-cls"}
			]
		},

		{
			itemId:"EconomicIndicatorsDetailsView",
			description: "Economic Indicators Details",
			cls:"ltr-cls",
			items:
			[
				{itemId:"lblLastUpdate1", xtype: "label",value:"Last Updated"},
				{itemId:"lblWhatIS", xtype: "label",value:"What is "},
				{itemId:"lblLink", xtype: "label",value:"View Report (PDF)"}
			]
		},

		{
			itemId:"ShopPriceListView",
			description: "",
			cls: "ltr-cls",
			items:
			[				
			{itemId:"lblPrice", xtype: "label",value:"Price (QAR)"},
			{itemId:"productName", xtype: "label",value:"Product"}			
			]
		},

		{
			itemId:"GoodPriceListView",
			description: "",
			cls: "ltr-cls",
			items:
			[				
			{itemId:"lblPrice", xtype: "label",value:"Price (QAR)"},
			{itemId:"shopName", xtype: "label",value:"Shop"}			
			]
		},

		{
			itemId:"EconomicIndicatorsBrief",
			description: "",
			cls: "ltr-cls",
			items:
			[]
		},

		{
			itemId:"TradeNameEstablishmentDetails",
			description: "",
			cls: "ltr-cls",
			items:
			[				
			{itemId:"mytitlebar", xtype: "titlebar",value:"Establishment Information"},
			{itemId:"CRArabicName", xtype: "label",value:"Establishment Arabic Name"},
			{itemId:"CREnglishName", xtype: "label",value:"Establishment English Name"},
			{itemId:"CompanyCapital", xtype: "label",value:"Capital"},
			{itemId:"establishmentLegalForm", xtype: "label",value:"Legal Form"},
			{itemId:"establishmentType", xtype: "label",value:"Establishment Type"},
			{itemId:"establishmentRegNumber1", xtype: "label",value:"MOI Establishment Number"},
			{itemId:"commercialRegistration", xtype: "label",value:"CR Number"},
			{itemId:"commercialRegistrationIssueDate", xtype: "label",value:"CR Issuance Date"},
			{itemId:"commercialRegistrationExpiryDate", xtype: "label",value:"CR Expiry Date"},
			{itemId:"commercialRegistrationStatus", xtype: "label",value:"CR Status"},
			{itemId:"commercialPermit", xtype: "label",value:"CP Number"},
			{itemId:"commercialPermitExpiryDate", xtype: "label",value:"CP Expiry Date"},
			{itemId:"commercialPermitStatus", xtype: "label",value:"CP Status"},
			{itemId:"establishmentDate", xtype: "label",value:"Establishment Date"},
			{itemId:"establishmentStatus", xtype: "label",value:"Establishment Status"},
			{itemId:"mytitlebar2", xtype: "titlebar",value:"Business Activities"},
			{itemId:"mytitlebar3", xtype: "titlebar",value:"Branches"},
			{itemId:"mytitlebar4", xtype: "titlebar",value:"Signatories"}
			]
		},

		{
			itemId:"TradeNameBranchDetails",
			description: "",
			cls: "ltr-cls",
			items:
			[
			{itemId:"mytitlebar", xtype: "titlebar",value:"Branch Information"},		
			{itemId:"commercialRegistrationNumber", xtype: "label",value:"CR Number"},
			{itemId:"commercialRegistrationIssueDate1", xtype: "label",value:"CR Issuance Date"},
			{itemId:"commercialRegistrationExpiryDate1", xtype: "label",value:"CR Expiry Date"},
			{itemId:"commercialRegistrationStatus1", xtype: "label",value:"CR Status"},
			{itemId:"CREnglishName1", xtype: "label",value:"Branch English Name"},
			{itemId:"CRArabicName1", xtype: "label",value:"Branch Arabic Name"},
			{itemId:"CompanyCapital1", xtype: "label",value:"Capital"},
			{itemId:"commercialPermit1", xtype: "label",value:"CP Number"},
			{itemId:"commercialPermitStatus1", xtype: "label",value:"CP Status"},
			{itemId:"commercialPermitExpiryDate1", xtype: "label",value:"CP Expiry Date"},
			{itemId:"establishmentDate1", xtype: "label",value:"Establishment Date"},
			{itemId:"establishmentType1", xtype: "label",value:"Establishment Type"},
			{itemId:"establishmentLegalForm1", xtype: "label",value:"Legal Form"},
			{itemId:"establishmentStatus1", xtype: "label",value:"Establishment Status"},
			{itemId:"establishmentRegNumber1", xtype: "label",value:"MOI Establishment Number"},
			{itemId:"mytitlebar2", xtype: "titlebar",value:"Business Activities"},
			{itemId:"mytitlebar3", xtype: "titlebar",value:"Signatories"}
			]
		},

		{
			itemId:"GenericSelectView",
			description: "",
			items:
			[
				
				{itemId:"lstLinks", xtype: "cls",value:"ltr-cls"}

			]
		}






	],

	Messages: {
		StockNotFound:'There is no stock avaialble at the selected dealer',
		EstName:'Report Name',
		CmpnyName:'Company Name',
		Choose:'Choose',
		Cancel:'Cancel',
		PrintType1:'CR Offprint - Arabic',
		PrintType2: 'CR Offprint - English',
		PrintType3: 'CP Replacement',
		PrintType4: 'CR Clearance Certificate'	,
		PrintType: 'Offprint Type' ,
		DeliveryMethod: 'Delivery Method',
		Personal: 'Personal',
		Email: 'Email',
		ActiveRequestError: 'There is already active request of the same type for this establishment',
		Error: 'Error',
		OK: 'Ok',
		ErrSearchKeyword: 'Please enter the search keyword',
		GenericError: 'Sorry, an error has occured, please try again',
		Confirm:'Confirm',
		CaseSubmitted:'Request has been submitted to MEC, Thank you for using MEC Mobile Application',
		LocationNotEnabled:'It is recommended to enable location service before using this feature',
		errPrintType: 'Please choose the Offprint Type \n',
		errCompanyCr: 'Please choose the Establishment \n',
		errDeliveryMethod:'Please choose the Delivery Method \n',
		cantSubmitCR:'This establishment doesn\'t have Commercial Registeration',
		cantSubmitCP:'This establishment doesn\'t have Commercial Permit',
		FeedbackSubmitted:'Thanks for sending your Feedback',
		Thanks:'Thanks',
		ErrNocrcp:"Sorry, this reserved name is not associated with an establishment yet",
		errShopName:'Please enter shop name\n',
        errComplaintType:'Please select complaint type\n',
        errComplaintText:'Please enter your complaint\n',
        errFullName:'Please enter full name\n',
        errMobile:'Please enter mobile number\n',
        errUserName:'Please enter the ID Number\n',
        errPassword:'Please enter password\n',
        errSuggestion: 'Please enter your suggesstion\n',
        errMail: 'Please enter correct email address\n',
        Failure: 'Sorry, an error has occured, please try again',
        errUserPass: 'Username or Password is not correct',
        errConnection: 'Sorry, an error has occured, please try again',
        errSuccess: 'This Service is temporary unavailable, please try again later',
        errNoSearchData: 'No data matches your search query',
        NoData: 'Sorry, no data available',
        Message:'Message',
        NoDataPrintoffs:'You can\'t submit offprint request for CR or CP because you don\'t have any establishments',
        errNOC:'You can\'t request this certificate because you have associated establishments',
        NoDataSupply: 'You don\'t have data in the supply system',
        ComplaintsConfirmation:'Thank You, your complaint has been sent successfully',
        FeedbackConfirmation:'Thank You, your Feedback has been sent successfully',
        GeneralError: 'Sorry, an error has occured, please try again',
        ComplaintType1:'Commercial Fraud',
        ComplaintType2:'Price Not Announced',
        ComplaintType3:'Bad Service',
        ComplaintType4:'Other',
        ComplaintType:'Complaint Type',
        Product: 'Product',
        readnews: 'Read Full News',
        errSelectDealer: 'Please Select Dealer',
        FamilyBlockedSupply: 'Your Supply card is blocked on the system, Please contact the Ministry for More Details',
        invalidInputError: 'Sorry, an Error has occured',
        contactError: 'Sorry, There is missing user information',
        EstablishmentError: 'Sorry, There is missing Establishment information',
        SelectProduct:'Select Product',
        SelectReport: 'Select Report',
		errSupplyQuantity:'Please select at least 1 item Quantity',
        LoadMore: 'Load More...',
		NoMoreInfo: 'No More Records',
		BizIndicatorsTitleNewCR :'New CRs',
		BizIndicatorsTitleReNewCR :'Renewed CRs',
		BizIndicatorsTitleNewCP :'New CPs',
		BizIndicatorsTitleReNewCP :'Renewed CPs',
		ErrSessionExpired: 'Your Session has Expired, Please login Again',
		errWrongBarCodeInput:'Wrong input, Please scan a Barcode from Official MEC CR or CP Documents'	
	}

}
