import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './component/App'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <App/>
  </StrictMode>,
)



// function createStore () {
//   /**
//    * store memiliki 4 hal
//    * 1. state
//    * 2. mendapatkan state
//    * 3. men-subscribe peubahan state
//    * 4. memperbarui state
//    */

//   let state;

//   // the stroe
//   return {};
// }