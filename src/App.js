import classes from "./App.module.less";
import BonusPage from "./components/bonusPage/bonusPage";

function App() {
  return (
    <div className={classes.app}>
      <BonusPage />
    </div>
  );
}

export default App;
