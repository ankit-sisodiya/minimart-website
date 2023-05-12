import Slider from "@app/home/Slider";
import styles from "./page.module.css"
import Banner from "@app/home/banner";
import RecentlyViews from "@app/home/recentlyViews";
import ShopByBrand from "@app/home/shopByBrand";
// import DoubleSlider from "@app/home/doubleSlider";
// import Banner2 from "@app/home/banner2";
// import SpecialProducts from "@app/home/specialProducts";
// import Banner3 from "@app/home/banner3";
// import Testimonial from "@app/home/testimonial";

export default function Home() {
  return (
    <main className={styles.main}>
             <Banner />
      <div className="container">
            <div className="mb-5">
                <Slider/>
            </div>
           <div className="mb-5">
            {/* <DoubleSlider/> */}
           </div>
           <div className="mb-5">
               {/* <Banner2/> */}
           </div>
           <div className="mb-5">
               {/* <SpecialProducts/> */}
           </div>
           <div className="mb-5">
              <RecentlyViews/>
           </div>
           <div className="mb-5">
               {/* <Banner3/> */}
           </div>
           <div className="mb-5">
               <ShopByBrand/>
           </div>
           <div className="mb-5">
              {/* <Testimonial/> */}
           </div>
      </div>
    </main>
  );
}
