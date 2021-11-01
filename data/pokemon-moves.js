export const moves: {

	// moves that are status moves and stat changing moves
	// morning sun, teleport, roost, heal bell, toxic, icebeam
	// substitute, knockoff, wish, yawn, throatchop, lovelykiss
    // 


growth: {
		num: 74,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Growth",
}

gigadrain: {
		num: 202,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		name: "Giga Drain",
		priority: 0,
		type: "Grass",
}

weatherball: {
		num: 311,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		name: "Weather Ball",
		type: "Normal",
}

earthpower: {
		num: 414,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Earth Power",
		type: "Ground",
}

stoneedge: {
		num: 444,
		accuracy: 80,
		basePower: 100,
		category: "Physical",
		name: "Stone Edge",
		type: "Rock",
}

dualwingbeat: {
	num: 814,
	accuracy: 90,
	basePower: 40,
	category: "Physical",
	name: "Dual Wingbeat",
	type: "Flying",
}

earthquake: {
	num: 89,
	accuracy: 100,
	basePower: 100,
	category: "Physical",
	name: "Earthquake",
	type: "Ground",
}

crunch: {
	num: 242,
	accuracy: 100,
	basePower: 80,
	category: "Physical",
	name: "Crunch",
	type: "Dark",
}

nastyplot: {
	num: 417,
	accuracy: true,
	basePower: 0,
	category: "Status",
	name: "Nasty Plot",
	pp: 20,
	priority: 0,
	flags: {snatch: 1},
	boosts: {
		spa: 2,
	},
	secondary: null,
	target: "self",
	type: "Dark",
	zMove: {effect: 'clearnegativeboost'},
	contestType: "Clever",
},

psychic: {
	num: 94,
	accuracy: 100,
	basePower: 90,
	category: "Special",
	name: "Psychic",
	type: "Psychic",
}

psyshock: {
	num: 473,
	accuracy: 100,
	basePower: 80,
	category: "Special",
	defensiveCategory: "Physical",
	name: "Psyshock",
	type: "Psychic",
}

shadowball: {
	num: 247,
	accuracy: 100,
	basePower: 80,
	category: "Special",
	name: "Shadow Ball",
	type: "Ghost",
}

flamethrower: {
	num: 53,
	accuracy: 100,
	basePower: 90,
	category: "Special",
	name: "Flamethrower",
	type: "Fire",
}


roost: {
	num: 355,
	accuracy: true,
	basePower: 0,
	category: "Status",
	name: "Roost",
	type: "Flying",
}

freezedry: {
	num: 573,
	accuracy: 100,
	basePower: 70,
	category: "Special",
	name: "Freeze-Dry",
	type: "Ice",
}

uturn: {
	num: 369,
	accuracy: 100,
	basePower: 70,
	category: "Physical",
	name: "U-turn",
	type: "Bug",
}

bravebird: {
	num: 413,
	accuracy: 100,
	basePower: 120,
	category: "Physical",
	name: "Brave Bird",
	type: "Flying",
}

healbell: {
	num: 215,
	accuracy: true,
	basePower: 0,
	category: "Status",
	name: "Heal Bell",
	pp: 5,
	type: "Normal",
}

toxic: {
	num: 92,
	accuracy: 90,
	basePower: 0,
	category: "Status",
	name: "Toxic",
	type: "Poison",
}

shellsmash: {
	num: 504,
	accuracy: true,
	basePower: 0,
	category: "Status",
	name: "Shell Smash",
	type: "Normal",
}

surf: {
	num: 57,
	accuracy: 100,
	basePower: 90,
	category: "Special",
	name: "Surf",
	type: "Water",
}

darkpulse: {
	num: 399,
	accuracy: 100,
	basePower: 80,
	category: "Special",
	name: "Dark Pulse",
	type: "Dark",
}

icebeam: {
	num: 58,
	accuracy: 100,
	basePower: 90,
	category: "Special",
	name: "Ice Beam",
	type: "Ice",
}

substitute: {
	num: 164,
	accuracy: true,
	basePower: 0,
	category: "Status",
	name: "Substitute",
	type: "Normal",
}

quiverdance: {
	num: 483,
	accuracy: true,
	basePower: 0,
	category: "Status",
	name: "Quiver Dance",
	type: "Bug",
	boosts: {
		spa: 1,
		spd: 1,
		spe: 1,
	}
}

hurricane: {
	num: 542,
	accuracy: 70,
	basePower: 110,
	category: "Special",
	name: "Hurricane",
	type: "Flying",
}

seismictoss: {
	num: 69,
	accuracy: 100,
	basePower: 0,
	damage: 'level',
	category: "Physical",
	name: "Seismic Toss",
	type: "Fighting",
}

softboiled: {
	num: 135,
	accuracy: true,
	basePower: 0,
	category: "Status",
	name: "Soft-Boiled",
	type: "Normal",
}

stealthrock: {
	num: 446,
	accuracy: true,
	basePower: 0,
	category: "Status",
	name: "Stealth Rock",
	type: "Rock",
}

fireblast: {
	num: 126,
	accuracy: 85,
	basePower: 110,
	category: "Special",
	name: "Fire Blast",
	type: "Fire",
}

focusblast: {
	num: 411,
	accuracy: 70,
	basePower: 120,
	category: "Special",
	name: "Focus Blast",
	type: "Fighting",
}

defog: {
	num: 432,
	accuracy: true,
	basePower: 0,
	category: "Status",
	name: "Defog",
	type: "Flying",
}

moonblast: {
	num: 585,
	accuracy: 100,
	basePower: 95,
	category: "Special",
	name: "Moonblast",
	type: "Fairy",
}

knockoff: {
	num: 282,
	accuracy: 100,
	basePower: 65,
	category: "Physical",
	name: "Knock Off",
	type: "Dark",
}

iciclespear: {
	num: 333,
	accuracy: 100,
	basePower: 25,
	category: "Physical",
	name: "Icicle Spear",
	type: "Ice",
}

rockblast: {
	num: 350,
	accuracy: 90,
	basePower: 25,
	category: "Physical",
	name: "Rock Blast",
	type: "Rock",
}

hydropump: {
	num: 56,
	accuracy: 80,
	basePower: 110,
	category: "Special",
	name: "Hydro Pump",
	type: "Water",
}

shadowclaw: {
	num: 421,
	accuracy: 100,
	basePower: 70,
	category: "Physical",
	name: "Shadow Claw",
	type: "Ghost",
}

memento: {
	num: 262,
	accuracy: 100,
	basePower: 0,
	category: "Status",
	name: "Memento",
	type: "Dark",
}

transform: {
	num: 144,
	accuracy: true,
	basePower: 0,
	category: "Status",
	name: "Transform",
	type: "Normal",
	// onHit(target, pokemon) {
	// 	if (!pokemon.transformInto(target)) {
	// 		return false;
	// 	}
}

futuresight: {
	num: 248,
	accuracy: 100,
	basePower: 120,
	category: "Special",
	name: "Future Sight",
	type: "Psychic",

}

leafstorm: {
	num: 437,
	accuracy: 90,
	basePower: 130,
	category: "Special",
	name: "Leaf Storm",
	pp: 5,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	self: {
		boosts: {
			spa: -2,
		},
	},
}

sleeppowder: {
	num: 79,
	accuracy: 75,
	basePower: 0,
	category: "Status",
	name: "Sleep Powder",
	pp: 15,
	priority: 0,
	flags: {powder: 1, protect: 1, reflectable: 1, mirror: 1},
	status: 'slp',
	secondary: null,
	target: "normal",
	type: "Grass",
	zMove: {boost: {spe: 1}},
	contestType: "Clever",
},


wish: {
	num: 273,
	accuracy: true,
	basePower: 0,
	category: "Status",
	name: "Wish",
	type: "Normal",
	// pp: 10,
	// priority: 0,
	// flags: {snatch: 1, heal: 1},
	// slotCondition: 'Wish',
	// condition: {
	// 	duration: 2,
	// 	onStart(pokemon, source) {
	// 		this.effectState.hp = source.maxhp / 2;
	// 	},
	// 	onResidualOrder: 4,
	// 	onEnd(target) {
	// 		if (target && !target.fainted) {
	// 			const damage = this.heal(this.effectState.hp, target, target);
	// 			if (damage) {
	// 				this.add('-heal', target, target.getHealth, '[from] move: Wish', '[wisher] ' + this.effectState.source.name);
	// 			}
	// 		}
	// 	},
	// },
	// secondary: null,
	// target: "self",

}

protect: {
	num: 182,
	accuracy: true,
	basePower: 0,
	category: "Status",
	name: "Protect",
	type: "Normal",

}

flareblitz: {
	num: 394,
	accuracy: 100,
	basePower: 120,
	category: "Physical",
	name: "Flare Blitz",
	pp: 15,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1, defrost: 1},
	recoil: [33, 100],
	secondary: {
		chance: 10,
		status: 'brn',
	},
	target: "normal",
	type: "Fire",
	contestType: "Cool",
},

