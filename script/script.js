'strict mode';

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
let storeItemArr = [];
// Empty array for the cart item objects
let cartItemArr = [];

/* Functions */

// Called when the page loads
function initialize() {
	// Get current day / time
	let currDayTime = new Date();

	// Display the current Day/Time to screen
	document.getElementById('dateArea').innerHTML = currDayTime;

	// Populate the store items array with at least 15 item objects
	const basketball = new storeItem(
		'SPOR0001',
		'NBA Official game basketball',
		199.95,
		70,
		5,
		'Sports & Outdoors',
		4.99,
		new Array(),
		`- Wilson NBA Authentic Series Basketball - Indoor/Outdoor, Size 7 - 29.5"\n- NBA OFFICIAL: Wilson is the official basketball of the NBA.`,
		'img/storeItems/basketball.jpg'
	);

	const adapter_USB_C_20W = new storeItem(
		'ELEC0001',
		'Apple 20W USB-C Power Adapter',
		24.99,
		152,
		10,
		'Electronics',
		0.49,
		new Array(),
		`- The Apple 20W USB’C Power Adapter offers fast charging at home, in the office, or on the go.\n- Works with iPhone, AirPods, iPad and Apple Watch.`,
		'img/storeItems/USB_C_20W_Adapter.jpg'
	);

	const the_VHC = new storeItem(
		'BOOK0001',
		'The Very Hungry Caterpillar',
		12.99,
		21,
		2,
		'Books',
		0,
		new Array(),
		`- THE all-time classic picture book, from generation to generation, sold somewhere in the world every 30 seconds!`,
		'img/storeItems/the_VHC.jpg'
	);

	const utopia_pillows = new storeItem(
		'HOME0001',
		'Utopia Bedding Throw Pillows',
		20.99,
		36,
		3,
		'Home & Kitchen',
		0.99,
		new Array(),
		'THROW PILLOW PACK - Pack of 2 decorative throw pillows for your couches or bedroom; they are neither too big nor too small and they give off a homely vibe',
		'img/storeItems/utopia_pillows.jpg'
	);

	const owala_water_bottle = new storeItem(
		'SPOR0002',
		'Owala FreeSip Insulated Stainless Steel Water Bottle',
		42.99,
		5,
		7,
		'Sports & Outdoors',
		1.49,
		new Array(),
		`32-ounce insulated stainless-steel water bottle with a FreeSip spout and push-button lid with lock`,
		'img/storeItems/owala_water_bottle.jpg'
	);

	const KEZEF_necklace = new storeItem(
		'CLOT0001',
		'KEZEF Creations Cable Chain Necklace',
		7.6,
		157,
		5,
		'Clothing, Shoes & Accessories',
		0,
		new Array(),
		`TARNISH RESISTANT: Each chain is crafted of solid 925 Sterling Silver, prevents oxidation\nLIGHT and DURABLE: The chain is designed to comfortably fit and contains a secure spring ring clasp perfect for Pendants and Charms`,
		'img/storeItems/KEZEF_necklace.jpg'
	);

	const dumbbell_hand_weights_set = new storeItem(
		'SPOR0003',
		'Neoprene Coated Dumbbell Hand Weight Set',
		23.83,
		24,
		3,
		'Sports & Outdoors',
		0.79,
		new Array(),
		`Set of 2 dumbbells for resistance training; each dumbbell weighs 5 pounds\nEasy-grip neoprene coating for a secure hold`,
		'img/storeItems/hand_weights_set.jpg'
	);

	const APPLE_airtag = new storeItem(
		'ELEC0002',
		'Apple AirTag 4 Pack',
		129.0,
		241,
		10,
		'Electronics',
		3.0,
		new Array(),
		`Keep track of and find your items alongside friends and devices in the Find My app. Simple one-tap setup instantly connects AirTag with your iPhone or iPad.`,
		'img/storeItems/apple_airtag.jpg'
	);

	const first_100_words = new storeItem(
		'BOOK0002',
		'First 100 Words: A Padded Board Book',
		5.99,
		65,
		3,
		'Books',
		0.15,
		new Array(),
		`Your little one will soon learn some essential first words and pictures with this bright board book. There are 100 color photographs to look at and talk about, and 100 simple first words to read and learn, too. The pages are made from tough board for hours of fun reading, and the cover is softly padded for little hands to hold.`,
		'img/storeItems/first_100_words.jpg'
	);

	const BRITA_standard_water_filter = new storeItem(
		'HOME0002',
		'Brita Standard Water Filter, 3 Count',
		24.97,
		90,
		3,
		'Home & Kitchen',
		0,
		new Array(),
		`Get great-tasting water with Brita Standard water filter replacement; Packaging may vary. Switch to Brita and you can save money and replace 1800 single-use plastic bottles* a year *500 mL water bottle.
		Reduce Chlorine (taste & odour) Mercury, Copper, Zinc, Cadmium.`,
		'img/storeItems/brita_standard_water_filter.jpg'
	);

	const BENSORTS_pillow_sandals = new storeItem(
		'CLOT0002',
		'BenSorts Women Men Pillow Sandals',
		30.49,
		99,
		2,
		'Clothing, Shoes & Accessories',
		1.15,
		new Array(),
		`【Thickened Soft Sole EVA Foam】The pillow slippers use EVA soles and protection design to make you feel like stepping on the pillow. Forward and backward shock absorption, reduce foot damage.`,
		'img/storeItems/BENSORTS_pillow_sandals.jpg'
	);

	const wiper_blade_26in = new storeItem(
		'AUTO0001',
		'Weatherbeater Wiper Blade, Black, 26 Inch',
		12.97,
		20,
		1,
		'Automotive',
		0,
		new Array(),
		`Rain-X Weatherbeater are high-quality conventional wiper blades that have stood the test of time, meeting or exceeding OEM standards for quality and durability`,
		'img/storeItems/wiper_blade_26in.jpg'
	);

	const SHURE_SM58_LC = new storeItem(
		'MUSI0001',
		'Shure SM58-LC Cardioid Dynamic Vocal Microphone',
		139.0,
		55,
		3,
		'Musical Instrument, Stage & Studio',
		0,
		new Array(),
		`EXEPTIONAL VOCAL PERFORMANCE - The SM58-LC delivers high-quality vocal reproduction, thanks to its tailored frequency response and brightened midrange for clear and present vocals.\nWHAT’S IN THE BOX - Shure SM58 Dynamic Vocal Microphone, 1 - A25D Swivel Stand Adapter, 1 - 95A2313 Storage Bag, Free 2-YEAR WARRANTY included.`,
		'img/storeItems/SHURE_SM58_LC.jpg'
	);

	const FOCUSRITE_SCARLETT_2i2_Gen4 = new storeItem(
		'MUSI0002',
		'Focusrite Scarlett 2i2 4th Gen USB Audio Interface',
		289.0,
		9,
		1,
		'Musical Instrument, Stage & Studio',
		10.89,
		new Array(),
		`The artist's interface: Scarlett's 4th Gen mic pres and a massive 120dB dynamic range deliver the audio performance you'd find in a pro studio.`,
		'img/storeItems/SCARLETT_2i2_gen4.jpg'
	);

	const car_trashcan = new storeItem(
		'AUTO0002',
		'Car Trash Can',
		18.99,
		37,
		2,
		'Automotive',
		0.99,
		new Array(),
		`【LARGE CAPACITY 】The size is 9.25*5.25*10.75 inches, our car trash can with a large compartment, two elastic mesh pockets on the side, and an open pocket at the front, which can hold 2.25 Gallon/8.5L capacity to save space, it can be folded up when not in use, very convenient.`,
		'img/storeItems/car_trashcan.jpg'
	);

	storeItemArr.push(
		basketball,
		adapter_USB_C_20W,
		the_VHC,
		utopia_pillows,
		owala_water_bottle,
		KEZEF_necklace,
		dumbbell_hand_weights_set,
		APPLE_airtag,
		first_100_words,
		BRITA_standard_water_filter,
		BENSORTS_pillow_sandals,
		wiper_blade_26in,
		SHURE_SM58_LC,
		FOCUSRITE_SCARLETT_2i2_Gen4,
		car_trashcan
	);

	// Call the functions that display the store items array and cart items array
	displayStoreItems();
	displayCartItems();
}

