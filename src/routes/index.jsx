import StackRoutes from './stack.routes';
import Home from '../pages/Home';


export default function Routes() {
    const loading = false;
    const loginAuth = false;


    return (
        //the user is logged in? (yes/no)
        loginAuth? <Home /> : <StackRoutes />
    )
}