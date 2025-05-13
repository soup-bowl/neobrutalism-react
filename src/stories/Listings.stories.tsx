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
					avatar: "https://placekitten.com/80/80",
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
							thumb: "https://placekitten.com/400/200",
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
					avatar: "https://placekitten.com/81/81",
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
