import { boxy, colorMap } from "../definitions"
import React from "react"

export type BrutalistCardProps = {
	size?: "regular" | "flexible"
	children: React.ReactNode
	style?: React.CSSProperties
} & React.ComponentProps<"div">

const Card: React.FC<BrutalistCardProps> = ({ size = "regular", children, style, ...props }) => {
	const defaultStyles: React.CSSProperties = {
		backgroundColor: colorMap.primary,
		padding: "1.5rem",
		marginLeft: "1rem",
		marginRight: "1rem",
		maxWidth: size === "flexible" ? "100%" : "32rem",
		width: "100%",
		borderWidth: 2,
		borderColor: "black",
		borderStyle: "solid",
		boxShadow: size === "regular" ? boxy("4") : boxy("2"),
	}

	return (
		<div style={{ ...defaultStyles, ...style }} {...props}>
			{children}
		</div>
	)
}

export default Card
