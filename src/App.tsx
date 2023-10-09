import Awards from "./сomponents/Awards/Awards";
import Bingo from "./сomponents/Bingo/Bingo";
import ClubsSupport from "./сomponents/ClubsSupport/ClubsSupport";
import CompendiumPrice from "./сomponents/CompendiumPrice/CompendiumPrice";
import FantasyLeague from "./сomponents/FantasyLeague/FantasyLeague";
import Footer from "./сomponents/Footer/Footer";
import Header from "./сomponents/Header/Header";
import MainText from "./сomponents/MainText/MainText";
import Oracul from "./сomponents/Oracul/Oracul";
import PriceEnd from "./сomponents/PriceEnd/PriceEnd";
import ProfileShow from "./сomponents/ProfileShow/ProfileShow";
import Quest from "./сomponents/Quest/Quest";
import TalentsSupport from "./сomponents/TalentsSupport/TalentsSupport";

function App() {
  return (
    <div className="App">
      <Header />
      <MainText />
      <ProfileShow />
      <CompendiumPrice />
      <Quest />
      <FantasyLeague />
      <Bingo />
      <Oracul />
      <Awards />
      <ClubsSupport />
      <TalentsSupport />
      <PriceEnd />
      <Footer />
    </div>
  );
}

export default App;
