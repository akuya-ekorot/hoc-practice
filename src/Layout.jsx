import NavBar from "./NavBar";

const Layout = (Component) => () => {
  return (
    <div className="flex flex-col gap-10 items-center">
      <NavBar />
      <Component />
    </div>
  );
};

export default Layout;
