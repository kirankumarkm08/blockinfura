import React from "react";
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import { XIcon, DiscordIcon, RedditIcon } from "./icons/SocialIcons";
import { servicesList } from "../data/services";
import { BLOCK_INFURA_LOGO } from "../../public/assets/logo";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
              src={BLOCK_INFURA_LOGO}
              alt="BlockInfura Logo"
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400">
              Enterprise-grade Web3 infrastructure for the decentralized future.
            </p>
            <div className="flex space-x-4 mt-4 items-center">
              <a
                href="https://x.com/BlockInfura"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#E99710]"
              >
                <XIcon size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/blockinfura/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#E99710]"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://discord.gg/cQBxh7JK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#E99710]"
              >
                <DiscordIcon size={24} />
              </a>
              <a
                href="https://www.reddit.com/r/BlockInfura/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#E99710]"
              >
                <RedditIcon size={32} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {servicesList.map((service) => {
                const isComingSoon = [
                  "validator-services",
                  "rollup-as-a-service",
                  "faucet",
                ].includes(service.id);

                return (
                  <li key={service.id}>
                    <Link
                      to={!isComingSoon ? `/services/${service.id}` : "#"}
                      onClick={(e) => {
                        if (!isComingSoon) {
                          scrollToTop();
                        } else {
                          e.preventDefault();
                        }
                      }}
                      className={`text-gray-400 ${
                        isComingSoon
                          ? "text-gray-600 cursor-not-allowed"
                          : "hover:text-[#E99710] cursor-pointer"
                      }`}
                    >
                      {service.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/status"
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-[#E99710]"
                >
                  Status Page
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  // onClick={scrollToTop}
                  className="text-gray-600 cursor-not-allowed"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  // onClick={scrollToTop}
                  className="text-gray-600 cursor-not-allowed"
                >
                  API Reference
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  // onClick={scrollToTop}
                  className="text-gray-600 cursor-not-allowed"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-[#E99710]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-[#E99710]"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-[#E99710]"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  // onClick={scrollToTop}
                  className="text-gray-600 cursor-not-allowed"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 BlockInfura. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