// Display dynamically generated store items table
function displayStoreItems() {
	const storeItemDisplayDiv = document.getElementById('storeItemDisplayDiv');
	// Empty the store item display div
	storeItemDisplayDiv.innerHTML = '';

	// Create Store Item Display Table
	const inventoryDisplayTbl = document.createElement('table');
	// Create a table head which will contain store item properties
	const tblHead = document.createElement('thead');
	// Create a table row
	const tr = document.createElement('tr');

	// Create seven heading columns containing property names
	for (let i = 0; i < 7; i++) {
		// Create table header elements and append each of them to tr element
		const th = document.createElement('th');
		switch (i) {
			// First column
			case 0:
				th.appendChild(document.createTextNode('ID'));
				tr.appendChild(th);
				break;

			// Second column
			case 1:
				th.appendChild(document.createTextNode('Product Name'));
				tr.appendChild(th);
				break;

			// Third column
			case 2:
				th.appendChild(document.createTextNode('Price'));
				tr.appendChild(th);
				break;

			// Fourth column
			case 3:
				th.appendChild(document.createTextNode('Quantity on Hand'));
				tr.appendChild(th);
				break;

			// Fifth column
			case 4:
				th.appendChild(document.createTextNode('Max'));
				tr.appendChild(th);
				break;

			// Sixth column
			case 5:
				th.appendChild(document.createTextNode('Category'));
				tr.appendChild(th);
				break;

			// Seventh column
			default:
				th.appendChild(document.createTextNode('Image'));
				tr.appendChild(th);
				break;
		}
	}
	// Append tr element to thead element
	tblHead.appendChild(tr);
	// Append thead element to table element
	inventoryDisplayTbl.appendChild(tblHead);

	// Create Table Body Element
	const tblBody = document.createElement('tbody');

	// Generate Dynamic Table as much as the number of items
	for (let i = 0; i < storeItemArr.length; i++) {
		// currently selected item
		let currItem = storeItemArr[i];

		// Create tr element
		const row = document.createElement('tr');

		for (let j = 0; j < 7; j++) {
			// Create a <td> element and a text node, make the text node the contents of the <td>, and put the <td> at the end of the table row
			const cell = document.createElement('td');
			let cellText;
			switch (j) {
				// First column
				case 0:
					cellText = document.createTextNode(currItem.id);
					cell.appendChild(cellText);
					break;

				// Second column
				case 1:
					cellText = document.createTextNode(currItem.name);
					cell.appendChild(cellText);
					break;

				// Third column
				case 2:
					cellText = document.createTextNode(expressPrice(convertPrice(currItem.priceCA)));
					cell.appendChild(cellText);
					break;

				// Fourth column
				case 3:
					cellText = document.createTextNode(currItem.quantityOnHand);
					cell.appendChild(cellText);
					break;

				// Fifth column
				case 4:
					cellText = document.createTextNode(currItem.maxPerCustomer);
					cell.appendChild(cellText);
					break;

				// Sixth column
				case 5:
					cellText = document.createTextNode(currItem.category);
					cell.appendChild(cellText);
					break;

				// Seventh column
				case 6:
					// Create image element
					const img = document.createElement('img');
					img.onload = function () {
						// Save width of original image
						const originalWidth = img.naturalWidth;
						// Save height of original image
						const originalHeight = img.naturalHeight;
						// The ratio of width to height
						const ratio = originalWidth / originalHeight;

						// If width is greater, set it to 100 and calculate the height
						if (originalHeight > originalWidth) {
							img.height = 100;
							img.width = 100 * ratio;
						}
						// If width is greater, set it to 100 and calculate the height
						else {
							img.width = 100;
							img.height = 100 / ratio;
						}
					};
					img.src = currItem.image; // Set the source of your image
					img.alt = 'Item Image'; // Set alt text for accessibility
					cell.appendChild(img);
					break;

				default:
					break;
			}
			// td element to tr
			row.appendChild(cell);
		}
		// add the row to the end of the table body
		tblBody.appendChild(row);
	}
	// put the <tbody> in the <table>
	inventoryDisplayTbl.appendChild(tblBody);
	storeItemDisplayDiv.appendChild(inventoryDisplayTbl);
}

