// Gửi tin nhắn đến Native App
function sendToHostApp() {
    MiniAppBridge.postMessage("Hello from MiniApp!HHEHEHEH");
}

// Gửi yêu cầu xin quyền camera
function requestCameraPermission() {
  if (window.MiniAppBridge && typeof MiniAppBridge.requestDevicePermissionFromJs === 'function') {
    MiniAppBridge.requestDevicePermissionFromJs("CAMERA");
  } else {
    alert("MiniAppBridge not ready");
  }
}

// Callback được gọi từ phía Native để phản hồi kết quả xin quyền
function onCameraPermissionResult(granted) {
  console.log("Camera permission result:", granted);
  if (granted === true || granted === "true") {
    alert("✅ Đã được cấp quyền camera!");
  } else {
    alert("❌ Bị từ chối quyền camera.");
  }
}
