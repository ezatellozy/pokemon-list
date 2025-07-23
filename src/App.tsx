import { BrowserRouter as Router, Routes, Route } from "react-router";

import NotFound from "./pages/OtherPage/NotFound";

import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Index from "./pages/pokemon";
import PokemonDetails from "./pages/pokemon/details";

import { QueryProvider } from "./utils/query-provider";
import { AuthProvider } from "./context/AuthContext";
import InfiniteScroll from "./pages/pokemon/infinite-scroll";

export default function App() {
  return (
    <QueryProvider>
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route element={<AppLayout />}>
              <Route index path="/" element={<Index />} />
              <Route index path="/:id" element={<PokemonDetails />} />
              <Route
                index
                path="/infinite-scroll"
                element={<InfiniteScroll />}
              />
            </Route>

            {/* Fallback Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </QueryProvider>
  );
}
