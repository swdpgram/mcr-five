import './App.css'
import { Routes, Route } from "react-router-dom"
import { Home } from './Home'
import { RecipeDetail } from './RecipeDetail';
import { RecipeSingle } from './RecipeSingle';


if (import.meta.env.DEV) {
  window.onerror = (event, source, lineno, colno, err) => {
    const ErrorOverlay = customElements.get('vite-error-overlay');
    if (!ErrorOverlay) {
      return;
    }
    const overlay = new ErrorOverlay(err);
    document.body.appendChild(overlay);
  };
}

function App() {
  

  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/recipe/:id" element={<RecipeDetail />} /> 
     </Routes>
    </>
  )
}

export default App
