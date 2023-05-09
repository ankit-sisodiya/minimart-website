import Slider from "@app/home/slider";
import styles from "./page.module.css";
import Banner from "@app/home/banner";


export default function Home() {
  return (
    <main className={styles.main}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Slider />
          </div>
          <div className="col-md-6">
            <Banner />
          </div>
        </div>
      </div>
    </main>
  );
}
