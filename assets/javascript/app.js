$(document).ready(function(){
$("#start").on("click", function(){
var quiz = [
    {
        question      :   "Q1: How many criminals did Batman kill in his first year of comic book life, meaning we’re talking about between May 1939 and May 1940?  How many evil-doers met their fates at his gloved hands?"
        // "image"         :   "assets/images/bat1",
        // "choices"       :   [
        //                        "A. 0",
							 //   "B. 1",
							 //   "C. 2",
							 //   "D. 7",
							 //   "E. 20",
        //                     ],
        // "correct"       :   "E. 20",
        // "explanation"   :   "In Batman’s first year of life in the comics, he killed 20 characters.  Whoa, really?  Yep.  He was just a rip-off of the Shadow, and like the Shadow he killed a lot of people.  He also slayed two vampires, 3 werewolves, and a handful of mutated monsters.",
    },
    {
        question      :   "Q2: In Batman #1 (Spring 1940), readers were invited to join a club called Robin’s Regulars.  This was a club whose motto was, “Be a Robin’s Regular by being regular.”  This club followed a code inspired by the letter’s of Robin’s name: Readiness, Obedience, Brotherhood, Industriousness.  What did the “N” stand for?",
    //     // "image"         :   "assets/images/bat2",
    //     "choices"       :   [
    //                             "A. Nerve",
				// 				"B. Niftiness",
				// 				"C. Neatness",
				// 				"D. Nationalism",
				// 				"E. Niceness",
    //                         ],
    //     "correct"       :   "D. Nationalism",
    //     "explanation"   :   "The “N” in Robin’s name for Robin’s Regulars stood for Nationalism because it was 1940, and the Nazis were just right around the corner.",
    },
    // {
    //     "question"      :   "Q3: Throughout the 40s and especially the 1950s Batman underwent many bizarre physical transformations.  Which of these was NOT among them?",
    //     // "image"         :   "",
    //     "choices"       :   [
    //                             "A. Rubber Batman",
				// 				"B. Alien Batman",
				// 				"C. Baby Batman",
				// 				"D. Zebra-Striped Batman",
				// 				"E. Genie Batman",
    //                         ],
    //     "correct"       :   "A. Rubber Batman",
    //     "explanation"   :   "Batman never underwent a transformation to become a rubber Batman, but he did, however, at various points become an alien, baby, genie, and briefly obtain zebra stripes.",
    // },

];


	
	
		alert("click working");
		console.log(quiz.question[0]);
	});

});