"use client";

import { timePunch } from "@/actions";
import { useRef } from "react";
import styles from "./page.module.css";

export default function Home() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function toggleDialog() {
    if (!dialogRef.current) return;
    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  }

  return (
    <main>
      <div style={{ backgroundColor: "pink" }}>Navbar</div>
      <div>
        <h2>**Live clock**</h2>
        <div>
          <button onClick={toggleDialog}>Record Punch</button>
        </div>
        <dialog
          ref={dialogRef}
          className={styles.container}
          onClick={(e) => {
            if (e.currentTarget === e.target) {
              toggleDialog();
            }
          }}
        >
          <div>
            <h2>YOU LIKE CLOCK IN FOR WORK OR MAYBE CLOCK OUT???</h2>
            <div className={styles.buttons}>
              <button
                className={styles.button}
                onClick={async () => {
                  await timePunch();
                  toggleDialog();
                }}
              >
                Yes
              </button>
              <button className={styles.button} onClick={toggleDialog}>
                Close
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </main>
  );
}
