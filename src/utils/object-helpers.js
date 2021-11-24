
export const updateObjectInArray = (items, itemID, objPropName, newObjProperty) => {
    return items.map(i => {
        if(i[objPropName] === itemID){
            return {...i, ...newObjProperty}
        }
        return i
    })
}