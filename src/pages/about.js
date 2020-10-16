<<<<<<< HEAD
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../css/about.css'

const SecondPage = () => (
  <Layout mark={20}>
    <SEO title="Page two" />
    <div className="about_container">
    <div className="about_wrapper">
      <div className="about_header">
        About Us
      </div>
      <div className="about_content">
        <p>
        UpVision is a Tech-Club of NIT, Delhi an appreciable initiative by our seniors to fuel the awareness in the field of Technology 
        in our college. We give students a platform to work together and bestow the creative mind to turn innovative ideas into reality.
        We teach and inspire students, transfer knowledge, and prepare them for outside world.
        </p>
        <p>
        We provide students the learning opporunities
        to self-enhance. We are a team that wants to make students learn, share and grow themselves in their journey.
        </p>
      </div>
    </div>
    </div>
  </Layout>
)

export default SecondPage
=======
import React from 'react'
import Layout from '../components/layout';
import '../css/about.css'

function about() {
    return (
        <Layout>
            <div className="about_wrapper">
                <div className="about_header">ABOUT US</div>
                <div className="about_content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Fuga blanditiis, quibusdam repellat ipsam id tempore officia unde quae earum iure? Fugit labore tempora quod. 
                    Officia eos soluta iste veritatis nesciunt deserunt ex nulla itaque dolorem laborum. Numquam, cupiditate 
                    ipsam eligendi harum fugit ea similique autem distinctio! Beatae veritatis eos libero.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Fuga blanditiis, quibusdam repellat ipsam id tempore officia unde quae earum iure? Fugit labore tempora quod. 
                    Officia eos soluta iste veritatis nesciunt deserunt ex nulla itaque dolorem laborum. Numquam, cupiditate 
                    ipsam eligendi harum fugit ea similique autem distinctio! Beatae veritatis eos libero.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Fuga blanditiis, quibusdam repellat ipsam id tempore officia unde quae earum iure? Fugit labore tempora quod. 
                    Officia eos soluta iste veritatis nesciunt deserunt ex nulla itaque dolorem laborum. Numquam, cupiditate 
                    ipsam eligendi harum fugit ea similique autem distinctio! Beatae veritatis eos libero.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Fuga blanditiis, quibusdam repellat ipsam id tempore officia unde quae earum iure? Fugit labore tempora quod. 
                    Officia eos soluta iste veritatis nesciunt deserunt ex nulla itaque dolorem laborum. Numquam, cupiditate 
                    ipsam eligendi harum fugit ea similique autem distinctio! Beatae veritatis eos libero.
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default about
>>>>>>> 820119695b7d4f2498d77794908d67869f83e7d1
