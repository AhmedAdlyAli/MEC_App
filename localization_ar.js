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
				{Name:"خدمات التموين", Url:"SupplyServiceView1", RequireLogin:true, Icon:"ico-supplyService.png"}
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
				{Name:'عن الوزارة',Url:'AboutMinistryView',OpenExternalWindow:false, Icon:'about-minstry.png'},
             	{Name:'الفروع',Url:'MinistryBranchesView',OpenExternalWindow:false,Icon:'ico-branches.png'},
             	{Name:'موظفو الوزارة',Url:'http://www.google.com', OpenExternalWindow:true ,Icon:'ico-employees.png'},
             	{Name:'تواصل معنا',Url:'ContactUs2View',OpenExternalWindow:false,Icon:'ico-contact.png'},
             	{Name:'المقترحات',Url:'FeedbackFormView',OpenExternalWindow:false,Icon:'ico-suggesstion.png'}
			]
		}
	],
	Views: [
					
		]

}
