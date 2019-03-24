import * as React from 'react'
import enhanceElement from '../../Core/enhanceElement';
import styled from 'styled-components';;
class Heading extends React.Component {
    static type = 'Section'
    static get InspectorDuc() {
        return {
            general: <>
                <div>
                    câcsccasc
                </div>
            </>
        }
    }
    render() {
        return null
    }
}
const $Heading = styled.div<any>`
 
`
export default enhanceElement(Heading)