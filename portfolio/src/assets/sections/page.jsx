import React from "react"
import nav_items from "../constants/nav_items"

const Page = () => {
  return (
    <>
      {nav_items.map(page => (
        <section
          key={page.id}
          id={page.id}
          className="min-h-screen max-w-[80vw] ml-[10vw] mr-[5vw]"
        >
          {page.section}
          <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
        </section>
      ))}
    </>
  )
}

export default Page
