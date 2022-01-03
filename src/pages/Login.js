export default function Login() {
  return (
    <section className=" max-w-sm md:mx-auto my-14 mx-4 bg-white shadow-md rounded-lg p-10">
      <div className="mb-6 border-b pb-4 text-left">
        <h1 className="text-4xl text-gray-700 font-bold mb-2">Login</h1>
        <p className="text-gray-500">Login untuk menyimpan hasil desain.</p>
      </div>
      <form>
        <div>
          <div className="mb-4">
            <label for="username">Username</label>
            <div>
              <input
                type="text"
                name="username"
                className="border w-full rounded mt-2 px-4 py-2 text-base focus:ring-2 focus:ring-blue-500 transition-all"
                id="username"
                autoFocus
              />
            </div>
          </div>
          <div>
            <label for="password">Password</label>
            <div>
              <input
                type="password"
                name="password"
                className="border w-full rounded mt-2 px-4 py-2 text-base focus:ring-2 focus:ring-blue-500 transition-all"
                id="password"
              />
            </div>
          </div>
          <div>
            <div>
              <button
                type="submit"
                name="submit"
                className="border w-full mt-8 rounded-lg bg-blue-600 text-white font-semibold px-4 py-3 text-base focus:ring-2 focus:ring-blue-500 hover:bg-blue-800 transition-all"
                id="password"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
