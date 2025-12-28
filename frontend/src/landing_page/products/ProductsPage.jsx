import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

import kiteImg from "../../assets/media/kite.png";
import consoleImg from "../../assets/media/console.png";
import coinImg from "../../assets/media/coin.png";
import kiteConnectImg from "../../assets/media/kiteconnect.png";
import varsityImg from "../../assets/media/varsity.png";

function ProductsPage() {
  return (
    <>
      <Hero />

      <LeftSection
        imageURL={kiteImg}
        productName="Kite"
        productDesription="Our ultra-fast flagship trading platform..."
      />

      <RightSection
        imageURL={consoleImg}
        productName="Console"
        productDesription="The central dashboard for your account..."
      />

      <LeftSection
        imageURL={coinImg}
        productName="Coin"
        productDesription="Buy direct mutual funds online..."
      />

      <RightSection
        imageURL={kiteConnectImg}
        productName="Kite Connect API"
        productDesription="Build powerful trading platforms..."
      />

      <LeftSection
        imageURL={varsityImg}
        productName="Varsity mobile"
        productDesription="Stock market lessons on the go..."
      />

      <p className="text-center mt-5 mb-5">
        Want to know more about our technology stack? Check out the TradeX.tech
        blog.
      </p>

      <Universe />
    </>
  );
}

export default ProductsPage;
