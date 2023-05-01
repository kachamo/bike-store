// App.jsx
import './App.css';
import { useState } from 'react';
import HomeScreen from './components/screens/HomeScreen';
import SecondPage from './components/screens/SecondPage';
import ThirdPage from './components/screens/ThirdPage';
import ForthPage from './components/screens/ForthPage';
import Button from './components/Button';

function App() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const pages = [<HomeScreen />, <SecondPage />, <ThirdPage />, <ForthPage />];

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const maxScroll = documentHeight - windowHeight;
    const pageIndex = Math.min(Math.floor((scrollPosition / maxScroll) * pages.length), pages.length - 1);
    setCurrentPageIndex(pageIndex);
  };

  const handleNext = () => {
    setCurrentPageIndex((currentPageIndex + 1) % pages.length);
  };
  const handlePrev = () => {
    if (currentPageIndex < 1){
      setCurrentPageIndex(currentPageIndex);
    }else{
      setCurrentPageIndex((currentPageIndex - 1) % pages.length);
    }
  };

  return (
    <>
      {pages[currentPageIndex]}
      <div className="button-container">
        <Button onClick={handlePrev} text="<" />
        <Button onClick={handleNext} text=">" />
      </div>
    </>
  );
}

export default App;
