// 1. Survival rate for different Pclass categories:
//   Solution: Group passengers by Pclass and calculate survival rates.
//1 = First class 2 = Second class 3 = Third class

//survivalByClass part  : https://chatgpt.com/c/66ec6684-72ec-8001-86c6-6b712033ac07

// table part            :https://chatgpt.com/c/66ec6d7b-aa08-8001-ac7b-72f2418fc710
// survivalService.js
const survivalByClass = (data) => {
  const classes = {};
  data.forEach((passenger) => {
    const pclass = passenger.Pclass;

    if (pclass === undefined || pclass === null) {
      return;
    }

    if (!classes[pclass]) {
      classes[pclass] = { survived: 0, total: 0 };
    }
    classes[pclass].total += 1;
    if (passenger.Survived === 1) classes[pclass].survived += 1;
  });

  return Object.keys(classes).map(pclass => ({
    Pclass: pclass,
    SurvivalRate: (classes[pclass].survived / classes[pclass].total * 100).toFixed(2) + '%'
  }));
};


const survivalBySexx = (data) => {
  const classes = {};
  data.forEach((passenger) => {
    const pclass = passenger.Pclass;

    if (pclass === undefined || pclass === null) {
      return;
    }

    if (!classes[pclass]) {
      classes[pclass] = { survived: 0, total: 0 };
    }
    classes[pclass].total += 1;
    if (passenger.Survived === 1) classes[pclass].survived += 1;
  });

  return Object.keys(classes).map(pclass => ({
    Pclass: pclass,
    SurvivalRate: (classes[pclass].survived / classes[pclass].total * 100).toFixed(2) + '%'
  }));
};

const survivalByAgeGroupp = (data) => {
  const ageGroups = {
    "0-18": { survived: 0, total: 0 },
    "18-40": { survived: 0, total: 0 },
    "40+": { survived: 0, total: 0 }
  };
  console.log("Initial age groups:", ageGroups);

  data.forEach((passenger) => {
    const age = passenger.Age;
    let group;

    if (age < 18) {
      group = "0-18";
    } else if (age < 40) {
      group = "18-40";
    } else {
      group = "40+";
    }

    console.log(`Passenger (Age: ${age}) classified as ${group}`);
    ageGroups[group].total += 1;

    if (passenger.Survived === 1) {
      ageGroups[group].survived += 1;
      console.log(`Passenger (Age: ${age}) survived, updating ${group} survival count`);
    }
  });

  console.log("Age groups after survival count update:", ageGroups);

  const result = Object.keys(ageGroups).map(group => {
    const { survived, total } = ageGroups[group];
    const survivalRate = (survived / total * 100).toFixed(2) + '%';
    console.log(`Survival rate for ${group}: ${survivalRate}`);

    return {
      AgeGroup: group,
      SurvivalRate: survivalRate
    };
  });

  console.log("Final survival rates by age group:", result);
  return result;
};

const survivalBySibSp = (data) => {
  const sibSpData = {};
  console.log("Initial sibSpData:", sibSpData);

  data.forEach((passenger) => {
    const sibsp = passenger.SibSp;


    if (sibsp === undefined || sibsp === null) {
      return;
    }
    // Initialize the sibSpData entry if it doesn't exist
    if (!sibSpData[sibsp]) {
      sibSpData[sibsp] = { survived: 0, total: 0 };
      console.log(`Initializing data for SibSp ${sibsp}`);
    }

    // Increment the total count for this SibSp
    sibSpData[sibsp].total += 1;
    console.log(`Incremented total for SibSp ${sibsp}:`, sibSpData[sibsp]);

    if (passenger.Survived === 1) {
      sibSpData[sibsp].survived += 1;
      console.log(`Passenger with SibSp ${sibsp} survived, updating survived count`);
    }
  });

  // Log the state after survival counts are updated
  console.log("sibSpData after survival count update:", sibSpData);

  const result = Object.keys(sibSpData).map(sibsp => {
    const { survived, total } = sibSpData[sibsp];
    const survivalRate = (survived / total * 100).toFixed(2) + '%';
    console.log(`Survival rate for SibSp ${sibsp}: ${survivalRate}`);

    return {
      SibSp: sibsp,
      SurvivalRate: survivalRate
    };
  });

  // Log the final result
  console.log("Final survival rates by SibSp:", result);

  return result;
};

const renderTable = (data, title) => {
  console.log("Rendering table with title: ");
  console.log("Data received:", data);

  return (
    <div>


      <h2>{title}</h2>
      {/* The table structure will go here */}
      <table>
        <thead>
          <tr>
            {/* Check if data exists and has elements */}
            {data && data.length > 0 ? (
              Object.keys(data[0]).map(key => {
                console.log("Rendering header:", key);
                return <th key={key}>{key}</th>;
              })
            ) : (
              <th>No Data Available</th>
            )}
          </tr>
        </thead>
        <tbody>
          {/* Display a message if data is empty */}
          {data && data.length > 0 ? (
            data.map((row, index) => {
              console.log(`Rendering row ${index + 1}:`, row);
              return (
                <tr key={index}>
                  {Object.values(row).map((val, i) => {
                    console.log(`Rendering cell: ${val}`);
                    return <td key={i}>{val}</td>;
                  })}
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="100%">No Data Available</td>
            </tr>
          )}
        </tbody>

      </table>

    </div>
  );

};

const survivalByFareRange = (data) => {
  const fareGroups = { "Low": { survived: 0, total: 0 }, "Medium": { survived: 0, total: 0 }, "High": { survived: 0, total: 0 } };
  data.forEach((passenger) => {
    const fare = passenger.Fare;
    let group = fare < 20 ? "Low" : fare < 50 ? "Medium" : "High";
    fareGroups[group].total += 1;
    if (passenger.Survived === 1) fareGroups[group].survived += 1;
  });
  return Object.keys(fareGroups).map(group => ({
    FareRange: group,
    SurvivalRate: (fareGroups[group].survived / fareGroups[group].total * 100).toFixed(2) + '%'
  }));
};


// Export the functions to be used in other components
export { survivalByClass, survivalBySexx, survivalByAgeGroupp, survivalBySibSp, renderTable, survivalByFareRange };
