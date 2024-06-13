document.addEventListener('DOMContentLoaded', function(){

document.getElementById("image-input").addEventListener('change', function(){
   const imageContainer = document.getElementById("img-container");
   const uploadedImage = document.getElementById("uploadimg");
   const file = this.files[0];

   if(file){
    const reader = new FileReader();


    reader.onload = function(e){
        uploadedImage.src = e.target.result;
        imageContainer.style.display = 'block';
    };

    reader.readAsDataURL(file);
   }{
    imageContainer.style.display = 'none';
   }
});
// _________________________FOR rotating the image________________
document.getElementById("rotate-range").addEventListener('input', function(){
    const uploadImage = document.getElementById("uploadimg");
    const rotateValue = this.value;
    uploadImage.style.transform = `rotate(${rotateValue}deg)`;  
});

// _________________For zoom the Image__________________
document.getElementById("zoom-range").addEventListener('input', function(){
    const scale = this.value;
    const uploadImage = document.getElementById("uploadimg");
    uploadImage.style.transform = `scale(${scale})`;
});

});

document.getElementById("instagram").addEventListener('click',function(){
    resizeing(630, 500);
});

document.getElementById("facebook").addEventListener('click', ()=>{
    resizeing(300, 530);
});

document.getElementById("twitter").addEventListener('click', ()=>{
    resizeing(500, 550);
});

document.getElementById("website").addEventListener('click', ()=>{
    resizeing(600, 300);
});


function resizeing(width, height){
    const uploadImage = document.getElementById("uploadimg");

    uploadImage.style.width = width +'px';
    uploadImage.style.height = height + 'px';
}

