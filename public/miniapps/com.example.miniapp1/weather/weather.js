// Gửi message từ WebView → Flutter
document.getElementById("send-to-flutter").addEventListener("click", () => {
  const message = {
    type: "weatherInfo",
    payload: {
      temperature: "30°C",
      condition: "Sunny",
    }
  };

  // Gửi đến Flutter qua postMessage
  window.flutter_inappwebview?.callHandler?.("fromWebToFlutter", message);
});

// Nhận message từ Flutter → WebView
function receiveFromFlutter(message) {
    const logDiv = document.getElementById("flutter-message");
    if (logDiv) {
        logDiv.innerText += `\n📩 Flutter: ${message}`;
    } else {
        logDiv.innerText += `\nChưa nhận được tin nhắn`;
    }
}
