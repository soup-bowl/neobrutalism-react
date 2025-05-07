import Banner, { BrutalistBannerProps } from "../components/Banner"

export default {
	title: "Layout/Banner",
	component: Banner,
}

const Template = (args: BrutalistBannerProps) => <Banner {...args} />

export const Primary = {
	...Template.bind({}),
	args: {
		label: "Primary Button",
		colour: "warning",
		children: (
			<>
				This is not fully complete, <strong>proceed with caution</strong>
			</>
		),
		onClick: () => alert("Primary Button Clicked!"),
	},
}