// Display dynamically generated cart items table
function displayCartItems() {
	// if cart item does not exist
	if (cartItemArr.length === 0) {
		// Output a message in cart item display div
		document.getElementById('cartItemDisplayDiv').innerHTML = '<br>No Items in Cart. Add Items to Cart.';
	}
	// if cart item exists
	else {
		// Cart Item Display Div
		const cartItemDisplayDiv = document.getElementById('cartItemDisplayDiv');
		// Empty cart item display div
		cartItemDisplayDiv.innerHTML = '';

		// Create Table Elements
		const cartItemDisplayTbl = document.createElement('table');
		const tblHead = document.createElement('thead');
		const tr = document.createElement('tr');

		// Generate 4 heading columns
		for (let i = 0; i < 4; i++) {
			const th = document.createElement('th');
			switch (i) {
				// First column
				case 0:
					th.appendChild(document.createTextNode('ID'));
					tr.appendChild(th);
					break;

				// Second column
				case 1:
					th.appendChild(document.createTextNode('Price'));
					tr.appendChild(th);
					break;

				// Third column
				case 2:
					th.appendChild(document.createTextNode('Quantity'));
					tr.appendChild(th);
					break;

				// Fourth column
				default:
					th.appendChild(document.createTextNode('Subtotal'));
					tr.appendChild(th);
					break;
			}
		}
		// Add element to parent element of each
		tblHead.appendChild(tr);
		cartItemDisplayTbl.appendChild(tblHead);

		// Create Table Body Element
		const tblBody = document.createElement('tbody');

		// Generate Dynamic Table as much as the number of items in the cart
		for (let i = 0; i < cartItemArr.length; i++) {
			// currently selected item
			let currItem = cartItemArr[i];

			const row = document.createElement('tr');

			for (let j = 0; j < 4; j++) {
				// Create a <td> element and a text node, make the text node the contents of the <td>, and put the <td> at the end of the table row
				const cell = document.createElement('td');

				let cellText;

				switch (j) {
					// First column
					case 0:
						cellText = document.createTextNode(currItem.id);
						cell.appendChild(cellText);
						break;

					// Second column
					case 1:
						cellText = document.createTextNode(expressPrice(convertPrice(currItem.priceCA)));
						cell.appendChild(cellText);
						break;

					// Third column
					case 2:
						cellText = document.createTextNode(currItem.quantity);
						cell.appendChild(cellText);
						break;

					// Fourth column
					case 3:
						// Calculate subtotal
						let subtotal = convertPrice(currItem.priceCA) * currItem.quantity;
						cellText = document.createTextNode(expressPrice(subtotal));
						cell.appendChild(cellText);
						break;
				}

				row.appendChild(cell);
			}
			// add the row to the end of the table body
			tblBody.appendChild(row);
		}
		// put the <tbody> in the <table>
		cartItemDisplayTbl.appendChild(tblBody);
		cartItemDisplayDiv.appendChild(cartItemDisplayTbl);
	}
}

