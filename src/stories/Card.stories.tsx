import Card, { BrutalistCardProps } from "../components/Card"

export default {
	title: "Layout/Card",
	component: Card,
}

const Template = (args: BrutalistCardProps) => <Card {...args} />

export const Primary = {
	...Template.bind({}),
}
