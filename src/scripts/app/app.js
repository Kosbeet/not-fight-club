import mainPage from "./mainPage/mainPage";
import startPage from "./startPage/startPage";


const app = () => {
  let registry = localStorage.getItem('registry') || null;
  if (registry === 'true') {
    mainPage();
  } else {
    document.body.append(startPage());
  }
}


export default app;