// Calculate and display the totals for the order in the cart
function createCartTotals() {
	// Save subtotal of the cart
	let itemSubtotal = 0;
	// Save estimated shipping
	let estimatedShipping = 0;

	// Loop through each item in the cartItemArr array
	for (let i = 0; i < cartItemArr.length; i++) {
		// current item from the array
		let currItem = cartItemArr[i];

		// Calculate subtotal for the current item by multiplying its prize by quantity
		itemSubtotal += currItem.priceCA * currItem.quantity;

		// Accumulate shipping cost for the current item
		estimatedShipping += currItem.shippingCost;
	}
	// Calculate subtotal by adding itemSubtotal and estimatedShipping
	let subtotal = itemSubtotal + estimatedShipping;

	// Calculate estimated tax by multiplying subtotal by 0.13 (assuming 13% tax rate)
	let estimatedTax = subtotal * 0.13;

	// Calculate order total by adding subtotal and estimatedTax
	let orderTotal = subtotal + estimatedTax;

	// Generate HTML output to display subtotal, estimated shipping, estimated tax, and order total
	let output = `<hr>Items Subtotal: $${itemSubtotal.toFixed(2)}<br>Estimated Shipping: $${estimatedShipping.toFixed(
		2
	)}<br><br>Subtotal: $${subtotal.toFixed(2)}<br>Estimated Tax: $${estimatedTax.toFixed(
		2
	)}<br>Order Total: $${orderTotal.toFixed(2)}`;

	// Append the output to cart item display div
	document.getElementById('cartItemDisplayDiv').innerHTML += output;
}

