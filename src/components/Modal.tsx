import { ReactNode, useCallback, useEffect, useState } from "react"
import "./Modal.css"

export interface ModalProps {
	title: string
	open?: boolean
	large?: boolean
	onClose: () => void
	children: ReactNode
}

const onCloseInteraction = (onClose: () => void) => {
	document.body.style.overflow = "visible"
	onClose()
}

export const Modal = ({ title, open, large, onClose, children }: ModalProps) => {
	const [isClosing, setIsClosing] = useState(false)
	const [isBackdropVisible, setIsBackdropVisible] = useState(false)

	const handleClose = useCallback(() => {
		setIsClosing(true)
		setIsBackdropVisible(false)

		const animationDuration = 300
		setTimeout(() => {
			onCloseInteraction(onClose)
			setIsClosing(false)
		}, animationDuration)
	}, [onClose])

	useEffect(() => {
		document.getElementById("modal")?.addEventListener("click", (e) => {
			if (e.target instanceof HTMLElement) {
				if (!e.target.closest("#modalbox")) {
					handleClose()
				}
			}
		})

		if (open) {
			setIsClosing(false)
			setIsBackdropVisible(true)
		}
	}, [open, handleClose])

	if (open || isClosing) {
		document.body.style.overflow = "hidden"
		return (
			<div className="modal-control" id="modal">
				<div className={`modal-backdrop ${isBackdropVisible ? "visible" : "hidden"}`} />
				<div className="modal-background">
					<div
						id="modalbox"
						className={`modal-box ${open && !isClosing ? "open" : "close"}`}
						style={{ maxWidth: large ? "1200px" : "600px" }}
					>
						<div className="modal-header">
							{title}
							<button className="modal-close" onClick={handleClose}>
								×
							</button>
						</div>
						<div className="modal-body">{children}</div>
					</div>
				</div>
			</div>
		)
	} else {
		return <></>
	}
}
