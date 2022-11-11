import NavBar from "./NavBar";

const Layout = (Component) => (text) => {
  return (
    <div className="flex flex-col gap-10 items-center">
      <NavBar />
      <Component {...text} />
    </div>
  );
};

export default Layout;
