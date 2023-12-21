import "./style.css";
// eslint-disable-next-line react/prop-types
const Nav = ({ imageSrc, onImageClick, onImageUpload }) => {
  return (
    <div className="flex container">
      <img
        src="../../../images/images.png"
        className="img"
        alt="survey builder logo"
      />
      <div className="flex info">
        <h1>Emad Hmady</h1>
        <div id="imageContainer" onClick={onImageClick}>
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            onChange={onImageUpload}
            style={{ display: "none" }}
          />
          <img id="uploadedImage" src={imageSrc} alt="Uploaded Image" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
