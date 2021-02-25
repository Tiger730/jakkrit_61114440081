import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Sidebar from './components/Sidebar.js';

import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail.js';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Header />
        <Sidebar />

        <main className="main">
          <div className="content">
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/product/:id" component={ProductDetail} />
          </Switch>
          </div>
        </main>

        <Footer />
      </div> 
    </BrowserRouter>
  );
}

export default App;
