import { Column } from "@/components/layout/Column";
import { Row } from "@/components/layout/Row";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
  SheetOverlay,
} from "@/components/ui/sheet";
import { useHash } from "@/hooks/useHash";
import { HEADER_TABS, SOCIAL_ICONS } from "@/lib/consts";
import { MenuIcon } from "lucide-react";

export const MobileHeader = () => {
  const hash = useHash();

  return (
    <Sheet>
      <SheetTrigger className="fixed  w-full z-30 justify-end flex py-3 px-4 transparent bg-gray-900/10 backdrop-blur">
        <MenuIcon className="size-10" />
      </SheetTrigger>
      <SheetOverlay className="bg-black/20 backdrop-blur-sm" />
      <SheetContent className="bg-gray-900/95 backdrop-blur-md text-white antialiased font-sans border-gray-700">
        <SheetHeader>
          <SheetDescription>
            <Column className="w-full justify-between h-[95vh]">
              <Column className="gap-5 p-2">
                {HEADER_TABS.map((tab) => (
                  <a
                    key={tab.title}
                    href={tab.link}
                    className={`text-white text-lg border-b py-2 transition duration-300 text-left ${
                      hash === tab.link
                        ? "border-white/70 font-bold"
                        : "hover:border-white/70 hover:font-bold border-white/15 font-semibold"
                    }`}
                  >
                    {tab.title}
                  </a>
                ))}
              </Column>

              <Row className="justify-center gap-8">
                {SOCIAL_ICONS.map((item) => (
                  <a
                    href={item.link}
                    {...(item.link !== "mailto:ikorney@uwaterloo.ca"
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    key={item.link}
                    className="text-white hover:text-gray-300"
                  >
                    <item.icon className="size-8 text-white/70 hover:text-emerald-300 transition duration-300" />
                  </a>
                ))}
              </Row>
            </Column>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
