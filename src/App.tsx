
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import Transaction from "./components/Pages/TransactionPage";
import Wallet from "./components/Pages/WalletPage";
import Portfolio from "./components/Pages/PortfolioPage";
import ProfilePage from "./components/Pages/ProfilePage";
import Header from "./components/Header";
import LoginPage from "./components/Pages/LoginPage";
import HelpPage from "./components/Pages/HelpPage";


function App() {
        return (
            <div className="app-container" id="app-container">
                <BrowserRouter>
                    <Header></Header>
                    <Routes>
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/transactions" element={<Transaction />} />
                        <Route path="/wallet" element={<Wallet />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/help" element={<HelpPage />} />
                    </Routes>
                </BrowserRouter>
            </div>
        );
}

export default App;