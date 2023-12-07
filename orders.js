let orders = [];

function createOrder(order) {
  orders.push(order);
  return order;
}

function getOrder(orderId) {
  return orders.find(order => order.id === orderId);
}

function updateOrder(orderId, newOrder) {
  const index = orders.findIndex(order => order.id === orderId);
  if (index !== -1) {
    orders[index] = { ...orders[index], ...newOrder };
    return orders[index];
  }
  return null;
}

function deleteOrder(orderId) {
  const index = orders.findIndex(order => order.id === orderId);
  if (index !== -1) {
    return orders.splice(index, 1)[0];
  }
  return null;
}

module.exports = { createOrder, getOrder, updateOrder, deleteOrder };