const productData = [
	{
		name: 'Laptop Pro',
		description: 'High-performance laptop for professionals.',
		price: 1200,
		photoName: '/laptop.png',
		soldOut: false,
	},
	{
		name: 'Smartphone X',
		description: 'Latest model with stunning display.',
		price: 800,
		photoName: '/smartphone.png',
		soldOut: false,
	},
	{
		name: 'Wireless Headphones',
		description: 'Noise-cancelling headphones with great sound quality.',
		price: 200,
		photoName: '/headphones.png',
		soldOut: false,
	},
	{
		name: 'Smartwatch Z',
		description: 'Stylish smartwatch with fitness tracking features.',
		price: 150,
		photoName: '/smartwatch.png',
		soldOut: false,
	},
	{
		name: 'Gaming Console',
		description: 'Powerful gaming console for endless fun.',
		price: 400,
		photoName: '/console.png',
		soldOut: true,
	},
	{
		name: '4K TV',
		description: 'Ultra HD television with vibrant colors.',
		price: 1000,
		photoName: '/tv.png',
		soldOut: false,
	},
]

function Header() {
	const hour = new Date().getHours()
	const openHours = 9
	const closeHours = 21

	const isOpen = hour >= openHours && hour <= closeHours

	return (
		<header>
			<h1>Электронный магазин 🛒</h1>
			<nav>
				<ul>
					<li>
						<a href='#home'>Home</a>
					</li>
					<li>
						<a href='#catalog'>Catalog</a>
					</li>
					<li>
						<a href='#about'>About</a>
					</li>
					<li>
						<a href='#contacts'>Contacts</a>
					</li>
				</ul>
			</nav>
			<div>
				{isOpen ? (
					<p>
						We are currently open. Hours: {openHours}:00 - {closeHours}:00
					</p>
				) : (
					<p>
						We are closed. Open from: {openHours}:00 - {closeHours}:00
					</p>
				)}
			</div>
		</header>
	)
}

function Catalog() {
	return (
		<main>
			<ul>
				<Product />
			</ul>
		</main>
	)
}

function Product() {
	const products = [...productData]
	return (
		<li>
			<img src={products[2].photoName} alt={products[2].name} />
			<div>
				<h3>{products[2].name}</h3>
				<p>{products[2].description}</p>
				<span>{products[2].price}</span>
			</div>
		</li>
	)
}

function Footer() {
	return <footer>Footer</footer>
}

function App() {
	return (
		<div>
			<Header />
			<Catalog />
			<Footer />
		</div>
	)
}

export default App