// Change flag image as the currency is changed
function changeFlag() {
	// Flag image
	const currFlag = document.getElementById('currencyFlag');
	// Currency
	const currency = document.getElementById('currencySelector');

	if (currency.value === 'CAD') {
		currFlag.src = 'img/flags/CANADA.jpg';
	} else if (currency.value === 'USD') {
		currFlag.src = 'img/flags/USA.jpg';
	} else if (currency.value === 'KRW') {
		currFlag.src = 'img/flags/SOUTH_KOREA.jpg';
	}
}

// Change quantity select dropdown options as item id is changed
function changeQtyDropdown() {
	// if the selected item exists in the storeItemArr
	if (storeItemArr.find((item) => item.id === document.getElementById('addItemId').value)) {
		// Get maxPerCustomer and quantityOnHand values for the selected item
		const maxPerCustomer = storeItemArr.find(
			(item) => item.id === document.getElementById('addItemId').value
		).maxPerCustomer;
		const quantityOnHand = storeItemArr.find(
			(item) => item.id === document.getElementById('addItemId').value
		).quantityOnHand;

		// Determine the maximum quantity that can be selected
		const maxNumber = Math.min(maxPerCustomer, quantityOnHand);
		// Validate maxNumber
		if (maxNumber >= 1) {
			// Get Dropdown Element
			let dropDown = document.getElementById('addItemQty');

			// Empty Dropdown
			dropDown.innerHTML = '';

			// Add options to dropDown
			for (let x = 0; x <= maxNumber; x++) {
				// Set first option as Select Quantity
				if (x === 0) {
					let tempElement = document.createElement('option');
					tempElement.innerHTML = '- Select Quantity -';
					tempElement.value = '';
					dropDown.appendChild(tempElement);
				} else {
					let tempElement = document.createElement('option');
					tempElement.innerHTML = x;
					tempElement.value = x;
					dropDown.appendChild(tempElement);
				}
			}
		}
	}
	// If the selected item doesn't exist in the storeItemArr, reset the dropdown
	else {
		let dropDown = document.getElementById('addItemQty');

		// Empty Dropdown
		dropDown.innerHTML = '';
		let tempElement = document.createElement('option');
		tempElement.innerHTML = 'Select Quantity';
		tempElement.value = '';
		dropDown.appendChild(tempElement);
	} // end if
}

// Add item to cart
function addToCart() {
	// Find the selected item object in the storeItemArr
	let selectedStoreItemObject = storeItemArr.find((item) => item.id === selectedItem);

	// if the selected item does not exist in the storeItemArr
	if (!selectedStoreItemObject) {
		// Display validation message if the item ID is not valid
		document.getElementById(
			'addIDValidationMessage'
		).innerHTML = `Item with the ID "${selectedItem}" does not exist. Please enter a valid item ID.`;
	}
	// if the selected item exists in the storeItemArr
	else {
		// Clear the validation message if the item ID is valid
		document.getElementById('addIDValidationMessage').innerHTML = '';

		// Find the selected item object in the cartItemArr
		let selectedCartItemObject = cartItemArr.find((item) => item.id === selectedItem);

		// if the selected item is not already in the cart
		if (!selectedCartItemObject) {
			// Create a new cart item object using selected item details
			const newCartItem = new cartItem(
				selectedStoreItemObject.id,
				selectedStoreItemObject.priceCA,
				document.getElementById('addItemQty').value,
				selectedStoreItemObject.shippingCost
			);

			// Add the new cart item to the cartItemArr
			cartItemArr.push(newCartItem);

			// Deduct the selected quantity of the item from its quantity on hand
			selectedStoreItemObject.quantityOnHand -= qtySelected;
		}
		// If the selected item is already in the cart
		else {
			// If the sum of the existing quantity in the cart and the newly selected quantity exceeds the maximum allowed per customer
			if (selectedCartItemObject.quantity + qtySelected > selectedStoreItemObject.maxPerCustomer) {
				// Adjust the inventory by subtracting the difference between the max allowed quantity
				// and the current quantity in the cart from the quantity on hand.
				selectedStoreItemObject.quantityOnHand -=
					selectedStoreItemObject.maxPerCustomer - selectedCartItemObject.quantity;

				// Adjust the cart item's quantity to the maximum quantity allowed per customer
				selectedCartItemObject.quantity = selectedStoreItemObject.maxPerCustomer;
			}
			// If adding the selected quantity to the cart does not exceed the max per customer
			else {
				// Simply add the selected quantity to the existing quantity in the cart for the item
				selectedCartItemObject.quantity += qtySelected;

				// And reduce the quantity on hand in the inventory by the amount just added to the cart
				selectedStoreItemObject.quantityOnHand -= qtySelected;
			}
		}
	}

	// Call the functions for displaying store/cart items and calculation cart pricing
	displayStoreItems();
	displayCartItems();
	createCartTotals();
}

