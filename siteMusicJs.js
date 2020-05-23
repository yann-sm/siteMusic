	
// MENU -
		//ouverture nav
		function openNav(){
			document.getElementById('mySidenav').style.width="250px";
		}
		//fermeture nav
		function closeNav(){
			document.getElementById('mySidenav').style.width="0";
		}

// REVENIR A LA PLAYLIST -

		function playlist(){
			document.getElementById('images').style.visibility = "hidden";
			document.getElementById('playlist').style.visibility = "visible";
			document.getElementById('videos').style.visibility = "hidden";
		}

// PLAYLIST AUDIO -

	//Liens des titres
		var songs = [
		'musique/Dio-Holy Diver.mp3',
		'musique/Twisted Sister -- Were Not Gonna Take It [extended Version] Official Music Video.mp3',
		'musique/Five Finger Death Punch - House Of The Rising Sun.mp3',
		'musique/Soundtrack Guardians Of The Galaxy (theme Song)  Musique Du Film Les Gardiens De La Galaxie.mp3',
		'musique/Steel Panther - Hells On Fire.mp3',
		'musique/Steel Panther - Livin On A Prayer.mp3',
		'musique/jekyll-and-hyde-five-finger-death-punch.mp3',
		'musique/gus-g-just-cant-let-go-feat-jacob-bunton.mp3',
		'musique/shinedown-simple-man-video.mp3',
		'musique/killswitch-engage-my-curse-official-video.mp3',
		'musique/motorjesus-trouble-in-motor-city.mp3',
		'musique/speed-of-the-beast-motorjesus.mp3',
		'musique/01 Bohemian Rhapsody.mp3',
		'musique/01 Feuer Frei.mp3',
		'musique/02 Long Hard Road Out Of Hell.mp3',
		'musique/03 Killer Queen.mp3',
		'musique/02 Piste 2.mp3',
		'musique/08 Bother.mp3',
		'musique/08 Only inhuman.mp3',
		'musique/11 Departure 1.mp3',
		'musique/15 The Metal.mp3',
		'musique/Reload.mp3',
		'musique/01 The Number of the Beast.mp3'
		];

		var songTitle = document.getElementById("songTitle");
		var songSlider = document.getElementById("songSlider");
		var currentTime = document.getElementById("currentTime");
		var volumeSlider = document.getElementById("volumeSlider");
		var image = document.getElementById("img");

		var song = new Audio();
		var currentSong = 0; // définit le point de départ du nb index de la music

		//Titres
		var b = [
		'Dio - Holy Diver',
		'Twisted Sister - Were Not Gonna Take It ',
		'Five Finger Death Punch - House Of The Rising Sun',
		'Soundtrack Guardians Of The Galaxy (theme Song)',
		'Steel Panther - Hells On Fire',
		'Steel Panther - Livin On A Prayer',
		'Five Finger Death Punch - jekyll and hyde',
		'Gus g - just cant let go feat jacob bunton',
		'shinedown - simple man',
		'killswitch engage - my curse',
		'Motorjesus - trouble in motor city',
		'Motorjesus - speed of the beast',
		'Queen - Bohemian Rhapsody',
		'Rammstein - Feuer Frei',
		'Marilyn Manson - Long Hard Road Out Of Hell',
		'Queen - Killer Queen',
		'Nickelback - Silver side up',
		'Stone Sour - Bother',
		'Sonic syndicate - Only inhuman',
		'Trivium - Departure ',
		'Tenacious D - The Metal',
		'Rob Zombie - Reload',
		'Iron Maiden - The Number of the Beast'
		];

		//Images des titres
		var image = [
			'images_video/Unknown.jpg',
			'images_video/twistedSister.jpg',
			'images_video/ffdp.jpg',
			'images_video/gardienDeLaGalaxies.jpg',
			'images_video/SP2.jpg',
			'images_video/SP2.jpg',
			'images_video/ffdpjJekyllAndHydre.jpg',
			'images_video/GusG.jpg',
			'images_video/shinedown.jpg',
			'images_video/killswitchEngage.jpg',
			'images_video/motorjesusTMC.jpg',
			'images_video/motorjesusSpeedOfTheBeast.jpg',
			'images_video/queen.jpg',
			'images_video/rammstein.jpg',
			'images_video/marilynManson.jpg',
			'images_video/queenKillerQueen.jpg',
			'images_video/nickelback.jpg',
			'images_video/stoneSour.jpg',
			'images_video/sonicSyndicate.jpg',
			'images_video/trivium.jpg',
			'images_video/tenaciousD.jpg',
			'images_video/robZombie.jpg',
			'images_video/ironMaidenNumberOfTheBeast.jpg'
		];



		function loadSong(){
			song.src = songs[currentSong];
			songTitle.textContent = b[currentSong];
			song.preload = "auto";
			song.volume = volumeSlider.value / 100;
			song.time = "preload";
		}

		setInterval(updateSongSlider, 1005);

		function updateSongSlider(){
			var c = Math.round(song.currentTime);
			songSlider.value = c;
			currentTime.textContent = convertime(c);
			if (song.ended) {
				return next();
			}
		}

		function seekSong(){
			song.currentTime = songSlider.value;
		}

		function playOrPauseSong(){
			if (song.paused) {
				song.play();
				song.src = songs[songs.Audio()];
				if (song.ended) {
					return next();
					$("#img").attr("src",image[currentSong]);
				}
			}else{
				song.pause();
				song.src = songs[songs.Audio()];
			}
		

		}
		function next(){
			currentSong++;
			if(currentSong >= songs.length){
				currentSong = 0;
			}
			currentSong = (currentSong < 0) ? songs.length +1 : currentSong;
			loadSong();
			song.src = songs[currentSong];
			song.play();
			$("#img").attr("src",image[currentSong]);
		}

		function previous(){
			currentSong--;
			currentSong = (currentSong < 0) ? songs.length -1 : currentSong;
			loadSong();
			song.src = songs[currentSong];
			song.play();
			$("#img").attr("src",image[currentSong]);
		} 



		function adjustVolume(){
			song.volume = volumeSlider.value / 100;
		}		

		window.onload = boost;

		function boost(){
			loadSong();
		}
	


		$("#titre li a").click(function(e){

			e.preventDefault();//pour evité un bug
			song.src = $("#titre li a")[currentSong].href; 
			song.play();//pour joué le titre direct apres changement
			$("#img").attr("src",image[currentSong]);//pour affiché l'image du titre actuel

			$("#titre li").removeClass("songActuel");//pour changerla
			 currentSong = $(this).parent().index();//couleur du titre
			 $(this).parent().addClass("songActuel");//qui est en court

			 loadSong();
			 song.src = songs[currentSong];
			 song.play();

			 $("#songTitle").text($(b)[0].src);//pour affiché la piste 
			 $("#img").attr("src",image[currentSong]);//Affiché l'image du titre

			

		});
		//fonction qui definit le changement de titre une fois le titre en cours terminé :
		song.addEventListener("ended", function(){
			currentSong++;
			if(currentSong == $("#titre li a").lenght)
				currentSong = 0;
				$("#songTitle").text(b[currentSong]);//pour affiché la piste actuel
				$("#img").attr("src",image[currentSong]);//Affiché l'image du titre
				
				

			//pour changerla couleur du titre en cours :
			$("#titre li").removeClass("songActuel");
			$("#titre li:eq("+currentSong+")").addClass("songActuel");

			song.src = $("#titre li a")[currentSong].href;
			song.play();

			$("#songTitle").text($(b)[0].src);//pour affiché la piste

			
		});

		//(peut definir le bouton suivant) definit le changement de couleur du titre en cours :
			$('#next').click(function(){
				currentSong;

			   	$('#titre li').removeClass('songActuel');
			    $('#titre li:eq('+currentSong+')').addClass('songActuel');

			    song.src = $('#titre li a')[currentSong].href;
			    song.play();

			    $("#songTitle").text($(b)[0].src);//pour affiché la piste
			   

			});

		//(peut definir le bouton precedent) definit le changement de couleur du titre en cours :
			$('#prev').click(function(){
				currentSong;

				$('#titre li').removeClass('songActuel');
				$('#titre li:eq('+currentSong+')').addClass('songActuel');

				song.src = $('#titre li a')[currentSong].href;
				song.play();

				 $("#songTitle").text($(b)[0].src);//pour affiché la piste
				

			});  



