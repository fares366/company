import styles from "./App.module.css";
import Navbar from "./Navbar";
import CompanyForm from "./CompanyForm";
import "./style.css";

export default function App() {
  return (
    <div className={styles.authPage}>
      <div className={styles.bgGlow}></div>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>
          Create your <span className="gold-text">company account</span>
        </h1>
        <CompanyForm />
      </div>
    </div>
  );
}