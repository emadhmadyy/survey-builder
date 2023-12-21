import { useState, useEffect } from "react";
import { request } from "../../core/apicall";
import Nav from "../../components/nav";
import { Link } from "react-router-dom";
import "./style.css";

const Surveys = () => {
  const [surveys, setSurveys] = useState([]);
  const [imageSrc, setImageSrc] = useState("../../../images/anonymous.webp");
  const [username, setUserName] = useState("");

  const handleImageClick = () => {
    document.getElementById("imageInput").click();
  };

  const handleImageUpload = async (event) => {
    const input = event.target;
    const file = input.files[0];

    if (file) {
      try {
        const formData = new FormData();
        formData.append("profilePicture", file);

        const response = await request({
          method: "POST",
          route: "/image/upload",
          body: formData,
          isImage: true,
        });
        const image_url = response.data.path;

        setImageSrc(image_url);
      } catch (error) {
        console.error("Error uploading image:", error.message);
      }
    }
  };

  useEffect(() => {
    const fetchSurveys = async () => {
      try {
        const response = await request({
          route: "/survey",
        });
        const first_name = response.data.user.first_name;
        const last_name = response.data.user.last_name;
        setUserName(
          first_name.charAt(0).toUpperCase() +
            first_name.slice(1) +
            " " +
            last_name.charAt(0).toUpperCase() +
            last_name.slice(1)
        );
        setSurveys(response.data.surveys);
        response.data.user.profile_url
          ? setImageSrc(response.data.user.profile_url)
          : "../../../images/anonymous.webp";
      } catch (error) {
        console.error("Error fetching surveys:", error.message);
      }
    };

    fetchSurveys();
  }, []);
  return (
    <div>
      <Nav
        username={username}
        imageSrc={imageSrc}
        onImageClick={handleImageClick}
        onImageUpload={handleImageUpload}
      />
      <ul className="surveybody">
        {surveys &&
          surveys.map((survey) => {
            return (
              <div key={survey._id}>
                <li className="survey">
                  {" "}
                  <Link
                    to={`/surveys/${survey._id}`}
                    style={{ textDecoration: "none", color: "darkblue" }}
                  >
                    {survey.title}
                  </Link>{" "}
                </li>
                <hr />
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default Surveys;
