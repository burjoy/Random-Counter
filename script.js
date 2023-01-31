let tebakan = document.getElementById("tebakan");
let butt = document.getElementById("butts");
let progress = document.getElementById("progress");
let level = document.getElementById("level");
let benar = 0;
let no_level = 1;
butt.addEventListener("click", function(){
	let nilai = tebakan.value;
	cek = Math.round(Math.random()*5)
	if(nilai == cek){
		if(benar < 5){
			benar++;
			let proses = 'w-'+'['+benar/5*100+'%'+']';
			let regres = 'w-'+'['+(benar-1)/5*100+'%'+']';
			console.log('Benar!');
			progress.classList.add('bg-sky-500');
			progress.classList.add(proses);
			progress.classList.add('h-full');
			progress.classList.remove(regres);
		}
		if(benar == 5){
			no_level++;
			benar = 0;
			level.innerText = 'Level: ' + no_level;
			progress.classList.remove('w-[100%]');
			progress.classList.remove('bg-sky-500');
		}
		console.log(benar);
	}
	else{
		console.log('Salah!');
		console.log(cek);
	}
});
