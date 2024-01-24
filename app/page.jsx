import Feed from "@components/Feed"
import Image  from "next/image"
import Subscription from "@components/Subscription"

function Home() {
  return (
    <section className="w-full flex-center flex-col">
        <Image
              src="/icons/logo.png"
              width={200}
              height={400}
              />
        <h1 className="head_text text-center">
          Lunch
          <br />
          <br className="max-md:hidden"/>
          <span className="orange_gradient text-center">Meal Prep</span>
        </h1>
        <p className="desc text-center">
          Order homemade food from your cooworkers and 
          and get rewards for subscibing
        </p>
        <Subscription/>
    </section>
  )
}

export default Home