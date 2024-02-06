import Feed from "@components/Feed"
import Image  from "next/image"
import Subscription from "@components/Subscription"
import Footer from "@components/Footer"
import Slider from "@components/Slider"

function Home() {
  return (
    <>
    <section className="w-full flex flex-center flex-col">
        <h1 className="head_text text-center">
          Lunche
          <br />
          <br className="max-md:hidden"/>
          <span className="orange_gradient text-center">Meal Prep</span>
        </h1>
        <div className="sm:hidden flex flex-col ">{/* -------- mobile view--------------*/}
            <div className="w-full justify-center">
            <Image 
                src={"/icons/rifa.jpeg"}
                width={200}
                height={300}
                alt="mobile picture"/>
            </div>
            <p className="desc text-center">
              Order homemade food from your cooworkers, save money and get rewards by <a href="/">subscibing</a>.
            </p>
        </div>
        <div className="hidden sm:contents">{/* ---------------- Desktop phone ------------*/}
          <Slider/>
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default Home