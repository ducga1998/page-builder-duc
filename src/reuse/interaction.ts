class Interation {
    dropTarget = null
    position = ''
    categoryDrapStart = ''
    doing  = false
    dropDom = null
    typeElement = ''
    reset() {
       setTimeout(() => {
        this.dropTarget = null
        this.position = ''
        this.typeElement = ''
        this.doing = false
        this.dropDom = null
       }, 100) 
    }
}
export default new Interation()