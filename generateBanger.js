importScripts;

console.log("welcome to jadey\'s playlist" + "!");
console.log("=============================")
console.log("my name is dj cinnamoroll, jadey\'s playlist genie :)");
console.log("pick a random number and i will recommend you a song");
console.log("====================================================")

let songs = ["my body by slayyyter", "capable of love by pinkpantheress", "west coast by lana del rey", "one in a million by aaliyah" , "igual que un ángel with peso pluma by kali uchis", "need your love by tennis", "yours by now, now", "the flash by kwon eunbi", "rolla skates by jo yuri", "attitude by fromis" + "_" + "9"];
let loop;

function generateBanger(){
let choice = Math.round(prompt("please pick a number from 0-9"));
if (!isNaN(choice))
	{
		console.log("you picked: " + choice + "." + " now loading...");
		console.log("jadey\'s recommendation for you is: " + songs[choice] + "!");
		console.log("hope you love this song " + ":P");
	}
else{
	return generateBanger();
	}
}
function goAgain(){
loop = prompt("would you like another recommendation?")
if (loop == ("yes") || ("no")){
		if (loop == "yes"){
		while (loop == "yes"){
			generateBanger();
			loop = prompt("would you like another recommendation?")
			}
		}
		else if (loop == "no"){
		console.log("thanks for listening!");
		}
	}
else
	if(loop !== ("yes" || "no")){
	return goAgain();
	}	
}
generateBanger();
goAgain();