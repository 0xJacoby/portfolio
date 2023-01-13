import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss"
  ],
}

export default config
