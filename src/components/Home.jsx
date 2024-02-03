import NavBar from "../components/NavBar";
import Hero from "../components/Hero";

import "../styles/Hero.css";
import "../styles/NavBar.css";
import "../styles/CustomForm.css";

const Home = () => {
  return (
    <>
      <NavBar />
      <div>
        <div>
          <div>
            <Hero />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
