import NewAlbum from "../features/mainPage/NewAlbum";
import Footer from "../features/mainPage/Footer";
import MainTop from "../features/mainPage/MainTop";
import HotSongs from "../features/mainPage/HotSongs";
import DailyRecommend from "../features/mainPage/DailyRecommend";
import Header from "../ui/Header";

function EasyListen() {
  return (
    <>
      <Header />
      <MainTop />
      <DailyRecommend />
      <NewAlbum />
      <HotSongs />
      <Footer />
    </>
  );
}

export default EasyListen;
