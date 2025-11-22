const iframe = document.getElementById("showcase-iframe");

async function init() {
  try {
    const sdk = await window.MP_SDK.connect(iframe);
    console.log("SDK loaded", sdk);

    const semantic = await sdk.Cortex.getSemanticData();
    console.log("Semantic data:", semantic);

    const dims = await sdk.Cortex.getModelDimensions();
    console.log("Dimensions:", dims);

    const objects = await sdk.Cortex.detectedObjects.getData();
    console.log("Detected objects:", objects);

  } catch (err) {
    console.error("SDK connection or data error:", err);
  }
}

window.addEventListener("DOMContentLoaded", init);

