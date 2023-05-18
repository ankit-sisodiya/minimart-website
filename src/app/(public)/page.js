"Use Client";
import Sliders from "@app/home/slider.jsx";
import styles from "../page.module.css";
import Banner from "@app/home/banner";
import RecentlyViews from "@app/home/recentlyViews";
import ShopByBrand from "@app/home/shopByBrand";
import DoubleSlider from "@app/home/doubleSlider";
import Banner2 from "@app/home/banner2";
import SpecialProducts from "@app/home/specialProducts";
import Banner3 from "@app/home/banner3";
import Testimonial from "@app/home/testimonial";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <div className="container">
        <div className="my-4">
          <Sliders />
        </div>
      </div>
      <div className="container">
        <div className="my-4">
          <DoubleSlider />
        </div>
      </div>
      <div className="container">
        <div className="my-4">
          <Banner2 />
        </div>
      </div>
      <div className="container">
        <div className="my-4">
          <SpecialProducts />
        </div>
      </div>
      <div className="container">
        <div className="my-4">
          <RecentlyViews />
        </div>
      </div>
      <div className="my-4">
        <Banner3 />
      </div>
      <div className="container">
        <div className="my-4">
          <ShopByBrand />
        </div>
      </div>
      <div className="container">
        <div className="my-4">
          <Testimonial />
        </div>
      </div>
    </main>
  );
}
