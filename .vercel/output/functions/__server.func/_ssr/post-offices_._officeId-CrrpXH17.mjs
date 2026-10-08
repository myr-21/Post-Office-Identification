import { _ as lazyRouteComponent, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/post-offices_._officeId-CrrpXH17.js
var $$splitComponentImporter = () => import("./post-offices_._officeId-De9o8PKb.mjs");
var Route = createFileRoute("/post-offices_/$officeId")({
	head: () => ({ meta: [
		{ title: "Post Office Detail — PostRoute AI" },
		{
			name: "description",
			content: "Location, PIN mapping history and recent predictions for a delivery post office."
		},
		{
			property: "og:title",
			content: "Post Office Detail — PostRoute AI"
		},
		{
			property: "og:description",
			content: "Mapping history and prediction activity per office."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
