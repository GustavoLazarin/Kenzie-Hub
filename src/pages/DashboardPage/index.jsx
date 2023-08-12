import { Header } from "../../components/Header";
import styles from "./style.module.scss";

export const DashboardPage = ({setUser, user}) => {
  return (
    <div>
      <Header setUser={setUser}/>
      <main>
        <section className={styles.userSection}>
          <div className="container">
            <h1 className="title-1">Olá, {user.name}</h1>
            <p className="headline dark">{user.course_module}</p>
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
