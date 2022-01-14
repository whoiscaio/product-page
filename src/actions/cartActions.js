const openCart = () => ({
  type: 'open_cart',
});

const closeCartAnimate = () => ({
  type: 'close_cart_animate',
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

export { openCart, closeCartAnimate, closeCart, addItem, removeItem };