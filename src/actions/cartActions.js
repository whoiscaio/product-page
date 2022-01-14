const openCart = () => ({
  type: 'open_cart',
});

const closeCart = () => ({
  type: 'close_cart',
});

const addItem = (item) => ({
  type: 'add_item',
  item,
})

const removeItem = (itemId) => ({
  type: 'remove_item',
  itemId,
})

export { openCart, closeCart, addItem, removeItem };