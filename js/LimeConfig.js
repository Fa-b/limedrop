LimeConfig = {
    "ItemGroup": {
		"Runes": [":6([1-3][0-9]|4[0-2]):[37]:\\d:\\d$"],
		"Gems": [":(5([6-7][0-9]|5[7-9]|8[0-6]|9[7-9])|60[0-1]):[37]:\\d:\\d$"],
		"Keys": [":64[7-9]:[37]:\\d:\\d$"],
		"Organs": [":65[0-2]:[37]:\\d:\\d$"],
		"Token": [":653:[37]:\\d:\\d$"],
		"Essences": [":65[4-7]:[37]:\\d:\\d$"],
		"Standards": [":658:[37]:\\d:\\d$"],
	},
    "SearchFilter": {
        "Sockets": {
            "type":"text",
            "mask":"^([0-6](([-:][0-6])|([,;][0-6])*)*)$",
            "default":"0-6",
            "regex":[["^", "sockets:"], ["([0-6]-[0-6])", "[$1]"], ["(,)", "|"]]
            },
        "Ethereal": {
            "type":"tristate",
            "default":"Eth & Non-Eth",
            "checked":"Eth",
            "indeterminate":"Eth & Non-Eth",
            "unchecked":"Non-Eth",
            "regex":[["^(Eth)$", ":eth"], ["^(Eth & Non-Eth)$", ""], ["^(Non-Eth)$", "^(?!:eth)"]]
        },
        "Unidentified": {
            "type":"tristate",
            "default":"Unid & Id",
            "checked":"Unid",
            "indeterminate":"Unid & Id",
            "unchecked":"Id",
            "regex":[["^(Unid)$", "unidentified"], ["^(Unid & Id)$", ""], ["^(Id)$", "^(?!unidentified)"]]
        },
        "Quality": {
            "type":"multi",
            "default":["Low Quality", "Normal", "Superior", "Magic", "Set", "Rare", "Unique", "Crafted"],
            "values":["Low Quality", "Normal", "Superior", "Magic", "Set", "Rare", "Unique", "Crafted"],
            "regex":[["(Low Quality)", "(lowquality)"], ["(Normal)", "(magic)"], ["(Superior)", "(superior)"], ["(Magic)", "(magic)"], ["(Set)", "(set)"], ["(Rare)", "(rare)"], ["(Unique)", "(unique)"], ["(Crafted)", "(crafted)"], ["(,)", "|"]]
        }
    }
}