import React from "react"

export type BrutalistModalProps = {
	children: React.ReactNode
	style?: React.CSSProperties
} & React.ComponentProps<"div">

export const Modal: React.FC<BrutalistModalProps> = ({ children, style, ...props }) => {
	const modalBoundaryStyle: React.CSSProperties = {
		position: "fixed",
		zIndex: 1300,
		inset: 0,
	}

	const modalHiderStyle: React.CSSProperties = {
		position: "fixed",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		inset: "0px",
		backgroundColor: "rgba(0, 0, 0, 0.75)",
		zIndex: -1,
		opacity: 0.75,
	}

	const modalBackgroundStyle: React.CSSProperties = {
		height: "100%",
		outline: 0,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	}

	const modalBoxStyle: React.CSSProperties = {
		backgroundColor: "#C5A7C5",
		margin: "32px",
		position: "relative",
		overflowY: "auto",
		display: "flex",
		flexDirection: "column",
		width: "90vw",
		maxHeight: "calc(100% - 64px)",
		minWidth: "200px",
		border: "2px solid black",
		boxShadow: "8px 8px 0px #000",
	}

	return (
		<div style={modalBoundaryStyle}>
			<div style={modalHiderStyle} />
			<div style={modalBackgroundStyle}>
				<div style={{ ...modalBoxStyle, ...style }} {...props}>
					{children}
				</div>
			</div>
		</div>
	)
}

export type BrutalistModalHeaderProps = {
	children: React.ReactNode
	style?: React.CSSProperties
} & React.ComponentProps<"h2">

export const ModalHeader: React.FC<BrutalistModalHeaderProps> = ({ children, style, ...props }) => {
	const headerStyle: React.CSSProperties = {
		padding: "16px 24px",
		flex: "0 0 auto",
		lineHeight: 0,
		fontSize: "1.25rem",
	}

	return (
		<h2 style={{ ...headerStyle, ...style }} {...props}>
			{children}
		</h2>
	)
}

export type BrutalistModalBodyProps = {
	children: React.ReactNode
	style?: React.CSSProperties
} & React.ComponentProps<"div">
export const ModalBody: React.FC<BrutalistModalBodyProps> = ({ children, style, ...props }) => {
	const bodyStyle: React.CSSProperties = {
		padding: "16px 24px",
		flex: "1 1 auto",
		overflowY: "auto",
		borderTop: "2px solid black",
	}

	return (
		<div style={{ ...bodyStyle, ...style }} {...props}>
			{children}
		</div>
	)
}

export type BrutalistModalCloseBoxProps = {
	style?: React.CSSProperties
} & React.ComponentProps<"button">

export const ModalCloseBox: React.FC<BrutalistModalCloseBoxProps> = ({ style, ...props }) => {
	const headerStyle: React.CSSProperties = {
		padding: "16px 24px",
		flex: "0 0 auto",
		lineHeight: 0,
		fontSize: "1.25rem",
	}

	return (
		<button style={{ ...headerStyle, ...style }} {...props}>
			Close
		</button>
	)
}
