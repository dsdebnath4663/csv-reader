import React from 'react';

function JSONViewerMap({ jsonData }) {
  // Limit the number of items to display

  return (
    <div>
      <h1>JSON Data</h1>
      <pre>{JSON.stringify(jsonData, null, 2)}</pre>
    </div>
  );
}

export default JSONViewerMap;
