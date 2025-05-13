import React, { ReactNode } from "react"
import "./Listings.css"

const Item: React.FC<{ children: ReactNode }> = ({ children }) => <div className="listing-item">{children}</div>

const ItemBlock: React.FC<{ children: ReactNode }> = ({ children }) => (
	<div className="listing-item-block">{children}</div>
)

const Image: React.FC<{ image?: string }> = ({ image }) =>
	image ? <div className="listing-image" style={{ backgroundImage: `url(${image})` }} /> : null

const Label: React.FC<{ children: ReactNode }> = ({ children }) => <div className="listing-label">{children}</div>

const InfoBites: React.FC<{ children: ReactNode }> = ({ children }) => (
	<div className="listing-info-bites">{children}</div>
)

const Socialview: React.FC<{ children: ReactNode }> = ({ children }) => (
	<div className="listing-socialview">{children}</div>
)

export const ListingItemGroup: React.FC<{ children: ReactNode }> = ({ children }) => (
	<div className="listing-item-group">{children}</div>
)

const timeSince = (date: Date): string => {
	const now = new Date()
	let years = now.getFullYear() - date.getFullYear()
	let months = now.getMonth() - date.getMonth()
	let days = now.getDate() - date.getDate()

	if (months < 0 || (months === 0 && days < 0)) {
		years--
		months += 12
	}
	if (days < 0) {
		months--
		const previousMonth = new Date(now.getFullYear(), now.getMonth() - 1, 0)
		days += previousMonth.getDate()
	}

	if (years > 0) return `${years} ${years === 1 ? "year" : "years"} ago`
	if (months > 0) return `${months} ${months === 1 ? "month" : "months"} ago`
	if (days > 0) return `${days} ${days === 1 ? "day" : "days"} ago`
	return "Today"
}

interface InfoProps {
	icon: ReactNode
	alt: string
	children: ReactNode
}

const ItemInfo = ({ icon, alt, children }: InfoProps) => (
	<div>
		<span title={alt}>{icon}</span>&nbsp;{children}
	</div>
)

interface Props {
	title: string
	image?: string
	date?: Date
	daysSince?: Date
	stars?: number
	downloads?: number
	url: string
	children: ReactNode
	icons?: {
		clock: ReactNode
		pen: ReactNode
		star: ReactNode
		download: ReactNode
	}
}

export const ListingItem = ({ title, image, date, daysSince, stars = 0, downloads = 0, url, children }: Props) => {
	return (
		<Item>
			<Image image={image} />
			<Label>
				<h2>
					<a href={url}>{title}</a>
				</h2>
				<InfoBites>
					{date ? (
						<ItemInfo icon={<></>} alt="Created">
							{date.toLocaleDateString("en-GB")}
						</ItemInfo>
					) : null}
					{daysSince ? (
						<ItemInfo icon={<></>} alt="Last change">
							{timeSince(daysSince)}
						</ItemInfo>
					) : null}
					{stars > 0 ? (
						<ItemInfo icon={<></>} alt="Stars">
							{stars}
						</ItemInfo>
					) : null}
					{downloads > 0 ? (
						<ItemInfo icon={<></>} alt="Downloads">
							{downloads.toLocaleString("en-GB")}
						</ItemInfo>
					) : null}
				</InfoBites>
				{children}
			</Label>
		</Item>
	)
}

interface SocialProps {
	avatar: string
	name: string
	profileUrl: string
	handle: string
	date: Date
	url: string
	image?: string
	imageDimensions?: {
		width?: number
		height?: number
	}
	children: ReactNode
}

export const ListingSocialItem = ({
	avatar,
	name,
	profileUrl,
	handle,
	url,
	date,
	image,
	imageDimensions,
	children,
}: SocialProps) => {
	return (
		<ItemBlock>
			<Socialview>
				<a href={url} style={{ color: "black", textShadow: "none" }}>
					{date.toLocaleDateString()}
				</a>
				<a href={profileUrl}>
					<div>
						<img src={avatar} alt="" className="listing-avatar" />
					</div>
					<div>
						<p style={{ fontWeight: "bold" }}>{name}</p>
						<p style={{ color: "black", textShadow: "none" }}>{handle}</p>
					</div>
				</a>
			</Socialview>
			<div>
				{children}
				{image ? (
					<div style={{ textAlign: "center" }}>
						<img
							src={image}
							alt=""
							style={{
								width: imageDimensions?.width,
								height: imageDimensions?.height,
								maxWidth: "100%",
								border: "2px solid black",
							}}
						/>
					</div>
				) : null}
			</div>
		</ItemBlock>
	)
}
