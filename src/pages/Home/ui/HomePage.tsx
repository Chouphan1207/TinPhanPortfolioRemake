import styles from "./HomePage.module.scss";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import { Button, Image } from "@/shared/ui";
import { BentoGrid } from "@/shared/ui/Grid";
import { bentoGridData } from "@/entities/portfolio";
import mainImage from "@/shared/assets/icons/Main.jpg";
import InfiniteScrollTools from "@/shared/ui/InfiniteScrolling/InfiniteScrolling";

const HomePage = () => {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.content}>
        <div className={styles.leftContent}>
          <div className={styles.intro}>
            <h1 className={styles.introTitle}>Welcome to My Portfolio</h1>
            <p className={styles.introSubtitle}>
              Creating innovative digital experiences with modern web technologies
            </p>
            <div className={styles.introButtons}>
              <Button theme="primary" size="md">View My Work</Button>
              <Button theme="outline" size="md">Get In Touch</Button>
            </div>
          </div>
        </div>
        <div className={styles.rightContent}>
          <Image src={mainImage} alt="Main" />
        </div>
      </main>
      
      {/* Bento Grid Section */}
      <InfiniteScrollTools />
      <BentoGrid items={bentoGridData} />
      
      <Footer />
    </div>
  );
};

export default HomePage;
