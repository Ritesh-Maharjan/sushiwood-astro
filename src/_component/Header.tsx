import React, { useState } from 'react';
import MaxWidthContent from './MaxWidthContent';
import { Contact, Facebook, Home, Instagram, MapPin, Sun, User, UtensilsCrossed } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePopupStore } from '@/stores/Popup';
import Weather from '@/components/ui/currentTemperature';

const NAV_ITEMS = [
	{ label: 'Home', icon: <Home />, anchor: '#home', indent: false },
	{ label: 'About', icon: <User />, anchor: '#about', indent: true },
	{ label: 'Menu', icon: <UtensilsCrossed />, anchor: '#menu', indent: true },
	{ label: 'Contact', icon: <Contact />, anchor: '#contact', indent: false },
];

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const { toggle } = usePopupStore();

	const formattedDate = new Date().toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	});

	return (
		<header className='sticky top-0 bg-black/85 z-50 border-b border-gray-600'>
			<MaxWidthContent className='flex justify-between items-center px-4'>
				<a href='#home' className='cursor-pointer'>
					<figure className='overflow-hidden'>
						<img height={225} width={225} src='/sushiwood/main-logo.webp' alt='Clouds with text logo' className='h-15 w-10' />
					</figure>
				</a>

				<button className='sm:hidden flex flex-col gap-1 z-50 cursor-pointer' aria-label='Menu' onClick={() => setMenuOpen(!menuOpen)}>
					<span className='h-3 w-3 rounded-full bg-white inline-block'></span>
					<span className='h-3 w-3 rounded-full bg-white inline-block'></span>
					<span className='h-3 w-3 rounded-full bg-white inline-block'></span>
				</button>

				<nav className='hidden sm:block'>
					<ul className='flex gap-6 items-center font-montserrat uppercase text-xs md:text-base'>
						<li><a href='#about' className='cursor-pointer'>About</a></li>
						<li><a href='#menu' className='cursor-pointer'>Menu</a></li>
						<li><a href='#contact' className='cursor-pointer'>Contact</a></li>
						<li>
							<Button className='text-xs md:text-base' variant={'goldenborder'} onClick={() => toggle('order')}>
								ORDER NOW
							</Button>
						</li>
						<li>
							<Button variant={'goldenborder'} onClick={() => toggle('reservation')} className='text-xs md:text-base'>
								RESERVATIONS
							</Button>
						</li>
					</ul>
				</nav>
			</MaxWidthContent>

			{/* Mobile full-screen menu */}
			<div
				className={`sm:hidden fixed inset-0 bg-gray-800 transition-all duration-1000 ${
					menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
				}`}
			>
				<figure className='absolute inset-0'>
					<img src='/sushiwood/9-6.webp' alt='Location room setting' className='opacity-40 object-cover h-full w-full' />
				</figure>

				<main className='flex items-center h-full'>
					{/* Info panel */}
					<div className='opacity-95 rounded-full overflow-hidden relative -left-14'>
						<div>
							<figure>
								<img className='w-72 h-72 object-cover' src='/menu.png' alt='Food with various ingredients' width={100} height={100} />
							</figure>
							<div className='bg-black/80 inset-0 absolute' />
							<div className='absolute text-white inset-0 top-6 z-[70] flex flex-col gap-y-5'>
								<a href='#home' onClick={() => setMenuOpen(false)}>
									<figure className='overflow-hidden'>
										<img height={225} width={225} src='/sushiwood/main-logo.webp' alt='Clouds with text logo' className='h-[50px] w-[50px] justify-self-center mr-12' />
									</figure>
								</a>
								<p className='border-b-2 pl-20 pb-4'>Sushiwood</p>
								<p className='border-b-2 pl-20 pb-4'>{formattedDate}</p>
								<span className='pl-20 flex gap-2'>
									<Sun />
									<Weather />
								</span>
							</div>
						</div>
					</div>

					{/* Nav links */}
					<nav className='opacity-95 flex flex-col gap-2 -ml-16'>
						{NAV_ITEMS.map(({ label, icon, anchor, indent }) => (
							<a
								key={label}
								href={anchor}
								onClick={() => setMenuOpen(false)}
								className={`cursor-pointer ${indent ? 'ml-14' : ''}`}
							>
								<div
									className={`flex flex-col transition-all duration-500 delay-500 ${
										menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
									}`}
								>
									<span>{label}</span>
									<span className='bg-black p-3 rounded-full w-fit'>{icon}</span>
								</div>
							</a>
						))}
					</nav>
				</main>

				<footer className='absolute bottom-3 flex items-center justify-center mx-auto w-full gap-4'>
					<a href='https://maps.app.goo.gl/8gs1Utxdh21Wfe1N9' target='_blank' rel='noopener noreferrer'>
						<MapPin className='h-8 w-8 cursor-pointer' />
					</a>
					<a href='https://www.facebook.com/media/set/?set=a.750329719694381' target='_blank' rel='noopener noreferrer'>
						<Facebook className='h-8 w-8 cursor-pointer' />
					</a>
					<a href='https://www.instagram.com/ferniesushiwood/?hl=en' target='_blank' rel='noopener noreferrer'>
						<Instagram className='h-8 w-8 cursor-pointer' />
					</a>
				</footer>
			</div>
		</header>
	);
};

export default Header;
