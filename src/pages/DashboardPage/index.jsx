import { Header } from "../../components/Header";
import styles from "./style.module.scss";

export const DashboardPage = () => {
  return (
    <div>
      <Header/>
      <main>
        <section className={styles.userSection}>
          <div className="container">
            <h1 className="title-1">Olá, usuário</h1>
            <p className="headline dark">Modulo do usuário</p>
          </div>
        </section>
        <div className="container">
          <div className={styles.mainContent}>
            <h1 className="title-1">Que pena! Estamos em desenvolvimento :(</h1>
            <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
          </div>
        </div>
      </main>
    </div>
  );
};
