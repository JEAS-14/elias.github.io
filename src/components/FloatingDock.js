"use client";

import { useEffect, useState } from 'react';

export default function FloatingDock() {
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		let lastY = window.scrollY;
		const onScroll = () => {
			const currentY = window.scrollY;
			setVisible(currentY < lastY || currentY < 100);
			lastY = currentY;
		};
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<div
			aria-hidden
			className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 ${
				visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
			}`}
		>
			<div className="flex gap-3 px-4 py-2 rounded-full backdrop-blur-xl bg-white/10 border border-white/15 shadow-lg">
				<a href="#proyectos" className="px-3 py-1 text-xs text-white/90 hover:text-white">Proyectos</a>
				<span className="w-px h-4 bg-white/20" />
				<a href="#contacto" className="px-3 py-1 text-xs text-white/90 hover:text-white">Contacto</a>
			</div>
		</div>
	);
}
