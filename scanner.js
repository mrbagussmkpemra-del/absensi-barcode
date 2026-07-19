function onScanSuccess(decodedText, decodedResult) {

    document.getElementById("hasil").innerHTML =
    "Mengirim data...";

    html5QrcodeScanner.clear();

    kirimAbsensi(decodedText)
    .then(function(res){

        if(res.status){

            document.getElementById("hasil").innerHTML=
            `
            <h2>✅ ABSENSI BERHASIL</h2>

            <h3>${res.nama}</h3>

            <h3>${res.kelas}</h3>
            `;

        }else{

            document.getElementById("hasil").innerHTML=
            `
            <h2>❌ ${res.pesan}</h2>
            `;

            setTimeout(function(){

                mulaiScanner();

            },2000);

        }

    });

}

function mulaiScanner(){

    html5QrcodeScanner =
    new Html5QrcodeScanner(
        "reader",
        {
            fps:10,
            qrbox:250
        },
        false
    );

    html5QrcodeScanner.render(
        onScanSuccess
    );

}

mulaiScanner();
