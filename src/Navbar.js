const Navbar = () => {
  return (
    <nav className="navbar p-20 flex items-center max-w-600  border border-b border-[#f2f2f2]">
      <h1 className="text-[#f1356d]">Dojo Blog</h1>
      <div className="links ml-auto">
        <a className="ml-16 p-6 " href="/">HOme</a>
        <a href="/create">New Blog</a>
      </div>
    </nav>
  );
};

export default Navbar;