lavaplume: {
	num: 436,
	accuracy: 100,
	basePower: 80,
	category: "Special",
	name: "Lava Plume",
	pp: 15,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	secondary: {
		chance: 30,
		status: 'brn',
	},
	target: "allAdjacent",
	type: "Fire",
	contestType: "Tough",
},

thunderbolt: {
	num: 85,
	accuracy: 100,
	basePower: 90,
	category: "Special",
	name: "Thunderbolt",
	pp: 15,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	secondary: {
		chance: 10,
		status: 'par',
	},
	target: "normal",
	type: "Electric",
	contestType: "Cool",
},

voltswitch: {
	num: 521,
	accuracy: 100,
	basePower: 70,
	category: "Special",
	name: "Volt Switch",
	pp: 20,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	selfSwitch: true,
	secondary: null,
	target: "normal",
	type: "Electric",
	contestType: "Cool",
}

yawn: {
	num: 281,
	accuracy: true,
	basePower: 0,
	category: "Status",
	name: "Yawn",
	type: "Normal",
}

scald: {
	num: 503,
	accuracy: 100,
	basePower: 80,
	category: "Special",
	name: "Scald",
	pp: 15,
	priority: 0,
	flags: {protect: 1, mirror: 1, defrost: 1},
	thawsTarget: true,
	secondary: {
		chance: 30,
		status: 'brn',
	},
	target: "normal",
	type: "Water",
	contestType: "Tough",
},

