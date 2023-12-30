import Layout from './components/Layout/Layout';
import {Route, Routes} from 'react-router-dom';
import Home from './containers/Home/Home';
import Categories from './containers/Categories/Categories';

function App() {
  
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/categories" element={<Categories/>}/>
          <Route path="*" element={<h2>Page not found</h2>}/>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
