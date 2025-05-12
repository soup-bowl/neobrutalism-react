import React, { ButtonHTMLAttributes, useEffect, useState } from "react"
import "./Button.css"

export interface NormalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	active?: boolean
}

export const AttentionButton = ({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => (
	<button className="attention-button" {...props}>
		{children}
	</button>
)

export const AttentionLink = ({
	disabled,
	href,
	children,
}: {
	disabled?: boolean
	href?: string
	children: React.ReactNode
}) => (
	<a href={href} className={`attention-link ${disabled ? "disabled" : ""}`}>
		{children}
	</a>
)

export const Button = ({ active, ...rest }: NormalButtonProps) => (
	<button className={`normal-button ${active ? "active" : ""}`} {...rest} />
)

export const ButtonGroup = ({ children }: { children: React.ReactNode }) => (
	<div className="button-group">{children}</div>
)

export const ScrollButtons = ({
	buttonUp,
	buttonDown,
	onUp,
	onDown,
}: {
	buttonUp: React.ReactNode
	buttonDown: React.ReactNode
	onUp: () => void
	onDown: () => void
}) => (
	<div className="scroll-buttons">
		<button onClick={onDown}>{buttonDown}</button>
		<button onClick={onUp}>{buttonUp}</button>
	</div>
)

export const ScrollToTopButton = ({ buttonUp }: { buttonUp: React.ReactNode }) => {
	const [showTopButton, setShowTopButton] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setShowTopButton(window.scrollY > 300)
		}
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<button
			className={`scroll-to-top-button ${showTopButton ? "visible" : ""}`}
			onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
		>
			{buttonUp}
		</button>
	)
}

export default Button
