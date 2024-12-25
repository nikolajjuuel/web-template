const ContactForm = () => {
  return (
    <div
      className="bg-rose-600"
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      <div className="w-full p-4">
        <div className="flex justify-center items-center"></div>
        <div>
          <form
            id="contact"
            // action={action}
            style={
              {
                // background: "rgb(255 249 148 / 62%)",
              }
            }
          >
            {/* <!-- Name Field --> */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-m font-bold text-gray-700"
              >
                Name
              </label>
              <input
                required
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            {/* <!-- Email Field --> */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-bold text-gray-700"
              >
                Email Address
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            {/* <!-- Message Field --> */}
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-bold text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Type your message here..."
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
