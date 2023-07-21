import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/about-pic.png"
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Tools from "@/components/Tools";
/* eslint-disable */

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null)
    
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, {once: true})

    useEffect(() => {
        if(isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [ springValue, value ])

    return <span ref={ref}></span>

}

const about = () => {
    return (
        <>
            <Head>
                <title>Toan's Portfolio | About Page</title>
                <meta name="description" content="any descpription" />
            </Head>
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text={"Passion Fuels Purpose!"} className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 " />
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 md:gap-8">
                        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">Biography</h2>
                            <p className="font-medium my-4">
                            Hi, I'm VanToan, a web developer. Graduated at Industrial University of HoChiMinh city (IUH) with major is Software Technology.
                            </p>
                            <p className=" my-4 font-medium">
                                I am an open-minded person, quickly adapting to new enviroments, not afraid of difficulties.
                                Capable of working independently and in groups. Actively participate in movement activities.
                                
                            </p>
                            <p className=" my-4 font-medium">
                            Strengths: Back-end Developer. Experience with Spring Framework, NestJS(Javascript and Typescript).
                            Familiarity with RESTful APIs, SQL. Hace a reuse mindset when handling funtions/components.
                            Reseach and propose technical solutions to improve website quality.
                            Ability to learn and apply new technology. I look forward to the opportunity to bring my skills and passion to your next project.
                            </p>                 
                        </div>

                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:col-span-8 md:order-1 ">
                           
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light
                            " />
                            <Image 
                                src={profilePic} 
                                alt="CodeBucks" 
                                className="w-full h-auto rounded-2xl" 
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                        </div>

                        <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:!text-6xl sm:!text-5xl xs:!text-4xl">
                                    <AnimatedNumbers value={50} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                                xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    satisfied clients</h2>
                            </div>
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:!text-6xl sm:!text-5xl xs:!text-4xl">
                                <AnimatedNumbers value={5} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                                xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    projects completed</h2>
                            </div>
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:!text-6xl sm:!text-5xl xs:!text-4xl">
                                <AnimatedNumbers value={1} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                                xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    year old experience</h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Tools />
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    )
}

export default about