superfang: {
	num: 162,
	accuracy: 90,
	basePower: 0,
	// damageCallback(pokemon, target) {
	// 	return this.clampIntRange(target.getUndynamaxedHP() / 2, 1);
	// },
	// category: "Physical",
	// name: "Super Fang",
	type: "Normal",
}

flipturn: {
	num: 812,
	accuracy: 100,
	basePower: 60,
	category: "Physical",
	name: "Flip Turn",
	pp: 20,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	selfSwitch: true,
	secondary: null,
	target: "normal",
	type: "Water",
},

dragondance: {
	num: 349,
	accuracy: true,
	basePower: 0,
	category: "Status",
	name: "Dragon Dance",
	pp: 20,
	priority: 0,
	flags: {snatch: 1, dance: 1},
	boosts: {
		atk: 1,
		spe: 1,
	},
}

waterfall: {
	num: 127,
	accuracy: 100,
	basePower: 80,
	category: "Physical",
	name: "Waterfall",
	pp: 15,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	secondary: {
		chance: 20,
		volatileStatus: 'flinch',
	},
	target: "normal",
	type: "Water",
	contestType: "Tough",
},

bounce: {
	num: 340,
	accuracy: 85,
	basePower: 85,
	category: "Physical",
	name: "Bounce",
	type: "Flying",
}

rapidspin: {
	num: 229,
	accuracy: 100,
	basePower: 50,
	category: "Physical",
	name: "Rapid Spin",
	type: "Fire",
}

