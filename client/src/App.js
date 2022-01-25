import React, { useState } from 'react';
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home';
import Store from './pages/Store';
import Dashboard from './pages/Dashboard'


function App() {
  const [currentPage, handlePageChange] = useState('Home');

  const renderPage = () => {
    <Navigation></Navigation>
    switch (currentPage) {
      case 'Homepage':
        return <Home />;
      case 'Store':
        return <Store />;
      case 'My Dashboard':
        return <Dashboard />;
      default:
        return <Home />;
    }
    <Footer></Footer>
  };
  
  return (
    <div>
        <nav>
            {/* Pass the state value and the setter as props to navTabs */}
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            {/* Call the renderPage function passing in the currentPage */}
        </nav>
        <div>{renderPage(currentPage)}</div>
    </div>
  );
}

export default App;
