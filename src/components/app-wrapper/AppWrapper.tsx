import { ReactNode } from "react";
import styles from "./AppWrapper.module.css";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

interface IAppWrapperProps {
  children: ReactNode;
}

export const AppWrapper = ({ children }: IAppWrapperProps) => {
  return (
    <OverlayScrollbarsComponent
      defer
      element="div"
      options={{ scrollbars: { autoHide: "scroll" } }}
    >
      <div className={styles.wrapper}>{children}</div>
    </OverlayScrollbarsComponent>
  );
};
