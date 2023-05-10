import Slider from "@app/home/Slider";
import styles from "./page.module.css"
import Banner from "@app/home/banner";
import DoubleSlider from "@app/home/doubleSlider";

export default function Home() {
  return (
    <main className={styles.main}>
            <Banner />
      <div className="container">
           <Slider/>
           <DoubleSlider/>
      </div>
    </main>
  );
}