drainpunch: {
	num: 409,
	accuracy: 100,
	basePower: 75,
	category: "Physical",
	name: "Drain Punch",
	pp: 10,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1, punch: 1, heal: 1},
	drain: [1, 2],
	secondary: null,
	target: "normal",
	type: "Fighting",
	contestType: "Tough",
},

throatchop: {
	num: 675,
	accuracy: 100,
	basePower: 80,
	category: "Physical",
	name: "Throat Chop",
	type: "Fighting",
}

machpunch: {
	num: 183,
	accuracy: 100,
	basePower: 40,
	category: "Physical",
	name: "Mach Punch",
	pp: 30,
	priority: 1,
	flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
	secondary: null,
	target: "normal",
	type: "Fighting",
	contestType: "Cool",
},

bulkup: {
	num: 339,
	accuracy: true,
	basePower: 0,
	category: "Status",
	name: "Bulk Up",
	type: "Fighting",
	pp: 20,
	priority: 0,
	flags: {snatch: 1},
	boosts: {
		atk: 1,
		def: 1,
	},
}

closecombat: {
	num: 370,
	accuracy: 100,
	basePower: 120,
	category: "Physical",
	name: "Close Combat",
	pp: 5,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	self: {
		boosts: {
			def: -1,
			spd: -1,
		},
	},
}

poisonjab: {
	num: 398,
	accuracy: 100,
	basePower: 80,
	category: "Physical",
	name: "Poison Jab",
	pp: 20,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	secondary: {
		chance: 30,
		status: 'psn',
	},
	target: "normal",
	type: "Poison",
	contestType: "Tough",
},

lovelykiss: {
	num: 142,
	accuracy: 75,
	basePower: 0,
	category: "Status",
	name: "Lovely Kiss",
	pp: 10,
	priority: 0,
	flags: {protect: 1, reflectable: 1, mirror: 1},
	status: 'slp',
	secondary: null,
	target: "normal",
	type: "Normal",
	zMove: {boost: {spe: 1}},
	contestType: "Beautiful",
},

swordsdance: {
	num: 14,
	accuracy: true,
	basePower: 0,
	category: "Status",
	name: "Swords Dance",
	pp: 20,
	priority: 0,
	flags: {snatch: 1, dance: 1},
	boosts: {
		atk: 2,
	},
	secondary: null,
	target: "self",
	type: "Normal",
	zMove: {effect: 'clearnegativeboost'},
	contestType: "Beautiful",
},

liquidation: {
	num: 710,
	accuracy: 100,
	basePower: 85,
	category: "Physical",
	name: "Liquidation",
	pp: 10,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	secondary: {
		chance: 20,
		boosts: {
			def: -1,
		},
	},
	target: "normal",
	type: "Water",
	contestType: "Cool",
},

superpower: {
	num: 276,
	accuracy: 100,
	basePower: 120,
	category: "Physical",
	name: "Superpower",
	pp: 5,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	self: {
		boosts: {
			atk: -1,
			def: -1,
		},
	},
	secondary: null,
	target: "normal",
	type: "Fighting",
	contestType: "Tough",
},

aquajet: {
	num: 453,
	accuracy: 100,
	basePower: 40,
	category: "Physical",
	name: "Aqua Jet",
	type: "Water",
}

doubleedge: {
	num: 38,
	accuracy: 100,
	basePower: 120,
	category: "Physical",
	name: "Double-Edge",
	pp: 15,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	recoil: [33, 100],
	secondary: null,
	target: "normal",
	type: "Normal",
	contestType: "Tough",
},

suckerpunch: {
	num: 389,
	accuracy: 100,
	basePower: 70,
	category: "Physical",
	name: "Sucker Punch",
	type: "Dark",
}

sheercold: {
	num: 329,
	accuracy: 30,
	basePower: 0,
	category: "Special",
	name: "Sheer Cold",
	pp: 5,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	secondary: null,
	ohko: 'Ice',
	target: "normal",
	type: "Ice",
	zMove: {basePower: 180},
	maxMove: {basePower: 130},
	contestType: "Beautiful",
},

