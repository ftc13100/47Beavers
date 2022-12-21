const Header = () => {
  return (
    <header className="bg-blue-800 w-full sticky top-0 justify-between">
      <div className="mx-24 h-12 flex items-center justify-between py-16">
        <a className="my-8 text-white" href="/">
          <h1 className="font-bold text-2xl">FTC Team #13100</h1>
          <h1 className="font-bold text-2xl">47 Beavers</h1>
        </a>
        <nav className="text-white text-xl flex flex-wrap items-start py-4 space-x-8">
          <a href="/about" className="hover:text-white hover:underline">
            History
          </a>
          <a href="/members" className="hover:text-white hover:underline">
            Members
          </a>
          <div className="group flex flex-none flex-col items-center flex-wrap">
            <a href="/camps" className="hover:text-white hover:underline">
              {" "}
              Camps{" "}
            </a>
            <div className="flex">
              <div className="hidden group-hover:flex absolute right-8 flex-col space-y-2 items-center first:pt-4 last:pb-2 px-4 bg-blue-800">
                <a href="/camps/robotics" className="hover:underline">
                  Robotics Design Camps
                </a>
                <a href="/camps/mathematics" className="hover:underline">
                  Mathematics Camps
                </a>
                <a href="/camps/physics" className="hover:underline">
                  Programming Camps
                </a>
                <a href="/camps/programming" className="hover:underline">
                  Physics Camps
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
