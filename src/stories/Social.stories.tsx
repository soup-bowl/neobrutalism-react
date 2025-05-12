import { Meta, StoryObj } from "@storybook/react"
import { Social, SocialContainer, SocialPanel } from "../components/Social"

const meta: Meta<typeof Social> = {
	title: "Controls/Social",
	component: Social,
	argTypes: {
		color: { control: "color" },
		icon: { control: "object" },
		iconSvg: { control: "object" },
		url: { control: "text" },
		children: { control: "text" },
	},
}

export default meta

export const Default: StoryObj<typeof Social> = {
	render: (args) => (
		<SocialContainer>
			<SocialPanel>
				<Social {...args} />
			</SocialPanel>
		</SocialContainer>
	),
	args: {
		color: "#29132e",
		icon: <p>aa</p>,
		url: "#",
		children: "Blog",
	},
}

export const Multiple: StoryObj<typeof Social> = {
	render: () => (
		<SocialContainer>
			<SocialPanel>
				<Social id="1" icon={<p>aa</p>} color="#29132e">
					Blog
				</Social>
				<Social id="2" icon={<p>aa</p>} color="#00ad2b">
					Experiments
				</Social>
				<Social id="3" icon={<p>aa</p>} color="#2d333b">
					soup-bowl
				</Social>
				<Social id="4" icon={<p>aa</p>} color="#0085BA">
					soupbowl
				</Social>
				<Social id="5" icon={<p>aa</p>} color="#086DD7">
					soupbowl
				</Social>
				<Social id="6" color="#FFCB00" iconSvg={<div>Custom SVG</div>}>
					Balthazar Swindon
				</Social>
				<Social id="7" icon={<p>aa</p>} color="#6364ff">
					soupbowl
					<br />
					@mstdn.social
				</Social>
				<Social id="8" icon={<p>aa</p>} color="#0085ff">
					subo.dev
				</Social>
				<Social id="9" icon={<p>aa</p>} color="#5865f2">
					subo.dev
				</Social>
			</SocialPanel>
		</SocialContainer>
	),
}
