import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AlbumDetails } from './components/AlbumDetails';
import { LayoutArtista } from "./pages/LayoutArtista";
import { HomeGustavo } from './pages/HomeGustavo';
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Biografia } from "./components/Biografia";
import { Albums } from "./components/Albums";
import { HomeSoda } from "./pages/HomeSoda";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BioGustavo } from "./components/BioGustavo";
import { BioSoda } from "./components/BioSoda";

const queryClient = new QueryClient();

export default function App() {
  const rutasGustavo = { bio: "/cerati/bio-cerati", discos: "/cerati/discos-cerati" };
  const rutasSoda = { bio: "/soda/historia-soda", discos: "/soda/discos-soda" };
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cerati" element={<LayoutArtista artista={"Gustavo Cerati"} rutaArtista={rutasGustavo} texto={"Biografía"} />}>
              <Route index element={<HomeGustavo />} />
              <Route path=":id/album" element={<AlbumDetails artista={"cerati"} />} />
              <Route path="bio-cerati" element={<Biografia textoBio={<BioGustavo />} />} />
              <Route path="discos-cerati" element={<Albums artista={"cerati"} />} />
            </Route>
            <Route path="soda" element={<LayoutArtista artista={"Soda Stereo"} rutaArtista={rutasSoda} texto={"Historia"} />}>
              <Route index element={<HomeSoda />} />
              <Route path=":id/album" element={<AlbumDetails artista={"soda"} />} />
              <Route path="historia-soda" element={<Biografia textoBio={<BioSoda />} />} />
              <Route path="discos-soda" element={<Albums artista={"soda"} />} />

            </Route>
          </Route>
        </Routes>
      </>
    </Router>
    </QueryClientProvider>
  )
};
