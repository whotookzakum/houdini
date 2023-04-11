import { plugin } from 'houdini'

const HoudiniRouterPlugin = plugin('houdini-router', async () => ({
	// The router is fundamentally a component that knows how to render
	// a particular component tree for a given url. This is driven by something
	// we call the applications "manifest".
	//
	// In react, the tree of route directories maps to a component hierarchy
	// with suspense boundaries sprinkled when there is a loading directive
	// present on a query.
	async generate({ config, documents }) {
		// before we can generate the manifest, we need to have a quick way
		// to look up query information for a particular query.
		const docMap = Object.fromEntries(documents.map((doc) => [doc.name, doc]))
	},
}))

export default HoudiniRouterPlugin

export type HoudiniRouterPluginConfig = {}
