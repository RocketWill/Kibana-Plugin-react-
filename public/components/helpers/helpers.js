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

export function loadCalendarData(){
    let calendar = [
        [new Date("2017/11/9 12:00:00"), 'user1', 1],
        [new Date("2017/11/10 12:00:00"), 'user1', 9],
        [new Date("2017/11/16 12:00:00"), 'user3', 10],
        [new Date("2017/11/10 12:00:00"), 'user2', 2],
        [new Date("2017/11/12 12:00:00"), 'user3', 1],
        [new Date("2017/11/16 12:00:00"), 'user1', 2],
        [new Date("2017/11/17 12:00:00"), 'user3', 20],
        [new Date("2017/11/23 12:00:00"), 'user4', 7]
    ]

    return calendar;
}

export function loadRadarData(){
    let radarData = [
        [0.5, 0.8, 0.6, 0.46, 0.18, 0.6, 0.1], 
        [ 0.2, 0.4, 0.7, 0.1, 0.7, 0.2],
        [0.12, 0.45, 0.72, 0.19, 0.56,0.34],
        [0.67, 0.98, 0.12, 0.34, 0.61,0.11]
    ];

    return radarData;
}

export function loadScatter3Data(){
    let scatter3Data = [
        {
            "name": "[python]\\pythonw.exe",
            "events": [
                "WINDOWS_FILE:Execute[temp]",
                "WINDOWS_PROCESS:Spawn[temp]",
                "WINDOWS_FILE:Write[cuckoo]",
                "WINDOWS_FILE:Permissions[cuckoo]",
                "WINDOWS_FILE:Writing file to temporary directory",
                "WINDOWS_FILE:Write[cuckoo]",
                "WINDOWS_FILE:Permissions[cuckoo]",
                "WINDOWS_FILE:Writing file to temporary directory",
                "WINDOWS_FILE:Write[cuckoo]",
                "WINDOWS_FILE:Permissions[cuckoo]",
                "WINDOWS_FILE:Writing file to temporary directory",
                "WINDOWS_FILE:Write[cuckoo]",
                "WINDOWS_FILE:Permissions[cuckoo]",
                "WINDOWS_FILE:Writing file to temporary directory",
                "WINDOWS_FILE:Write[cuckoo]",
                "WINDOWS_FILE:Permissions[cuckoo]",
                "WINDOWS_FILE:Writing file to temporary directory",
                "WINDOWS_FILE:Execute[system].exe",
                "WINDOWS_PROCESS:Spawn[system].exe"
            ]
        },
        {
            "name": "[windows]\\explorer.exe",
            "events": [
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Write[appdata (local)].db",
                "WINDOWS_FILE:Write[appdata (local)].db",
                "WINDOWS_FILE:Write[appdata (local)].db",
                "WINDOWS_FILE:Write[appdata (local)].db",
                "WINDOWS_FILE:Write[appdata (local)].db",
                "WINDOWS_FILE:Write[appdata (local)].db",
                "WINDOWS_FILE:Write[appdata (local)].db",
                "WINDOWS_FILE:Write[appdata (local)].db",
                "WINDOWS_FILE:Write[appdata (local)].db",
                "WINDOWS_FILE:Write[appdata (local)].db",
                "WINDOWS_FILE:Write[appdata (local)].db",
                "WINDOWS_FILE:Write[appdata (local)].db",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].cpl",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[internet explorer].dll"
            ]
        },
        {
            "name": "[system]\\wermgr.exe",
            "events": [
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_PROCESS:Close"
            ]
        },
        {
            "name": "[system]\\taskhost.exe",
            "events": [
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Permissions[program data].dat",
                "WINDOWS_FILE:Write[program data].dat",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[winsxs].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Permissions[program data].dat",
                "WINDOWS_FILE:Writing file to temporary directory",
                "WINDOWS_FILE:Writing file to temporary directory",
                "WINDOWS_FILE:Writing file to temporary directory",
                "WINDOWS_FILE:Writing file to temporary directory",
                "WINDOWS_FILE:Permissions[program data].dat"
            ]
        },
        {
            "name": "c:\\wallpaper\\bginfo.exe",
            "events": [
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[winsxs].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].drv",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_REGISTRY:Modify[registry (machine)]",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[fonts].ttf",
                "WINDOWS_FILE:Execute[fonts].ttf",
                "WINDOWS_FILE:Execute[fonts].ttf",
                "WINDOWS_FILE:Execute[fonts].ttf",
                "WINDOWS_FILE:Execute[fonts].ttf",
                "WINDOWS_FILE:Execute[fonts].ttf",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Writing file to temporary directory",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Writing file to temporary directory",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Permissions[temp].tmp",
                "WINDOWS_FILE:Deleting edited file",
                "WINDOWS_PROCESS:Close"
            ]
        },
        {
            "name": "[system]\\rundll32.exe",
            "events": [
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[windows].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].drv",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[winsxs].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[winsxs].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Permissions[windows error reporting report queue]",
                "WINDOWS_FILE:Write[windows error reporting report queue]",
                "WINDOWS_FILE:Deleting edited file",
                "WINDOWS_FILE:Write[windows error reporting report queue]",
                "WINDOWS_FILE:Permissions[program data]",
                "WINDOWS_FILE:Write[program data]",
                "WINDOWS_FILE:Deleting edited file",
                "WINDOWS_FILE:Write[program data]",
                "WINDOWS_FILE:Permissions[program data]",
                "WINDOWS_FILE:Write[program data]",
                "WINDOWS_FILE:Deleting edited file",
                "WINDOWS_FILE:Write[program data]",
                "WINDOWS_PROCESS:Close"
            ]
        },
        {
            "name": "[windows]\\odb.exe",
            "events": [
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Write[appdata (local)].dat",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Write[appdata (local)]",
                "WINDOWS_FILE:Write[appdata (local)]",
                "WINDOWS_FILE:Write[appdata (local)]",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Write[appdata (local)]",
                "WINDOWS_FILE:Write[appdata (local)]",
                "WINDOWS_FILE:Write[appdata (local)]",
                "WINDOWS_FILE:Write[appdata (local)]",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Write[appdata (local)]",
                "WINDOWS_FILE:Write[appdata (local)]",
                "WINDOWS_FILE:Write[appdata (local)]",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Write[appdata (local)]",
                "WINDOWS_FILE:Write[appdata (local)]",
                "WINDOWS_FILE:Write[appdata (local)].dat",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Write[appdata (local)]",
                "WINDOWS_FILE:Write[appdata (local)]"
            ]
        },
        {
            "name": "[system]\\rundll32.exe",
            "events": [
                "WINDOWS_FILE:Execute[windows].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].drv",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_REGISTRY:Modify[registry (machine)]",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_PROCESS:Close"
            ]
        },
        {
            "name": "[temp]\\000012df9e08522236f6c1970c263c10bb254683",
            "events": [
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Executing edited file",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Deleting edited file",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[temp]",
                "WINDOWS_PROCESS:Spawn[temp]",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_PROCESS:Close"
            ]
        },
        {
            "name": "[system]\\wsqmcons.exe",
            "events": [
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].exe",
                "WINDOWS_PROCESS:Spawn[system].exe",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_REGISTRY:Modify[registry (machine)]",
                "WINDOWS_PROCESS:Close"
            ]
        },
        {
            "name": "[system]\\sdclt.exe",
            "events": [
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[winsxs].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_PROCESS:Close"
            ]
        },
        {
            "name": "[system]\\conhost.exe",
            "events": [
                "WINDOWS_PROCESS:Close"
            ]
        },
        {
            "name": "[system]\\svchost.exe",
            "events": [
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Delete[windows].dat",
                "WINDOWS_FILE:Write[windows]",
                "WINDOWS_FILE:Write[windows].dat"
            ]
        },
        {
            "name": "[temp]\\000012df9e08522236f6c1970c263c10bb254683",
            "events": [
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Executing edited file",
                "WINDOWS_FILE:Deleting edited file",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Delete[windows].exe",
                "WINDOWS_FILE:Write[windows]",
                "WINDOWS_FILE:Write[windows].exe",
                "WINDOWS_FILE:Write[windows].exe",
                "WINDOWS_FILE:Permissions[windows].exe",
                "WINDOWS_FILE:Write[windows].exe",
                "WINDOWS_FILE:Delete[windows].exe",
                "WINDOWS_FILE:Write[windows]",
                "WINDOWS_FILE:Write[windows].exe",
                "WINDOWS_FILE:Write[windows].exe",
                "WINDOWS_FILE:Permissions[windows].exe",
                "WINDOWS_FILE:Write[windows].exe",
                "WINDOWS_FILE:Deleting spawned process",
                "WINDOWS_FILE:Write[windows]",
                "WINDOWS_FILE:Write[windows].exe",
                "WINDOWS_FILE:Write[windows].exe",
                "WINDOWS_FILE:Permissions[windows].exe",
                "WINDOWS_FILE:Write[windows].exe",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[winsxs].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Executing edited file",
                "WINDOWS_PROCESS:Spawning edited process",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Write[appdata (local)].dat",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll"
            ]
        },
        {
            "name": "[system]\\sc.exe",
            "events": [
                "WINDOWS_PROCESS:Close"
            ]
        },
        {
            "name": "[system]\\conhost.exe",
            "events": [
                "WINDOWS_PROCESS:Close"
            ]
        },
        {
            "name": "[system]\\searchindexer.exe",
            "events": [
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_REGISTRY:Create[registry (machine)]",
                "WINDOWS_REGISTRY:Create[registry (machine)]",
                "WINDOWS_REGISTRY:Create[registry (machine)]",
                "WINDOWS_REGISTRY:Create[registry (machine)]",
                "WINDOWS_REGISTRY:Create[registry (machine)]",
                "WINDOWS_REGISTRY:Modify[registry (machine)]",
                "WINDOWS_REGISTRY:Modify[registry (machine)]",
                "WINDOWS_REGISTRY:Modifying created registry value",
                "WINDOWS_REGISTRY:Modifying created registry value",
                "WINDOWS_REGISTRY:Modify[registry (machine)]"
            ]
        },
        {
            "name": "[system]\\taskhost.exe",
            "events": [
                "WINDOWS_FILE:Execute[internet explorer].dll",
                "WINDOWS_FILE:Write[appdata (local)].log",
                "WINDOWS_FILE:Write[appdata (local)].log",
                "WINDOWS_FILE:Write[appdata (local)].log",
                "WINDOWS_FILE:Write[appdata (local)].dat",
                "WINDOWS_FILE:Write[appdata (local)].dat",
                "WINDOWS_FILE:Write[appdata (local)].dat",
                "WINDOWS_FILE:Delete[appdata (local)]",
                "WINDOWS_FILE:Delete[appdata (local)]",
                "WINDOWS_FILE:Delete[appdata (local)]",
                "WINDOWS_FILE:Delete[appdata (local)]",
                "WINDOWS_FILE:Delete[appdata (local)]",
                "WINDOWS_FILE:Delete[appdata (local)]",
                "WINDOWS_FILE:Deleting edited file",
                "WINDOWS_FILE:Deleting edited file",
                "WINDOWS_FILE:Delete[appdata (local)]",
                "WINDOWS_FILE:Delete[appdata (local)]",
                "WINDOWS_FILE:Delete[appdata (local)]"
            ]
        },
        {
            "name": "[system]\\csrss.exe",
            "events": [
                "WINDOWS_FILE:Execute[system].exe",
                "WINDOWS_PROCESS:Spawn[system].exe"
            ]
        },
        {
            "name": "[system]\\svchost.exe",
            "events": [
                "WINDOWS_FILE:Write[windows].pf",
                "WINDOWS_FILE:Write[windows].pf",
                "WINDOWS_FILE:Write[windows].fx",
                "WINDOWS_FILE:Delete[windows].etl",
                "WINDOWS_FILE:Delete[windows].fx",
                "WINDOWS_REGISTRY:Modify[control set]",
                "WINDOWS_REGISTRY:Modify[control set]",
                "WINDOWS_REGISTRY:Modify[control set]",
                "WINDOWS_FILE:Write[windows].pf",
                "WINDOWS_FILE:Write[windows].pf"
            ]
        },
        {
            "name": "[system]\\svchost.exe",
            "events": [
                "WINDOWS_FILE:Write[system]",
                "WINDOWS_REGISTRY:Modify[registry (machine)]",
                "WINDOWS_REGISTRY:Modify[registry (machine)]",
                "WINDOWS_REGISTRY:Modify[registry (machine)]",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Write[windows].bcf",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].drv",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Write[windows].log",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Write[windows].log",
                "WINDOWS_FILE:Write[windows].log",
                "WINDOWS_FILE:Write[windows].log",
                "WINDOWS_FILE:Write[windows].edb",
                "WINDOWS_FILE:Write[windows].edb",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_REGISTRY:Modify[registry (machine)]",
                "WINDOWS_REGISTRY:Modify[registry (machine)]",
                "WINDOWS_REGISTRY:Modify[registry (machine)]",
                "WINDOWS_REGISTRY:Modifying created registry value"
            ]
        },
        {
            "name": "[system]\\schtasks.exe",
            "events": [
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_PROCESS:Close"
            ]
        },
        {
            "name": "[system]\\conhost.exe",
            "events": [
                "WINDOWS_PROCESS:Close"
            ]
        },
        {
            "name": "[system]\\services.exe",
            "events": [
                "WINDOWS_FILE:Write[system]",
                "WINDOWS_FILE:Execute[windows]",
                "WINDOWS_PROCESS:Spawn[windows]"
            ]
        },
        {
            "name": "[system]\\svchost.exe",
            "events": [
                "WINDOWS_FILE:Execute[program files].dll",
                "WINDOWS_FILE:Write[program data].log",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll"
            ]
        },
        {
            "name": "[system]\\svchost.exe",
            "events": [
                "WINDOWS_FILE:Write[system].evtx",
                "WINDOWS_FILE:Write[system].evtx",
                "WINDOWS_REGISTRY:Delete[control set]",
                "WINDOWS_REGISTRY:Create[control set]",
                "WINDOWS_REGISTRY:Modify[control set]",
                "WINDOWS_FILE:Write[system].evtx",
                "WINDOWS_FILE:Write[system].evtx",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_REGISTRY:Modify[registry (machine)]",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Write[system].evtx",
                "WINDOWS_FILE:Write[system].evtx"
            ]
        },
        {
            "name": "[system]\\svchost.exe",
            "events": [
                "WINDOWS_FILE:Execute[system].exe",
                "WINDOWS_PROCESS:Spawn[system].exe",
                "WINDOWS_FILE:Execute[system].exe",
                "WINDOWS_PROCESS:Spawn[system].exe",
                "WINDOWS_FILE:Execute[system].exe",
                "WINDOWS_PROCESS:Spawn[system].exe"
            ]
        },
        {
            "name": "[system]\\dllhost.exe",
            "events": [
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[winsxs].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_PROCESS:Close"
            ]
        },
        {
            "name": "[system]\\dllhost.exe",
            "events": [
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Write[appdata (local)].dat",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_PROCESS:Close"
            ]
        },
        {
            "name": "[windows]\\svw.exe",
            "events": [
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Executing edited file",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Deleting edited file",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Executing edited file",
                "WINDOWS_PROCESS:Spawning edited process",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_PROCESS:Close"
            ]
        },
        {
            "name": "[windows]\\svw.exe",
            "events": [
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Executing edited file",
                "WINDOWS_FILE:Deleting edited file",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[winsxs].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[windows].exe",
                "WINDOWS_PROCESS:Spawn[windows].exe",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Write[appdata (local)].dat",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll"
            ]
        },
        {
            "name": "[system]\\cmd.exe",
            "events": [
                "WINDOWS_PROCESS:Close"
            ]
        },
        {
            "name": "[system]\\conhost.exe",
            "events": [
                "WINDOWS_PROCESS:Close"
            ]
        },
        {
            "name": "[windows]\\svw .exe",
            "events": [
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Executing edited file",
                "WINDOWS_FILE:Deleting edited file",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[winsxs].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[winsxs].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Deleting spawned process",
                "WINDOWS_FILE:Write[windows]",
                "WINDOWS_FILE:Write[windows].exe",
                "WINDOWS_FILE:Write[windows].exe",
                "WINDOWS_FILE:Permissions[windows].exe",
                "WINDOWS_PROCESS:Close"
            ]
        },
        {
            "name": "[system]\\svchost.exe",
            "events": [
                "WINDOWS_FILE:Write[system].etl",
                "WINDOWS_FILE:Write[system].etl",
                "WINDOWS_FILE:Permissions[system].etl",
                "WINDOWS_FILE:Write[system].bin",
                "WINDOWS_FILE:Write[system].bin"
            ]
        },
        {
            "name": "[windows]\\microsoft.net\\framework\\\\<*>",
            "events": [
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_PROCESS:Close"
            ]
        },
        {
            "name": "[system]\\wbem\\wmiprvse.exe",
            "events": [
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll"
            ]
        },
        {
            "name": "[system]\\lsass.exe",
            "events": [
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll"
            ]
        },
        {
            "name": "[system]\\csrss.exe",
            "events": [
                "WINDOWS_FILE:Execute[system].exe",
                "WINDOWS_PROCESS:Spawn[system].exe"
            ]
        },
        {
            "name": "[system]\\conhost.exe",
            "events": [
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[winsxs].dll"
            ]
        },
        {
            "name": "[system]\\cmd.exe",
            "events": [
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].exe",
                "WINDOWS_PROCESS:Spawn[system].exe",
                "WINDOWS_FILE:Execute[system].dll"
            ]
        },
        {
            "name": "[system]\\windowspowershell\\v1.0\\powershell.exe",
            "events": [
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[winsxs].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Write[appdata].temp",
                "WINDOWS_FILE:Permissions[appdata].temp",
                "WINDOWS_FILE:Delete[appdata].customdestinations-ms",
                "WINDOWS_FILE:Write[appdata]",
                "WINDOWS_FILE:Deleting edited file",
                "WINDOWS_FILE:Write[appdata]",
                "WINDOWS_FILE:Delete[appdata].tmp",
                "WINDOWS_FILE:Execute[windows]",
                "WINDOWS_FILE:Execute[windows]",
                "WINDOWS_FILE:Execute[winsxs].dll",
                "WINDOWS_FILE:Execute[windows].dll",
                "WINDOWS_FILE:Execute[windows].dll",
                "WINDOWS_FILE:Execute[windows].dll",
                "WINDOWS_FILE:Execute[windows].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[windows].dll",
                "WINDOWS_FILE:Execute[windows].dll",
                "WINDOWS_FILE:Execute[windows].dll",
                "WINDOWS_FILE:Execute[windows].dll",
                "WINDOWS_FILE:Execute[windows].dll",
                "WINDOWS_FILE:Execute[windows].dll",
                "WINDOWS_FILE:Execute[windows].dll",
                "WINDOWS_FILE:Execute[windows].dll",
                "WINDOWS_FILE:Execute[windows].dll",
                "WINDOWS_FILE:Execute[windows]",
                "WINDOWS_FILE:Execute[windows].dll",
                "WINDOWS_FILE:Execute[windows].dll",
                "WINDOWS_FILE:Execute[windows].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[system].dll",
                "WINDOWS_FILE:Execute[windows].dll"
            ]
        }
    ]
    let words = {"WINDOWS_FILE:Execute[temp]": [-1.420891284942627, -49.074363708496094, -128.6742706298828], "WINDOWS_PROCESS:Spawn[temp]": [-84.24732971191406, -78.89763641357422, 47.453609466552734], "WINDOWS_FILE:Writing file to temporary directory": [-25.96890640258789, -79.8547592163086, -105.32738494873047], "WINDOWS_FILE:Execute[system].dll": [-114.15565490722656, -49.92975616455078, -0.22981560230255127], "WINDOWS_FILE:Execute[winsxs].dll": [-100.84063720703125, -42.95360565185547, 9.785762786865234], "WINDOWS_FILE:Write[windows].pf": [8.126502990722656, 60.96241760253906, 153.79168701171875], "WINDOWS_FILE:Execute[system].exe": [97.49755859375, -58.4710578918457, -72.28539276123047], "WINDOWS_PROCESS:Spawn[system].exe": [28.012451171875, 51.13554382324219, -12.573317527770996], "WINDOWS_REGISTRY:Modify[registry (machine)]": [-2.67962646484375, -20.44340705871582, 117.95169067382812], "WINDOWS_PROCESS:Close": [12.398201942443848, -33.229373931884766, -79.82080841064453], "WINDOWS_FILE:Write[system]": [-93.26022338867188, -60.74972915649414, 7.652929782867432], "WINDOWS_FILE:Deleting edited file": [81.01644134521484, 94.70838928222656, -44.28208923339844], "WINDOWS_FILE:Execute[windows]": [128.38633728027344, 30.161815643310547, 64.879150390625], "WINDOWS_FILE:Execute[windows].dll": [85.74754333496094, 66.5193862915039, 1.4703789949417114], "WINDOWS_FILE:Execute[system].drv": [-42.73665237426758, -79.08710479736328, -118.3799057006836], "WINDOWS_FILE:Write[windows error reporting report queue]": [86.61955261230469, -57.12538146972656, 64.3578872680664], "WINDOWS_FILE:Write[program data]": [105.845947265625, -17.610836029052734, -99.82681274414062], "WINDOWS_FILE:Executing edited file": [94.39997100830078, 107.37809753417969, -7.26020622253418], "WINDOWS_FILE:Execute[system].ocx": [129.61805725097656, 54.29446792602539, -24.0767822265625], "WINDOWS_FILE:Write[appdata].sxx": [-77.57876586914062, -70.9378890991211, -92.6970443725586], "WINDOWS_FILE:Write[appdata]": [-43.54643630981445, -57.08820343017578, -84.91661834716797], "WINDOWS_FILE:Delete[appdata].sol": [-134.63343811035156, 28.09466552734375, 56.70920944213867], "WINDOWS_FILE:Execute[fonts].ttf": [-18.255407333374023, 42.740623474121094, -142.1584930419922], "WINDOWS_FILE:Delete[temp].tmp": [91.50146484375, -58.04304885864258, -99.18915557861328], "WINDOWS_PROCESS:Spawning edited process": [-95.6537857055664, 85.2253189086914, 69.22447204589844], "WINDOWS_REGISTRY:Delete[control set]": [26.569190979003906, -75.71795654296875, 66.2257080078125], "WINDOWS_REGISTRY:Create[control set]": [99.86900329589844, 22.104671478271484, -19.289230346679688], "WINDOWS_REGISTRY:Modify[control set]": [19.952762603759766, -87.46418762207031, 53.823768615722656], "WINDOWS_FILE:Write[system].evtx": [121.21096801757812, 42.833160400390625, 4.6719489097595215], "WINDOWS_FILE:Write[windows].bcf": [-25.068696975708008, 135.73280334472656, 63.03974914550781], "WINDOWS_FILE:Write[windows].edb": [19.756431579589844, -38.545291900634766, -131.17225646972656], "WINDOWS_FILE:Write[windows].chk": [12.334905624389648, -16.578784942626953, -145.99000549316406], "WINDOWS_FILE:Write[program data].dat": [-8.442930221557617, -35.937217712402344, -58.23805236816406], "WINDOWS_FILE:Write[program data].sdf": [-120.52875518798828, -58.475215911865234, 55.71470642089844], "WINDOWS_FILE:Delete[program data].tmp": [58.350074768066406, 62.54644775390625, 25.38125991821289], "WINDOWS_REGISTRY:Create[registry (machine)]": [-103.73038482666016, 97.38436126708984, -14.672832489013672], "WINDOWS_FILE:Execute[fonts].fon": [-94.50877380371094, 93.69566345214844, -38.168312072753906], "WINDOWS_FILE:Delete[temp].txt": [-23.64430046081543, -67.91063690185547, 124.98220825195312], "WINDOWS_FILE:Write[appdata (local)].dat": [41.274383544921875, 123.46501922607422, 62.90093231201172], "WINDOWS_FILE:Write[appdata].temp": [-34.547489166259766, 106.38789367675781, 112.66218566894531], "WINDOWS_FILE:Delete[appdata].customdestinations-ms": [-124.60445404052734, 23.511938095092773, -58.70014190673828], "WINDOWS_FILE:Delete[appdata].tmp": [-126.66187286376953, -1.0024666786193848, -58.183536529541016], "WINDOWS_REGISTRY:Modifying created registry value": [-3.8426125049591064, -15.848447799682617, -47.826473236083984], "WINDOWS_FILE:Execute[program files].dll": [93.15733337402344, 36.775550842285156, -38.783538818359375], "WINDOWS_FILE:Write[system].data": [72.09307098388672, -20.23566436767578, 96.85401916503906], "WINDOWS_FILE:Write[system].btr": [-97.43440246582031, 75.1626205444336, -27.489587783813477], "WINDOWS_FILE:Write[system].map": [2.99131178855896, -60.52643585205078, 117.17557525634766], "WINDOWS_FILE:Write[program data].wid": [56.607357025146484, 49.92289352416992, -2.8104822635650635], "WINDOWS_FILE:Write[program data].ci": [-28.354040145874023, 123.76341247558594, -77.0433349609375], "WINDOWS_FILE:Write[program data].dir": [82.37789916992188, 48.75928497314453, 1.6963928937911987], "WINDOWS_FILE:Write[program data].000": [-28.135385513305664, -90.59884643554688, 105.74456787109375], "WINDOWS_FILE:Write[program data].002": [-36.0987434387207, 24.988723754882812, 144.2099609375], "WINDOWS_FILE:Write[program data].001": [113.77278137207031, 31.95909881591797, -92.61786651611328], "WINDOWS_FILE:Write[program data].wsb": [-47.60940933227539, -80.2666015625, 98.85645294189453], "WINDOWS_FILE:Write[program data].gthr": [-136.18283081054688, -56.417789459228516, -36.34088134765625], "WINDOWS_FILE:Write[program data].crwl": [-90.190673828125, -70.48906707763672, 93.71453857421875], "WINDOWS_FILE:Delete[program data].gthr": [-76.87310028076172, 80.06635284423828, -16.803544998168945], "WINDOWS_FILE:Write[system].h": [28.52859878540039, 115.23680114746094, 47.261695861816406], "WINDOWS_FILE:Delete[system].h": [-38.117122650146484, 95.21221160888672, -37.93535614013672], "WINDOWS_FILE:Write[system].ini": [141.58953857421875, -18.341018676757812, 49.783531188964844], "WINDOWS_FILE:Delete[system].ini": [75.71759033203125, 65.02577209472656, 101.4556884765625], "WINDOWS_FILE:Write[system].dat": [107.68155670166016, -68.42914581298828, -51.13391876220703], "WINDOWS_REGISTRY:Deleting created registry value": [-97.72322082519531, -14.749115943908691, 37.43812942504883], "WINDOWS_FILE:Delete[windows].ini": [-73.01990509033203, 72.02202606201172, -38.507354736328125], "WINDOWS_FILE:Delete[windows]": [36.36648941040039, 87.25465393066406, -26.772045135498047], "WINDOWS_FILE:Delete[windows].h": [61.88766098022461, 38.893768310546875, 129.2989959716797], "WINDOWS_FILE:Write[windows].h": [-30.468843460083008, 96.69813537597656, 64.16558074951172], "WINDOWS_FILE:Write[windows].ini": [-14.435140609741211, 109.74775695800781, 106.77973175048828], "WINDOWS_FILE:Write[system].tmp": [73.11856842041016, -4.411028861999512, -127.87522888183594], "WINDOWS_FILE:Write[windows].db": [112.9171371459961, 71.8728256225586, -34.65706253051758], "WINDOWS_FILE:Delete[appdata (local)]": [77.62467956542969, 21.340957641601562, 91.19303894042969], "WINDOWS_FILE:Delete[system].etl": [58.52378845214844, 52.97785949707031, 118.35955810546875], "WINDOWS_FILE:Delete[system]": [26.396133422851562, 1.7312601804733276, 138.7515411376953], "WINDOWS_FILE:Write[appdata (local)]": [-85.79181671142578, 72.88800048828125, 85.71129608154297], "WINDOWS_FILE:Write[appdata].data": [-114.39472198486328, -3.4134554862976074, 70.9189224243164], "WINDOWS_FILE:Write[appdata].data0": [40.41093444824219, 112.03203582763672, 2.2860162258148193], "WINDOWS_FILE:Write[appdata (local)].db": [-61.93730926513672, 91.60539245605469, -31.799152374267578], "WINDOWS_FILE:Write[system].etl": [-53.959014892578125, 73.68476104736328, -27.128198623657227], "WINDOWS_FILE:Delete[temp]": [-48.34998321533203, -127.5753402709961, 34.75703811645508], "WINDOWS_FILE:Execute[system].cpl": [11.57615852355957, 145.4067840576172, 80.5206527709961], "WINDOWS_FILE:Execute[internet explorer].dll": [-64.12811279296875, 65.08443450927734, -96.97091674804688], "WINDOWS_FILE:Write[appdata (local)].log": [66.64934539794922, -4.485617160797119, 135.0957794189453], "WINDOWS_REGISTRY:Delete[registry (machine)]": [77.29922485351562, -70.50263214111328, -83.81709289550781], "WINDOWS_FILE:Write[program data].log": [-142.52798461914062, -19.786928176879883, -7.202056884765625], "WINDOWS_FILE:Write[program data].edb": [35.60212707519531, 90.20515441894531, 20.369352340698242], "WINDOWS_FILE:Write[program data].chk": [-98.54039001464844, 48.93928909301758, 7.353254318237305], "WINDOWS_FILE:Delete[windows].dat": [5.073167324066162, 49.54212951660156, 68.54986572265625], "WINDOWS_FILE:Write[windows]": [34.132530212402344, 88.48269653320312, 109.34276580810547], "WINDOWS_FILE:Write[windows].dat": [-76.81880187988281, 112.21227264404297, 28.78352928161621], "WINDOWS_FILE:Execute[windows].exe": [-63.51020050048828, 127.48997497558594, 33.81315994262695], "WINDOWS_PROCESS:Spawn[windows].exe": [6.471585750579834, 101.80638885498047, 106.10157775878906], "WINDOWS_FILE:Write[windows].log": [102.63996124267578, -50.37889099121094, 95.16360473632812], "WINDOWS_FILE:Write[desktop].lnk": [-85.61417388916016, 59.88969039916992, 19.52756690979004], "WINDOWS_FILE:Delete[program files]": [85.84767150878906, -91.11676025390625, -77.08770751953125], "WINDOWS_FILE:Write[program files].ini": [-62.239925384521484, 77.45332336425781, -83.52877807617188], "WINDOWS_FILE:Write[program files].lng": [32.79824447631836, -41.2492790222168, -81.0905990600586], "WINDOWS_FILE:Write[program files].dll": [1.037797212600708, 79.39985656738281, 121.50311279296875], "WINDOWS_FILE:Write[program files].exe": [117.4450912475586, -9.303547859191895, 54.13410568237305], "WINDOWS_FILE:Write[program files].txt": [41.5286979675293, 56.39915466308594, 8.49958324432373], "WINDOWS_FILE:Write[start menu].lnk": [60.25327682495117, 119.17068481445312, -21.254426956176758], "WINDOWS_PROCESS:Spawn[windows]": [-128.01278686523438, 25.94196319580078, -13.861495971679688], "WINDOWS_FILE:Write[temp]": [101.40673065185547, 2.8278772830963135, 92.37899780273438], "WINDOWS_FILE:Execute[temp].tmp": [122.34195709228516, -89.11305236816406, -12.233186721801758], "WINDOWS_FILE:Delete[system].%$d": [-57.98776626586914, -25.3997802734375, 21.58104133605957], "WINDOWS_FILE:Delete": [-55.497459411621094, 67.30219268798828, 117.0287094116211], "WINDOWS_FILE:Write[system].bin": [35.236785888671875, -84.24916076660156, 105.77420043945312], "WINDOWS_FILE:Deleting spawned process": [18.396446228027344, 45.513450622558594, 5.957608699798584], "WINDOWS_FILE:Execute[internet explorer].exe": [8.143478393554688, 67.94103240966797, 90.11135864257812], "WINDOWS_PROCESS:Spawn[internet explorer].exe": [-74.61158752441406, -8.762256622314453, -33.35588073730469], "WINDOWS_FILE:Execute[program files common].dll": [-7.721306324005127, 117.29774475097656, 55.894935607910156], "WINDOWS_FILE:Write[program files]": [15.099172592163086, 111.2503662109375, 87.3775405883789], "WINDOWS_FILE:Write[program files].html": [70.66344451904297, -107.04511260986328, -110.28195190429688], "WINDOWS_FILE:Write[program files].properties": [-37.26837158203125, 94.2196044921875, 11.081192016601562], "WINDOWS_FILE:Write[program files].jar": [-46.624935150146484, 107.41583251953125, 26.03911018371582], "WINDOWS_FILE:Write[program files].pf": [-68.2229995727539, 99.17324829101562, 13.686576843261719], "WINDOWS_FILE:Write[program files].zip": [-12.018477439880371, 135.29574584960938, -35.36489486694336], "WINDOWS_FILE:Write[program files].gif": [107.93939208984375, -14.764727592468262, 3.5909781455993652], "WINDOWS_FILE:Write[program files].conf": [24.88968276977539, -12.142589569091797, 116.6807632446289], "WINDOWS_FILE:Write[program files].ttf": [-58.671993255615234, 45.20671844482422, -5.484867095947266], "WINDOWS_FILE:Write[program files].cfg": [-16.346384048461914, 102.02580261230469, 18.829870223999023], "WINDOWS_FILE:Write[program files].policy": [-94.04871368408203, 60.24351119995117, -67.58417510986328], "WINDOWS_FILE:Write[program files].inf": [-69.04584503173828, -0.35551464557647705, 134.4835205078125], "WINDOWS_FILE:Write[program data].jar": [54.9512939453125, 79.98683166503906, -1.3132542371749878], "WINDOWS_FILE:Write[program data].ini": [-13.1458158493042, 96.18445587158203, -1.3316247463226318], "WINDOWS_FILE:Write[program data].xml": [64.89146423339844, 95.37786865234375, 31.769287109375], "WINDOWS_FILE:Write[program data].tmp": [7.864715576171875, 105.30073547363281, 5.33087158203125], "WINDOWS_FILE:Write[program data].dll": [-42.378997802734375, 59.924713134765625, -5.294008255004883], "WINDOWS_FILE:Write[program data].exe": [-36.0920295715332, 95.5450668334961, -102.89846801757812], "WINDOWS_FILE:Delete[program data]": [4.326003074645996, 14.139774322509766, 111.01875305175781], "WINDOWS_FILE:Write[program data].manager": [-37.896820068359375, 73.36886596679688, 111.28900146484375], "WINDOWS_FILE:Delete[program data].1": [42.33420181274414, 75.52490997314453, 83.58977508544922], "WINDOWS_FILE:Write[program data].new": [20.72685432434082, 95.8595199584961, 61.333900451660156], "WINDOWS_FILE:Write[program data].runtime": [-64.25463104248047, -107.99921417236328, 63.307743072509766], "WINDOWS_FILE:Write[program data].osgi": [64.45785522460938, 130.94479370117188, 29.45401954650879], "WINDOWS_FILE:Delete[temp].cat": [-52.00444793701172, 27.78044891357422, -15.099688529968262], "WINDOWS_FILE:Delete[temp].inf": [123.04503631591797, 83.1517105102539, -14.860236167907715], "WINDOWS_FILE:Delete[temp].sys": [-78.57850646972656, 22.229652404785156, 7.555380344390869], "WINDOWS_FILE:Delete[temp].dll": [-20.130443572998047, -66.49472045898438, -124.37117767333984], "WINDOWS_FILE:Write[system].txt": [-49.73328399658203, 41.358272552490234, 122.98430633544922], "WINDOWS_FILE:Delete[system].tmp": [3.2121949195861816, -24.34269142150879, -109.51373291015625], "WINDOWS_FILE:Write[windows].inf": [-18.61331558227539, 31.41054916381836, 14.944321632385254], "WINDOWS_FILE:Write[system].pnf": [-83.01067352294922, -45.358726501464844, 53.587745666503906], "WINDOWS_FILE:Write[system].0": [-72.77539825439453, 12.971837043762207, -32.1453742980957], "WINDOWS_FILE:Delete[system].1": [107.7861328125, -26.441970825195312, 20.446067810058594], "WINDOWS_FILE:Delete[system].2": [-60.99909973144531, 80.7226333618164, 43.66469955444336], "WINDOWS_FILE:Delete[system].cat": [-46.09162902832031, -139.19581604003906, -9.977173805236816], "WINDOWS_FILE:Delete[system].inf": [43.62620162963867, 139.1669158935547, 25.97987937927246], "WINDOWS_FILE:Delete[system].sys": [132.0790557861328, 2.4725022315979004, -18.51700782775879], "WINDOWS_FILE:Write[system].cat": [44.48420715332031, -120.1514663696289, 63.30956268310547], "WINDOWS_FILE:Write[cookies].txt": [-38.56416702270508, -20.941993713378906, -134.75250244140625], "WINDOWS_FILE:Write[appdata].new": [-109.47949981689453, -4.148396968841553, -24.331676483154297], "WINDOWS_FILE:Write[appdata (local)].exe": [-99.61266326904297, 43.798404693603516, 70.19010925292969], "WINDOWS_FILE:Write[appdata].lnk": [141.9269561767578, 15.755021095275879, 5.824685573577881], "WINDOWS_REGISTRY:Create[registry (machine)].whoneglijx5srfca6un4eueiai": [43.85541534423828, 11.929457664489746, 100.00831604003906], "WINDOWS_REGISTRY:Create[registry (machine)].htm": [104.83599090576172, -51.17031478881836, 33.07796096801758], "WINDOWS_REGISTRY:Create[registry (machine)].html": [-60.13199996948242, -29.89361572265625, -132.02420043945312], "WINDOWS_REGISTRY:Create[registry (machine)].shtml": [30.786544799804688, 70.77570343017578, 50.57655715942383], "WINDOWS_REGISTRY:Create[registry (machine)].xht": [-30.11146354675293, 128.45010375976562, 2.893458366394043], "WINDOWS_REGISTRY:Create[registry (machine)].xhtml": [-96.22433471679688, 30.781030654907227, 38.916500091552734], "WINDOWS_REGISTRY:Create[registry (machine)].webp": [-39.231239318847656, -58.582462310791016, 14.037769317626953], "WINDOWS_FILE:Execute[appdata (local)].dll": [2.0651490688323975, 71.6217041015625, 64.46987915039062], "WINDOWS_FILE:Write[appdata (local)].dbtmp": [-70.22525024414062, -54.13328170776367, 35.264888763427734], "WINDOWS_FILE:Delete[appdata (local)].tmp": [100.3673095703125, -3.244325876235962, -58.723350524902344], "WINDOWS_FILE:Write[appdata (local)].tmp": [-71.3094711303711, 29.664609909057617, 108.52014923095703], "WINDOWS_FILE:Write[appdata (local)].css": [-61.773155212402344, 132.35302734375, -16.185863494873047], "WINDOWS_FILE:Delete[firefox].tmp": [-3.4001903533935547, 116.97130584716797, -48.20378875732422], "WINDOWS_FILE:Write[firefox].dll": [0.4783298969268799, 140.22622680664062, 22.82432746887207], "WINDOWS_FILE:Write[firefox].ini": [-3.601896047592163, -25.5253849029541, 150.75717163085938], "WINDOWS_FILE:Write[firefox].exe": [-26.71833610534668, 43.77530288696289, 98.32002258300781], "WINDOWS_FILE:Write[firefox].chk": [-15.022133827209473, 69.70818328857422, 80.56795501708984], "WINDOWS_FILE:Write[firefox].ja": [29.41290855407715, 112.43009948730469, -54.960304260253906], "WINDOWS_FILE:Write[firefox].xml": [26.974506378173828, -52.83547592163086, -99.51960754394531], "WINDOWS_FILE:Write[start menu (common)].lnk": [-10.003166198730469, 81.29240417480469, 44.56636047363281], "WINDOWS_FILE:Write[appdata (local)].msi": [21.67706871032715, 42.681396484375, 35.76519775390625], "WINDOWS_FILE:Write[windows].msi": [-22.611421585083008, -48.954891204833984, -114.4185562133789], "WINDOWS_FILE:Write[appdata (local low)]": [-89.29231262207031, -1.1803191900253296, 3.4455554485321045], "WINDOWS_FILE:Execute[temp].dll": [105.28015899658203, -34.350135803222656, 81.63241577148438], "WINDOWS_FILE:Execute[fonts].ttc": [48.137115478515625, -48.57259750366211, 115.01013946533203], "WINDOWS_FILE:Write[program files].tmp": [44.15886306762695, 42.51469039916992, 68.12500762939453], "WINDOWS_FILE:Delete[program files].png": [43.18528366088867, -121.43621063232422, -4.460305213928223], "WINDOWS_FILE:Write": [35.47617721557617, -88.01716613769531, -122.76498413085938], "WINDOWS_FILE:Execute": [22.831941604614258, 39.227943420410156, 95.97460174560547], "WINDOWS_FILE:Execute[temp].exe": [28.123823165893555, 22.099748611450195, 87.93814086914062], "WINDOWS_PROCESS:Spawn[temp].exe": [2.799520969390869, 16.693256378173828, 70.65005493164062], "WINDOWS_FILE:Write[appdata (local low)].png": [-9.909493446350098, -102.76331329345703, -131.56781005859375], "WINDOWS_FILE:Write[appdata (local low)].exe": [-49.4494743347168, 19.1192569732666, 90.16167449951172], "WINDOWS_FILE:Execute[program files].exe": [-52.629337310791016, 39.56709671020508, 89.31169128417969], "WINDOWS_PROCESS:Spawn[program files].exe": [-42.52931594848633, 2.8589963912963867, 110.5511245727539], "WINDOWS_FILE:Write[system profile].dat": [-33.35145568847656, 69.38243865966797, -64.47431182861328], "WINDOWS_FILE:Write[program files].jpg": [-5.556599140167236, 35.30736541748047, 41.7691764831543], "WINDOWS_FILE:Write[program files].png": [4.847002029418945, 33.2701416015625, 136.3593292236328], "WINDOWS_FILE:Write[program files].ico": [-29.527973175048828, 39.32183074951172, -26.054384231567383], "WINDOWS_FILE:Write[program files].manifest": [-41.2522087097168, -8.554696083068848, -22.000770568847656], "WINDOWS_FILE:Write[program files].xml": [30.530771255493164, 101.67418670654297, -76.97051239013672], "WINDOWS_FILE:Write[program files].htm": [113.45767974853516, -65.14555358886719, 20.406124114990234], "WINDOWS_FILE:Write[program files].config": [-18.913616180419922, 52.39609146118164, -39.40165328979492], "WINDOWS_FILE:Write[program files].dat": [-20.672210693359375, -20.416614532470703, 52.94858932495117], "WINDOWS_FILE:Write[program files].kid": [-134.8880157470703, -25.728225708007812, 36.836795806884766], "WINDOWS_FILE:Write[program files].sys": [86.21241760253906, -34.72133255004883, 0.4829598367214203], "WINDOWS_FILE:Write[system].sys": [-9.495436668395996, 13.368753433227539, -121.21088409423828], "WINDOWS_FILE:Delete[windows].ipi": [49.69397735595703, 5.60526704788208, 60.20331954956055], "WINDOWS_FILE:Write[windows].ipi": [-132.80221557617188, 60.59538650512695, -7.660902976989746], "WINDOWS_FILE:Write[windows].tmp": [-43.38016891479492, -31.463253021240234, -7.643441200256348], "WINDOWS_FILE:Delete[windows].dll": [-75.67008972167969, 3.811565399169922, 88.44103240966797], "WINDOWS_FILE:Delete[appdata (local low)]": [-4.364936351776123, 66.79032135009766, -22.222152709960938], "WINDOWS_FILE:Write[windows].fx": [-46.54756164550781, 71.2180404663086, 79.1708755493164], "WINDOWS_FILE:Delete[windows].etl": [19.193424224853516, 39.65917205810547, -79.33477020263672], "WINDOWS_FILE:Delete[windows].fx": [-13.850799560546875, -35.845157623291016, 86.23900604248047], "WINDOWS_FILE:Delete[windows].tmp": [6.2052741050720215, 105.4551010131836, -31.30708885192871], "WINDOWS_FILE:Delete[msi installer]": [-45.405982971191406, 51.206329345703125, -60.067527770996094], "WINDOWS_FILE:Delete[appdata (local)].dat": [-69.385498046875, 24.012596130371094, 60.876380920410156], "WINDOWS_FILE:Delete[appdata (local)].png": [-57.10951232910156, 134.1373291015625, -34.364662170410156], "WINDOWS_FILE:Delete[appdata (local)].woff": [-44.448787689208984, 13.237639427185059, 2.168022394180298], "WINDOWS_FILE:Delete[appdata (local)].css": [91.18160247802734, 60.36412811279297, -70.55047607421875], "WINDOWS_FILE:Delete[appdata (local)].js": [94.42280578613281, 73.76960754394531, -81.18812561035156], "WINDOWS_FILE:Delete[appdata (local)].htm": [16.957983016967773, -10.308365821838379, 40.883243560791016], "WINDOWS_FILE:Delete[appdata (local)].json": [-92.60017395019531, 37.516849517822266, -32.30934524536133], "WINDOWS_FILE:Delete[appdata (local)].txt": [9.819938659667969, 71.01964569091797, -100.52247619628906], "WINDOWS_FILE:Delete[appdata (local)].gif": [53.09288024902344, -57.105525970458984, -54.49449920654297], "WINDOWS_FILE:Delete[appdata (local)].jpg": [-85.20836639404297, -31.543781280517578, 92.0518798828125], "WINDOWS_FILE:Delete[appdata (local)].eot": [4.329954147338867, 57.365638732910156, -59.76793670654297], "WINDOWS_FILE:Delete[appdata (local)].svg": [-71.58053588867188, -1.5845755338668823, 63.53825378417969], "WINDOWS_FILE:Delete[appdata (local)].ini": [-17.592761993408203, -15.1290864944458, -20.317710876464844], "WINDOWS_FILE:Delete[appdata (local)].aspx": [-4.706174373626709, -107.99015045166016, 76.65668487548828], "WINDOWS_FILE:Delete[appdata (local)].xml": [-1.0214314460754395, -122.88565826416016, 63.44889831542969], "WINDOWS_FILE:Delete[appdata (local)].html": [-14.791820526123047, -110.54855346679688, 58.34872817993164], "WINDOWS_FILE:Write[appdata (local)].ini": [-65.41822814941406, 10.83779239654541, 40.149147033691406], "WINDOWS_FILE:Delete[program files].tmp": [-81.52664947509766, 28.296024322509766, -68.2016372680664], "WINDOWS_FILE:Write[program data].txt": [-54.623470306396484, 48.048336029052734, 50.27762222290039], "WINDOWS_FILE:Write[program files]._tm": [44.31859588623047, -116.88988494873047, -29.448684692382812], "WINDOWS_REGISTRY:Create[registry (machine)].job": [-4.9232378005981445, 35.39583206176758, -103.1177978515625], "WINDOWS_REGISTRY:Create[registry (machine)].fp": [30.724365234375, -32.44497299194336, 81.8396987915039], "WINDOWS_FILE:Write[program files].msi": [-26.242170333862305, 61.06452560424805, 44.39778137207031], "WINDOWS_FILE:Write[windows].job": [-41.613067626953125, 57.94807815551758, 26.78420639038086], "WINDOWS_FILE:Write[chrome].exe": [41.881568908691406, 10.107368469238281, 39.44363021850586], "WINDOWS_FILE:Write[chrome]": [-14.746864318847656, -152.97479248046875, -87.69723510742188], "WINDOWS_FILE:Delete[chrome]": [-2.2566959857940674, 4.589834213256836, 32.472957611083984], "WINDOWS_FILE:Execute[chrome].dll": [-22.15835189819336, -75.95999145507812, 13.005219459533691], "WINDOWS_FILE:Write[appdata (local)].sqlite3": [-3.892106533050537, 37.41916275024414, -11.144376754760742], "WINDOWS_FILE:Write[system].dll": [-40.881507873535156, -11.860157012939453, 74.81169891357422], "WINDOWS_FILE:Write[appdata (local)].dll": [10.384798049926758, 79.98033142089844, -51.92013931274414], "WINDOWS_FILE:Write[program files].log": [-42.192047119140625, 22.830066680908203, 45.30990982055664], "WINDOWS_FILE:Write[program files].css": [-50.55289077758789, -12.354576110839844, 48.840606689453125], "WINDOWS_FILE:Write[appdata].log": [26.74046516418457, 60.678443908691406, -44.64986801147461], "WINDOWS_FILE:Write[appdata (local)].png": [-22.572532653808594, 8.43299674987793, 61.76573181152344], "WINDOWS_FILE:Write[appdata (local)].json": [-31.374858856201172, 30.13961410522461, 68.8494873046875], "WINDOWS_FILE:Write[appdata (local)].jpg": [-62.93482208251953, 108.78650665283203, 75.2912826538086], "WINDOWS_FILE:Write[program files].pak": [1.1690261363983154, -63.8327751159668, -4.787708759307861], "WINDOWS_FILE:Write[program files].myd": [59.23674011230469, -92.48485565185547, -54.80925750732422], "WINDOWS_FILE:Write[program files].db": [-19.679397583007812, 4.567990779876709, 87.76441192626953], "WINDOWS_FILE:Write[windows].ico": [3.9878616333007812, -15.882329940795898, 72.14857482910156], "WINDOWS_FILE:Write[windows].exe": [22.570772171020508, 26.916833877563477, -114.0979232788086], "WINDOWS_FILE:Delete[windows].msi": [-28.402368545532227, -16.995403289794922, -115.35267639160156], "WINDOWS_FILE:Write[program files].js": [-55.179080963134766, -119.33698272705078, -60.34874725341797], "WINDOWS_FILE:Write[program files].url": [10.91515827178955, 21.744977951049805, -35.0588264465332], "WINDOWS_FILE:Write[program files].mid": [-48.11784362792969, -39.369930267333984, 69.38475799560547], "WINDOWS_REGISTRY:Create[registry (machine)].log": [-42.529937744140625, 21.81562042236328, -53.76880645751953], "WINDOWS_FILE:Write[program files].rtf": [-47.06590270996094, 6.689905643463135, 62.79073715209961], "WINDOWS_FILE:Write[program files].wav": [-117.97537231445312, 7.967926025390625, 18.895822525024414], "WINDOWS_FILE:Write[appdata].exe": [-18.918264389038086, 62.158267974853516, 22.772024154663086], "WINDOWS_FILE:Write[appdata].dll": [-118.68280792236328, 67.07877349853516, 34.95223617553711], "WINDOWS_FILE:Write[program files].chm": [123.53450012207031, 23.007387161254883, -52.624061584472656], "WINDOWS_FILE:Write[system].exe": [22.204914093017578, 22.122066497802734, -51.779319763183594], "WINDOWS_FILE:Write[users].rnd": [8.702498435974121, 72.45694732666016, 13.676323890686035], "WINDOWS_FILE:Write[appdata (local)].rnd": [-34.733028411865234, 1.230470895767212, 36.767147064208984], "WINDOWS_FILE:Write[appdata].rnd": [-67.92977905273438, -58.3128776550293, -55.5527458190918], "WINDOWS_FILE:Write[windows].rnd": [63.51344680786133, -85.21803283691406, 65.75773620605469], "WINDOWS_FILE:Write[program files common].dll": [28.994680404663086, 17.43680763244629, 0.2664707899093628], "WINDOWS_FILE:Write[winsxs].dll": [29.993301391601562, -12.823363304138184, 76.50281524658203], "WINDOWS_FILE:Write[winsxs].cat": [24.757125854492188, 2.6249890327453613, 22.30000877380371], "WINDOWS_FILE:Write[winsxs].manifest": [83.4396743774414, -83.61585235595703, -10.59247875213623], "WINDOWS_FILE:Write[winsxs].policy": [-16.07394790649414, -6.66970157623291, -72.71813201904297], "WINDOWS_FILE:Delete[winsxs].0": [-30.055307388305664, 42.83304977416992, -102.62057495117188], "WINDOWS_FILE:Delete[winsxs].1": [-21.60984992980957, 43.90138244628906, -84.9266357421875], "WINDOWS_FILE:Write[winsxs].bin": [61.89707946777344, 34.54636764526367, 37.98575973510742], "WINDOWS_FILE:Write[winsxs]": [126.30818939208984, -30.797407150268555, -49.96901321411133], "WINDOWS_FILE:Delete[winsxs]": [-68.12730407714844, -66.65744018554688, -17.0245361328125], "WINDOWS_FILE:Write[winsxs].8_none_bcb86ed6ac711f91": [-41.755897521972656, -61.131019592285156, 54.79618835449219], "WINDOWS_FILE:Write[winsxs].8_none_b81d038aaf540e86": [16.01209259033203, 16.421579360961914, 38.50421142578125], "WINDOWS_FILE:Write[winsxs].8_none_b59bae9d65014b98": [64.11263275146484, -50.267578125, -19.972322463989258], "WINDOWS_PROCESS:Spawn[program files common].exe": [5.361149787902832, 1.8797268867492676, 2.0795271396636963], "WINDOWS_FILE:Write[program files common]": [52.98469161987305, 30.550556182861328, -43.301658630371094], "WINDOWS_FILE:Execute[program files common].exe": [-84.27426147460938, -105.12605285644531, -6.250803470611572], "WINDOWS_FILE:Delete[program files common]": [-24.878780364990234, 11.756071090698242, -43.532318115234375], "WINDOWS_FILE:Write[program files common].rra": [56.83837890625, 12.443084716796875, -18.289758682250977], "WINDOWS_FILE:Write[program files].rra": [-18.01570701599121, 12.369841575622559, -10.617209434509277], "WINDOWS_FILE:Delete[temp].rra": [32.15309143066406, -34.68418502807617, 53.321983337402344], "WINDOWS_FILE:Write[program data].rra": [66.9371566772461, -76.2332763671875, 42.22175598144531], "WINDOWS_REGISTRY:Create[registry (machine)].exe": [60.5906867980957, -35.39356994628906, -111.83003997802734], "WINDOWS_FILE:Write[windows].cab": [-9.119671821594238, 24.178359985351562, -59.84328842163086], "WINDOWS_FILE:Write[windows].ev3": [-16.44943618774414, -36.54170227050781, 12.376152038574219], "WINDOWS_FILE:Write[windows].ev1": [1.6529340744018555, -26.037113189697266, 17.077402114868164], "WINDOWS_FILE:Write[windows].ev2": [-24.761112213134766, -126.87429809570312, -48.20399475097656], "WINDOWS_FILE:Write[appdata (local)].htm": [9.02453327178955, -77.69733428955078, -101.94163513183594], "WINDOWS_FILE:Write[appdata (local)].gif": [-68.7080078125, -0.15266375243663788, -64.55567932128906], "WINDOWS_FILE:Write[appdata (local)].js": [58.057373046875, 13.897122383117676, 11.007848739624023], "WINDOWS_FILE:Write[windows].mst": [-5.619879722595215, -85.63946533203125, 20.63287353515625], "WINDOWS_FILE:Write[windows].msp": [-7.877259254455566, -90.40928649902344, -3.6698858737945557], "WINDOWS_REGISTRY:Create[registry (machine)].0": [80.61042785644531, -5.35099458694458, -21.73195457458496], "WINDOWS_FILE:Write[appdata].msi": [36.168636322021484, -7.743218421936035, -92.98828125], "WINDOWS_FILE:Write[program files].cat": [65.45561218261719, -9.068568229675293, 12.970852851867676], "WINDOWS_FILE:Write[program files].bmp": [69.4199447631836, 13.340675354003906, -49.236366271972656], "WINDOWS_FILE:Write[program files].new": [37.60502243041992, -66.13742065429688, -40.236751556396484], "WINDOWS_FILE:Delete[temp]._is": [133.91790771484375, -38.39214324951172, -1.9806069135665894], "WINDOWS_FILE:Write[program files].lpk": [76.12784576416016, 97.6075668334961, 71.85745239257812], "WINDOWS_FILE:Write[appdata].ini": [61.832664489746094, 44.73672103881836, -109.60470581054688], "WINDOWS_FILE:Write[windows].dll": [55.87120056152344, -24.111989974975586, 47.30553436279297], "WINDOWS_FILE:Write[windows].8c0c59a0_7dc8_11d2_b95d_006097c4de24": [55.678897857666016, -11.463773727416992, -47.446372985839844], "WINDOWS_FILE:Delete[temp].exe": [53.662532806396484, 58.89485549926758, -71.449951171875], "WINDOWS_FILE:Delete[temp].ini": [-4.904919147491455, -119.20793914794922, 23.381900787353516], "WINDOWS_FILE:Delete[temp].png": [62.93510818481445, -19.884777069091797, -26.194398880004883], "WINDOWS_FILE:Write[program files].ion": [52.7353401184082, -7.061942100524902, -75.71634674072266], "WINDOWS_FILE:Write[program files].lst": [-5.504734992980957, -58.87240219116211, -87.78932189941406], "WINDOWS_FILE:Write[program files].sfx": [-63.052154541015625, -38.52854537963867, -53.5625], "WINDOWS_REGISTRY:Create[registry (machine)].iso": [-24.632736206054688, -26.548053741455078, -96.06565856933594], "WINDOWS_FILE:Execute[windows].ttf": [35.479164123535156, -56.63029479980469, -5.122422218322754], "WINDOWS_FILE:Write[winsxs].6195_none_d09154e044272b9a": [41.09088134765625, -89.79838562011719, -39.2651481628418], "WINDOWS_FILE:Write[system].x32": [-18.06783103942871, -48.98772430419922, 37.29997253417969], "WINDOWS_FILE:Delete[temp].mum": [41.568458557128906, -30.223573684692383, -34.07912063598633], "WINDOWS_FILE:Delete[temp].manifest": [-50.94644546508789, -39.23849868774414, -38.33081817626953], "WINDOWS_FILE:Write[program files].ovpn": [-37.82282638549805, -64.4762191772461, -23.563047409057617], "WINDOWS_FILE:Write[start menu (common)].url": [13.116591453552246, 3.3458378314971924, -80.62450408935547], "WINDOWS_FILE:Write[program data].msi": [25.026952743530273, -112.89114379882812, 17.314952850341797], "WINDOWS_FILE:Write[program files].plist": [76.52999114990234, 14.37104320526123, -87.14096069335938], "WINDOWS_FILE:Write[program files].strings": [-38.848697662353516, -37.59584045410156, 106.07616424560547], "WINDOWS_FILE:Write[program files].icc": [54.34435272216797, -44.41181182861328, 59.69013595581055], "WINDOWS_FILE:Write[program files].json": [54.93621063232422, -86.13614654541016, -11.541803359985352], "WINDOWS_FILE:Write[program files].qrc": [16.235553741455078, -116.3732681274414, -97.6260757446289], "WINDOWS_FILE:Write[program files].re2js": [-48.321617126464844, -90.95155334472656, -74.43180084228516], "WINDOWS_FILE:Write[program files].tif": [28.686433792114258, -86.11295318603516, -3.9377787113189697], "WINDOWS_FILE:Write[program files].pltsuite": [63.62040710449219, 61.05781936645508, -41.65013122558594], "WINDOWS_FILE:Write[program files].pdf": [-99.85674285888672, -42.93906784057617, -38.331077575683594], "WINDOWS_FILE:Write[program files].qm": [14.87629222869873, -17.607707977294922, -18.26282501220703], "WINDOWS_FILE:Write[program files].rcc": [28.82283592224121, 141.1165771484375, -23.25269317626953], "WINDOWS_FILE:Write[program files].kml": [22.820499420166016, -149.86990356445312, -0.9651052951812744], "WINDOWS_FILE:Write[program files].acf": [-6.718064308166504, -65.76212310791016, 69.44384765625], "WINDOWS_FILE:Write[program files].glslesf": [32.384647369384766, -30.75925636291504, 25.927209854125977], "WINDOWS_FILE:Write[program files].glslesv": [23.145612716674805, -143.93536376953125, -36.62186813354492], "WINDOWS_FILE:Write[program files].glsllib": [7.314521789550781, -140.3007049560547, -25.222034454345703], "WINDOWS_FILE:Write[program files].h": [35.43505859375, -82.40010833740234, -90.1124496459961], "WINDOWS_FILE:Write[program files].arbfp1": [72.59243774414062, -34.2936897277832, -44.90022659301758], "WINDOWS_FILE:Write[program files].arbvp1": [-3.3683106899261475, -134.03106689453125, -52.803565979003906], "WINDOWS_FILE:Write[program files].asd": [-68.18685150146484, 22.638214111328125, -101.44921112060547], "WINDOWS_FILE:Write[program files].ps_2_0": [-41.019203186035156, -80.4444351196289, -46.25524139404297], "WINDOWS_FILE:Write[program files].vs_2_0": [-12.51296329498291, -83.81782531738281, -27.522851943969727], "WINDOWS_FILE:Write[program files].csv": [-85.5350570678711, -27.29090690612793, -91.82097625732422], "WINDOWS_FILE:Delete[program data].txt": [-0.9675592184066772, -48.38124084472656, 48.72673416137695], "WINDOWS_FILE:Write[appdata (local)].pak": [37.26156234741211, -96.45085906982422, -70.00341796875], "WINDOWS_FILE:Write[appdata (local)].html": [-21.559659957885742, -77.8445053100586, 47.668819427490234], "WINDOWS_FILE:Write[appdata (local)].handlebars": [60.62678527832031, -46.68779754638672, 19.781864166259766], "WINDOWS_FILE:Write[appdata (local)].svg": [10.993927955627441, -45.900726318359375, -26.570274353027344], "WINDOWS_FILE:Write[appdata (local)].txt": [-50.30092239379883, -85.4381103515625, 2.107090711593628], "WINDOWS_FILE:Delete[appdata (local)].compare": [-54.312171936035156, -16.51262092590332, -93.04035186767578], "WINDOWS_FILE:Write[program data].png": [74.2116470336914, -22.279268264770508, -72.76557159423828], "WINDOWS_FILE:Write[program data].jpg": [-32.94850540161133, -110.1034164428711, 8.757935523986816], "WINDOWS_FILE:Write[program data].rtf": [35.471343994140625, -54.743839263916016, 27.33514976501465], "WINDOWS_FILE:Write[program data].chm": [24.81610870361328, -29.195688247680664, -1.4340291023254395], "WINDOWS_FILE:Write[documents].mp3": [42.063621520996094, -10.618369102478027, -6.592703819274902], "WINDOWS_FILE:Write[program files].mp3": [47.904258728027344, -27.720096588134766, 10.849767684936523], "WINDOWS_FILE:Write[program data].vdm": [41.91841506958008, -91.28861236572266, 18.512544631958008], "WINDOWS_FILE:Write[documents].ini": [-21.793350219726562, -8.592968940734863, 8.79643726348877], "WINDOWS_FILE:Write[program files].diz": [-154.44790649414062, -141.31951904296875, -44.69314193725586], "WINDOWS_FILE:Write[program files].fmt": [-10.483541488647461, -112.51029968261719, -87.80026245117188], "WINDOWS_FILE:Delete[temp].dld": [-15.24150562286377, -46.516685485839844, -17.555309295654297], "WINDOWS_FILE:Write[program files].tr2": [-22.240215301513672, -104.91226196289062, -68.34112548828125], "WINDOWS_FILE:Write[program files].ogg": [-72.25003814697266, -28.383625030517578, -7.176743030548096], "WINDOWS_FILE:Write[program files].rttex": [5.186407089233398, -53.63444137573242, 24.358121871948242], "WINDOWS_FILE:Delete[temp].madexcept": [-36.91484451293945, -22.36064338684082, -59.810447692871094], "WINDOWS_REGISTRY:Create[registry (machine)].0,,b03f5f7f11d50a3a,msil": [17.347946166992188, -80.91690063476562, -58.679161071777344], "WINDOWS_FILE:Write[windows].design": [94.92349243164062, -45.60919952392578, -25.8295841217041], "WINDOWS_REGISTRY:Create[registry (machine)].0,,b77a5c561934e089,msil": [47.15150451660156, 25.7618350982666, -76.43286895751953], "WINDOWS_REGISTRY:Create[registry (machine)].0,,31bf3856ad364e35,msil": [-100.17406463623047, -32.01309585571289, -63.25914001464844], "WINDOWS_FILE:Write[windows].0": [3.9088761806488037, -102.63624572753906, -55.50943374633789], "WINDOWS_FILE:Write[program files common].exe": [-25.450796127319336, -64.4636001586914, -46.135623931884766], "WINDOWS_FILE:Write[program files].tpp": [85.49066162109375, 22.937618255615234, 53.04603958129883], "WINDOWS_FILE:Write[silverlight].exe": [10.772967338562012, -85.06570434570312, -27.6405086517334], "WINDOWS_FILE:Write[silverlight].dll": [23.50611686706543, -21.855926513671875, -55.45947265625], "WINDOWS_FILE:Write[program files].ada": [4.15533447265625, -110.57844543457031, -23.808406829833984], "WINDOWS_FILE:Write[program files].wsch": [-24.418132781982422, -102.95503234863281, -24.172199249267578], "WINDOWS_FILE:Write[program data].rsm": [-41.09229278564453, 2.632432460784912, -86.52031707763672], "WINDOWS_FILE:Write[program files].ax": [36.951717376708984, 1.6516169309616089, -29.139310836791992], "WINDOWS_FILE:Write[program files].bpl": [42.339542388916016, -147.9296417236328, -83.01646423339844], "WINDOWS_FILE:Write[program data].htm": [112.40716552734375, 55.697444915771484, 35.22200012207031], "WINDOWS_FILE:Write[program data].cfg": [13.345669746398926, -67.24762725830078, -75.75101470947266], "WINDOWS_FILE:Write[program data].tudb-journal": [94.45735168457031, 12.197352409362793, 20.258150100708008], "WINDOWS_FILE:Write[program data].tudb": [-0.8606859445571899, -66.79501342773438, -39.325286865234375], "WINDOWS_FILE:Write[program files].avi": [21.5400447845459, -119.25118255615234, -69.84239196777344], "WINDOWS_FILE:Write[program files].tico": [41.34375, -129.61683654785156, -58.66958236694336], "WINDOWS_FILE:Write[appdata].png": [-5.223891735076904, -82.1509017944336, -68.91500854492188], "WINDOWS_FILE:Write[program files].mui": [85.62744140625, -1.5515882968902588, 36.60608673095703], "WINDOWS_FILE:Write[documents].db": [86.37409973144531, 57.61338424682617, 58.36750793457031], "WINDOWS_FILE:Write[program files common].txt": [69.24606323242188, -85.39239501953125, -31.229766845703125], "WINDOWS_FILE:Write[users].ini": [11.991324424743652, -95.24459075927734, -78.45345306396484]}


    return [ scatter3Data, words ];
}

export function loadParallelData(){
    let parallel = [
        ['user1', 1,55,9,0.3,0.9],
        ['user2', 0.5,5,30,0.9, 0.4],
        ['user3', 0.1,3,92,0.3, 0.2],
        ['user4', 0.8, 30, 0.28, 33,0.3]
    ];

    return parallel;
}