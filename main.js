let images =  document.querySelector('.img__wrapper');

function download(input){
    let file =input.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader);

    reader.onload = function(){
        let img  = document.createElement('img');
        images.appendChild(img);
        img.src = reader.result
    }

}
