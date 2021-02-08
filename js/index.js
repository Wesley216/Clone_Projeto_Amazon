/*CAROuSEL AUTOMATICO USANDO UMA DIV COM ID*/
let img = document.getElementById('img');

let image = ['supernatural.jpg', 'hustlers.jpg', 'promo.jpg', 'great.jpg', 'boys.jpg', 'people.jpg'];

let i = 0;

function auto(){
	
	if(i < image.length){

		i = i + 1;
	
	}else{

		i = 1;
	}

	img.innerHTML = "<img src= img/slide/" + image[i-1] + ">";
	
}
	setInterval(auto, 6500)
