import React from "react";
// import "./../css/PreSchool.css";

function JumbotronCustom({ firstText = "", secondText = "" }) {
  // Log the input text lengths
  console.log("Length of firstText:", firstText.length);
  console.log("Length of secondText:", secondText?.length || 0);

  let split1 = "";
  let split2 = "";

  if (firstText.includes("School")) {
    // Split the text dynamically
    split1 = firstText.split("School")[0].trim();
    split2 = `School${firstText.split("School")[1]}`;
  } else if (firstText.includes("For")) {
    split1 = firstText.split("For")[0].trim();
    split2 = `For${firstText.split("For")[1]}`;
  } else {
    console.warn(
      "'School' not found in firstText. Displaying full text as split1."
    );
    split1 = firstText;
    split2 = ""; // No second part if "School" is not found
  }

  // Log the split results
  console.log("Split1:", split1);
  console.log("Split2:", split2);

  return (
    <div className="Jumbotron text-white">

      <div
        class="row justify-content-start g-2 mx-3"
      >
        <div class="col-md-10">

          <div className="jumbotron ">
            <h1 className="display-4 animated-heading">{split1} </h1>
            <h1 className="display-4 animated-heading">{split2}</h1>
            <p className="lead">{secondText}</p>

            <p className="lead">
              <a className="btn text-white btn-lg me-2 btn-primary-custom-two  rounded-pill py-3 move-left" href="#" role="button">
                Learn more
              </a>
              <a className="btn btn-dark btn-lg btn-primary-custom-three rounded-pill py-3  move-right" href="#" role="button">
                Our Classes
              </a>
            </p>
          </div>
        </div>

      </div>


    </div>
  );
}
export default JumbotronCustom;