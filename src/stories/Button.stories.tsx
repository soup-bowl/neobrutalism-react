import Button, { BrutalistButtonProps } from "../components/Button"

export default {
	title: "Example/Button",
	component: Button,
	argTypes: {
		// Add controls for props if needed
		onClick: { action: "clicked" },
		disabled: { control: "boolean" },
	},
}

const Template = (args: BrutalistButtonProps & { label: string }) => <Button {...args} />

export const Primary = {
	...Template.bind({}),
	args: {
		label: "Primary Button",
		onClick: () => alert("Primary Button Clicked!"),
	},
}

export const Secondary = {
	...Template.bind({}),
	args: {
		label: "Secondary Button",
		onClick: () => alert("Secondary Button Clicked!"),
	},
}

export const Disabled = {
	...Template.bind({}),
	args: {
		label: "Disabled Button",
		onClick: () => alert("Disabled Button Clicked!"),
		disabled: true,
	},
}
