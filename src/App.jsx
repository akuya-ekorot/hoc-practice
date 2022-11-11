import Layout from "./Layout";
import Heading from "./Heading";

const HomeLayout = Layout(Heading);

const Home = () => {
  return <HomeLayout text={"Hello World"} />;
};

export default Home;