// Remove item from the cart
function removeFromCart() {
	// Selected item
	const selectedItem = document.getElementById('addItemId').value;
	// Get quantity of item selected
	const qtySelected = document.getElementById('addItemQty').value;

	// Find the selected item object in the cartItemArr
	let selectedCartItemObject = cartItemArr.find((item) => item.id === selectedItem);

	// Find the selected item object in the storeItemArr
	let selectedStoreItemObject = storeItemArr.find((item) => item.id === selectedItem);

	// if the selected item does not exist in the storeItemArr
	if (!selectedCartItemObject) {
		// Display validation message if the item ID is not valid
		document.getElementById(
			'addIDValidationMessage'
		).innerHTML = `Item with the ID "${selectedItem}" does not exist in the cart. Please enter a valid item ID.`;
	}
	// if the selected item exists in the storeItemArr
	else {
		// If the quantity to remove is less than the current quantity in the cart
		if (qtySelected < selectedCartItemObject.quantity) {
			// Subtract the specified removal quantity from the item's quantity in the cart
			selectedCartItemObject.quantity -= qtySelected;
			// Add the removed quantity back to the store's inventory
			selectedStoreItemObject.quantity += qtySelected;
		}
		// If the quantity to remove equals or exceeds the item's quantity in the cart
		else {
			// Remove the item entirely from the cart array
			cartItemArr = cartItemArr.filter((item) => item.id !== selectedItem);
			// Add the full quantity of the removed item back to the store's inventory
			selectedStoreItemObject.quantityOnHand += selectedCartItemObject.quantity;
		}
	}

	// Call the functions for displaying store/cart items and calculation cart pricing
	displayStoreItems();
	displayCartItems();
	createCartTotals();
}

// Review Item
function addReviewItem() {
	// Get ID of selected item
	const selectedItem = document.getElementById('reviewId').value;

	// Find the selected item object in the storeItemArr
	let selectedStoreItemObject = storeItemArr.find((item) => item.id === selectedItem);

	// if the selected item does not exist in the storeItemArr
	if (!selectedStoreItemObject) {
		// Display validation message if the item ID is not valid
		document.getElementById(
			'reviewIdMsg'
		).innerHTML = `Item with the ID "${selectedItem}" does not exist. Please enter a valid item ID.`;
	}
	// if the selected item exists
	else {
		document.getElementById('reviewIdMsg').innerHTML = ``;
		const review = document.getElementById('reviewDesc').value;
		const rating = document.getElementById('reviewNum').value;
		console.log(typeof rating);
		if (rating === '') {
			document.getElementById('addRatingValidationMessage').innerHTML = 'Please select a rating between 1 and 5.';
		} else {
			document.getElementById('addRatingValidationMessage').innerHTML = '';
			const newReview = new reviewItem(review, rating);
			selectedStoreItemObject.reviews.push(newReview);
		}
	}
}

// Function that is called when the currency is changed
function currencyChanged() {
	// Call the function to handle flag
	changeFlag();

	// Call functions to display store items and cart items with updated currency
	displayStoreItems();
	displayCartItems();
}

