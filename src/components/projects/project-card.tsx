import Image from "next/image";

import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

import Corosel from "@/components/utility/corosel";
import { GithubIcon } from "@/components/icons";
import Link from "next/link";

export interface ProjectCardProps {
  name: string;
  favicon: string;
  imageUrl: string[];
  description: string;
  sourceCodeHref?: string;
  liveWebsiteHref?: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <motion.div
      initial={{ y: 80 }}
      whileInView={{ y: 0 }}
      transition={{
        type: "spring",
        duration: 0.4,
      }}
      className="w-full overflow-hidden rounded-lg border border-accent/20 bg-background shadow-md transition-shadow duration-150 hover:z-30 hover:shadow-xl hover:shadow-accent/20 dark:bg-zinc-800 dark:hover:shadow-lg lg:max-w-[600px]"
    >
      <Corosel images={props.imageUrl} aspectRatio={2.1} />
      <div className="p-3 text-foreground sm:p-4">
        <div className="flex items-center gap-3">
          <span className="relative">
            <Image
              src={props.favicon}
              alt="logo"
              fill
              className="min-h-[250px]"
            />
          </span>
          <h1 className="text-md font-bold ">{props.name}</h1>
        </div>
        <div className="mt-3">
          <p className="text-xs md:text-sm">{props.description}</p>
        </div>
        <div className="mt-6 flex items-center justify-end gap-6">
          {props.sourceCodeHref && (
            <Link
              href={props.sourceCodeHref}
              target="_blank"
              className="flex items-center gap-1 text-xs underline md:text-sm"
            >
              <GithubIcon className="h-5 w-5" /> Source code
            </Link>
          )}
          {props.liveWebsiteHref && (
            <Link
              href={props.liveWebsiteHref}
              target="_blank"
              className="flex items-center gap-1 text-xs underline md:text-sm"
            >
              <FiExternalLink className="h-5 w-5" /> Live
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
