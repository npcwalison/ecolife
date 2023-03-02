import StackRoutes from './stack.routes';
import DrawerRoutes from './drawer.routes';
import Home from '../pages/Home';


export default function Routes() {
    const loading = false;
    const loginAuth = true;


    return (
        //the user is logged in? (yes/no)
        loginAuth? <DrawerRoutes /> : <StackRoutes />
    )
}