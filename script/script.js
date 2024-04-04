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
const storeItemArr = [];
// Empty array for the cart item objects
const cartItemArr = [];

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
		'NBA OFFICIAL GAME BASKETBALL',
		199.95,
		70,
		5,
		'Sports & Outdoors',
		4.99,
		new Array(),
		`- Wilson NBA Authentic Series Basketball - Indoor/Outdoor, Size 7 - 29.5"\n- NBA OFFICIAL: Wilson is the official basketball of the NBA. This ball features official NBA branding coupled with the iconic Wilson script\n- PURE FEEL COVER: Pro-level feel and durability\n- EVER BOUNCE CONSTURCTION: Consistent bounce every time\n- AIR RETENTION: Inflation retention lining creats longer lasting air retention`,
		'/img/storeItems/basketball.jpg'
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
		`- The Apple 20W USB’C Power Adapter offers fast charging at home, in the office, or on the go.\n- While the power adapter is compatible with any USB C-enabled device, Apple recommends pairing it with the iPad Pro and iPad Air for optimal charging performance.
    You can also pair it with iPhone 8 or later to take advantage of the fast-charging feature.\n- Works with iPhone, AirPods, iPad and Apple Watch.\n- USB-C wall charger only, charging cable sold separately.`,
		'/img/storeItems/USB_C_20W_Adapter.jpg'
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
		`- THE all-time classic picture book, from generation to generation, sold somewhere in the world every 30 seconds! Have you shared it with a child or grandchild in your life?

    Including a special feature, die cuts, this beautiful board book edition, perfect for teaching the days of the week, offers readers an interactive experience. 
    
    "The very hungry caterpillar literally eats his way through the pages of the book—and right into your child's heart..."
    — Mother's Manual
    "Gorgeously illustrated, brilliantly innovative..."
    — The New York Times Book Review`,
		'/img/storeItems/the_VHC.jpg'
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
		`THROW PILLOW PACK - Pack of 2 decorative throw pillows for your couches or bedroom; they are neither too big nor too small and they give off a homely vibe
    PACKAGING - Pillows are compressed in vacuum packaging because of shipping purpose, they might appear as one large pillow.
    DIMENSIONS - Each pillow measures 18 by 18 inches
    MATERIAL COMPOSITION – 115 GSM Brushed Fabric and siliconized fiber filling will never make them look hollow
    SOFT AND DURABLE - The pillows are designed to give a delicate feel while retaining long term durability
    CARE INSTRUCTIONS - It is recommended to spot clean the pillow or hand wash the fabric`,
		'/img/storeItems/utopia_pillows.jpg'
	);

	const owala_water_bottle = new storeItem(
		'SPOR0002',
		'Owala FreeSip Insulated Stainless Steel Water Bottle',
		42.99,
		69,
		7,
		'Sports & Outdoors',
		1.49,
		new Array(),
		`32-ounce insulated stainless-steel water bottle with a FreeSip spout and push-button lid with lock
    Patented FreeSip spout designed for either sipping upright through the built-in straw or tilting back to swig from the spout opening
    Protective push-to-open lid keeps spout clean; convenient carry loop doubles as a lock
    Double-wall insulation keeps drinks cold for up to 24 hours; wide opening for cleaning and adding ice; cup holder-friendly base
    BPA, lead, and phthalate-free; hand wash cup, dishwasher-safe lid; not for use with hot liquids`,
		'/img/storeItems/owala_water_bottle.jpg'
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
		`TARNISH RESISTANT: Each chain is crafted of solid 925 Sterling Silver, prevents oxidation
    LIGHT and DURABLE: The chain is designed to comfortably fit and contains a secure spring ring clasp perfect for Pendants and Charms
    STAMPED JEWELRY: Each necklace is imported directly from the manufacturer and contains a 925 and Italy hallmark for authenticity
    Sensitive Skin? HYPOALLERGENIC: No rashes or breakouts. Lead and Nickel Free
    Buy with CONFIDENCE: Your order is protected. Each product is insured. Satisfaction Guaranteed`,
		'/img/storeItems/KEZEF_necklace.jpg'
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
		`Set of 2 dumbbells for resistance training; each dumbbell weighs 5 pounds
		Easy-grip neoprene coating for a secure hold
		Printed weight number on each end cap and color-coded for quick identification
		Hexagonal shape prevents dumbbells from rolling away
		Ideal for fitness classes or at-home workout routines`,
		'/img/storeItems/hand_weights_set.jpg'
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
		`Keep track of and find your items alongside friends and devices in the Find My app
		Simple one-tap setup instantly connects AirTag with your iPhone or iPad
		Play a sound on the built-in speaker to help find your things, or just ask Siri for help
		Precision Finding with Ultra Wideband technology leads you right to your nearby AirTag (on select iPhone models)
		Find items further away with the help of hundreds of millions of Apple devices in the Find My network
		Put AirTag into Lost Mode to be automatically notified when it's detected in the Find My network
		All communication with the Find My network is anonymous and encrypted for privacy, Location data and history are never stored on AirTag`,
		'/img/storeItems/apple_airtag.jpg'
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
		'/img/storeItems/first_100_words.jpg'
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
		Reduce Chlorine (taste & odour) Mercury, Copper, Zinc, Cadmium.
		For the best tasting water, replace your water filter after 151 litres or approximately every 2 months; Brita Standard filters last 2x longer than ZeroWater filters.
		Compatible with all Brita pitchers and dispensers except Stream; Brita water filters are simple to replace with a pull top cap for easy removal`,
		'/img/storeItems/brita_standard_water_filter.jpg'
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
		`【Thickened Soft Sole EVA Foam】The pillow slippers use EVA soles and protection design to make you feel like stepping on the pillow. Forward and backward shock absorption, reduce foot damage.
		【Double Anti-Slip】The interior of pillow slippers slides adopts a dot-shaped raised design, and the sole adopts a wave-shaped raised anti-skid design. Double anti-slip, double safety. More suitable for shower pool and beach wear.
		【Occasion】 Indoor and outdoor, perfects for all season：house slippers, bathroom showers, swimming pool, SPA, sea beach ,leisure,street casual fashion, etc.
		【ATTENTION】 This pillow sandals are made of EVA material, they may shrink and deform at high temperature, please do not expose them to direct sunlight for a long time.`,
		'/img/storeItems/BENSORTS_pillow_sandals.jpg'
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
		`Rain-X Weatherbeater are high-quality conventional wiper blades that have stood the test of time, meeting or exceeding OEM standards for quality and durability
		The all natural rubber squeegee resists cracking, splitting, and tearing caused by hot and cold weather conditions, washer fluid, and road salt
		Multiple pressure points and embedded friction reducers enable even pressure distribution across the length of the wiper blade helping to deliver a clean wipe
		Conventional blade structure with a galvanized steel frame provides long-lasting strength and durability and prevents rust and corrosion
		Weatherbeater wiper blades are equipped with a pre-installed J-hook adapter for easy installation on most vehicles and contains adapters for Bayonet and Pin Arms.`,
		'/img/storeItems/wiper_blade_26in.jpg'
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
		`EXEPTIONAL VOCAL PERFORMANCE - The SM58-LC delivers high-quality vocal reproduction, thanks to its tailored frequency response and brightened midrange for clear and present vocals.
		INDUSTRY STANDARD - The first choice for performers around the globe, the SM58 Dynamic Vocal Microphone is ready to bring any performance to life. From the club to the stadium, Shure has your back.
		CLARITY & CARE - The uniform cardioid polar pattern reproduces every note as it was intended, delivering warm, crisp sound time after time.
		LEAVE BACKGROUND NOISE BEHIND - The SM58 has a spherical mesh grille and built-in pop filter to keep any unwanted noise out of the mix.
		DROP THE MIC - The durable construction and break-resistant stand adapter makes the SM58 the perfect companion on the road, going strong through the toughest performances.
		VERSATILE - The SM58 can hold its own live onstage as well as in the studio, isolating between vocals and instruments.
		WHAT’S IN THE BOX - Shure SM58 Dynamic Vocal Microphone, 1 - A25D Swivel Stand Adapter, 1 - 95A2313 Storage Bag, Free 2-YEAR WARRANTY included.`,
		'/img/storeItems/SHURE_SM58_LC.jpg'
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
		`The artist's interface: Scarlett's 4th Gen mic pres and a massive 120dB dynamic range deliver the audio performance you'd find in a pro studio.
		Never lose a great take: Auto Gain sets the perfect level for your mic or guitar, and Clip Safe prevents clipping, so you can focus on the music.
		Find your signature sound: Air mode lifts vocals and guitars to the front of the mix, adding musical presence and rich harmonic drive to your recordings.
		Everything you need to record, mix and master your music: Includes industry-leading recording software and a full collection of record-making plugins.
		Easy Start: It’s never been easier to get recording. Focusrite’s tried-and-tested Easy Start tool will have you making music in minutes.`,
		'/img/storeItems/SCARLETT_2i2_gen4.jpg'
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
		`【LARGE CAPACITY 】The size is 9.25*5.25*10.75 inches, our car trash can with a large compartment, two elastic mesh pockets on the side, and an open pocket at the front, which can hold 2.25 Gallon/8.5L capacity to save space, it can be folded up when not in use, very convenient.
		【THOUGHTFUL DESIGN 】Our car trash bin with soft lid that is a rubber X-shaped opening and velcro seal can be loaded with tissue paper, fruit peels, and the bottle can be closed or even cover up the waste and keep the internal smell without lifting the lid.
		【PREMIUM MATERIAL 】This car trash bag is made of waterproof and durable 600D high-quality material, the inner material of the car accessories women is a waterproof and easy-to-clean PEVA lining. You can put it directly in the garbage, or put a disposable bag inside, and use two side clips to fix the handle of the bag, just keep everything clean.
		【MULTIPURPOSE 】PEVA lining also has the effect of thermal insulation. This car accessories not only hold garbage, but also a thermal insulation bag. You can put hot food, cold objects, fruits, drinks, snacks in it, and it can keep hot for several hours. The temperature of food and the coolness of drinks can also be used as a storage bag for other small items such as paper towels, toys, bags, snacks, umbrellas and other things you want to pack.
		【FIT ANYWHERE IN CAR 】There is an easily adjustable buckle strap on the back of the car accessories, which can be placed in many places and can be hung on the front or back of the seat, the center console, the glove box and even the gear lever.`,
		'/img/storeItems/car_trashcan.jpg'
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

	displayStoreItems();
	cartItemArr.push(basketball, FOCUSRITE_SCARLETT_2i2_Gen4);
	displayCartItems();
}

// Display dynamically generated store items table
function displayStoreItems() {
	// Store Item Display Table
	const inventoryDisplayTbl = document.getElementById('storeItemDisplay');

	// Create Table Body Element
	const tblBody = document.createElement('tbody');

	// Generate Dynamic Table as much as the number of items
	for (let i = 0; i < storeItemArr.length; i++) {
		// currently selected item
		let currItem = storeItemArr[i];

		const row = document.createElement('tr');

		for (let j = 0; j < 7; j++) {
			// Create a <td> element and a text node, make the text node the contents of the <td>, and put the <td> at the end of the table row
			const cell = document.createElement('td');
			let cellText;
			switch (j) {
				case 0:
					cellText = document.createTextNode(currItem.id);
					cell.appendChild(cellText);
					break;

				case 1:
					cellText = document.createTextNode(currItem.name);
					cell.appendChild(cellText);
					break;

				case 2:
					cellText = document.createTextNode('$' + currItem.priceCA.toFixed(2));
					cell.appendChild(cellText);
					break;

				case 3:
					cellText = document.createTextNode(currItem.quantityOnHand);
					cell.appendChild(cellText);
					break;

				case 4:
					cellText = document.createTextNode(currItem.maxPerCustomer);
					cell.appendChild(cellText);
					break;

				case 5:
					cellText = document.createTextNode(currItem.category);
					cell.appendChild(cellText);
					break;

				case 6:
					const img = document.createElement('img');
					img.src = currItem.image; // Set the source of your image
					img.alt = 'Item Image'; // Set alt text for accessibility

					const originalWidth = img.naturalWidth;
					const originalHeight = img.naturalHeight;
					const ratio = originalWidth / originalHeight;

					if (originalHeight > originalWidth) {
						// If width is greater, set it to 150 and calculate the height
						img.height = 100;
						img.width = 100 * ratio;
					} else {
						// If width is greater, set it to 150 and calculate the height
						img.width = 100;
						img.height = 100 / ratio;
					}
					cell.appendChild(img);
					break;

				default:
					cellText = document.createTextNode('');
					cell.appendChild(cellText);
					break;
			}

			row.appendChild(cell);
		}
		// add the row to the end of the table body
		tblBody.appendChild(row);
	}
	// put the <tbody> in the <table>
	inventoryDisplayTbl.appendChild(tblBody);
}

function displayCartItems() {
	if (cartItemArr.length === 0) {
		document.getElementById('cartItemDisplayDiv').innerHTML = '<br>No Items in Cart. Add Items to Cart.';
	} else {
		// Cart Item Display Div
		const cartItemDisplayDiv = document.getElementById('cartItemDisplayDiv');

		// Create Table Elements
		const cartItemDisplayTbl = document.createElement('table');
		const tblHead = document.createElement('thead');
		const tr = document.createElement('tr');

		for (let i = 0; i < 4; i++) {
			const th = document.createElement('th');
			switch (i) {
				case 0:
					th.appendChild(document.createTextNode('ID'));
					tr.appendChild(th);
					break;

				case 1:
					th.appendChild(document.createTextNode('Price'));
					tr.appendChild(th);
					break;

				case 2:
					th.appendChild(document.createTextNode('Quantity'));
					tr.appendChild(th);
					break;

				default:
					th.appendChild(document.createTextNode('Subtotal'));
					tr.appendChild(th);
					break;
			}
		}
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
					case 0:
						cellText = document.createTextNode(currItem.id);
						cell.appendChild(cellText);
						break;

					case 1:
						cellText = document.createTextNode('$' + currItem.priceCA.toFixed(2));
						cell.appendChild(cellText);
						break;

					case 2:
						cellText = document.createTextNode(currItem.quantityOnHand);
						cell.appendChild(cellText);
						break;

					case 3:
						let subtotal = currItem.priceCA * currItem.quantity;
						cellText = document.createTextNode('$' + subtotal.toFixed(2));
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

initialize();
