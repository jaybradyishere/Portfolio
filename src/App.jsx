import { lazy, Suspense, useState } from "react";

const Spinner = lazy(() => import("./components/Spinner"));
const Navbar = lazy(() => import("./components/Navbar"));
const Banner = lazy(() => import("./components/Banner"));
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <Suspense fallback={<Spinner />}>
        {!loading && (
          <>
            <Navbar />
            <Banner />
            <About />
            <Projects />
            <Footer />
          </>
        )}
      </Suspense>
    </div>
  );
}

export default App;
