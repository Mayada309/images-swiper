const Gallery = ({ images, currentImage, setCurrentImage }) => {
  return (
    <div className="gallery">
      {images.map((image) => {
        return (
          <button
            className="gallery-btn btn"
            key={image.id}
            onClick={() => setCurrentImage(image.id)}
          >
            <img
              src={image.url}
              alt=""
              className={
                image.id === currentImage ? "gallery-current" : "gallery-img"
              }
            />
          </button>
        );
      })}
    </div>
  );
};

export default Gallery;
