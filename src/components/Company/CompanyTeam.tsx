import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";


import team1 from "../../assets/Team 1.svg";
import team2 from "../../assets/Team 2.svg";
import team3 from "../../assets/Team 3.svg";
import team4 from "../../assets/Team 4.svg";
import team5 from "../../assets/Team 5.svg";
import team6 from "../../assets/Team 6.svg";
import team7 from "../../assets/Team 7.svg";
import team8 from "../../assets/Team 8.svg";
import { Link } from "react-router-dom";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  { id: 1, name: "Javena Melo", role: "Support Assist", image: team1 },
  { id: 2, name: "Paul Jones", role: "Design Lead", image: team2 },
  { id: 3, name: "Danny Scott", role: "Software Engineer", image: team3 },
  { id: 4, name: "Sherman Martin", role: "Tech Lead", image: team4 },
  { id: 5, name: "Javena Melo", role: "Support Assist", image: team5 },
  { id: 6, name: "Cody Fisher", role: "UX Designer", image: team6 },
  { id: 7, name: "Devon Lane", role: "DevOps Engineer", image: team7 },
  { id: 8, name: "Robert Fox", role: "Product Manager", image: team8 },
];

export default function CompanyTeam() {
  return (
    <section className="bg-white px-6 py-16 md:px-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-700">
          MEET OUR TEAM
        </p>

        <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Teamwork is the only <br /> way we work
        </h2>

        <p className="mt-6 max-w-xl text-sm leading-relaxed text-slate-500">
          Through True Rich Attended does no end it his mother since
          real had half every him case in packages enquire we up
          ecstatic unsatiable.
        </p>

        {/* Team Grid */}
        <div className="mt-12 grid grid-cols-1 gap-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <Link to="/team-member">
              <div
                key={member.id}
                className="group relative aspect-square cursor-pointer overflow-hidden bg-slate-900"
              >
                {/* Asosiy Rasm */}
                <img
                  src={member.image} // Rasm manzili
                  alt={member.name}
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                />

                {/* Qora Overlay va Matnlar (Hover Bo'lganda Ko'rinadi) */}
                <div className="absolute inset-0 flex flex-col justify-end bg-slate-950/80 p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-lg font-bold">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-xs text-slate-300">
                    {member.role}
                  </p>

                  {/* Social Ikonkalar */}
                  <div className="mt-4 flex items-center gap-4 text-white">
                    <a
                      href="#"
                      aria-label="Twitter"
                      className="transition-colors hover:text-slate-300"
                    >
                      <FaTwitter className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      aria-label="Instagram"
                      className="transition-colors hover:text-slate-300"
                    >
                      <FaInstagram className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      aria-label="LinkedIn"
                      className="transition-colors hover:text-slate-300"
                    >
                      <FaLinkedinIn className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
