import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { LoginForm } from "@/features/login/ui/LoginForm/LoginForm";
import styles from "./LoginPage.module.scss";

const LoginPage = () => {
  const { t } = useTranslation("login");

  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <p className={styles.badge}>{t("eyebrow")}</p>
        <h1 className={styles.title}>{t("title")}</h1>
        <p className={styles.subtitle}>{t("subtitle")}</p>
        <Link to="/" className={styles.backLink}>
          {t("backToHome")}
        </Link>
      </div>

      <div className={styles.formWrapper}>
        <h2 className={styles.formTitle}>{t("login")}</h2>
        <p className={styles.formDescription}>{t("formDescription")}</p>
        <LoginForm />
      </div>
    </section>
  );
};

export default LoginPage;
