# Entry React developer TEST
#### Made by: Myroslav Suprun

## Installation

There are two ways of reviewing the project. 
1) Look through [gh-pages](https://myroslavsuprun.github.io/react-developer-test/).
2) Download and launch on your localhost.

#### 1) gh-pages

- [Download](https://github.com/scandiweb/junior-react-endpoint) and launch the graphQL endpoint.
- Make sure that the endpoint link is `http://localhost:4000/`.
- You are ready to go.
#### 2) download

- Download or clone the project from github.
- Install the dependencies.
- Launch on your localhost.
- [Download](https://github.com/scandiweb/junior-react-endpoint) and launch the graphQL endpoint.
- Make sure that the endpoint link is `http://localhost:4000/`.
- You are ready to go.

## Review part

##### __Libraries:__
* react
* react router dom
* graphql
* RTK — working with the global state: currency; cart products;
* RTK Query — fetching data from the graphQL endpoint
* redux-persist — saving data in the local storage
* styled-components


##### __Main features:__ 
* PLP:
  - Adding and removing cart products with default options;
  - Opening PDP page;
* Header: 
  - Switching between product categories which are rendered from the BE; 
  - Switching currency which will be saved in the local storage and set on every page;
  - Opening cart overlay with a possibility to correct product quantity, to go to Cart page and remove all the products from the cart state;
* PDP:
  - Switching product images;
  - Choosing a specific product attribute;
  - Adding/removing product from the cart state with a specific attribute;
* Cart page:
  - Changing products quantity;
  - Switching between product images;
  - Removing all products from the cart state by pressing the order button;
##### __Lighthouse test:__
![lighthouse test image](https://i.imgur.com/3QhsA5Y.png)


