import {BrowserRouter as Router,Route,Routes,Navigate} from "react-router-dom";
import Layout from "./layouts/Layout";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import { useAppContext } from "./contexts/AppContext.jsx";
import AddHotel from "./pages/AddHotel.jsx";
import MyHotels from "./pages/MyHotels.jsx";
import EditHotel from "./pages/EditHotel.jsx";
import Search from "./pages/Search.jsx"

const App = () => {
  const {isLoggedIn} = useAppContext();
  console.log(isLoggedIn)
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Layout><p>Home Page</p></Layout>} />
        <Route path="/search" element={<Layout><Search /></Layout>} />
        <Route path ="/register" element={<Layout><Register /></Layout>} />
        <Route path ="/sign-in" element={<Layout><SignIn /></Layout>} />
        {isLoggedIn && (<>
        <Route path="/add-hotel" element={<Layout><AddHotel /></Layout>} />
        <Route path="/edit-hotel/:hotelId" element={<Layout><EditHotel /></Layout>} />
        <Route path="/my-hotels" element={<Layout><MyHotels /></Layout>} />
        
        </>)}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App