import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faEraser,
  faRotateLeft,
  faRotateRight,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import cx from "classnames";

import styles from "./index.module.css";
import { MENU_ITEMS } from "@/constants";
import { menuItemClick } from "@/slice/menuSlice";

const Menu = () => {
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  const dispatch = useDispatch();
  const hanldeMenuClick = (itemName) => {
    dispatch(menuItemClick(itemName));
  };

  return (
    <div>
      <div className={styles.menuContainer}>
        <div
          className={cx(styles.iconWrapper, {
            [styles.active]: activeMenuItem === MENU_ITEMS.PENCIL,
          })}
          onClick={() => hanldeMenuClick(MENU_ITEMS.PENCIL)}
        >
          <FontAwesomeIcon icon={faPencil} className={styles.icon} />
        </div>

        <div
          className={cx(styles.iconWrapper, {
            [styles.active]: activeMenuItem === MENU_ITEMS.ERASER,
          })}
          onClick={() => hanldeMenuClick(MENU_ITEMS.ERASER)}
        >
          <FontAwesomeIcon icon={faEraser} className={styles.icon} />
        </div>

        <div className={styles.iconWrapper}>
          <FontAwesomeIcon icon={faRotateLeft} className={styles.icon} />
        </div>

        <div className={styles.iconWrapper}>
          <FontAwesomeIcon icon={faRotateRight} className={styles.icon} />
        </div>

        <div className={styles.iconWrapper}>
          <FontAwesomeIcon icon={faFileArrowDown} className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
