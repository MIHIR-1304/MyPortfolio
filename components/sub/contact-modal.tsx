'use client';

import { useState } from "react";

export const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formsubmit.co/ajax/mihirmahato1304@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Portfolio Message from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-lg bg-[#030014] text-gray-200 rounded-2xl shadow-2xl border border-[#2A0E61] p-8 overflow-hidden transform transition-all">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-gray-400 hover:text-white transition-colors text-2xl"
        >
          &times;
        </button>

        <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center">
          Contact Me
        </h2>

        {status === "success" ? (
          <div className="text-center py-10">
            <h3 className="text-2xl font-semibold text-green-400 mb-2">Message Sent!</h3>
            <p className="text-gray-400 mb-6">
              Thank you for reaching out. I'll get back to you as soon as possible.
            </p>
            <button
              onClick={onClose}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              Close Window
            </button>
            <p className="text-xs text-gray-500 mt-4 border-t border-gray-800 pt-4">
              * Note: If this is your first time using this form, please check your inbox (mihirmahato1304@gmail.com) and click 'Activate' from FormSubmit to receive future messages properly!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                required
                className="w-full bg-[#0a0520] border border-[#2A0E61] rounded-lg px-4 py-3 outline-none focus:border-purple-500 transition-colors"
                placeholder="Mihir Mahato"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
              <input
                type="email"
                id="email"
                required
                className="w-full bg-[#0a0520] border border-[#2A0E61] rounded-lg px-4 py-3 outline-none focus:border-purple-500 transition-colors"
                placeholder="mihir@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-sm font-medium text-gray-300">Your Message</label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full bg-[#0a0520] border border-[#2A0E61] rounded-lg px-4 py-3 outline-none focus:border-purple-500 transition-colors resize-none"
                placeholder="Hi Mihir, I'd like to talk about..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            {status === "error" && (
              <p className="text-red-500 text-sm text-center font-medium">
                Oops! Something went wrong. Please try again or email directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className={`mt-4 w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold py-3 rounded-lg shadow-lg shadow-purple-500/30 transition-all ${
                status === "loading" ? "opacity-70 cursor-not-allowed" : "hover:scale-[1.02]"
              }`}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
