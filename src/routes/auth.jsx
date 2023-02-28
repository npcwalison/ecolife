import StackRoutes from '../routes/stack.routes';
import Home from '../pages/Home';


export default function Auth() {
    const loading = false;
    const loginAuth = false;


    return (
        //the user is logged in? (yes/no)
        loginAuth? <Home /> : <StackRoutes />
    )
}