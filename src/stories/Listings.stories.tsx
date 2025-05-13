import { ListingItemGroup, ListingSocialItem } from "../components/Listings"

export default {
	title: "Controls/Listings",
	component: ListingItemGroup,
}

const mockStatuses = {
	feed: [
		{
			post: {
				cid: "cid1",
				author: {
					avatar: "https://gravatar.com/userimage/42451181/f43c210afe878c3cfcaca31a9d8f4762.jpeg?size=64",
					handle: "alice.bsky.social",
					displayName: "Alice",
				},
				uri: "at://alice.bsky.social/app.bsky.feed.post/12345",
				record: {
					createdAt: "2024-05-01T12:00:00Z",
					text: "Hello from Alice!",
				},
				embed: {
					images: [
						{
							thumb: "https://cataas.com/cat?width=400&height=200",
							aspectRatio: { width: 400, height: 200 },
						},
					],
				},
			},
		},
		{
			post: {
				cid: "cid2",
				author: {
					avatar: "https://gravatar.com/userimage/42451181/d9e67a37724e3a32e3dcfdbbf678f9a1.jpeg?size=64",
					handle: "bob.bsky.social",
					displayName: "Bob",
				},
				uri: "at://bob.bsky.social/app.bsky.feed.post/67890",
				record: {
					createdAt: "2024-05-02T15:30:00Z",
					text: "Bob's post with no image.",
				},
				embed: {
					images: [],
				},
			},
		},
	],
}

export const SocialFeed = () => (
	<ListingItemGroup>
		{mockStatuses.feed.map((item) => (
			<ListingSocialItem
				key={item.post.cid}
				avatar={item.post.author.avatar}
				handle={item.post.author.handle}
				name={item.post.author.displayName}
				profileUrl={`https://bsky.app/profile/${item.post.author.handle}`}
				url={`https://bsky.app/profile/${item.post.author.handle}/post${item.post.uri.match(/\/([^/]+)$/)?.[0] ?? ""}`}
				image={item.post.embed.images?.[0]?.thumb}
				imageDimensions={{
					height: item.post.embed.images?.[0]?.aspectRatio.height,
					width: item.post.embed.images?.[0]?.aspectRatio.width,
				}}
				date={new Date(item.post.record.createdAt)}
			>
				<div>{item.post.record.text}</div>
			</ListingSocialItem>
		))}
	</ListingItemGroup>
)
