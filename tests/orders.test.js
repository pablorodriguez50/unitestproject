const { createOrder, getOrder, updateOrder, deleteOrder } = require('../orders');

describe('Order CRUD', () => {
  it('should create a new order', () => {
    const newOrder = { id: 1, item: 'PlayStation 5 (1TB)' };
    expect(createOrder(newOrder)).toEqual(newOrder);
  });

  it('should retrieve an existing order', () => {
    const orderId = 1;
    expect(getOrder(orderId)).toEqual({ id: 1, item: 'PlayStation 5 (1TB)' });
  });

  it('should update an existing order', () => {
    const orderId = 1;
    const updatedOrder = { item: 'Steam Deck (2TB)' };
    expect(updateOrder(orderId, updatedOrder)).toEqual({ id: 1, item: 'Steam Deck (2TB)' });
  });

  it('should delete an existing order', () => {
    const orderId = 1;
    expect(deleteOrder(orderId)).toEqual({ id: 1, item: 'Steam Deck (2TB)' });
    expect(getOrder(orderId)).toBeUndefined();
  });
});
