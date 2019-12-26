const Pages =[
    {    header:'',
        navName:'Home',
        items:[{
            href:'/',
            name:'Home',
        }]},
    {
        header:'Artist Pages',
        navName:'Artist',
        items:[
            {
                href:'/roster',
                name:'Roster',
            },
            {
                href:'addband',
                name:'Add Artist',
            }
        ]
    },
    {    header:'Project Pages',
        navName:'Project',
        items:[{
            href:'/addproject',
            name:'Add Project',
        }]},
    {    header:'Payment Pages',
        navName:'Payment',
        items:[{
            href:'/payment',
            name:'Add Payment',
        },{
            href:'/ledger',
            name:'Ledger',
        }]},
    {    header:'Appointment Pages',
        navName:'Appointment',
        items:[{
            href:'/appointment',
            name:'Add Appointment',
        }]},
    {    header:'Session Pages',
        navName:'Session',
        items:[{
            href:'/addsession',
            name:'Add Session',
        }]}
];

export default Pages;