import styles from "./style";
import { Navbar , Hero , Stats , Business , Billing , CardDeal , Testmonials , Clients , CTA , Footer } from "./Components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>

    <div className={`${styles.flexStart} bg-primary`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>

    <div className={`${styles.flexStart} bg-primary ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats/>
        <Business/>
        <Billing/>
        <CardDeal/>
        <Testmonials/>
        <Clients/>
        <CTA/>
        <Footer/>
      </div>
    </div>
  </div>
);

export default App;
