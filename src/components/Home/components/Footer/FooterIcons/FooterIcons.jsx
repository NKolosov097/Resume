import React from "react";
import styles from "../Footer.module.scss";
import { FooterItem } from "./FooterItem";

export const FooterIcons = () => {
  const icons = [
    {
      id: "facebook",
      href: "https://www.facebook.com/profile.php?id=100041627042130",
    },
    {
      id: "twitter",
      href: "https://twitter.com/NKolosov097",
    },
    {
      id: "instagram",
      href: "http://www.instagram.com/NKolosov097",
    },
    {
      id: "telegram",
      href: " https://t.me/NKolosov097",
    },
    {
      id: "github",
      href: "https://github.com/NKolosov097",
    },
  ];

  return (
    <div className={styles.footer__icons}>
      {icons.map((icon) => (
        <FooterItem key={icon.id} icon={icon} />
      ))}
    </div>
  );
};
