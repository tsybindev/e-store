import './index.css'

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
		<header className='header'>
			<h1>Электронный магазин 🛒</h1>
			<nav className='nav'>
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
		<main className='catalog'>
			<ul className='products'>
				<Product
					name='Wireless Headphones'
					img='/headphones.png'
					price={200}
					description='Noise-cancelling headphones with great sound quality.'
				/>
				<Product
					name='Smartphone X'
					img='/smartphone.png'
					price={800}
					description='Latest model with stunning display.'
				/>
			</ul>
		</main>
	)
}

function Product(props) {
	console.log(props)

	return (
		<li className='product'>
			<img src={props.img} alt={props.name} />
			<div>
				<h3>{props.name}</h3>
				<p>{props.description}</p>
				<span>{props.price}</span>
			</div>
		</li>
	)
}

function Footer() {
	return <footer className='footer'>Footer</footer>
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
