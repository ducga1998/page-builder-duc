import * as React from 'react'
import styled from 'styled-components';
import INTERATION from './reuse/interaction'
import ElementContainer from './Container/ElementContainer';
import { Provider } from 'unstated-x';
import { storeElement } from './Container/BaseContainer';
import Selection from './Workspace/selection'
// import WorkspaceContainer from './Container/WorkspaceContainer';
import workspaceContainer from './Container/WorkspaceContainer';
function convertDataToContainer(data) {
    const root = data.find(item => item.id === 0)
    const addItem = (rootData) => {
        if (rootData.children) {
            const children = data.filter(childData => rootData.children.filter(idChild => childData.id === idChild).length);
            children.map(child => {
                const element = addItem(child)
                const id = element.state.id
                rootData.children = []
                rootData.children.push(id)
            })

        }
        return new ElementContainer(rootData)
    }
    return addItem(root)


}
class PageEditer extends React.Component<any> {
    dropEl: HTMLElement
    flowRef: HTMLElement
    selRef :any
    // the first drap 
    handleDrapEnterCapture = (ev) => {
    }
    handleDrapLeaveCapture = (event) => {
        this.dropEl.style.display = 'none'
        this.flowRef.style.display = 'none'
    }
    handleDrapOverCapture = (event) => {
        event.preventDefault()
        const targetDom = event.target as HTMLElement

        const { width, height, top, left } = targetDom.getBoundingClientRect()
        Object.assign(this.dropEl.style, { width: width + 'px', height: height + 'px', top: top + 'px', left: left + 'px', display: 'block' })
        const nX = event.nativeEvent.offsetX
        const nY = event.nativeEvent.offsetY
        const scrollTop = window.scrollY
        const distance = 7
        let checkTH = ''
        //Th1 : left
        // this.flowRef.style.display  =  'block'
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

        }
        INTERATION.position = checkTH
    }
    /* 
        two thing change: 
            - dropTarget
            - spice children at where
    */
    handleDropCapture =  (ev) => {
        ev.preventDefault()
        ev.stopPropagation()
        let idRoot 
        let domDrop =  ev.target.closest('[data-element]')

        if (!domDrop) return
        const dropId = domDrop.getAttribute('data-element')
        console.log('ev',ev)
        if( INTERATION.categoryDrapStart=== 'DRAG_ELEMENT') {
            const nameDom = ev.dataTransfer.getData("PB-duc");
            const dataObj = JSON.parse(`${nameDom}`)
            
            const containerElement =  convertDataToContainer(dataObj)
            idRoot = containerElement.state.id
        }
        else if (INTERATION.categoryDrapStart=== 'MOVE_ELEMENT'){
            const {selected} = workspaceContainer.state
            const containerElement =  storeElement.get(selected[0])
          
            const{ id , parentId}  = containerElement.state ;   
            if(dropId === parentId) return
            const containerParent = storeElement.get(parentId)
            containerParent.setState({children :containerParent.state.children.filter(child => child !== id) },() => {
                workspaceContainer.setState({selected : [dropId]})
            })
            idRoot= id
        }
        const containerDrop = storeElement.get(dropId)
        const { children } = containerDrop.state
        children.push(idRoot)
        containerDrop.setState({ children })

        INTERATION.reset()
        this.dropEl.style.display = 'none'
        this.flowRef.style.display = 'none'
    }
    handleDrapStart = (event) => {
        event.stopPropagation()
        console.log('hehehe day la move element ma')
        INTERATION.categoryDrapStart = 'MOVE_ELEMENT'
    }
    handleMouseDown = (event) => {
        const target = event.target as HTMLElement
        const targetDom = event.target.closest('[data-element]')
        if(!targetDom )return
        const idSelect = targetDom.getAttribute('data-element')
        workspaceContainer.setState({selected : [idSelect]})
        this.selRef.updatePosition(targetDom)
    }
    render() {
        return <Provider>
            <WrapperPage
                draggable
                onDragStartCapture={this.handleDrapStart}
                onDragOverCapture={this.handleDrapOverCapture}
                onDragLeaveCapture={this.handleDrapLeaveCapture}
                onDropCapture={this.handleDropCapture}
                onMouseDown={this.handleMouseDown}
            >
                {this.props.children}
            </WrapperPage>
            <DropOver ref={e => this.dropEl = e} />
            <Flow ref={e => this.flowRef = e} />
            <Selection  ref={e =>this.selRef = e} />
        </Provider>
    }
}

export default PageEditer
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
	border: 2px solid red;
	pointer-events: none;
	display: none;
	z-index: 10;
	a {
		pointer-events: initial;
		&:hover {
			color: #fff;
		}
	}
	&:after{
		position: absolute;
		top:-2px;
		right: -2px;
		bottom: -2px;
		left: -2px;
		content: '';
		border: 2px dashed red;
	}
`

const WrapperPage = styled.div`
    width  :100%;
    height : 900px;
    background :#DFE7EF;
    position : relative;
  
`