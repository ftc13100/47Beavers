const Header = () => {
  return (
    <header className="bg-blue-500 w-full sticky top-0">
      <div className="mx-[25%] h-12 flex items-center justify-between py-16">
        <a className="my-8" href="/">
          <h1 className="font-bold text-2xl">FTC Team #13100</h1>
          <h1 className="font-bold text-2xl">47 Beavers</h1>
        </a>

        <nav className="flex space-x-8">
          <a href="/" className="hover:text-white hover:underline">Home</a>
          <a href="/about" className="hover:text-white hover:underline">History</a>
          <a href="/members" className="hover:text-white hover:underline">Members</a>
          <div className="group">
            <a href="/camps" className="group-hover:text-white group-hover:underline"> Camps </a>
            <div className="hidden group-hover:flow-root">
              <a href="/camps/2021">2021</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
