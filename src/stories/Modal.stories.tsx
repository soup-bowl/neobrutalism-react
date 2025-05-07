import { Modal, ModalHeader, ModalBody, ModalCloseBox, BrutalistModalProps } from "../components/Modal"

export default {
	title: "Layout/Modal",
	component: Modal,
}

const Template = (args: BrutalistModalProps) => (
	<Modal {...args}>
		<ModalHeader>
			Modal Title
			<ModalCloseBox onClick={() => alert("Close button clicked!")} />
		</ModalHeader>
		<ModalBody>
			<p>This is the content of the modal.</p>
		</ModalBody>
	</Modal>
)

export const Default = {
	...Template.bind({}),
}