// IMAGES -
		// affichage des images via le menu -
		function img(){
			document.getElementById('images').style.visibility = "visible";
			document.getElementById('playlist').style.visibility = "hidden";
			document.getElementById('videos').style.visibility = "hidden";
		}
		
		// collection d'image que l'on range dans une liste -
		let images = [
			'images_video/IMG_20180624_121434.jpg',
			'images_video/IMG_20180624_131507.jpg',
			'images_video/IMG_20180624_132024.jpg',
			'images_video/IMG_20180624_133441.jpg',
			'images_video/IMG_20180624_133450.jpg',
			'images_video/IMG_20180624_133513.jpg',
			'images_video/IMG_20180624_151044.jpg',
			'images_video/IMG_20180624_151057.jpg',
			'images_video/IMG_20180624_151650.jpg',
			'images_video/IMG_20180624_152313.jpg',
			'images_video/IMG_20180624_174350.jpg',
			'images_video/IMG_20180624_174352.jpg',
			'images_video/IMG_20180624_181251.jpg',
			'images_video/IMG_20180624_190736.jpg',
			'images_video/IMG_20180624_193549.jpg',
			'images_video/IMG_20180624_193649.jpg',
			'images_video/IMG_20180624_220902.jpg',
			'images_video/IMG_20180624_224258.jpg',
			'images_video/IMG_20180624_224737.jpg'
		];
		// on definit un compteur à 0 :
		let num = 0;

		// deux fonction pour le slide 'suivant/precedent' -
		function imgNext(){
			let slider = document.getElementById('slider');
			num++;
			if(num >= images.length){
				num = 0;
			}
			slider.src = images[num];
		}

		function imgPrev(){
			let slider = document.getElementById('slider');
			num--;
			if(num < 0){
				num = images.length-1;
			}
			slider.src = images[num];
		}


