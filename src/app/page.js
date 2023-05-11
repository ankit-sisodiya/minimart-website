import Slider from "@app/home/Slider";
import styles from "./page.module.css"
import Banner from "@app/home/banner";
import DoubleSlider from "@app/home/doubleSlider";
// import Banner2 from "@app/home/banner2";
// import Banner3 from "@app/home/banner3";
// import Banner4 from "@app/home/banner4";
// import Testimonial from "@app/home/testimonial";

export default function Home() {
  return (
    <main className={styles.main}>
            <Banner />
      <div className="container">
           <Slider/>
           <DoubleSlider/>
           {/* <Banner2/> */}
           {/* <Banner3/> */}
           {/* <Testimonial/> */}
           {/* <Banner4/> */}
      </div>
    </main>
  );
}
