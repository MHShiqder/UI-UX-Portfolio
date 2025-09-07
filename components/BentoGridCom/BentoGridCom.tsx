"use client";
import React, {
  ComponentPropsWithoutRef,
  ReactNode,
  FC,
  SVGProps,
} from "react";
import { ShinyButton } from "../magicui/shiny-button";
import SectionTitle from "../shared/CustomStyle/SectionTitle/SectionTitle";
import Image from "next/image";

const cn = (...inputs: (string | boolean | undefined | null)[]) => {
  return inputs.filter(Boolean).join(" ");
};

const ArrowRightIcon: FC<SVGProps<SVGSVGElement>> = (_props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    {..._props}
  >
    <path
      fillRule="evenodd"
      d="M8.22 2.72a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 8.5H3.75a.75.75 0 0 1 0-1.5h8.19L8.22 3.78a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

const BentoGrid: FC<BentoGridProps> = ({ children, className, ..._props }) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className
      )}
      {..._props}
    >
      {children}
    </div>
  );
};

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  background: ReactNode;
  Icon: React.ElementType;
  description: string;
  href: string;
  cta: string;
}

const BentoCard: FC<BentoCardProps> = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ..._props
}) => (
  <div
    key={name}
    className={cn(
      "group relative flex flex-col justify-between overflow-hidden rounded-xl",

      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",

      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
    {..._props}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75 dark:text-neutral-300" />

      <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
        {name}
      </h3>

      <p className="max-w-lg text-neutral-500 dark:text-neutral-400">
        {description}
      </p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
      )}
    >
      <a
        href={href}
        className="pointer-events-auto text-sm font-semibold text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500 flex items-center"
      >
        {cta}
        <ArrowRightIcon className="ml-2 h-4 w-4" />
      </a>
    </div>

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

// --- Example Usage ---

const FileTextIcon: FC<SVGProps<SVGSVGElement>> = () => (
  <Image  width={48} height={48} src="https://cdn-icons-png.flaticon.com/128/16751/16751824.png" alt="" />
  
);
const IntegrationIcon: FC<SVGProps<SVGSVGElement>> = () => (
  
  <Image  width={48} height={48} src="https://cdn-icons-png.flaticon.com/128/8898/8898827.png" alt="" />
  
);
const PersonalizeIcon: FC<SVGProps<SVGSVGElement>> = () => (
<Image  width={48} height={48} src="https://cdn-icons-png.flaticon.com/128/10810/10810064.png" alt="" />
  
  
);
const ShareIcon: FC<SVGProps<SVGSVGElement>> = () => (
<Image  width={48} height={48} src="https://cdn-icons-png.flaticon.com/128/3488/3488370.png" alt="" />
  
);
const GlobeIcon: FC<SVGProps<SVGSVGElement>> = () => (
<Image  width={48} height={48} src="https://cdn-icons-png.flaticon.com/128/4010/4010941.png" alt="" />

);

type Feature = {
  Icon: FC<SVGProps<SVGSVGElement>>;
  name: string;
  description: string;
  href: string;
  cta: string;
  className: string;
  background: ReactNode;
};

const features: Feature[] = [
  {
    Icon: FileTextIcon,
    name: "Unlimited Revisions",
    description: "We're committed to your satisfaction with unlimited revisions at every step. Our mission is to make your vision come to life exactly as you imagine",
    href: "#",
    cta: "Learn More",
    className: "lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-amber-50 dark:bg-amber-950/20" />
    ),
  },
  {
    Icon: IntegrationIcon,
    name: "Lifetime Support",
    description: "With our lifetime support, you're never alone. We'll be there for you at every stage with necessary guidance and assistance whenever you need it.",
    href: "#",
    cta: "View Integrations",
    className: "lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-purple-50 dark:bg-purple-950/20" />
    ),
  },
  {
    Icon: PersonalizeIcon,
    name: "Personalised Plans",
    description: "Get top-quality service without breaking the bank. Our rates are designed to fit your budget so that you can get the best value for your investment.",
    href: "#",
    cta: "View Integrations",
    className: "lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-purple-50 dark:bg-purple-950/20" />
    ),
  },
  {
    Icon: ShareIcon,
    name: "Custom Design Solutions",
    description: "Our easy payment options are completely flexible. So, you can invest in your success while staying within your budget.",
    href: "#",
    cta: "Try It Now",
    className: "lg:col-span-2",
    background: (
      <div className="absolute inset-0 bg-blue-50 dark:bg-blue-950/20" />
    ),
  },
  {
    Icon: GlobeIcon,
    name: "24/7 Customer Support",
    description:
      "Benefit from the expertise of our carefully chosen resources that are designed to make your journey smooth and effortless with outstanding results.",
    href: "#",
    cta: "Explore Regions",
    className: "lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-green-50 dark:bg-green-950/20" />
    ),
  },
];

export default function BentoGridCom() {
  return (
    <div className="w-full p-4 sm:p-6 lg:p-8 bg-black">
      <div className="text-center relative z-10 mb-10">
          <ShinyButton>Why Choose Me</ShinyButton>
          <SectionTitle
            heading="Creative UI/UX & Web Solutions"
            subHeading="I help brands stand out by combining innovative design with the latest technology to create engaging, user-focused digital experiences."
          />
        </div>
      <div className="max-w-7xl mx-auto">
        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}
