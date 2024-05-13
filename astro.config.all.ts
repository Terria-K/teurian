import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon'
import mdx from '@astrojs/mdx';
import metaTags from "astro-meta-tags";
import solid from "@astrojs/solid-js";
import playformInline from "@playform/inline";

export function teuriaIntegrations() {
    return [
        tailwind(), icon(), mdx(), metaTags(), solid(), playformInline({
            Critters: true
        })
    ]
}