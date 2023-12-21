import "./style.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { request } from "../../core/apicall";
const Survey = () => {
  const { id } = useParams();
  const [survey, setSurvey] = useState(null);

  useEffect(() => {
    const fetchSurvey = async () => {
      try {
        const response = await request({
          route: `survey/${id}`,
        });
        setSurvey(response.data.survey);
        console.log(JSON.stringify(response.data.survey));
      } catch (error) {
        console.error("Error fetching surveys:", error.message);
      }
    };
    fetchSurvey();
  }, []);
  if (survey === null) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{survey.title}</h1>
      <ul>
        {survey.questions.map((question) => {
          return question.question_type === "open ended" ? (
            <div key={question._id}>
              <li>{question.question_text}</li>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
          ) : (
            <div>
              <li key={question._id}>{question.question_type}</li>
              <form>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  checked="true"
                />
                <label htmlFor="vehicle1"> I have a bike</label>
                <br />
                <input
                  type="checkbox"
                  id="vehicle2"
                  name="vehicle2"
                  value="Car"
                />
                <label htmlFor="vehicle2"> I have a car</label>
                <br />
                <input
                  type="checkbox"
                  id="vehicle3"
                  name="vehicle3"
                  value="Boat"
                />
                <label htmlFor="vehicle3"> I have a boat</label>
              </form>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default Survey;
