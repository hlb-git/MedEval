import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import Body from "../components/body/body";

function Home() {
  return (
      <div style={{ background: "#F4F5F9"}}>
        <Header />
        <Hero />
        <Body />
      </div>
  );
}

export default Home;
