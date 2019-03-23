
import pick from 'lodash/pick'
import React from 'react'
import { PageFlySliderController } from 'slider-x'
import styled from 'styled-components'
import enhanceElement from '../../Core/enhanceElement';
import ReactDOM from 'react-dom';

const SliderOption = [
	'curr',
	'autoPlay',
	'autoPlayDelay',
	'duration',
	'loop',
	'draggable',
	'paginationStyle',
	'navStyle',
	'adaptiveHeight',
	'draggable',
	'slidesToShow',
	'slidesToScroll',
	'gutter'
]

const SliderOptionsOverride = {
	draggable: false,
	autoPlay: false,
	adaptiveHeight: false,
	loop: false
}

interface SliderType {
	elementContainer: any,
	curr: number,
	autoPlay: boolean,
	duration: number,
	loop: boolean,
	autoPlayDelay: number
	paginationStyle: 'pagination-style-1' | 'pagination-style-2' | 'pagination-style-3',
	navStyle: 'nav-style-1' | 'nav-style-2' | 'nav-style-3' | 'nav-style-4' | 'nav-style-1' | 'nav-style-5',
	adaptiveHeight: boolean,
}
const storeSlider = {}
const current = 0
window['storeSLider'] = storeSlider
export class Slider extends React.Component<any> {

	static type = 'Slider'
	static defaultProps = {
		curr: 0,
		autoPlay: false,
		autoPlayDelay: 3000,
		duration: 300,
		loop: true,
		paginationStyle: 'pagination-style-1',
		navStyle: 'nav-style-1',
		adaptiveHeight: false,
		draggable: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		gutter: 10
	}
	refSlider: any = React.createRef()

	get container() {
		return this.props.elementContainer
	}

	get DOM() {
		return this.container.state.domElement
	}
	get getOptions() {
		return {
			...pick(this.props, SliderOption), // take the necessary things
			...SliderOptionsOverride,
			...{ curr: current } // overide options on backend
		}
	}

	pageFlyslider: any

	init(initial = false) {
		const domSlider = this.DOM
		// da init roi 
		const { id } = this.props.elementContainer.state
		if (domSlider.getAttribute('data-pf-slider-x-inited') && this.pageFlyslider.destroy) {
			this.pageFlyslider.updateOptions(this.getOptions)
			this.pageFlyslider.goto(storeSlider[id].current ? storeSlider[id].current : 0)
			return
		}
		this.pageFlyslider = new PageFlySliderController(domSlider, this.getOptions)


		if (initial) { storeSlider[id] = {} }
		storeSlider[id].init = this.pageFlyslider
		this.pageFlyslider.goto(storeSlider[id].current ? storeSlider[id].current : 0)
    }
    static get InspectorDuc() {
        return {
            general:null
        }
    }


	componentDidMount() {
		this.init(true) 
	}

	componentWillUpdate(nextProps) {
		const propsKey = React.Children.map(this.props.children, (child: any, i) => child ? child.key : '')
		const nextPropsKey = React.Children.map(nextProps.children, (child: any, i) => child ? child.key : '')
		if (nextPropsKey.toString() !== propsKey.toString()) {
			this.destroy()
		}
	}

	async destroy() {
		if (this.DOM.getAttribute('data-pf-slider-x-inited') && this.pageFlyslider.destroy) {
			// save the current slider before re-init
			const curr = this.pageFlyslider.opts.curr
			const { id } = this.props.elementContainer.state
			storeSlider[id].current = curr

			this.pageFlyslider.destroy()
		}
		return
	}

	componentDidUpdate() {
	
			const countChildren = React.Children.count(this.props.children)
			// check count children, if it as  0 else not update
			if (countChildren === 0) { return }
			this.init()
		
	}

	render() {
		return <$Slider className="ok" >
				{this.props.children}
			</$Slider>
		
	}
}


const $Slider = styled.div`
	/* visibility : ${(props:any) => props.view ? 'hidden' : ''}; */
`
export default enhanceElement(Slider)
