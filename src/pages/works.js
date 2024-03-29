import React from "react"
import Layout from "../components/layout"
import Gallery from "../components/gallery"

import SEO from "../components/seo"

const Works = () => (
  <Layout>
    <SEO title="Works" />
    <div className="-m-4 bg-primary ">
      <div className=" grid gap-2 md:grid-cols-2 lg:grid-cols-2 lg:pt-24 lg:px-8 lg:pb-10 lg:gap-4">
        <Gallery
          name={"Тумби"}
          image={"https://source.unsplash.com/featured/?`${bathroom},{bath}`"}
          url={"/tumby"}
        />
        <Gallery
          name={"Шафи"}
          image={"https://source.unsplash.com/featured/?`${bathroom},{bath}`"}
        />
        <Gallery
          name={"Дзеркала"}
          image={"https://source.unsplash.com/featured/?`${bathroom},{bath}`"}
        />
        <Gallery
          name={"Полиці"}
          image={"https://source.unsplash.com/featured/?`${bathroom},{bath}`"}
        />
      </div>
      <div className="p-4 flex justify-center pt-24 pb-24 lg:p-12">
        <button className="transition duration-200 ease-in-out text-primary font-display rounded-sm bg-sky py-2 text-center mx-auto my-0  hover:bg-secondary hover:text-light focus:outline-none focus:ring-secondary focus:ring-2">
          <span className="uppercase font-bold tracking-widest text-sm p-8">
            Замовити
          </span>
        </button>
      </div>
    </div>
  </Layout>
)

export default Works
