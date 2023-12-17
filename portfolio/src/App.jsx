import { useState } from 'react'
import './index.css'
import Page from './assets/sections/page'
import Footer from './assets/components/footer'

function App() {
  // render state to control, if site should be rendered or not:
  const [render, setRender] = useState(false);

  // [] keeps sure that effect is applied only once
  useEffect(() => {
    setRender(true);
  }, []);

  // if render is true, Component will be rendered
  return render ? (
    <>
      <Page />
      <Footer />
    </>
  ) : null;
}


export default App
