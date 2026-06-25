import { useNavigate } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

import Card from "./Card";
import { useStoreContext } from "../contextApi/ContextApi";

let desc =
  "Generate short, memorable links with ease using Linkcom's intuitive interface. Share URLs effortlessly across platforms. Optimize your sharing strategy with Linkcom. Track clicks and manage your links seamlessly to enhance your online presence.";

const LandingPage = () => {
  const navigate = useNavigate();
  const { token } = useStoreContext();

  const dashBoardNavigateHandler = () => {
    navigate(token ? "/dashboard" : "/login");
  };

  return (
    <div className="min-h-[calc(100vh-64px)]  lg:px-14 sm:px-8 px-4">
      <div className="lg:flex-row flex-col    lg:py-5   pt-16   lg:gap-10 gap-8 flex justify-between items-center">
        <div className=" flex-1">
          <motion.h1
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-bold font-roboto text-slate-800 md:text-5xl sm:text-4xl text-3xl md:leading-[55px] sm:leading-[45px] leading-10 lg:w-full md:w-[70%] w-full"
          >
            Linkcom Simplifies URL Shortening For Efficient Sharing.
          </motion.h1>
          <p className="text-slate-600 text-sm my-5">
            Linkcom streamlines the process of URL shortening, making sharing
            links effortless and efficient. With its user-friendly interface,
            Linkcom allows you to generate concise, easy-to-share URLs in
            seconds. Simplify your sharing experience with Linkcom today.
          </p>
          <div className="flex items-center gap-3">
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={dashBoardNavigateHandler}
              className="bg-custom-gradient w-40 text-white rounded-md py-2 hover:opacity-90 transition-opacity"
            >
              Manage Links
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={dashBoardNavigateHandler}
              className="border-2 border-btnColor w-40 text-btnColor rounded-md py-2 hover:bg-emerald-50 transition-colors"
            >
              Create Short Link
            </motion.button>
          </div>
        </div>
        <div className="flex-1 flex justify-center w-full">
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="sm:w-[480px] w-[340px]"
          >
            <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
              {/* Background card */}
              <rect x="20" y="20" width="440" height="320" rx="24" fill="#f0fdf4" stroke="#6ee7b7" strokeWidth="1.5"/>

              {/* Top bar dots */}
              <circle cx="52" cy="52" r="7" fill="#f87171"/>
              <circle cx="74" cy="52" r="7" fill="#fbbf24"/>
              <circle cx="96" cy="52" r="7" fill="#34d399"/>

              {/* Browser bar */}
              <rect x="116" y="42" width="284" height="20" rx="10" fill="#d1fae5"/>
              <rect x="126" y="48" width="140" height="8" rx="4" fill="#6ee7b7"/>
              <circle cx="388" cy="52" r="6" fill="#a7f3d0"/>

              {/* Divider */}
              <line x1="20" y1="76" x2="460" y2="76" stroke="#bbf7d0" strokeWidth="1"/>

              {/* Main link card */}
              <rect x="44" y="96" width="392" height="64" rx="14" fill="white" stroke="#6ee7b7" strokeWidth="1.5"/>
              {/* Chain link icon bg */}
              <circle cx="76" cy="128" r="18" fill="#d1fae5"/>
              {/* Chain link icon */}
              <path d="M70 124 Q68 120 72 118 L76 116 Q82 114 84 120 L82 122 Q80 118 76 119 L72 121 Q70 124 72 126 L74 128" stroke="#059669" strokeWidth="2" strokeLinecap="round" fill="none"/>
              <path d="M78 128 Q80 132 76 134 L72 136 Q66 138 64 132 L66 130 Q68 134 72 133 L76 131 Q78 128 76 126 L74 124" stroke="#059669" strokeWidth="2" strokeLinecap="round" fill="none"/>
              <line x1="74" y1="122" x2="78" y2="130" stroke="#059669" strokeWidth="2" strokeLinecap="round"/>
              {/* Long URL text */}
              <rect x="104" y="118" width="200" height="9" rx="4" fill="#cbd5e1"/>
              <rect x="104" y="132" width="140" height="7" rx="3" fill="#e2e8f0"/>
              {/* Shorten button */}
              <rect x="338" y="113" width="82" height="30" rx="10" fill="#059669"/>
              <rect x="342" y="120" width="52" height="7" rx="3" fill="white" opacity="0.85"/>
              <rect x="342" y="130" width="38" height="5" rx="2.5" fill="white" opacity="0.5"/>

              {/* Arrow pointing down */}
              <path d="M240 172 L240 188" stroke="#059669" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M233 182 L240 190 L247 182" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>

              {/* Shortened link result card */}
              <rect x="44" y="200" width="392" height="64" rx="14" fill="#ecfdf5" stroke="#34d399" strokeWidth="1.5"/>
              {/* Small link icon */}
              <circle cx="76" cy="232" r="18" fill="#059669"/>
              <path d="M70 228 Q68 224 72 222 L76 220 Q82 218 84 224 L82 226 Q80 222 76 223 L72 225 Q70 228 72 230 L74 232" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
              <path d="M78 232 Q80 236 76 238 L72 240 Q66 242 64 236 L66 234 Q68 238 72 237 L76 235 Q78 232 76 230 L74 228" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
              <line x1="74" y1="226" x2="78" y2="234" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              {/* Short URL */}
              <rect x="104" y="221" width="100" height="9" rx="4" fill="#059669" opacity="0.7"/>
              <rect x="104" y="235" width="70" height="7" rx="3" fill="#6ee7b7"/>
              {/* Copy icon */}
              <rect x="330" y="218" width="34" height="30" rx="8" fill="#d1fae5" stroke="#6ee7b7" strokeWidth="1"/>
              <rect x="337" y="224" width="14" height="17" rx="3" fill="none" stroke="#059669" strokeWidth="1.5"/>
              <rect x="333" y="221" width="14" height="17" rx="3" fill="#d1fae5" stroke="#059669" strokeWidth="1.5"/>
              {/* Share button */}
              <rect x="374" y="218" width="46" height="30" rx="8" fill="#059669"/>
              <rect x="380" y="226" width="28" height="7" rx="3" fill="white" opacity="0.9"/>
              <rect x="383" y="235" width="20" height="5" rx="2.5" fill="white" opacity="0.5"/>

              {/* Analytics mini bar chart */}
              <rect x="44" y="278" width="170" height="46" rx="12" fill="white" stroke="#a7f3d0" strokeWidth="1"/>
              <rect x="60" y="306" width="10" height="10" rx="2" fill="#059669" opacity="0.4"/>
              <rect x="76" y="298" width="10" height="18" rx="2" fill="#059669" opacity="0.6"/>
              <rect x="92" y="292" width="10" height="24" rx="2" fill="#059669" opacity="0.8"/>
              <rect x="108" y="296" width="10" height="20" rx="2" fill="#059669"/>
              <rect x="124" y="300" width="10" height="16" rx="2" fill="#059669" opacity="0.7"/>
              <rect x="140" y="294" width="10" height="22" rx="2" fill="#059669" opacity="0.9"/>
              <rect x="156" y="303" width="10" height="13" rx="2" fill="#059669" opacity="0.5"/>

              {/* Stats card */}
              <rect x="226" y="278" width="100" height="46" rx="12" fill="white" stroke="#a7f3d0" strokeWidth="1"/>
              <rect x="240" y="288" width="40" height="8" rx="4" fill="#059669" opacity="0.5"/>
              <rect x="240" y="300" width="60" height="12" rx="4" fill="#059669"/>
              <rect x="240" y="315" width="30" height="6" rx="3" fill="#6ee7b7"/>

              {/* Globe / clicks card */}
              <rect x="338" y="278" width="98" height="46" rx="12" fill="white" stroke="#a7f3d0" strokeWidth="1"/>
              <circle cx="362" cy="301" r="14" fill="none" stroke="#059669" strokeWidth="1.5"/>
              <ellipse cx="362" cy="301" rx="6" ry="14" fill="none" stroke="#059669" strokeWidth="1"/>
              <line x1="348" y1="301" x2="376" y2="301" stroke="#059669" strokeWidth="1"/>
              <rect x="382" y="292" width="40" height="7" rx="3" fill="#d1fae5"/>
              <rect x="382" y="303" width="28" height="7" rx="3" fill="#059669" opacity="0.6"/>
              <rect x="382" y="314" width="20" height="6" rx="3" fill="#6ee7b7"/>
            </svg>
          </motion.div>
        </div>
      </div>
      <div className="sm:pt-12 pt-7">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-slate-800 font-roboto font-bold lg:w-[60%] md:w-[70%] sm:w-[80%] mx-auto text-3xl text-center"
        >
          Trusted by individuals and teams at the world best companies{" "}
        </motion.p>
        <div className="pt-4 pb-7 grid lg:gap-7 gap-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4">
          <Card
            title="Simple URL Shortening"
            desc="Experience the ease of creating short, memorable URLs in just a few clicks. Our intuitive interface and quick setup process ensure you can start shortening URLs without any hassle."
          />
          <Card
            title="Powerful Analytics"
            desc="Gain insights into your link performance with our comprehensive analytics dashboard. Track clicks, geographical data, and referral sources to optimize your marketing strategies."
          />
          <Card
            title="Enhanced Security"
            desc="Rest assured with our robust security measures. All shortened URLs are protected with advanced encryption, ensuring your data remains safe and secure."
          />
          <Card
            title="Fast and Reliable"
            desc="Enjoy lightning-fast redirects and high uptime with our reliable infrastructure. Your shortened URLs will always be available and responsive, ensuring a seamless experience for your users."
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
