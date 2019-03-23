
import React from 'react'
import styled from 'styled-components'
import { Subscribe, SubscribeOne } from 'unstated-x'

import './Catalog'
import { storeElement } from '../../Container/BaseContainer';
import enhanceElement from '../../Core/enhanceElement';
// a

interface TabsState {
    mode: string
    onChange: (e: object) => any,
    active: number,
    vertical: boolean,
    fitted: boolean,
    reverse: boolean,
    align: string,
    icon: string,
    activeFront: number,
    children: any[]
}
class Tabs extends React.Component<any> {
    static type = 'Tabs'
    static parentTypes = /./
    static childTypes = /Tab/
    static defaultProps = {
        active: 0,
        activeFront: 0,
        vertical: false,
        fitted: false,
        reverse: false,
        align: 'center',
        targetStyle: 'Tabs',
        pseudo: '',
        icon: 'angle-down'
    }





    get container() {
        return this.props.elementContainer
    }
    getAllContainerChildren = () => {
        const { elementContainer: {
            state: { children }
        } } = this.props
        const arrContainerChildren = children.map((item: string) => {
            return storeElement.get(item)
        })
        return arrContainerChildren
    }
    selectTabs = (idElement: number) => {
        this.props.onChange({ active: idElement })
    }
    render() {
        const { vertical, fitted, reverse, align, active, elementContainer, mode, activeFront } = this.props
        const labelChildren = this.getAllContainerChildren().map((itemContainer: any, key: number) => {
            return itemContainer && itemContainer.data ? <Subscribe to={[itemContainer]}>
                {(container) => {
                    const idElement: string | number = itemContainer.state.id
                    return <a className="nav-item" data-active={mode === 'edit' || activeFront < 0 ? elementContainer.state.children[active] === idElement : elementContainer.state.children[activeFront] === idElement}
                        href={container.state.anchorText ? `#${container.state.anchorText}` : `#pb-content-${idElement}`}

                        data-element={idElement}
                        onClick={(e: any) => {
                            e.preventDefault()
                        }}
                        onMouseDown={(e: any) => {
                            e.preventDefault()
                            this.selectTabs(key)
                        }}
                        key={idElement}>

                        {container.state.label ? container.state.label : null}
                    </a>

                }}
            </Subscribe> : null
        })
        return (<$Tabs vertical={vertical} reverse={reverse} fitted={fitted} align={align}   >
            <nav>
                {labelChildren}
            </nav>
            <$Content> {this.props.children} </$Content>
        </$Tabs>
        )
    }
}


export default enhanceElement(Tabs)
const $Content = styled<any>('div')`
	padding: 1.5rem 0;
`

const $Tabs = styled<any>('div')`
& {
	display: flex;
    display: -webkit-flex;
	align-items: stretch;
	${props => !props.vertical && !props.reverse ? 'flex-flow:column;' : ''};
	${props => props.reverse && props.vertical ? 'flex-flow:row-reverse;' : ''}
	${props => props.reverse && !props.vertical ? ' flex-flow:column-reverse;' : ''}
	${props => props.vertical && !props.reverse ? 'flex-flow:row;' : ''};
	>nav {
		display: flex;
		flex-wrap: wrap;
		position: relative !important;
		flex-direction: ${props => props.vertical ? 'column' : ''};
		justify-content: ${props => props.align === 'center' ? 'center' : ''} ${props => props.align === 'end' ? 'flex-end' : ''};
		align-items : ${props => props.vertical && props.align === 'center' ? 'center' : ''} ${props => props.vertical && props.align === 'end' ? 'flex-end' : ''};
		${props => props.vertical ? ' min-width: 100px;' : ''};
		>a.nav-item {
			color : black;
			
			display: ${props => props.vertical ? 'flex' : 'inline-block'};
			flex : ${props => props.fitted ? '1 1 auto' : ''};
			align-items : ${props => props.vertical ? 'center' : ''};
			padding: 0.5em 1em;
			font-weight: bold;
			border-width: 1px;
			text-decoration: none;
			border-top: ${props => props.reverse && !props.vertical ? '2px solid transparent' : ''};
			border-bottom: ${props => props.reverse && !props.reverse ? '0px' : ''} ${props => props.vertical && !props.reverse ? '0' : ''}  ${props => !props.vertical && !props.reverse ? '2px solid transparent' : ''};
			border-right : ${props => props.vertical && !props.reverse ? '2px solid transparent' : ''};
			border-left: ${props => props.vertical && props.reverse ? '2px solid transparent' : ''};
			white-space: ${props => props.vertical ? 'nowrap' : ''};
			> i {
				margin-right: 0.3em;
			}
			@media (max-width: 768px) {
				margin-top: 5px !important;
				margin-bottom: 5px !important;
			}
			@media (max-width: 767px) {
				flex-flow: ${props => props.vertical ? 'column' : ''};
			}
		}
		>a[data-active="true"]{
			border-color: inherit;
		}

	}
	${$Content}{
		padding: ${props => props.vertical ? '0 1rem' : '1.5rem 0'};
		flex: ${props => props.vertical ? '1' : ''}
	}
}
`