import BackgroundImage from './components/backgroundImage';
import Header from './components/header';
import Template from './components/template';
import styles from './styles/styles.module.scss';

function App() {

  return (
    <BackgroundImage>
      <div className={styles.container}>
        <Template>
          <div className={styles.main}>
            <div className={styles.infoMobile}>
              <h1>O café que fará seu código decolar para
                o próximo nível.
              </h1>
              <button>PEGAR MEU CAFÉ</button>
            </div>
            <div className={styles.title}>
              <h1>Great Coffee</h1>
              <h1>Great Code</h1>
            </div>
            <img src="assets/rocket-coffee.png" alt="" />
          </div>
        </Template>
      </div>
    </BackgroundImage>
  )
}

export default App
