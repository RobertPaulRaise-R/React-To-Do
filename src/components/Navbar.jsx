function Navbar() {
  return (
    <nav className="flex justify-between bg-stone-100 p-3">
      <h3 className="text-2xl">ToDo</h3>
      <button className="bg-black px-3 text-lg text-stone-300 shadow-md shadow-black transition-all hover:scale-110">
        Login
      </button>
    </nav>
  );
}

export default Navbar;
