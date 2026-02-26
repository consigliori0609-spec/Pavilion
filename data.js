var APP_DATA = {
  "scenes": [
    {
      "id": "0----1",
      "name": "Вид с улицы 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9833318151041901,
          "pitch": 0.08966393378459969,
          "rotation": 4.71238898038469,
          "target": "1----2"
        },
        {
          "yaw": 0.1138663410839289,
          "pitch": 0.02074966208382989,
          "rotation": 7.853981633974483,
          "target": "2----"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1----2",
      "name": "Вид с улицы 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.21837251861517615,
          "pitch": 0.015199532295197216,
          "rotation": 4.71238898038469,
          "target": "2----"
        },
        {
          "yaw": -0.8305786256849572,
          "pitch": 0.06563103902819023,
          "rotation": 1.5707963267948966,
          "target": "0----1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2----",
      "name": "Вид на открытую террасу",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1774423155526197,
          "pitch": 0.11682654000869519,
          "rotation": 8.63937979737193,
          "target": "0----1"
        },
        {
          "yaw": -1.055385061220706,
          "pitch": 0.11110399622533862,
          "rotation": 3.9269908169872414,
          "target": "1----2"
        },
        {
          "yaw": 3.0883575322219725,
          "pitch": 0.24840410549906977,
          "rotation": 0,
          "target": "3---"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3---",
      "name": "Вид на интерьер",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2071804662913834,
          "pitch": 0.1236322079368577,
          "rotation": 3.141592653589793,
          "target": "0----1"
        },
        {
          "yaw": 2.009602610784772,
          "pitch": 0.1279709507774065,
          "rotation": 3.141592653589793,
          "target": "1----2"
        },
        {
          "yaw": 3.1324861865061564,
          "pitch": 0.3780512848509634,
          "rotation": 0,
          "target": "2----"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
