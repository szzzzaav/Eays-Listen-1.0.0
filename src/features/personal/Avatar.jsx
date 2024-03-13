import { useEffect } from "react";
import styles from "./Avatar.module.css";

function Avatar({ register, image, setImage }) {
  useEffect(
    function () {
      const fileUpload = document.querySelector(`.${styles.upload}`);
      fileUpload.addEventListener("dragover", function () {
        this.classList.add(`${styles.drag}`);
        this.classList.remove(`${styles.drag}`, `${styles.done}`);
      });
      fileUpload.addEventListener("dragleave", function () {
        this.classList.remove(`${styles.drag}`);
      });
      fileUpload.addEventListener("drop", start, false);
      fileUpload.addEventListener("change", start, false);
      function start(e) {
        this.classList.remove(`${styles.drag}`);
        this.classList.add(`${styles.drop}`);
        const fr = new FileReader();
        fr.readAsDataURL(e.target.files[0]);
        fr.onload = () => {
          setTimeout(() => {
            this.classList.add(`${styles.done}`);
            setImage(fr.result);
          }, 3000);
        };
      }
    },
    [setImage]
  );
  return (
    <>
      <div className={styles.upload}>
        {image && <img src={image} alt="" className={styles.image} />}
        <input
          type="file"
          title=""
          className={styles["drop-here"]}
          accept=".png"
          {...register("Avatar", {
            required: false,
          })}
        />
        <div className={`${styles["text"]} ${styles["text-drop"]}`}>
          drop here
        </div>
        <div className={`${styles["text"]} ${styles["text-upload"]}`}>
          uploading
        </div>
        <svg className={styles["progress-wrapper"]} width="300" height="300">
          <circle
            className={styles["progress"]}
            r="115"
            cx="150"
            cy="150"
          ></circle>
        </svg>
        <svg className={styles["check-wrapper"]} width="130" height="130">
          <polyline
            className={styles["check"]}
            points="100.2,40.2 51.5,88.8 29.8,67.5 "
          />
        </svg>
        <div className={styles["shadow"]}></div>
      </div>
    </>
  );
}

export default Avatar;
