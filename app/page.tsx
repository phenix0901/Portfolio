'use client'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, ExternalLink, Code, Database, Cloud, Smartphone, Globe, Award, Calendar, MapPin } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"

export default function Portfolio() {
  // Add these states at the top of your component
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  // Form handler
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setSuccess(null)
    setError(null)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        setSuccess("Message sent successfully!")
        setForm({ name: "", email: "", subject: "", message: "" })
      } else {
        setError(data.error || "Something went wrong.")
      }
    } catch (err) {
      setError("Failed to send message.")
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Image
                src="/phenix.jpg"
                alt="Phenix Technology Logo"
                width={32}
                height={32}
                className="rounded"
                priority
              />
              <span className="font-bold">Phenix Technology</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#about" className="transition-colors hover:text-foreground/80">
              About
            </Link>
            <Link href="#experience" className="transition-colors hover:text-foreground/80">
              Experience
            </Link>
            <Link href="#projects" className="transition-colors hover:text-foreground/80">
              Projects
            </Link>
            <Link href="#contact" className="transition-colors hover:text-foreground/80">
              Contact
            </Link>
          </nav>
          <div className="ml-auto flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com" target="_blank">
                {/* <Github className="h-4 w-4" /> */}
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank">
                {/* <Linkedin className="h-4 w-4" /> */}
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-24 md:py-32">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I’m the founder of Phenix Technology
              </h1>
              <h2 className="text-xl text-muted-foreground sm:text-2xl">
                Senior Software Engineer
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Hi, I’m the founder of Phenix Technology — a senior software development company with deep expertise in Fullstack development and Blockchain solutions.

              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Link>
              </Button>
              {/* <Button variant="outline" size="lg" asChild>
                <Link href="/resume.pdf" target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Resume
                </Link>
              </Button> */}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/phenix.jpg?height=400&width=400"
              alt="Phenix Technology"
              width={400}
              height={400}
              className="aspect-square overflow-hidden rounded-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container py-24 bg-muted/50">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Over the years, I’ve worked with startups and businesses to build everything from scalable web platforms to secure blockchain applications. At Phenix, we don’t just deliver code — we deliver clean architecture, long-term maintainability, and real-world results.
            Whether it's developing smart contracts, crafting intuitive user interfaces, or designing backend systems that scale, we bring full-cycle experience and a problem-solving mindset to every project.
          </p>
        </div>

        {/* Skills */}
        <div className="mt-16">
          <h3 className="text-center text-2xl font-bold mb-8">Technical Skills</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="text-center">
                <Code className="mx-auto h-8 w-8 mb-2" />
                <CardTitle>Frontend</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Vue.js</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Database className="mx-auto h-8 w-8 mb-2" />
                <CardTitle>Backend</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">MySQL</Badge>
                  <Badge variant="secondary">GraphQL</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Database className="mx-auto h-8 w-8 mb-2" />
                <CardTitle>Blockchain</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Smart Contracts</Badge>
                  <Badge variant="secondary">dApps</Badge>
                  <Badge variant="secondary">Token Launch</Badge>
                  <Badge variant="secondary">DeFi</Badge>
                  <Badge variant="secondary">Trading Bots</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Cloud className="mx-auto h-8 w-8 mb-2" />
                <CardTitle>Cloud & DevOps</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Azure</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">Kubernetes</Badge>
                  <Badge variant="secondary">CI/CD</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">
            Experience
          </h2>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Senior Software Engineer</CardTitle>
                    <CardDescription className="text-lg">TERN System</CardDescription>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      2024.10 - 2025.5
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin className="h-4 w-4" />
                      United States
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Developed frontend features and integrated with backend systems at Tern, focusing on project structure and
                    code optimization.</li>
                  <li>Contributed in designing backend system and implemented authentication system, user management system and payment integration</li>
                  <li>Conducted testing to ensure smooth workflow and implemented CI/CD processes for efficient development</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Fullstack developer</CardTitle>
                    <CardDescription className="text-lg">TwiPort</CardDescription>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      2022.11 - 2024.6
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin className="h-4 w-4" />
                      Remote - Malaysia
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Developed and maintained high-quality software solutions for various platforms, ensuring scalability and performance.</li>
                  <li>Collaborated with cross-functional teams to gather and analyze requirements, translating them into technical specifications and design documents.</li>
                  <li>Implemented and optimized algorithms and data structures to enhance application efficiency and user experience</li>
                  <li>Led code reviews and provided mentorship to junior developers, promoting best practices and coding standards.</li>
                  <li>Conducted thorough testing and debugging to identify and resolve software defects and performance issues.</li>
                  <li>Managed the full software development lifecycle, including planning, design, development, testing, deployment, and maintenance.</li>
                  <li>Utilized modern development tools and methodologies, including Agile and DevOps practices, to streamline workflows and improve project delivery.</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Smart Contract Developer</CardTitle>
                    <CardDescription className="text-lg">Ink Finance</CardDescription>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      2022.2 - 2022.10
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin className="h-4 w-4" />
                      Remote - United Kingdom
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li> Designed and built smart contracts and decentralized applications (dApps) using Solidity and Ethereum, ensuring secure and
                    efficient transactions on the Byzantim Token blockchain.</li>
                  <li>Contributed to the design and architecture of blockchain networks, focusing on scalability, security, and performance to
                    enhance the Byzantim Token ecosystem.</li>
                  <li>Created and deployed smart contracts for various functionalities, including token transactions, governance mechanisms, and
                    automated processes.</li>
                  <li>Integrated blockchain solutions with existing systems and conducted rigorous testing to ensure functionality, performance,
                    and security, addressing any vulnerabilities or inefficiencies.</li>
                  <li>Worked closely with cross-functional teams, including front-end developers, back-end developers, and project managers, to
                    deliver cohesive and functional blockchain solutions.</li>
                  <li>Documented code, processes, and development methodologies, providing clear and comprehensive reports to stakeholders
                    and contributing to the overall project knowledge base</li>
                  <li>Kept abreast of emerging trends and advancements in blockchain technology to continuously improve development
                    practices and solutions.</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Smart Contract Developer</CardTitle>
                    <CardDescription className="text-lg">Looks Rare</CardDescription>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      2021.5 - 2022.1
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin className="h-4 w-4" />
                      Remote - United Kingdom
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Designed and developed smart contracts for NFT (Non-Fungible Token) platforms using Solidity, ensuring secure and
                    efficient transactions on the Ethereum blockchain.</li>
                  <li>Collaborated with cross-functional teams to integrate blockchain solutions with existing systems, enhancing the overall
                    functionality of NFT platforms.</li>
                  <li>Implemented and maintained decentralized applications (dApps) to facilitate seamless NFT creation, trading, and
                    management.</li>
                  <li>Conducted code reviews and audits to ensure smart contract reliability and compliance with best practices in blockchain
                    development.</li>
                  <li>Optimized smart contract code to improve performance and reduce gas costs, leading to more cost-effective NFT
                    transactions.</li>
                  <li>Developed comprehensive documentation and user guides for blockchain solutions, facilitating easier adoption and
                    understanding by stakeholders.</li>
                  <li>Stayed up-to-date with the latest advancements in blockchain technology and NFT trends to continuously innovate and
                    improve platform capabilities.</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Blockchain Developer</CardTitle>
                    <CardDescription className="text-lg">Playestate</CardDescription>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      2020.2 - 2021.4
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin className="h-4 w-4" />
                      Remote - Netherland
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Designed, developed, and implemented blockchain solutions to enhance the security, transparency, and efficiency of NFT transactions on the HorseNFT Marketplace platform.</li>
                  <li>Created, tested, and deployed smart contracts on the Ethereum blockchain for NFT minting, trading, and ownership verification, ensuring compliance with industry standards and security protocols.</li>
                  <li>Integrated blockchain technology with existing systems to enable seamless transactions, real-time updates, and secure data storage, improving the overall user experience on the marketplace.</li>
                  <li>Analyzed and optimized blockchain performance and scalability, addressing issues such as transaction speed and network congestion to maintain a high-performance marketplace environment.</li>
                  <li>Worked closely with front-end and back-end development teams to ensure the effective integration of blockchain components with the marketplace's user interface and server infrastructure.</li>
                  <li>Conducted regular security audits of smart contracts and blockchain protocols to identify vulnerabilities and implement best practices for safeguarding assets and user data.</li>
                  <li>Stayed abreast of emerging trends and advancements in blockchain technology and the NFT space, recommending and implementing innovative solutions to maintain a competitive edge in the marketplace.</li>
                  <li>Developed comprehensive technical documentation for blockchain processes, smart contract functionalities, and integration procedures to support internal teams and facilitate knowledge sharing.</li>
                  <li>Provided technical support and troubleshooting assistance for users encountering blockchain-related issues, ensuring a smooth and satisfactory resolution of queries.</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Backend developer</CardTitle>
                    <CardDescription className="text-lg">ImageFree</CardDescription>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      2019.2 - 2019.10
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin className="h-4 w-4" />
                      United States
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Designed, implemented, and tested scalable software solutions for ImageFree's platform, ensuring high performance and reliability</li>
                  <li>Worked closely with product managers, designers, and other engineers to define project requirements and deliver effective solutions that met business objectives.</li>
                  <li>Optimized code and architecture to enhance application performance, resulting in a 25% increase in processing speed and a reduction in system downtime.</li>
                  <li>Adhered to industry best practices and coding standards, including version control, code reviews, and unit testing, to maintain high-quality software deliverables</li>
                  <li>Identified and resolved software defects and performance issues, providing timely fixes and updates to improve user experience</li>
                  <li>Created and maintained comprehensive technical documentation to support ongoing development and facilitate knowledge transfer within the team.</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Frontend Developer</CardTitle>
                    <CardDescription className="text-lg">United Portraits</CardDescription>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      2018.1 - 2018.11
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin className="h-4 w-4" />
                      United States
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Designed, developed, and maintained robust software solutions for portrait management systems, enhancing the efficiency and quality of the company's offerings.</li>
                  <li>Collaborated with cross-functional teams to gather requirements, define project scopes, and deliver technical solutions aligned with business objectives.</li>
                  <li>Implemented and optimized algorithms to improve image processing and management, significantly increasing system performance and reliability.</li>
                  <li>Conducted code reviews and provided mentorship to junior developers, fostering a collaborative and knowledge-sharing environment</li>
                  <li>Troubleshot and resolved complex software issues, ensuring minimal disruption to business operations and customer satisfaction.</li>
                  <li>Contributed to the development of API integrations with third-party services, expanding the functionality and flexibility of the company's software solutions.</li>
                  <li>Participated in Agile development practices, including sprint planning, stand-ups, and retrospectives, to ensure timely delivery of high-quality software.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container py-24 bg-muted/50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">
            Featured Projects
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="w-full">
                  <Image
                    src="/tern.png"
                    alt="Tern System"
                    width={400}
                    height={200}
                    className="rounded-lg object-cover w-full"
                  />
                </div>
                <CardTitle>TERN System</CardTitle>
                <CardDescription>
                  Advanced Semiconductors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                  <Badge variant="outline">Stripe</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <Link href="https://tern.ac" target="_blank">
                      <Globe className="mr-2 h-4 w-4" />
                      Live Website
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/twiport.png"
                  alt="Twiport"
                  width={400}
                  height={200}
                  className="rounded-lg object-cover w-full"
                />
                <CardTitle>Twiport</CardTitle>
                <CardDescription>
                  Twiport Company Website.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">React.js</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">MySQL</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <Link href="https://twiport.com/homepage" target="_blank">
                      <Globe className="mr-2 h-4 w-4" />
                      Live Website
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/imagefree.png"
                  alt="Image Free"
                  width={400}
                  height={200}
                  className="rounded-lg object-cover w-full"
                />
                <CardTitle>Image Free</CardTitle>
                <CardDescription>
                  Present you with an alternative to the expensive stock photography
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Typescript</Badge>
                  <Badge variant="outline">Stripe</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <Link href="https://imagefree.com/en" target="_blank">
                      <Globe className="mr-2 h-4 w-4" />
                      Live Website
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/unitedportraits.png"
                  alt="United Portraits"
                  width={400}
                  height={200}
                  className="rounded-lg object-cover w-full"
                />
                <CardTitle>United Portraits</CardTitle>
                <CardDescription>
                  Choose your pose, background and package with our easy online ordering system.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Typescript</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <Link href="https://unitedportraits.com" target="_blank">
                      <Globe className="mr-2 h-4 w-4" />
                      Live Website
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/looksrare.png"
                  alt="Looks Rare"
                  width={400}
                  height={200}
                  className="rounded-lg object-cover w-full"
                />
                <CardTitle>Looks Rare</CardTitle>
                <CardDescription>
                  LooksRare taps into listings from all major marketplaces, so you can grab grails from anywhere, for the best price.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Solidity</Badge>
                  <Badge variant="outline">NFT</Badge>
                  <Badge variant="outline">Web3</Badge>
                  <Badge variant="outline">Ethereum</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <Link href="https://looksrare.org" target="_blank">
                      <Globe className="mr-2 h-4 w-4" />
                      Live Website
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/inkfinance.png"
                  alt="Ink Finance"
                  width={400}
                  height={200}
                  className="rounded-lg object-cover w-full"
                />
                <CardTitle>Ink Finance</CardTitle>
                <CardDescription>
                  All-in-One Platform to Streamline On-Chain Financial Operations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Solidity</Badge>
                  <Badge variant="outline">DeFi</Badge>
                  <Badge variant="outline">Avalanche</Badge>
                  <Badge variant="outline">dApp</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <Link href="https://www.inkfinance.xyz" target="_blank">
                      <Globe className="mr-2 h-4 w-4" />
                      Live Website
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/playestates.png"
                  alt="Playestates"
                  width={400}
                  height={200}
                  className="rounded-lg object-cover w-full"
                />
                <CardTitle>Playestates</CardTitle>
                <CardDescription>
                  Collect and Invest with PNFTs, as easy as playing a game! Enjoy benefits of ownership, shared dividend income, and be in charge of your very own investments!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Solidity</Badge>
                  <Badge variant="outline">NFT</Badge>
                  <Badge variant="outline">Web3</Badge>
                  <Badge variant="outline">Ethereum</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <Link href="https://playestates.com" target="_blank">
                      <Globe className="mr-2 h-4 w-4" />
                      Live Website
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/seedifyfund.png"
                  alt="SeedifyFund"
                  width={400}
                  height={200}
                  className="rounded-lg object-cover w-full"
                />
                <CardTitle>Seedify Fund</CardTitle>
                <CardDescription>
                  Decide your tier, stake or farm $SFUND, and participate in all the token launches we bring to you in a guaranteed way.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Solidity</Badge>
                  <Badge variant="outline">ERC20</Badge>
                  <Badge variant="outline">DEX</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <Link href="https://seedify.fund" target="_blank">
                      <Globe className="mr-2 h-4 w-4" />
                      Live Website
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/snorkeling.jpg"
                  alt="Snorkeling"
                  width={400}
                  height={200}
                  className="rounded-lg object-cover w-full"
                />
                <CardTitle>Snorkeling</CardTitle>
                <CardDescription>
                  Dive into a world of excitement, explore the wonders beneath the surface, and create memories that will last a lifetime. Your aquatic journey begins here.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Wix</Badge>
                  <Badge variant="outline">PHP</Badge>
                  <Badge variant="outline">Javascript</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <Link href="https://www.silverthatchwatersports.com" target="_blank">
                      <Globe className="mr-2 h-4 w-4" />
                      Live Website
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/blackoak.jpg"
                  alt="BlackOak"
                  width={400}
                  height={200}
                  className="rounded-lg object-cover w-full"
                />
                <CardTitle>BlackOak</CardTitle>
                <CardDescription>
                  Black Oak Company website
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Javascript</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <Link href="https://blackoak-consulting.com" target="_blank">
                      <Globe className="mr-2 h-4 w-4" />
                      Live Website
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/wppenergy.png"
                  alt="Wpp Energy"
                  width={400}
                  height={200}
                  className="rounded-lg object-cover w-full"
                />
                <CardTitle>WPP ENERGY</CardTitle>
                <CardDescription>
                  Green energy token WPP token to represent ONE KG of hydrogen gas (H2)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Solidity</Badge>
                  <Badge variant="outline">NFT</Badge>
                  <Badge variant="outline">Web3</Badge>
                  <Badge variant="outline">Ethereum</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <Link href="https://wppenergy.io" target="_blank">
                      <Globe className="mr-2 h-4 w-4" />
                      Live Website
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/hummingbird.png"
                  alt="Humming Bird"
                  width={400}
                  height={200}
                  className="rounded-lg object-cover w-full"
                />
                <CardTitle>Humming Bird</CardTitle>
                <CardDescription>
                  Humming Bird Chocolate Maker Company website
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Shopify</Badge>
                  <Badge variant="outline">PHP</Badge>
                  <Badge variant="outline">Javascript</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <Link href="https://hummingbirdchocolate.com" target="_blank">
                      <Globe className="mr-2 h-4 w-4" />
                      Live Website
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/ton_poker.jpg"
                  alt="Ton Poker"
                  width={400}
                  height={200}
                  className="rounded-lg object-cover w-full"
                />
                <CardTitle>TON Poker</CardTitle>
                <CardDescription>
                  TON network Poker Telegram Mini app
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">TON</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Unity</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <Link href="https://t.me/@playTONPoker_bot" target="_blank">
                      <Globe className="mr-2 h-4 w-4" />
                      Live App
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/ton_pirateking.jpg"
                  alt="Ton Pirate King"
                  width={400}
                  height={200}
                  className="rounded-lg object-cover w-full"
                />
                <CardTitle>TON Priate King</CardTitle>
                <CardDescription>
                  TON network Clicker Telegram Mini Game
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">TON</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Unity</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <Link href="https://t.me/@TONPirateKings_bot" target="_blank">
                      <Globe className="mr-2 h-4 w-4" />
                      Live App
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Image
                  src="/bunny_blitz.png"
                  alt="Bunny Blitz"
                  width={400}
                  height={200}
                  className="rounded-lg object-cover w-full"
                />
                <CardTitle>TON Bunny Blitz</CardTitle>
                <CardDescription>
                  TON network Clicker Telegram Mini Game
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">TON</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Unity</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <Link href="https://t.me/@BunnyBlitz_bot" target="_blank">
                      <Globe className="mr-2 h-4 w-4" />
                      Live App
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="container py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">
            Achievements & Recognition
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader className="text-center">
                <Award className="mx-auto h-12 w-12 mb-4 text-yellow-500" />
                <CardTitle>AWS Certified Solutions Architect</CardTitle>
                <CardDescription>Professional Level Certification</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Award className="mx-auto h-12 w-12 mb-4 text-blue-500" />
                <CardTitle>Tech Innovation Award</CardTitle>
                <CardDescription>Best Engineering Solution 2023</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-24 bg-muted/50">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Get In Touch
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            I'm always interested in hearing about new opportunities and interesting projects.
            Let's connect and discuss how we can work together.
          </p>

          <Card>
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or opportunity..."
                    className="min-h-[120px]"
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
                {success && <p className="text-green-600">{success}</p>}
                {error && <p className="text-red-600">{error}</p>}
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Or reach out directly:</p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" asChild>
                <Link href="mailto:phenixtechnology901@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  phenixtechnology901@gmail.com
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://t.me/@phenixtech901" target="_blank">
                  Telegram
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://discord.com/phenix0901" target="_blank">
                  Discord
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://teams.live.com/l/invite/FAAoQ3NucopaLG7_Ac" target="_blank">
                  Teams
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
