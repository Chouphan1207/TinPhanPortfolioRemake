import { useTranslation } from "react-i18next";
import styles from "./PageLoader.module.scss";
import { Spinner } from "@/shared/ui";

export const PageLoader = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <Spinner />
      <h3 className={styles.title}>{t("pageLoader.loading")}</h3>
    </div>
  );
};
