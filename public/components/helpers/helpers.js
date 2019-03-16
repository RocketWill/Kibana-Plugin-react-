export function loadScatterPlotData() {
    let report1 = [
        [new Date("2017/11/13 22:00:00"),55],
        [new Date("2017/11/13 23:00:00"),25],
        [new Date("2017/11/15 23:30:00"),56]
    ];
    
    let report2 = [
        [new Date("2017/11/12 12:00:00"),20],
        [new Date("2017/11/13 10:00:00"),15],
        [new Date("2017/11/13 23:30:00"),5]
    ];
    
    let report3 = [
        [new Date("2017/11/9 12:00:00"),22],
        [new Date("2017/11/13 03:00:00"),5],
        [new Date("2017/11/15 13:30:00"),45]   
    ];

    console.log([report1, report2, report3]);
    return [report1, report2, report3];
    //return "abc";
}