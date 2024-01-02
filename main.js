const qrCode = document.querySelector("#qr-image");

function generateQRImage(){
    clearQR();
    const url = document.querySelector("#userURL").value;
    const size = document.querySelector("#wid").value;
    if(url === "") alert("Input field is empty");
    else generateQrCode(url,size);

}
const generateQrCode = (url,size) => {
    const qr = new QRCode(document.getElementById("qr-image"), {
    text: url,
    width: size,
    height: size,
    });

}
const clearQR = () => {
    qrCode.innerHTML = "";
};
