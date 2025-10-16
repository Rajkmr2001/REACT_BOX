import styles from "./Button.module.css";

function Button() {
  const ButtonBox = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    ".",
    "=",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {ButtonBox.map((btns) => (
        <button className={styles.button} type="button" key={btns}>
          {btns}
        </button>
      ))}
    </div>
  );
}
export default Button;
