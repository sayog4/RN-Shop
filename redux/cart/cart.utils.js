export const addItemToCart = ( oldItems, newItemToBeAdded ) => {
  const existingItem = oldItems.find( item => item.id === newItemToBeAdded.id );

  if( existingItem ){
    return  oldItems.map( item => item.id === newItemToBeAdded.id ? { ...item, quantity: item.quantity + 1 } : item ) 
  }

  return [ ...oldItems, { ...newItemToBeAdded , quantity: 1 } ]
};

export const removeItemCart = ( oldItems, itemToBeRemoved ) => {
  const existingItem = oldItems.find( item => item.id === itemToBeRemoved.id );

  if( existingItem.quantity === 1 ){
    return oldItems.filter( item => item.id != itemToBeRemoved.id) 
  }
  return oldItems.map( item => item.id === itemToBeRemoved.id ? { ...item, quantity: item.quantity - 1 } : item )
}