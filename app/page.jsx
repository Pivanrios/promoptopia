import Feed from "@components/Feed"
import Image  from "next/image"
import Subscription from "@components/Subscription"
import Footer from "@components/Footer"

function Home() {
  return (
    <>
    <section className="w-full flex-center flex-col">
        <Image
              src="/icons/logo.png"
              width={200}
              height={400}
              />
        <h1 className="head_text text-center">
          Lunche
          <br />
          <br className="max-md:hidden"/>
          <span className="orange_gradient text-center">Meal Prep</span>
        </h1>
        <p className="desc text-center">
          Order homemade food from your cooworkers, save money and get rewards by <a href="/">subscibing</a>.
        </p>
    </section>
    <Subscription/>
    <Footer/>
    </>
  )
}

export default Home