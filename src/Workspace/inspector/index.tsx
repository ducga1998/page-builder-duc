import * as React from 'react'
import { Subscribe } from 'unstated-x';

class Inspector extends React.Component {
    
    render() {
        return <Subscribe >
        {
            () => {
                return <div>

                </div>
            }
        }
        </Subscribe>
    }
}
export default Inspector