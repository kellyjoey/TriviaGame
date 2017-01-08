$(document).ready(function(){
	$(".default").hide();
	$(".clock").hide();
	var counter;

	var stopwatch ={
		time: 25,

		reset: function() {
			stopwatch.time = 25;
			$("#countdown").html("<h3><strong>Timer: " + stopwatch.time + "</strong></h3>");
		},

		start: function() {
			counter = setInterval(stopwatch.count, 1000);
		},

		count: function() {
			if (stopwatch.time > 0){
				stopwatch.time--;
				$("#countdown").html("<h3><strong>Timer: " + stopwatch.time + "</strong></h3>");
			}else{
				stopwatch.stop();
				$("#countdown").html("<h3><strong> OUT OF TIME! <strong><h3>");
				solution()
			};
		},

		stop: function() {
			clearInterval(counter);
		},
		
	};

	var quiz = [
    	{
        "question"      :   "Q1: How many criminals did Batman kill in his first year of comic book life, meaning we're talking about between May 1939 and May 1940?  How many evil-doers met their fates at his gloved hands?",
        "image"         :   "assets/images/bat1.jpg",
        "choices"       :   [
                               "0",
							   "1",
							   "2",
							   "7",
							   "20",
                            ],
        "correct"       :   "E. 20",
        "answer"		:   "4",
        "explanation"   :   "In Batman's first year of life in the comics, he killed 20 characters.  Whoa, really?  Yep.  He was just a rip-off of the Shadow, and like the Shadow he killed a lot of people.  He also slayed two vampires, 3 werewolves, and a handful of mutated monsters.",
    },
    {
        "question"      :   "Q2: In Batman #1 (Spring 1940), readers were invited to join a club called Robin's Regulars.  This was a club whose motto was: Be a Robin's Regular by being regular.  This club followed a code inspired by the letter's of Robin's name: Readiness, Obedience, Brotherhood, Industriousness.  What did the N stand for?",
        "image"         :   "assets/images/bat2.jpg",
        "choices"       :   [
                                "Nerve",
								"Niftiness",
								"Neatness",
								"Nationalism",
								"Niceness",
                            ],
        "correct"       :   "D. Nationalism",
        "answer"		:   "3", 
        "explanation"   :   "The N in Robin's name for Robin's Regulars stood for Nationalism because it was 1940, and the Nazis were just right around the corner.",
    },
    {
        "question"      :   "Q3: Throughout the 40s and especially the 1950s Batman underwent many bizarre physical transformations.  Which of these was NOT among them?",
        "image"         :   "assets/images/bat3.jpg",
        "choices"       :   [
                                "Rubber Batman",
								"Alien Batman",
								"Baby Batman",
								"Zebra-Striped Batman",
								"Genie Batman",
                            ],
        "correct"       :   "A. Rubber Batman",
        "answer"		:   "0",
        "explanation"   :   "Batman never underwent a transformation to become a rubber Batman, but he did, however, at various points become an alien, baby, genie, and briefly obtain zebra stripes.",
    },
    {
    	"question"		: 	"Q4:  Which of the following have Batman and Robin never been shown doing in a comic?",
    	"image"			: 	"assets/images/bat4.png",
    	"choices"		: 	[
    							"Waking up in bed together",
								"Sharing a sleeping bag while camping",
								"Lying naked under sunlamps together",
								"Robin sneaking up on Batman in the shower",
								"Relaxing in a rowboat together in a city park",
							],
		"correct"		: 	"B.  Sharing a sleeping bag while camping",
		"answer"		:   "1", 
		"explanation"	:	"Batman and Robin have woken up in bed together, lay naked under sunlamps together, shared a rowboat in a city park, and Robin has even snuck up on Batman in the shower.  They have never, however, been shown sharing a sleeping bag.  So, yeah, crisis averted, right?",	 
    },
    {
    	"question"		: 	"Q5:  In the 1950s, Batman was joined by the mysterious minx known as Batwoman.  Which of the following was not among her arsenal of lady-like crime-fighting equipment?",
    	"image"			: 	"assets/images/bat5.jpg",
    	"choices"		: 	[
    						"A powder puff of sneezing powder",
							"Charm bracelet handcuffs",
							"Sleep-inducing lipstick",
							"A hairnet that expanded to ensare hapless criminals",
							"A perfume flask filled with teargas.", 
							],
		"correct"		:   "C.  Sleep-inducing lipstick", 
		"answer" 		:   "2",
		"explanation" 	: 	"Batwoman's lady-like crime fighting devices DID include a powder puff of sneezing powder, charm bracelet handcuffs, a hairnet that expanded to ensare hapless criminals, and a perfume flask filled with teargas.  She did not, however, use a sleep-inducing lipstick presumably because that's really more of a Poison Ivy kind of thing.", 
    },
    {
    	"question"		: 	"Q6:  One of the following is a plot from an actual 50s Batman comic.  One of these actually happened.  Which is it?", 
    	"image"			: 	"assets/images/bat6.jpg",
    	"choices"		: 	[
    						"Batman dons a series of flamboyantly colored costumes to distract attention from Robin.",
							"Robin quits and takes up with a gang of young street toughts named the Dungaree's Delinquents.",
							"An old rival from butler school plants evidence implicating Alfred as a Communist sympathizer causing him to be called before  the House Committee on Un-American Activities.",
							"Batman finally tracks down the killer of his parents, now an impoverished guilt-ridden old man, and tearfully forgives him.",
							"On Christmas day, Batman begins to give off a mysterious odor, Robin finds an egg in his bedsheets, the batmobile suffers a blownout tire, and the Joker evades capture",  
							],
		"correct"		:   "A.  Batman dons a series of flamboyantly colored costumes to distract attention from Robin.", 
		"answer"		:   "0",
		"explanation"   :   "Batman DID at one point don a series of flamboyantly colored costumes to distract public attention from Robin who had sprained his arm thus potentially presenting the opportunity for people to connect the dots, e.g., isn't it odd how Dick Grayson and Robin both sprained their arms around the same time?  Robin DID NOT become the leader of a gang of street toughs, Alfred did not have to answer to Senator McCarthy, and Batman never tearfully forgave Joe Chill for killing his parents.  The Joker did get away, though, but he always does.",
    },
    {
    	"question"		:   "Q7:  During the 1950s, Batman was joined in his war on crime by several allies.  Which of these was NOT among them?",
    	"image"			:   "assets/images/bat7.jpg",
    	"choices"		:   [
    						"Mogo, the Bat-ape",
							"Bat-hound",
							"Squeekers, the Bat-bat",
							"Bat-mite",
							"Midge, the Bat-boy", 
							],
		"correct"		:   "C.  Squeekers, the Bat-bat",
		"answer"		:   "2",
		"explanation"	:   "In case you hadn't guessed, the 1950s were a really, really weird time for Batman in the comics, but even they didn't think it prudent to give Batman a sidekick called Squeakers, the bat-bat.  A Bat-Ape, though?  Well, that's just good, family fun.",
    },
    {
    	"question"		: 	"Q8:  Which of the following exclamations was NOT heard on the 1966-1968 Batman TV show?",
    	"image"			:   "assets/images/bat8.jpg",
    	"choices"		: 	[
    						"Holy hutzpah!",
							"Holy guacamole!",
							"Holy Holly in the ivy!",
							"Holy priceless collection of Etruscan snoods!",
							"Holy olio!",
							],
		"correct"		:   "C.  Holy Holly in the ivy!",
		"answer"		:   "2",
		"explanation"	:   "At some point, someone on the Batman TV show said 'Holy hutzpah!', 'Holy guacamole!', and 'Holy olio!''  Surprisingly, Robin did say, 'Holy priceless collection of Etruscan snoods!' but no one ever exclaimed, 'Holy Holly in the Ivy!'  Because that would just have been nonsense, duh.",  
    },
    {
    	"question"		:   "Q9:  In 1984, Dick Grayson gave up the role of Robin to assume his own independent crime-fighting identity?  Which name did he choose?", 
    	"image"			:   "assets/images/bat9.jpg",
    	"choices"		:   [
    						"Wingman",
							"Nightman",
							"Wingnight",
							"Nightwing",
							"Punchy McGee",
							],
		"correct"		:   "D.  Nightwing", 
		"answer"		:   "3", 
		"explanation"	:   "In what SHOULD be the easiest question in the quiz, the answer to who Dick Grayson became after he stopped being Robin is Nightwing.  Behold the glorious mullet and swoon!",
    },
    {
    	"question"		:   "Q10:  In 1988, the fate of Jason Todd, the second Robin, the Boy-Wonder, was left up to a call-in vote where readers could call up to decide if this kid lived or died.  Readers hungering for the kid's death won the day, but how close was the final vote?  How many votes separated it?",
    	"image"			:   "assets/images/bat10.jpg",
    	"choices"		:   [
    						"4 votes",
							"28 votes",
							"72 votes",
							"1,385 votes",
							"21,185 votes",
							],
		"correct"		:   "C.  72 votes",
		"answer"		:   "2",
		"explanation"	:   "There were a total of 10,614 votes, 5,343 wanting to see the Joker blow up that obnoxious Jason Todd (and his birth mother!) to smithereens, 5,271 hoping to spare the poor kid.  So, the margin of victory for the most blood-thirsty of readers was only 72 votes.",
    },
    {
    	"question"		:   "Q11:  In 2005, Jason Todd, the second Robin, returned from the dead after 17 years.  How did he accomplish this?", 
    	"image"			:   "assets/images/bat11.jpg",
    	"choices"		:   [
    						"He had faked his death in an effort to get out from under Batman's thumb.",
							"Batman's enemy Ra's Al-Guhl revived him using one of his famous Lazarus Pits",
							"A top-secret organization had him cloned",
							"Wizard did it",
							"Superboy punched the walls of reality really, really hard causing shockwaves to reverberate through creation and brought him back to life because shut up that's why.",
							],
		"correct"		:   "E.  Superboy punched the walls of reality really, really hard causing shockwaves to reverberate through creation and brought him back to life because shut up that's why.",
		"answer"		:   "4",
		"explanation"	:   "This is a bit of a trick question.  Anyone who's seen the WB Animated movie Batman: Beware the Red Hood knows that Jason Todd was revived via Ra's Al-Guhll's Lazarus Pit.  However, that's not how it went down in the comics.  Jason Todd did not fake his death nor was he cloned by the government, and while it would have been short and sweet a wizard did not, in fact, do it.  Instead, Superboy just punched the walls of reality really, really hard, and Jason came back because shut up, that's why.",  
    },

];

	function solution(){
		$("#solutionDiv").show();
		$("#correct").html(quiz[i].correct);
		$("#explanation").html(quiz[i].explanation);
		$("#image").attr("src", quiz[i].image);
		function answerTimeout(){
			answerTimer = setTimeout(nextQuestion, 10000);
		};
		answerTimeout();
	};

	function nextQuestion(){
		$("#question").show();
		$(".choice").show();
		$("#solutionDiv").hide();
		stopwatch.reset();
		if (i < 10){
			quizGo(i++);
		}else{
			$("#solutionDiv").html("That's the end of the quiz!  Thanks for playing!  Trivia written by Glen Weldon for NPR podcast 'Pop Culture Happy Hour.' Weldon is the author of 'The Caped Crusade: Batman and the Rise of Nerd Culture.'");
			$("#question").hide();
			$(".choice").hide();
		};
	};

	function quizGo(){
	stopwatch.start(stopwatch.time);
	var currentQuestion = quiz[i];
	$("#question").html(currentQuestion.question);
	$("#choiceA").html(currentQuestion.choices[0]);
	$("#choiceB").html(currentQuestion.choices[1]);
	$("#choiceC").html(currentQuestion.choices[2]);
	$("#choiceD").html(currentQuestion.choices[3]);
	$("#choiceE").html(currentQuestion.choices[4]);
	};



$("#start").on("click", function(){
	$("#startBtn").hide();
	$(".default").show();
	$(".clock").show();
	quizGo(i=0);


$(".choice").on("click", function(){
	stopwatch.stop();
	console.log(this.value);
	console.log(quiz[i].answer);

	if ((this.value)===(quiz[i].answer)){
		$("#reveal").html("CORRECT");
		solution();
		$("#question").hide();
		$(".choice").hide();
	}else{
		$("#reveal").html("WRONG!");
		solution();
		$("#question").hide();
		$(".choice").hide()
	}	
		});  //END OF CHOICE CLICK EVENT
	});  //END OF START QUIZ CLICK EVENT
});  //