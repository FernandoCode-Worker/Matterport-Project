window.addEventListener("DOMContentLoaded", async () => {
    const iframe = document.getElementById("showcase-iframe");
    const key = "tu8x6219kc3pzskkakxnwnqxd"; // Your application key

    try {
        // Safety Check: Verify the SDK library was actually loaded from HTML
        if (!window.MP_SDK) {
            throw new Error("Matterport SDK script missing from index.html! Check the <head> tag.");
        }

        // 1. Connect to the SDK
        // We pass the key explicitly to ensure the handshake works
        const sdk = await window.MP_SDK.connect(iframe, key, '3.2');
        console.log("SDK loaded successfully", sdk);

        // 2. Fetch Model Data
        // 'Cortex' is not a valid SDK object. We use Model.getData() to find semantic info.
        const modelData = await sdk.Model.getData();
        console.log("Model Data:", modelData);

        // 3. Fetch Mattertags (Objects/Points of Interest)
        const mattertags = await sdk.Mattertag.getData();
        console.log("Detected Mattertags:", mattertags);

    } catch (err) {
        console.error("SDK Error:", err);
    }
});

// --- UI Button Functions (Prevents ReferenceErrors) ---

window.AddComplianceCode = function() {
    alert("Add Items clicked!");
}

window.Navigation = function() {
    alert("Navigation clicked!");
}

window.InsertMultimedia = function() {
    alert("Insert Multimedia clicked!");
}