// VIDEOS -
		// affichage des videos via le menu -
		function video(){
			document.getElementById('videos').style.visibility = "visible";
			document.getElementById('images').style.visibility = "hidden";
			document.getElementById('playlist').style.visibility = "hidden";
		}

		// collection de videos que l'on range dans une liste -
		let videos = [
			'images_video/VID_20180624_121448.mp4',
			'images_video/VID_20180624_132055.mp4',
			'images_video/VID_20180624_133536.mp4',
			'images_video/VID_20180624_133701.mp4',
			'images_video/VID_20180624_142335.mp4',
			'images_video/VID_20180624_164606.mp4',
			'images_video/VID_20180624_171337.mp4',
			'images_video/VID_20180624_172045.mp4',
			'images_video/VID_20180624_190814.mp4',
			'images_video/VID_20180624_214241.mp4',
			'images_video/VID_20180624_220037.mp4',
			'images_video/VID_20180624_220948.mp4',
			'images_video/VID_20180624_222154.mp4',
			'images_video/VID_20180624_223740.mp4',
			'images_video/VID_20180624_224100.mp4',
			'images_video/VID_20180624_225607.mp4',
			'images_video/VID_20180624_225633.mp4',
			'images_video/VID_20180624_225802.mp4',
			'images_video/VID_20180624_230444.mp4',
			'images_video/VID_20180624_230833.mp4',
			'images_video/VID_20180624_231518.mp4',
			'images_video/VID_20180624_235039.mp4',
			'images_video/VID_20180624_235902.mp4',
			'images_video/VID_20180625_001543.mp4',
			'images_video/VID_20180625_002027.mp4',
			'images_video/VID_20180625_002144.mp4',
			'images_video/VID_20180625_002814.mp4',
			'images_video/VID_20180625_003342.mp4',
			'images_video/VID_20180625_004309.mp4',
		];

		// on definit un compteur à 0 :
		let numV = 0;

		// deux fonction pour le slide 'suivant/precedent' -
		function videoNext(){
			let sliderV = document.getElementById('sliderV');
			numV++;
			if(numV >= videos.length){
				numV = 0;
			}
			sliderV.src = videos[numV];
		}

		function videoPrev(){
			let sliderV = document.getElementById('sliderV');
			numV--;
			if(numV < 0){
				numV = videos.length-1;
			}
			sliderV.src = videos[numV];
		}