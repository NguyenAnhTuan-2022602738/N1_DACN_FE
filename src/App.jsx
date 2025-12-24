import React from "react";
import Routes from "./Routes";
import AuthProvider from "./contexts/AuthContext";
import { ToastProvider } from "./components/ui/ToastProvider";
import { WishlistProvider } from "./contexts/WishlistContext";
import ChatWidget from "./components/ChatWidget";

function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <WishlistProvider>
          <Routes />
          <ChatWidget />
        </WishlistProvider>
      </AuthProvider>
    </ToastProvider>
  );
}

export default App;
