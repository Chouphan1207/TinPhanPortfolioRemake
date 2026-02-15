import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const LogoIcon = () => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="48" stroke="#222" strokeWidth="4" fill="#fff" />
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      dy=".3em"
      fontSize="32"
      fill="#222"
    >
      Logo
    </text>
  </svg>
);
import { routePaths } from "@/shared/config";

import styles from "./Footer.module.scss";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span className={styles.logo}>
          <LogoIcon />
        </span>

        <div className={styles.links}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{t("footer.about")}</h3>
            <ul className={styles.linkList}>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("footer.aboutUs")}
                </Link>
              </li>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("footer.ourBranches")}
                </Link>
              </li>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("footer.changeLog")}
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{t("footer.quickLinks")}</h3>
            <ul className={styles.linkList}>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("footer.faqs")}
                </Link>
              </li>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("footer.recipes")}
                </Link>
              </li>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("footer.contactUs")}
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{t("footer.helpSupport")}</h3>
            <ul className={styles.linkList}>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("footer.termsOfService")}
                </Link>
              </li>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("footer.privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("footer.security")}
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{t("footer.company")}</h3>
            <ul className={styles.linkList}>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("footer.blog")}
                </Link>
              </li>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("footer.contact")}
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{t("footer.social")}</h3>
            <ul className={styles.linkList}>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("footer.facebook")}
                </Link>
              </li>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("footer.instagram")}
                </Link>
              </li>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("footer.twitter")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        {t("footer.copyright", { year: "2025", company: "TinPhan" })}
      </div>
    </footer>
  );
};
