<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="100" alt="project-logo">
</p>
<p align="center">
    <h1 align="center">REACT-JO</h1>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/Binary-Blade/react-jo?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/Binary-Blade/react-jo?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/Binary-Blade/react-jo?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/Binary-Blade/react-jo?style=default&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>

<br><!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary><br>

- [ Overview](#-overview)
- [ Features](#-features)
- [ Repository Structure](#-repository-structure)
- [ Modules](#-modules)
- [ Getting Started](#-getting-started)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Tests](#-tests)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)
</details>
<hr>

##  Overview

React-JO is a powerful open-source project that aims to streamline and enhance the development of React applications through a collection of essential tools and configurations. The project excels in providing a robust foundation for setting up and maintaining React projects efficiently. Key components such as Tailwind CSS, Autoprefixer, JSDoc for TypeScript and React components documentation, ESLint for code quality optimization, custom @testing-library/jest-dom configurations for testing, and Vercel deployment settings for flexible routing are included. React-JO not only simplifies the setup process but also ensures code consistency, documentation clarity, and testing reliability, making it an indispensable asset for developers working on React applications.

---

##  Features

|    |   Feature         | Description |
|----|-------------------|---------------------------------------------------------------|
| ⚙️  | **Architecture**  | The project follows a component-based architecture with reusable UI elements. It uses React for building user interfaces and likely follows a modern frontend design pattern. |
| 🔩 | **Code Quality**  | The codebase likely adheres to best practices with linting tools like ESLint and Prettier. It may also use TypeScript for type safety and improved code quality. |
| 📄 | **Documentation** | Documentation seems extensive with the use of JSDoc and possibly README files. This aids developers in understanding the components and codebase. |
| 🔌 | **Integrations**  | Key integrations include libraries for UI elements, data visualization, state management, testing, and tooling like Vite for bundling. |
| 🧩 | **Modularity**    | The codebase appears to be modular with a focus on reusability, evident from the use of component libraries and separation of concerns. |
| 🧪 | **Testing**       | Testing frameworks and tools such as Jest, React Testing Library, and possibly code coverage tools like c8 are used for robust testing practices. |
| ⚡️  | **Performance**   | Performance optimizations might be present, considering efficient libraries for animations, data visualization, and bundling with Vite. |
| 🛡️ | **Security**      | Security measures likely include data handling libraries, authentication tools like jwt-decode, and linting for security vulnerabilities. |
| 📦 | **Dependencies**  | Key dependencies include a wide range of frontend libraries for UI, state management, data fetching, testing, and tooling. |
| 🚀 | **Scalability**   | The project shows potential for scalability with libraries for state management, data rendering, and robust testing, making it easier to handle increased traffic and load efficiently. |

---

##  Repository Structure

```sh
└── react-jo/
    ├── README.md
    ├── components.json
    ├── eslint.config.js
    ├── index.html
    ├── jsdoc.json
    ├── package.json
    ├── postcss.config.js
    ├── setupTests.ts
    ├── src
    │   ├── App.css
    │   ├── App.tsx
    │   ├── assets
    │   ├── components
    │   ├── config
    │   ├── context
    │   ├── features
    │   ├── hoc
    │   ├── hooks
    │   ├── lib
    │   ├── main.tsx
    │   ├── pages
    │   ├── services
    │   ├── stores
    │   └── vite-env.d.ts
    ├── tailwind.config.js
    ├── tests
    │   ├── components
    │   ├── context
    │   ├── features
    │   ├── hooks
    │   ├── lib
    │   ├── services
    │   └── stores
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── vercel.json
    ├── vite.config.ts
    └── vitest.config.ts
```

---

##  Modules

<details closed><summary>.</summary>

| File                                                                                          | Summary                                                                                                                                                                                                                                                                                                                  |
| ---                                                                                           | ---                                                                                                                                                                                                                                                                                                                      |
| [postcss.config.js](https://github.com/Binary-Blade/react-jo/blob/master/postcss.config.js)   | Configures Tailwind CSS and Autoprefixer plugins for styling in the React app architecture.                                                                                                                                                                                                                              |
| [jsdoc.json](https://github.com/Binary-Blade/react-jo/blob/master/jsdoc.json)                 | Generates documentation using JSDoc for TypeScript and React components. Includes relevant plugins, source files configuration, output settings, and template customization. Facilitates clear and structured project documentation within the React-JO repository architecture.                                         |
| [eslint.config.js](https://github.com/Binary-Blade/react-jo/blob/master/eslint.config.js)     | Implements ESLint configurations by importing recommended settings for JavaScript, TypeScript, and React. Integrates global variables for browsers and optimizes code quality within the React-JO repositorys architecture.                                                                                              |
| [setupTests.ts](https://github.com/Binary-Blade/react-jo/blob/master/setupTests.ts)           | Implements custom localStorage for @testing-library/jest-dom in the react-jo repository. Enhances testing environment by providing methods to manipulate local storage behavior during testing without affecting the actual browser storage.                                                                             |
| [vercel.json](https://github.com/Binary-Blade/react-jo/blob/master/vercel.json)               | Implements URL rewriting to redirect all requests to the root path, enhancing routing flexibility within the Vercel deployment configuration for the React application.                                                                                                                                                  |
| [vitest.config.ts](https://github.com/Binary-Blade/react-jo/blob/master/vitest.config.ts)     | Defines test environment setup in the vitest.config.ts file. Maps aliases for convenient path resolution and configures testing environment using Jest with jsdom. Key for integrating testing suite into the React application.                                                                                         |
| [tsconfig.node.json](https://github.com/Binary-Blade/react-jo/blob/master/tsconfig.node.json) | Enables efficient bundling for the Node environment in the project, supporting ESNext module syntax and ensuring strict type checking. Integrates with the `vite.config.ts` file to optimize the build process within the React projects architecture.                                                                   |
| [components.json](https://github.com/Binary-Blade/react-jo/blob/master/components.json)       | Defines component styling, TypeScript settings, and Tailwind CSS config. Establishes aliases for easy import paths. Crucial for maintaining consistent UI and managing dependencies across the React project.                                                                                                            |
| [index.html](https://github.com/Binary-Blade/react-jo/blob/master/index.html)                 | Defines the entry point for the React application, loading the main TypeScript file. Sets up the basic HTML structure for the Olympic Games 2024 webpage hosted at the root URL.                                                                                                                                         |
| [vite.config.ts](https://github.com/Binary-Blade/react-jo/blob/master/vite.config.ts)         | Defines Vite config to use React plugin and set up alias for src directory path. Integrates with the parent repositorys architecture by enhancing build configuration for a React application.                                                                                                                           |
| [tsconfig.json](https://github.com/Binary-Blade/react-jo/blob/master/tsconfig.json)           | Specifies TypeScript compilation settings handling bundler mode, module resolution, and linting for the React application. Configures target, module, strictness, JSX usage, module resolution, and path mapping for optimal development and bundling.                                                                   |
| [package.json](https://github.com/Binary-Blade/react-jo/blob/master/package.json)             | Defines project scripts for development tools, including Vite and ESLint, to enhance workflow efficiency and maintain code quality. Manages dependencies for essential functionalities like React components, form handling, and UI elements. Enables smooth development and testing processes within the React project. |
| [tailwind.config.js](https://github.com/Binary-Blade/react-jo/blob/master/tailwind.config.js) | Defines Tailwind CSS configuration for page components, apps, and source files. Extends color palette with branding variables and specifies design aspects like borderRadius. Utilizes a plugin for animations. Enhances the visual consistency and styling across the React project components.                         |

</details>

<details closed><summary>src</summary>

| File                                                                                    | Summary                                                                                                                                                                                                                                                        |
| ---                                                                                     | ---                                                                                                                                                                                                                                                            |
| [App.css](https://github.com/Binary-Blade/react-jo/blob/master/src/App.css)             | Defines global styles for the applications layout, ensuring that the root element and body fill the full height of the viewport. This CSS file contributes to the consistent visual presentation across various components and pages within the React project. |
| [main.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/main.tsx)           | Renders the main React application by setting up the root component. Includes global components like `Toaster` and `SonnerToast`. Key entry point that initializes the visual interface for the React app.                                                     |
| [vite-env.d.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/vite-env.d.ts) | Enables Vite client-side type references for development in the React-JO repositorys architecture.                                                                                                                                                             |
| [App.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/App.tsx)             | Defines routes and global context, utilizing eager and lazy loading for pages. Implements protected routes for authentication and admin users. Utilizes stores for user and cart data fetching.                                                                |

</details>

<details closed><summary>src.pages</summary>

| File                                                                                                          | Summary                                                                                                                                                                                                                                                                                                               |
| ---                                                                                                           | ---                                                                                                                                                                                                                                                                                                                   |
| [ContactUsPage.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/pages/ContactUsPage.tsx)         | Implements Contact Us page with a header, event hero section, and a contact form featuring input validation. Displays contact information for the Paris 2024 Olympics organization. Achieves user interaction for submitting inquiries and obtaining details effectively within the React-based project architecture. |
| [AuthPage.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/pages/AuthPage.tsx)                   | Defines primary authentication interface with branded visual elements, login/signup forms, and tab-based navigation. Utilizes custom components for styling and interactivity within a Flexbox layout.                                                                                                                |
| [EventSelectedPage.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/pages/EventSelectedPage.tsx) | Displays** detailed event information, images, description, and cart options. Utilizes custom components, stores, and hooks within repository architecture.                                                                                                                                                           |
| [NotFoundPage.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/pages/NotFoundPage.tsx)           | Renders a 404 error page in the React app.-Features branding with a medal icon.-Includes link to navigate back to the homepage.                                                                                                                                                                                       |
| [DashboardPage.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/pages/DashboardPage.tsx)         | Renders dynamic dashboard components based on user selection.-Utilizes Tailwind CSS for styling.-Features custom sidebar navigation components.-Manages active component state with local storage.                                                                                                                    |
| [EventsPage.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/pages/EventsPage.tsx)               | Header`, `EventHero`, `EventsMainContent`, and `Footer`.                                                                                                                                                                                                                                                              |
| [ProfilePage.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/pages/ProfilePage.tsx)             | Displays user profile info and settings using various feature components. Utilizes authentication and user stores to fetch and display data. Includes cards for profile, account, notifications, and password change functionalities.                                                                                 |
| [LoadingPage.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/pages/LoadingPage.tsx)             | Illustrates loading screen with central icon & bouncing dots. Utilizes Tailwind CSS and MedalIcon component for branding. Critical for providing visual feedback during content loading in the app.                                                                                                                   |
| [HomePage.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/pages/HomePage.tsx)                   | Orchestrates main landing page components, incorporating header, hero section, highlights, venue exploration, ticket details, and footer. Relies on Tailwind CSS for styling and custom components.                                                                                                                   |
| [ReservationPage.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/pages/ReservationPage.tsx)     | ReservationPage` structuring header, hero section, reservation listings, and footer. Utilizes Tailwind CSS and custom components: `Header`, `HeroReservation`, `AllReservations`, and `Footer`. Displays reservations page content seamlessly within the repositorys architecture.                                    |
| [CheckoutPage.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/pages/CheckoutPage.tsx)           | Illustrates checkout process with cart summary, promo codes, payment options. Manages loading, empty cart, and user states. Utilizes custom components, hooks, Tailwind CSS for styling. Displays event-related sections, group items by type. Offers interaction to continue shopping.                               |

</details>

<details closed><summary>src.pages.successful</summary>

| File                                                                                                                               | Summary                                                                                                                                                                                                                                       |
| ---                                                                                                                                | ---                                                                                                                                                                                                                                           |
| [SuccessAccountDeleted.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/pages/successful/SuccessAccountDeleted.tsx)   | Illustrates success message display post-account deletion. Utilizes `CircleCheckIcon` for confirmation and `Link` for homepage navigation. Tailwind CSS styling. Crucial for user feedback in the React applications architecture.            |
| [SuccessAccountCreation.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/pages/successful/SuccessAccountCreation.tsx) | Displays a success message with a check icon, title, description, and a link for account creation completion. Utilizes Tailwind CSS for styling, CircleCheckIcon for visual confirmation, and Link for navigation to the authentication page. |
| [SuccessAccountLogin.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/pages/successful/SuccessAccountLogin.tsx)       | Displays success message and redirects user after login. Utilizes Tailwind CSS for styling, the `CircleCheckIcon` for visual confirmation, and `useLocation` hook for navigation.                                                             |

</details>

<details closed><summary>src.lib</summary>

| File                                                                              | Summary                                                                                                                                                                                   |
| ---                                                                               | ---                                                                                                                                                                                       |
| [utils.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/lib/utils.ts) | Implements class name merging and conditional classes using Tailwind CSS and `clsx`.-Creates debounced functions for delayed invocation.-Filters object properties based on allowed keys. |

</details>

<details closed><summary>src.config</summary>

| File                                                                                             | Summary                                                                                                                                                                                                                                       |
| ---                                                                                              | ---                                                                                                                                                                                                                                           |
| [axiosConfig.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/axiosConfig.ts) | Defines Axios settings and interceptors for HTTP requests, including handling 401 errors by refreshing tokens. Ensures requests include proper headers and credentials, maintaining consistency throughout the applications API interactions. |

</details>

<details closed><summary>src.config.dtos</summary>

| File                                                                                                              | Summary                                                                                                                                                                                                                            |
| ---                                                                                                               | ---                                                                                                                                                                                                                                |
| [LocalCartItem.dto.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/dtos/LocalCartItem.dto.ts) | Defines a data transfer object for adding event tickets to a local cart, specifying quantity, price calculation method, event ID, price, and title.                                                                                |
| [Event.dto.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/dtos/Event.dto.ts)                 | Defines data structures for creating and updating event details. Contributes to the repositorys architecture by organizing event-related data transfer objects, promoting clear communication and consistency within the codebase. |
| [CartItem.dto.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/dtos/CartItem.dto.ts)           | CreateCartItemDto` includes event ID, quantity, price, and price formula. `UpdateCartItemDto` manages updated quantity, price formula, and event ID. Crucial for maintaining cart item data integrity in React-JOs architecture.   |

</details>

<details closed><summary>src.config.enums</summary>

| File                                                                                                                 | Summary                                                                                                                                                                                                                                                         |
| ---                                                                                                                  | ---                                                                                                                                                                                                                                                             |
| [StatusPayment.enum.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/enums/StatusPayment.enum.ts) | Defines payment approval statuses for the React app. `StatusPaymentEnum` in src/config/enums/StatusPayment.enum.ts provides constants for approved and rejected payment states. Essential for maintaining consistency across payment-related features.          |
| [PriceFormula.enum.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/enums/PriceFormula.enum.ts)   | Defines `PriceFormula` enum with options for event ticket pricing formulas. Enhances clarity and maintainability by centralizing formula types. Supports easy referencing and consistency across the projects pricing logic.                                    |
| [CategoryEvent.enum.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/enums/CategoryEvent.enum.ts) | Defines event categories with key-value pairs. Extends base categories to include admin-specific options. Types ensure category keys align with defined values. Contributes structure to managing event categories within the repositorys broader architecture. |
| [UserRole.enum.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/enums/UserRole.enum.ts)           | Defines user roles as `ADMIN` and `USER` in the system. Works within the repositorys architecture to manage different user permissions effectively.                                                                                                             |

</details>

<details closed><summary>src.config.constants</summary>

| File                                                                                                                   | Summary                                                                                                                                                                                                                 |
| ---                                                                                                                    | ---                                                                                                                                                                                                                     |
| [cardDataDashbord.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/config/constants/cardDataDashbord.tsx) | Generates card data for events and users in the React project. Utilizes icons and formatted values to display quantity, revenue, and user metrics. Enhances dashboard visualization with clear, structured information. |
| [constants-common.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/constants/constants-common.ts)   | Defines color constants and ticket descriptions for a ticketing feature within the React app. Centralizes status colors and ticket details to ensure consistency and easy maintenance across the application.           |

</details>

<details closed><summary>src.config.constants.filters</summary>

| File                                                                                                                               | Summary                                                                                                                                                                                                                                                                                 |
| ---                                                                                                                                | ---                                                                                                                                                                                                                                                                                     |
| [filtersEvents.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/constants/filters/filtersEvents.ts)             | Defines event filter options in sports categories for better event management and user experience, categorizing sports into Team, Individual, and Water Sports. Enables event filtering by specific categories such as Basketball, Archery, and Swimming in the dashboard.              |
| [filterUsers.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/constants/filters/filterUsers.ts)                 | Defines filter options for user roles in the dashboard. Supports filtering by ADMIN, USER, or displaying all roles. Enables users to easily select and view specific role-based user lists in the application.                                                                          |
| [filtersTransactions.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/constants/filters/filtersTransactions.ts) | Defines filter options for transaction status in the dashboard. Enables users to filter transactions by payment statuses like APPROVED and REJECTED. Facilitates efficient management of transactions by providing a structured approach to categorize and view payment status details. |

</details>

<details closed><summary>src.config.constants.columns-table</summary>

| File                                                                                                                                   | Summary                                                                                                                                                                                                                                              |
| ---                                                                                                                                    | ---                                                                                                                                                                                                                                                  |
| [usersColumnsTable.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/config/constants/columns-table/usersColumnsTable.tsx) | Defines columns for the users table, including ID, email, names, role with badge styling, transaction details, timestamps. Adjusts visibility for responsive design.                                                                                 |
| [eventColumnsTable.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/config/constants/columns-table/eventColumnsTable.tsx) | Defines columns for events table with keys, headers, optional rendering functions, and styling. Configures data display for event-related information in a table component. Formats dates, prices, and revenue values for improved user readability. |

</details>

<details closed><summary>src.config.constants.sorting</summary>

| File                                                                                                                               | Summary                                                                                                                                                                                                                                                                         |
| ---                                                                                                                                | ---                                                                                                                                                                                                                                                                             |
| [sortingReservation.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/constants/sorting/sortingReservation.ts)   | Defines sorting options for public reservation view by total price and title, enhancing user experience in navigation and selection.                                                                                                                                            |
| [sortingEvents.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/constants/sorting/sortingEvents.ts)             | Defines sorting options for events in dashboard and public view. Enables sorting by criteria like title, available quantity, revenue generated. Enhances event management and public navigation by offering configurable sorting functionalities based on different attributes. |
| [sortingTransactions.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/constants/sorting/sortingTransactions.ts) | Defines constant array for sorting transactions by order date in the transaction dashboard. It enables users to sort transactions based on creation date.                                                                                                                       |
| [sortingUsers.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/constants/sorting/sortingUsers.ts)               | Defines sorting options for user management dashboard in React project. Allows sorting users by email, first name, last name, transactions count, total spent, creation date, and last login date for efficient user data management.                                           |

</details>

<details closed><summary>src.config.constants.navbar</summary>

| File                                                                                                        | Summary                                                                                                                                                                                                                                                 |
| ---                                                                                                         | ---                                                                                                                                                                                                                                                     |
| [navlink.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/config/constants/navbar/navlink.tsx) | Defines navigation links for public and admin users, specifying icons, names, and corresponding URLs. Enhances user experience by providing intuitive navigation within the application. Maintains consistency and clarity across different user roles. |

</details>

<details closed><summary>src.config.zod-schemas</summary>

| File                                                                                                                           | Summary                                                                                                                                                                                                                                               |
| ---                                                                                                                            | ---                                                                                                                                                                                                                                                   |
| [eventSchema.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/zod-schemas/eventSchema.ts)                   | Defines a schema for event form data with validation rules such as dates, category types, prices, and descriptions. The associated TypeScript type ensures conformity with the schema structure and constraints, facilitating reliable data handling. |
| [profileSchema.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/zod-schemas/profileSchema.ts)               | Defines a user profile schema for form validation, ensuring correct first name, last name, and email format. The TypeScript type `ProfileSchema` enforces the schemas structure, aiding in data validation across the project.                        |
| [signupSchema.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/zod-schemas/signupSchema.ts)                 | Defines a schema and TypeScript type for a signup form, specifying validation rules for first name, last name, email, and password. Ensures data integrity and type safety within the React projects configuration structure.                         |
| [changePasswordSchema.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/zod-schemas/changePasswordSchema.ts) | Defines schema for changing a users password, ensuring validation against specified requirements. Infers TypeScript type for password changes, enforcing structure and validation rules. Interacts with `zod` library and `passwordSchema`.           |
| [zod-config.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/zod-schemas/zod-config.ts)                     | Validates names and passwords in the parent React project. Ensures names meet length and character requirements. Verifies passwords have required characters and lengths. Promotes data integrity and authentication security.                        |
| [contactSchema.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/zod-schemas/contactSchema.ts)               | Defines contact form schema with validation rules for name, email, subject, and message. Ensures data integrity and structure compliance for contact form submissions within the React project.                                                       |
| [loginSchema.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/zod-schemas/loginSchema.ts)                   | Defines schema and type for login form validation in the React project. Ensures email format and password requirements adhering to the established validation rules.                                                                                  |

</details>

<details closed><summary>src.config.errors</summary>

| File                                                                                                                    | Summary                                                                                                                                                                                              |
| ---                                                                                                                     | ---                                                                                                                                                                                                  |
| [handleErrorResponse.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/errors/handleErrorResponse.ts) | Handles asynchronous errors from async operations by updating state with error messages extracted from responses. It ensures accurate error messaging for state management in the React application. |

</details>

<details closed><summary>src.config.types</summary>

| File                                                                                                               | Summary                                                                                                                                                                                                 |
| ---                                                                                                                | ---                                                                                                                                                                                                     |
| [authprovider.type.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/types/authprovider.type.ts) | Defines `AuthProviderProps` for authentication provider. Ensures component receives necessary props, like child components. Facilitates clear communication and usage by specifying required structure. |

</details>

<details closed><summary>src.config.interfaces</summary>

| File                                                                                                                        | Summary                                                                                                                                                                                                                                                         |
| ---                                                                                                                         | ---                                                                                                                                                                                                                                                             |
| [navlink.interface.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/interfaces/navlink.interface.ts)     | Defines structures for navigation links, NavBar properties, and navigation link component props. Ensures navigation components receive necessary details for creating menus, both for public and admin users.                                                   |
| [common.interface.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/interfaces/common.interface.ts)       | Defines the structure for generic response objects in the parent repository. Specifies success status, optional message, and error properties. Used for conveying operation outcomes across various parts of the application.                                   |
| [form-type.interface.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/interfaces/form-type.interface.ts) | Defines user signup and login data structures and form errors for validating user input during account creation and authentication. Facilitates ensuring the presence of necessary details for smooth user onboarding and error handling in the user interface. |

</details>

<details closed><summary>src.config.interfaces.transaction</summary>

| File                                                                                                                                                    | Summary                                                                                                                                                                                              |
| ---                                                                                                                                                     | ---                                                                                                                                                                                                  |
| [transaction-store.interface.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/interfaces/transaction/transaction-store.interface.ts) | Defines structure for transaction store with properties and methods for handling transactions in React application, ensuring necessary state management capabilities.                                |
| [transaction-type.interface.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/interfaces/transaction/transaction-type.interface.ts)   | Defines transaction structure with ID, payment status, total amount, user details, and associated reservations. Ensures consistent data format for managing transaction data within the application. |

</details>

<details closed><summary>src.config.interfaces.user</summary>

| File                                                                                                                               | Summary                                                                                                                                                                                                                     |
| ---                                                                                                                                | ---                                                                                                                                                                                                                         |
| [user-type.interface.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/interfaces/user/user-type.interface.ts)   | Defines user and user response structures for managing user data within the apps architecture. Ensures data consistency and format when interacting with user-related functionalities.                                      |
| [user-store.interface.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/interfaces/user/user-store.interface.ts) | List, selection, error handling, and CRUD operations. Provisions methods for fetching, updating users, and toggling user status. Maintains loading state and ensures necessary user data management within the application. |

</details>

<details closed><summary>src.config.interfaces.common</summary>

| File                                                                                                                                               | Summary                                                                                                                                                                                                                                                                           |
| ---                                                                                                                                                | ---                                                                                                                                                                                                                                                                               |
| [pagination-params.interface.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/interfaces/common/pagination-params.interface.ts) | Defines pagination parameters structure for data fetching, specifying limit, offset, sort by field, sort order, filter by field, and filter value. Ensures required data details are present for managing pagination, sorting, and filtering data effectively in the application. |
| [filter-params.interface.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/interfaces/common/filter-params.interface.ts)         | Defines filter parameters structure for sorting and filtering data in the React application. Ensures sort by field, sort order, filter by field, and filter value are appropriately defined for efficient data management.                                                        |

</details>

<details closed><summary>src.config.interfaces.reservation</summary>

| File                                                                                                                                                    | Summary                                                                                                                                                                                                                                                                                                |
| ---                                                                                                                                                     | ---                                                                                                                                                                                                                                                                                                    |
| [reservation-store.interface.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/interfaces/reservation/reservation-store.interface.ts) | Defines the structure of the reservation store handling state and actions. Ensures necessary properties and methods for managing reservation details and actions are included within the applications context.                                                                                         |
| [reservation-type.interface.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/interfaces/reservation/reservation-type.interface.ts)   | Defines reservation and ticket interfaces for managing reservation and ticket data within the React app, ensuring structured data containing details like price, title, and event information. Facilitates consistent handling of reservation and ticket objects to enhance application functionality. |

</details>

<details closed><summary>src.config.interfaces.cart</summary>

| File                                                                                                                                           | Summary                                                                                                                                                                                                                                                                           |
| ---                                                                                                                                            | ---                                                                                                                                                                                                                                                                               |
| [cart-item.interface.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/interfaces/cart/cart-item.interface.ts)               | Defines structures for cart and local cart items, ensuring necessary details exist for managing cart state. Includes properties for item details, event association, timestamps, and cart relation. Clarifies item price and formula calculation methods.                         |
| [cart-store.interface.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/interfaces/cart/cart-store.interface.ts)             | Defines structure and actions for managing cart state in the application. It specifies cart items, loading status, error handling, and methods to fetch, add, update, sync, remove items, and clear the cart. This interface ensures the cart store meets required functionality. |
| [local-cart-items.interface.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/interfaces/cart/local-cart-items.interface.ts) | Defines the structure and actions for managing local cart state. Ensures required properties and methods are present to handle local cart items within the applications context.                                                                                                  |

</details>

<details closed><summary>src.config.interfaces.ticket</summary>

| File                                                                                                                                   | Summary                                                                                                                                                                                                                                                                                                 |
| ---                                                                                                                                    | ---                                                                                                                                                                                                                                                                                                     |
| [ticket-type.interface.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/interfaces/ticket/ticket-type.interface.ts) | Defines TicketDescriptions interface structure for holding ticket descriptions in the React-JO repository. Each key denotes a ticket identifier, and its value describes the corresponding ticket. This interface ensures consistent typing for ticket information within the repositorys architecture. |

</details>

<details closed><summary>src.config.interfaces.authentication</summary>

| File                                                                                                                                               | Summary                                                                                                                                                                                                                                                                      |
| ---                                                                                                                                                | ---                                                                                                                                                                                                                                                                          |
| [auth-context.interface.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/interfaces/authentication/auth-context.interface.ts)   | Defines `AuthContextType` structure to manage authentication state in the React application. Ensures presence of `initialized`, `isAuthenticated`, and `userId` properties. Enables tracking context initialization status, user authentication, and user ID within the app. |
| [auth-store.interface.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/interfaces/authentication/auth-store.interface.ts)       | Defines the structure and actions for managing authentication state. Ensures the presence of properties and methods required for signup, login, logout, password changes, token refresh, route access, and user deletion within the applications authentication store.       |
| [auth-response.interface.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/interfaces/authentication/auth-response.interface.ts) | Defines interfaces for authentication responses in login and token scenarios. Ensures consistent structure for success status and authentication data, including access token and user ID. Essential for maintaining response integrity across authentication operations.    |

</details>

<details closed><summary>src.config.interfaces.event</summary>

| File                                                                                                                                        | Summary                                                                                                                                                                                            |
| ---                                                                                                                                         | ---                                                                                                                                                                                                |
| [event-response.interface.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/interfaces/event/event-response.interface.ts) | Defines the structure of event response objects, ensuring successful operation indicators and data handling compatibility.                                                                         |
| [event-store.interface.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/interfaces/event/event-store.interface.ts)       | Defines the event store structure with properties for event state and methods for event actions. Ensures consistency in event management across the application.                                   |
| [event-type.interface.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/config/interfaces/event/event-type.interface.ts)         | Defines structures for event details, types, and values with properties like ID, descriptions, pricing, and quantities. Ensures precise event data management within the application architecture. |

</details>

<details closed><summary>src.hoc</summary>

| File                                                                                                  | Summary                                                                                                                                                                                                                                         |
| ---                                                                                                   | ---                                                                                                                                                                                                                                             |
| [AdminRoute.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/hoc/AdminRoute.tsx)         | Enables access control for admin-only routes by utilizing the `useAuthStore` hook to verify the users role. Renders the specified component if the user is an admin; otherwise, redirects to the homepage.                                      |
| [ProtectedRoute.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/hoc/ProtectedRoute.tsx) | Secures routes for authenticated users in this repo by rendering components only if the user is authenticated. It utilizes `useAuthStore` to check user authentication status and redirects non-authenticated users to the authentication page. |

</details>

<details closed><summary>src.services</summary>

| File                                                                                                                   | Summary                                                                                                                                                                                                                                 |
| ---                                                                                                                    | ---                                                                                                                                                                                                                                     |
| [ReservationService.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/services/ReservationService.ts)       | Adding, finding, and retrieving for users and admins. Handles reservation data fetches by ID, with error handling. Supports reservation system functionalities in the React project structure.                                          |
| [EventService.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/services/EventService.ts)                   | Fetching values, filtered events, creating, updating, getting prices, and deleting. Handles event-related interactions with the server, ensuring successful data retrieval and modification.                                            |
| [UserService.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/services/UserService.ts)                     | Fetch all users, values, user by ID, update user, and make user inactive. Utilizes Axios for API calls. Helps maintain clean user-related logic within the repositorys service layer.                                                   |
| [AuthenticationService.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/services/AuthenticationService.ts) | Signup, login, password change, logout, token refresh, protected route access, and user deletion operations. Utilizes Axios for server communication in the AuthenticationService class within the src/services directory.              |
| [LocalCartService.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/services/LocalCartService.ts)           | Manages cart operations using browsers localStorage. Gets/sets cart ID/items, clears cart data. Retrieves, stores, and removes cart-related information securely.                                                                       |
| [CartService.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/services/CartService.ts)                     | Manages cart operations in the repository. Allows adding, finding, updating, and removing items from a users cart using server requests. Promotes seamless cart management within the application architecture.                         |
| [TransactionService.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/services/TransactionService.ts)       | Implements a service for handling transaction operations in the React application. Allows fetching all user transactions with pagination. Located in the `src/services/TransactionService.ts` file within the repositorys architecture. |

</details>

<details closed><summary>src.context</summary>

| File                                                                                                | Summary                                                                                                                                                                                                                                              |
| ---                                                                                                 | ---                                                                                                                                                                                                                                                  |
| [AuthContext.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/context/AuthContext.tsx) | Defines `AuthProvider` to manage authentication state and session initialization. Utilizes `useAuthStore` for state management and `LoadingPage` for loading indicator. Provides AuthContext to child components for access to authentication state. |

</details>

<details closed><summary>src.features</summary>

| File                                                                                       | Summary                                                                                                                                                                                                                             |
| ---                                                                                        | ---                                                                                                                                                                                                                                 |
| [Footer.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/features/Footer.tsx) | Defines a footer component rendering logo and navigation links, enhancing the websites visual appeal and user experience. Uses Tailwind CSS for styling and custom components like `MedalIcon` and `Link` for seamless integration. |

</details>

<details closed><summary>src.features.checkout</summary>

| File                                                                                                                                        | Summary                                                                                                                                                                                                                                        |
| ---                                                                                                                                         | ---                                                                                                                                                                                                                                            |
| [CheckoutSummary.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/features/checkout/CheckoutSummary.tsx)                       | Illustrates a checkout summary presentation in the cart. Groups items by type and computes total costs. Leverages custom components and hooks for UI and functionality. Creates a seamless review and payment section in the checkout process. |
| [CardOneTicket.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/features/checkout/CardOneTicket.tsx)                           | Displays and manages individual cart items-allows quantity adjustments and removal. Utilizes Tailwind CSS, custom components, and hooks for styling and functionality. Interfaces with state management for user-centric control.              |
| [CardFormule.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/features/checkout/CardFormule.tsx)                               | Illustrates a card component to display cart items under a specific price formula. Utilizes custom UI components for layout and individual item rendering. Leverages Tailwind CSS for styling.                                                 |
| [TotalEventTicketPerFormula.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/features/checkout/TotalEventTicketPerFormula.tsx) | Calculates total event ticket price and details per price formula. Displays group summary with event quantities and total cost. Efficiently uses useMemo hook and Tailwind CSS for styling.                                                    |

</details>

<details closed><summary>src.features.profile-user</summary>

| File                                                                                                                            | Summary                                                                                                                                                                                                                                            |
| ---                                                                                                                             | ---                                                                                                                                                                                                                                                |
| [CardNotification.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/features/profile-user/CardNotification.tsx)     | Defines notification preferences, featuring options for all notifications, mentions/comments only, or no notifications. Utilizes custom components for layout and notification icons. Allows users to select their preferred notification setting. |
| [CardChangePassword.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/features/profile-user/CardChangePassword.tsx) | Enables users to change their account password securely. Renders a card with fields for old and new passwords. Utilizes form handling with validation, displaying success/failure notifications. Logs out after successful password update.        |
| [CardProfile.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/features/profile-user/CardProfile.tsx)               | Creates a reusable component CardProfile for updating user profiles. Utilizes form handling and validation, fetches user data on mount/select change, and updates profiles with toast notifications.                                               |
| [HeaderProfileUser.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/features/profile-user/HeaderProfileUser.tsx)   | Showcases user profile info in a hero section with background image and avatar. Utilizes custom Tailwind CSS styles and components for avatar rendering. Features include users name, email display, and fallback initials.                        |
| [CardAccount.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/features/profile-user/CardAccount.tsx)               | Manages account settings, logout, and account deletion. Incorporates confirmation dialog with state management. Utilizes authentication store and toast notifications. Promotes user interaction for secure actions like account deletion.         |
| [CardSecurity.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/features/profile-user/CardSecurity.tsx)             | Card layout, Button actions, and Switch component for two-factor authentication toggle.                                                                                                                                                            |

</details>

<details closed><summary>src.features.reservations</summary>

| File                                                                                                                        | Summary                                                                                                                                                                                                                              |
| ---                                                                                                                         | ---                                                                                                                                                                                                                                  |
| [AllReservations.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/features/reservations/AllReservations.tsx)   | Displays a list of reservations with pagination, filtering, and sorting options. Fetches transaction data, renders transactions with details, and utilizes Tailwind CSS, custom components, and hooks for functionality and styling. |
| [HeroReservation.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/features/reservations/HeroReservation.tsx)   | Displays users reservations summary with event and ticket counts.-Utilizes Tailwind CSS with custom hooks and stores for state management and data fetching.-Dynamically fetches user data and reservations on authentication.       |
| [CardReservations.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/features/reservations/CardReservations.tsx) | Renders reservation details, event info, and price in a stylish card layout.-Includes view ticket button for approved payments, utilizing various custom UI components and icons.-Leverages Tailwind CSS for styling consistency.    |

</details>

<details closed><summary>src.features.cart</summary>

| File                                                                                                                    | Summary                                                                                                                                                                                                                                                               |
| ---                                                                                                                     | ---                                                                                                                                                                                                                                                                   |
| [CartPopoverPreview.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/features/cart/CartPopoverPreview.tsx) | Renders a popover displaying cart items, total price, and actions. Relies on Tailwind CSS, custom components, hooks, and stores for functionality. Handles item deletion and checkout navigation based on user authentication.                                        |
| [CartItems.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/features/cart/CartItems.tsx)                   | Enables rendering grouped cart items by event titles with delete functionality. Utilizes Tailwind CSS for styling and custom UI components like Button and TrashIcon for the delete action. Contributing to a structured e-commerce feature within the React project. |

</details>

<details closed><summary>src.features.events.selected-event</summary>

| File                                                                                                                                     | Summary                                                                                                                                                                                                                                                                        |
| ---                                                                                                                                      | ---                                                                                                                                                                                                                                                                            |
| [OverviewOneEvent.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/features/events/selected-event/OverviewOneEvent.tsx)     | Illustrates an Olympic event overview with details on ticket sales, availability, and pricing. Utilizes custom components for cards, icons, and content separation, styled with Tailwind CSS. Aimed at enhancing user experience within the React applications event features. |
| [AddItemEventToCart.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/features/events/selected-event/AddItemEventToCart.tsx) | Enables selecting ticket types, quantities, and adding tickets to the cart. Utilizes Tailwind CSS for styling and custom components/hooks for ticket management. Facilitates smooth user interaction with event purchasing functionalities.                                    |

</details>

<details closed><summary>src.features.events.all-events</summary>

| File                                                                                                                               | Summary                                                                                                                                                                                                                    |
| ---                                                                                                                                | ---                                                                                                                                                                                                                        |
| [EventsMainContent.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/features/events/all-events/EventsMainContent.tsx) | Captures and displays event content with filtering, sorting, pagination, and loading states. Utilizes custom components, hooks, and stores within the React app architecture.                                              |
| [EventCard.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/features/events/all-events/EventCard.tsx)                 | Renders an event card displaying title, description, category, quantity, dates. Utilizes Tailwind CSS and custom components for styling. Formats dates, selects icon based on category. Includes a button to view details. |

</details>

<details closed><summary>src.features.ticket</summary>

| File                                                                                                        | Summary                                                                                                                                                                                                                                |
| ---                                                                                                         | ---                                                                                                                                                                                                                                    |
| [TicketModal.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/features/ticket/TicketModal.tsx) | Showcases a TicketModal component that fetches reservation details and displays a QR code for tickets. Utilizes Tailwind CSS for styling and custom components for the modal layout. Relies on useReservationStore hook to fetch data. |

</details>

<details closed><summary>src.features.home</summary>

| File                                                                                                            | Summary                                                                                                                                                                                                                                                                                                 |
| ---                                                                                                             | ---                                                                                                                                                                                                                                                                                                     |
| [SectionTickets.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/features/home/SectionTickets.tsx) | Illustrates a call-to-action section for acquiring event tickets. Utilizes Tailwind CSS for styling and incorporates a Separator component for visual delineation. Employs a Link component from wouter for client-side navigation to the events page.                                                  |
| [Hero.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/features/home/Hero.tsx)                     | Illustrates the main hero section of the website with dynamic navigation links based on user authentication status. Utilizes Tailwind CSS for styling and includes a background image, title, description, and action buttons for exploring events or managing reservations.                            |
| [ExploreVenue.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/features/home/ExploreVenue.tsx)     | Showcases Paris 2024 Olympics with event venue overview. Utilizes Tailwind CSS for styling. Contains description and image sections. Celebrates historical significance of the upcoming games in Paris, France.                                                                                         |
| [PresentSports.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/features/home/PresentSports.tsx)   | Showcases a news section with images, titles, and summaries related to the Olympics. Uses Tailwind CSS for styling, includes separators for section division, and client-side navigation with wouter. Aiming for a visually appealing and informative display of the latest Olympic news in Paris 2024. |
| [Highlights.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/features/home/Highlights.tsx)         | Showcases Olympics highlights with title, subtitle, and three moments. Uses Tailwind CSS for styling, featuring custom components like GenericTitle for text display and icons such as MedalIcon and FlameIcon. Includes Separator for section organization.                                            |

</details>

<details closed><summary>src.features.dashboard.EventDashboard</summary>

| File                                                                                                                                          | Summary                                                                                                                                                                                                                                                                                                          |
| ---                                                                                                                                           | ---                                                                                                                                                                                                                                                                                                              |
| [EventsDashboard.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/features/dashboard/EventDashboard/EventsDashboard.tsx)         | Manages and displays an interactive events dashboard with CRUD operations. Utilizes Tailwind CSS and custom components, hooks, and stores for filtering, sorting, pagination, and event management. Critical features include event data table, editing sidebar, deletion confirmation, and dynamic UI elements. |
| [EditEventSideBar.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/features/dashboard/EventDashboard/EditEventSideBar.tsx)       | Enables editing event details in a sidebar component. Utilizes custom UI elements for input fields and buttons. Manages form state with event data. Allows users to save changes or cancel edits. Follows a modular architecture within the React project.                                                       |
| [AlertDialogAddEvent.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/features/dashboard/EventDashboard/AlertDialogAddEvent.tsx) | Enables event addition through a button-triggered dialog in the React app. Utilizes custom components for styling and functionality. Coordinated state management and form submission success handling.                                                                                                          |

</details>

<details closed><summary>src.features.dashboard.UsersDashboard</summary>

| File                                                                                                                                | Summary                                                                                                                                                                                                                                       |
| ---                                                                                                                                 | ---                                                                                                                                                                                                                                           |
| [UsersDashboard.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/features/dashboard/UsersDashboard/UsersDashboard.tsx) | Manages users dashboard display, filtering, sorting, pagination, and deletion operations. Utilizes various UI elements, custom components, hooks, and stores within the repositorys architecture for seamless user state and data management. |

</details>

<details closed><summary>src.features.payment</summary>

| File                                                                                                                             | Summary                                                                                                                                                                                                                                                                 |
| ---                                                                                                                              | ---                                                                                                                                                                                                                                                                     |
| [StatusPayment.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/features/payment/StatusPayment.tsx)                 | Generates a payment status display based on transaction details.-Renders icons and relevant information.-Utilizes memoization and clears the cart post-payment.-Navigates to homepage upon interaction.                                                                 |
| [ButtonCheckoutPayment.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/features/payment/ButtonCheckoutPayment.tsx) | Implements the ButtonCheckoutPayment component managing the checkout process, loading states, and payment status display. Utilizes Tailwind CSS and custom components/hooks. Integrates with authentication and reservation stores for state management and navigation. |

</details>

<details closed><summary>src.features.navbar</summary>

| File                                                                                                              | Summary                                                                                                                                                                                                                                                                        |
| ---                                                                                                               | ---                                                                                                                                                                                                                                                                            |
| [NavBar.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/features/navbar/NavBar.tsx)                 | Defines NavBar component rendering navigation bar with links, cart preview, and user account options. Utilizes Tailwind CSS for styling and custom components like DropDownAccount and CartPopoverPreview. Handles navigation using useTransition and useLocation from wouter. |
| [SideBarMenu.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/features/navbar/SideBarMenu.tsx)       | Defines a sidebar navigation menu component that toggles based on screen size. Utilizes custom components for menu functionality and icons. Renders links for different user roles.                                                                                            |
| [SideBarDesktop.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/features/navbar/SideBarDesktop.tsx) | Defines navigation options on large screens using custom icons and allows switching between components. Utilizes Tailwind CSS for styling. Includes buttons for events and users with corresponding icons. Exposes a function to set the active component.                     |

</details>

<details closed><summary>src.features.filter-sorting</summary>

| File                                                                                                                            | Summary                                                                                                                                                                                                                                                          |
| ---                                                                                                                             | ---                                                                                                                                                                                                                                                              |
| [FilterDropdown.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/features/filter-sorting/FilterDropdown.tsx)       | Enables filtering options via a styled dropdown menu, categorizing filter choices and handling selection changes. Utilizes Tailwind CSS and custom components like DropdownMenu and Button for functionality, enhancing user experience in the React project.    |
| [SortOrderDropdown.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/features/filter-sorting/SortOrderDropdown.tsx) | Enables selection of sort order in dropdown menu. Uses Tailwind CSS and custom components like DropdownMenu for functionality, Button for trigger, and ArrowUpDownIcon for icon. Connected to sortOrder state for updates.                                       |
| [SortByDropdown.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/features/filter-sorting/SortByDropdown.tsx)       | Enables user sorting via a dropdown menu with customizable criteria. Employs Tailwind CSS for styling and relies on custom components for interactive functionality. Facilitates dynamic sorting selection within the React projects feature-based architecture. |

</details>

<details closed><summary>src.features.header</summary>

| File                                                                                                                | Summary                                                                                                                                                                                                                                                |
| ---                                                                                                                 | ---                                                                                                                                                                                                                                                    |
| [DropDownAccount.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/features/header/DropDownAccount.tsx) | Implements a Dropdown Account menu for user actions in the React application. Utilizes Tailwind CSS for styling and integrates custom components and hooks like DropdownMenu, useAuthStore, useUserStore, useToast, and useLocation for functionality. |
| [Header.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/features/header/Header.tsx)                   | Defines the main header component for the app, featuring navigation, authentication status, and item counts. Utilizes Tailwind CSS, custom components, and hooks for functionality.                                                                    |

</details>

<details closed><summary>src.stores</summary>

| File                                                                                                             | Summary                                                                                                                                                                                                                                                                            |
| ---                                                                                                              | ---                                                                                                                                                                                                                                                                                |
| [useAuthStore.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/stores/useAuthStore.ts)               | Manages authentication state & actions. Handles signup, login, logout, token refresh, and password change for users. Utilizes Zustand store for state management. Works closely with `AuthenticationService`, `useCartStore`, and `useLocalCartStore`.                             |
| [useTransactionStore.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/stores/useTransactionStore.ts) | Manages transaction state with Zustand, featuring functions to fetch transactions with pagination. A central store for handling transaction-related operations like fetching data for display in the React applications UI.                                                        |
| [useReservationStore.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/stores/useReservationStore.ts) | Adding, fetching, and updating reservations. Implements a Zustand store in the React app for seamless reservation handling and data management.                                                                                                                                    |
| [useCartStore.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/stores/useCartStore.ts)               | Handles cart state and actions such as adding, updating, syncing, fetching, and removing cart items. Manages local and server-side interactions seamlessly for a robust e-commerce experience.                                                                                     |
| [useEventStore.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/stores/useEventStore.ts)             | Manages event state with actions like fetching, adding, updating, and deleting events. Provides functions for pagination, getting event values, prices, and details, and performing CRUD operations on events. Uses Zustand and interfaces for event management in the repository. |
| [useLocalCartStore.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/stores/useLocalCartStore.ts)     | Manages local cart state in the repository by providing functions to add, update, remove, and clear cart items. Utilizes Zustand store and handles interactions with LocalCartService.                                                                                             |
| [useUserStore.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/stores/useUserStore.ts)               | Fetching, updating, and deactivating users. Utilizes Zustand for user store functionality, interacting with UserService for data operations. Updates local user list when necessary.                                                                                               |

</details>

<details closed><summary>src.components.skeletons</summary>

| File                                                                                                                                 | Summary                                                                                                                                                                                                                                                   |
| ---                                                                                                                                  | ---                                                                                                                                                                                                                                                       |
| [SkelettonCheckoutPage.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/skeletons/SkelettonCheckoutPage.tsx) | Generates skeleton placeholders for the checkout page components such as cards and summary, enhancing the user experience by providing visual cues during loading. Uses custom components like Header, EventHero, GenericTitle, and Skeleton for styling. |

</details>

<details closed><summary>src.components.notlogging</summary>

| File                                                                                                                    | Summary                                                                                                                                                                                                                                                                         |
| ---                                                                                                                     | ---                                                                                                                                                                                                                                                                             |
| [CartNotLogging.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/notlogging/CartNotLogging.tsx) | Defines a component in the repository structure that informs users they are not logged in. Utilizes Tailwind CSS, custom components, and icons for styling and functionality. Prominently features a page header, user icon, informative message, and a link to the login page. |

</details>

<details closed><summary>src.components.empty</summary>

| File                                                                                                                   | Summary                                                                                                                                                                                                  |
| ---                                                                                                                    | ---                                                                                                                                                                                                      |
| [CheckoutEmpty.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/empty/CheckoutEmpty.tsx)       | Illustrates an empty shopping cart message UI with a header, icon, and link for event browsing. Utilizes Tailwind CSS for styling and integrates custom components like `Header` and `ShoppingCartIcon`. |
| [ReservationEmpty.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/empty/ReservationEmpty.tsx) | Defines `ReservationEmpty` component in react-jo repository to show no reservations found. Utilizes Tailwind CSS for styling and depends on custom `CalendarIcon` component.                             |

</details>

<details closed><summary>src.components.hero</summary>

| File                                                                                                                      | Summary                                                                                                                                                                                                                                                                                                              |
| ---                                                                                                                       | ---                                                                                                                                                                                                                                                                                                                  |
| [GenericTitle.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/hero/GenericTitle.tsx)             | Defines a customizable `GenericTitle` component for rendering titles and optional subtitles with responsive visibility based on device type. Utilizes Tailwind CSS for styling and classNames for dynamic class application.                                                                                         |
| [EventHero.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/hero/EventHero.tsx)                   | Showcases** a visually appealing hero section for events, incorporating a background image and label. Utilizes Tailwind CSS for styling, enhancing the repositorys UI components.                                                                                                                                    |
| [FilterBarDashboard.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/hero/FilterBarDashboard.tsx) | Defines a responsive `FilterBarDashboard` component with a title and back button for small screens. Utilizes Tailwind CSS, `Button`, and `ArrowLeftIcon` components. Contributes to enhancing user experience by providing a visually appealing and functional filter bar within the repositorys React architecture. |

</details>

<details closed><summary>src.components.ui</summary>

| File                                                                                                                  | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---                                                                                                                   | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [IconComponents.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/ui/IconComponents.tsx)       | The code file `App.tsx` in the `src` directory of the repository serves as the main entry point for the React application. It orchestrates the rendering and composition of various components, hooks, and context providers that define the user interface and application logic. Through this file, the application structure and flow are established, connecting different features and functionalities to deliver a cohesive and interactive user experience. |
| [radio-group.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/ui/radio-group.tsx)             | Implements custom RadioGroup and RadioGroupItem components for UI functionality using React and Radix UI. Enhances accessibility and user interaction in the React application. Supports dynamic styling and interactions for radio inputs.                                                                                                                                                                                                                        |
| [use-toast.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/components/ui/use-toast.ts)                   | Enables managing toast notifications in React apps. Implements adding, updating, and dismissing toasts with optional auto-removal. Offers a hook to access toast functionality easily within components.                                                                                                                                                                                                                                                           |
| [input.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/ui/input.tsx)                         | Defines a reusable input component for React forms. Enhances user experience by styling and handling input interactions consistently throughout the application. This component abstracts common input properties, simplifying the development of form elements within the repositorys architecture.                                                                                                                                                               |
| [toggle.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/ui/toggle.tsx)                       | Defines `Toggle` component styles with variant support for different sizes and styles. Integrates with Radix UI Toggle. Facilitates reusability and consistency for UI components across the React project.                                                                                                                                                                                                                                                        |
| [toast.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/ui/toast.tsx)                         | Defines customizable toast components for reactive user notifications, including variants like success and destructive. Facilitates toast creation, actions, and styling within the React applications UI component architecture.                                                                                                                                                                                                                                  |
| [dialog.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/ui/dialog.tsx)                       | Defines reusable dialog components for UI interactions in the React application. Facilitates creating, styling, and managing Dialog, including triggers, content, headers, footers, titles, and descriptions. An integral part of the repositorys UI components architecture.                                                                                                                                                                                      |
| [tooltip.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/ui/tooltip.tsx)                     | Enables tooltip functionality for React components using Radix UI. Integrates Provider, Root, Trigger, and Content components to manage tooltip display. Supports custom styling and animations for enhanced user interaction.                                                                                                                                                                                                                                     |
| [textarea.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/ui/textarea.tsx)                   | Defines a reusable Textarea component for React forms, extending native properties. Adds CSS classes via `cn` utility for styling consistency within the repositorys UI components.                                                                                                                                                                                                                                                                                |
| [tabs.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/ui/tabs.tsx)                           | Defines custom UI tabs components leveraging @radix-ui/react-tabs for enhanced user interaction. Contributes to encapsulating tab functionalities within a React component structure, promoting reusability and maintainability across the projects UI elements module.                                                                                                                                                                                            |
| [checkbox.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/ui/checkbox.tsx)                   | Enables custom checkbox styling with accessibility features. Integrates Radix UI and Lucide icons for a consistent user experience.                                                                                                                                                                                                                                                                                                                                |
| [pagination.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/ui/pagination.tsx)               | Defines reusable React components for a pagination interface with navigation controls and ellipsis indicators. The components facilitate responsive design and accessibility while adhering to the parent repositorys UI architecture.                                                                                                                                                                                                                             |
| [sonner.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/ui/sonner.tsx)                       | Enables creating themed toasts seamlessly by integrating next-themes for dynamic theming and sonner for toast rendering, enhancing user experience.                                                                                                                                                                                                                                                                                                                |
| [alert.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/ui/alert.tsx)                         | Defines styled alert components for React with variant styles based on alert type. Supports custom styling and allows dynamic content for titles and descriptions. Enhances user interface consistency and flexibility in showcasing alerts across the application.                                                                                                                                                                                                |
| [multi-step-loader.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/ui/multi-step-loader.tsx) | Implements a MultiStepLoader component displaying dynamic loading states with animations. Manages visual feedback for loading progress interactively within the React application.                                                                                                                                                                                                                                                                                 |
| [badge.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/ui/badge.tsx)                         | Implements customizable badges for UI components with different variants like primary, secondary, and destructive. Enhances visual appeal and user interaction in the React-based projects component library.                                                                                                                                                                                                                                                      |
| [select.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/ui/select.tsx)                       | Implements custom UI components for the select input, enhancing user experience; includes styles, triggers, scroll buttons, content handling, labels, items, and separators.                                                                                                                                                                                                                                                                                       |
| [progress.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/ui/progress.tsx)                   | Implements a customizable UI progress component using @radix-ui/react-progress. Intended to display dynamic progress visually within the React application, enhancing user experience.                                                                                                                                                                                                                                                                             |
| [drawer.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/ui/drawer.tsx)                       | Defines reusable UI components for a drawer feature. Includes components for trigger, portal, overlay, content, header, footer, title, and description. Enhances user experience in React applications by providing a consistent and flexible way to display interactive drawers.                                                                                                                                                                                  |
| [table.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/ui/table.tsx)                         | Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, and TableCaption, enhancing code reusability and maintainability within the React projects architecture.                                                                                                                                                                                                                                                                               |
| [alert-dialog.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/ui/alert-dialog.tsx)           | Enables user interaction through customizable dialogs in the React application. Abstracts dialog components, including triggers, overlays, headers, footers, titles, descriptions, and actions, enhancing UI accessibility and user experience.                                                                                                                                                                                                                    |
| [skeleton.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/ui/skeleton.tsx)                   | Defines a reusable Skeleton component handling UI loading states, enhancing user experience. Incorporated within the UI components to simplify visual feedback implementation, streamlining development in the React-based repository architecture.                                                                                                                                                                                                                |
| [dropdown-menu.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/ui/dropdown-menu.tsx)         | Defines reusable React components for a dropdown menu UI with various interactive elements like items, checkboxes, and radio buttons. Enhances user experience and streamlines interface design within the repositorys React application.                                                                                                                                                                                                                          |
| [button.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/ui/button.tsx)                       | Defines button styles, sizes, and behaviors with variants for customization, ensuring visual consistency across the UI components. Facilitates dynamic rendering as a button or child slot. Contributes to maintaining a uniform design language in the React component ecosystem.                                                                                                                                                                                 |
| [form.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/ui/form.tsx)                           | Enables structured form composition with React components for the UI, including labels, controls, descriptions, and error messages. Encourages reusability and ease of form management within the parent repositorys architecture.                                                                                                                                                                                                                                 |
| [label.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/ui/label.tsx)                         | Creates a reusable React label component with variant styles for the parent repositorys UI library. Utilizes Radix UI for a base label component and Class Variance Authority for managing dynamic class variations. Ideal for consistent and accessible label styling across the application.                                                                                                                                                                     |
| [carousel.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/ui/carousel.tsx)                   | Enables carousel functionality with navigation controls, orientation options, and accessibility features. Contextualizes and coordinates carousel components within a React application, providing seamless interaction and display of content.                                                                                                                                                                                                                    |
| [collapsible.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/ui/collapsible.tsx)             | Enables collapsible UI functionality via `@radix-ui/react-collapsible` in the React project. Exports Collapsible component and its Trigger and Content components for use within the UI component library.                                                                                                                                                                                                                                                         |
| [avatar.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/ui/avatar.tsx)                       | Defines customizable Avatar components using Radix UIs AvatarPrimitive for a React application. Exports Avatar, AvatarImage, and AvatarFallback components with specific styling and functionality for displaying user avatars.                                                                                                                                                                                                                                    |
| [popover.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/ui/popover.tsx)                     | Defines UI popover components for React app using @radix-ui/react-popover. Popover, PopoverTrigger, and PopoverContent manage interactive popover behavior and styling, enhancing user experience across the apps interface components.                                                                                                                                                                                                                            |
| [toggle-group.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/ui/toggle-group.tsx)           | Enables creating toggle groups with customizable variants and sizes. Contextualizes toggle variants within group. Facilitates toggling functionality in React components following pre-defined styling and customization options.                                                                                                                                                                                                                                  |
| [IconCategories.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/ui/IconCategories.tsx)       | Maps various sports categories to corresponding icons from different icon libraries for visual representation in the UI. Enhances user experience by associating specific activities with intuitive visual elements, enriching the overall design and usability of the application.                                                                                                                                                                                |
| [breadcrumb.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/ui/breadcrumb.tsx)               | Exposes UI components for breadcrumbs, including list, item, link, page, separator, and ellipsis. Supports flexible styling and accessibility in the React-based web app architecture.                                                                                                                                                                                                                                                                             |
| [card.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/ui/card.tsx)                           | Defines reusable UI components for cards in the React project. Includes Card, CardHeader, CardTitle, CardDescription, CardContent, and CardFooter with respective styling and functionality. Encapsulates card-related presentation logic for easy integration and maintenance in the app.                                                                                                                                                                         |
| [toaster.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/ui/toaster.tsx)                     | Enables displaying interactive toasts within the UI by utilizing the ToastProvider and useToast custom hooks. Renders Toast components with dynamic content based on incoming data. Key component in enhancing user experience in the React application.                                                                                                                                                                                                           |
| [switch.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/ui/switch.tsx)                       | Enables custom styling and functionality for a switch component in a React project. Integrates Radix UI for switch primitives, applying dynamic classes for different states. Enhances user experience by offering visual feedback and accessibilit.                                                                                                                                                                                                               |
| [separator.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/ui/separator.tsx)                 | Defines a customizable UI separator component using Radix UI for React, enhancing visual elements across the application.                                                                                                                                                                                                                                                                                                                                          |
| [navigation-menu.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/ui/navigation-menu.tsx)     | Defines UI components for an interactive navigation menu. Includes trigger, list, item, content, link, indicator, and viewport elements with dynamic styles and animations. Enhances user experience in React web applications.                                                                                                                                                                                                                                    |
| [sheet.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/ui/sheet.tsx)                         | Defines components for a modal sheet UI, integrating with Radix UI. Handles sheet variant styles, content structure, header, footer, title, and description presentation. Supports triggering and closing sheet interactions within the React application architecture.                                                                                                                                                                                            |

</details>

<details closed><summary>src.components.form</summary>

| File                                                                                                                | Summary                                                                                                                                                                                                                                                                            |
| ---                                                                                                                 | ---                                                                                                                                                                                                                                                                                |
| [InputFieldEvent.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/form/InputFieldEvent.tsx) | Defines an adaptable input field component with label and error support, accommodating text, number, and date types. Utilizes Tailwind CSS and custom Input and Label components for styling.                                                                                      |
| [LoginForm.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/form/LoginForm.tsx)             | Enables user authentication via a login form. Implements form validation, error handling, and password visibility toggling. Utilizes various custom components and hooks for form management, navigation, state handling, and notifications in the React application architecture. |
| [SignUpForm.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/form/SignUpForm.tsx)           | Enables user registration with a sign-up form in the React app. Integrates form validation, schema validation, password visibility toggle, and toast notifications. Utilizes Tailwind CSS, custom components, and hooks for seamless registration flow.                            |
| [FormAddNewEvent.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/form/FormAddNewEvent.tsx) | Creates a form component for adding new events with input fields for title, dates, category selection, price, quantity, and descriptions. Utilizes custom components, hooks, and Tailwind CSS for styling within the React-based repository structure.                             |

</details>

<details closed><summary>src.components.alert</summary>

| File                                                                                                                   | Summary                                                                                                                                                                                                                                        |
| ---                                                                                                                    | ---                                                                                                                                                                                                                                            |
| [AlertDestructive.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/alert/AlertDestructive.tsx) | Defines AlertDestructive component rendering an error alert with custom icons and layout. This component serves to display error messages using Tailwind CSS styling within the broader React application structure defined in the repository. |

</details>

<details closed><summary>src.components.tables</summary>

| File                                                                                                                    | Summary                                                                                                                                                                                                                                      |
| ---                                                                                                                     | ---                                                                                                                                                                                                                                          |
| [TableGenericData.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/tables/TableGenericData.tsx) | Generates customizable, action-packed tables for displaying tabular data with custom content and dropdown menu actions. Employs Tailwind CSS and custom UI components from the repositorys structure for enhanced styling and functionality. |

</details>

<details closed><summary>src.components.select</summary>

| File                                                                                                                    | Summary                                                                                                                                                                                                                                     |
| ---                                                                                                                     | ---                                                                                                                                                                                                                                         |
| [QuantitySelector.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/select/QuantitySelector.tsx) | Enables quantity adjustment with increment and decrement buttons. Integrates Tailwind CSS for styling and custom components. Enhances user experience in managing quantity values within the React projects component architecture.         |
| [SelectEventTypes.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/select/SelectEventTypes.tsx) | Enables selecting event types with corresponding quantities. Utilizes custom dropdown components and Tailwind CSS for styling. Facilitates dynamic updates based on selected event type. Integrated with PriceFormula enum for event types. |

</details>

<details closed><summary>src.components.pagination</summary>

| File                                                                                                                              | Summary                                                                                                                                                                |
| ---                                                                                                                               | ---                                                                                                                                                                    |
| [PaginationComponent.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/pagination/PaginationComponent.tsx) | Implements a pagination UI component enabling navigation through pages. Utilizes Tailwind CSS with custom pagination components and a hook to manage pagination items. |

</details>

<details closed><summary>src.components.collapsible</summary>

| File                                                                                                                                     | Summary                                                                                                                                                                                                                                                                      |
| ---                                                                                                                                      | ---                                                                                                                                                                                                                                                                          |
| [DescriptionCollapsible.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/collapsible/DescriptionCollapsible.tsx) | Presents `DescriptionCollapsible` component displaying short description with collapsible long description section.-Relies on Tailwind CSS, custom `Collapsible` components, and `ChevronRightIcon`.-Enhances user experience by providing expandable content functionality. |

</details>

<details closed><summary>src.components.cards</summary>

| File                                                                                                                                 | Summary                                                                                                                                                                                                                                        |
| ---                                                                                                                                  | ---                                                                                                                                                                                                                                            |
| [ImagesCoverEvent.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/cards/ImagesCoverEvent.tsx)               | Displays a grid of event images with links and a button to show all photos. Utilizes Tailwind CSS for styling and custom components like Button and GripIcon. Incorporates wouter for navigation.                                              |
| [CardPromoCode.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/cards/CardPromoCode.tsx)                     | Defines a promo code entry feature. Utilizes custom card components and interactive elements for a seamless user experience. Incorporated with Tailwind CSS for a polished visual presentation within the repositorys UI component structure.  |
| [CardPaymentCheckout.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/cards/CardPaymentCheckout.tsx)         | Defines payment checkout options with credit card and PayPal, leveraging custom UI components and icons within the React-based repository architecture.                                                                                        |
| [HeaderCardInfoDashboard.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/cards/HeaderCardInfoDashboard.tsx) | Defines HeaderCardInfoDashboard component displaying styled cards with titles, values, and icons. Utilizes custom Card components and Tailwind CSS for layout, enhancing user dashboard readability by presenting key information effectively. |

</details>

<details closed><summary>src.components.button</summary>

| File                                                                                                                | Summary                                                                                                                                                                                                                        |
| ---                                                                                                                 | ---                                                                                                                                                                                                                            |
| [ButtonBack.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/button/ButtonBack.tsx)         | Enables back navigation with a button using a custom icon for the React application. Integrates Tailwind CSS for styling and accessibility support.                                                                            |
| [ReturnButton.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/button/ReturnButton.tsx)     | Implements a ReturnButton component linking to event pages with a back navigation icon and an accessibility label. Utilizes Tailwind CSS, LogOutIcon, and wouter for styling and navigation.                                   |
| [ButtonAddEvent.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/button/ButtonAddEvent.tsx) | Defines `ButtonAddEvent` component offering event header and new event button. Utilizes Tailwind CSS, `Button` layout, and `PlusIcon` for styling. Situated in `src/components` directory within the repos React architecture. |

</details>

<details closed><summary>src.components.dialog</summary>

| File                                                                                                                        | Summary                                                                                                                                                                                        |
| ---                                                                                                                         | ---                                                                                                                                                                                            |
| [AlertDialogGeneric.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/components/dialog/AlertDialogGeneric.tsx) | Defines a customizable alert dialog component, handling dialog state and user actions. Utilizes custom UI components and Tailwind CSS for styling within the repositorys overall architecture. |

</details>

<details closed><summary>src.hooks</summary>

| File                                                                                                                  | Summary                                                                                                                                                                                                                                                                                            |
| ---                                                                                                                   | ---                                                                                                                                                                                                                                                                                                |
| [useGroupByTicketType.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/hooks/useGroupByTicketType.tsx)   | Groups and sorts cart items by price formula, ensuring optimization and recalculates only on item array changes. Enhances grouping efficiency with predefined order, utilizing the `useMemo` hook for improved performance.                                                                        |
| [index.ts](https://github.com/Binary-Blade/react-jo/blob/master/src/hooks/index.ts)                                   | Exports custom hooks for managing event data, confirmation dialogs, event forms, filtering, date formatting, ticket grouping, pagination, price reduction, and ticket management in the React app. Organizes reusable logic into separate modules for enhanced code structure and maintainability. |
| [useTicketManager.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/hooks/useTicketManager.tsx)           | Manages ticket selection, fetches price based on type and event, calculates total price. Utilizes state management with `useState`, `useEffect` for data fetching, and memoizes price update function with `useCallback`.                                                                          |
| [useDisplayTotalItems.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/hooks/useDisplayTotalItems.tsx)   | Fetches local and server cart items, optimizes with `useMemo`. Supports `useDisplayTotalItems` and `useDisplayTotalCommands` hooks to display total quantities in local and server carts.                                                                                                          |
| [useEventForm.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/hooks/useEventForm.tsx)                   | Manages event form logic for state, validation, and submission. Utilizes zod for schema validation, useState for state management, and useToast for notifications. Handles form input changes, category selection, and submission with error handling.                                             |
| [useDelConfirmation.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/hooks/useDelConfirmation.tsx)       | Manages deletion confirmations, state, errors, and notifications for items via a custom hook `useDelConfirmation`. Utilizes `useToast` for notifications, `useState`, and `useCallback`. Handles item deletion with given function and element ID.                                                 |
| [useGroupByTitle.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/hooks/useGroupByTitle.tsx)             | Optimizes grouping of local cart items by title in the parent repository. Uses `useMemo` for efficiency, ensuring recalculation only with item array changes.                                                                                                                                      |
| [useUserInitial.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/hooks/useUserInitial.tsx)               | Generates user initials efficiently based on first and last names using the `useMemo` hook for optimized performance.                                                                                                                                                                              |
| [useFilter.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/hooks/useFilter.tsx)                         | Manages sorting and filtering state with `useFilter` hook, offering setters for criteria. Facilitates control over sorting fields and orders, along with filtering fields and values. Integrates `useState` for state management in React applications.                                            |
| [useAggregateUsersData.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/hooks/useAggregateUsersData.tsx) | Calculates total clients, revenue, and new sign-ups based on user data fetched using `useUserStore`. Updates state on data change using `useEffect`. Centralizes aggregation logic and enhances data presentation for user metrics.                                                                |
| [usePagination.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/hooks/usePagination.tsx)                 | Calculates total pages and offset based on page limit and current page number. Provides methods to set current page and limit. Optimizes calculations using memoization techniques.                                                                                                                |
| [useAggregateEventData.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/hooks/useAggregateEventData.tsx) | Calculates and aggregates event data by tracking total quantity, total sold items, and total revenue utilizing the `useEventStore` to access event information. Updates data dynamically when event details change, ensuring accurate and up-to-date aggregated statistics for the application.    |
| [useReducePrice.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/hooks/useReducePrice.tsx)               | Calculates total price, taxes, and total with taxes for given items using a custom hook. Utilizes `useMemo` to optimize calculation and format values for currency display. Dynamically updates based on items, property extractor, and tax rate changes.                                          |
| [usePaginationRange.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/hooks/usePaginationRange.tsx)       | Calculates pagination range for display around current page in `react-jo` project. Utilizes `useMemo` to optimize computations based on current and total pages. Aids in showing relevant page numbers efficiently in pagination components.                                                       |
| [useFormattedDates.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/hooks/useFormattedDates.tsx)         | Formats date intervals in French using `date-fns` and the `fr` locale. Handles cases where dates are in the same or different years. Handles errors in formatting dates.                                                                                                                           |
| [useContactForm.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/hooks/useContactForm.tsx)               | Facilitates contact form submission handling using `react-hook-form`, `zod` schema validation, and `useToast` notifications. Manages form fields, validation, submission, and success messages. Returns key form functions for seamless integration within the React project.                      |
| [useSideBarForm.tsx](https://github.com/Binary-Blade/react-jo/blob/master/src/hooks/useSideBarForm.tsx)               | Manages sidebar form state and actions to open, edit, and save form data. Utilizes generics for flexibility, `useState` for state management, and `useCallback` for memoizing functions. Handles toast notifications for success and error messages.                                               |

</details>

---

##  Getting Started

**System Requirements:**

* **TypeScript**: `version x.y.z`

###  Installation

<h4>From <code>source</code></h4>

> 1. Clone the react-jo repository:
>
> ```console
> $ git clone https://github.com/Binary-Blade/react-jo
> ```
>
> 2. Change to the project directory:
> ```console
> $ cd react-jo
> ```
>
> 3. Install the dependencies:
> ```console
> $ npm install
> ```

###  Usage

<h4>From <code>source</code></h4>

> Run react-jo using the command below:
> ```console
> $ npm run build && node dist/main.js
> ```

###  Tests

> Run the test suite using the command below:
> ```console
> $ npm test
> ```

---

##  Project Roadmap

- [X] `► INSERT-TASK-1`
- [ ] `► INSERT-TASK-2`
- [ ] `► ...`

---

##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Report Issues](https://github.com/Binary-Blade/react-jo/issues)**: Submit bugs found or log feature requests for the `react-jo` project.
- **[Submit Pull Requests](https://github.com/Binary-Blade/react-jo/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/Binary-Blade/react-jo/discussions)**: Share your insights, provide feedback, or ask questions.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/Binary-Blade/react-jo
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="center">
   <a href="https://github.com{/Binary-Blade/react-jo/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=Binary-Blade/react-jo">
   </a>
</p>
</details>

---

##  License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

##  Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-overview)

---
