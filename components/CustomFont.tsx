import Head from 'next/head'
import * as React from 'react'
import * as types from '../lib/types'

export const CustomFont: React.FC<{ site: types.Site }> = ({ site }) => {
  const fontFamilies = ['Italiana', 'serif']
  const googleFontsLink = `https://fonts.googleapis.com/css2?family=Italiana&family=Sorts+Mill+Goudy&display=swap`
  const cssFontFamilies = fontFamilies.map((font) => `"${font}"`).join(', ')

  return (
    <>
      <Head>
        <link rel='stylesheet' href={googleFontsLink} />

        <style>{`
          .notion.notion-app {
            font-family: 'Italiana', 'Sorts Mill Goudy', serif, ${cssFontFamilies}, -apple-system, BlinkMacSystemFont,
              'Segoe UI', Helvetica, 'Apple Color Emoji', Arial, sans-serif,
              'Segoe UI Emoji', 'Segoe UI Symbol';
          }
        `}</style>
      </Head>
    </>
  )
}
