import styles from "./Technology.module.css";

interface ITechnologyProps {
  icon: React.ReactNode;
  description: string;
}

export const Technology = ({ icon, description }: ITechnologyProps) => {
  return (
    <div className={styles.technology} title={description}>
      {icon}
    </div>
  );
};
