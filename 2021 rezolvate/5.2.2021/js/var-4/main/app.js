function removeOrderItem(orderInfo, position){

    if(!Array.isArray(orderInfo.items)){
        throw new Error('Items should be an array')
    }

    for(let el of orderInfo.items){
        if(!el.price||!el.quantity){
        throw new Error('Malformed item')
        }
    }

    if(position<0||position>=orderInfo.items.length){
        throw new Error('Invalid position')
    }
    orderInfo.total-= orderInfo.items[position].price*orderInfo.items[position].quantity
    orderInfo.items.splice(position,1)
    return orderInfo
}

const app = {
    removeOrderItem
};

module.exports = app;