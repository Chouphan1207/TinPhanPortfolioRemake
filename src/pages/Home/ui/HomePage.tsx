import styles from "./HomePage.module.scss";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
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
              <button className={styles.primaryButton}>View My Work</button>
              <button className={styles.secondaryButton}>Get In Touch</button>
            </div>
          </div>
        </div>
        <div className={styles.rightContent}>
          <img src={mainImage} alt="Main" className={styles.mainImage} />
        </div>
      </main>
      
      {/* Masonry Grid Section */}
      <section className={styles.gridSection}>
        <InfiniteScrollTools />
        <div className={styles.masonryGrid}>
          <div className={`${styles.gridItem} ${styles.gridItemLarge}`} data-size="Large">
            {/* Large Item 1 */}
          </div>
          <div className={`${styles.gridItem} ${styles.gridItemSmall}`} data-size="Small">
            {/* Small Item 2 */}
          </div>
          <div className={`${styles.gridItem} ${styles.gridItemMedium}`} data-size="Medium">
            {/* Medium Item 3 */}
          </div>
          <div className={`${styles.gridItem} ${styles.gridItemSmall}`} data-size="Small">
            {/* Small Item 4 */}
          </div>
          <div className={`${styles.gridItem} ${styles.gridItemLarge}`} data-size="Large">
            {/* Large Item 5 */}
          </div>
          <div className={`${styles.gridItem} ${styles.gridItemSmall}`} data-size="Small">
            {/* Small Item 6 */}
          </div>
          <div className={`${styles.gridItem} ${styles.gridItemMedium}`} data-size="Medium">
            {/* Medium Item 7 */}
          </div>
          <div className={`${styles.gridItem} ${styles.gridItemSmall}`} data-size="Small">
            {/* Small Item 8 */}
          </div>
          <div className={`${styles.gridItem} ${styles.gridItemMedium}`} data-size="Medium">
            {/* Medium Item 9 */}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HomePage;
