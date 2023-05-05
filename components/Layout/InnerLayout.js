import Header from "./Header";

const InnerLayout = ({ children }) => {
    return (
      <div>
        <Header/>
        {children}
        <Footer/>
      </div>
    );
  };
  export default InnerLayout;