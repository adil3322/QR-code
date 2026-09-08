// Your Contact Information
const contactData = `BEGIN:VCARD
VERSION:3.0
FN:Adil Alam
N:Alam;Adil;;;
TEL:960821167
EMAIL:alamadil2234@gmail.com
ORG:Arya College of Engineering
TITLE:BTech Computer Science and Engineering
NOTE:Roll No: 23eaccs011
URL:https://www.linkedin.com/in/adil-alam-a05339288
END:VCARD`;

// Generate QR Code
const qrCode = new QRCode(document.getElementById("qrcode"), {
    text: contactData,
    width: 230,
    height: 230,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});


// Download QR Code
document.getElementById("downloadBtn").addEventListener("click", function () {

    const qrImage = document.querySelector("#qrcode img");

    if (!qrImage) {
        alert("QR Code is not ready!");
        return;
    }

    const downloadLink = document.createElement("a");

    downloadLink.href = qrImage.src;
    downloadLink.download = "Adil_Alam_Contact_QR.png";

    document.body.appendChild(downloadLink);

    downloadLink.click();

    document.body.removeChild(downloadLink);

});
