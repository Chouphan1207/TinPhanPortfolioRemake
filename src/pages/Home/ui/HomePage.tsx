import { useTranslation } from "react-i18next";
import styles from "./HomePage.module.scss";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import { Button, Typography } from "@/shared/ui";
import { BentoGrid } from "@/shared/ui/Grid";
import { bentoGridData } from "@/entities/portfolio";
import mainImage from "@/shared/assets/icons/Main.jpg";
import { InfiniteScrollTools } from "@/shared/ui";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.content}>
        <div className={styles.leftContent}>
          {/* <div className={styles.leftContentPattern} /> */}
          <div className={styles.intro}>
            <Typography as="h1" preset="heading-1" className={styles.introTitle}>
              {t("homePage.welcomeTitle")}
            </Typography>
            <Typography as="p" preset="body-large" className={styles.introSubtitle}>
              {t("homePage.welcomeSubtitle")}
            </Typography>
            <div className={styles.introButtons}>
              <Button theme="btnHover" size="md">{t("homePage.viewWork")}</Button>
              <Button theme="btnHover" size="md">{t("homePage.getInTouch")}</Button>
            </div>
          </div>
        </div>
        <div className={styles.rightContent}>
          <img src={mainImage} alt="Main" className={styles.mainImage} />
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
