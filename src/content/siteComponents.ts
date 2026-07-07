export const blockComponents = {
  siteShell:
    "min-h-svh bg-[radial-gradient(circle,_rgba(255,255,255,1)_0%,_rgba(239,233,227,1)_100%)] px-4 py-4 transition-colors duration-300 md:px-6 md:py-6 dark:bg-[radial-gradient(circle,_rgba(24,30,42,1)_0%,_rgba(0,0,0,1)_100%)]",
  container: "mx-auto w-full max-w-[1180px]",
  pageFrame: "grid grid-cols-1 gap-5",
  page: "min-h-[calc(100svh-120px)] px-[18px] py-6 md:px-[38px] md:py-[38px]",
  pageCopy: "max-w-[700px]",
  eyebrow:
    "mb-[14px] text-[0.78rem] tracking-[0.18em] uppercase text-[#171412] dark:text-[#f5f2ee]",
  lede: "max-w-[62ch] text-[1.15rem] leading-[1.7] text-[#4f4a46] dark:text-[#c8bfb5]",
  h1: "mb-4 font-[Iowan_Old_Style,Palatino_Linotype,Book_Antiqua,serif] text-[clamp(2.6rem,5vw,5rem)] leading-[1.05] tracking-[-0.04em] text-[#171412] dark:text-[#f5f2ee]",
  h2: "mb-2.5 font-[Iowan_Old_Style,Palatino_Linotype,Book_Antiqua,serif] text-[clamp(1.25rem,2vw,1.7rem)] leading-[1.05] tracking-[-0.04em] text-[#171412] dark:text-[#f5f2ee]",
  h4: "font-[Iowan_Old_Style,Palatino_Linotype,Book_Antiqua,serif] text-xl leading-snug text-[#171412] dark:text-[#f5f2ee]",
  topbar:
    "mx-auto mb-5 flex w-full max-w-[1180px] flex-col gap-3 rounded-[22px] border border-[rgba(28,23,18,0.12)] bg-[#d2d3db] px-4 py-4 shadow-[rgba(15,12,8,0.1)_0_18px_40px_-20px,rgba(15,12,8,0.08)_0_8px_18px_-10px] backdrop-blur-[18px] transition-all duration-300 md:px-[22px] md:py-[18px] dark:border-[rgba(245,242,238,0.12)] dark:bg-[rgba(30,26,23,0.8)] dark:shadow-[rgba(0,0,0,0.35)_0_18px_40px_-20px,rgba(0,0,0,0.2)_0_8px_18px_-10px]",
  brand:
    "font-[Iowan_Old_Style,Palatino_Linotype,Book_Antiqua,serif] text-base uppercase tracking-[0.12em] text-[#171412] no-underline dark:text-[#f5f2ee]",
  navList: "m-0 flex w-full list-none flex-nowrap items-center justify-center gap-1 p-0",
  navItem: "flex-none",
  navLink:
    "inline-flex w-full items-center justify-center rounded-full border border-transparent px-4 py-3 text-[#4f4a46] transition-all duration-200 hover:-translate-y-px hover:border-[rgba(28,23,18,0.12)] hover:bg-[rgba(255,255,255,0.7)] hover:text-[#171412] md:w-auto dark:text-[#c8bfb5] dark:hover:border-[rgba(245,242,238,0.12)] dark:hover:bg-[#2a1827] dark:hover:text-[#f5f2ee]",
  navLinkActive:
    "border-[rgba(28,23,18,0.12)] bg-[rgba(255,255,255,0.7)] text-[#171412] dark:border-[rgba(245,242,238,0.12)] dark:bg-[#2a1827] dark:text-[#f5f2ee]",
  themeToggle:
    "inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[rgba(28,23,18,0.12)] bg-[rgba(255,255,255,0.6)] p-0 transition-all duration-300 hover:-translate-y-px hover:bg-[rgba(255,255,255,0.85)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#b34f28] focus-visible:outline-offset-[3px] dark:border-[rgba(245,242,238,0.12)] dark:bg-[rgba(60,54,48,0.6)] dark:hover:bg-[rgba(60,54,48,0.85)]",
  themeIcon: "text-xl leading-none",
  panels:
    "rounded-[28px] border border-[rgba(28,23,18,0.12)] bg-[#d2d3db] shadow-[rgba(15,12,8,0.1)_0_18px_40px_-20px,rgba(15,12,8,0.08)_0_8px_18px_-10px] transition-all duration-300 dark:border-[rgba(245,242,238,0.12)] dark:bg-[rgba(30,26,23,0.65)] dark:shadow-[rgba(0,0,0,0.35)_0_18px_40px_-20px,rgba(0,0,0,0.2)_0_8px_18px_-10px]",
  heroLayout: "mb-6 grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]",
  aboutLayout: "grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]",
  heroCard: "grid gap-[18px] p-[22px]",
  heroImage:
    "block w-full rounded-[22px] bg-[linear-gradient(135deg,#1b1b24,#7f6c56)] object-cover",
  cardGrid: "grid gap-[18px]",
  activismGrid: "grid gap-[18px] lg:grid-cols-3",
  paddedPanel: "p-6",
  featureList: "grid gap-3 pl-[18px]",
  connectSection:
    "mb-6 grid grid-cols-1 items-center gap-5 rounded-[28px] p-6 text-center md:justify-items-center lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-center lg:gap-8 lg:text-left",
  connectCopy: "max-w-[52ch]",
  connectLinks: "flex flex-col items-center justify-center gap-[14px] lg:justify-self-center",
  buttons:
    "inline-flex w-full max-w-[280px] touch-manipulation select-none items-center justify-center gap-3 rounded-full border border-[rgba(28,23,18,0.12)] bg-[#efe9e3] px-6 py-4 text-[1.02rem] font-semibold text-[#171412] no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[rgba(15,12,8,0.1)_0_18px_40px_-20px,rgba(15,12,8,0.08)_0_8px_18px_-10px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#b34f28] focus-visible:outline-offset-[3px] sm:max-w-[320px] dark:border-[rgba(245,242,238,0.12)] dark:bg-[#2a1827] dark:text-[#f5f2ee]",
  primaryLink:
    "inline-flex min-h-11 items-center justify-center rounded-full border border-transparent bg-[#171412] px-[18px] text-[#fff] no-underline transition-transform duration-200 hover:-translate-y-px dark:bg-[#f5f2ee] dark:text-[#1a1612]",
  secondaryLink:
    "inline-flex min-h-11 items-center justify-center rounded-full border border-[rgba(28,23,18,0.12)] bg-[rgba(255,255,255,0.65)] px-[18px] text-[#171412] no-underline transition-transform duration-200 hover:-translate-y-px dark:border-[rgba(245,242,238,0.12)] dark:bg-[rgba(60,54,48,0.65)] dark:text-[#f5f2ee]",
  photoGrid: "mt-6 grid grid-cols-1 gap-[18px]",
  photoCard:
    "mb-4 overflow-hidden rounded-[28px] shadow-[rgba(15,12,8,0.1)_0_18px_40px_-20px,rgba(15,12,8,0.08)_0_8px_18px_-10px] dark:border-[rgba(245,242,238,0.12)] dark:shadow-[rgba(0,0,0,0.35)_0_18px_40px_-20px,rgba(0,0,0,0.2)_0_8px_18px_-10px]",
  cardKicker:
    "mb-4 text-[0.8rem] tracking-[0.16em] text-[#171412] dark:text-[#f5f2ee]",
  blogList: "mt-6 grid gap-4",
  blogPost:
    "cursor-pointer p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[rgba(0,0,0,0.15)_0_20px_40px_-15px] dark:hover:shadow-[rgba(0,0,0,0.4)_0_20px_40px_-15px]",
  postMeta: "mb-3 flex items-center justify-between text-[0.9rem]",
  postDate: "font-medium text-[#b34f28] dark:text-[#e8a078]",
  postNumber: "text-[#4f4a46] opacity-60 dark:text-[#c8bfb5]",
  postExcerpt: "my-[14px] leading-[1.7] text-[#4f4a46] dark:text-[#c8bfb5]",
  postFooter: "mt-[18px] flex items-center justify-between border-t border-[rgba(28,23,18,0.12)] pt-4 dark:border-[rgba(245,242,238,0.12)]",
  readLink:
    "font-medium text-[#b34f28] no-underline transition-all duration-200 hover:translate-x-1 hover:text-[#b34f28] dark:text-[#e8a078] dark:hover:text-[#e8a078]",
  readTime: "text-[0.85rem] text-[#4f4a46] opacity-70 dark:text-[#c8bfb5]",
  copyBody: "text-[#4f4a46] dark:text-[#c8bfb5]",
  proseParagraph: "leading-[1.7] text-[#4f4a46] dark:text-[#c8bfb5]",
  icon: "h-[22px] w-[22px] shrink-0 fill-current",
};