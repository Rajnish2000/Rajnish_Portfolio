export const ContactForm = () => {
  return (
    <form className="bg-[#0f111a] border border-gray-700 p-8 rounded-md w-full max-w-3xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-white mb-1">
            Your Name
          </label>
          <input
            type="text"
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
