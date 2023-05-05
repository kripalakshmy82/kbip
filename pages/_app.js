import '../styles/bootstrap.min.css'

import IndexLayout from '../components/Layout/IndexLayout';
import InnerLayout from '../components/Layout/InnerLayout';



function MyApp({ Component, pageProps }) {
  const getLayout = (Component) => {
    if (Component.isInner) {
      return <InnerLayout>{Component}</InnerLayout>;
    }

    return <IndexLayout>{Component}</IndexLayout>;
  };

  return getLayout(<Component {...pageProps} />);
}

export default MyApp
