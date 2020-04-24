LimeConfig = {
    "ItemGroup": {
/************************************************* MISC *************************************************/
		"HighRunes": {
			"regex": "(?=.+?:6(3[4-9]|4[0-2]):[37]:\\d:\\d$)",
		},
        "MidRunes": {
			"regex": "(?=.+?:6(2[4-9]|3[0-4]):[37]:\\d:\\d$)",
		},
        "LowRunes": {
			"regex": "(?=.+?:6(1[0-9]|2[0-3]):[37]:\\d:\\d$)",
		},
		"PerfectGems": {
			"regex": "(?=.+?:(5[678][16]|601):[37]:\\d:\\d$)",
		},
        /*"FlawlessGems": {
			"regex": "(?=.+?:(5[678][05]|600):[37]:\\d:\\d$)",
		},
        "RegularGems": {
			"regex": "(?=.+?:5([67][49]|84|[59]9):[37]:\\d:\\d$)",
		},
        "FlawedGems": {
			"regex": "(?=.+?:5([67][38]|83|[59]8):[37]:\\d:\\d$)",
		},
        "ChippedGems": {
			"regex": "(?=.+?:5([67][27]|82|[59]7):[37]:\\d:\\d$)",
		},*/
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
        "UnidAnni" : {
			"regex": "(?=ÿc4.+unid.+?:603:[37]:\\d:\\d$)",
		},
        "UnidTorches" : {
			"regex": "(?=ÿc4.+unid.+?:604:[37]:\\d:\\d$)",
		},
        "UnidGheeds" : {
			"regex": "(?=ÿc4.+unid.+?:605:[37]:\\d:\\d$)",
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
        "Gheeds" : {
			"regex": "(?=ÿc4gheed.+?:605:[37]:\\d:\\d$)",
			"specs": [
				["^.+3(\\d+)\\% extra.+3(\\d+)\\% better.+prices (\\d+)\\%.+$", "$1/$2/$3"]
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
/************************************************* SMALL CHARMS *************************************************/
// Prefixes:
        "DefenseSC" : {
			"regex": "(?=ÿc3(stalwart|burly|stout).+?:603:[37]:\\d:\\d$)",
			"specs": [
                ["^.+\\+(\\d+) defense.+$", "$1def"],
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+3(\\d)\\% better.+$", "$1mf"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "DamageSC" : {
			"regex": "(?=ÿc3(jagged|red).+?:603:[37]:\\d:\\d$)",
			"specs": [
                ["^.+\\+(\\d) to min.+$", "$1min"],
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+3(\\d)\\% better.+$", "$1mf"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "StaminaSC" : {
			"regex": "(?=ÿc3rugged.+?:603:[37]:\\d:\\d$)",
			"specs": [
                ["^.+\\+(\\d+) maximum stamina.+$", "$1stamina"],
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+3(\\d)\\% better.+$", "$1mf"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "ARSC" : {
			"regex": "(?=ÿc3(fine|steel|iron|bronze).+?:603:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d) to max.+\\+(\\d+) to attack.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+3(\\d)\\% better.+$", "$1mf"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "ManaSC" : {
			"regex": "(?=ÿc3(serpent|snake|lizard).+?:603:[37]:\\d:\\d$)",
			"specs": [
                ["^.+\\+(\\d+) to mana.+$", "$1max"],
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+3(\\d)\\% better.+$", "$1mf"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "AllResSC" : {
			"regex": "(?=ÿc3shimmering.+?:603:[37]:\\d:\\d$)",
			"specs": [
                ["^.+all resistances \\+(\\d).+$", "$1@"],
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+3(\\d)\\% better.+$", "$1mf"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "ColdResSC" : {
			"regex": "(?=ÿc3(sapphire|cobalt|lapis|azure).+?:603:[37]:\\d:\\d$)",
			"specs": [
                ["^.+resist \\+(\\d+)\\%.+$", "$1 cold res"],
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+3(\\d)\\% better.+$", "$1mf"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "FireResSC" : {
			"regex": "(?=ÿc3(ruby|garnet|russet|crimson).+?:603:[37]:\\d:\\d$)",
			"specs": [
                ["^.+resist \\+(\\d+)\\%.+$", "$1 fire res"],
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+3(\\d)\\% better.+$", "$1mf"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "LightResSC" : {
			"regex": "(?=ÿc3(amber|coral|ocher|tangerine).+?:603:[37]:\\d:\\d$)",
			"specs": [
                ["^.+resist \\+(\\d+)\\%.+$", "$1 light res"],
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+3(\\d)\\% better.+$", "$1mf"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "PoisonResSC" : {
			"regex": "(?=ÿc3(emerald|jade|viridian|beryl).+?:603:[37]:\\d:\\d$)",
			"specs": [
                ["^.+resist \\+(\\d+)\\%.+$", "$1 poison res"],
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+3(\\d)\\% better.+$", "$1mf"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "ColdDmgSC" : {
			"regex": "(?=ÿc3(hibernal|boreal|shivering|snowflake).+?:603:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+3(\\d)\\% better.+$", "$1mf"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d+)-(\\d+) cold.+$", "$1-$2 cold"],
                ["^.+Adds (\\d+)-(\\d+) (fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "FireDmgSC" : {
			"regex": "(?=ÿc3(flaming|smoking|smoldering|ember).+?:603:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+3(\\d)\\% better.+$", "$1mf"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d+)-(\\d+) fire.+$", "$1-$2 fire"],
                ["^.+Adds (\\d+)-(\\d+) (cold|lightning).+$", "$1-$2 $3"],
			]
		},
        "LightDmgSC" : {
			"regex": "(?=ÿc3(shocking|arching|glowing|static).+?:603:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+3(\\d)\\% better.+$", "$1mf"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d+)-(\\d+) lightning.+$", "$1-$2 lightning"],
                ["^.+Adds (\\d+)-(\\d+) (cold|fire).+$", "$1-$2 $3"],
			]
		},
        "PoisonDmgSC" : {
			"regex": "(?=ÿc3(pestilent|toxic|foul|septic).+?:603:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+3(\\d)\\% better.+$", "$1mf"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d+)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
// Suffixes:
        "CraftmanSC" : {
			"regex": "(?=ÿc3 small.+?craftmanship.+?:603:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d) to max.+$", "$1max"],
			]
		},
        "BalanceSC" : {
			"regex": "(?=ÿc3 small.+?balance.+?:603:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d)\\% faster hit.+$", "$1fhr"],
			]
		},
        "GoldSC" : {
			"regex": "(?=ÿc3 small.+?greed.+?:603:[37]:\\d:\\d$)",
			"specs": [
				["^.+3(\\d+)\\% extra.+$", "$1gold"],
			]
		},
        "LuckSC" : {
			"regex": "(?=ÿc3 small.+?(good luck|fortune).+?:603:[37]:\\d:\\d$)",
			"specs": [
				["^.+3(\\d)\\% better.+$", "$1mf"],
			]
		},
        "VitaSC" : {
			"regex": "(?=ÿc3 small.+?(vita|sustenance|life).+?:603:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d+) to life.+$", "$1life"],
			]
		},
        "StrengthSC" : {
			"regex": "(?=ÿc3 small.+?strength.+?:603:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d) to str.+$", "$1str"],
			]
		},
        "DexteritySC" : {
			"regex": "(?=ÿc3 small.+?dexterity.+?:603:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d) to dex.+$", "$1dex"],
			]
		},
        "FRWSC" : {
			"regex": "(?=ÿc3 small.+?inertia.+?:603:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
			]
		},
        "PoisonSC" : {
			"regex": "(?=ÿc3 small.+?(anthrax|pestilence|venom|blight).+?:603:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
			]
		},
        "ColdSC" : {
			"regex": "(?=ÿc3 small.+?(winter|glacier|icicle|frost).+?:603:[37]:\\d:\\d$)",
			"specs": [
				["^.+Adds (\\d+)-(\\d+).+$", "$1-$2 cold"],
			]
		},
        "FireSC" : {
			"regex": "(?=ÿc3 small.+?(incineration|burning|fire|flame).+?:603:[37]:\\d:\\d$)",
			"specs": [
				["^.+Adds (\\d+)-(\\d+).+$", "$1-$2 fire"],
			]
		},
        "LightSC" : {
			"regex": "(?=ÿc3 small.+?(storms|thunder|lightning|shock).+?:603:[37]:\\d:\\d$)",
			"specs": [
				["^.+Adds (\\d+)-(\\d+).+$", "$1-$2 lightning"],
			]
		},
