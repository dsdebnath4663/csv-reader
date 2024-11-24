import { useEffect, useState } from "react";

function JsonManipulation() {



  const sayHello = () => {
    const jsonString = '{"name": "John", "age": 30}';
    const parsedData = JSON.parse(jsonString);
    console.log(parsedData.name); // John

    return parsedData.name;
  };




  const stringifyingObjects = () => {
    const data = { name: "John", age: 30 };
    const jsonString = JSON.stringify(data);
    console.log(jsonString); // '{"name":"John","age":30}'


    return jsonString;
  };




  const accessingJSONData = () => {

    const jsonData = {
      user: { name: "Alice", age: 25 },
      skills: ["JavaScript", "React"],
    };

    const jsonString = jsonData.user.age;
    console.log(jsonString); // Alice

    return jsonData;
  }

  const logUserNames = (user) => {
    const users = [{ name: "Alice" }, { name: "Bob" }];
    const userName = users.map(user => user.name).join("    , ");;
    return userName;
  }


  const filteringJSONData = (user) => {
    const users = [
      { name: "Alice", role: "admin" },
      { name: "Bob", role: "user" },
    ];

    const admins = users.filter(user => user.role === "user");
    console.log(admins); // [{ name: "Alice", role: "admin" }]

    return admins;
  }


  // const UserTable = () => users.map(user => <div>{user.name}</div>);
  const userTable = (user) => {

    const userList = [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
      { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
    ];

    return (
      <table>
        <tbody>
          {
            userList.map(user =>
            (
              <tr>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.name}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    )

  }




  const admins = [
    { id: 1, name: 'Admin One', email: 'admin1@example.com' },
    { id: 2, name: 'Admin Two', email: 'admin2@example.com' },
    { id: 3, name: 'Admin Three', email: 'admin3@example.com' },
  ];

  const AdminList = () => {
    return (
      <table>
        <tbody>
          {admins.map(admin => (
            <tr key={admin.id}>
              <td>{admin.id}</td>
              <td>{admin.name}</td>
              <td>{admin.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );

  };



  const dynamicComponent = () => {
    const users = [{ name: "Alice" }, { name: "Bob" }];
    return (
      <table>
        <tbody>
          {/* {admins.map(admin => (
            
          ))} */}
          {users.map(user => (
            <tr>
              <td>
                {user.name}
              </td>
            </tr>

          ))}
        </tbody>
      </table>
    );

  }

  function getUserDetails() {
    const user = {
      id: 1,
      personalInfo: {
        name: "Alice",
        age: 25,
        email: "alice@example.com"
      },
      address: {
        street: "123 Main St",
        city: "Wonderland",
        zip: "12345"
      },
      preferences: {
        likes: ["reading", "traveling", "music"],
        subscriptions: {
          newsletter: true,
          updates: false
        }
      }
    };

    const { street, city, zip } = user.address; // Destructuring personalInfo
    return { street, city, zip }; // Returns an object with name, age, and email
  }

  const modifyingJSON = () => {
    const users = [{ name: "Alice" }, { name: "Bob" }];
    const updatedUsers = users.map(user =>
      user.name === "Alice" ? {
        ...user,
        name: "Alicia"
      } : user
    );
    console.log(updatedUsers);
    return updatedUsers;
  }

  const mediumExample = () => {
    const users = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 20 }
    ];
    const updatedUsers = users.map(user =>
      user.name === "Bob" ? { ...user, age: 30 } : user
    );
    console.log(updatedUsers);
    return updatedUsers;
  }


  const complexJSON = () => {
    const users = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 20 },
      { name: "Charlie", age: 30 }
    ];

    const updatedUsersMap = users.map(user => {
      const isActive = user.age < 30;
      let updatedUser = { ...user, isActive };
      if (user.name === "Alice") {
        updatedUser.name = "Alicia";
      }

      return updatedUser;
    });

    console.log(updatedUsersMap)

    return updatedUsersMap;

  }

  const ChangeMultiplePropertiesJSON = () => {
    const users = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 20 },
      { name: "Charlie", age: 30 }
    ]
    const updatedUsersMap = users.map(user => {
      console.log(`Processing user:${JSON.stringify(user)}`);
      if (user.name === "Alice" || user.name === "Bob") {
        const updatedUser = {
          ...user,
          age: user.age + 5,
          role: "admin"
        };
        console.log(`Updated user: ${JSON.stringify(updatedUser)}`);
        return updatedUser;
      }
      console.log(`User not updated: ${JSON.stringify(user)}`);
      return user;
    });
    console.log(updatedUsersMap);
    return updatedUsersMap;
  }


  const RemovingaProperty = () => {
    const users = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 20 },
      { name: "Charlie", age: 30 },
      { name: "Cathy", age: 35 }
    ];
    const updatedUsers = users.map(user => {
      console.log(`Processing user: ${JSON.stringify(user)}`);
      if (user.name.startsWith("C")) {
        const { age, ...rest } = user;
        const updatedUser = { ...rest };
        console.log(`Updated user (age removed): ${JSON.stringify(updatedUser)}`);
        return updatedUser;
      }
      console.log(`User not updated: ${JSON.stringify(user)}`);
      return user;
    })
    console.log(updatedUsers);
    return updatedUsers;
  }

  const MergingJSONObjects = () => {
    const mergeObjects = (obj1, obj2) => {
      return { ...obj1, ...obj2 };
    };
    const obj1 = { name: "Alice" };
    const obj2 = { age: 25 };
    const merged = mergeObjects(obj1, obj2);

    console.log(merged);
    return merged;
  }

  const HandlingNestedJSON = () => {
    const getUserName = (data) => {
      return data.user.info.name;
    };
    const data = {
      user: { info: { name: "Alice", age: 25 } },
    };
    const userName = getUserName(data);
    console.log(userName);
  }




  // Simulate fetched JSON data
  // const users = [
  //   {
  //     name: "Alice",
  //     role: "admin",
  //     address: { street: "123 Main St", city: "New York" },
  //     preferences: [{ name: "theme", value: "dark" }]
  //   },
  //   {
  //     name: "Bob",
  //     role: "user",
  //     address: { street: "456 Market St", city: "Los Angeles", postalCode: "90001" },
  //     preferences: [{ name: "notifications", value: "enabled" }]
  //   },
  //   {
  //     name: "Charlie",
  //     role: "guest",
  //     address: { street: "789 Broadway", city: "New York" },
  //     preferences: null
  //   }
  // ];



  // Step 1: Filter users based on role
  // Method to filter users based on role ("admin" or "user")
  // const filterUsersByRole = (users) => {
  //   return users.filter(user => user.role === 'admin' || user.role === 'guest');
  // };
  // const filteredUsers = filterUsersByRole(users);
  // // Log the output to console
  // console.log(filteredUsers);


  // //2. Modifying Addresses (adding a postal code if missing)
  // const modifyAddress = (users, city, postalCode, landMark) => {

  //   return users.map(user => {


  //     if (user.address.city === city && !user.address.postalCode) {
  //       return {
  //         ...user,
  //         name: `Updated ${user.name}`,
  //         address: {
  //           ...user.address,
  //           postalCode: postalCode,
  //           landMark: landMark,
  //           city: "Kolkata",
  //         },
  //         mobile: "9078654896"
  //       }
  //     }
  //     return user;
  //   });
  // };
  // const updatedUsers = modifyAddress(filteredUsers, "New York", "10001", "Near ausgram bokultala primary school");
  // console.log(updatedUsers);


  //3. Extracting and Formatting Preferences
  // Method to format preferences into a readable string



  const preferences1 = [{ name: "notifications", value: "enabled" }];
  const preferences2 = null;



  const mergeUsersWithOrders = (users, orders) => {
    return users.map(user => {
      const userOrders = orders.filter(order => order.userId === user.id);
      return {
        ...user,
        orders: userOrders.map(order => order.order)
      }
    })
  };
  const user = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 }
  ];

  const orders = [
    { userId: 1, order: "Laptop" },
    { userId: 1, order: "Mouse" },
    { userId: 2, order: "Keyboard" }
  ];
  // const result = mergeUsersWithOrders(users, orders);
  // console.log(result)/\;

  const getProductDetails = (data) => {
    const products = data.store.products;
    return products.map(product => {
      return `${product.productName}: $${product.price}`;
    });
  };
  const data = {
    store: {
      products: [
        { id: 1, productName: "Phone", price: 699 },
        { id: 2, productName: "Laptop", price: 1299 }
      ]
    }
  };
  const results = getProductDetails(data);
  console.log(results);





  const flattenObject = (obj) => {
    const result = {};

    for (const key in obj) {
      if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        const flatObj = flattenObject(obj[key]);
        for (const nestedKey in flatObj) {
          result[`${key}.${nestedKey}`] = flatObj[nestedKey];
        }
      } else {
        result[key] = obj[key];
      }
    }

    return result;
  };

  const nestedObj = {
    user: {
      name: "Alice",
      address: {
        city: "New York",
        postalCode: 10001
      }
    },
    product: {
      id: 1,
      name: "Phone"
    }
  };

  const flatData = flattenObject(nestedObj);
  console.log(flatData);



  const getUserData = (response) => {
    const name = response?.user?.name;
    const city = response?.user?.address?.city || "City not available";
    return {
      name,
      city
    };
  };

  const response = {
    user: {
      name: "Alice"
    }
  };

  const userData = getUserData(response);
  console.log(userData);




  const groupProductsByCategory = (products) => {
    return products.reduce((acc, product) => {
      const { category } = product;

      if (!acc[category]) acc[category] = [];
      acc[category].push(product);
      return acc;
    }, {});
  };
  const products = [
    { id: 1, name: "Laptop", category: "Electronics" },
    { id: 2, name: "Phone", category: "Electronics" },
    { id: 3, name: "T-shirt", category: "Clothing" },
    { id: 4, name: "Shoes", category: "Clothing" }
  ];
  const groupedProducts = groupProductsByCategory(products);
  console.log(groupedProducts);



  const getTeamMembers = (datas) => {
    return datas.teams.map(team => {
      const teamName = team.name; // Access team name
      const members = team.members; // Access team members

      return {
        teamName,
        members
      };
    });
  };
  const datas = {
    teams: [
      {
        name: "Team A",
        members: [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]
      },
      {
        name: "Team B",
        members: [{ id: 3, name: "Charlie" }, { id: 4, name: "Dave" }]
      }
    ]
  };
  const teamsWithMembers = getTeamMembers(datas);
  console.log(teamsWithMembers);



  // const getSelectedUsers = (users) => {
  //   return users.map(({ id, name }) => ({ id, name }));
  // };

  // const users = [
  //   { id: 1, name: "Alice", age: 25, role: "admin" },
  //   { id: 2, name: "Bob", age: 30, role: "user" },
  //   { id: 3, name: "Charlie", age: 28, role: "manager" }
  // ];

  // const selectedUsers = getSelectedUsers(users);
  // console.log(selectedUsers);





  const getUsersWithStatus = (users, statuses) => {
    return users.map(user => {
      const userStatus = statuses.find(status => status.userId === user.id);
      return {
        ...user,
        status: userStatus ? userStatus.status : "Unknown"
      };
    });
  };

  // const users = [
  //   { id: 1, name: "Alice", age: 25 },
  //   { id: 2, name: "Bob", age: 30 },
  //   { id: 3, name: "Charlie", age: 28 }
  // ];

  // const statuses = [
  //   { userId: 1, status: "Active" },
  //   { userId: 2, status: "Inactive" }
  // ];

  // const usersWithStatus = getUsersWithStatus(users, statuses);
  // console.log(usersWithStatus);



  // const paginate = (data, page, pageSize) => {
  //   const start = (page - 1) * pageSize;
  //   return data.slice(start, start + pageSize);
  // };

  // const items = [
  //   { id: 1, name: "Item 1" },
  //   { id: 2, name: "Item 2" },
  //   { id: 3, name: "Item 3" },
  //   { id: 4, name: "Item 4" },
  //   { id: 5, name: "Item 5" }
  // ];

  // const paginatedData = paginate(items, 2, 2);
  // console.log(paginatedData);

  // const filterAdminInNYC = (users) => {
  //   return users.filter(user => user.role === "admin" && user.address.city === "New York");
  // };

  // const users = [
  //   { id: 1, name: "Alice", role: "admin", address: { city: "New York" } },
  //   { id: 2, name: "Bob", role: "user", address: { city: "Los Angeles" } },
  //   { id: 3, name: "Charlie", role: "admin", address: { city: "New York" } },
  //   { id: 4, name: "Dave", role: "admin", address: { city: "Chicago" } }
  // ];

  // const filteredUsers = filterAdminInNYC(users);
  // console.log(filteredUsers);


  const findOldestConsumer = (consumers) => {
    return consumers.reduce((max, consumer) => (consumer.age > max.age ? consumer : max), consumers[0]);
  };

  const consumers = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
    { id: 4, name: "Dave", age: 28 }
  ];
  const oldestUser = findOldestConsumer(consumers);
  console.log(oldestUser);



  //
  const deepMerge = (target, source) => {
    for (const key in source) {
      console.log(`Processing key: ${key}`);
      if (source[key] instanceof Object && key in target) {
        console.log(`Merging nested object for key: ${key}`);
        Object.assign(source[key], deepMerge(target[key], source[key]));

      }
    }
    console.log(`Merging objects: `, { ...target, ...source });
    return { ...target, ...source };
  };

  const obj1 = {
    name: "Alice",
    details: { age: 25, city: "New York" },
    preferences: { color: "blue", food: "pizza" }
  };

  const obj2 = {
    name: "Alice",
    details: { city: "Los Angeles", country: "USA" },
    preferences: { drink: "coffee" }
  };

  const mergedObject = deepMerge(obj1, obj2);
  console.log('Final merged object:', mergedObject);





  const jsonToCSV = (jsonArray) => {
    const headers = Object.keys(jsonArray[0]);
    console.log("Extracted Headers: ", headers);

    const headerLine = headers.join(",");
    console.log("Header Line (CSV format): ", headerLine);

    const rows = jsonArray.map(obj => {
      const values = Object.values(obj);
      console.log("Extracted Values for Row: ", values);

      return values.join(",");
    });

    console.log("Rows (CSV format): ", rows);

    const csv = `${headerLine}\n${rows.join("\n")}`;
    console.log("Final CSV String: ", csv);

    return csv;
  };
  const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 }
  ];

  const csvData = jsonToCSV(users);
  console.log(csvData);


  // const formattedPreferences = formatPreferences(preferences1);
  // const formattedPreferences = formatPreferences(preferences2);
  // console.log(formattedPreferences);


  // const parsedData = sayHello();
  // const stringifyiedObjects = stringifyingObjects();
  // const accessedJSONData = accessingJSONData();

  return (
    <div>

      {/* <p>Name: {parsedData.name}</p>
      <p>Age: {parsedData.age}</p> */}
      {/* <pre>{stringifyObjects()}</pre>
      <pre>{stringifyiedObjects}</pre> */}
      {/* 
      <p>{
        accessingJSONData().skills[0] + ", " +
        accessingJSONData().skills[1] + "," +
        accessingJSONData().user.name + "," +
        accessingJSONData().user.age
      }</p> */}
      {/* <p>Skill 1: {accessingJSONData().skills[0]}</p> */}
      {/* <p>Skill 1: {accessingJSONData().skills[0]}</p> */}
      {/* <p>{logUserNames()}</p> */}
      {/* <pre>{filteringJSONData()[0].name}</pre>
      <pre>{filteringJSONData()[0].role}</pre>
      <>{userTable()}</> */}
      {/* <>{dynamicComponent()}</> */}
      {/* <pre>{getUserDetails().street}</pre> */}
      {/* <pre>{JSON.stringify(modifyingJSON())}</pre> */}
      {/* {<p>{mediumExample()}</p>} */}
      {/* <pre>{JSON.stringify(complexJSON())}</pre> */}
      {/* {<pre>{JSON.stringify(ChangeMultiplePropertiesJSON())}</pre>} */}
      {/* {<pre>{JSON.stringify(RemovingaProperty())}</pre>} */}

      {/* {<pre>{JSON.stringify(filterUsersByRole(users), "", 2)}</pre>} */}


      {/* 
       <div class="container">
        <div class="left">
          <pre>{JSON.stringify(preferences1, "", 2)}</pre>
        </div>
        <div class="right">
          <pre>{JSON.stringify(formattedPreferences, "", 2)}</pre>
        </div>
      </div>  */}

      {/* <p>{JSON.stringify (mergeUsersWithOrders(users, orders))}</p> */}

      {/* <pre>{JSON.stringify(getProductDetails(data))}</pre>
       */}

      {/* <pre>{JSON.stringify(flattenObject(obj))}</pre> */}
      {/* <pre> {JSON.stringify(getUserData(response))}</pre> */}
      {/* <pre>{JSON.stringify(groupProductsByCategory(products))}</pre> */}
      {/* <pre>{JSON.stringify(getTeamMembers(datas))}</pre> */}

      {/* <pre>{JSON.stringify(getSelectedUsers(users))}</pre> */}
      {/* <pre>{JSON.stringify(paginate(data))}</pre> */}
      {/* <pre>{JSON.stringify(filterAdminInNYC(users))}</pre> */}
      {/* <pre>{JSON.stringify(findOldestConsumer(consumers))}</pre> */}

      {/* <pre>{JSON.stringify(deepMerge(obj1, obj2), " ", 2)}</pre> */}

      {/* <pre>{JSON.stringify(jsonToCSV(users))}</pre> */}


    </div>
  )

}
export default JsonManipulation;