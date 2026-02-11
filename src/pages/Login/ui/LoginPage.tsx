import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import * as stylesModule from "./LoginPage.module.scss";
const styles = (stylesModule as any)?.default ?? stylesModule;

const LoginPage = () => {
  const { t } = useTranslation("login");
  return (
    <>
      <h1 className={styles.title}>{t("login")}</h1>
      <Link to={"/"}>Home page</Link>
    </>
  );
};

export default LoginPage;
