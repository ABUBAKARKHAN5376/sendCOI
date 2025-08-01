import CoverageCard from "@/components/CoverageCard";
import LogoSlider from "@/components/LogoSlider";
import TestimonialSlider from "@/components/TestimonialSlider";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>



      {/* HERO SECTION */}
      <section className="container mx-auto px-10 max-[475px]:px-4 flex items-center flex-col justify-center min-h-[82vh] text-center">
        <h1 className="centra text-black font-centra text-7xl font-black leading-tight max-2xl:text-[55px] max-lg:text-[46px] max-md:text-[40px]  max-sm:text-[36px]">
          <span className="text-[#00B0F0]">SEND COI</span> MAKES <br />
          PAPERWORK DISAPPEAR
        </h1>
        <p className="mt-10 text-2xl max-2xl:text-xl max-2xl:mt-7 max-md:text-lg">
          Smart tools for proof of coverage. No phone calls. No delays.
        </p>
        <div className="flex items-center gap-8 mt-10 max-sm:gap-4">
          <Link href="/" className="btn-primary" aria-label="Get insurance quote">Get Quote</Link>
          <Link href="/" className="text-lg text-[#00B0F0] font-medium hover:text-[#009ed8] transition max-2xl:text-base max-md:text-[15px]">
            Request Your COI Instantly
          </Link>
        </div>
      </section>

      {/* COVERAGE SECTION */}
      <section className="container px-10 max-[475px]:px-4 mx-auto mt-20">
        <h2 className="font-bold text-4xl text-center mb-20 max-2xl:mb-16 max-2xl:text-3xl max-lg:text-[28px]">
          Get Started by Choosing Your Coverage:
        </h2>
        <div className="flex flex-wrap justify-center gap-7">
          <CoverageCard
            icon="/images/coverage_icon_1.svg"
            title="General Liability"
            desc="Protect your business from accidents, injuries, and legal claims."
          />
          <CoverageCard
            icon="/images/coverage_icon_2.svg"
            title="Workers Compensation"
            desc="Coverage that supports your team and your peace of mind."
            link="Get a Quote"
          />
          <CoverageCard
            icon="/images/coverage_icon_3.svg"
            title="Business Owner’s Policy"
            desc="Essential protection for your business, bundled and simplified."
          />
          <CoverageCard
            icon="/images/coverage_icon_4.svg"
            title="Professional Liability"
            desc="Safeguard your services from costly mistakes and client disputes."
          />
          <CoverageCard
            icon="/images/coverage_icon_5.svg"
            title="Other Coverages"
            desc="Customize your protection with specialized, add-on policies."
          />
        </div>
      </section>

      {/* LOGO SLIDER */}
      <section className="relative w-full overflow-hidden mt-36">
        <LogoSlider />
      </section>

      {/* WHY CHOOSE SECTION */}
      <section className="container px-10 max-[475px]:px-4 mx-auto mt-60 max-2xl:mt-44 max-lg:mt-36">
        <h2 className="heading centra">WHY CHOOSE <span className="text-[#00B0F0]">SEND COI</span></h2>
        <div className="flex items-center justify-center max-lg:flex-col">
          <div
            className="bg-[url(/images/choose_img.webp)] bg-center bg-cover w-1/2 h-[580px] max-2xl:h-[500px] max-xl:h-[550px] max-lg:w-full max-lg:h-[370px] rounded-lg"
            role="img"
            aria-label="People using sendCOI platform"
          />
          <div className="w-1/2 pl-20 max-2xl:pl-14 max-xl:pl-10 max-lg:w-full max-lg:pl-0 max-lg:mt-10 max-md:mt-6">
            {[
              { delay: 0, title: "Instant & Self-Service", desc: "Access your COI digitally, 24/7. No phone calls, no policy agents" },
              { delay: 100, title: "Fully Customizable & ACORD-Compliant", desc: "Tailor each certificate with endorsements like Additional Insured" },
              { delay: 200, title: "Trusted, Precise, Transparent", desc: "Certificates include policyholder name, coverage limits and issuance" },
              { delay: 300, title: "Unlimited & Always Current", desc: "Download endless COIs for as long as your policy is active" },
            ].map((item, index) => (
              <div
                key={index}
                className={`py-8 ${index !== 3 ? "border-b border-[#00000033]" : ""} max-2xl:py-6 max-xl:py-5`}
              >
                <b className="font-medium text-3xl max-2xl:text-[27px] max-xl:text-[24px] max-md:text-[23px] max-sm:text-[21px]">
                  {item.title}
                </b>
                <p className="mt-2 text-lg max-md:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>






      {/*//////////////////// Downloads SECTION ///////////////// */}

      <section className="container flex justify-center px-10 max-[475px]:px-4 mx-auto mt-72 max-2xl:mt-48 max-xl:mt-44 max-lg:mt-36 max-lg:flex-wrap max-xs:justify-between">
        <div className="px-24  max-md:w-[47%] max-sm:p-0  max-2xl:px-16 border-r max-xl:px-12 max-lg:px-10 border-[#00000010] max-md:border-0">
          <h3 className="text-7xl max-2xl:text-5xl max-xl:text-[40px] max-lg:text-[35px] centra font-extrabold">500K+</h3>
          <p className="mt-5 text-xl max-2xl:text-lg text-nowrap max-2xl:mt-3">Downloads</p>
        </div>
        <div className="px-24  max-md:w-[47%] max-sm:p-0 max-sm:text-end  max-2xl:px-16 border-r max-xl:px-12 max-lg:px-10 border-[#00000010] text-[#00A3DE] max-md:border-0">
          <h3 className="text-7xl max-2xl:text-5xl max-xl:text-[40px] max-lg:text-[35px] centra font-extrabold">70K+</h3>
          <p className="mt-5 text-xl max-2xl:text-lg text-nowrap max-2xl:mt-3">Register Users</p>
        </div>
        <div className="px-24  max-md:w-[47%] max-sm:p-0  max-2xl:px-16 border-r max-xl:px-12 max-lg:px-10 border-[#00000010] max-lg:border-r-0 max-md:mt-14 ">
          <h3 className="text-7xl max-2xl:text-5xl max-xl:text-[40px] max-lg:text-[35px] centra font-extrabold">2K+</h3>
          <p className="mt-5 text-xl max-2xl:text-lg text-nowrap max-2xl:mt-3">5 Star Rating</p>
        </div>
        <div className="px-24  max-md:w-[47%] max-sm:p-0 max-sm:text-end  max-2xl:px-16 max-xl:px-12 max-lg:px-10 max-lg:mt-14">
          <h3 className="text-7xl max-2xl:text-5xl max-xl:text-[40px] max-lg:text-[35px] centra font-extrabold">250+</h3>
          <p className="mt-5 text-xl max-2xl:text-lg text-nowrap max-2xl:mt-3">Awards Winning</p>
        </div>
      </section>








      {/*//////////////////// TestimonialSlider SECTION ///////////////// */}

      <section className="mt-72 max-2xl:mt-48 max-xl:mt-44 max-lg:mt-36">
        <h2 className="container px-10 mx-auto heading centra">CUSTOMER SAYING</h2>
        <div className="w-full mb-96">
          <TestimonialSlider />
        </div>
      </section>







      {/*//////////////////// How It Works SECTION ///////////////// */}

      <section className="container mx-auto px-10 max-[475px]:px-4 mt-60 max-xl:mt-44 max-lg:36 max-2xl:!mt-32">
        <h2 className="heading centra">How It Works</h2>
        <div className="flex justify-center gap-7 max-lg:flex-wrap">
          <div className="w-[32%]  max-lg:w-[47%] max-sm:w-full max-sm:flex max-sm:flex-col-reverse">
            <div className="w-full bg-[#F5F5F5] flex flex-col items-center justify-center h-60 max-2xl:h-54 max-xl:h-48 border-b-2 text-center border-[#00B0F0] max-sm:mt-5">
              <h5 className="text-4xl font-black uppercase centra max-2xl:text-3xl max-xl:text-2xl">Sign Up or Login</h5>
              <p className="text-lg w-[70%] mt-6 max-2xl:mt-2 max-xl:text-base">Fast account setup. Seamless dashboard access for current policyholders.</p>
            </div>
            <div className="bg-[url(/images/work_img_1.webp)] w-full h-[500px] max-2xl:h-[440px] max-xl:h-[360px] max-sm:h-[240px] rounded-lg bg-center bg-cover flex items-end justify-end p-10 mt-5 max-sm:mt-0">
              <div className="w-28 h-28 rounded-full bg-[#00B0F0] flex items-center justify-center max-2xl:w-20 max-xl:h-15 max-xl:w-15 max-2xl:h-20 pt-4 max-2xl:pt-3">
                <p className="font-black text-white text-7xl centra max-2xl:text-5xl max-xl:text-4xl">1</p>
              </div>
            </div>
          </div>


          <div className="w-[32%]  max-lg:w-[47%] max-sm:w-full max-sm:flex max-sm:flex-col">
            <div className="bg-[url(/images/work_img_2.webp)] w-full h-[500px] max-2xl:h-[440px] max-xl:h-[360px]  max-sm:h-[240px] rounded-lg bg-center bg-cover flex items-end justify-end p-10 ">
              <div className="w-28 h-28 rounded-full bg-[#00B0F0] flex items-center justify-center max-2xl:w-20 max-xl:h-15 max-xl:w-15 max-2xl:h-20 pt-4 max-2xl:pt-3">
                <p className="font-black text-white text-7xl centra max-2xl:text-5xl max-xl:text-4xl">2</p>
              </div>
            </div>
            <div className="w-full bg-[#F5F5F5] flex flex-col items-center justify-center h-60 max-2xl:h-54 max-xl:h-48 border-b-2 text-center border-[#00B0F0] mt-5">
              <h5 className="text-4xl font-black uppercase centra max-2xl:text-3xl max-xl:text-2xl">Configure Your COI</h5>
              <p className="text-lg w-[70%] mt-6 max-2xl:mt-2 max-xl:text-base">Input Certificate Holder name, project details, endorsements and coverage requirements.</p>
            </div>
          </div>


          <div className="w-[32%]  max-lg:w-[100%]   max-lg:flex max-lg:flex-col-reverse" >
            <div className="w-full max-lg:mt-5 bg-[#F5F5F5] flex flex-col items-center justify-center h-60 max-2xl:h-54 max-xl:h-48  border-b-2 text-center border-[#00B0F0]">
              <h5 className="text-4xl font-black uppercase centra max-2xl:text-3xl max-xl:text-2xl">Generate & Share</h5>
              <p className="text-lg w-[70%] mt-6 max-2xl:mt-2 max-xl:text-base">Download your PDF or send via secure link. Share directly with stakeholders instantly.</p>
            </div>
            <div className="bg-[url(/images/work_img_3.webp)] w-full h-[500px] max-2xl:h-[440px]  max-xl:h-[360px] max-lg:h-48  max-sm:h-[240px] rounded-lg bg-center bg-cover flex items-end justify-end p-10 mt-5 max-lg:mt-0">
              <div className="w-28 h-28 rounded-full bg-[#00B0F0] flex items-center justify-center max-2xl:w-20 max-xl:h-15 max-xl:w-15 max-2xl:h-20 pt-4 max-2xl:pt-3">
                <p className="font-black text-white text-7xl centra max-2xl:text-5xl max-xl:text-4xl">3</p>
              </div>
            </div>
          </div>
        </div>
      </section>







      {/*//////////////////// Who It’s For SECTION ///////////////// */}


      <section className="container px-10 max-[475px]:px-4 mx-auto mt-60 max-lg:mt-36">
        <h2 className="heading centra">Who It’s For</h2>
        <div className="flex items-center justify-between max-lg:flex-col-reverse">
          <div className="w-[47%] max-xl:w-[55%] max-lg:w-full max-lg:mt-10 max-md:mt-6 pr-28 max-lg:pr-0 max-2xl:pr-16">
            <div className="py-8 max-2xl:py-6 border-b border-[rgba(0,0,0,0.2)]">
              <b className="text-3xl leading-tight max-2xl:text-[25px] max-xl:text-[23px] font-bold max-md:text-xl">Contractors & Vendors</b>
              <p className="text-xl max-2xl:text-lg text-[rgba(0,0,0,0.5)] font-medium mt-3 max-2xl:mt-1 max-md:text-base">requiring COIs to manage risk before projects</p>
            </div>
            <div className="py-8 max-2xl:py-6 border-b border-[rgba(0,0,0,0.2)]">
              <b className="text-3xl leading-tight max-2xl:text-[25px] max-xl:text-[23px] font-bold max-md:text-xl">Property Managers & Landlords</b>
              <p className="text-xl max-2xl:text-lg text-[rgba(0,0,0,0.5)] font-medium mt-3 max-2xl:mt-1 max-md:text-base">enforcing COI compliance before entering premises or approving vendors.</p>
            </div>
            <div className="py-8 max-2xl:py-6">
              <b className="text-3xl leading-tight max-2xl:text-[25px] max-xl:text-[23px] font-bold max-md:text-xl">Small Businesses & Sole Proprietors</b>
              <p className="text-xl max-2xl:text-lg text-[rgba(0,0,0,0.5)] font-medium mt-3 max-2xl:mt-1 max-md:text-base">bidding on jobs or managing client relationships that require</p>
            </div>
            <Link href="/" className="inline-block mt-5 btn-primary">Get a Free Quote</Link>
          </div>
          <div className="w-[53%] max-xl:w-[45%] max-lg:w-full bg-[url(/images/who_its_for_img.webp)]  max-lg:h-[370px] bg-center max-xl:bg-right bg-cover h-[600px] max-2xl:h-[500px] rounded-xl"></div>
        </div>
      </section>







      {/*//////////////////// Don’t lose SECTION ///////////////// */}

      <section className="w-full min-h-[950px] max-lg:min-h-[90vh] bg-[url(/images/clouds_img.webp)] bg-center bg-cover mt-20 max-2xl:mt-0 ">
        <div className="container mx-auto px-10 max-[475px]:px-4 min-h-[950px]  flex flex-col justify-center items-center">
          <h2 className="heading centra !mb-0 uppercase">Don’t lose <span className="text-[#00B0F0]">clients</span> or <span className="text-[#00B0F0]">delays</span> <br className=" max-sm:hidden" />
            over missing COIs</h2>
          <p className="mt-12 text-2xl max-2xl:text-[22px] max-2xl:mt-7 max-lg:text-lg text-center max-xs:bg-red-500">Get your Certificate of Insurance now with SEND COI.</p>
          <Link href="/" className="btn-primary inline-block mt-12 !bg-white !text-[#00B0F0] hover:!bg-[#00B0F0] hover:!text-white">Request Your COI Instantly</Link>
        </div>
      </section>
    </>
  );
}
