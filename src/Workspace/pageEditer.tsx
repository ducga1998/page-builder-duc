import * as React from 'react'
import styled from 'styled-components';
import INTERATION from '../reuse/interaction'
import ElementContainer from '../Container/ElementContainer';
import { Provider, SubscribeOne } from 'unstated-x';
import { storeElement } from '../Container/BaseContainer';
import Selection from './selection'
import workspaceContainer from '../Container/WorkspaceContainer';
import PathWay from './Footer/pathway';
function convertDataToContainer(data) {
    const root = data.find(item => item.id === 0)
    const addItem = (rootChildren: any []) => {
        const children = rootChildren.filter(key => data.find(item => item.id === key)).filter(key => data.find(item => item.id === key)).map(key => {
            const { id, ...itemData } = data.find(item => item.id === key)
            if (Array.isArray(itemData.children) && itemData.children.length) {
                const element = addItem(itemData.children) as any
                itemData.children = []
                element.forEach(container => {
                    itemData.children.push(container.state.id)
                })
            }
            return new ElementContainer(itemData)
        })
        return children
    }
    if (Array.isArray(root.children) && root.children.length > 0) {
		const child =  addItem(root.children)
		root.children = []
		child.forEach(container => {
			root.children.push(container.state.id)
		})
    }
    return new ElementContainer(root)
}
//handle work update position 
function updatePositionElement(idDrop, idRoot) {
    console.log('run function success', INTERATION.position)
    const elementContainer = storeElement.get(idRoot)
    const { parentId } = elementContainer.state
    const containerDrop = storeElement.get(idDrop)
    const childrenElementDrop = containerDrop.state.children as any[]
    if (INTERATION.position === 'inside') {
        const { children } = containerDrop.state
        children.push(idRoot)
        containerDrop.setState({ children })
        return
    }
    switch (INTERATION.position) {
        case 'bottom':
            childrenElementDrop.push(idRoot)
            break;
        case 'top':
            childrenElementDrop.unshift(idRoot)
            break;
        case 'left':
            const indexDropLeft = childrenElementDrop.indexOf(parentId)
            childrenElementDrop.splice(indexDropLeft, 0, idRoot)
            break;
        case 'right':
            const indexDropRight = childrenElementDrop.indexOf(parentId)
            childrenElementDrop.splice(indexDropRight + 1, 0, idRoot)
            break;
    }
    containerDrop.setState({ children: childrenElementDrop })
    INTERATION.reset()
}
class PageEditer extends React.Component<any> {
    dropEl: HTMLElement
    flowRef: HTMLElement
    selRef: any
    handleDrapLeaveCapture = (event) => {
        this.dropEl.style.display = 'none'
        this.flowRef.style.display = 'none'
    }
    // function call after when handleDragStart run , so we check drag start link this function 
    handleDrapOverCapture = (event) => {
        event.preventDefault()
        const targetDom = event.target.closest('[data-element]')
        if (!targetDom) return
        const { width, height, top, left } = targetDom.getBoundingClientRect()
        const type = targetDom.getAttribute('data-type')
        const id = targetDom.getAttribute('data-element')
        const idSelect = workspaceContainer.state.selected[0]
        if (id === idSelect && INTERATION.categoryDrapStart === 'MOVE_ELEMENT') return
        if(INTERATION.typeElement === type ) return
        Object.assign(this.dropEl.style, { width: width + 'px', height: height + 'px', top: top + 'px', left: left + 'px', display: 'block' })
        const nX = event.nativeEvent.offsetX
        const nY = event.nativeEvent.offsetY
        const scrollTop = window.scrollY
        const distance = 7
        let checkTH = ''
        // bullshit code, I am will refactor it in future : ((
        if (nX > 0 && nX < distance) {
            checkTH = 'left'
            this.flowRef.style.display = 'block'
            console.log('TH1 left')
            this.flowRef.style.width = '4px'
            this.flowRef.style.height = height + 'px'
            this.flowRef.style.left = left + 'px'
            this.flowRef.style.top = (top + scrollTop) + 'px'
        }
        if (nX > width - distance && nX < width) {
            checkTH = 'right'
            this.flowRef.style.display = 'block'
            console.log('TH2 right')
            this.flowRef.style.width = '4px'
            this.flowRef.style.height = height + 'px'
            this.flowRef.style.left = left + width + 'px'
            this.flowRef.style.top = (top + scrollTop) + 'px'
        }
        if (nY > 0 && nY < distance) {
            checkTH = 'top'
            this.flowRef.style.display = 'block'
            this.flowRef.style.width = width + 'px'
            this.flowRef.style.height = '4px'
            this.flowRef.style.left = left + 'px'
            this.flowRef.style.top = (top + scrollTop) + 'px'
        }
        if (nY < height && nY > (height - distance)) {
            checkTH = 'bottom'
            this.flowRef.style.display = 'block'
            this.flowRef.style.width = width + 'px'
            this.flowRef.style.height = '4px'
            this.flowRef.style.left = left + 'px'
            this.flowRef.style.top = (top + scrollTop) + height + 'px'
        }
        if (nX > distance && nX < (width - distance) && nY > distance && nY < (height - distance)) {
            checkTH = 'inside'
            this.flowRef.style.display = 'none'
            INTERATION.doing = true

        }
        INTERATION.position = checkTH
        INTERATION.dropDom = targetDom
    }
    /* 
        two thing change: 
            - dropTarget
            - spice children at where
    */
    handleDropCapture = async (ev) => {
        ev.preventDefault()
        // ev.stopPropagation()
        try {
            let idRoot = ''
            const domElement = ev.target.closest('[data-element]')
            let domDrop = INTERATION.dropDom
            console.log('domDrop', domDrop)
            if (!domDrop) return
            let idDrop = domDrop.getAttribute('data-element')
            const idElementDrop = domElement.getAttribute('data-element')
            // change idRoot
            if (INTERATION.categoryDrapStart === 'DRAG_ELEMENT') {
                // create to data 
                const nameDom = ev.dataTransfer.getData("PB-duc");
                const dataObj = JSON.parse(`${nameDom}`)
    
                const containerElement = convertDataToContainer(dataObj)
                idRoot = containerElement.state.id
            }
            else if (INTERATION.categoryDrapStart === 'MOVE_ELEMENT') {
                // move element
                const { selected } = workspaceContainer.state
                const containerElement = storeElement.get(selected[0])
    
                const { id, parentId } = containerElement.state;
                if (idDrop === parentId && INTERATION.position === 'inside') {
                    console.log('run return : ((')
                    INTERATION.reset()
                    return
                }
                const containerParent = storeElement.get(parentId)
                // if(idElementDrop !== idDrop) {
                await containerParent.setState({ children: containerParent.state.children.filter(child => child !== id) }, () => {
                    workspaceContainer.setState({ selected: [idDrop] })
                })
                // }
    
                idRoot = id
            }
            if (INTERATION.position !== 'inside') {
                if(!domDrop.parentElement) return
                const parentDom = domDrop.parentElement.closest('[data-element]')
                idDrop = parentDom.getAttribute('data-element')
            }
    
            await updatePositionElement(idDrop, idRoot)
            await workspaceContainer.setState({ selected: [idRoot] })
            this.dropEl.style.display = 'none'
            this.flowRef.style.display = 'none'
        }
        catch{e => console.error(e)}
    }
    handleDrapStart = (event) => {
        event.stopPropagation()
        console.log('hehehe day la move element ma')
        INTERATION.categoryDrapStart = 'MOVE_ELEMENT'
    }
    handleMouseDown = async (event) => {
        const target = event.target as HTMLElement
        const targetDom = event.target.closest('[data-element]')
        if (!targetDom) return
        const idSelect = targetDom.getAttribute('data-element')
        await workspaceContainer.setState({ selected: [idSelect] })
       
    }
    render() {
        return <WrapperPageEditer>
            <Provider>
                <WrapperPage
                    draggable
                    onDragStartCapture={this.handleDrapStart}
                    onDragOver={this.handleDrapOverCapture}
                    onDragLeaveCapture={this.handleDrapLeaveCapture}
                    onDrop={this.handleDropCapture}
                    onMouseDown={this.handleMouseDown}
                >
                    {this.props.children}
                </WrapperPage>
                <DropOver ref={e => this.dropEl = e} />
                <Flow ref={e => this.flowRef = e} />
                <SubscribeOne to={workspaceContainer} bind={['selected']}>
                    {() => {
                        const { selected } = workspaceContainer.state
                        return <Selection idSelected={selected[0]} />
                    }}
                </SubscribeOne>
                
            </Provider>
        </WrapperPageEditer>
    }
}

export default PageEditer
const WrapperPageEditer = styled.div`
flex : 8;
overflow : scroll;
`
const Flow = styled.div`
    position: absolute;
	box-sizing: border-box;
    background : ${props => props.theme.brand.default};
	pointer-events: none;
	/* display: none; */
	z-index: 10;
`

const DropOver = styled.div`
	position: fixed;
	box-sizing: border-box;
    border: 2px solid ${props => props.theme.space.body};
	pointer-events: none;
	display: none;
	z-index: 10;
`

const WrapperPage = styled.div`
    width  :100%;
    height : 100%;
    background :#d7dada;
    padding : 10px;
    position : relative;
  
`