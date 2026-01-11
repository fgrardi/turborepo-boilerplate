import clsx from 'clsx';

interface IGradientProps {
	small?: boolean;
	conic?: boolean;
	className?: string;
}

const Gradient = ({
	conic,
	className,
	small,
}: IGradientProps) => {
	return (
		<span
			className={clsx(
				'absolute mix-blend-normal will-change-[filter] rounded-[100%]', {
					'blur-[75px]': !small,
					'blur-[32px]': small,
					'bg-linear-to-r bg-red-1000 from-10% via-purple-1000 via-30% to-blue-1000 to-100%': conic,
				}, className,
			)}
		/>
	);
};

export default Gradient;
