# E-commerce App

## Getting Started

### Running the frontend

1. `npm i`
2. `npm start`

You can now view e-commerce-app in the browser http://localhost:3000

### Login
You can use `Admin` as username and password for login

## Description

E-commerce App is intended to act as the router and rerender for basic e-commerce application, with three pages login page, product page, and cart page.
Logged in users can see products in a paginated view in product page "Home Page", where they can add products to their cart, favorite products, and remove products
from their cart.
In cart page users can show the current cart with an adjustable quantity, price, and total price, with ability to remove products from cart with a deletion confirmation message popup, when number of products in the cart exceed six the view will be in a paginated format.

## Structure
The `src/pages` directory represents the routes including the three pages in the application, where components are called from `src/components` directory and 
state managed using contexts and custom hooks in `src/hooks` directory. Predefined users defined in `src/AuthData`.

## SCSS Modules

This repo utilizes component-level SCSS Modules to organize its styles. Each component will have an adjacent
`ComponentName.module.scss` file that can be imported into its `.jsx`. These classes
are used to set the `className` property on various `jsx` and `html` elements.
