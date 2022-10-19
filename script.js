const wrapper = document.querySelector('.wrapper');
const qrInput  = wrapper.querySelector('.form input');
const generateBtn = wrapper.querySelector('.form button');
const qrImg = wrapper.querySelector('.qr-code img');

generateBtn.addEventListener('click', () => {
    let qrvalue = qrInput.value;
    if(!qrvalue) return; // If the input is empoty the n return from here.
    if(qrvalue === ' ') return;
    generateBtn.innerHTML = "Generating QR Code...";

    // getting a qr code of user enteredt value using the qrserver
    // api and passing the api returned img src to qrimg.


    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrvalue}`;
    qrImg.addEventListener('load', function() {
        wrapper.classList.add('active');
        generateBtn.innerHTML = "Generate QR Code";
    });


    wrapper.classList.add("active");
    // wrapper.classList.toggle('active');
});


qrInput.addEventListener("keyup", () => {
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
});