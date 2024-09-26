import AuthProvider from "./context/AuthProvider";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
      {/*//* Routenstruktur in die Router-Datei verschoben*/}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter> */}
    </div>
    
  );
}

export default App;