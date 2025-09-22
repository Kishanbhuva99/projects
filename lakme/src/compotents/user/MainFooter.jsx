import React from 'react'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import '../../styles/style.css';



export default function MainFooter() {
    return (
        <>
            <footer className="lakme-footer py-5">
                {/* Footer Top */}
                <div className="footer-top my-2">
                    <div className="allogos w-1/4 mx-auto">
                        <div className="footerlogo">
                            <img src="Lkm_foot_logo.png" className='mx-auto' alt="Lakme Footer Logo" />
                        </div>
                        <div className="partnerlogo my-2 flex justify-center items-center">
                            <p className="partnerText my-1">Partnered with</p>
                            <img width="150px" src="BB_Logo_white.png" alt="Partner Logo" />
                        </div>
                    </div>
                </div>

                {/* Footer Middle */}
                <div className="footer-mid py-2 mx-4 flex">
                    {/* Orders */}
                    <div className="mid1 p-4 basis-1/5">
                        <h3 className="foot-navhead">ORDERS</h3>
                        <div className="foot-navmenu flex flex-col gap-4 mt-4">
                            <a href="#" className="foot-navlinks">Track Order</a>
                            <a href="#" className="foot-navlinks">Cancel Order</a>
                        </div>
                    </div>

                    {/* Help */}
                    <div className="mid2 p-4 basis-1/5">
                        <h3 className="foot-navhead">HELP</h3>
                        <div className="foot-navmenu flex flex-col gap-4 mt-4">
                            <a href="#" className="foot-navlinks">FAQ</a>
                            <a href="#" className="foot-navlinks">Contact Us</a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="mid3 p-4 basis-1/5">
                        <h3 className="foot-navhead">CONTACT US</h3>
                        <div className="foot-navmenu flex flex-col gap-4 mt-4">
                            <p className="foot-navlinks flex items-center gap-2">
                                khushbukinderkhedia@gmail.com <FaEnvelope />
                            </p>
                            <div className="calltime foot-navlinks flex flex-col gap-1">
                                <p className="flex items-center gap-2">
                                    1800-202-4444 <FaPhoneAlt />
                                </p>
                                <p>Mon-Sun, 9 am to 6 pm</p>
                            </div>
                        </div>
                    </div>

                    {/* Account */}
                    <div className="mid4 p-4 basis-1/5">
                        <h3 className="foot-navhead">ACCOUNT</h3>
                        <div className="foot-navmenu flex flex-col gap-4 mt-4">
                            <a href="#" className="foot-navlinks">Account</a>
                        </div>
                    </div>

                    {/* Subscribe */}
                    <div className="mid5 p-4 basic-1/5 border-l border-gray-400">
                        <h3 className="mid5-head foot-navhead">
                            FOLLOW LATEST UPDATES & NEW LAUNCHES
                        </h3>
                        <label className="subscribetext my-3 mt-6 block">Sign Up for Lakme Emails</label>
                        <div className="subscribe-group flex border border-white w-fit">
                            <input
                                type="text"
                                className="subscribeinput bg-transparent px-6 py-3 border-none text-white"
                                placeholder="Enter your Email address"
                            />
                            <button
                                type="button"
                                className="sub-btn tracking-widest px-10 py-3 text-black"
                            >
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
