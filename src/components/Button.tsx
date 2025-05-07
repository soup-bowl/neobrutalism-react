import React from "react"

export type BrutalistButtonProps = {
	variant?: "primary" | "secondary"
	size?: "regular" | "small"
	label: string
	children: React.ReactNode
	style?: React.CSSProperties
} & React.ComponentProps<"button">

const Button: React.FC<BrutalistButtonProps> = ({ variant = "primary", size = "regular", label, style, ...props }) => {
	const boxy = (size: string) =>
		`${size}px ${size}px 0px rgb(0, 0, 0), ${size}px ${size}px 0px rgb(0, 0, 0), ${size}px ${size}px 0px rgb(0, 0, 0)`
	const defaultStyles: React.CSSProperties = {
		cursor: "pointer",
		backgroundColor: "#ffbd94",
		paddingRight: size === "regular" ? "2rem" : ".5rem",
		paddingLeft: size === "regular" ? "2rem" : ".5rem",
		paddingTop: size === "regular" ? ".5rem" : "0",
		paddingBottom: size === "regular" ? ".5rem" : "0",
		height: size === "regular" ? "2.75rem" : "1.5rem",
		borderWidth: 2,
		borderColor: "black",
		borderStyle: "solid",
		boxShadow: size === "regular" ? boxy("4") : boxy("2"),
	}

	return (
		<button style={{ ...defaultStyles, ...style }} {...props}>
			{label}
		</button>
	)
}

export default Button
