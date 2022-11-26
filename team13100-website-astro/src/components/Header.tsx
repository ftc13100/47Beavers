const Header = () => {
  return (
    <header className="bg-blue-500 w-full sticky top-0">
      <div className="mx-[25%] h-12 flex items-center justify-between py-16">
        <a className="my-8" href="/">
          <h1 className="font-bold text-2xl">FTC Team #13100</h1>
          <h1 className="font-bold text-2xl">47 Beavers</h1>
        </a>

        <nav className="flex space-x-8">
          <a href="/"> Home </a>
          <a href="/about"> History </a>
          <a href="/members"> Members </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
