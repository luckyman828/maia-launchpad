import '../styles/globals.css'
import ReactDOM from 'react-dom';
import Header from './components/header'
import Footer from './components/footer'

function MyApp({ Component, pageProps }) {
  
  return (
    <div >
      <Header/>
      <div className="main">
        <div className="container mx-auto px-4 ">
          <Component {...pageProps} />
        </div>
        
      </div>
      <Footer/>
    </div>
  )
}

export default MyApp
