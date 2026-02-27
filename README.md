# RP Store - Product Listing Page App

RP Store is a web application built with React.  
It allows users to browse, filter and sort products, add new products and manage a shopping cart.

---

## 📌 Project Overview

This project represents a simplified online marketplace where users can:

- View available products
- Filter products by category and color
- Sort products (A–Z, Z-A, low-to-high price, high-to-low price)
- Add new products through a validated form
- Add and remove items from the cart
- Load more products dynamically (pagination)
- See toast messages for feedback (after adding/removing a product to/from the cart)
- Access a 404 page for invalid routes

Main techniques used: component-based architecture, state management, routing, form validation (formik and yup), state lifting, props drilling, conditional rendering and more.

---

## 🛠️ Technologies Used

- **JavaScript**
- **React**
- **React Router DOM**
- **Formik** - Form state management
- **Yup** - Form validation schema
- **HTML**
- **CSS Modules**

---

## ⚙️ Features Implemented

### Product Listing
- Products are loaded from the products service.
- Displayed using a `ProductGrid` component.
- Responsive layout.

<img width="1920" height="993" alt="image" src="https://github.com/user-attachments/assets/8d2f9cfb-cfdc-4495-9fd4-febe7fb29c01" />
<img width="1920" height="992" alt="image" src="https://github.com/user-attachments/assets/9243d4c3-052b-4778-9df0-a13116bbb6e1" />


### Filtering System
- Users can filter products by:
  - Category
  - Color
- Filters update dynamically using React state.
- Products re-render automatically when filters change.

### Sorting System
- Sorting options are controlled with a `SortBar` component.
- Sorting logic is handled inside the products service.
- Products are sorted automatically when a sorting option is chosen.

### Pagination (Load More)
- Initially displays 5 products (or less if the products are less than 5).
- Clicking **Load More** shows 5 additional products.

### Add Product Form
- Built using **Formik**
- Validation handled with **Yup**
- Displays inline validation errors
- Redirects to home after successful submission

<img width="1920" height="994" alt="image" src="https://github.com/user-attachments/assets/796dce08-2d91-423c-b3da-a886c38f3919" />
<img width="1920" height="995" alt="image" src="https://github.com/user-attachments/assets/2fa0dd83-4065-4e0a-9acd-995d4c8ec517" />


### Products Display By Category
- Products are displayed by a specific category
<img width="1920" height="994" alt="image" src="https://github.com/user-attachments/assets/e86ff4cb-7cb8-41e9-b994-3daa0d55d94b" />


### Product Details Page
- Displays more details of the product

<img width="1920" height="991" alt="image" src="https://github.com/user-attachments/assets/4a21ba1f-80e6-4c6f-b13e-0b49c468a52f" />


### Edit Product Page
- Lets the user edit the product
- Form built using **Formik**
- Validation handled with **Yup**

<img width="1920" height="996" alt="image" src="https://github.com/user-attachments/assets/eb63acdc-684b-4fa7-b56c-fe92cadf5dc7" />


### Cart System
- Users can add/remove products
- Conditional rendering for:
  - "Remove from Cart" button
  - Empty cart message

<img width="1920" height="1000" alt="image" src="https://github.com/user-attachments/assets/ded0d0b6-e166-4e7e-980c-f1e07aba2892" />


### Toast Notification System
- Displays success/error messages
- Styled with conditional classes
- Automatically hides after a few seconds

<img width="358" height="74" alt="image" src="https://github.com/user-attachments/assets/b59a236e-4d99-4658-b8f2-1aaf2f3720b5" />


### 404 Page
- Custom `NotFound404` component
- Route `path="*"` handles invalid URLs

<img width="1920" height="994" alt="image" src="https://github.com/user-attachments/assets/78896466-67ed-48f3-a0a3-5d395c622565" />


### Responsive Layout
- Displayed properly on both desktop and mobile devices

---

## 🧠 How the Solution Was Achieved

- State was managed using `useState`.
- Side effects such as loading and updating products were handled using `useEffect`.
- Component communication was implemented using:
  - Props drilling
  - State lifting
- Filtering and sorting logic are based in the service layer.
- Pagination was implemented using controlled state and array slicing.
- Form validation was implemented using Formik + Yup.
- Routing and 404 handling were implemented using React Router.

---

## 🚧 Challenges Encountered

Challenges that I encountered during the development of the app:

1. **Pagination Logic**
   - Understanding how array slicing behaves when the end index exceeds array length.

2. **Component Communication**
   - Passing sorting and filter values between multiple components required proper state lifting.

---

## 🚀 Getting Started

Follow the steps below to run the project locally.

---

### 📁 1. Navigate to the Client Directory

This project contains a `client` folder where the React application is located.

After cloning the repository, navigate into the `client` directory:

```bash
cd client
```

---

### 📦 2. Install Dependencies

Install all required project dependencies:

```bash
npm install
```

---

### ▶️ 3. Start the Development Server

Run the following command to start the app in development mode:

```bash
npm run dev
```

---

### 🌐 4. Open in Browser

After running the development server, Vite will display a local URL similar to:

```
http://localhost:5173/
```

Open this URL in your browser to view the application.

---

## ⚠️ Requirements

Make sure you have installed:

- Node.js (v18 or newer recommended)
- npm (comes with Node.js)

You can verify installation by running:

```bash
node -v
npm -v
```

---

## 🚀 Future Improvements

- Add a connection with a back-end (Express.js (JS) or Python (Python))
- Add authentication system

---

