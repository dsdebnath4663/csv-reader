import { useState } from 'react';

import salaries from './resource/salaries.csv'; // Import CSV path
import olympics_dataset from './resource/olympics_dataset.csv'; // Import CSV path
import titanic_dataset from './resource/titanic_dataset.csv'; // Import CSV path


import JobAnalyzer from './component/JobAnalyzer';
import CSVReader from './component/CSVReader';
import JSONViewer from './component/JSONViewer';
import MedalTrendChart from './component/olympics/MedalTrendChart';
import TopCountriesChart from './component/olympics/TopCountriesChart';
import SummerWinterComparison from './component/olympics/SummerWinterComparison';
import TopSportsByCountry from './component/olympics/TopSportsByCountry';
import TitanicAnalysis from './component/titanic/TitanicAnalysis';
import JsonManipulation from './component/basic/JsonManipulation';
import AlertComponent from './component/user-dashboard/AlertComponent';
import { bookingDatas, usersData } from './resource/data';
import { initialUsers } from './resource/data';
import { products } from './resource/data';
import { users } from './resource/data';
import { schoolData, packages, bookingData, } from './resource/data';


import UserCard from './component/user-dashboard/UserCard';
import { Col, Container, Row } from 'react-bootstrap';
import UserForm from './component/user-management/UserForm';
import UserList from './component/user-management/UserList';
import Product from './component/product-catalog/Product';
import ProductList from './component/product-catalog/ProductList';
import UserApp from './component/user-management-v2/UserApp';
import SchoolManagementApp from './component/school-management/SchoolManagementApp';
import PackageListingApp from "./component/listing/PackageListingApp"
import Navigation from './component/listing/Navigation';
import BookingAccordion from './component/listing/BookingAccordion';
import BookingInquiries from './component/listing/BookingInquiries';
import BookingStatus from './component/listing/BookingStatus';
import BookingModifications from './component/listing/BookingModifications';
import CustomerInfoCard from './component/listing/CustomerInfoCard';
import BookingStatusAlert from './component/listing/BookingStatusAlert';
import CssTutorials from './component/css/CssTutorials';
import BootstrapLayoutFirstDesign from './bootstrap-design/BootstrapLayoutFirstDesign';
import BootstrapLayoutSecondDesign from './bootstrap-design/BootstrapLayoutSecondDesign';
import BootstrapLayoutThirdDesign from './bootstrap-design/BootstrapLayoutThirdDesign';
import BootstrapLayoutfourthDesign from './bootstrap-design/BootstrapLayoutfourthDesign';
import BootstrapLayoutFiveDesign from './bootstrap-design/BootstrapLayoutFiveDesign';
import PreSchool from './bootstrap-design/PreSchool';


function App() {
  const [csvData, setCsvData] = useState([]);
  const limit = 50;
  return (
    <Container>
      {/* <CSVReader csvFilePath={salaries} onDataParsed={setCsvData} />
      <JobAnalyzer csvData={csvData} /> */}

      {/* <CSVReader csvFilePath={olympics_dataset} onDataParsed={setCsvData} /> */}
      {/* <MedalTrendChart data={csvData} /> */}
      {/* <TopCountriesChart data={csvData} /> */}
      {/* <SummerWinterComparison data={csvData} /> */}
      {/* <TopSportsByCountry data={csvData} /> */}


      {/* <CSVReader csvFilePath={titanic_dataset} onDataParsed={setCsvData} /> */}
      {/* <JSONViewer jsonData={csvData} limit={limit} /> */}

      {/* <TitanicAnalysis data={csvData} /> */}

      {/* <JsonManipulation /> */}
      {/* <AlertComponent notifications={usersData[0].notifications} /> */}



      {/* <div> {
        usersData.map((user, index) => (
          <><AlertComponent notifications={user.notifications} key={index} />
            <UserCard user={user} key={index} /></>
        ))
      }</div> */}


      {/* <pre>{JSON.stringify(initialUsers, "", 2)}</pre> */}
      {/* <UserList users={initialUsers} /> */}


      {/* <pre>{JSON.stringify(products, "", 2)}</pre> */}
      {/* <Product product={products[0]} /> */}
      {/* <ProductList products={products} /> */}
      {/* <UserApp /> */}

      {/* <SchoolManagementApp schoolData={schoolData} /> */}
      {/* <pre>{JSON.stringify(packageData[0].packageListing.packages, "", 2)}</pre> */}
      {/* <PackageAccordion packages={packageData[0].packageListing.packages} /> */}


      {/* <PackageListingApp packages={packages} /> */}
      {/* <PackageListingApp packages={packages} /> */}



      {/* <BookingAccordion bookings={bookingData} /> */}

      {/* <BookingModifications modifications={bookingData} /> */}

      {/* <BookingInquiries inquiries={bookingData} /> */}

      {/* <BookingStatusAlert status ={bookingData}/> */}
      {/* <CssTutorials /> */}
      {/* <BootstrapLayoutFirstDesign /> */}
      {/* <BootstrapLayoutSecondDesign /> */}
      {/* <BootstrapLayoutThirdDesign/> */}
      {/* <BootstrapLayoutfourthDesign/> */}
      {/* <BootstrapLayoutFiveDesign /> */}
      <PreSchool />
    </Container>
  );
}

export default App;
