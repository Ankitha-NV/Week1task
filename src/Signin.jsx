import { useState } from "react";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-80 text-center">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Sign In</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="mb-3 w-full">
            <label className="block text-gray-600 text-sm mb-1" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-center"
              required
            />
          </div>

          <div className="mb-3 w-full">
            <label className="block text-gray-600 text-sm mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-center"
              required
            />
          </div>

          <div className="flex flex-col items-center mb-3 text-sm w-full">
            <label className="flex items-center text-gray-600">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="mr-1"
              />
              Remember me
            </label>
            <a href="#" className="text-blue-500 hover:underline mt-2">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md transition duration-200"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signin;