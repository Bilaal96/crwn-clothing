# 👑 CRWN Clothing &nbsp;|&nbsp; An E-Commerce React App ⚛

## Overview

A fictional **online clothing store** made with **React** (_see [Live Demo](http://crown-clothing-live-app.herokuapp.com/)_). Features include: user authentication, shopping cart, checkout, payments with Stripe & data persistence.

## Technologies Used

#### Included in Final Project

<table>
<thead>
    <!-- Column Headings -->
    <tr>
      <th align="center">Frontend</th>
      <th align="center">Backend</th>
    </tr>
</thead>
  <tbody>
    <!-- Column 1: Frontend Tech -->
    <tr>
      <td>
        <ul>
            <li>React; <em>plus</em> Hooks, React Router Dom</li>
            <li>Redux; <em>plus</em> middleware, Redux Saga, Reselect</li>
			<li>Styled Components for CSS-in-JS</li>
			<li>Axios for request to Stripe API implementation</li>
		 </ul>	
      </td>
   <!-- Column 2: Backend Tech -->
      <td>
          <ul>
            <li>Firebase - User Authentication & Data Storage in Real-time Database (Firestore)</li>
            <li>Stripe API</li>
            <li>Node.js & Express <em>plus</em> middleware - for Stripe API implementation</li>
		  </ul>	
      </td>
    </tr>
  </tbody>
</table>

#### Excluded From / Replaced In Final Project

-   Redux Thunk
-   Node Sass _(now superseded by Dart Sass)_

## List of Features

-   Completely custom & responsive design with mobile-first approach
-   Browse shop items by category (with previews of each category)
-   Shop data is loaded from real-time Firestore database
-   Shopping cart - functionalities:
    -   Add item to cart
    -   Increase quantity of existing item in cart
    -   Remove item from cart
-   Checkout - functionalities:
    -   Summary of cart at checkout, including:
        -   calculated sub-total per item
        -   calculated total of all items
    -   Add / remove items at checkout
    -   Payments with Stripe
-   User login & register
-   Data persistence for:
    -   cart items
    -   user session
-   Lazily loaded routes via route-based code-splitting

## Concepts Explored | _What I Learned_

### Frontend - _How to:_

-   create **reusable & composable components** that implement _React Hooks_
-   implement custom, **responsive CSS** with _Styled Components_ and the **mobile-first** design approach
-   optimise component load-times via **Route-based Code Splitting**; using _React Router Dom, React Suspense & Lazy (with dynamic imports)_
-   **measure performance at the component-level** using _React Devtools’ Profiler tab_
-   **reduce** number of **unnecessary renders** with _React.memo, useMemo & useCallback hooks_
-   use _Redux_ to **maintain a single data store**
-   **memoize Redux selectors**, so that they don't have to repeatedly compute unchanged derived data; via the _Reselect package_
-   **make requests to backend** _Node API_ (built for Stripe Payments)

### Backend - _How to:_

-   **store & retrieve data in a NoSQL database**; using _Firebase's real-time Firestore database_
-   implement **user authentication** with _Firebase SDK_
-   **build a simple _Node.js & Express API_** (which utilises _environment variables & middleware_) to handle Stripe Payments
-   **host an app** on the _Heroku_ platform

## Links To Related Repos

The repos listed below include **earlier** versions of the CRWN Clothing app, in which I explored **GraphQL & Apollo**.

-   [Migration From Redux to Apollo Client v2](https://github.com/Bilaal96/crwn-clothing-gql-apollo-v2)
-   [Migration From Apollo Client 2 to Apollo Client 3](https://github.com/Bilaal96/crwn-clothing-gql-apollo-v3)
