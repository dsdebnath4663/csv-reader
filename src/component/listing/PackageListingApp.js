import React from 'react';
// import Navigation from './Navigation';
// import PackageAlert from './PackageAlert';
import 'bootstrap/dist/css/bootstrap.min.css';
import PackageAccordion from './PackageAccordion';
import Navigation from './Navigation';

function PackageListingApp({ packages }) {
  return (
    <div>
      <Navigation />
      {/* <PackageAlert message="Welcome to the Package Management Dashboard!" variant="info" />  */}
      <div className="container mt-5">
        <PackageAccordion packages={packages} />
      </div>
    </div>
  );
}

export default PackageListingApp;
