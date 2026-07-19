async function kirimAbsensi(barcode, scanner = "Pak Bagus") {

  try {

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        barcode: barcode,
        scanner: scanner
      })
    });

    return await response.json();

  } catch (err) {

    return {
      status: false,
      pesan: err.message
    };

  }

}
