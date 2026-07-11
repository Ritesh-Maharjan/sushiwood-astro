import React, { useState } from 'react';
import MaxWidthContent from './MaxWidthContent';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Contact, Facebook, Home, Instagram, MapPin, Sun, User, UtensilsCrossed } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePopupStore } from '@/stores/Popup';
import Weather from '@/components/ui/currentTemperature';

const Header = () => {
	const [displayMenu, setDisplayMenu] = useState(true);
	const [animateHome, setAnimateHome] = useState(false);

	const { toggle } = usePopupStore();

	const toggleMenu = () => {
		setDisplayMenu(!displayMenu);
		setAnimateHome(!displayMenu);
	};

	const today = new Date();
	const options: Intl.DateTimeFormatOptions = {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	};
	const formattedDate = today.toLocaleDateString('en-US', options);

	return (
		<header className='sticky top-0 bg-black/85 z-50 border-b border-gray-600'>
			<MaxWidthContent className='flex justify-between items-center px-4'>
				<Link to='home' smooth={true} duration={500} className='cursor-pointer'>
					<figure className='overflow-hidden'>
						<img height={225} width={225} src='/sushiwood/main-logo.webp' alt='Clouds with text logo' className='h-15 w-10' />
					</figure>
				</Link>

				<button className='sm:hidden flex flex-col gap-1 z-50 cursor-pointer' aria-label='Menu' onClick={toggleMenu}>
					<span className='h-3 w-3 rounded-full bg-white inline-block'></span>
					<span className='h-3 w-3 rounded-full bg-white inline-block'></span>
					<span className='h-3 w-3 rounded-full bg-white inline-block'></span>
				</button>

				<nav className='hidden sm:block'>
					<ul className='flex gap-6 items-center font-montserrat uppercase text-xs md:text-base'>
						<li className='cursor-pointer'>
							<Link to='about' smooth={true} duration={500}>
								About
							</Link>
						</li>
						<li className='cursor-pointer'>
							<Link to='menu' smooth={true} duration={500}>
								Menu
							</Link>
						</li>
						<li className='cursor-pointer'>
							<Link to='contact' smooth={true} duration={500}>
								Contact
							</Link>
						</li>
						<li className='cursor-pointer'>
							<Button className='text-xs md:text-base' variant={'goldenborder'} onClick={() => toggle('order')}>
								ORDER NOW
							</Button>
						</li>
						<li className='cursor-pointer'>
							<Button variant={'goldenborder'} onClick={() => toggle('reservation')} className='text-xs md:text-base'>
								RESERVATIONS
							</Button>
						</li>

					</ul>
				</nav>
			</MaxWidthContent>

			{/* Mobile Menu */}
			<div
				className={`sm:hidden fixed inset-0 bg-gray-800 ${
					displayMenu ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
				} transition-all duration-1000`}
			>
				{/* image overlay */}
				<figure className='absolute inset-0'>
					<img src='/sushiwood/9-6.webp' alt='Location room setting' className='opacity-40 object-cover h-full w-full' />
				</figure>

				{/* menu section */}
				<main className='flex items-center h-full'>
					{/* Info */}
					<div className='opacity-95 rounded-full overflow-hidden  relative -left-14'>
						<div>
							<figure>
								<img className='w-72 h-72 object-cover' src={'/menu.png'} alt='Food with various ingredients' width={100} height={100} />
							</figure>
							<div className='bg-black/80  inset-0 absolute' />
							<div className='absolute text-white inset-0 top-6 z-[70] flex flex-col gap-y-5'>
								<Link to='home' smooth={true} duration={500} className='cursor-pointer'>
									<figure className='overflow-hidden'>
										<img
										height={225}
										width={225}
										src='/sushiwood/main-logo.webp'
										alt='Clouds with text logo'
										className='h-[50px] w-[50px] justify-self-center mr-12' />
									</figure>
								</Link>
								<p className='border-b-2 pl-20 pb-4'>Sushiwood</p>
								<p className='border-b-2 pl-20 pb-4'>{formattedDate}</p>
								<span className='pl-20 flex gap-2'>
									<Sun />
									<Weather />
								</span>
							</div>
						</div>
					</div>
					{/* Menu Buttons */}
					<nav className='opacity-95 flex flex-col gap-2 -ml-16'>
						<Link to='home' smooth={true} duration={500} onClick={toggleMenu} className='cursor-pointer'>
							<motion.div
								initial={{ opacity: 0, y: 50 }}
								animate={{
									opacity: animateHome ? 0 : 1,
									y: animateHome ? 50 : 0,
								}}
								transition={{ duration: 0.5, delay: 0.5 }}
								className='flex flex-col cursor-pointer'
							>
								<span>Home</span>
								<span className='bg-black p-3 rounded-full  w-fit'>
									<Home />
								</span>
							</motion.div>
						</Link>

						<Link to='about' smooth={true} duration={500} onClick={toggleMenu} className='cursor-pointer ml-14'>
							<motion.div
								initial={{ opacity: 0, y: 50 }}
								animate={{
									opacity: animateHome ? 0 : 1,
									y: animateHome ? 50 : 0,
								}}
								transition={{ duration: 0.5, delay: 0.5 }}
								className='flex flex-col cursor-pointer'
							>
								<span>About</span>
								<span className='bg-black p-3 rounded-full w-fit'>
									<User />
								</span>
							</motion.div>
						</Link>

						<Link to='menu' smooth={true} duration={500} onClick={toggleMenu} className='cursor-pointer ml-14'>
							<motion.div
								initial={{ opacity: 0, y: 50 }}
								animate={{
									opacity: animateHome ? 0 : 1,
									y: animateHome ? 50 : 0,
								}}
								transition={{ duration: 0.5, delay: 0.5 }}
								className='flex flex-col cursor-pointer'
							>
								<span>Menu</span>
								<span className='bg-black p-3 rounded-full w-fit'>
								<UtensilsCrossed />
								</span>
							</motion.div>
						</Link>

						<Link to='contact' smooth={true} duration={500} onClick={toggleMenu} className='cursor-pointer'>
							<motion.div
								initial={{ opacity: 0, y: 50 }}
								animate={{
									opacity: animateHome ? 0 : 1,
									y: animateHome ? 50 : 0,
								}}
								transition={{ duration: 0.5, delay: 0.5 }}
								className='flex flex-col cursor-pointer'
							>
								<span>Contact</span>
								<span className='bg-black p-3 rounded-full w-fit'>
									<Contact />
								</span>
							</motion.div>
						</Link>
					</nav>
				</main>

				<footer className='absolute bottom-3 flex items-center justify-center mx-auto w-full gap-4'>
					<a href="https://maps.app.goo.gl/8gs1Utxdh21Wfe1N9" target="_blank" rel="noopener noreferrer">
						<MapPin className="h-8 w-8 cursor-pointer" />
					</a>
					<a href="https://www.facebook.com/media/set/?set=a.750329719694381" target="_blank" rel="noopener noreferrer">
						<Facebook className="h-8 w-8 cursor-pointer" />
					</a>
					<a href="https://www.instagram.com/ferniesushiwood/?hl=en" target="_blank" rel="noopener noreferrer">
						<Instagram className="h-8 w-8 cursor-pointer" />
					</a>
				</footer>
			</div>
		</header>
	);
};

export default Header;
