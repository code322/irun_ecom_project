const products = [
	{
		title: 'Nike Revolution 5',
		details: "Men's Road Running Shoes",
		price: 88,
		description:
			"When the road beckons, answer the call in a lightweight pair that'll keep you moving mile after mile. Soft foam cushions your stride and a reinforced heel delivers a smooth, stable ride. Crafted from knit material for breathable support, while a minimalist design fits in just about anywhere your day takes you.",
		images: [
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/gxnjiwtoqqamijxhi72z/revolution-5-road-running-shoes-RNxmvG.png',
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/oi6eepwsqtgnkqwdh8m9/revolution-5-road-running-shoes-RNxmvG.png',
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i2ciwiog27utsocvsl8o/revolution-5-road-running-shoes-RNxmvG.png',
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/oas6ifj7ek6erbiluwan/revolution-5-road-running-shoes-RNxmvG.png',
		],
		inStock: 10,
		generalInfo:
			'Free standard delivery on orders over $175. Delivery may take longer than normal. Check your estimated delivery date at checkout. You can return your order for any reason, free of charge, within 60 days.',
		gender: 'male',
	},
	{
		title: 'Nike Air Zoom Terra Kiger 7',
		details: "Men's Trail Running Shoes",
		price: 188,
		description:
			'Run the trail in a super-responsive running shoe.Fast and lightweight, it delivers a breathable and secure feel as you race over rocky paths.Updated traction lugs provide stability for your downhill miles.',
		images: [
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/756632cb-6150-4981-830f-5fc9f342c45c/air-zoom-terra-kiger-7-trail-running-shoes-PFRMNz.png',
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/34b5705c-5857-408f-83ff-b1ee0f5356bc/air-zoom-terra-kiger-7-trail-running-shoes-PFRMNz.png',
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9f904ace-f4a0-4975-916b-f62780c2a6ee/air-zoom-terra-kiger-7-trail-running-shoes-PFRMNz.png',
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/93bf9135-e84f-48fe-aea1-34c1b4008e50/air-zoom-terra-kiger-7-trail-running-shoes-PFRMNz.png',
		],
		inStock: 5,
		generalInfo:
			'Free standard delivery on orders over $175. Delivery may take longer than normal. Check your estimated delivery date at checkout. You can return your order for any reason, free of charge, within 60 days.',
		gender: 'male',
	},
	{
		title: 'Nike Zoom Mamba 3',
		details: 'Unisex Distance Spike',
		price: 132,
		description:
			'The Nike Zoom Mamba 3 Unisex Distance Spike is designed for the steeplechase with a single-layer, open-mesh upper and perforated sockliner to help let moisture out on the fly. Their six-pin spike configuration provides a close-to-the-ground feel and incredible traction.',
		images: [
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/49b34304-c6f7-4373-b35a-cd3ddcb25586/air-zoom-pegasus-38-airnathan-bell-road-running-shoes-qx7tFM.png',
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5e462e27-13f5-4044-a044-4bb5ca2c2304/air-zoom-pegasus-38-airnathan-bell-road-running-shoes-qx7tFM.png',
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8c3f81c1-81bf-49d1-8db3-3b9098cf6607/air-zoom-pegasus-38-airnathan-bell-road-running-shoes-qx7tFM.png',
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6ccb3012-1b31-4fe1-ad7c-3833bd2efcb2/air-zoom-pegasus-38-airnathan-bell-road-running-shoes-qx7tFM.png',
		],
		inStock: 10,
		generalInfo:
			'Free standard delivery on orders over $175. Delivery may take longer than normal. Check your estimated delivery date at checkout. You can return your order for any reason, free of charge, within 60 days.',
		gender: 'male',
	},
	{
		title: 'Nike Zoom Rival S 9',
		details: 'Athletics Sprinting Spikes',
		price: 85,
		description:
			"With a light feel and snug fit, the Nike Zoom Rival S 9 is built for smooth transitions.Designed with the sprinter in mind, it's ideal for events ranging from 60m to 400m, including hurdle events and the long jump.",
		images: [
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3b73bf40-0b9b-40f4-b7dc-0ed391505e0a/zoom-rival-s-9-athletics-sprinting-spikes-W2jlBw.png',
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/13651687-3f34-4777-bfa3-883b46754b6e/zoom-rival-s-9-athletics-sprinting-spikes-W2jlBw.png',
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/37c062b0-96dd-461d-9ef2-8581b482d477/zoom-rival-s-9-athletics-sprinting-spikes-W2jlBw.png',
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1470134a-0ef2-4171-81a0-6e834b3c352c/zoom-rival-s-9-athletics-sprinting-spikes-W2jlBw.png',
		],
		inStock: 3,
		generalInfo:
			'Free standard delivery on orders over $175. Delivery may take longer than normal. Check your estimated delivery date at checkout. You can return your order for any reason, free of charge, within 60 days.',
		gender: 'male',
	},

	// females
	{
		title: 'Nike Flex Experience Run 10',
		details: "Women's Road Running Shoes",
		price: 85,
		description:
			'Simple and versatile, the Nike Flex Experience Run 10 is built for movement.Made for the casual runner, its secure design and lightweight cushioning in the heel help you put in miles.Bonus: The simple, redesigned upper pairs great with casual wear so you can enjoy comfort built for all-day wear.',
		images: [
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/57b9bcc4-fbf4-4217-accb-b6e0841b3b2f/flex-experience-run-10-road-running-shoes-jk3h62.png',
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7f734b03-14d9-417f-81f3-e6f15902c661/flex-experience-run-10-road-running-shoes-jk3h62.png',
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/494dc794-fcae-492c-b03d-082c4492d011/flex-experience-run-10-road-running-shoes-jk3h62.png',
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/834cf08e-b450-4416-ac16-4f598ffbb26d/flex-experience-run-10-road-running-shoes-jk3h62.png',
		],
		inStock: 3,
		generalInfo:
			'Free standard delivery on orders over $175. Delivery may take longer than normal. Check your estimated delivery date at checkout. You can return your order for any reason, free of charge, within 60 days.',
		gender: 'female',
	},
	{
		title: 'Nike Zoom Rival M 9',
		details: 'Athletics Multi-Event Spikes',
		price: 180,
		description:
			'Your workhorse with wings returns. The Nike Air Zoom Pegasus 38 By You continues to put a spring in your step, using the same foam as its predecessor. Mesh in the upper combines together the comfort and durability you want with an optional FlyEase entry system that gets you in and out quickly and easily.',
		images: [
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/407ea7aa-7883-414a-ac15-b5907c809752/zoom-rival-m-9-athletics-multi-event-spikes-21b6cJ.png',
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2825e1f4-5561-4bb5-8fda-6b4ab4c29449/zoom-rival-m-9-athletics-multi-event-spikes-21b6cJ.png',
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/839ea3ed-ae5b-438b-b272-ae121500ba14/zoom-rival-m-9-athletics-multi-event-spikes-21b6cJ.png',
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/690359c8-cc52-4692-8bd7-49e71f6a08de/zoom-rival-m-9-athletics-multi-event-spikes-21b6cJ.png',
		],
		inStock: 6,
		generalInfo:
			'Free standard delivery on orders over $175. Delivery may take longer than normal. Check your estimated delivery date at checkout. You can return your order for any reason, free of charge, within 60 days.',
		gender: 'female',
	},
	{
		title: 'Nike Air Zoom Pegasus 38',
		details: "Women's Road Running Shoes",
		price: 145,
		description:
			'The Nike Internationalist Low By You celebrates a 1980s icon originally designed for serious runners who knew no bounds. Now fashioned for streetwear, this Internationalist lets you choose the materials from a selection of low-key earth tones. Top it off with throwback Nike branding or personal details so you can stand out in your neighbourhood or all over the world.',
		images: [
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8d927006-7400-44f9-ace1-c02e9b88f72d/air-zoom-pegasus-38-road-running-shoes-RK335N.png',
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cd3e58fa-86c3-422d-ac93-8df860ebc700/air-zoom-pegasus-38-road-running-shoes-RK335N.png',
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/82edd8f9-a0ab-44ca-8402-5f95269e3f05/air-zoom-pegasus-38-road-running-shoes-RK335N.png',
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d26e88d6-bb8d-4196-91e7-e4f77d7a91ee/air-zoom-pegasus-38-road-running-shoes-RK335N.png',
		],
		inStock: 8,
		generalInfo:
			'Free standard delivery on orders over $175. Delivery may take longer than normal. Check your estimated delivery date at checkout. You can return your order for any reason, free of charge, within 60 days.',
		gender: 'female',
	},
	{
		title: 'Nike Air Zoom Structure 23',
		details: "Women's Road Running Shoes",
		price: 128,
		description:
			"A favourite returns. Made for the runner looking for a shoe they can wear daily, the Nike Air Zoom Structure 23 keeps you cushioned with a plush, ventilated design. It's been built with a purpose—to give you a fast, secure and trusted training partner for your miles.",
		images: [
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fe4a9e23-1534-416b-b423-5a6d8758d1a9/air-zoom-structure-23-road-running-shoes-rn2NcN.png',
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1759a6ee-4ce7-456b-ad9c-258eec1fbf1d/air-zoom-structure-23-road-running-shoes-rn2NcN.png',
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8a34838e-8a80-4618-bf1c-c029265d7f5d/air-zoom-structure-23-road-running-shoes-rn2NcN.png',
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f3a1c5bd-9101-4f06-ba87-bf7bd9832bc2/air-zoom-structure-23-road-running-shoes-rn2NcN.png',
		],
		inStock: 6,
		generalInfo:
			'Free standard delivery on orders over $175. Delivery may take longer than normal. Check your estimated delivery date at checkout. You can return your order for any reason, free of charge, within 60 days.',
		gender: 'female',
	},
];

module.exports = products;
