import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from '../routes/stack.routes';
import Home from '../pages/Home';

const loginAuth = false;

export default function Auth() {
    return (
        <NavigationContainer>
            {
                //the user is logged in? (yes/no)
                loginAuth? <Home /> : <StackRoutes />
            }
        </NavigationContainer>
    )
}