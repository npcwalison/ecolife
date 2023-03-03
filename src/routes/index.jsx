import StackRoutes from './stack.routes';
import DrawerRoutes from './drawer.routes';


export default function Routes() {
    const loading = false;
    const loginAuth = false;


    return (
        //the user is logged in? (yes/no)
        loginAuth? <DrawerRoutes /> : <StackRoutes />
    )
}