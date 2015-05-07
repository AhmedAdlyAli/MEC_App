var localeAr = 

{
	Name : "Arabic translation",
	LanguageCode : "ar",
	Links: [
		{
			itemId:"PublicServiceView",
			items: [
				{Name:"خدمات المستثمر", Url:"InvestorServiceView", RequireLogin:false, Icon:"ico-investorService.png"},
				{Name:"خدمات المستهلك", Url:"ConsumerServiceView", RequireLogin:false, Icon:"ico-consumerService.png"}
			]
		},

		{
			itemId:"ConsumerServiceView",
			items: [
				{Name:"ابلاغ عن شكوي", Url:"ComplaintsView", RequireLogin:false, Icon:"ico-complaints.png"},
				{Name:"خدمات التموين", Url:"SupplyServiceListing", RequireLogin:false, Icon:"ico-supplyService.png"}
			]
		},
		{
			itemId:"SupplyServiceListing",
			items: [
				{Name:"كيفية الحصول علي خدمات التموين", Url:"SupplyServiceHowTo", RequireLogin:false, Icon:"ico-supplyService.png"},
				{Name:"بياناتي", Url:"SupplyServiceMyData", RequireLogin:true, Icon:"ico-supplyService.png"},
				{Name:"نموذج طلب التموين", Url:"SupplyServiceView1", RequireLogin:true, Icon:"ico-supplyService.png"},
				{Name:"أقرب منفذ توزيع", Url:"SupplyServiceNearestDealer", RequireLogin:false, Icon:"ico-supplyService.png"},
				{Name:"خدمات الادارة", Url:"SupplyServiceDepartmentServices", RequireLogin:false, Icon:"ico-supplyService.png"}
			]
		},

		{
			itemId:"MediaCenterView",
			items: [
				{Name:"أخبار الوزارة", CatID:1, Icon:"ico-ministry-news.png"},
				{Name:"إنعكاسات", CatID:8, Icon:"ico-news-about.png"},
				{Name:"أخبار جهات رسميه اقليمية مشابهه", CatID:2, Icon:"ico-news-local-similar.png"},
				{Name:"أخبار اقتصادية اقليمية", CatID:4, Icon:"ico-news-local-economic.png"},
				{Name:"أخبار جهات رسميه دولية مشابهه", CatID:6, Icon:"ico-news-international-similar.png"},
				{Name:"أخبار اقتصادية دولية", CatID:9, Icon:"ico-news-international-economic.png"}
			]
		},

		{
			itemId:"InquiriesView",
			items: [
				{Name:"البحث عن اسم تجاري", Url:"TradeNameAvailabilityView", Icon:"ico-search-trade-name.png"},
				{Name:"البحث عن نشاط تجاري", Url:"TradeActivityAvailabilityView", Icon:"ico-search-trade-activity.png"},
				{Name:"الاستدعاءات", Url:"RecallsView", Icon:"ico-recall-item.png"},
				{Name:"ثقافة المستهلك", Url:"ConsumerEducationView", Icon:"ico-consumer-cultuer.png"},
				{Name:"ثقافة المستثمر", Url:"InvestorEducationView", Icon:"ico-investor-culture.png"},
				{Name:"المخالفات والاغلاقات", Url:"ViolationsView", Icon:"ico-violations.png"}
			]
		},

		{
			itemId:"ReportsView",
			items: [
				{Name:'مؤشرات اقتصادية',Url:'EconomicIndicatorsListing', OpenExternalWindow:false, Icon:'ico-economy-indicator.png'},
             	{Name:'مؤشرات الاعمال',Url:'BusinessIndicatorsView',OpenExternalWindow:false,Icon:'ico-work-indicator.png'},
             	{Name:'مؤشرات استهلاكية',Url:'ConsumerIndicatorsListing' ,OpenExternalWindow:false,Icon:'ico-consume-indicators.png'},
             	{Name:'تقرير العلامات التجارية',Url:'http://www.google.com',OpenExternalWindow:true,Icon:'ico-trade.png'}
			]
		},

		{
			itemId:"ConnectView",
			items: [
				{Name:'عن الوزارة',Url:'AboutView',OpenExternalWindow:false, Icon:'about-minstry.png'},
             	{Name:'الفروع',Url:'MinistryBranchesView',OpenExternalWindow:false,Icon:'ico-branches.png'},
             	{Name:'موظفو الوزارة',Url:'http://www.google.com', OpenExternalWindow:true ,Icon:'ico-employees.png'},
             	{Name:'تواصل معنا',Url:'ContactUs2View',OpenExternalWindow:false,Icon:'ico-contact.png'},
             	{Name:'المقترحات',Url:'FeedbackFormView',OpenExternalWindow:false,Icon:'ico-suggesstion.png'}
			]
		},

		{
			itemId:"EconomicIndicatorsListing",
			items: [
				{Name:'مؤشرات اقتصادية شهرية',Url:'EconomicIndicatorsView', Icon:'ico-month.png'},
             	{Name:'مؤشرات اقتصادية ربع سنوية',Url:'EconomicIndicatorsView', Icon:'ico-quarter.png'},
             	{Name:'مؤشرات اقتصادية سنوية',Url:'EconomicIndicatorsView', Icon:'ico-year.png'}
			]
		},

		{
			itemId:"ConsumerIndicatorsListing",
			items: [
				{Name:'النشرة اليومية',Url:'DailyReportView',Icon:'ico-daily-prices.png'},
             	{Name:'اين تتسوق',Url:'WhereToShopView',Icon:'ico-where.png'},
             	{Name:'التقرير الاسبوعي للخضر والفاكهة',Url:'http://www.google.com',Icon:'ico-report.png'}
			]
		},

		{
			itemId:"DailyReportView",
			items: [
				{Name:'الاسعار اليومية',Url:'DailyPricesView', Icon:'ico-daily-prices.png'},
             	{Name:'أسعار السلع الاستهلاكية',Url:'GoodsPricesView', Icon:'ico-consumer-goods.png'}
			]
		}
	],
	Views: [
			{
			itemId:"MainNavView",
			description: "Home...",
			items:
			[
				{itemId:"homeServices", xtype: "label",value:"الخدمات العامة"},
				{itemId:"btnMediaCenter", xtype: "label",value:"المركز الاعلامي"},
				{itemId:"homeInquire", xtype: "label",value:"الاستعلامات والاصدارات"},
				{itemId:"homeReports", xtype: "label",value:"المؤشرات والتقارير"},
				{itemId:"btnProjects", xtype: "label",value:"المبادرات والمشاريع"},
				{itemId:"homeContact", xtype: "label",value:"التواصل"}

			]
		},

		{
			itemId:"SideMenu",
			description: "Side Menu...",
			items:
			[
				{itemId:"btnHome", "xtype": "button","value":"الرئيسية"},
				{itemId:"btnServices", "xtype": "button","value":"الخدمات العامة"},
				{itemId:"btnInquiry", "xtype": "button","value":"المركز الاعلامي"},
				{itemId:"btnMedai", "xtype": "button","value":"الاستعلامات والاصدارات"},
				{itemId:"btnContact", "xtype": "button","value":"التواصل"},
				{itemId:"btnProjects", "xtype": "button","value":"المبادرات والمشاريع"},
				{itemId:"btnReports", "xtype": "button","value":"المؤشرات والتقارير"},
				{itemId:"btnSettings", "xtype": "button","value":"الاعدادات"},
				{itemId:"btnLogin", "xtype": "button","value":"تسجيل الدخول"},
				{itemId:"btnLogout", "xtype": "button","value":"تسجيل الخروج"}

			]

		}		
		]
,
	Messages: {StockNotFound:'لا يوجد رصيد متوفر عند الموزع المختار'}
}
