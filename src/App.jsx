import { useCallback, useState } from "react";
import Gallery from "./components/Gallery";
import Swiper from "./components/Swiper";

const data = [
  {
    id: 0,
    url: "https://i.pinimg.com/564x/89/bc/8b/89bc8b7aac0c75c7af574faf9e6358bf.jpg",
  },
  {
    id: 1,
    url: "https://i.pinimg.com/564x/b9/4f/e7/b94fe7f9d124c45fe4177b684bc3c379.jpg",
  },
  {
    id: 2,
    url: "https://i.pinimg.com/564x/f3/6e/94/f36e94adcea7d73f60e712c498725132.jpg",
  },
  {
    id: 3,
    url: "https://i.pinimg.com/564x/79/f4/20/79f420b4e00abb6cb7a885ce54cdde18.jpg",
  },
  {
    id: 4,
    url: "https://i.pinimg.com/564x/68/83/32/68833224b065e0feca3ddfdc10423594.jpg",
  },
  {
    id: 5,
    url: "https://i.pinimg.com/564x/6e/4f/b1/6e4fb1e270d71d487f95ca377f9af543.jpg",
  },
  {
    id: 6,
    url: "https://i.pinimg.com/564x/18/9f/16/189f1601f04aba7bc57b5ba472e93c29.jpg",
  },
];

function App() {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <>
      <main>
        <Swiper
          images={data}
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
        />
        <Gallery
          images={data}
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
        />
      </main>
    </>
  );
}

export default App;
