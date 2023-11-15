$(document).ready(function() {

			// list one content
			var one = [
				"sly",
				"colorful",
				"playful",
				"wild",
				"fierce",
				"inquisitive",
				"adorable",
				"angry",
				"agile",
				"cuddly",
				"fluffy",
				"cute",
				"energetic",
				"friendly",
				"lazy",
			];

			// list two content
			var two = [
				"foxes",
				"parrots",
				"dolphines",
				"snakes",
				"tigers",
				"otters",
				"puppies",
				"elephants",
				"cheetahs",
				"koalas",
				"ragdolls",
				"pandas",
				"squirrels",
				"horses",
				"turtles",
			];
            
            // list three content
			var three = [
				"itensed",
				"enchanted",
				"joyful",
				"anxious",
                "curious",
				"excited",
				"scared",
				"memorized",
                "enamored",
				"euphoric",
				"amused",
                "touched",
				"adoring",
				"intrigued"
			];
            

			// This is a very common randomizing function.
			// It takes a list (array) and returns one at random.
			function select_random(x){
				y = x[Math.floor(Math.random()*x.length)];
				return y;
			}

			function generate(){

				// Select a random item from each list
				var selected_one = select_random(one);
				var selected_two = select_random(two);
                var selected_three = select_random(three);

				// Take the selected (random) item from list and make it visible
				$('.list-one').html(selected_one);
				$('.list-two').html(selected_two);
                $('.list-three').html(selected_three);

			}

			$('button').click(function(){
				generate();
			});

			generate();
			
		});
