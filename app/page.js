import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import InstagramLayout from "./pages/_components/socialmedia/Instagram";
import FacebookLayout from "./pages/_components/socialmedia/Facebook";
import XTwitterLayout from "./pages/_components/socialmedia/XTwitter";
import YouTubeLayout from "./pages/_components/socialmedia/YouTube";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#16202a]">
      <div className="z-10 font-mono text-sm flex-row pb-8">
        <div className="relative pt-4">
          <Image
            src="/banner.jpeg"
            alt="Gamesphere"
            height={100}
            width={1000}
          />
          <div className="absolute top-4 right-0 m-4">
            <div className="grid grid-cols-4 gap-4 bg-opacity-5 bg-white p-4 rounded-lg shadow-lg">
              <InstagramLayout />
              <FacebookLayout />
              <XTwitterLayout />
              <YouTubeLayout />
            </div>
          </div>
        </div>

        <Menubar className="items-center justify-center m-auto mt-6">
          <MenubarMenu>
            <MenubarTrigger>
              <AccountLogo />
              <span className="p-2">Account</span>
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <LoginLogo />
                <span className="p-2">
                  <Link href="/pages/login">Login</Link>
                </span>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <SignupLogo />
                <span className="p-2">
                  <Link href="/pages/signup">Signup</Link>
                </span>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <CommunityLogo />
              <span className="p-2">Community</span>
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <ChatLogo />
                <span className="p-2">
                  <Link href="/pages/chat">Chat</Link>
                </span>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <CommentLogo />
                <span className="p-2">
                  <Link href="/pages/comment">Comment</Link>
                </span>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <FeedbackLogo />
                <span className="p-2">
                  <Link href="/pages/feedback">Feedback</Link>
                </span>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <PaymentLogo />
              <span className="p-2">Payment</span>
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <BitcoinLogo />
                <span className="p-2">
                  <Link href="/pages/payments/Bitcoin">Bitcoin</Link>
                </span>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <DogecoinLogo />
                <span className="p-2">
                  <Link href="/pages/payments/Dogecoin">Dogecoin</Link>
                </span>
              </MenubarItem>
              <MenubarSeparator />
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <CreditLogo />
              <span className="p-2">Credit</span>
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <MycreditLogo />
                <span className="p-2">
                  <Link href="/pages/credits">My credit</Link>
                </span>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>

      <div className="z-10 max-w-6xl items-center justify-center font-mono text-sm lg:flex">
        <Carousel
          className="flex items-center"
          opts={{
            loop: true,
          }}
        >
          <CarouselPrevious class="flex-shrink-0" size="icon" />
          <CarouselContent class="flex-1">
            <CarouselItem key={1}>
              <Card>
                <CardContent className="flex items-center justify-center">
                  <Image
                    src="/EldenRing.jpg"
                    alt="Forza"
                    height="625"
                    width="1000"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem key={2}>
              <Card>
                <CardContent className="flex items-center justify-center">
                  <Image
                    src="/Forza.png"
                    alt="Forza"
                    height="625"
                    width="1000"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem key={3}>
              <Card>
                <CardContent className="flex items-center justify-center">
                  <Image
                    src="/FIFA.png"
                    alt="Forza"
                    height="625"
                    width="1000"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem key={4}>
              <Card>
                <CardContent className="flex items-center justify-center">
                  <Image
                    src="/callofduty.png"
                    alt="callofduty"
                    height="625"
                    width="1000"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem key={5}>
              <Card>
                <CardContent className="flex items-center justify-center">
                  <Image
                    src="/Godofwar.jpg"
                    alt="Godofwar"
                    height="625"
                    width="1000"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselNext class="flex-shrink-0" />
        </Carousel>
      </div>
    </main>
  );
}
const AccountLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeDasharray={28}
        strokeDashoffset={28}
        strokeLinecap="round"
        strokeWidth={2}
      >
        <path d="M4 21V20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20V21">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.4s"
            values="28;0"
          ></animate>
        </path>
        <path d="M12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11Z">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.5s"
            dur="0.4s"
            values="28;0"
          ></animate>
        </path>
      </g>
    </svg>
  );
};

const LoginLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
      >
        <path
          strokeDasharray={32}
          strokeDashoffset={32}
          d="M13 4L20 4C20.5523 4 21 4.44772 21 5V19C21 19.5523 20.5523 20 20 20H13"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.4s"
            values="32;0"
          ></animate>
        </path>
        <path
          strokeDasharray={12}
          strokeDashoffset={12}
          d="M3 12h11.5"
          opacity={0}
        >
          <set attributeName="opacity" begin="0.5s" to={1}></set>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.5s"
            dur="0.2s"
            values="12;0"
          ></animate>
        </path>
        <path
          strokeDasharray={6}
          strokeDashoffset={6}
          d="M14.5 12l-3.5 -3.5M14.5 12l-3.5 3.5"
          opacity={0}
        >
          <set attributeName="opacity" begin="0.7s" to={1}></set>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.7s"
            dur="0.2s"
            values="6;0"
          ></animate>
        </path>
      </g>
    </svg>
  );
};

const SignupLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
    >
      <path
        fill="currentColor"
        d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16a16 16 0 0 1-16 16m0-30C8.268 2 2 8.268 2 16s6.268 14 14 14s14-6.268 14-14A14 14 0 0 0 16 2"
      />
      <path
        fill="currentColor"
        d="M23 15h-6V9h-2v6H9v2h6v6h2v-6h6z"
        class="ouiIcon__fillSecondary"
      />
    </svg>
  );
};

const CommunityLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 18v-1a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v1M1 18v-1a3 3 0 0 1 3-3v0m19 4v-1a3 3 0 0 0-3-3v0m-8-2a3 3 0 1 0 0-6a3 3 0 0 0 0 6m-8 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4m16 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"
      ></path>
    </svg>
  );
};

const PaymentLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 14 14"
    >
      <path
        fill="currentColor"
        d="M1.5 0A1.5 1.5 0 0 0 0 1.5v6A1.5 1.5 0 0 0 1.5 9h11A1.5 1.5 0 0 0 14 7.5v-6A1.5 1.5 0 0 0 12.5 0zm6.125 1.454a.625.625 0 1 0-1.25 0v.4a1.532 1.532 0 0 0-.15 3.018l1.197.261a.39.39 0 0 1-.084.773h-.676a.39.39 0 0 1-.369-.26a.625.625 0 0 0-1.178.416c.194.55.673.965 1.26 1.069v.415a.625.625 0 1 0 1.25 0V7.13a1.641 1.641 0 0 0 .064-3.219L6.492 3.65a.281.281 0 0 1 .06-.556h.786a.388.388 0 0 1 .369.26a.625.625 0 1 0 1.178-.416a1.64 1.64 0 0 0-1.26-1.069zM2.75 3.75a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m8.5 0a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5M4.5 9.875c.345 0 .625.28.625.625v2a.625.625 0 1 1-1.25 0v-2c0-.345.28-.625.625-.625m5.625.625a.625.625 0 1 0-1.25 0v2a.625.625 0 1 0 1.25 0zm-2.5.75a.625.625 0 1 0-1.25 0v2a.625.625 0 1 0 1.25 0z"
      />
    </svg>
  );
};

const CreditLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
    >
      <path
        fill="currentColor"
        d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 16v24H32V64Zm0 128H32v-88h192zm-16-24a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8m-64 0a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8"
      />
    </svg>
  );
};

const ChatLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M3 12c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v5c0 1.1-.9 2-2 2H9v3l-3-3zm18 6c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2h-6v1c0 2.2-1.8 4-4 4v2c0 1.1.9 2 2 2h2v3l3-3z"
      />
    </svg>
  );
};

const CommentLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M6.5 13.5h11v-1h-11zm0-3h11v-1h-11zm0-3h11v-1h-11zM21 20.077L17.923 17H4.616q-.691 0-1.154-.462T3 15.385V4.615q0-.69.463-1.153T4.615 3h14.77q.69 0 1.152.462T21 4.615zM4.616 16H18.35L20 17.644V4.616q0-.231-.192-.424T19.385 4H4.615q-.23 0-.423.192T4 4.615v10.77q0 .23.192.423t.423.192M4 16V4z"
      />
    </svg>
  );
};

const FeedbackLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 15q.425 0 .713-.288T13 14t-.288-.712T12 13t-.712.288T11 14t.288.713T12 15m-1-4h2V5h-2zM2 22V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18H6zm3.15-6H20V4H4v13.125zM4 16V4z"
      />
    </svg>
  );
};

const BitcoinLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M14.24 10.56c-.31 1.24-2.24.61-2.84.44l.55-2.18c.62.18 2.61.44 2.29 1.74m-3.11 1.56l-.6 2.41c.74.19 3.03.92 3.37-.44c.36-1.42-2.03-1.79-2.77-1.97m10.57 2.3c-1.34 5.36-6.76 8.62-12.12 7.28S.963 14.94 2.3 9.58A9.996 9.996 0 0 1 14.42 2.3c5.35 1.34 8.61 6.76 7.28 12.12m-7.49-6.37l.45-1.8l-1.1-.25l-.44 1.73c-.29-.07-.58-.14-.88-.2l.44-1.77l-1.09-.26l-.45 1.79c-.24-.06-.48-.11-.7-.17l-1.51-.38l-.3 1.17s.82.19.8.2c.45.11.53.39.51.64l-1.23 4.93c-.05.14-.21.32-.5.27c.01.01-.8-.2-.8-.2L6.87 15l1.42.36c.27.07.53.14.79.2l-.46 1.82l1.1.28l.45-1.81c.3.08.59.15.87.23l-.45 1.79l1.1.28l.46-1.82c1.85.35 3.27.21 3.85-1.48c.5-1.35 0-2.15-1-2.66c.72-.19 1.26-.64 1.41-1.62c.2-1.33-.82-2.04-2.2-2.52"
      />
    </svg>
  );
};

const DogecoinLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12.288 7.908h-1.715v3.38h2.697v1.415h-2.697v3.38h1.799c.462 0 3.794.052 3.789-3.933s-3.232-4.242-3.873-4.242M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12s12-5.373 12-12S18.627 0 12 0m.472 18.481H8.126v-5.778H6.594v-1.415h1.532V5.511h3.73c.882 0 6.727-.183 6.727 6.594c-.001 6.888-6.111 6.376-6.111 6.376"
      />
    </svg>
  );
};

const MycreditLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 14 14"
    >
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M9.75 3h-5.5a.5.5 0 0 0-.5.5v9.375a.5.5 0 0 0 .5.5h5.5a.5.5 0 0 0 .5-.5V3.5a.5.5 0 0 0-.5-.5" />
        <path d="M7 9.438a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5M1.906 4.583h-.834a.491.491 0 0 1-.35-.146a.503.503 0 0 1-.144-.354v-3A.5.5 0 0 1 .723.73a.491.491 0 0 1 .35-.147h11.855a.496.496 0 0 1 .494.5v3c0 .133-.052.26-.145.354a.491.491 0 0 1-.35.146h-.833M7 5.21a.125.125 0 1 1 0-.25m0 .25a.125.125 0 1 0 0-.25m0 6.51a.125.125 0 0 1 0-.25m0 .25a.125.125 0 0 0 0-.25" />
      </g>
    </svg>
  );
};
