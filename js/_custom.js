document.addEventListener('DOMContentLoaded', function() {

	let html = document.getElementsByClassName('html')[0];
	html.style.cssText = '--$accent: black';
	console.log('1');


	let inputVal = document.getElementsByClassName('new-task')[0];
	let addBut = document.getElementsByClassName('add-new-task')[0];
	let taskList = document.getElementsByTagName('ul')[0];
	let task = document.getElementsByClassName('task');
	let removeTask = document.getElementsByClassName('remove-task');

	let timeNum = document.getElementsByClassName('time-left')[0];
	let setTime = document.getElementsByClassName('set-time');


	let taskArr = [...task];
	let removeTaskArr = [].slice.call(removeTask);
	let setTimeArr = [...setTime];


	for (let i = 0; i < taskArr.length; i++) {
	 	let removeTaskSymbol = "<span class = 'remove-task'>&times</span>";
		taskArr[i].classList.add('hasCloseSymb');
		taskArr[i].insertAdjacentHTML('beforeend', removeTaskSymbol);
	}

	 function addNewTask() {
	 	let newTask = document.createElement('li');
	 	let taskText = document.createTextNode(inputVal.value);
	 	newTask.classList.add('task');
	 	newTask.appendChild(taskText);
	 	if (inputVal.value !== '') {
	 		taskList.appendChild(newTask);
	 	}

	 	inputVal.value = '';

	 	addCloseSymbol();

		for (let item of removeTask) {
			item.onclick = function() {
			let parent = this.parentNode.parentNode;
			this.parentNode.remove();
			}
		}
	}

	function addCloseSymbol () {
		let task = document.getElementsByClassName('task');
	 	let taskArr = [...task];
	 	for (let i = 0; i < taskArr.length; i++) {
	 	
	 		let removeTaskSymbol = '<span class = 'remove-task'>&times</span>';
			
			if (!taskArr[i].classList.contains('hasCloseSymb')) {
				taskArr[i].insertAdjacentHTML('beforeend', removeTaskSymbol);
				taskArr[i].classList.add('hasCloseSymb');
			}
	 	}
 	}

	for (let item of removeTask) {
		item.onclick = function() {
			let parent = this.parentNode.parentNode;
			this.parentNode.remove();
		}
	}

	
	addBut.addEventListener('click', addNewTask);


	function music(src) {
		this.sound = document.createElement('audio');
  		this.sound.src = src;
  		this.sound.setAttribute('preload', 'auto');
  		this.sound.setAttribute('controls', 'none');
  		this.sound.style.display = 'none';
  		this.sound.setAttribute('autoplay', '');
  		document.body.appendChild(this.sound);
  		this.play = function(){
    		this.sound.play();
  		}
  		this.stop = function(){
    		this.sound.pause();
  		}
	}
var isSwitch;
	function timerC(v) {
		let countDown = v;
		timeNum.innerHTML = countDown + ' min';
		var progBar = document.getElementsByClassName('progress-bar')[0];
		let percentage = 0;

		var timer = setInterval(function() {
			timeNum.innerHTML = countDown + ' min';
			percentage = 100 - ((countDown / v) * 100);

			countDown--;

			if(countDown < 0) {
				clearInterval(timer);
				music('music/music.mp3');
				timeNum.innerHTML = 'Go to rest :)';
			} else if (isSwitch === true) {
				clearInterval(timer);
				isSwitch = false;
			}
			
			progBar.style.width = percentage + '%';

		}, 1000);
	};

	for (let i = 0; i < setTimeArr.length; i++) {
		setTimeArr[i].onclick = function letItBe() {

			if(setTimeArr[i].innerHTML === '15') {
				isSwitch = false;
				if(isSwitch === false){
					timerC(14);
				}
				
			} else if(setTimeArr[i].innerHTML === '25') {
				isSwitch = false;
				if(isSwitch === false){
					timerC(24);
				}
			} else if(setTimeArr[i].innerHTML === '45') {
				isSwitch = false;
				if(isSwitch === false){
					timerC(44);
				}
			} else if(setTimeArr[i].innerHTML === '55') {
				isSwitch = false;
				if(isSwitch === false){
					timerC(54);
				}
			}
			
			for (let j = 0; j < setTimeArr.length; j++) {
				if (setTimeArr[j].classList.contains('active-button')) {
					setTimeArr[j].classList.remove('active-button');
					isSwitch = true;
				}
			}
			this.classList.add('active-button');
		}
	}

});


