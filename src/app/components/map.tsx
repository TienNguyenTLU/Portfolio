export default function MapEmbed() {
  // Thay YOUR_QUERY bằng địa chỉ hoặc toạ độ, ví dụ: "21.028511,105.804817"
  const q = encodeURIComponent("21.0135982,105.8192768");
  return (
    <div style={{ width: "40%", height: 400 }}>
      <iframe
        title="map"
        width="100%"
        height="100%"
        style={{ border: 1, borderRadius: 8 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps?q=${q}&z=15&output=embed`}
      />
    </div>
  );
}