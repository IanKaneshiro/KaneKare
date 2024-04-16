import styles from "./page.module.css";

type Poop = {
  wet: boolean;
  name: string;
  age: number;
};

const poop: Poop = {
  wet: true,
  name: "Big wet poo",
  age: 12,
};

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to KanKare</h1>
      <p>Name of poo {poop.name}</p>
      <p>Is Wet {poop.wet ? "SUPAH WET" : "Dry as the sahara"}</p>
      <p>How long it been sittin'? {poop.age} years</p>
    </main>
  );
}