horndrill: {
	num: 32,
	accuracy: 30,
	basePower: 0,
	category: "Physical",
	name: "Horn Drill",
	pp: 5,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	ohko: true,
	secondary: null,
	target: "normal",
	type: "Normal",
	zMove: {basePower: 180},
	maxMove: {basePower: 130},
	contestType: "Cool",
},

bodyslam: {
	num: 34,
	accuracy: 100,
	basePower: 85,
	category: "Physical",
	name: "Body Slam",
	pp: 15,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1, nonsky: 1},
	secondary: {
		chance: 30,
		status: 'par',
	},
	target: "normal",
	type: "Normal",
	contestType: "Tough",
},

ironhead: {
	num: 442,
	accuracy: 100,
	basePower: 80,
	category: "Physical",
	name: "Iron Head",
	pp: 15,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	secondary: {
		chance: 30,
		volatileStatus: 'flinch',
	},
	target: "normal",
	type: "Steel",
	contestType: "Tough",
},

sludgebomb: {
	num: 188,
	accuracy: 100,
	basePower: 90,
	category: "Special",
	name: "Sludge Bomb",
	pp: 10,
	priority: 0,
	flags: {bullet: 1, protect: 1, mirror: 1},
	secondary: {
		chance: 30,
		status: 'psn',
	},
	target: "normal",
	type: "Poison",
	contestType: "Tough",
},

recover: {
	num: 105,
	accuracy: true,
	basePower: 0,
	category: "Status",
	name: "Recover",
	pp: 10,
	priority: 0,
	flags: {snatch: 1, heal: 1},
	heal: [1, 2],
	secondary: null,
	target: "self",
	type: "Normal",
	zMove: {effect: 'clearnegativeboost'},
	contestType: "Clever",
},

leechseed: {
	num: 73,
	accuracy: 90,
	basePower: 0,
	category: "Status",
	name: "Leech Seed",
	pp: 10,
	priority: 0,
	// flags: {protect: 1, reflectable: 1, mirror: 1},
	// volatileStatus: 'leechseed',
	// condition: {
	// 	onStart(target) {
	// 		this.add('-start', target, 'move: Leech Seed');
	// 	},
	// 	onResidualOrder: 8,
	// 	onResidual(pokemon) {
	// 		const target = this.getAtSlot(pokemon.volatiles['leechseed'].sourceSlot);
	// 		if (!target || target.fainted || target.hp <= 0) {
	// 			this.debug('Nothing to leech into');
	// 			return;
	// 		}
	// 		const damage = this.damage(pokemon.baseMaxhp / 8, pokemon, target);
	// 		if (damage) {
	// 			this.heal(damage, target, pokemon);
	// 		}
	// 	},
	// },
	// onTryImmunity(target) {
	// 	return !target.hasType('Grass');
	// },
	// secondary: null,
	// target: "normal",
	// type: "Grass",
	// zMove: {effect: 'clearnegativeboost'},
	// contestType: "Clever",
},

bodyslam: {
	num: 34,
	accuracy: 100,
	basePower: 85,
	category: "Physical",
	name: "Body Slam",
	pp: 15,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1, nonsky: 1},
	secondary: {
		chance: 30,
		status: 'par',
	},
	target: "normal",
	type: "Normal",
	contestType: "Tough",
},

curse: {
	num: 174,
	accuracy: true,
	basePower: 0,
	category: "Status",
	name: "Curse",
	pp: 10,
	// priority: 0,
	// flags: {bypasssub: 1},
	// volatileStatus: 'curse',
	// onModifyMove(move, source, target) {
	// 	if (!source.hasType('Ghost')) {
	// 		move.target = move.nonGhostTarget as MoveTarget;
	// 	}
	// },
	// onTryHit(target, source, move) {
	// 	if (!source.hasType('Ghost')) {
	// 		delete move.volatileStatus;
	// 		delete move.onHit;
	// 		move.self = {boosts: {spe: -1, atk: 1, def: 1}};
	// 	} else if (move.volatileStatus && target.volatiles['curse']) {
	// 		return false;
	// 	}
	// },
	// onHit(target, source) {
	// 	this.directDamage(source.maxhp / 2, source, source);
	// },
	// condition: {
	// 	onStart(pokemon, source) {
	// 		this.add('-start', pokemon, 'Curse', '[of] ' + source);
	// 	},
	// 	onResidualOrder: 12,
	// 	onResidual(pokemon) {
	// 		this.damage(pokemon.baseMaxhp / 4);
	// 	},
	// },
	// secondary: null,
	// target: "randomNormal",
	// nonGhostTarget: "self",
	// type: "Ghost",
	// zMove: {effect: 'curse'},
	// contestType: "Tough",
},

