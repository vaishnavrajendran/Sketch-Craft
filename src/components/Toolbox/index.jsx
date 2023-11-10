import React from "react";
import { useSelector } from "react-redux";

import styles from "./index.module.css";
import { COLORS, MENU_ITEMS } from "@/constants";

const Toolbox = () => {
  const updateBrushSize = () => {};
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  return (
    <div className={styles.toolboxContainer}>
      {activeMenuItem === MENU_ITEMS.PENCIL && (
        <div className={styles.toolItem}>
          <h4 className={styles.toolText}>Stroke Color</h4>
          <div className={styles.itemContainer}>
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.BLACK }}
            />
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.BLUE }}
            />
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.GREEN }}
            />
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.ORANGE }}
            />
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.RED }}
            />
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.YELLOW }}
            />
          </div>
        </div>
      )}

      {(activeMenuItem === MENU_ITEMS.PENCIL ||
        activeMenuItem === MENU_ITEMS.ERASER) && (
        <div className={styles.toolItem}>
          <h4 className={styles.toolText}>Brush Size</h4>
          <div className={styles.itemContainerclassName}>
            <input
              type="range"
              min={1}
              max={10}
              step={1}
              onChange={updateBrushSize}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Toolbox;
