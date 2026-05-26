import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Binoculars,
  CalendarDays,
  Camera,
  Compass,
  MapPin,
  PawPrint,
  Play,
  Quote,
  ShieldCheck,
  Star,
  TreePalm,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const navItems = ["Experiences", "Destinations", "Itineraries", "About", "Reviews"];

const highlights = ["Tailor-Made Trips", "Local Safari Guides", "Luxury + Authentic"];

const experiences = [
  {
    title: "The Great Migration",
    tag: "Signature Tanzania Journey",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop",
    copy: "Follow millions of wildebeest across golden plains with private guides who know the rhythm of the wild.",
  },
  {
    title: "Luxury Honeymoon Safaris",
    tag: "Romance In The Wild",
    image:
      "https://images.unsplash.com/photo-1549366021-9f761d040a94?q=80&w=1200&auto=format&fit=crop",
    copy: "Sunset game drives, candlelit bush dinners, and boutique lodges designed for once-in-a-lifetime intimacy.",
  },
  {
    title: "Big Five Adventures",
    tag: "Wildlife First",
    image:
      "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?q=80&w=1200&auto=format&fit=crop",
    copy: "Track lion, leopard, elephant, rhino, and buffalo through Tanzania’s most iconic landscapes.",
  },
];

const safariFinderItems: Array<{
  icon: LucideIcon;
  label: string;
  value: string;
}> = [
  { icon: CalendarDays, label: "Travel Month", value: "June — October" },
  { icon: Compass, label: "Trip Style", value: "Private Luxury" },
  { icon: Camera, label: "Main Goal", value: "Wildlife Photography" },
  { icon: TreePalm, label: "Add-On", value: "Zanzibar Escape" },
];

const destinations = ["Serengeti", "Ngorongoro", "Tarangire", "Lake Manyara", "Zanzibar", "Arusha"];

const trustCards: Array<{
  icon: LucideIcon;
  title: string;
  copy: string;
}> = [
  {
    icon: ShieldCheck,
    title: "Trust Before Price",
    copy: "Show licensed guides, safety standards, reviews, and local expertise before asking users to inquire.",
  },
  {
    icon: Compass,
    title: "Story-Led Itineraries",
    copy: "Turn each package into a cinematic route with day-by-day emotion, wildlife highlights, and lodge previews.",
  },
  {
    icon: CalendarDays,
    title: "Inquiry That Converts",
    copy: "Use a guided planning form instead of a cold contact form: month, budget, travelers, dream experience.",
  },
];

