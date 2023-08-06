# E-Commerce Product Catalog

## Table of Contents

- [Introduction]
- [Technologies Used]   
- [Implementation Details]
  - [Product Component]
  - [Products Component]
  - [Sidebar Component]
  - [SortFilter Component]
  - [Filters Component] 
- [Challenges]
- [Setup]

## Introduction

The E-Commerce Product Catalog is a React application that displays a list of products, allowing users to view details, sort, filter, and rate products. The user can also read more about each product and add them to the cart.

## Technologies Used

- **React**: Used for building the UI components.
- **React Router** Manage the Routing.
- **Material-UI**: Utilized for the rating component.
- **Axios**: Employed for making HTTP requests to fetch product data.
- **CSS**: Applied for styling.

## Implementation Details:



 **Product Component**

Displays individual product details, including:
- Image
- Title
- Category with a tooltip
- Price
- Rating system
- "Read more" button to toggle full product description
- Button to add the product to the cart

 **Products Component**

Responsible for:
- Fetching all products
- Displaying the products
- Sorting functionality
- Renders Filtering
- Pagination with a "Load More" button
- Product counter

 **Sidebar Component**

Handles the filters on the sidebar. It is responsive and displays filters based on the window's width.

 **SortFilter Component**

- Sorting functionality
Provides a dropdown to sort the products by various options.

**Filters Component**

- Filtering functionality
Responsible for filtering functionality.

## Challenges

- **State Management**: I believe that the state managment could've been done much better by storying 1 State for the products which is lifted on the top component so it's accseible for all of its child components.This way it will be easier for manipulating and achieving all the filters,Sorting and category functionality by making a simple request and working with the data it is providing instead of declaring multiple state's that are not realy needed and losing all the logic behinde using React.

- **API** By choosing to work with api instead of defined by me sample data I made it much harder.If I was working with Object data structure a simple map filter could've done everthing for the filtering,sorting, and categories.Also without the backend where all the filtering should be done, I don't have access to the proper endpoint's.

- **Responsive Design**: Making the sidebar and the filters responsive required extra care.

- **Integration of Features**: Combining different features like sorting, filtering, and pagination into a seamless user experience.

- **Time managment**: Unfortunetly the task aligned with a 7 days vacation and I hope I've done the best for 3 days.
## Setup

To get started with the project, follow these steps:

1. Clone the repository.
2. Navigate to the project directory.
3. Install the dependencies using "npm install"
4. Run the porject by using "npm start"