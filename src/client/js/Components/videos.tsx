import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

enum Expansion {
	MoP 	= "Mists of Pandaria",
	WoD 	= "Warlord of Draenor",
	Legion 	= "Legion",
	BFA 	= "Battle for Azeroth",
	SL 		= "Shadowlands",
}

class Boss {
	name: string;
	link: string;
	icon: string;

	constructor(n, l, i) {
		this.name = n;
		this.link = l;
		this.icon = i;
	}
}

let hash : Map<string, Array<Raid>> = new Map<string, Array<Raid>>();

for(let e of Object.values(Expansion)) {
	hash.set(e, []);
}

class Raid {
	expansion: Expansion;
	bosses: Array<Boss> = [];

	constructor(expac: Expansion, names: Array<string>, links: Array<string>, icons: Array<string>) {
		this.expansion = expac;

		for(let i = 0; i < names.length; i++) {
			this.bosses.push(new Boss(names[i], links[i], icons[i]))
		}

		let current = hash.get(expac);
		current.push(this);
		hash.set(expac, current);
		console.log(hash)
	}

	private static legacyRender(r: Raid) {
		return <span>Raid without icons defined is not implemented</span>
		/*
			<table className="table">
				<thead>
					<tr>
					<th scope="col">Boss</th>
					<th scope="col">Link</th>
					</tr>
				</thead>
				<tbody>
					{rows()}
				</tbody>
			</table>
		*/
	}
}

let cnBosses = ["Shriekwing", "Huntsman Altimor", "Hungering Destroyer", "Artificer Xy'mox", "Lady Inerva Darkvein", "Sun King's Salvation", "Council of Blood", "Sludefist", "Stone Legion Generals", "Sire Denathrius"];
let cnLinks = ["kRLhT1NMuUA", "Bw-xb0kQ9DE", "YKV01WL6cKM", "CQvVEqFSo5E", "lo6ypLHfyVk", "", "", "", "", "", ""];
let cnIcons = [
	"/shriekwing.jpg",
	"/huntsman-altimor.jpg",
	"/hungering-destroyer.jpg",
	"/artificer-xymox.jpg",
	"/lady-inerva-darkvein.jpg",
	"/sun-kings-salvation.jpg",
	"/the-council-of-blood.jpg",
	"/sludgefist.jpg",
	"/stone-legion-generals.jpg",
	"/sire-denathrius.jpg"
];

let nyaBosses = ["Wrathion"		, "Maut"		, "Prophhet Skitra"	, "Dark Inquisitor Xanesh"	, "Vexiona"		, "Hivemind"	, "Ra-den"		, "Shad'har"	, "Drest'agath", "Il'gynoth"	, "Carapace of N'Zoth"	, "N'Zoth"];
let nyaLinks = ["iXX6AU15Tc0"	, "Lfq2RFG8uHU"	, "BT4lmWD5qHg"		, "f5UWdW7ybjI"				, "N_sSTBAJHtk" , "SWVkTp_PxUs"	, "BjESKaKycUg"	, "Ze-lBPshsCQ"	, "q5MEYXYfBcY", "uv2YcRpv0VE"	, "IuXelC1iDc0"			, "SpcjhMsgInc"];
let nyaIcons = [
	"wrathion.png",
	"maut.png",
	"skitra.png",
	"xanesh.png",
	"vexiona.png",
	"hivemind.png",
	"raden.png",
	"shadhar.png",
	"drestagath.png",
	"ilgynoth.png",
	"carapace.png",
	"nzoth.png"
];

let epBosses = ["Sivara", "Blackwater Behemoth" , "Radiance of Azshara"	, "Lady Ashvane", "Orgozoa"		, "Queen's Court"	, "Zaqul"		, "Queen Azshara"];
let epLinks =  [""		, ""					, ""					, "ZGTcL-aZcXQ"	, "6fEWFIzIErw"	, "WCJABd71P6s"		, "0J2MojuXjG8" , "zJ9Ohn54xHU"];
let epIcons = [
	"abyssal-commander-sivara.png",
	"blackwater-behemoth.png",
	"radiance-of-azshara.png",
	"lady-ashvane.png",
	"orgozoa.png",
	"queens-court.png",
	"zaqul.png",
	"queen-azshara.png"
];

new Raid(Expansion.SL, cnBosses, cnLinks, cnIcons)
new Raid(Expansion.BFA, nyaBosses, nyaLinks, nyaIcons)
new Raid(Expansion.BFA, epBosses, epLinks, epIcons)



function Videos() {
	let [vid, setVid] = useState(cnLinks[0]);
	let [xpac, setXpac] = useState(Expansion.SL);

	function test(e) {
		//console.log(e.target.dataset)
		setVid(e.target.dataset.vid);
	}

	function switchXpac(e) {
		setXpac(e.target.dataset.name);
	}

	/*function rows() {
		let arr = [];

		for(let i = 0; i < bosses.length; i++) {
			arr.push(<tr><td>{bosses[i]}</td><td>{links[i]}</td></tr>);
		}

		return arr;
	}*/

	function defaultRender(r: Raid) {
		let icons = [...r.bosses];
		let htmlIcons = icons.map(function (i) {
			if(i.link !== "") {
				return <img data-vid={i.link} data-name={i.name} src={i.icon} onClick={test}/>
			} else {
				return <img data-vid={i.link} data-name={i.name} src={i.icon} className="greyscale" />
			}
		});

		return <>
			{htmlIcons}
		</>
	}

	function renderRaid(r) {
		let html = defaultRender(r);
		
		return <>
			<div className="row border-top">
				<div className="col">
					{html}
				</div>
			</div>
		</>
	}

	function renderExpac(e) {
		let html = [];
		let raids = hash.get(e);

		for(let r of raids) {
			html.push(renderRaid(r));	
		}

		return html;
	}

	function render() {
		let html = [];

		
		html.push(renderExpac(xpac));
		

		return <>
			{html.reverse()}
		</>;
	}
	
	return <>
		<h3>{xpac} Raids</h3>
		<div className="row">
			<div className="col-3">
				{render()}
			</div>
			<div className="col text-center">
				<img className="xpacLogo" data-name={Expansion.SL} onClick={switchXpac} src="/sl-logo.png"></img>
				<img className="xpacLogo" data-name={Expansion.BFA} onClick={switchXpac} src="/bfa-logo.png"></img>
				<iframe width="560" height="315" src={"https://www.youtube.com/embed/"  + vid} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
			</div>
		</div>
	</>
}
   

export default Videos;
