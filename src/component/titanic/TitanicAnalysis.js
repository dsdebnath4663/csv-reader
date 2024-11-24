import React from 'react';

import {
  survivalByClass, survivalBySexx, survivalByAgeGroupp, survivalBySibSp, renderTable, survivalByFareRange
} from '../../service/titanicService';
import JSONViewer from '../JSONViewer';
import JSONViewerMap from '../JSONViewerMap';

const TitanicAnalysis = ({ data }) => {


  const survivalClassDataVar = survivalByClass(data);
  const survivalBySexVar = survivalBySexx(data);
  const survivalByAgeGroupVar = survivalByAgeGroupp(data);
  const survivalBysibSpVar = survivalBySibSp(data);
  const renderTable = renderTable(data);
  const survivalByFareRange = survivalByFareRange(data);
  // Utility function to render a table
  return (
    <div>
      {/* <JSONViewer jsonData={data} limit={10} /> */}
      {/* <JSONViewerMap jsonData={survivalClassData} /> */}
      {renderTable(survivalBysibSpVar, 'Survival Rate by Class')}

    </div>
  );
}


export default TitanicAnalysis;
