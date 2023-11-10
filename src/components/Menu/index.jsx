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
import { actionItemClick, menuItemClick } from "@/slice/menuSlice";

const Menu = () => {
  const { activeMenuItem } = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  const hanldeMenuClick = (itemName) => {
    dispatch(menuItemClick(itemName));
  };

  const handleActionItemClick = (action) => {
    dispatch(actionItemClick(action));
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

        <div
          className={styles.iconWrapper}
          onClick={() => handleActionItemClick(MENU_ITEMS.UNDO)}
        >
          <FontAwesomeIcon icon={faRotateLeft} className={styles.icon} />
        </div>

        <div
          className={styles.iconWrapper}
          onClick={() => handleActionItemClick(MENU_ITEMS.REDO)}
        >
          <FontAwesomeIcon icon={faRotateRight} className={styles.icon} />
        </div>

        <div
          className={styles.iconWrapper}
          onClick={() => handleActionItemClick(MENU_ITEMS.DOWNLOAD)}
        >
          <FontAwesomeIcon icon={faFileArrowDown} className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
