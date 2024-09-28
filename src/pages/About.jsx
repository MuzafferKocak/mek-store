import React from 'react'
import logo from "../assets/logo.png"
import {LinkedinIcon, GithubIcon} from "../helpers/icons"
import { NavLink } from 'react-router-dom'


const About = () => {
  return (
    <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
                <figure>
                    <blockquote>
                        <p className="text-gray-800 text-xl text-center font-semibold sm:text-2xl">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna lorem, euismod volutpat arcu volutpat et.“
                        </p>
                    </blockquote>
                    <div className="flex justify-center items-center gap-x-4 mt-6">
                        <img src={logo} alt='logo' className="w-16 h-16 rounded-full" />
                        <div>
                            <span className="block text-gray-800 font-semibold">MEK</span>
                            <span className="block text-gray-600 text-sm mt-0.5">Fronded Developer</span>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-x-10 mt-10">
                    <NavLink to="https://github.com/MuzafferKocak" target='_blank'>
                       {GithubIcon}
                    </NavLink>
                    <NavLink to="https://www.linkedin.com/in/muzaffer-kocak/" target='_blank' >
                       {LinkedinIcon}
                    </NavLink>
                    </div>
                </figure>
            </div>
        </div>
    </section>
)
}

export default About