import { remarkCodeHike, recmaCodeHike } from "codehike/mdx"

/** @type {import('codehike/mdx').CodeHikeConfig} */
const chConfig = {
  // optional (see code docs):
  components: { code: "Code" },
  // if you can't use RSC:
  // syntaxHighlighting: {
  //   theme: "github-dark",
  // },
}

const mdxOptions = {
  remarkPlugins: [[remarkCodeHike, chConfig]],
  recmaPlugins: [[recmaCodeHike, chConfig]],
  jsx: true,
};
