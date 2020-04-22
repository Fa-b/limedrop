LimeConfig = {
    "ItemGroup": {
/************************************************* MISC *************************************************/
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
		"Annis" : {
			"regex": "(?=ÿc4anni.+?:603:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d+) to.+resistances \\+(\\d+).+\\+(\\d+)\\%.+$", "$1/$2/$3"]
			]
		},
		"SorcTorches" : {
			"regex": "(?=ÿc4hellfire.+?sorc.+?:604:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d+) to.+resistances \\+(\\d+).+$", "$1/$2"]
			]
		},
		"PalaTorches" : {
			"regex": "(?=ÿc4hellfire.+?pala.+?:604:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d+) to.+resistances \\+(\\d+).+$", "$1/$2"]
			]
		},
		"NecTorches" : {
			"regex": "(?=ÿc4hellfire.+?nec.+?:604:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d+) to.+resistances \\+(\\d+).+$", "$1/$2"]
			]
		},
		"AmaTorches" : {
			"regex": "(?=ÿc4hellfire.+?ama.+?:604:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d+) to.+resistances \\+(\\d+).+$", "$1/$2"]
			]
		},
		"BarbTorches" : {
			"regex": "(?=ÿc4hellfire.+?barb.+?:604:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d+) to.+resistances \\+(\\d+).+$", "$1/$2"]
			]
		},
		"AssaTorches" : {
			"regex": "(?=ÿc4hellfire.+?assa.+?:604:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d+) to.+resistances \\+(\\d+).+$", "$1/$2"]
			]
		},
		"DruidTorches" : {
			"regex": "(?=ÿc4hellfire.+?druid.+?:604:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d+) to.+resistances \\+(\\d+).+$", "$1/$2"]
			]
		},
		"Sojs": {
			"regex": "(?=ÿc4the stone of jordan.+?:522:[37]:\\d:\\d$)",
		},
		"BulKathos": {
			"regex": "(?=ÿc4bul-kathos'.+?:522:[37]:\\d:\\d$)",
			"specs": [
				["^.+(\\d)\\% life.+$", "$1ll"]
			]
		},
		"Manald": {
			"regex": "(?=ÿc4manald.+?:522:[37]:\\d:\\d$)",
			"specs": [
				["^.+(\\d)\\% mana.+life \\+(\\d).+$", "$1ml, $2rpl"]
			]
		},
		"Nagel": {
			"regex": "(?=ÿc4nagel.+?:522:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d+) to attack.+(\\d\\d)%.+$", "$1ar, $2mf"]
			]
		},
		"Raven": {
			"regex": "(?=ÿc4raven.+?:522:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d+) to attack.+(\\d\\d) to dex.+$", "$1ar, $2dex"]
			]
		},
		"Dwarf": {
			"regex": "(?=ÿc4dwarf.+?:522:[37]:\\d:\\d$)"
		},
		"Maras": {
			"regex": "(?=ÿc4mara.+?:520:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d+)\\$.+$", "$1@"]
			]
		},
		"Highlord": {
			"regex": "(?=ÿc4highlord.+?:520:[37]:\\d:\\d$)"
		},
		"CatsEye": {
			"regex": "(?=ÿc4the cat.+?:520:[37]:\\d:\\d$)"
		},
		"Rbf": {
			"regex": "(?=ÿc4rainbow.+?:643:[37]:\\d:\\d$)",
			"specs": [
				["^.+(.\\d)\\%.+(.\\d)\\%.+$", "$1/$2"],
				["^.+(\\d\\d meteor|\\d\\d blizzard|\\d\\d chain lightning|\\d\\d venom).+(fire|cold|light|poison).+(fire|cold|light|poison).+(fire|cold|light|poison).+$", "$2"],
				["^.+(level.up|die).+$", "$1"]
			]
		},
