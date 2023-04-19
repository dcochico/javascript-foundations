function createCustomer(name, bill, bookings) {
  return customer = {
    name: name,
    bill: bill,
    bookings: bookings || []
  }
}

function greeting(customer) {
  if (customer.bookings.length < 1) {
    return `${customer.name}! Welcome to Happy Spa`;
  } else {
    return `${customer.name}! Welcome back to Happy Spa`;
  }
}

function createService(name, cost) {
  var service = {
    name: name,
    cost: cost
  }
  if (!service.name && !service.cost) {
    return 'Please provide service name and cost.';
  } else {
    return service;
  }
}

function bookServices(customer, service) {
  customer.bookings.push(service.name);
  customer.bill += service.cost;
  return customer;
}

function applyGiftCard(services, amount) {
  var affordableServices = [];
  for (var i = 0; i < services.length; i++) {
    if (services[i].price <= amount) {
      affordableServices.push(services[i].name);
    }
  }
  return affordableServices;
}

module.exports = { 
  createCustomer,
  greeting,
  bookServices,
  createService,
  applyGiftCard
 }
