var game_array = ['A','A','C','C','E','E','G','G','I','I','F','F','B','B','D','D',];
	var game_values = [];
	var game_tile_ids = [];
	var tiles_flipped = 0;

	Array.prototype.game_tile_shuffle = function(){
		                      var i = this.length , j , temp ;
		                      while(--i > 0){
		                      	j = Math.floor(Math.random() * (i+1));
		                      	temp = this[j];
		                      	this[j] = this[i];
		                      	this[i] = temp;
		                      }
                            }
        function newboard(){
                         tiles_flipped = 0;
                         var output = '';
                         game_array.game_tile_shuffle();
                         for (var i = 0; i < game_array.length; i++) {
                        output += '<div id = "tile_'+i+'" onclick = "game_flip_tile(this,\''+game_array[i]+'\' )" ></div>';
                    }
                         document.getElementById('game').innerHTML = output ;
                   }
        function game_flip_tile(tile,val){
        	if (tile.innerHTML == "" && game_values.length < 2) {
        		tile.style.background = 'url(4.jpg)';
        		tile.innerHTML = val;
        		if (game_values.length == 0) {
        		game_values.push(val);
        		game_tile_ids.push(tile.id); 
        	}
        	else if(game_values.length == 1){
        		game_values.push(val);
        		game_tile_ids.push(tile.id);
        		    if(game_values[0] == game_values[1]){
        		    	tiles_flipped += 2;
        		    	game_values = [];
        		    	game_tile_ids = [];
        		    	if (tiles_flipped == game_array.length) {
        		    		alert("congratulations! Board Cleared. press OK for restart the game");
        		    		document.getElementById('game').innerHTML = "";
        		    		newboard();
        		    	}
        		    }
        		    else{
        		    	function flipback(){
        		    		var tile_1 = document.getElementById(game_tile_ids[0]);
        		    		var tile_2 = document.getElementById(game_tile_ids[1]);
        		    		tile_1.style.background = 'no-repeat';

        		    		tile_1.innerHTML = "";
        		    		tile_2.style.background = 'no-repeat';

        		    		tile_2.innerHTML = "";
        		    		game_values = [];
        		    		game_tile_ids = [];

        		    	}
        		    	setTimeout(flipback ,500);
        		    }
        	}
        	}
        }
        