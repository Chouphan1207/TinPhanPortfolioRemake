import styles from "./HomePage.module.scss";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import { Button, Image, Typography } from "@/shared/ui";
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
          {/* <div className={styles.leftContentPattern} /> */}
          <div className={styles.intro}>
            <Typography as="h1" preset="heading-display" className={styles.introTitle}>
              Welcome to My Portfolio
            </Typography>
            <Typography as="p" preset="body-large" className={styles.introSubtitle}>
              Creating innovative digital experiences with modern web technologies
            </Typography>
            <div className={styles.introButtons}>
              <Button theme="btnHover" size="md">View My Work</Button>
              <Button theme="btnHover" size="md">Get In Touch</Button>
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
