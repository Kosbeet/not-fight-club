import header from "./header/header";
import main from "./main/main";

const mainPage = () => {
  document.body.append(header(), main())
}

export default mainPage;