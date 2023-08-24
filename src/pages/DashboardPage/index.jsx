import { useContext } from "react";
import { Header } from "../../components/Header"
import styles from "./style.module.scss"
import { UserContext } from "../../providers/UserContext";
import { TechList } from "../../components/TechList";

export const DashboardPage = () => {

  const {user} = useContext(UserContext)

  return (
    <div>
      <Header/>
      <main>
        <section className={styles.userSection}>
          <div className="container">
            <h1 className="title-1">Olá, {user?.name}</h1>
            <p className="headline dark">{user?.course_module}</p>
          </div>
        </section>
        <div className="container">
          <div className={styles.mainContent}>
            <TechList/>
          </div>
        </div>
      </main>
    </div>
  );
};
