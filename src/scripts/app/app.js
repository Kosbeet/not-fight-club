import startPage from "./start-page/startPage";


const app = () => {
  let registry = localStorage.getItem('registry') || null;
  if (registry === 'true') {
    
  } else {
    document.body.append(startPage())
  }
  
}


export default app;