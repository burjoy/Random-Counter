let tebakan = document.getElementById("tebakan");
let butt = document.getElementById("butts");
let progress = document.getElementById("progress");
let level = document.getElementById("level");
let benar = 0;
let salah = 5;
let no_level = 1;
let cek = Math.floor((Math.random()*5)+1);
let color_slide = document.querySelectorAll('div#slider_warna span');
let sliders = document.querySelectorAll('input[type = range]');
let life = document.getElementById('life');

let ganti_warna = () => {
	progress.style.backgroundColor = `rgb(${sliders[0].value}, ${sliders[1].value}, ${sliders[2].value})`;
	for(x = 0;x < color_slide.length;x++){
		color_slide[x].innerText = sliders[x].value;
	}
}

for(x of sliders){
	x.addEventListener('input', ganti_warna);
}

let cons = () => {
	let nilai = tebakan.value;
	if(nilai == cek){
		cek = Math.floor((Math.random()* 5))+1;
		if(benar < 5){
			benar++;
			let proses = 'w-'+'['+benar/5*100+'%'+']';
			let regres = 'w-'+'['+(benar-1)/5*100+'%'+']';
			console.log('Benar!');
			progress.classList.add('bg-sky-500');
			progress.classList.add(proses);
			progress.classList.add('h-full');
			progress.classList.remove(regres);
			console.log(cek);
			console.log(nilai);
		}
		if(benar == 5){
			no_level++;
			benar = 0;
			level.innerText = 'Level: ' + no_level;
			progress.classList.remove('w-[100%]');
			progress.classList.remove('bg-sky-500');
			life.classList.remove(`w-[${salah/5*100}%]`);
			life.classList.add('w-[100%]');
			salah = 0;
		}
	}
	else{
		life.classList.remove(`w-[${salah/5*100}%]`);
		salah--;
		console.log('Salah!');
		console.log(cek);
		life.classList.add(`w-[${salah/5*100}%]`);
	}
	if(nilai == ''){
		alert('Mohon isi kotak jawaban');
	}
	return salah;
}
butt.addEventListener("click", cons);

// document.addEventListener('click', function(e){
// 	console.log(e.target);
// });
