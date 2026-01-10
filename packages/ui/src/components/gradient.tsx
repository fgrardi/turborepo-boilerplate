import clsx from 'clsx';

interface IGradientProps {
	small?: boolean;
	conic?: boolean;
	className?: string;
}

export function Gradient({
	conic,
	className,
	small,
}: IGradientProps) {
	return (
		<span
			className={clsx(
				'ui:absolute ui:mix-blend-normal ui:will-change-[filter] ui:rounded-[100%]', {
					'ui:blur-[75px]': !small,
					'ui:blur-[32px]': small,
					'ui:bg-linear-to-r ui:bg-red-1000 ui:from-10% ui:via-purple-1000 ui:via-30% ui:to-blue-1000 ui:to-100%': conic,
				}, className,
			)}
		/>
	);
}
