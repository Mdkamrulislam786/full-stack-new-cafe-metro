This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). I designed this website with Figma and used Reactjs, react-bootstrap & Redux to develope this restaurant website (New Cafe Metro: https://new-cafe-metro.netlify.app/ ) . Till now I found that its much more easier to use react-bootstrap cz it helps you make the components faster and responsive. 

#This website has these features below:
#Modern Design
#Eye Catching
#Fully Responsive
#Shopping Cart
#Customer Reviews
#REDUX, React-Redux
#Reestaurants Services (Customer can book online)
#Menu (where customers can order online)
#Contact Section and more

##VISIT NOW:
New Cafe Metro: https://new-cafe-metro.netlify.app/


# The App flow
1. App comp: 
 The app is wraped within redux Provider, thhe app is rendering the routes component where we have al the routes with exact compoenents
2.  Routes Comp: 
On page load checks if the user isLoggedin, if the user isnt logged in we call isUserLoggedIn() action and updating the cart 
3. Route /shop: we have Navabr and TestMenu
Navbar: we just select the cart state and show the added cart items number
TestMenu: Rendering parent category and theire child(product) when productcategory clicked it goes to `/shop/${cat.slug}`
4. `/shop/${cat.slug}` render the MenuItems compoenent
MenuItems: onpage load dispatches getProductsBySlug(param.slug) action that gets the products and sets it to the product state
prodyuct has addToCart(data) action that adds the item to the cart(state), then we go to '/cart' page
5. '/cart': onpageload getCartItems() action is called that sets the cart itiems to cart state, we grab the cart state using useSelector. <CartItems /> compenent handles the cart actions like add remove increment decrement then we go to '/checkout'

6. '/checkout' 
checkout step 1: if the user isnt loggedin we login the user and gets the users info
checkout step 2: we get the users address, if the user is authenticated then we get the user adresses, we listthe address if one is selected and confirmed then we set the data to selectedAddress state
checkout step 3: we just show the previously selected cart items  <Cart onlyCartItems={true} />, then we set the payement type and where to send the email thins
checkout step 4: we select the payment type, then confirm button is clicked , then we run onConfirmOrder() function that has the payload and dispatches addOrder action
<code>const payload = {
      addressId: selectedAddress._id,
      address: selectedAddress,
      totalAmount,
      items,
      paymentType: "cod",
    };

    console.log(payload);
    dispatch(addOrder(payload));
</code>
then we are redierct to the order details page, where we grab the order details onpage load and show it to the user

#### The App flow ENDS here




## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify



