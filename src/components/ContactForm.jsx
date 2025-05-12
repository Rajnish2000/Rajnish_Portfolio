import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
// import "dotenv/config";
// template Id : template_7xjt2wt
// public key: 6RPbReOUj4XzOWcK8

export const ContactForm = () => {
  emailjs.init(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);
  const formRef = useRef();
  console.log(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Rajnish Singh",
          from_email: form.email,
          to_email: "rajsinghdj4@gmail.com",
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank You For Your Message! I will reach you as soon as possible."
          );
          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went Wrong.");
        }
      );
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="border border-gray-700 p-8 rounded-md w-full max-w-3xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-white mb-1">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-1">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400"
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-white mb-1">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="How can I help you?"
          className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400"
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-white mb-1">
          Message
        </label>
        <textarea
          rows="4"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your message here..."
          className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400"
        ></textarea>
      </div>
      <div className="mt-6">
        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};
