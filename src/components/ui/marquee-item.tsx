import React from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface MarqueeItemProps {
  icons: IconType[];
  from: number | string;
  to: number | string;
}

const MarqueeItem: React.FC<MarqueeItemProps> = ({ icons, from, to }) => {
  return (
    <div className="flex mask-gradient items-center justify-center gap-7 overflow-hidden">
      <motion.div
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 gap-7"
      >
        {icons.map((IconComponent, index) => (
          <IconComponent size={45} key={index} />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 gap-7"
      >
        {icons.map((IconComponent, index) => (
          <IconComponent size={45} key={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;
