/*
* @Author: Charlie Gallentine
* @Date:   2018-10-09 08:24:59
* @Last Modified by:   Charlie Gallentine
* @Last Modified time: 2019-02-27 16:25:06
*/

function adjustBackground()
{
	const h = 
		window.innerHeight 
		|| document.documentElement.clientHeight 
		|| document.body.clientHeight;

	const offset = h - 425;
	const nav_offset = h - 50;
	const name_offset = h - (h>500 ? 485 : h > 400 ? 400 : 300);
	const social_offset = h - 400;

	console.log(h);

	document.getElementsByTagName("body")[0].style.backgroundPosition = `0 ${offset}px`;
	document.getElementById("navbar").style.top = `${nav_offset}px`;
	document.getElementById("name").style.top = `${name_offset}px`;
	document.getElementById("social").style.top = `${social_offset}px`;
}
