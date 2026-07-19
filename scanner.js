const codeReader = new ZXing.BrowserMultiFormatReader();

const video = document.getElementById("reader");
const hasil = document.getElementById("hasil");

async function mulaiScanner() {

    try {

        const devices = await ZXing.BrowserCodeReader.listVideoInputDevices();

        const cameraId = devices[0].deviceId;

        codeReader.decodeFromVideoDevice(
            cameraId,
            "reader",
            async (result, err) => {

                if(result){

                    const barcode = result.getText();

                    hasil.innerHTML = "Mengirim absensi...";

                    const response = await kirimAbsensi(barcode);

                    if(response.status){

                        hasil.innerHTML = `
                        <h2>✅ ABSENSI BERHASIL</h2>

                        <b>${response.nama}</b><br>

                        ${response.kelas}
                        `;

                    }else{

                        hasil.innerHTML =
                        "❌ "+response.pesan;

                    }

                }

            }
        );

    }catch(err){

        hasil.innerHTML = err;

    }

}

mulaiScanner();
