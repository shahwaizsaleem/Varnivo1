import { RiFacebookFill, RiInstagramFill, RiTwitterFill } from "@remixicon/react";
import React from "react";

const Footer =() =>{
    return(
        <footer className="max-w-7xl mx-auto" id="footer">
            <div className="flex flex-col md:flex-row justify-center items-center border-t-2 py-4 md:space-x-6">
            <div className="flex space-x-6 ">
                <a href="https://www.facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook Page">
                    <RiFacebookFill/>
                </a>
            <a href="https://www.x.com" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Twitter Page">
                    <RiTwitterFill/>
                </a>
            <a href="https://www.instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our instagram Page">
                    <RiInstagramFill/>
                </a>
              
            </div>
              <p className="text-sm"> ALL RIGHTS RESERVED 2025</p>
            </div>
        </footer>
    )
}

export default Footer