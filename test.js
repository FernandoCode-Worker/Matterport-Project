window.addEventListener("DOMContentLoaded", async () => {
  const iframe = document.getElementById("showcase-iframe");
  const key = "tu8x6219kc3pzskkakxnwnqxd";

  try {
    // Check if SDK script loaded
    if (!window.MP_SDK) {
        throw new Error("Matterport SDK script not loaded in index.html");
    }

    // FIXED: Connect to SDK with explicit key and version
    const sdk = await window.MP_SDK.connect(iframe, key, '3.2');
    console.log("SDK loaded", sdk);

    // FIXED: 'sdk.Cortex' does not exist in the standard Client SDK.
    // Instead, we fetch the Model Data which contains semantic info (if available)
    const modelData = await sdk.Model.getData();
    console.log("Model Data (Semantic):", modelData);

    // Dimensions are typically found in the model data (e.g., bounding box)
    // or derived from detecting floors/rooms.
    console.log("Model SID:", modelData.sid);

    // 'detectedObjects' is not a standard SDK property.
    // You can retrieve Mattertags (user-added objects) or Labels.
    // Deep-learning object detection (Cortex) results are usually baked into the
    // Model Data JSON or require a specific server-side API call.
    try {
        const mattertags = await sdk.Mattertag.getData();
        console.log("Detected Mattertags:", mattertags);
    } catch (e) {
        console.warn("Could not retrieve Mattertags", e);
    }

  } catch (err) {
    console.error("SDK connection or data error:", err);
  }
});

// FIXED: Defined missing UI functions to prevent errors
window.AddComplianceCode = function() {
    console.log("AddComplianceCode clicked");
}

window.Navigation = function() {
    console.log("Navigation clicked");
}

window.InsertMultimedia = function() {
    console.log("InsertMultimedia clicked");
}
