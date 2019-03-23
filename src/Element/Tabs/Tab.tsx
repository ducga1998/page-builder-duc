
import React from 'react'
import styled from 'styled-components'
import { storeElement } from '../../Container/BaseContainer';
import enhanceElement from '../../Core/enhanceElement';
class Tab extends React.Component<any> {
	static type = 'Tab'
	static defaultProps = {
		icon: '',
		name: 'Content'
	}
	getParentContainer = () => {
        const { elementContainer : {state : {parentId}}} = this.props
        
		return storeElement.get(parentId)

	}




	render() {
		const { elementContainer, mode } = this.props
		const containerParent: any = this.getParentContainer()
		const childrenParent = containerParent.state.children
		const { active, activeFront } = this.props
		// console.log(elementContainer.state.id, childrenParent, activeFront, active)
		return <$Tab data-id={ elementContainer.state.id } style={
			{
				display: (childrenParent[mode === 'edit' || activeFront < 0 ? active : activeFront] === elementContainer.state.id) ? 'block ' : 'none'
			}
		}
		>
			{ this.props.children }
		</$Tab>
	}
}

// check => activeFront < 0  => get value active
export default enhanceElement(Tab)
const $Tab = styled.div`
`