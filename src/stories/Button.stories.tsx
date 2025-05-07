import React from "react"
import Button from "../components/Button"

export default {
	title: "Example/Button",
	component: Button,
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
	label: "Primary Button",
	onClick: () => alert("Primary Button Clicked!"),
}

export const Secondary = Template.bind({})
Secondary.args = {
	label: "Secondary Button",
	onClick: () => alert("Secondary Button Clicked!"),
}

export const Disabled = Template.bind({})
Disabled.args = {
	label: "Disabled Button",
	onClick: () => alert("Disabled Button Clicked!"),
	disabled: true,
}
