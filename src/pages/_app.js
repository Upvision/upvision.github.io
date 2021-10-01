import "../css/global.css";
import App from 'next/app';
import 'typeface-rubik';

export default App({ component, pageProps }) {
  setTimeout(function() {
    let loader = document.getElementById("___loader")
    loader.style.opacity = "0"
    loader.style.visibility = "hidden"
  }, 1000)
  return <Component {...pageProps} />
}