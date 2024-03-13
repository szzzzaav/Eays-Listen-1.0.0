import { lazy } from "react";

import GlobalStyles from "./styles/GlobalStyles";
import "./styles/ani.css";
import BgLoader from "./ui/BgLoader";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { TransitionProvider } from "./context/TransitionLoaderContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProtectedRoute from "./ui/ProtectedRoute";
import AppLayout from "./ui/AppLayout";
import { Toaster } from "react-hot-toast";
import { AudioContextProvider } from "./context/useAudioPlayer";

const Create = lazy(() => import("./pages/Create"));
const PersonalCenter = lazy(() => import("./pages/PersonalCenter"));
const ViewUser = lazy(() => import("./pages/ViewUser"));
const Music = lazy(() => import("./pages/Music"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const AudioPlayerPage = lazy(() => import("./pages/AudioPlayerPage"));
const EasyListen = lazy(() => import("./pages/EasyListen"));
const Search = lazy(() => import("./pages/Search"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <TransitionProvider>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <BgLoader />
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: { duration: 3000 },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
            },
          }}
        />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route path="create" element={<Create />} />
              <Route path="music/:mid" element={<Music />} />
              <Route path="search" element={<Search />} />
            </Route>
            <Route index element={<Navigate replace to="easyListen" />} />
            <Route path="easyListen" element={<EasyListen />} />
            <Route path="/view/user/:uid" element={<ViewUser />} />
            <Route path="/user/:uid" element={<PersonalCenter />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route
              path="player/:mid"
              element={
                <AudioContextProvider>
                  <AudioPlayerPage />
                </AudioContextProvider>
              }
            />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </TransitionProvider>
  );
}

export default App;