slackoff: {
	num: 303,
	accuracy: true,
	basePower: 0,
	category: "Status",
	name: "Slack Off",
	pp: 10,
	priority: 0,
	flags: {snatch: 1, heal: 1},
	heal: [1, 2],
	secondary: null,
	target: "self",
	type: "Normal",
	zMove: {effect: 'clearnegativeboost'},
	contestType: "Cute",
},

rockslide: {
	num: 157,
	accuracy: 90,
	basePower: 75,
	category: "Physical",
	name: "Rock Slide",
	pp: 10,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	secondary: {
		chance: 30,
		volatileStatus: 'flinch',
	},
	target: "allAdjacentFoes",
	type: "Rock",
	contestType: "Tough",
},

willowisp: {
	num: 261,
	accuracy: 85,
	basePower: 0,
	category: "Status",
	name: "Will-O-Wisp",
	pp: 15,
	priority: 0,
	flags: {protect: 1, reflectable: 1, mirror: 1},
	status: 'brn',
	secondary: null,
	target: "normal",
	type: "Fire",
	zMove: {boost: {atk: 1}},
	contestType: "Beautiful",
},

highhorsepower: {
	num: 667,
	accuracy: 95,
	basePower: 95,
	category: "Physical",
	name: "High Horsepower",
	pp: 10,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	secondary: null,
	target: "normal",
	type: "Ground",
	contestType: "Tough",
},

