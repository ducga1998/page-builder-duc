
import React from 'react';
import styled from 'styled-components';
import enhanceElement from '../../Core/enhanceElement';


class Slide extends React.Component<any> {
	static type = 'Slide'
	static defaultProps = {
        // value : ''
	}
	refSlide: any = React.createRef()
    static get InspectorDuc() {
        return {
            general:null
        }
    }

	get container() {
		return this.props.elementContainer
	}

	render() {

		return (
			<$Slide
				// ref={e => this.refSlide = e}
			>
				{this.props.children}
			</$Slide>
		)
	}
}

const $Slide = styled.div`

`

export default enhanceElement(Slide)
