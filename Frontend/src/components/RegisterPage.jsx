
const RegisterPage = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registrierung durchführen...");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Sign up</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Benutzername"
          className="w-full border border-gray-300 rounded px-2 py-1 mb-2"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded px-2 py-1 mb-2"
        />
        <input
          type="password"
          placeholder="Passwort"
          className="w-full border border-gray-300 rounded px-2 py-1 mb-2"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold rounded px-4 py-2 hover:bg-blue-600"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
