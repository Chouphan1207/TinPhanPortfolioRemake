import styles from "./HomePage.module.scss";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import mainImage from "@/shared/assets/icons/Main.jpg";
import { RadioButton } from "@/shared/ui";

const HomePage = () => {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.content}>
        <div className={styles.leftContent}>
          <div className={styles.intro}>
            <RadioButton/>
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
