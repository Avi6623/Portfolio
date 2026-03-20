import { lazy, Suspense, useEffect } from "react";
import "./App.css";

const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider, useLoading } from "./context/LoadingProvider";
import { setProgress } from "./components/Loading";

const AppContent = () => {
  const { setLoading } = useLoading();

  useEffect(() => {
    let progress = setProgress((value) => setLoading(value));
    // Simulate quick loading and completion since 3D assets are removed
    setTimeout(() => {
      progress.loaded();
    }, 500);
      
    return () => progress.clear();
  }, [setLoading]);

  return (
    <Suspense>
      <MainContainer>
        {/* 3D Character Model removed for performance & uniqueness */}
      </MainContainer>
    </Suspense>
  );
};

const App = () => {
  return (
    <LoadingProvider>
      <AppContent />
    </LoadingProvider>
  );
};

export default App;
