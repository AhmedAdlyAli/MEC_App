Ext.define('MEC_App.store.override.PrintOffices', {
    override: 'MEC_App.store.PrintOffices',
    config:{
    data: [
            {
                ItemName: 'نموذج التسجيل باللغة العربية',
                ItemView: 'BusinessIndicatorsReport'
            },
           {
               ItemName: 'نموذج التسجيل باللغة الانكليزية',
                ItemView: 'BusinessIndicatorsReport'
            },
        
            {
               ItemName: 'نموذج سجل تجاري',
                ItemView: 'BusinessIndicatorsReport'
            },
           
           
           {
               ItemName: 'شهادة عدم ملكية او مشاركة في سجل تجاري ',
                ItemView: 'BusinessIndicatorsReport'
            }
           
           
           ]
    
    
}
});