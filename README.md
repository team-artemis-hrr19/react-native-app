# On The Way #
> LOCATION BASED MOBILE MESSAGING APP TO ASK FOR HELP

![](https://media.giphy.com/media/3oz8xxwRSYoVD3Mh2M/giphy.gif)

## Technologies ##
> React-Native
> Redux
> SendBird
> Firebase

## MVP features ##
> location

> authentication using Google+

> client side state in Redux store

> persistent data store in Firebase

> Firebase pushes update events to client, trigger Redux store to update

> chatroom

> invite friends to Chatroom

## Useful Features to Implement
> push notification

> helpers can reply to help request, opening custom chatroom

> add and invite friends network

# DOCUMENTATION

# PROJECT SETUP

## FIREBASE

Setting up firebase:
	Sign up for a free firebase account.
	Create a new project
	You can name it whatever you want.
	It should automatically navigate to your new project.
	In the nav bar on the left hand side you should see a settings button next to your project name click that.
	Click Add Firebase to your web app.
	And add apiKey, authDomain, databaseURL, and storageBucket to firebaseApp.js in utils
  
## REACT NATIVE

Setup react-native environment:
	Open your terminal.
	Use homebrew to install the following:
		brew install node (if you don’t have node)
		brew install watchman
	Get the react native CLI with,
		npm install -g react-native-cli
	If you get a permissions error use 
		sudo npm install -g react-native-cli
	Next download Xcode.
	Then from the home directory of the project run:
		react-native run-ios
    
## SENDBIRD

Getting sendbird up and running
  sign up for an account at sendbird.com
  place your appId in the sendbird.js file
  the offical sendbird doc for react-native is @ https://docs.sendbird.com/javascript
  a good tutorial on how to build a basic messaging app with react-native @ https://blog.sendbird.com/tutorial-build-a-messaging-app-using-react-native/, caution: the tutorial uses version 2.0 and our
  implementaion  uses version 3.0, the methods are completely different but how they approch there build is good.
  
  notes:
  
  The invite friends is almost completely  integrated with the redux store with the exception of the datasource, immutable js and ListView's datasource dont like each other for some reason. 
  https://medium.com/front-end-hacking/react-native-immutable-listview-example-78662fa64a15#.uun5vay0c: A potential solution for the ListView/ immutable js problem. It just needs to use the redux store rather then
  the component's state.
  groupchat has access to the redux store but maintains component state due to the same reasons as above. 
  The sendbird methods are async so the 'this' binding is weird. console logging 'this' was very helpful. 

## REDUX
This app manages all its client side state using Redux.  This means that none of the React components hold their own state, and instead are just pure functions which take props and return as JSX view.

As much as possible components are written as stateless functional components instead of React Component classes.

Files relating to Redux are located in the following directories:

| app/
  | actions/
  | reducers/
  store.js

The app/store.js file creates an instance of a Redux store using the reducer exported from app/reducers/rootReducer. This Redux store instance is exported and used in index.ios.js to expose the Redux store to all the React components using the <Provider /> component from the react-redux library.

## IMMUTABLE.JS

The Redux store sometimes makes use of Immutable, a library which makes variables that cannot be mutated.  To update state, you have to create a new Immutable object rather than mutating the old version.

While most Redux examples use plain JS objects and try to prevent mutation of state using convention, Immutable enforces not mutating state.

We mostly use Immutable Lists (which are arrays that you can't change) and Maps (which are objects you can't change)

To get the value of a property of a map is is Map.get('key') as opposed to Object['key'] for a regular JS object.

# PRINCIPLES FOR USING REDUX IN THIS APP

## NEVER MUTATE STATE DIRECTLY

In Redux, state is never mutated directly. When state needs to be updated, you can dispatch an action using `store.dispach`.  The store will then call the appropriate reducer method to update state.


## ACTIONS

All ways that you can update state are located in app/actions/actionTypes.js. This file just exports strings that are the action types that the reducers will compare against when deciding how to update state.

The other files in actions are all *action creators* which take an input and return a Redux action object.

A Redux action object is a plain JavaScript object with the a *type* property.

An example of a Redux action would be:

```javascript
{
type: 'UPDATE_USERS',
users: [{UserObject}, {UserObject}]
}
```

Each Redux action has a type property telling the store which reducer to user, most actions have a payload, which the reducer uses to update the state.  In the above example, the payload is stored in the action's user property.

## REDUCERS

A reducer is a pure function that takes a state object and an action object as inputs and returns a new state.

In the app/reducers directory you will find various reducers which each manage a portion of the application's state. For example the userReducer manages the state of the applications current user.  The locationReducer manages the state of the application's current location, taken from the phone's GPS.  These child reducers are combined into a rootReducer in app/reducers/rootReducer which manages the entire state of the app.

This rootReducer function is used to instantiate the Redux store in app/store.js.

## CONNECTING REDUX TO REACT

This application uses the react-redux library which provides the useful <Provider /> component and connect function to wire together the Redux store with React components.

At an abstract level, React components will not access state directly. Instead they will have state injected, using the container pattern.

Put a different way the React components will not have a `this.state` but will instead have any data they need to render passed in as a prop.

To wire React and Redux together you need to have the following:
1. A Provider component that wraps your top level app component

2. A container for each stateful component, i.e. a container that needs to display and update the applications state

3. functions that map the specific state that a component needs to props that will be passed into the component.

## PROVIDER COMPONENT

In the root directory, the index.ios.js file shows the Provider component wrapping the NavRootContainer, which is the top level component of the application.

The Provider has a prop called store, which is set to the Redux store instantiated in app/store.js.

Because the Provider component wraps the top level component of the app, all components now have access to the state stored in the Redux store.

## CONTAINERS

Containers provide the specific API for React components to interact with state. Using containers you can decide which pieces of state you will pass into you React components as props, and which ways you will allow your React components to update state, which component located in app/components/SignIn as an example, let's walk though how we will provide SignIn the data it needs using a container.

Looking at SignIn.js, we see the SignIn component needs to check whether the current user is signed in (i.e. on line 28 where it check's whether the current user's name is 'Guest').  Addtionally, the SignIn container will display the user's name, email and profile picture if the user is logged in.

So the SignIn component needs to have knowledge of the state's Current User.

We will pass the current user as a prop into the SignIn component using the SignInContainer in app/containers/SignInContainer.

In SignInContainer, we import the connect function from the react-redux library.

Then we have to define 2 functions.

mapStateToProps returns a object where the user property is mapped the where the Current User is stored in the state (state.userState). This is also the name of the reducer that manages userState.

The user will now be available inside the SignIn component as this.props.user.

mapDispatchToProps takes the store's dispatch method as an argument and returns an object containing all the functions the SignIn component will need to call to update state.  We know when a user signs, we will have to update the UserState in the Redux store.  So we pass in two functions to the SignIn component: updateUser, and removeUser.  Both of the functions dispatch an action to the Redux store, to update state.  These functions can be accessed within the SignIn component using this.props.updateUser and this.props.removeUser.

Lastly we use the react-redux connect function to ties both mapStateToProps and mapDispatchToProps to the SignIn component and save the value returned in a variable called SignInContainer container and export that value.

The important thing now is when we want to render the SignIn component, instead we have to call the SignInContainer, which is just the SignIn component with the user state injected in.

## USEFUL REDUX RESOURCES
-Become a Redux ninja with the 2 hour course taught by Dan Abramov, creator of Redux: https://egghead.io/courses/getting-started-with-redux

- This simple GitHub project shows how to structure a React Native/ Redux project by seperating actions, reducers, components and containers. https://github.com/bruz/react-native-redux-groceries
