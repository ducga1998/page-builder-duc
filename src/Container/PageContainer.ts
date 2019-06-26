import { Container } from 'unstated-x'
import React from 'react';
    // pagecontainer  => it control all everthing app 
class PageContainer extends Container<any> {
        getDataCache() {
                return () => {
                    
        }
    }
}
export default PageContainer
export const ModeContext = React.createContext(null)