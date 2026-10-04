let uploadButton = document.getElementById("upload-button");
let chosenImage = document.getElementById("chosen-image");
let fileName = document.getElementById("file-name");

uploadButton.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = () => {
        chosenImage.setAttribute("src",reader.result);
    }
    fileName.textContent = uploadButton.files[0].name;
}
let p=document.getElementById("chosen-image");
function heart(){
    p.classList.add("x1");
    p.classList.remove("x2");
    p.classList.remove("x3");
    p.classList.remove("x4");
}

function circle(){
    p.classList.remove("x1");
    p.classList.add("x2");
    p.classList.remove("x3");
    p.classList.remove("x4");
}

function square(){
    p.classList.remove("x1");
    p.classList.remove("x2");
    p.classList.add("x3");
    p.classList.remove("x4");
}

function rectangle(){
    p.classList.remove("x1");
    p.classList.remove("x2");
    p.classList.remove("x3");
    p.classList.add("x4");
}

function original(){
    p.classList.remove("x1");
    p.classList.remove("x2");
    p.classList.remove("x3");
    p.classList.remove("x4");

}