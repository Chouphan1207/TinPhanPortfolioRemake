import { Suspense } from "react";
import { AppRouter } from "./providers/routers/ui/AppRouter";

function App() {
  return (
    <Suspense fallback={<></>}>
      <AppRouter />
    </Suspense>
  );
}

export default App;
