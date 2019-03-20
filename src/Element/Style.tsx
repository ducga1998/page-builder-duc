import * as React from 'react'
export const StyleContext  = React.createContext(null)
class Style extends React.Component<any> {
    refStyle 
    state  = {
        sheets : null
    }
    componentDidMount(){
        const instance = document.styleSheets
        const sheets =  Array.from(instance).find(sheet => sheet.ownerNode === this.refStyle);
        console.log('sheets',sheets)
        this.setState({sheets})
        // in temp1 is sheets
        // Array.from(temp1.cssRules).filter(item => item.selectorText.includes('p'))
    }   
    render() {
        return <>
        <style ref={e => this.refStyle = e} ></style>
        {this.refStyle ?  <StyleContext.Provider value={this.refStyle.sheet}>  {this.props.children}</StyleContext.Provider>  : null}
        </>
    }
}
export default Style

// => setStyle  for each screen 