/************************************************* LARGE CHARMS *************************************************/
// Prefixes:
        "DefenseLC" : {
			"regex": "(?=ÿc3(stalwart|burly|stout).+?:604:[37]:\\d:\\d$)",
			"specs": [
                ["^.+\\+(\\d+) defense.+$", "$1def"],
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "DamageLC" : {
			"regex": "(?=ÿc3(forked|jagged|sanguinary|red).+?:604:[37]:\\d:\\d$)",
			"specs": [
                ["^.+\\+(\\d) to min.+$", "$1min"],
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "StaminaLC" : {
			"regex": "(?=ÿc3rugged.+?:604:[37]:\\d:\\d$)",
			"specs": [
                ["^.+\\+(\\d+) maximum stamina.+$", "$1stamina"],
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "ARLC" : {
			"regex": "(?=ÿc3(sharp|fine|steel|iron|bronze).+?:604:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d) to max.+\\+(\\d+) to attack.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "LuckyLC" : {
			"regex": "(?=ÿc3lucky.+?:604:[37]:\\d:\\d$)",
			"specs": [
                ["^.+3(\\d)\\% better.+$", "$1mf"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "ManaLC" : {
			"regex": "(?=ÿc3(serpent|snake|lizard).+?:604:[37]:\\d:\\d$)",
			"specs": [
                ["^.+\\+(\\d+) to mana.+$", "$1max"],
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "AllResLC" : {
			"regex": "(?=ÿc3shimmering.+?:604:[37]:\\d:\\d$)",
			"specs": [
                ["^.+all resistances \\+(\\d).+$", "$1@"],
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "ColdResLC" : {
			"regex": "(?=ÿc3(sapphire|cobalt|lapis|azure).+?:604:[37]:\\d:\\d$)",
			"specs": [
                ["^.+resist \\+(\\d+)\\%.+$", "$1 cold res"],
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "FireResLC" : {
			"regex": "(?=ÿc3(ruby|garnet|russet|crimson).+?:604:[37]:\\d:\\d$)",
			"specs": [
                ["^.+resist \\+(\\d+)\\%.+$", "$1 fire res"],
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "LightResLC" : {
			"regex": "(?=ÿc3(amber|coral|ocher|tangerine).+?:604:[37]:\\d:\\d$)",
			"specs": [
                ["^.+resist \\+(\\d+)\\%.+$", "$1 light res"],
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "PoisonResLC" : {
			"regex": "(?=ÿc3(emerald|jade|viridian|beryl).+?:604:[37]:\\d:\\d$)",
			"specs": [
                ["^.+resist \\+(\\d+)\\%.+$", "$1 poison res"],
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "ColdDmgLC" : {
			"regex": "(?=ÿc3(hibernal|boreal|shivering|snowflake).+?:604:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d+)-(\\d+) cold.+$", "$1-$2 cold"],
                ["^.+Adds (\\d+)-(\\d+) (fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "FireDmgLC" : {
			"regex": "(?=ÿc3(flaming|smoking|smoldering|ember).+?:604:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d+)-(\\d+) fire.+$", "$1-$2 fire"],
                ["^.+Adds (\\d+)-(\\d+) (cold|lightning).+$", "$1-$2 $3"],
			]
		},
        "LightDmgLC" : {
			"regex": "(?=ÿc3(shocking|arching|glowing|static).+?:604:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d+)-(\\d+) lightning.+$", "$1-$2 lightning"],
                ["^.+Adds (\\d+)-(\\d+) (cold|fire).+$", "$1-$2 $3"],
			]
		},
        "PoisonDmgLC" : {
			"regex": "(?=ÿc3(pestilent|toxic|foul|septic).+?:604:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d+)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
// Suffixes:
        "CraftmanLC" : {
			"regex": "(?=ÿc3 large.+?(quality|craftmanship).+?:604:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d) to max.+$", "$1max"],
			]
		},
        "BalanceLC" : {
			"regex": "(?=ÿc3 large.+?balance.+?:604:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d)\\% faster hit.+$", "$1fhr"],
			]
		},
        "GoldSC" : {
			"regex": "(?=ÿc3 large.+?greed.+?:604:[37]:\\d:\\d$)",
			"specs": [
				["^.+3(\\d+)\\% extra.+$", "$1gold"],
			]
		},
        "VitaLC" : {
			"regex": "(?=ÿc3 large.+?(vita|sustenance|life).+?:604:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d+) to life.+$", "$1life"],
			]
		},
        "StrengthLC" : {
			"regex": "(?=ÿc3 large.+?strength.+?:604:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d) to str.+$", "$1str"],
			]
		},
        "DexterityLC" : {
			"regex": "(?=ÿc3 large.+?dexterity.+?:604:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d) to dex.+$", "$1dex"],
			]
		},
        "FRWLC" : {
			"regex": "(?=ÿc3 large.+?inertia.+?:604:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
			]
		},
        "PoisonLC" : {
			"regex": "(?=ÿc3 large.+?(anthrax|pestilence|venom|blight).+?:604:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
			]
		},
        "ColdLC" : {
			"regex": "(?=ÿc3 large.+?(winter|glacier|icicle|frost).+?:604:[37]:\\d:\\d$)",
			"specs": [
				["^.+Adds (\\d+)-(\\d+).+$", "$1-$2 cold"],
			]
		},
        "FireLC" : {
			"regex": "(?=ÿc3 large.+?(incineration|burning|fire|flame).+?:604:[37]:\\d:\\d$)",
			"specs": [
				["^.+Adds (\\d+)-(\\d+).+$", "$1-$2 fire"],
			]
		},
        "LightLC" : {
			"regex": "(?=ÿc3 large.+?(storms|thunder|lightning|shock).+?:604:[37]:\\d:\\d$)",
			"specs": [
				["^.+Adds (\\d+)-(\\d+).+$", "$1-$2 lightning"],
			]
		},
/************************************************* GRAND CHARMS *************************************************/
// Prefixes:
        "AmaGC" : {
			"regex": "(?=ÿc3(harpoonist|acrobat|fletcher).+?:605:[37]:\\d:\\d$)",
			"specs": [
                ["^.+(\\+\\d) to (.+) \\(ama.+$", "$1 $2"],
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d+)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "SorcGC" : {
			"regex": "(?=ÿc3(chilling|sparking|burning).+?:605:[37]:\\d:\\d$)",
			"specs": [
                ["^.+(\\+\\d) to (.+) \\(sorc.+$", "$1 $2"],
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d+)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "NecGC" : {
			"regex": "(?=ÿc3(graverobber|fungal|hexing).+?:605:[37]:\\d:\\d$)",
			"specs": [
                ["^.+(\\+\\d) to (.+) \\(Nec.+$", "$1 $2"],
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d+)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "palaGC" : {
			"regex": "(?=ÿc3(preserver|captain|lion branded).+?:605:[37]:\\d:\\d$)",
			"specs": [
                ["^.+(\\+\\d) to (.+) \\(pala.+$", "$1 $2"],
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d+)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "BarbGC" : {
			"regex": "(?=ÿc3(expert|fanatic|sounding).+?:605:[37]:\\d:\\d$)",
			"specs": [
                ["^.+(\\+\\d) to (.+) \\(barb.+$", "$1 $2"],
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d+)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "DruidGC" : {
			"regex": "(?=ÿc3(natural|spiritual|trainer).+?:605:[37]:\\d:\\d$)",
			"specs": [
                ["^.+(\\+\\d) to (.+) \\(druid.+$", "$1 $2"],
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d+)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "AssaGC" : {
			"regex": "(?=ÿc3(shogukusha|mentalist|entrapping).+?:605:[37]:\\d:\\d$)",
			"specs": [
                ["^.+(\\+\\d) to (.+) \\(assa.+$", "$1 $2"],
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d+)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "DefenseGC" : {
			"regex": "(?=ÿc3(stalwart|burly|stout).+?:605:[37]:\\d:\\d$)",
			"specs": [
                ["^.+\\+(\\d+) defense.+$", "$1def"],
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d+)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "DamageGC" : {
			"regex": "(?=ÿc3(serrated|forked|jagged|bloody|sanguinary|red).+?:605:[37]:\\d:\\d$)",
			"specs": [
                ["^.+\\+(\\d) to min.+$", "$1min"],
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d+)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "StaminaGC" : {
			"regex": "(?=ÿc3rugged.+?:605:[37]:\\d:\\d$)",
			"specs": [
                ["^.+\\+(\\d+) maximum stamina.+$", "$1stamina"],
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d+)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "ARGC" : {
			"regex": "(?=ÿc3(sharp|fine|steel|iron|bronze).+?:605:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d+) to max.+\\+(\\d+) to attack.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d+)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "LuckyGC" : {
			"regex": "(?=ÿc3lucky.+?:605:[37]:\\d:\\d$)",
			"specs": [
                ["^.+3(\\d+)\\% better.+$", "$1mf"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d+)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "ManaGC" : {
			"regex": "(?=ÿc3(serpent|snake|lizard).+?:605:[37]:\\d:\\d$)",
			"specs": [
                ["^.+\\+(\\d+) to mana.+$", "$1max"],
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d+)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "AllResGC" : {
			"regex": "(?=ÿc3shimmering.+?:605:[37]:\\d:\\d$)",
			"specs": [
                ["^.+all resistances \\+(\\d+).+$", "$1@"],
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d+)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "ColdResGC" : {
			"regex": "(?=ÿc3(sapphire|cobalt|lapis|azure).+?:605:[37]:\\d:\\d$)",
			"specs": [
                ["^.+resist \\+(\\d+)\\%.+$", "$1 cold res"],
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d+)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "FireResGC" : {
			"regex": "(?=ÿc3(ruby|garnet|russet|crimson).+?:605:[37]:\\d:\\d$)",
			"specs": [
                ["^.+resist \\+(\\d+)\\%.+$", "$1 fire res"],
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d+)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "LightResGC" : {
			"regex": "(?=ÿc3(amber|coral|ocher|tangerine).+?:605:[37]:\\d:\\d$)",
			"specs": [
                ["^.+resist \\+(\\d+)\\%.+$", "$1 light res"],
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d+)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "PoisonResGC" : {
			"regex": "(?=ÿc3(emerald|jade|viridian|beryl).+?:605:[37]:\\d:\\d$)",
			"specs": [
                ["^.+resist \\+(\\d+)\\%.+$", "$1 poison res"],
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d+)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "ColdDmgGC" : {
			"regex": "(?=ÿc3(hibernal|boreal|shivering|snowflake).+?:605:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d+)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d+)-(\\d+) cold.+$", "$1-$2 cold"],
                ["^.+Adds (\\d+)-(\\d+) (fire|lightning).+$", "$1-$2 $3"],
			]
		},
        "FireDmgGC" : {
			"regex": "(?=ÿc3(flaming|smoking|smoldering|ember).+?:605:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d+)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d+)-(\\d+) fire.+$", "$1-$2 fire"],
                ["^.+Adds (\\d+)-(\\d+) (cold|lightning).+$", "$1-$2 $3"],
			]
		},
        "LightDmgGC" : {
			"regex": "(?=ÿc3(shocking|arching|glowing|static).+?:605:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d+)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d+)-(\\d+) lightning.+$", "$1-$2 lightning"],
                ["^.+Adds (\\d+)-(\\d+) (cold|fire).+$", "$1-$2 $3"],
			]
		},
        "PoisonDmgGC" : {
			"regex": "(?=ÿc3(pestilent|toxic|foul|septic).+?:605:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d) to max.+$", "$1max"],
                ["^.+\\+(\\d+) to attack.+$", "$1ar"],
                ["^.+\\+(\\d+)\\% faster hit.+$", "$1fhr"],
                ["^.+3(\\d+)\\% extra.+$", "$1gold"],
                ["^.+\\+(\\d+) to life.+$", "$1life"],
                ["^.+\\+(\\d) to str.+$", "$1str"],
                ["^.+\\+(\\d) to dex.+$", "$1dex"],
                ["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
                ["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
                ["^.+Adds (\\d+)-(\\d+) (cold|fire|lightning).+$", "$1-$2 $3"],
			]
		},
// Suffixes:
        "CraftmanGC" : {
			"regex": "(?=ÿc3 grand.+?(maiming|quality|craftsmanship).+?:605:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d) to max.+$", "$1max"],
			]
		},
        "BalanceGC" : {
			"regex": "(?=ÿc3 grand.+?balance.+?:605:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d+)\\% faster hit.+$", "$1fhr"],
			]
		},
        "GoldSC" : {
			"regex": "(?=ÿc3 grand.+?greed.+?:605:[37]:\\d:\\d$)",
			"specs": [
				["^.+3(\\d+)\\% extra gold.+$", "$1gold"],
			]
		},
        "VitaGC" : {
			"regex": "(?=ÿc3 grand.+?(vita|sustenance|life).+?:605:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d+) to life.+$", "$1life"],
			]
		},
        "StrengthGC" : {
			"regex": "(?=ÿc3 grand.+?strength.+?:605:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d) to str.+$", "$1str"],
			]
		},
        "DexterityGC" : {
			"regex": "(?=ÿc3 grand.+?dexterity.+?:605:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d) to dex.+$", "$1dex"],
			]
		},
        "FRWGC" : {
			"regex": "(?=ÿc3 grand.+?inertia.+?:605:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d)\\% faster run.+$", "$1frw"],
			]
		},
        "PoisonGC" : {
			"regex": "(?=ÿc3 grand.+?(anthrax|pestilence|venom|blight).+?:605:[37]:\\d:\\d$)",
			"specs": [
				["^.+\\+(\\d+) poison.+(\\d+) seconds.+$", "$1pd"],
			]
		},
        "ColdGC" : {
			"regex": "(?=ÿc3 grand.+?(winter|glacier|icicle|frost).+?:605:[37]:\\d:\\d$)",
			"specs": [
				["^.+Adds (\\d+)-(\\d+).+$", "$1-$2 cold"],
			]
		},
        "FireGC" : {
			"regex": "(?=ÿc3 grand.+?(incineration|burning|fire|flame).+?:605:[37]:\\d:\\d$)",
			"specs": [
				["^.+Adds (\\d+)-(\\d+).+$", "$1-$2 fire"],
			]
		},
        "LightGC" : {
			"regex": "(?=ÿc3 grand.+?(storms|thunder|lightning|shock).+?:605:[37]:\\d:\\d$)",
			"specs": [
				["^.+Adds (\\d+)-(\\d+).+$", "$1-$2 lightning"],
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
		}
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
    },
    "ItemSkins": {
        "cm11": ["Brown", "Football"],
        "cm12": ["Bear", "Paw"],
        "cm13": ["M", "Coin"],
        "cm21": ["Tome", "Paper"],
        "cm22": ["Horn"],
        "cm23": ["Tower", "Obelisk", "Latern"],
        "cm31": ["Eye"],
        "cm32": ["Spagetti", "DNA", "Lace"],
        "cm33": ["Monster", "Dragon"],
        "amu1": ["Orange Stone", "Orange Dot", "Cross", "Dot"],
        "amu2": ["Pentagon", "Penta", "Star"],
        "amu3": ["Sun", "A"],
        "rin1": ["Coral", "Chain", "Purple Stone"],
        "rin2": ["Sloop", "Small Blue", "Round Blue Stone"],
        "rin3": ["Bband", "Big Blue", "Square Blue Stone"],
        "rin4": ["Orange"],
        "rin5": ["Winged", "Crown", "Eturn"],
        "jew1": ["Pink"],
        "jew2": ["Blue"],
        "jew3": ["Orange", "Peach"],
        "jew4": ["Green"],
        "jew5": ["Red"],
        "jew6": ["White"]
    }
}
