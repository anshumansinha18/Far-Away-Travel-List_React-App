
# Far Away - Travel List Website

Far Away is a travel list website that allows you to create and manage your packing list for your upcoming trips. With Far Away, you can easily add items to your list, delete items, mark items as packed, delete all items at once, and sort the list based on description and packed status. This project is built using React, a popular JavaScript library for building user interfaces.

## Features

- **Add Items:** Easily add items to your packing list using the user-friendly interface.
- **Delete Items:** Remove unwanted items from your list with just a click of a button.
- **Checkboxes:** Mark items as packed by checking off the corresponding checkboxes.
- **Bulk Delete:** Delete all items from your list at once for a fresh start.
- **Sort List:** Sort your packing list based on description or packed status.


##  Technologies Used

- **React:** The project is built using React, a JavaScript library for building user interfaces. React provides a component-based architecture and allows for efficient state management, making it ideal for interactive web applications.
- **States:** React's state feature is utilized to manage and update the data within the application. It enables the application to handle dynamic changes and update the UI accordingly.
- **Immutability of States:** React emphasizes immutability, ensuring that state objects are not mutated directly but instead are updated using methods such as setState. This approach helps to prevent unexpected side effects and simplifies state management.
- **Passing Props:** Props are used to pass data from parent components to child components. This allows for communication and data sharing between different parts of the application.
- **Lifting Up State:** In cases where multiple components need access to the same state or when the state needs to be modified by multiple components, the state is lifted up to a common ancestor component. This facilitates centralized state management and avoids data inconsistencies.
- **State Management:** React's built-in state management capabilities are leveraged to maintain and update the application's data. By managing state effectively, the application can respond to user interactions and update the UI accordingly.
- **Child Component to Parent Component Communication:** The project implements communication between child and parent components to enable actions and data flow in both directions. This allows child components to notify their parent components about certain events or provide data updates.
- **Derived States:** Derived states are computed based on existing state values. By utilizing derived states, the application can dynamically calculate values or apply specific logic based on the current state.
- **Controlled Elements:** React's controlled elements approach is employed to bind form elements, such as checkboxes and input fields, to the component's state. This ensures that the component's state always reflects the current value of the form elements.
- **Form Handling in React:** React's form handling capabilities are utilized to capture user input, validate data, and perform actions based on form submissions. This enables smooth and efficient handling of user interactions.
- **Complex Immutable Data Operations:** The project employs techniques for performing complex operations on immutable data structures. This allows for efficient manipulation of data without directly mutating the original objects.
- **Code Modularity:** To maintain a modular and organized code structure, components are separated into individual files. This promotes code reusability, readability, and easier maintenance of the application.


## Getting Started

To run the Far Away travel list website locally, follow these steps:

**1. Clone the repository:**

```bash
git clone https://github.com/your-username/far-away.git
```

**2. Install the dependencies:**
```
cd far-away
npm install
```
**3. Start the development server:**
```
npm start
```

Open your web browser and visit http://localhost:3000 to access the Far Away travel list website.

