import Button, {
	AttentionButton,
	AttentionLink,
	ButtonGroup,
	NormalButtonProps,
	ScrollButtons,
	ScrollToTopButton,
} from "../components/Button"

export default {
	title: "Controls/Buttons",
	component: Button,
	argTypes: {
		onClick: { action: "clicked" },
		disabled: { control: "boolean" },
		active: { control: "boolean" },
	},
}

const Template = ({ label, ...args }: NormalButtonProps & { label: string }) => <Button {...args}>{label}</Button>

export const Primary = {
	...Template.bind({}),
	args: {
		label: "Primary Button",
		onClick: () => alert("Primary Button Clicked!"),
		active: false,
		disabled: false,
	},
}

export const Active = {
	...Template.bind({}),
	args: {
		active: true,
	},
}

export const Disabled = {
	...Template.bind({}),
	args: {
		disabled: true,
	},
}

export const Attention = () => (
	<AttentionButton onClick={() => alert("Attention Button Clicked!")}>Attention Button</AttentionButton>
)

export const Link = () => (
	<AttentionLink href="#" disabled={false}>
		Attention Link
	</AttentionLink>
)

export const ButtonGroupExample = () => (
	<ButtonGroup>
		<Button>Button 1</Button>
		<Button>Button 2</Button>
		<Button>Button 3</Button>
	</ButtonGroup>
)

export const ScrollButtonsExample = () => (
	<ScrollButtons
		buttonUp={<p>up</p>}
		buttonDown={<p>down</p>}
		onUp={() => alert("Scroll Up Clicked!")}
		onDown={() => alert("Scroll Down Clicked!")}
	/>
)

export const ScrollToTopExample = () => <ScrollToTopButton buttonUp={<p>up</p>} />
