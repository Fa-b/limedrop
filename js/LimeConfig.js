LimeConfig = {
    "ItemGroup": {
		"Runes": {
			"regex": "(?=.+?:6([1-3][0-9]|4[0-2]):[37]:\\d:\\d$)",
		},
		"Gems": {
			"regex": "(?=.+?:(5([6-7][0-9]|5[7-9]|8[0-6]|9[7-9])|60[0-1]):[37]:\\d:\\d$)",
		},
		"Keys": {
			"regex": "(?=.+?:64[7-9]:[37]:\\d:\\d$)",
		},
		"Organs": {
			"regex": "(?=.+?:65[0-2]:[37]:\\d:\\d$)",
		},
		"Token": {
			"regex": "(?=.+?:653:[37]:\\d:\\d$)",
		},
		"Essences": {
			"regex": "(?=.+?:65[4-7]:[37]:\\d:\\d$)",
		},
		"Standards": {
			"regex": "(?=.+?:658:[37]:\\d:\\d$)",
		},
		"Sojs": {
			"regex": "(?=ÿc4the stone of jordan.+?:522:[37]:\\d:\\d$)",
		},
		"BulKathos": {
			"regex": "(?=ÿc4bul-kathos'.+?5\\%.+?:522:[37]:\\d:\\d$)",
		},
		"Maras": {
			"regex": "(?=ÿc4Mara.+?:520:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d\\d)\\$.+$", "$1@"]
			]
		},
		"Rbf": {
			"regex": "(?=ÿc4rainbow.+?:643:[37]:\\d:\\d$)",
			"specs": [
				["^.+(.\\d)\\%.+(.\\d)\\%.+\\$.+$", "$1/$2"],
				["^.+((fire)|(cold)|(light)|(poison)).+$", "$1"],
				["^.+((level-up)|(die)).+$", "$1"]
			]
		},
		"NonEthUnid": {
			"regex": "(?=.+?unidentified.+?[37]:\\d:\\d$)",
		},
		"EthUnid": {
			"regex": "(?=.+?unidentified.+?[37]:\\d:\\d:eth$)",
		}
	},
    "SearchFilter": {
        "Sockets": {
            "type":"text",
            "mask":"^([0-6](([-:][0-6])|([,;][0-6])*)*)$",
            "default":"0-6",	
            "regex":[
                        ["(0-6)", ""],
                        ["^(.*.),(0.*)$", "$1$2"],
                        ["^(.*0),(..*)$", "$1$2"],
                        ["([^0]+)", ",(?=.*socketed \\($1\\)\\$)"],
                        ["([1-6]-[1-6])", "[$1]"],
                        ["(0)", ",(?!.*socketed \\((.)\\)\\$)"],
                        ["^[^\\d](-)[^\\d]$", ""],
                        ["^,(.*)+$", "(?=$1)"],
                        [",", "|"]
                    ]
            },
        "Ethereal": {
            "type":"tristate",
            "default":"Eth & Non-Eth",
            "checked":"Eth",
            "indeterminate":"Eth & Non-Eth",
            "unchecked":"Non-Eth",
            "regex":[
                        ["^(Eth)$", "(?=.*:eth)"],
                        ["^(Eth & Non-Eth)$", ""],
                        ["^(Non-Eth)$", "(?!.*:eth)"]
                    ]
        },
        "Unidentified": {
            "type":"tristate",
            "default":"Unid & Id",
            "checked":"Unid",
            "indeterminate":"Unid & Id",
            "unchecked":"Id",
            "regex":[
                        ["^(Unid)$", "(?=.*unid)"],
                        ["^(Unid & Id)$", ""],
                        ["^(Id)$", "(?!.*unid)"]
                    ]
        },
        "Quality": {
            "type":"multi",
            "default":["Low Quality", "Normal", "Superior", "Magic", "Set", "Rare", "Unique", "Crafted"],
            "values":["Low Quality", "Normal", "Superior", "Magic", "Set", "Rare", "Unique", "Crafted"],
            "regex":[
						["^(Low Quality, Normal, Superior, Magic, Set, Rare, Unique, Crafted)$", ""],
                        ["^(.+)", "((?:(?!\\\\n)$1).*)"],
                        ["(Low Quality)", "(ÿc0)(low quality|cracked|crude|damaged)"],
                        ["(Normal)", "(ÿc[05])(?!sup)"],
                        ["(Superior)", "(ÿc[05])(sup)"],
                        ["(Magic)", "(ÿc3)"],
                        ["(Set)", "(ÿc2)"],
                        ["(Rare)", "(ÿc9)"],
                        ["(Unique)", "(ÿc4)"],
                        ["(Crafted)", "(ÿc8)"],
                        ["(, )", "|"]
                    ]
        }
    }
}
