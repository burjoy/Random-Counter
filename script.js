let tebakan = document.getElementById("tebakan");
let butt = document.getElementById("butts");
let progress = document.getElementById("progress");
let benar = 0;
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
	}
	else{
		console.log('Salah!');
		console.log(cek);
	}
});