import { useState } from "react"
import { Meta, StoryFn } from "@storybook/react"
import { Modal, ModalProps } from "../components/Modal"
import Button from "../components/Button"

export default {
	title: "Components/Modal",
	component: Modal,
	argTypes: {
		open: { control: "boolean" },
		large: { control: "boolean" },
		title: { control: "text" },
	},
} as Meta<typeof Modal>

const Template: StoryFn<ModalProps> = (args) => {
	const [isOpen, setIsOpen] = useState(args.open)

	return (
		<>
			<Button onClick={() => setIsOpen(!isOpen)}>Toggle Modal</Button>
			<Modal {...args} open={isOpen} onClose={() => setIsOpen(false)}>
				<p>This is a sample modal content.</p>
			</Modal>
		</>
	)
}

export const Default = Template.bind({})
Default.args = {
	title: "Default Modal",
	open: false,
	large: false,
}

export const LargeModal = Template.bind({})
LargeModal.args = {
	title: "Large Modal",
	open: false,
	large: true,
}

export const OpenModal = Template.bind({})
OpenModal.args = {
	title: "Open Modal",
	open: true,
	large: false,
}
