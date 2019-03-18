class Interation {
    dropTarget = null
    position = ''
    categoryDrapStart = ''
    doing  = false
    dropDom = null
    reset() {
       setTimeout(() => {
        this.dropTarget = null
        this.position = ''
        this.doing = false
        this.dropDom = null
       }, 100) 
    }
}
export default new Interation()