import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xkggrvbl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset the form
      } else {
        alert("Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred.");
    }
  };

  return (
    <div
      className="bg-rose-600"
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      <div className="w-full p-4">
        <div className="flex justify-center items-center"></div>
        <div>
          <form
            className="text-black"
            id="contact"
            action="https://formspree.io/f/xkggrvbl"
            method="POST"
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
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
                id="message"
                name="message"
                rows={4}
                placeholder="Type your message here..."
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>
            <div className="mb-4">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
