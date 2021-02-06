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

let bosses = ["Shriekwing", "Huntsman Altimor", "Hungering Destroyer", "Artificer Xy'mox", "Lady Inerva Darkvein"];
let links = ["kRLhT1NMuUA", "Bw-xb0kQ9DE", "YKV01WL6cKM", "CQvVEqFSo5E", "lo6ypLHfyVk"];
let icons = [
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

new Raid(Expansion.SL, bosses, links, icons)


function Videos() {
	let [vid, setVid] = useState(links[0]);

	function test(e) {
		//console.log(e.target.dataset)
		setVid(e.target.dataset.vid);
	}

	function rows() {
		let arr = [];

		for(let i = 0; i < bosses.length; i++) {
			arr.push(<tr><td>{bosses[i]}</td><td>{links[i]}</td></tr>);
		}

		return arr;
	}

	function defaultRender(r: Raid) {
		let icons = [...r.bosses];
		let htmlIcons = icons.map((i) => <img data-vid={i.link} data-name={i.name} src={i.icon} onClick={test}/>)

		return <>
			{htmlIcons}
		</>
	}

	function renderRaid(r) {
		let html = defaultRender(r);
		
		return <>
			<div className="row">
				<div className="col-2">
					{html}
				</div>
				<div className="col text-center">
					<iframe width="560" height="315" src={"https://www.youtube.com/embed/" + vid} frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				</div>
			</div>
		</>
	}

	function renderExpac(e) {
		let html = [];
		let raids = hash.get(e);

		html.push(
			<div className="row">
				<div className="col">
					<h3>{e} Raids</h3>
				</div>
			</div>
		);

		for(let r of raids) {
			html.push(renderRaid(r));	
		}

		return html;
	}

	function render() {
		let html = [];

		for(let e of Object.values(Expansion)) {
			html.push(renderExpac(e));
		}

		return <>
			{html.reverse()}
		</>;
	}
	
	return <>{render()}</>
}
   

export default Videos;
