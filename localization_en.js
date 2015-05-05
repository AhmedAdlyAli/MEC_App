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
				{Name:"Supply Services", Url:"SupplyServiceView1", RequireLogin:true, Icon:"ico-supplyService.png"}
			]
		},
	],

	Views: [
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
				{itemId:"homeInquire", xtype: "label",value:"Inquiries & Publications"},
				{itemId:"homeReports", xtype: "label",value:"Reports"},
				{itemId:"btnProjects", xtype: "label",value:"Projects"},
				{itemId:"homeContact", xtype: "label",value:"Contact Us"}

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
				{itemId:"lstLinks", xtype: "cls",value:"ltr-cls"},

			]
		},


		{
			itemId:"ConsumerServiceView",
			description: "Consumer Services...",
			items:
			[
				{itemId:"lblConsumer", xtype: "label",value:"Consumer Services"},
				{itemId:"lstLinks2", xtype: "cls",value:"ltr-cls"},

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
				{itemId:"btnInquiry", "xtype": "button","value":"Inquiries & Publications"},
				{itemId:"btnMedai", "xtype": "button","value":"Media Center"},
				{itemId:"btnContact", "xtype": "button","value":"Reports"},
				{itemId:"btnProjects", "xtype": "button","value":"Contact Us"},
				{itemId:"btnReports", "xtype": "button","value":"Reports"},
				{itemId:"btnSettings", "xtype": "button","value":"Settings"},
				{itemId:"btnLogin", "xtype": "button","value":"Login"},
				{itemId:"btnLogout", "xtype": "button","value":"Logout"}

			]

		}




	]



}
