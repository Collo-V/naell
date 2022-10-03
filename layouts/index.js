import React, {useEffect} from 'react';
import Navbar from "../components/Navbar";

function Layout({children}) {
    return (
        <React.Fragment>
            <Navbar/>
            <div>
                {children}
            </div>
        </React.Fragment>
    );
}

export default Layout;