/************************************************* AXES *************************************************/
        "Normal1HAxes": { // handaxe, axe, doubleaxe, militarypick, waraxe
			"regex": "(?=^ÿc[05].+?:[0-4]:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "Normal2HAxes": { // largeaxe, broadaxe, battleaxe, greataxe, giantaxe
			"regex": "(?=^ÿc[05].+?:[5-9]:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "Exceptional1HAxes": { // hatchet, cleaver, twinaxe, crowbill, naga
			"regex": "(?=^ÿc[05].+?:9[3-7]:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "Exceptional2HAxes": { // militaryaxe, beardedaxe, tabar, gothicaxe, ancientaxe
			"regex": "(?=^ÿc[05].+?:(9[8-9]|10[0-2]):[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "Elite1HAxes": { // tomahawk, smallcrescent, ettinaxe, warspike, berserkeraxe
			"regex": "(?=^ÿc[05].+?:(19[6-9]|200):[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "Elite2HAxes": { // feralaxe, silveredgedaxe, decapitator, champrionaxe, gloriousaxe
			"regex": "(?=^ÿc[05].+?:20[1-5]:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
/************************************************* BOWS *************************************************/
        "NormalBows": { // shortbow, huntersbow, longbow, compositebow, shortbattlebow, longbattlebow, shortwarbow, longwarbow
			"regex": "(?=^ÿc[05].+?:(6[8-9]|7[0-5]):[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "ExceptionalBows": { // edgebow, razorbow, cedarbow, doublebow, shortsiegebow, largesiegebow, runebow, gothicbow
			"regex": "(?=^ÿc[05].+?:16[1-8]:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "EliteBows": { // spiderbow, bladebow, shadowbow, greatbow, diamondbow, crusaderbow, wardbow, hydrabow
			"regex": "(?=^ÿc[05].+?:2(6[4-9]|7[0-1]):[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
// CLASS SPECIFIC:
        "AmaNormalBows": { // stagbow, reflexbow
			"regex": "(?=^ÿc[05].+?:28[1-2]:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
                ["^.+(\\+\\d) to (.+) \\(ama.+$", "$1 Bow"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "AmaExceptionalBows": { // stagbow, reflexbow
			"regex": "(?=^ÿc[05].+?:28[1-2]:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
                ["^.+(\\+\\d) to (.+) \\(ama.+$", "$1 Bow"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "AmaEliteBows": { // matriarchalbow, grandmatronbow
			"regex": "(?=^ÿc[05].+?:30[1-2]:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
                ["^.+(\\+\\d) to (.+) \\(ama.+$", "$1 Bow"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
/************************************************* CROSSBOWS *************************************************/
        "NormalCrossbows": { // lightcrossbow, crossbow, heavycrossbow, repeatingcrossbow
			"regex": "(?=^ÿc[05].+?:7[6-9]:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "ExceptionalCrossbows": { // arbalest, siegecrossbow, ballista, chukonu
			"regex": "(?=^ÿc[05].+?:1(69|7[0-2]):[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "EliteCrossbows": { // pelletbow, gorgoncrossbow, colossuscrossbow, demoncrossbow
			"regex": "(?=^ÿc[05].+?:27[2-5]:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
/************************************************* DAGGERS *************************************************/
        "NormalDaggers": { // dagger, dirk, kris, blade
			"regex": "(?=^ÿc[05].+?:(39|4[0-2]):[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "ExceptionalDaggers": { // poignard, rondel, cinquedeas, stiletto
			"regex": "(?=^ÿc[05].+?:13[2-5]:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "EliteDaggers": { // boneknife, mithrilpoint, fangedknife, legendspike
			"regex": "(?=^ÿc[05].+?:23[5-8]:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
/************************************************* JAVELINS *************************************************/
        "NormalJavelins": { // javelin, pilum, shortspear, glaive, throwingspear
			"regex": "(?=^ÿc[05].+?:(4[7-9]|5[0-1]):[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
				["^.+:eth$", "Eth"],
			]
		},
        "ExceptionalJavelins": { // warjavelin, greatpilum, simbilan, spiculum, harpoon
			"regex": "(?=^ÿc[05].+?:14[0-4]:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
				["^.+:eth$", "Eth"],
			]
		},
        "EliteJavelins": { // hyperionjavelin, stygianpilum, balrogspear, ghostglaive, wingedharpoon
			"regex": "(?=^ÿc[05].+?:24[3-7]:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
				["^.+:eth$", "Eth"],
			]
		},
// CLASS SPECIFIC:
        "AmaNormalJavelins": { // maidenjavelin
			"regex": "(?=^ÿc[05].+?:285:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
                ["^.+(\\+\\d) to (.+) \\(ama.+$", "$1 Javelin & Spear"],
				["^.+:eth$", "Eth"],
			]
		},
        "AmaExceptionalJavelins": { // ceremonialjavelin
			"regex": "(?=^ÿc[05].+?:295:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
                ["^.+(\\+\\d) to (.+) \\(ama.+$", "$1 Javelin & Spear"],
				["^.+:eth$", "Eth"],
			]
		},
        "AmaEliteJavelins": { // matriarchaljavelin
			"regex": "(?=^ÿc[05].+?:305:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
                ["^.+(\\+\\d) to (.+) \\(ama.+$", "$1 Javelin & Spear"],
				["^.+:eth$", "Eth"],
			]
		},
/************************************************* MACES *************************************************/
        "NormalMaces": { // mace, morningstar, flail
			"regex": "(?=^ÿc[05].+?:(19|2[0-1]):[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "ExceptionalMaces": { // flangedmace, jaggedstar, knout
			"regex": "(?=^ÿc[05].+?:11[2-4]:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "EliteMaces": { // reinforcedmace, devilstar, scourge
			"regex": "(?=^ÿc[05].+?:21[5-7]:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
/************************************************* POLEARMS *************************************************/
        "NormalPolearms": { // bardiche, voulge, scythe, poleaxe, halberd, warscythe
			"regex": "(?=^ÿc[05].+?:(5[7-9]|6[0-2]):[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "ExceptionalPolearms": { // lochaberaxe, bill, battlescythe, partizan, becdecorbin, grimscythe
			"regex": "(?=^ÿc[05].+?:15[0-5]:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "ElitePolearms": { // ogreaxe, colossusvoulge, thresher, crypticaxe, greatpoleaxe, giantthresher
			"regex": "(?=^ÿc[05].+?:25[3-8]:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
/************************************************* SCEPTERS *************************************************/
        "NormalScepters": { // scepter, grandscepter, warscepter
			"regex": "(?=^ÿc[05].+?:1[5-7]:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
                ["^.+(\\+\\d) to (.+) \\(pala.+\\(pala.+\\(pala.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(pala.+\\(pala.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(pala.+$", "$1 $2"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "ExceptionalScepters": { // runescepter, holywatersprinkler, divinescepter
			"regex": "(?=^ÿc[05].+?:(10[8-9]|110):[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
                ["^.+(\\+\\d) to (.+) \\(pala.+\\(pala.+\\(pala.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(pala.+\\(pala.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(pala.+$", "$1 $2"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "EliteScepters": { // mightyscepter, seraphrod, caduceus
			"regex": "(?=^ÿc[05].+?:21[1-3]:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
                ["^.+(\\+\\d) to (.+) \\(pala.+\\(pala.+\\(pala.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(pala.+\\(pala.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(pala.+$", "$1 $2"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
/************************************************* SPEARS *************************************************/
        "NormalSpears": { // spear, trident, brandistock, spetum, pike
			"regex": "(?=^ÿc[05].+?:5[2-6]:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "ExceptionalSpears": { // warspear, fuscina, warfork, yari, lance
			"regex": "(?=^ÿc[05].+?:14[5-9]:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "EliteSpears": { // hyperionspear, stygianpike, mancatcher, ghostspear, warpike
			"regex": "(?=^ÿc[05].+?:2(4[8-9]|5[0-2]):[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
// CLASS SPECIFIC:
        "AmaNormalSpears": { // maidenspear, maidenpike
			"regex": "(?=^ÿc[05].+?:28[3-4]:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
                ["^.+(\\+\\d) to (.+) \\(ama.+$", "$1 Javelin & Spear"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "AmaExceptionalSpears": { // ceremonialspear, ceremonialpike
			"regex": "(?=^ÿc[05].+?:29[3-4]:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
                ["^.+(\\+\\d) to (.+) \\(ama.+$", "$1 Javelin & Spear"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "AmaEliteSpears": { // matriarchalspear, matriarchalpike
			"regex": "(?=^ÿc[05].+?:30[3-4]:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
                ["^.+(\\+\\d) to (.+) \\(ama.+$", "$1 Javelin & Spear"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
/************************************************* STAVES *************************************************/
        "NormalStaves": { // shortstaff, longstaff, gnarledstaff, battlestaff, warstaff
			"regex": "(?=^ÿc[05].+?:6[3-7]:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
                ["^.+(\\+\\d) to (.+) \\(sorc.+\\(sorc.+\\(sorc.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(sorc.+\\(sorc.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(sorc.+$", "$1 $2"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "ExceptionalStaves": { // jostaff, quarterstaff, cedarstaff, gothicstaff, runestaff
			"regex": "(?=^ÿc[05].+?:(15[6-9]|160):[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
                ["^.+(\\+\\d) to (.+) \\(sorc.+\\(sorc.+\\(sorc.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(sorc.+\\(sorc.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(sorc.+$", "$1 $2"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "EliteStaves": { // walkingstick, stalagmite, elderstaff, shillelagh, archonstaff
			"regex": "(?=^ÿc[05].+?:(259|26[0-3]):[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
                ["^.+(\\+\\d) to (.+) \\(sorc.+\\(sorc.+\\(sorc.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(sorc.+\\(sorc.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(sorc.+$", "$1 $2"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
/************************************************* SWORDS *************************************************/
        "Normal1HSwords": { // shortsword, scimitar, sabre, falchion, crystalsword, broadsword, longsword, warsword
			"regex": "(?=^ÿc[05].+?:(2[5-9]|3[0-2]):[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "Normal2HSwords": { // twohandedsword, claymore, giantsword, bastardsword, flamberge, greatsword
			"regex": "(?=^ÿc[05].+?:3[3-8]:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "Exceptional1HSwords": { // gladius, cutlass, shamshir, tulwar, dimensionalblade, battlesword, runesword, ancientsword
			"regex": "(?=^ÿc[05].+?:1(1[8-9]|2[0-5]):[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "Exceptional2HSwords": { // espandon, dacianfalx, tusksword, gothicsword, zweihander, executionersword
			"regex": "(?=^ÿc[05].+?:1(2[6-9]|3[0-1]):[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "Elite1HSwords": { // falcata, ataghan, elegantblade, hydraedge, phaseblade, conquestsword, crypitcsword, mythicalsword
			"regex": "(?=^ÿc[05].+?:22[1-8]:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "Elite2HSwords": { // legendsword, highlandblade, balrogblade, championsword, colossussword, colossusblade
			"regex": "(?=^ÿc[05].+?:(229|23[0-4]):[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
/************************************************* THROWING WEAPONS *************************************************/
        "NormalThrowing": { // throwingknife, throwingaxe, balancedknife, balancedaxe
			"regex": "(?=^ÿc[05].+?:4[3-6]:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"]
				["^.+:eth$", "Eth"],
			]
		},
        "ExceptionalThrowing": { // battledart, francisca, wardart, hurlbat
			"regex": "(?=^ÿc[05].+?:13[6-9]:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"]
				["^.+:eth$", "Eth"],
			]
		},
        "EliteThrowing": { // flyingknife, flyingaxe, wingedknife, wingedaxe
			"regex": "(?=^ÿc[05].+?:(239|24[0-2]):[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"]
				["^.+:eth$", "Eth"],
			]
		},
/************************************************* WANDS *************************************************/
        "NormalWands": { // wand, yewwand, bonewand, grimwand
			"regex": "(?=^ÿc[05].+?:1[0-3]:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
                ["^.+(\\+\\d) to (.+) \\(nec.+\\(nec.+\\(nec.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(nec.+\\(nec.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(nec.+$", "$1 $2"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "ExceptionalWands": { // burntwand, petrifiedwand, tompwand, gravewand
			"regex": "(?=^ÿc[05].+?:10[3-6]:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
                ["^.+(\\+\\d) to (.+) \\(nec.+\\(nec.+\\(nec.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(nec.+\\(nec.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(nec.+$", "$1 $2"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "EliteWands": { // polishedwand, ghostwand, lichwand, unearthedwand
			"regex": "(?=^ÿc[05].+?:20[6-9]:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
                ["^.+(\\+\\d) to (.+) \\(nec.+\\(nec.+\\(nec.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(nec.+\\(nec.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(nec.+$", "$1 $2"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
/************************************************* CLAWS *************************************************/
// CLASS SPECIFIC:
        "AssaNormalClaws": { // katar, wristblade, hatchethands, cestus, claws, bladetalons, scissorskatar
			"regex": "(?=^ÿc[05].+?:1(7[5-9]|8[0-1]):[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
                ["^.+(\\+\\d) to (.+) \\(assa.+\\(assa.+\\(assa.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(assa.+\\(assa.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(assa.+$", "$1 $2"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "AssaExceptionalClaws": { // quhab, wristspike, fascia, handscythe, greaterclaws, greatertalons, scissorsquhab
			"regex": "(?=^ÿc[05].+?:18[2-8]:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
                ["^.+(\\+\\d) to (.+) \\(assa.+\\(assa.+\\(assa.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(assa.+\\(assa.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(assa.+$", "$1 $2"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "AssaEliteClaws": { // suwayyah, wristsword, warfist, battlecestus, feralclaws, runictalons, scissorssuwayyah
			"regex": "(?=^ÿc[05].+?:1(89|9[0-5]):[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
                ["^.+(\\+\\d) to (.+) \\(assa.+\\(assa.+\\(assa.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(assa.+\\(assa.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(assa.+$", "$1 $2"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
/************************************************* ORBS *************************************************/
// CLASS SPECIFIC:
        "SorcNormalOrb": { // eagleorb, sacredglobe, smokedsphere, claspedorb, jaredsstone
			"regex": "(?=^ÿc[05].+?:2(7[6-9]|80):[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d+) to mana.+$", "$1mana"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
                ["^.+(\\+\\d) to (.+) \\(sorc.+\\(sorc.+\\(sorc.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(sorc.+\\(sorc.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(sorc.+$", "$1 $2"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "SorcExceptionalOrb": { // glowingorb, crystallineglobe, cloudysphere, sparklingball, swirlingcrystal
			"regex": "(?=^ÿc[05].+?:2(8[6-9]|90):[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d+) to mana.+$", "$1mana"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
                ["^.+(\\+\\d) to (.+) \\(sorc.+\\(sorc.+\\(sorc.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(sorc.+\\(sorc.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(sorc.+$", "$1 $2"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "SorcEliteOrb": { // heavenlystone, eldritchorb, demonheart, vortexorb, dimensionalshard
			"regex": "(?=^ÿc[05].+?:(29[6-9]|300):[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d+) to mana.+$", "$1mana"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+damage: ÿc3(\\d+(?: to \\d+)?).+\\+(\\d+) to max.+$", "$2max"],
                ["^.+(\\+\\d) to (.+) \\(sorc.+\\(sorc.+\\(sorc.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(sorc.+\\(sorc.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(sorc.+$", "$1 $2"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
/************************************************* BODY ARMORS *************************************************/
        "NormalArmors": { // quiltedarmor, leatherarmor, hardleatherarmor, studdedleather, ringmail, scalemail, chainmail, breastplate, splintmail, platemail, fieldplate, gothicplate, fullplatemail, ancientarmor, lightplate
			"regex": "(?=^ÿc[05].+?:3(1[3-9]|2[0-7]):[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+defense: ÿc3(\\d+).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "ExceptionalArmors": { // ghostarmor, serpentskinarmor, demonhidearmor, trellisedarmor, linkedmail, tigulatedmail, mesharmor, cuirass, russetarmor, templarcoat, sharktootharmor, embossedplate, chaosarmor, ornateplate, mageplate
			"regex": "(?=^ÿc[05].+?:3(59|6[0-9]|7[0-3]):[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+defense: ÿc3(\\d+).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "EliteArmors": { // duskshroud, wyrmhide, scarabhusk, wirefleece, diamondmail, loricatedmail, boneweave, greathauberk, balrogskin, hellforgeplate, krakenshell, lacqueredplate, shadowplate, sacredarmor, archonplate
			"regex": "(?=^ÿc[05].+?:4(29|3[0-9]|4[0-3]):[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+defense: ÿc3(\\d+).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
/************************************************* HELMS *************************************************/
        "NormalHelms": { // cap, skullcap, helm, fullhelm, greathelm, crown, mask, bonehelm, circlet, coronet
			"regex": "(?=^ÿc[05].+?:(30[6-9]|31[0-2]|349|41[8-9]):[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+defense: ÿc3(\\d+).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "ExceptionalHelms": { // warhat, sallet, casque, basinet, wingedhelm, grandcrown, deathmask, grimhelm, tiara
			"regex": "(?=^ÿc[05].+?:(35[2-8]|395|420):[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+defense: ÿc3(\\d+).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "EliteHelms": { // shako, hydraskull, armet, giantconch, spiredhelm, corona, demonhead, bonevisage, diadem
			"regex": "(?=^ÿc[05].+?:4(2[2-8]|65|21):[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+defense: ÿc3(\\d+).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
// CLASS SPECIFIC:
        "BarbNormalHelms": { // jawbonecap, fangedhelm, hornedhelm, assaulthelmet, avengerguard
			"regex": "(?=^ÿc[05].+?:40[3-7]:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+defense: ÿc3(\\d+).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+(\\+\\d) to (.+) \\(barb.+\\(barb.+\\(barb.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(barb.+\\(barb.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(barb.+$", "$1 $2"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "BarbExceptionalHelms": { // jawbonevisor, lionhelm, ragemask, savagehelmet, slayerguard
			"regex": "(?=^ÿc[05].+?:47[3-7]:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+defense: ÿc3(\\d+).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+(\\+\\d) to (.+) \\(barb.+\\(barb.+\\(barb.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(barb.+\\(barb.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(barb.+$", "$1 $2"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "BarbEliteHelms": { // carnagehelm, furyvisor, destroyerhelm, conquerorcrown, guardiancrown
			"regex": "(?=^ÿc[05].+?:49[3-7]:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+defense: ÿc3(\\d+).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+(\\+\\d) to (.+) \\(barb.+\\(barb.+\\(barb.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(barb.+\\(barb.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(barb.+$", "$1 $2"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "DruidNormalHelms": { // wolfhead, hawkhelm, antlers, falconmask, spiritmask
			"regex": "(?=^ÿc[05].+?:(39[8-9]|40[0-2]):[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+defense: ÿc3(\\d+).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+(\\+\\d) to (.+) \\(druid.+\\(druid.+\\(druid.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(druid.+\\(druid.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(druid.+$", "$1 $2"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "DruidExceptionalHelms": { // alphahelm, griffonheaddress, huntersguise, sacredfeathers, totemicmask
			"regex": "(?=^ÿc[05].+?:4(6[8-9]|7[0-2]):[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+defense: ÿc3(\\d+).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+(\\+\\d) to (.+) \\(druid.+\\(druid.+\\(druid.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(druid.+\\(druid.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(druid.+$", "$1 $2"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "DruidEliteHelms": { // bloodspirit, sunspirit, earthspirit, skyspirit, dreamspirit
			"regex": "(?=^ÿc[05].+?:4(8[8-9]|9[0-2]):[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+defense: ÿc3(\\d+).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+(\\+\\d) to (.+) \\(druid.+\\(druid.+\\(druid.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(druid.+\\(druid.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(druid.+$", "$1 $2"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
/************************************************* SHIELDS *************************************************/
        "NormalShields": { // buckler, smallshield, largeshield, kiteshield, towershield, gothicshield, boneshield, spikedshield
			"regex": "(?=^ÿc[05].+?:3(2[8-9]|3[0-3]|5[0-1]):[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+defense: ÿc3(\\d+).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "ExceptionalShields": { // defender, roundshield, scutum, dragonshield, pavise, ancientshield, grimshield, barbedshield
			"regex": "(?=^ÿc[05].+?:3(7[4-9]|9[6-7]):[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+defense: ÿc3(\\d+).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "EliteShields": { // heater, luna, hyperion, monarch, aegis, ward, trollnest, bladebarrier
			"regex": "(?=^ÿc[05].+?:4(4[4-9]|6[6-7]):[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+defense: ÿc3(\\d+).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
// CLASS SPECIFIC:
        "PalaNormalShields": { // targe, rondache, heraldicshield, aerinshield, crownshield
			"regex": "(?=^ÿc[05].+?:4(0[8-9]|1[0-2]):[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+defense: ÿc3(\\d+).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+)\\% enhanced.+\\+(\\d+) to attack.+$", "$1ed/$2ar"],
                ["^.+resistances \\+(\\d+).+$", "$1@"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "PalaExceptionalShields": { // akarantarge, akaranrondache, protectorshield, gildedshield, royalshield
			"regex": "(?=^ÿc[05].+?:4(7[8-9]|8[0-2]):[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+defense: ÿc3(\\d+).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+)\\% enhanced.+\\+(\\d+) to attack.+$", "$1ed/$2ar"],
                ["^.+resistances \\+(\\d+).+$", "$1@"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "PalaEliteShields": { // sacredtarge, sacredrondache, kurastshield, zakarumshield, vortexshield
			"regex": "(?=^ÿc[05].+?:(49[8-9]|50[0-2]):[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+defense: ÿc3(\\d+).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+\\+(\\d+)\\% enhanced.+\\+(\\d+) to attack.+$", "$1ed/$2ar"],
                ["^.+resistances \\+(\\d+).+$", "$1@"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "NecNormalShields": { // preservedhead, zombiehead, unravellerhead, gargoylehead, demonhead
			"regex": "(?=^ÿc[05].+?:41[3-7]:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+defense: ÿc3(\\d+).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+adds (\\d+-\\d+) poison.+$", "$1poison"],
                ["^.+(\\+\\d) to (.+) \\(nec.+\\(nec.+\\(nec.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(nec.+\\(nec.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(nec.+$", "$1 $2"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "NecExceptionalShields": { // mummifiedtrophy, fetishtrophy, sextontrophy, cantortrophy, hierophanttrophy
			"regex": "(?=^ÿc[05].+?:48[3-7]:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+defense: ÿc3(\\d+).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+adds (\\d+-\\d+) poison.+$", "$1poison"],
                ["^.+(\\+\\d) to (.+) \\(nec.+\\(nec.+\\(nec.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(nec.+\\(nec.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(nec.+$", "$1 $2"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        "NecEliteShields": { // minionskull, hellspawnskull, overseerskull, succubusskull, bloodlordskull
			"regex": "(?=^ÿc[05].+?:50[3-7]:[37]:\\d:\\d(:eth)?$)",
			"specs": [
				["^.+defense: ÿc3(\\d+).+\\+(\\d+)\\% enhanced.+$", "$2ed"],
				["^.+durability: \\d+ of (\\d+).+durability (\\d+)\\%.+$", "$2dur"],
                ["^.+adds (\\d+-\\d+) poison.+$", "$1poison"],
                ["^.+(\\+\\d) to (.+) \\(nec.+\\(nec.+\\(nec.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(nec.+\\(nec.+$", "$1 $2"],
                ["^.+(\\+\\d) to (.+) \\(nec.+$", "$1 $2"],
				["^.+socketed \\((\\d).+$", "$1soc"],
				["^.+:eth$", "Eth"],
			]
		},
        /*,
		"NonEthUnid": {
			"regex": "(?=.+?unidentified.+?[37]:\\d:\\d$)",
		},
		"EthUnid": {
			"regex": "(?=.+?unidentified.+?[37]:\\d:\\d:eth$)",
		}*/
	},
/************************************************* SEARCH FILTERS *************************************************/
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
