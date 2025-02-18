const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <div className="bg-blue-700 text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <p className="mt-4 text-lg">
            We&apos;d love to hear from you! Please find our location below.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Google Map Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white">
            <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
            {/* Responsive Map Container */}
            <div className="relative w-full h-96 overflow-hidden rounded-lg">
              <iframe
                title="Google Map Location"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.7670886756131!2d90.42468747564254!3d23.780580122466443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7914cd6e563%3A0x30348126bb9531ab!2sYummy%20Sweets%20%26%20Bakery!5e0!3m2!1sen!2sbd!4v1739905673179!5m2!1sen!2sbd"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Feel free to reach out to us via any of the following methods:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10l4 4-4 4m4-4h14"
                  />
                </svg>
                <a
                  href="mailto:contact@cosmetics.com"
                  className="text-blue-600 hover:underline"
                >
                  contact@cosmetics.com
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6a9 9 0 0118 0v12a9 9 0 01-18 0V6z"
                  />
                </svg>
                <p className="text-gray-800 dark:text-gray-300">
                  +1 800 123 4567
                </p>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5h12m4 4h-4m0 4h4"
                  />
                </svg>
                <p className="text-gray-800 dark:text-gray-300">
                  123 Beauty St, Melbourne, AU
                </p>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
