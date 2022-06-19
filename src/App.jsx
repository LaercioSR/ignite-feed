import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Laercio Rios"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis officia sint quae autem, dolore commodi, id atque nam at quasi recusandae quod illo sed fugit, excepturi laborum. Nobis, voluptas quia."
          />
          <Post author="Diego Fernandes" content="Teste..." />
        </main>
      </div>
    </div>
  );
}