agility: {
	num: 97,
	accuracy: true,
	basePower: 0,
	category: "Status",
	name: "Agility",
	pp: 30,
	priority: 0,
	flags: {snatch: 1},
	boosts: {
		spe: 2,
	},

	icepunch: {
		num: 8,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Ice Punch",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: {
			chance: 10,
			status: 'frz',
		},
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
	},

	triattack: {
		num: 161,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Tri Attack",
		pp: 10,
		priority: 0,
		// flags: {protect: 1, mirror: 1},
		// secondary: {
		// 	chance: 20,
		// 	onHit(target, source) {
		// 		const result = this.random(3);
		// 		if (result === 0) {
		// 			target.trySetStatus('brn', source);
		// 		} else if (result === 1) {
		// 			target.trySetStatus('par', source);
		// 		} else {
		// 			target.trySetStatus('frz', source);
		// 		}
		// 	},
		// },
		// target: "normal",
		// type: "Normal",
		// contestType: "Beautiful",
	},

	quickattack: {
		num: 98,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Quick Attack",
		pp: 30,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},

	frustration: {
		num: 218,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon) {
			return Math.floor(((255 - pokemon.happiness) * 10) / 25) || 1;
		},
		category: "Physical",
		isNonstandard: "Past",
		name: "Frustration",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Cute",
	},

	voltswitch: {
		num: 521,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Volt Switch",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		selfSwitch: true,
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},

	extremespeed: {
		num: 245,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Extreme Speed",
		pp: 5,
		priority: 2,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},

	explosion: {
		num: 153,
		accuracy: 100,
		basePower: 250,
		category: "Physical",
		name: "Explosion",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		selfdestruct: "always",
		secondary: null,
		target: "allAdjacent",
		type: "Normal",
		contestType: "Beautiful",
	},

	energyball: {
		num: 412,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Energy Ball",
		pp: 10,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Grass",
		contestType: "Beautiful",
	},

	scorchingsands: {
		num: 815,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Scorching Sands",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1},
		thawsTarget: true,
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "normal",
		type: "Ground",
	},

	meteorbeam: {
		num: 800,
		accuracy: 90,
		basePower: 120,
		category: "Special",
		name: "Meteor Beam",
		pp: 10,
		priority: 0,
		// flags: {charge: 1, protect: 1, mirror: 1},
		// onTryMove(attacker, defender, move) {
		// 	if (attacker.removeVolatile(move.id)) {
		// 		return;
		// 	}
		// 	this.add('-prepare', attacker, move.name);
		// 	this.boost({spa: 1}, attacker, attacker, move);
		// 	if (!this.runEvent('ChargeMove', attacker, defender, move)) {
		// 		return;
		// 	}
		// 	attacker.addVolatile('twoturnmove', defender);
		// 	return null;
		// },
		secondary: null,
		target: "normal",
		type: "Rock",
	},
	
	meteormash: {
		num: 309,
		accuracy: 90,
		basePower: 90,
		category: "Physical",
		name: "Meteor Mash",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: {
			chance: 20,
			self: {
				boosts: {
					atk: 1,
				},
			},
		},
		target: "normal",
		type: "Steel",
		contestType: "Cool",
	},

	healingwish: {
		num: 361,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Healing Wish",
		pp: 10,
		// priority: 0,
		// flags: {snatch: 1, heal: 1},
		// onTryHit(pokemon, target, move) {
		// 	if (!this.canSwitch(pokemon.side)) {
		// 		delete move.selfdestruct;
		// 		return false;
		// 	}
		// },
		// selfdestruct: "ifHit",
		// slotCondition: 'healingwish',
		// condition: {
		// 	onSwap(target) {
		// 		if (!target.fainted && (target.hp < target.maxhp || target.status)) {
		// 			target.heal(target.maxhp);
		// 			target.setStatus('');
		// 			this.add('-heal', target, target.getHealth, '[from] move: Healing Wish');
		// 			target.side.removeSlotCondition(target, 'healingwish');
		// 		}
		// 	},
		// },
		secondary: null,
		target: "self",
		type: "Psychic",
		contestType: "Beautiful",
	},

	flashcannon: {
		num: 430,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Flash Cannon",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Steel",
		contestType: "Beautiful",
	},

	lavaplume: {
		num: 436,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Lava Plume",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "allAdjacent",
		type: "Fire",
		contestType: "Tough",
	},
	
	bulletpunch: {
		num: 418,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Bullet Punch",
		pp: 30,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Tough",
	},

	facade: {
		num: 263,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Facade",
		// pp: 20,
		// priority: 0,
		// flags: {contact: 1, protect: 1, mirror: 1},
		// onBasePower(basePower, pokemon) {
		// 	if (pokemon.status && pokemon.status !== 'slp') {
		// 		return this.chainModify(2);
		// 	}
		// },
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cute",
	},

	heavyslam: {
		num: 484,
		accuracy: 100,
		basePower: 0,
		// basePowerCallback(pokemon, target) {
		// 	const targetWeight = target.getWeight();
		// 	const pokemonWeight = pokemon.getWeight();
		// 	if (pokemonWeight >= targetWeight * 5) {
		// 		return 120;
		// 	}
		// 	if (pokemonWeight >= targetWeight * 4) {
		// 		return 100;
		// 	}
		// 	if (pokemonWeight >= targetWeight * 3) {
		// 		return 80;
		// 	}
		// 	if (pokemonWeight >= targetWeight * 2) {
		// 		return 60;
		// 	}
		// 	return 40;
		// },
		// category: "Physical",
		// name: "Heavy Slam",
		// pp: 10,
		// priority: 0,
		// flags: {contact: 1, protect: 1, mirror: 1, nonsky: 1},
		// onTryHit(target, pokemon, move) {
		// 	if (target.volatiles['dynamax']) {
		// 		this.add('-fail', pokemon, 'Dynamax');
		// 		this.attrLastMove('[still]');
		// 		return null;
		// 	}
		// },
		secondary: null,
		target: "normal",
		type: "Steel",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
		contestType: "Tough",
	},