// Display
function displayItemDetails() {
	// Get ID of selected item
	const selectedItem = document.getElementById('addItemId').value;

	// Find the selected item object in the storeItemArr
	let selectedStoreItemObject = storeItemArr.find((item) => item.id === selectedItem);

	if (!selectedStoreItemObject) {
		// Display validation message if the item ID is not valid
		document.getElementById(
			'addIDValidationMessage'
		).innerHTML = `Item with the ID "${selectedItem}" does not exist. Please enter a valid item ID.`;
	} else {
		document.getElementById('addIDValidationMessage').innerHTML = '';
		let message = `Item Details\nID: ${selectedStoreItemObject.id}\nName: ${
			selectedStoreItemObject.name
		}\nPrice: ${expressPrice(convertPrice(selectedStoreItemObject.priceCA))}\nQuantity on hand: ${
			selectedStoreItemObject.quantityOnHand
		}\nMaximum per customer: ${selectedStoreItemObject.maxPerCustomer}\nCategory: ${
			selectedStoreItemObject.category
		}\nShipping Cost: ${expressPrice(convertPrice(selectedStoreItemObject.shippingCost))}\n\nDescription: \n${
			selectedStoreItemObject.description
		}\n\n`;

		if (selectedStoreItemObject.reviews.length > 0) {
			message += 'Reviews\n';
			let sumRating = 0;
			for (let i = 1; i <= selectedStoreItemObject.reviews.length; i++) {
				let currReview = selectedStoreItemObject.reviews[i - 1];
				sumRating += currReview.rating;
				message += `Review ${i}: ${currReview.review}\n`;
			}
			let averageRating = sumRating / selectedStoreItemObject.reviews.length;

			message += `\nAverage Rating: ${averageRating.toFixed(1)}`;
		}
		alert(message);
	}
}

function convertPrice(price) {
	const currency = document.getElementById('currencySelector').value;
	const CADtoUSD = 0.74;
	const CADtoKRW = 995.58;
	if (currency === 'CAD') {
		return price;
	} else if (currency === 'USD') {
		return price * CADtoUSD;
	} else {
		return price * CADtoKRW;
	}
}

function expressPrice(price) {
	const currency = document.getElementById('currencySelector').value;
	if (currency === 'CAD') {
		return `$${price.toFixed(2)}`;
	} else if (currency === 'USD') {
		return `$${price.toFixed(2)} (USD)`;
	} else {
		return `₩${(Math.ceil(price / 100) * 100).toLocaleString()} (KRW)`;
	}
}

function validateSelectItems() {
	const itemID = document.getElementById('addItemId').value;
	const quantity = document.getElementById('addItemQty').value;
	const IDValidationMsg = document.getElementById('addIDValidationMessage');
	const qtyValidationMsg = document.getElementById('addQtyValidationMessage');

	// Reset validation messages
	IDValidationMsg.innerHTML = '';
	qtyValidationMsg.innerHTML = '';

	// Check if the item exists
	if (!storeItemArr.find((item) => item.id === itemID)) {
		IDValidationMsg.innerHTML = `Item with the ID "${itemID}" does not exist. Please enter a valid item ID.`;
		return false; // Return false to indicate validation failed
	}

	// Check if quantity is valid
	if (!Number.isInteger(quantity) || quantity <= 0) {
		qtyValidationMsg.innerHTML = 'Please enter a valid quantity.';
		return false;
	}

	return true;
}

function validateCartItems() {
	const itemID = document.getElementById('reviewId').value;
	const rating = document.getElementById('reviewNum').value;
	const IDValidationMsg = document.getElementById('reviewIdMsg');
	const ratingValidationMsg = document.getElementById('addRatingValidationMessage');

	// Reset validation messages
	IDValidationMsg.innerHTML = '';
	ratingValidationMsg.innerHTML = '';

	// Check if the item exists
	if (!cartItemArr.find((item) => item.id === itemID)) {
		IDValidationMsg.innerHTML = `Item with the ID "${itemID}" does not exist in the cart. Please enter a valid item ID.`;
		return false; // Return false to indicate validation failed
	}

	// Check if quantity is valid
	if (rating === 0) {
		ratingValidationMsg.innerHTML = 'Please enter a valid rating. (1 ~ 5)';
		return false;
	}

	return true;
}

// Call initialize() function when the page loads
window.onload = initialize();
