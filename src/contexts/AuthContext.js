//We will create a React Context in this file that will house all authenticatioin info (currentUser, login, logout) and transport the info to any component to use it. We could store this info in the app component and just pass the info as props, but this isn't ideal for larger applications. But instead, we create a storage container to house this info, outside of the normal flow of data (props and callback functions).
import React, {useContext, useState, useEffect} from 'react' 
import {auth} from '../base'//to have access to the auth object, which initializes the auth functionality from Firebase
import { GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth'

//Below we create a context that will store all the info in this file
const AuthContext = React.createContext();

//This makes the storage container accesible in other components. We will import useAuth anytime we want ti get user info or use login/logout
export function useAuth(){
    return useContext(AuthContext);
}
//The rest of this file is creating a component that will allow the app to commnicate this info to other components that are nested inside of this one. 'children' is referring to those components that are nested inside.
export default function AuthProvider({children}){
//Create hooks for currentUser and another custom hook to determine if the context has info to share with nested components and loaf those components in after theyve been given the info.
const [currentUser, setCurrentUser] = useState();
const [loading, setLoading] = useState(true);
//Instantiate a GitHubAuthProvider object from Firebase
const gitHubProvider = new GithubAuthProvider();

async function login(){
    signInWithPopup(auth, gitHubProvider).then(authData => {
        console.log(authData);
        setCurrentUser(authData.user)})
}

async function logout(){
    signOut(auth).then(setCurrentUser(null))
}

//The object below will hold currentUser info, login, and logout, so we can use them in components as necessary.
const value = {currentUser, login, logout};

useEffect(() => {
    //authChange will use Firebase functionality to get user information, set the currentUser hook to the value retrievved, and allow the components to load in using the custom hook
    const authChange = auth.onAuthStateChanged(user => {
        setCurrentUser(user)
        setLoading(false)
    })
    return authChange;
}, []);

return(
    <AuthContext.Provider value={value}>
        {/* Below we are waiting for the AuthContext info to populate before loading the components in the UI */}
        {!loading && children}
    </AuthContext.Provider>
)
}