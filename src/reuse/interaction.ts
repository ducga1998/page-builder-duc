class Interation {
    dropTarget = null
    position = ''
    categoryDrapStart = ''
    doing  = false
    reset() {
       setTimeout(() => {
        this.dropTarget = null
        this.position = ''
        this.doing = false
       }, 100) 
    }
}
export default new Interation()