export default function AlananaWildSafarisHome() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#120f0a] text-stone-50 selection:bg-amber-500/40">
      <section className="relative flex min-h-screen items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2200&auto=format&fit=crop"
            alt="Elephants walking across a dramatic African safari landscape"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#120f0a] via-[#120f0a]/65 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120f0a] via-transparent to-[#120f0a]/35" />
        </div>

        <nav className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-6 py-6 md:px-12">
          <a href="#top" className="flex items-center gap-3" aria-label="Alanana Wild Safaris home">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-300/50 bg-stone-950/30 backdrop-blur">
              <PawPrint className="h-5 w-5 text-amber-300" />
            </div>
            <div>
              <p className="font-serif text-xl tracking-wide">Alanana</p>
              <p className="text-[10px] uppercase tracking-[0.35em] text-amber-200/80">Wild Safaris</p>
            </div>
          </a>

          <div className="hidden items-center gap-8 text-sm text-stone-200/80 lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition-colors hover:text-amber-200">
                {item}
              </a>
            ))}
          </div>

          <Button className="rounded-full bg-amber-300 px-6 text-stone-950 hover:bg-amber-200">
            Plan Safari
          </Button>
        </nav>

        <motion.div
          id="top"
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10 max-w-5xl px-6 pt-28 md:px-12"
        >
          <motion.div
            variants={fadeUp}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-stone-950/30 px-4 py-2 text-sm text-amber-100 backdrop-blur"
          >
            <Binoculars className="h-4 w-4" /> Private Tanzania Safaris • Crafted By Local Experts
          </motion.div>

          <motion.h1 variants={fadeUp} className="max-w-4xl font-serif text-6xl leading-[0.9] md:text-8xl lg:text-9xl">
            Enter The Wild.
            <span className="block text-amber-200">Return Changed.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-8 max-w-2xl text-lg leading-relaxed text-stone-200/80 md:text-xl">
            Bespoke safari journeys across Tanzania — designed for travelers who want more than a tour. They want a story their soul remembers.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button className="h-14 rounded-full bg-amber-300 px-8 text-base text-stone-950 hover:bg-amber-200">
              Start Planning <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="h-14 rounded-full border-stone-100/25 bg-stone-950/25 px-8 text-base text-stone-50 backdrop-blur hover:bg-stone-100/10 hover:text-stone-50"
            >
              <Play className="mr-2 h-5 w-5" /> Watch The Journey
            </Button>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-8 right-6 z-10 hidden max-w-xl grid-cols-3 gap-3 md:right-12 md:grid">
          {highlights.map((item, index) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
              <p className="font-serif text-3xl text-amber-200">0{index + 1}</p>
              <p className="mt-2 text-sm text-stone-100/80">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="relative bg-[#120f0a] px-6 py-24 md:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#f6c453,transparent_28%),radial-gradient(circle_at_80%_30%,#6b4d2e,transparent_24%)] opacity-20" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="relative mx-auto grid max-w-7xl items-end gap-14 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div>
            <motion.p variants={fadeUp} className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-300">
              Why Alanana
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-5xl leading-tight md:text-7xl">
              Not a package. A private passage into Africa.
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="max-w-2xl text-lg leading-relaxed text-stone-300">
            The strongest safari websites do not sell destinations first. They sell anticipation, safety, intimacy, and awe. This homepage turns Alanana into a premium guide-led experience: cinematic at first glance, practical when visitors are ready to inquire.
          </motion.p>
        </motion.div>
      </section>

      <section id="experiences" className="px-6 pb-28 md:px-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <motion.p variants={fadeUp} className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-300">
                Curated Experiences
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-serif text-5xl md:text-7xl">
                Choose Your Wild
              </motion.h2>
            </div>
            <motion.div variants={fadeUp}>
              <Button
                variant="outline"
                className="h-12 rounded-full border-amber-200/30 bg-transparent px-6 text-stone-50 hover:bg-amber-200/10 hover:text-stone-50"
              >
                View All Journeys <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {experiences.map((item, index) => (
              <motion.div key={item.title} variants={fadeUp} className={`${index === 1 ? "md:mt-12" : ""} group`}>
                <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-stone-900/70 text-white shadow-2xl">
                  <div className="relative h-[480px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div className="absolute left-5 top-5 rounded-full bg-amber-200 px-4 py-2 text-xs font-medium text-stone-950">
                      {item.tag}
                    </div>
                    <div className="absolute bottom-0 p-7">
                      <h3 className="mb-3 font-serif text-4xl">{item.title}</h3>
                      <p className="leading-relaxed text-stone-200/85">{item.copy}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="itineraries" className="relative overflow-hidden bg-[#e9ddc7] px-6 py-28 text-stone-950 md:px-12">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-amber-300/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="mb-4 text-sm uppercase tracking-[0.35em] text-stone-600">
              Safari Finder
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-5xl leading-tight md:text-7xl">
              Design the journey before the visitor even clicks.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 text-lg leading-relaxed text-stone-700">
              Replace generic tour blocks with an elegant safari-planning module. It helps visitors self-identify their dream trip and gives Alanana warmer, better-qualified leads.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 grid gap-4 sm:grid-cols-2">
              {safariFinderItems.map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-3xl border border-stone-950/10 bg-white/55 p-5 shadow-sm">
                  <Icon className="mb-5 h-5 w-5 text-stone-700" />
                  <p className="text-sm text-stone-500">{label}</p>
                  <p className="mt-1 font-medium">{value}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="rotate-2 rounded-[2.5rem] bg-[#17120b] p-5 shadow-2xl">
              <div className="overflow-hidden rounded-[2rem] border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1521651201144-634f700b36ef?q=80&w=1400&auto=format&fit=crop"
                  alt="Safari jeep near elephants"
                  className="h-[560px] w-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-8 -left-4 max-w-xs rounded-3xl bg-white p-6 shadow-2xl md:-left-10">
              <div className="mb-3 flex gap-1 text-amber-500">
                {[1, 2, 3, 4, 5].map((item) => (
                  <Star key={item} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="font-serif text-2xl">“Everything felt personal, safe, and unforgettable.”</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="destinations" className="bg-[#120f0a] px-6 py-28 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-300">Destinations</p>
              <h2 className="font-serif text-5xl leading-tight md:text-7xl">A living map of Tanzania.</h2>
              <p className="mt-6 text-lg leading-relaxed text-stone-300">
                Each destination page should feel like a chapter: wildlife, best months, lodge style, ideal traveler, and suggested itinerary.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {destinations.map((place, index) => (
                <motion.div
                  key={place}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-all hover:bg-white/[0.08]"
                >
                  <div className="flex items-center justify-between">
                    <MapPin className="h-5 w-5 text-amber-300" />
                    <ArrowRight className="h-5 w-5 text-stone-500 transition-colors group-hover:text-amber-200" />
                  </div>
                  <h3 className="mt-12 font-serif text-3xl">{place}</h3>
                  <p className="mt-3 text-stone-400">Explore lodges, wildlife, routes, and best travel windows.</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="relative flex min-h-[760px] items-center overflow-hidden px-6 md:px-12">
        <img
          src="https://images.unsplash.com/photo-1552410260-0fd9b577afa6?q=80&w=2200&auto=format&fit=crop"
          alt="Lion in golden light"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-black/10" />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="relative max-w-4xl">
          <motion.div variants={fadeUp} className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-amber-200 text-stone-950">
            <Quote className="h-8 w-8" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-serif text-5xl leading-tight md:text-8xl">
            The website should feel like the silence before a lion appears.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-8 max-w-2xl text-xl leading-relaxed text-stone-200/80">
            Spacious. Tense. Beautiful. Premium. That is the emotional difference between a safari company people browse and a safari company people trust with their dream trip.
          </motion.p>
        </motion.div>
      </section>

      <section className="bg-[#e9ddc7] px-6 py-28 text-stone-950 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {trustCards.map(({ icon: Icon, title, copy }) => (
            <Card key={title} className="rounded-[2rem] border-stone-950/10 bg-white/55 shadow-sm">
              <CardContent className="p-8">
                <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-full bg-stone-950 text-amber-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-4 font-serif text-3xl">{title}</h3>
                <p className="leading-relaxed text-stone-700">{copy}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-[#120f0a] px-6 py-28 text-center md:px-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-amber-300">Final CTA</p>
          <h2 className="font-serif text-5xl leading-tight md:text-8xl">Your private safari begins with one conversation.</h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-stone-300">
            A high-converting safari homepage should end with calm confidence — no pressure, just the invitation to build something unforgettable.
          </p>
          <div className="mt-10 flex justify-center">
            <Button className="h-14 rounded-full bg-amber-300 px-9 text-base text-stone-950 hover:bg-amber-200">
              Plan My Safari <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
