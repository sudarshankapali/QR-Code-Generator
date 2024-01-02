const qrCode = document.querySelector("#qr-image");

function generateQRImage(){
    clearQR();
    const url = document.querySelector("#userURL").value;
    generateQrCode(url);

}
const generateQrCode = (url) => {
    const qr = new QRCode(document.getElementById("qr-image"), {
    text: url,
    width: 300,
    height: 300,
    });

}
const clearQR = () => {
    qrCode.innerHTML = "";
};
