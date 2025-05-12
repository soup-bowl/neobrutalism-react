import { ReactNode } from "react"
import "./Social.css"

interface CardProps {
	id?: string
	url?: string
	icon?: ReactNode
	iconSvg?: ReactNode
	color: string
	onClick?: React.MouseEventHandler<HTMLAnchorElement>
	children: ReactNode
}

interface SocialContainerProps {
	children: ReactNode
}

export const SocialContainer = ({ children }: SocialContainerProps) => (
	<div className="social-container">{children}</div>
)

interface SocialPanelProps {
	children: ReactNode
}

export const SocialPanel = ({ children }: SocialPanelProps) => <div className="social-panel">{children}</div>

export const Social = ({ id, url = "#", icon, iconSvg, color, onClick, children }: CardProps) => {
	return (
		<a id={id} rel="me" href={url} className="social-set" style={{ backgroundColor: color }} onClick={onClick}>
			<div className="icon" style={{ color }}>
				{icon ?? iconSvg}
			</div>
			<div className="label">{children}</div>
		</a>
	)
}
