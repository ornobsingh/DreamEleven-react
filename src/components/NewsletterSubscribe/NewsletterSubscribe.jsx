export default function NewsletterSubscribe() {
  return (
    <>
      <div className="bg-[#0b0d19] pt-20 ">
        {" "}
        {/* <-- Extra bottom space */}
        <div className="max-w-4xl mx-auto -mt-32 bg-gradient-to-r from-blue-100 via-white to-orange-100 rounded-lg shadow-xl p-10 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Subscribe to our Newsletter
          </h2>
          <p className="text-gray-600 mb-6">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="flex items-center justify-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-2/3 px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="bg-gradient-to-r from-pink-300 to-yellow-300 font-medium px-5 py-2 rounded-md shadow-md hover:opacity-90 transition cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
