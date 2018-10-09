/*
* @Author: Charlie Gallentine
* @Date:   2018-10-09 08:24:59
* @Last Modified by:   Charlie Gallentine
* @Last Modified time: 2018-10-09 11:24:40
*/

function adjustBackground()
{
	var h = 
		window.innerHeight 
		|| document.documentElement.clientHeight 
		|| document.body.clientHeight;

	var offset = h - 425;
	var nav_offset = h - 50;

	document.getElementById("body").style.backgroundPosition = `0 ${offset}px`;
	document.getElementById("navbar").style.marginTop = `${nav_offset}px`;
}
