import Layout from "./Layout";
import Heading from "./Heading";

const HomeLayout = Layout(Heading);

const Home = () => {
  return <HomeLayout />;
};

export default Home;
