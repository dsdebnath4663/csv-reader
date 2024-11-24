import packageThumbnail from '../resource/images/Gulmarg.avif';

// src/data.js
export const usersData = [
  {
    id: 1,
    name: "Alice",
    age: 25,
    role: "admin",
    images: [
      "https://via.placeholder.com/150?text=Alice+1",
      "https://via.placeholder.com/150?text=Alice+2"
    ],
    notifications: [
      { id: 1, message: "You have new messages.", type: "success" },
      { id: 2, message: "Your profile is incomplete.", type: "warning" }
    ]
  },
  {
    id: 2,
    name: "Bob",
    age: 30,
    role: "user",
    images: [
      "https://via.placeholder.com/150?text=Bob+1",
      "https://via.placeholder.com/150?text=Bob+2"
    ],
    notifications: [
      { id: 1, message: "Your password has been updated.", type: "info" }
    ]
  }
];



export const initialUsers = [
  { id: 1, name: "Alice", role: "admin", email: "alice@example.com", details: "Admin user" },
  { id: 2, name: "Bob", role: "user", email: "bob@example.com", details: "Regular user" },
  { id: 3, name: "Charlie", role: "user", email: "charlie@example.com", details: "Regular user" }
];

// src/data.js
export const products = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model smartphone",
    categories: [
      {
        name: "Electronics",
        subcategories: [
          { name: "Mobiles" },
          { name: "Accessories" }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Laptop",
    description: "High-performance laptop",
    categories: [
      {
        name: "Electronics",
        subcategories: [
          { name: "Computers" },
          { name: "Accessories" }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Coffee Maker",
    description: "Brews great coffee",
    categories: [
      {
        name: "Appliances",
        subcategories: [
          { name: "Kitchen" },
          { name: "Brewing" }
        ]
      }
    ]
  },
  {
    id: 4,
    name: "Headphones",
    description: "Noise-cancelling headphones",
    categories: [
      {
        name: "Electronics",
        subcategories: [
          { name: "Audio" }
        ]
      }
    ]
  },
  {
    id: 5,
    name: "Smartwatch",
    description: "Fitness tracking smartwatch",
    categories: [
      {
        name: "Wearables",
        subcategories: [
          { name: "Smartwatches" }
        ]
      }
    ]
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker",
    categories: [
      {
        name: "Audio",
        subcategories: [
          { name: "Speakers" }
        ]
      }
    ]
  },
  {
    id: 7,
    name: "Action Camera",
    description: "4K action camera",
    categories: [
      {
        name: "Cameras",
        subcategories: [
          { name: "Action" }
        ]
      }
    ]
  },
  {
    id: 8,
    name: "Electric Kettle",
    description: "Fast boiling electric kettle",
    categories: [
      {
        name: "Appliances",
        subcategories: [
          { name: "Kitchen" }
        ]
      }
    ]
  },
  {
    id: 9,
    name: "Gaming Console",
    description: "Latest gaming console",
    categories: [
      {
        name: "Gaming",
        subcategories: [
          { name: "Consoles" },
          { name: "Accessories" }
        ]
      }
    ]
  },
  {
    id: 10,
    name: "Tablet",
    description: "Lightweight tablet for browsing",
    categories: [
      {
        name: "Electronics",
        subcategories: [
          { name: "Tablets" }
        ]
      }
    ]
  }

];



// src/data.js
export const tasks = [
  {
    id: 1,
    title: "Design Landing Page",
    description: "Create a responsive landing page for the new product.",
    status: "In Progress",
    progress: 40,
    assignedTo: {
      name: "Alice",
      role: "Designer",
      contact: "alice@example.com",
    },
  },
  {
    id: 2,
    title: "API Development",
    description: "Develop RESTful API for the application.",
    status: "Completed",
    progress: 100,
    assignedTo: {
      name: "Bob",
      role: "Developer",
      contact: "bob@example.com",
    },
  },
  {
    id: 3,
    title: "Database Setup",
    description: "Setup and configure the database for the application.",
    status: "In Progress",
    progress: 70,
    assignedTo: {
      name: "Charlie",
      role: "DB Admin",
      contact: "charlie@example.com",
    },
  },
  {
    id: 4,
    title: "User Authentication",
    description: "Implement user authentication using JWT.",
    status: "Pending",
    progress: 10,
    assignedTo: {
      name: "David",
      role: "Developer",
      contact: "david@example.com",
    },
  },
  {
    id: 5,
    title: "Quality Assurance",
    description: "Conduct QA testing for the new features.",
    status: "Pending",
    progress: 0,
    assignedTo: {
      name: "Eve",
      role: "QA Engineer",
      contact: "eve@example.com",
    },
  },
  {
    id: 6,
    title: "Deployment",
    description: "Deploy the application to production.",
    status: "Pending",
    progress: 0,
    assignedTo: {
      name: "Frank",
      role: "DevOps",
      contact: "frank@example.com",
    },
  },
  {
    id: 7,
    title: "Documentation",
    description: "Write documentation for the API.",
    status: "In Progress",
    progress: 50,
    assignedTo: {
      name: "Grace",
      role: "Technical Writer",
      contact: "grace@example.com",
    },
  },
  {
    id: 8,
    title: "User Feedback",
    description: "Gather user feedback for the beta version.",
    status: "Completed",
    progress: 100,
    assignedTo: {
      name: "Hank",
      role: "Product Manager",
      contact: "hank@example.com",
    },
  },
  {
    id: 9,
    title: "Feature Enhancements",
    description: "Implement enhancements based on user feedback.",
    status: "Pending",
    progress: 0,
    assignedTo: {
      name: "Ivy",
      role: "Developer",
      contact: "ivy@example.com",
    },
  },
  {
    id: 10,
    title: "Final Review",
    description: "Conduct a final review of the project.",
    status: "Pending",
    progress: 0,
    assignedTo: {
      name: "Jack",
      role: "Manager",
      contact: "jack@example.com",
    },
  },
];


// src/data.js
export const users = [
  {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    role: "admin",
    details: {
      address: "123 Admin St, Cityville",
      phone: "123-456-7890",
      preferences: {
        notifications: true,
        theme: "dark",
      },
    },
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    role: "manager",
    details: {
      address: "456 Manager Rd, Townsville",
      phone: "987-654-3210",
      preferences: {
        notifications: false,
        theme: "light",
      },
    },
  },
  {
    id: 3,
    name: "Charlie",
    email: "charlie@example.com",
    role: "employee",
    details: {
      address: "789 Employee Ave, Villageville",
      phone: "555-555-5555",
      preferences: {
        notifications: true,
        theme: "dark",
      },
    },
  },
  {
    id: 4,
    name: "David",
    email: "david@example.com",
    role: "admin",
    details: {
      address: "101 Admin Blvd, Citytown",
      phone: "222-222-2222",
      preferences: {
        notifications: true,
        theme: "light",
      },
    },
  },
  {
    id: 5,
    name: "Eve",
    email: "eve@example.com",
    role: "manager",
    details: {
      address: "202 Manager Ct, Townyville",
      phone: "333-333-3333",
      preferences: {
        notifications: false,
        theme: "dark",
      },
    },
  },
  {
    id: 6,
    name: "Frank",
    email: "frank@example.com",
    role: "employee",
    details: {
      address: "303 Employee Way, Villagetown",
      phone: "444-444-4444",
      preferences: {
        notifications: true,
        theme: "light",
      },
    },
  },
  {
    id: 7,
    name: "Grace",
    email: "grace@example.com",
    role: "admin",
    details: {
      address: "404 Admin Rd, Cityplace",
      phone: "555-555-5556",
      preferences: {
        notifications: false,
        theme: "dark",
      },
    },
  },
  {
    id: 8,
    name: "Hank",
    email: "hank@example.com",
    role: "manager",
    details: {
      address: "505 Manager St, Townplace",
      phone: "666-666-6666",
      preferences: {
        notifications: true,
        theme: "light",
      },
    },
  },
  {
    id: 9,
    name: "Ivy",
    email: "ivy@example.com",
    role: "employee",
    details: {
      address: "606 Employee Blvd, Villageplace",
      phone: "777-777-7777",
      preferences: {
        notifications: false,
        theme: "dark",
      },
    },
  },
  {
    id: 10,
    name: "Jack",
    email: "jack@example.com",
    role: "admin",
    details: {
      address: "707 Admin Ave, Cityland",
      phone: "888-888-8888",
      preferences: {
        notifications: true,
        theme: "light",
      },
    },
  },
];


export const schoolData = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "admin",
    address: { city: "New York", state: "NY" },
    preferences: { notifications: true, darkMode: false }
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "manager",
    address: { city: "Chicago", state: "IL" },
    preferences: { notifications: false, darkMode: true }
  },
  {
    id: 3,
    name: "Carol White",
    role: "employee",
    address: { city: "Los Angeles", state: "CA" },
    preferences: { notifications: true, darkMode: true }
  },
  {
    id: 4,
    name: "David Black",
    role: "employee",
    address: { city: "Houston", state: "TX" },
    preferences: { notifications: false, darkMode: false }
  },
  {
    id: 5,
    name: "Eve Davis",
    role: "manager",
    address: { city: "Phoenix", state: "AZ" },
    preferences: { notifications: true, darkMode: false }
  },
  {
    id: 6,
    name: "Frank Green",
    role: "admin",
    address: { city: "Philadelphia", state: "PA" },
    preferences: { notifications: true, darkMode: true }
  },
  {
    id: 7,
    name: "Grace Lee",
    role: "employee",
    address: { city: "San Antonio", state: "TX" },
    preferences: { notifications: false, darkMode: true }
  },
  {
    id: 8,
    name: "Henry Brown",
    role: "manager",
    address: { city: "San Diego", state: "CA" },
    preferences: { notifications: true, darkMode: false }
  },
  {
    id: 9,
    name: "Ivy Miller",
    role: "admin",
    address: { city: "Dallas", state: "TX" },
    preferences: { notifications: false, darkMode: true }
  },
  {
    id: 10,
    name: "Jack Wilson",
    role: "employee",
    address: { city: "Austin", state: "TX" },
    preferences: { notifications: true, darkMode: false }
  }
];



export const packages = [

  {
    "packageId": "PKG001",
    "packageName": "Exotic Thailand Tour",
    "employerId": "EMP001",
    "cost": { "currency": "USD", "amount": 1500 },
    "destinations": [
      { "city": "Bangkok", "country": "Thailand", "duration": "3 days" },
      { "city": "Phuket", "country": "Thailand", "duration": "4 days" }
    ],
    "itinerary": [
      { "day": 1, "description": "Arrival in Bangkok, transfer to hotel" },
      { "day": 2, "description": "Bangkok city tour, temples and markets" },
      { "day": 3, "description": "Day trip to Ayutthaya" },
      { "day": 4, "description": "Fly to Phuket" },
      { "day": 5, "description": "Phuket island tour" },
      { "day": 6, "description": "Free day in Phuket" },
      { "day": 7, "description": "Departure from Phuket" }
    ],
    "images": [packageThumbnail], // Use the imported image here
    "availableDates": ["2024-11-01", "2024-12-15"],
    "status": "active",
    "lastUpdated": "2024-10-09"
  }
];







export const bookingData = [
  {
    "bookingId": "BKG001",
    "packageId": "PKG001",
    "packageName": "Exotic Thailand Tour",
    "customer": {
      "customerId": "CUST001",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "+1234567890"
    },
    "bookingDate": "2024-10-01",
    "status": "confirmed",
    "inquiries": [
      {
        "inquiryId": "INQ001",
        "message": "Can I change the dates for this booking?",
        "response": "Yes, please provide your preferred dates.",
        "status": "responded"
      }
    ],
    "modifications": [
      {
        "modificationId": "MOD001",
        "modificationType": "date change",
        "requestedDate": "2024-11-15",
        "status": "approved",
        "approvedBy": "Admin",
        "approvedDate": "2024-10-05"
      },
      {
        "modificationId": "MOD002",
        "modificationType": "date change",
        "requestedDate": "2024-11-16",
        "status": "rejected",
        "approvedBy": "User",
        "approvedDate": "2024-10-05"
      }
    ]
  }
];




export const bookingDatas = [
  {
    "bookingId": "BKG001",
    "packageId": "PKG001",
    "packageName": "Exotic Thailand Tour",
    "customer": {
      "customerId": "CUST001",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "+1234567890"
    },
    "bookingDate": "2024-10-01",
    "status": "confirmed",
    "inquiries": [
      {
        "inquiryId": "INQ001",
        "message": "Can I change the dates for this booking?",
        "response": "Yes, please provide your preferred dates.",
        "status": "responded"
      }
    ],
    "modifications": [
      {
        "modificationId": "MOD001",
        "modificationType": "date change",
        "requestedDate": "2024-11-15",
        "status": "approved",
        "approvedBy": "Admin",
        "approvedDate": "2024-10-05"
      }
    ]
  }
];