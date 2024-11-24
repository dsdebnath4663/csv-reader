import React from 'react';

function JSONViewer({ jsonData, limit }) {
  // Limit the number of items to display
  const limitedData = jsonData.slice(0, limit);

  return (
    <div>
      <h1>JSON Data</h1>
      <pre>{JSON.stringify(limitedData, null, 2)}</pre>
    </div>
  );
}

export default JSONViewer;
