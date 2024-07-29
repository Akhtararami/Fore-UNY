import React from "react";
import picMatkul from "../../assets/icon/myCourse/mtk.png";
import profilpic from "../../assets/icon/navbar/hitam.jpg";

const Course = () => {
  const text =
    "Some quick example text to build on the card title and make up the bulk of the card's content.";

  const truncateText = (text, maxWords) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  };
  return (
    <div className="container mt-4">
      <h1>My Course</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <div className="col">
          <div className="card h-100">
            <img
              src={picMatkul}
              className="card-img-top"
              style={{ height: "200px", objectFit: "cover" }}
              alt="Course Image"
            />
            <div className="card-body">
              <h5 className="card-title">Matematika</h5>
              <p className="card-text">{truncateText(text, 7)}</p>
              <div
                className="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress-bar" style={{ width: "75%" }}></div>
              </div>
            </div>
          </div>
        </div>
        {}
      </div>
    </div>
  );
};

export default Course;
