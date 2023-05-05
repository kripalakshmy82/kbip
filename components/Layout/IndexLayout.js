import Footer from "./Footer";
import Header from "./Header";

const IndexLayout = ({ children }) => {
    return (
      <div>
        <Header/>
        {children}
        <Footer/>
      </div>
    );
  };
  export default IndexLayout;