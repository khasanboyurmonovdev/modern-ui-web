import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-Stack Developer | MBA | Web & Business Solutions Expert
            </h3>

            <p className="text-muted-foreground">
              With over 3 years of experience in web development, I specialize
              in creating responsive, accessible, and performant web
              applications using modern technologies.
            </p>

            <p className="text-muted-foreground">
              High-Performance Web Platforms → Developed and deployed complex
              MERN and NestJS-based web apps optimized for scalability and
              speed. Real-Time Applications → Built live chat systems, event
              dashboards, and subscription-based APIs using WebSockets and
              Socket.io. DevOps & Deployment → Configured secure Linux
              environments (Ubuntu, VPS, NGINX, UFW, Docker) with automated
              CI/CD pipelines. Enterprise & Business Solutions → Combined
              business insight (MBA) with technical execution to deliver
              data-driven, ROI-focused systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://www.linkedin.com/in/khasanboy-urmonov-mba-769076190"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Frontend Development
                  </h4>
                  <p className="text-muted-foreground">
                    TypeScript, ReactJS, NextJS, Redux, Axios, Socket.io-Client,
                    SweetAlert2, Framer Motion, MUI, Swiper, EJS
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Development</h4>
                  <p className="text-muted-foreground">
                    NodeJS, NestJS, ExpressJS, MongoDB, Mongoose, MySQL, JWT,
                    BcryptJS, Multer, ShellJS, Socket.IO, Cookie-Parser, Dotenv,
                    REST API
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    MBA-Powered Tech Services
                  </h4>
                  <p className="text-muted-foreground">
                    Business & Product Strategy Consulting. MVP planning &
                    startup product strategy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
