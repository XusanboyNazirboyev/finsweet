import CompanyHero from "../components/Company/CompanyHero";
import CompanyStory from "../components/Company/CompanyStory";
import CompanyTeam from "../components/Company/CompanyTeam";
import CompanyVision from "../components/Company/CompanyVision";
import ExpertiseSection from "../components/ExpertiseSection";

export default function Company(){
  return(
    <div>
      <CompanyHero/>
      <CompanyStory/>
      <ExpertiseSection/>
      <CompanyVision/>
      <CompanyTeam/>
    </div>
  )
}