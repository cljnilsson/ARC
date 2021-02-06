import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function FAQ() {
	return (<div className="row">
				<div className="col">
					<h3>General Rules</h3>
					<div className="ml-3 faq">
						<p>Be nice. A Moo (all purpose ARC greeting) on log in and a nn/see yas on log out goes a long way</p>
						<p>Sexism/Racism/Homophobia/etc is not tolerated</p>
						<p>Bullying/Harassment is not tolerated</p>
						<p>Any of the above should be reported to a Guild Officer</p>
						<p>Try to help out guildies whenever possible!</p>
						<p>Enchanters/Jewelcrafters tend to bear the brunt of the above so feel free to toss money/mats their way as thanks</p>
						<p>Try to help out the guild bank. Herbs/Feeeeeesh/stuff are always appreciated</p>
						<p>Fifi is also known as Teena and loves being sent Feeeesh</p>
						<p>LL is also known as Zultmeth/Khiakren/Elelelelelelereth etc and should not be healed</p>
					</div>
					<h3>Pre-raid</h3>
					<div className="ml-3 faq">
						<p>Sign up by lunchtime on the day of the raid, preferably before!</p>
						<p>If you find you can't make the raid after signing up, notify on Discord pinging the Officers</p>
						<p>You should have read up on the boss fights beforehand. RLs will give an overview but it's more a memory prompt than a full overview.</p>
						<p>You should have a Main character for raiding with. Changing Main is possible but should be done with Officer permission</p>
						<p>If you aren't happy with your Main or with your general raid role, please let an Officer know so we can try to accommodate it!</p>
						<p>If you can't attend a Raid and you are a regular raider, please sign up No or Maybe so we can keep track of who has just forgotten to sign yet</p>
						<p>If you can't make the whole Raid, that's fine. Just try to let us know when you'll arrive/have to leave</p>
						<p>Show up to Raid Gemmed and Enchanted</p>
						<p>We use Discord for voice chat. Make sure you have it installed and ready to go</p>
						<p>Speaking is optional unless you are a tank</p>
						<p>Guild often provides feasts but you should have a supply of personal food for progression</p>
					</div>
					<h3>Raid night</h3>
					<div className="ml-3 faq">
						<p>Be at the entrance at least 10 minutes beforehand. We aim for first pull at 21:00, not first hiss!</p>
						<p>To join the raid, /w Feesh! to an Officer (Teena, Gai, Khiakren, Kelianda)</p>
						<p>Don't hiss until someone has requested on Guild Chat! History should show whether that has happened or not yet.</p>
						<p>Don't enter the Raid until an Officer gives the nod. We might be doing lockout shenanigans</p>
						<p>Flasks or Cauldron are provided by the Guild! Please don't make a Cauldron/place a Cauldron until prompted</p>
						<p>Potions are generally a raider responsibility though the Guild Bank tries to help out. Try to make sure you have a supply</p>
						<p>We are a social guild and chatter is expected but try to make sure pre-pulls then you pause for breath so we can make sure tactics are discussed and we can start the pull timer and kill things!</p>
						<p>Chatter during boss fights in the middle of progression fights should be kept to a minimum</p>
						<p>Chatter during boss fights in the middle of farm fights is expected</p>
						<p>Have fun! If you aren't enjoying it, please let us know so we can sort things out!</p>
					</div>
					<h3>Loot</h3>
					<div className="ml-3 faq">
						<p>In general loot is personal</p>
						<p>The exception to this is Epic BoEs which we put up for rolls.</p>
						<p>If no-one wants an Epic BoE, it goes into the Guild Bank for auctioning to help fund the guild bank/helping people gear up new mains</p>
						<p>Loot rolling happens after the Raid Break and at Raid End</p>
						<p>You can roll for off-spec but must declare it such and will be lower priority than Mainspec</p>
					</div>
				</div>
			</div>)
}
   

export default FAQ;
