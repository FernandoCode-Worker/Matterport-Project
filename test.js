import MP_SDK from "MP_SDK";

const iframe = document.getElementById("showcase-iframe");

(async () => {
  try {
    // Replace the key below with your actual application key if needed.
    const APPLICATION_KEY = "tu8x6219kc3pzskkakxnwnqxd";

    // Connect to the Matterport SDK. Passing the application key explicitly
    // ensures it will work even if the import map URL doesn't include it.
    const sdk = await MP_SDK.connect(iframe, APPLICATION_KEY);
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
})();
