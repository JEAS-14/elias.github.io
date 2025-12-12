"use client";

import { useEffect, useRef } from 'react';

export default function TechConstellation() {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext('2d');

		const resize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};
		window.addEventListener('resize', resize);
		resize();

		const stars = Array.from({ length: 80 }).map(() => ({
			x: Math.random() * canvas.width,
			y: Math.random() * canvas.height,
			vx: (Math.random() - 0.5) * 0.2,
			vy: (Math.random() - 0.5) * 0.2,
			r: Math.random() * 1.5 + 0.5,
		}));

		let raf;
		const animate = () => {
			raf = requestAnimationFrame(animate);
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// draw connections
			for (let i = 0; i < stars.length; i++) {
				for (let j = i + 1; j < stars.length; j++) {
					const dx = stars[i].x - stars[j].x;
					const dy = stars[i].y - stars[j].y;
					const d = Math.sqrt(dx * dx + dy * dy);
					if (d < 140) {
						const o = 1 - d / 140;
						ctx.strokeStyle = `rgba(6,182,212,${o * 0.25})`;
						ctx.lineWidth = 1;
						ctx.beginPath();
						ctx.moveTo(stars[i].x, stars[i].y);
						ctx.lineTo(stars[j].x, stars[j].y);
						ctx.stroke();
					}
				}
			}

			// draw stars
			for (const s of stars) {
				s.x += s.vx;
				s.y += s.vy;
				if (s.x < 0 || s.x > canvas.width) s.vx *= -1;
				if (s.y < 0 || s.y > canvas.height) s.vy *= -1;
				ctx.fillStyle = 'rgba(255,255,255,0.6)';
				ctx.beginPath();
				ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
				ctx.fill();
			}
		};

		animate();

		return () => {
			window.removeEventListener('resize', resize);
			cancelAnimationFrame(raf);
		};
	}, []);

	return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />;
}
