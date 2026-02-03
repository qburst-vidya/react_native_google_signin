import { GoogleSignin , statusCodes} from '@react-native-google-signin/google-signin';
import { useEffect, useState } from 'react';


GoogleSignin.configure({
  androidClientId: '985549758062-b7eg25ums389bvlt21hotnok87jssl3f.apps.googleusercontent.com',
  iosClientId: "985549758062-s7h6d9j5gubk1c0ahd5qj41epfhj3tg1.apps.googleusercontent.com",
});


const GoogleAuth =  () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        checkCurrentUser();
    }, []);

    const checkCurrentUser = async() => {
        try {
            const isSignedIn = await GoogleSignin.isSignedIn();
            if(isSignedIn) {
                getCurrentUser();
            }
        } catch (error) {
            console.error('Check user error:', error);
        }
    };
    const getCurrentUser = async () => {
        try {
            const currentUser = await GoogleSignin.getCurrentUser();
            setUser(currentUser);
        } catch (error) {
            console.error('Get current user error:', error);
        }
    };

    const signIn = async () => {
        try {
            setLoading(true);
            setError(null);

            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            setUser(userInfo);

            const {accessToken, idToken} = await GoogleSignin.getTokens();

        } catch(error) {
            setError(error.message);
            if(error.code == statusCodes.SIGN_IN_CANCELLED) {
                console.log('Sign in cancelled');
            } else if(error.code == statusCodes.IN_PROGRESS) {
                console.log('Sign in in progress');
            } else if (error.code == statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log('Play services not available');
            } else {
                console.error('sign-in error:', error);
            }
        } finally {
            setLoading(false);
        }
    };

    const signOut = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            setUser();
        } catch (error) {
            console.error('Sign out error:', error);
        }
    };

    return {
        user,
        loading,
        error,
        signIn,
        signOut,
    };
};

export default GoogleAuth; 