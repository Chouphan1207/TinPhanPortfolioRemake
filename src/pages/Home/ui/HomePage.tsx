import styles from "./HomePage.module.scss";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import mainImage from "@/shared/assets/icons/Main.jpg";

const HomePage = () => {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.content}>
        <div className={styles.leftContent}>
          <div className={styles.intro}>
            <h1 className={styles.introTitle}>TEST</h1>
            <p className={styles.introSubtitle}>
              TEST
            </p>
            <div className={styles.introButtons}>
              <button className={styles.primaryButton}>View My Work</button>
              <button className={styles.secondaryButton}>Get In Touch</button>
            </div>
          </div>
        </div>
        <div className={styles.rightContent}>
          <img src={mainImage} alt="Main" className={styles.mainImage} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
