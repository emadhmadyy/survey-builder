import { useState, useEffect } from "react";
import { request } from "../../core/apicall";
import Nav from "../../components/nav";
import "./style.css";

const Surveys = () => {
  console.count("Surveys component rendered");
  const [surveys, setSurveys] = useState();
  const [imageSrc, setImageSrc] = useState("../../../images/anonymous.webp");

  const handleImageClick = () => {
    document.getElementById("imageInput").click();
  };

  const handleImageUpload = (event) => {
    const input = event.target;
    const file = input.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        // Update the state with the uploaded image data
        setImageSrc(e.target.result);
      };

      // Read the file as a data URL
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const fetchSurveys = async () => {
      try {
        const response = await request({
          route: "/survey",
        });
        setSurveys(response.data.surveys);
      } catch (error) {
        console.error("Error fetching surveys:", error.message);
      }
    };

    fetchSurveys();
  }, []); // Run once when the component mounts

  return (
    <div>
      <Nav
        imageSrc={imageSrc}
        onImageClick={handleImageClick}
        onImageUpload={handleImageUpload}
      />
      <ul className="surveybody">
        {surveys &&
          surveys.map((survey) => {
            return (
              <div key={survey._id}>
                <li className="survey">{survey.title}</li>
                <hr />
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default Surveys;
