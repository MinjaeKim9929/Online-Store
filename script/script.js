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
function initialize() {
	// Get current day / time
	let currDayTime = new Date();

	// Display the current Day/Time to screen
	document.getElementById('dateArea').innerHTML = currDayTime;

	// Populate the store items array with at least 15 item objects
	const basketball = new storeItem(
		'SPOR0001',
		'NBA OFFICIAL GAME BASKETBALL',
		199.99,
		70,
		5,
		'Sports & Outdoors',
		4.99,
		new Array(),
		`- Wilson NBA Authentic Series Basketball - Indoor/Outdoor, Size 7 - 29.5"\n- NBA OFFICIAL: Wilson is the official basketball of the NBA. This ball features official NBA branding coupled with the iconic Wilson script\n- PURE FEEL COVER: Pro-level feel and durability\n- EVER BOUNCE CONSTURCTION: Consistent bounce every time\n- AIR RETENTION: Inflation retention lining creats longer lasting air retention`,
		'/img/basketball.jpg'
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
		'/img/USB-C 20W Adapter.jpg'
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
		'/img/the_VHC.jpg'
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
		'/img/utopia_pillows.jpg'
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
		'/img/owala_water_bottle.jpg'
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
		'/img/KEZEF_necklace.jpg'
	);

	storeItemArr.push(basketball, adapter_USB_C_20W, the_VHC, utopia_pillows, owala_water_bottle, KEZEF_necklace);
}
