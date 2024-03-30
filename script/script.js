/* Object Constructors */

// Store Item
function storeItem(
	id,
	name,
	priceCA,
	quantityOnHand,
	maxPerCustomer,
	category,
	shippingCost,
	reviews,
	description,
	image
) {
	this.id = id; // String
	this.name = name; // String
	this.priceCA = priceCA; // Number
	this.quantityOnHand = quantityOnHand; // Number
	this.maxPerCustomer = maxPerCustomer; // Number
	this.category = category; // String
	this.shippingCost = shippingCost; // Number
	this.reviews = reviews; // Array
	this.description = description; // String
	this.image = image; // String
}

// Cart Item
function cartItem(id, priceCA, quantity, shippingCost) {
	this.id = id; // String
	this.priceCA = priceCA; // Number
	this.quantity = quantity; // Number
	this.shippingCost = shippingCost; // Number
}

// Review Item
function reviewItem(review, rating) {
	this.review = review; // String
	this.rating = rating; // Number
}

/* Global Variables */

// Empty array for the store item objects
const storeItemArr = [];
// Empty array for the cart item objects
const cartItemArr = [];
