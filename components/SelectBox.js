import styles from "../styles/SelectBox.module.css";
import { FaAngleDown, FaAngleUp, FaCircle } from "react-icons/fa";
import { useState } from "react";
export const SelectBox = () => {
  const [click, setClick] = useState(false);
  const [optionValue, setoptionValue] = useState("Option 1");
  const [color, setColor] = useState("#aee28a");
  const handleClick = () => {
    setClick(!click);
  };

  const setOptionValue = (e) => {
    const clickedItemValue = e.target.dataset.value;

    setoptionValue(clickedItemValue);
    setColor(e.target.dataset.color);
    setClick(false);
  };

  return (
    <div className={styles.selectContainer}>
      <p className={styles.selectTitle}>Task status</p>
      <div className={styles.selectedOption} onClick={handleClick} tabIndex="1">
        <p>
          <FaCircle className={styles.circle} style={{ color: `${color}` }} />{" "}
          {optionValue}
        </p>
        {click ? <FaAngleUp /> : <FaAngleDown />}
      </div>
      {click ? (
        <ul className={styles.selectUl}>
          <li
            data-value="Option 1"
            data-color="#aee28a"
            onClick={(e) => setOptionValue(e)}
          >
            <FaCircle className={styles.circle} style={{ color: "#aee28a" }} />{" "}
            Option 1
          </li>
          <li
            data-value="Option 2"
            data-color="#4e92df"
            onClick={(e) => setOptionValue(e)}
          >
            <FaCircle className={styles.circle} style={{ color: "#4e92df" }} />{" "}
            Option 2
          </li>
          <li
            data-value="Option 3"
            data-color="#f3a536"
            onClick={(e) => setOptionValue(e)}
          >
            <FaCircle className={styles.circle} style={{ color: "#f3a536" }} />{" "}
            Option 3
          </li>
          <li
            data-value="Option 4"
            data-color="#fd7173"
            onClick={(e) => setOptionValue(e)}
          >
            <FaCircle className={styles.circle} style={{ color: "#fd7173" }} />{" "}
            Option 4
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};
