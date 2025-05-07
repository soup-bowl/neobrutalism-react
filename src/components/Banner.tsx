import { boxy, colorMap } from "../definitions"
import React from "react"

export type BrutalistBannerProps = {
	size?: "regular" | "flexible"
	colour?: "primary" | "success" | "warning" | "danger"
	children: React.ReactNode
	style?: React.CSSProperties
} & React.ComponentProps<"p">

const Banner: React.FC<BrutalistBannerProps> = ({
	size = "regular",
	colour = "primary",
	children,
	style,
	...props
}) => {
	const defaultStyles: React.CSSProperties = {
		backgroundColor: colorMap[colour],
		padding: "1rem",
		marginLeft: "0",
		borderWidth: 2,
		borderColor: "black",
		borderStyle: "solid",
		boxShadow: size === "regular" ? boxy("4") : boxy("2"),
	}

	return (
		<p style={{ ...defaultStyles, ...style }} {...props}>
			{children}
		</p>
	)
}

export default Banner
