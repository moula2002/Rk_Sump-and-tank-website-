import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // ✅ prevent multiple clicks
  const [showSuccess, setShowSuccess] = useState(false); // ✅ success popup state


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ basic validation
    if (!formData.name || !formData.phone || !formData.address) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);

    const templateParams = {
      from_name: "RK SUMP & TANK",
      name: formData.name,
      phone: formData.phone,
      address: formData.address,
      message: formData.message || "Cleaning service booking",
      time: new Date().toLocaleString(),
    };

    try {
      const res = await emailjs.send(
        "service_c2qb6mu",
        "template_31q21zf",
        templateParams,
        "D1704NRLxdpvAnG1-"
      );

      console.log("SUCCESS:", res);

      setShowSuccess(true);


      // ✅ reset form
      setFormData({
        name: "",
        phone: "",
        address: "",
        message: "",
      });
    } catch (error) {
      console.error("ERROR:", error);
      alert("Failed to send ❌ Please try again");
    } finally {
      setLoading(false); // ✅ re-enable button
    }
  };

  return (
    <div className="glass-card p-8 w-full max-w-md">
      <h3 className="text-2xl font-bold mb-6 text-slate-900">
        Book Your Cleaning
      </h3>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="w-full border rounded-xl px-4 py-3"
        />

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          className="w-full border rounded-xl px-4 py-3"
        />

        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          required
          className="w-full border rounded-xl px-4 py-3"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message (optional)"
          className="w-full border rounded-xl px-4 py-3"
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white py-3 rounded-xl ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600"
          }`}
        >
          {loading ? "Sending..." : "Book Service Now"}
        </button>
      </form>

      {/* ✅ Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl animate-scale-in">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg 
                className="w-10 h-10 text-green-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="3" 
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Booking Confirmed!
            </h3>
            <p className="text-slate-600 mb-8">
              Thank you for choosing RK SUMP & TANK. We have received your request and will contact you shortly.
            </p>
            
            <button
              onClick={() => setShowSuccess(false)}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 rounded-2xl transition-all duration-200 active:scale-95 shadow-lg"
            >
              Great, thanks!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingForm;