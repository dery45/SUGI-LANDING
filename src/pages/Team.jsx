import { useLanguage } from '../contexts/LanguageContext'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import TeamMemberCard from '../components/sections/TeamMemberCard'
import SEOHead from '../components/ui/SEOHead'
import { team } from '../data/teamData'

export default function Team() {
  const { lang } = useLanguage()
  const isID = lang === 'id'

  return (
    <>
      <SEOHead title={isID ? 'Tim Kami' : 'Our Team'} description={isID ? 'Kenali tim di balik SUGI Ecosystem.' : 'Meet the team behind SUGI Ecosystem.'} />
      <Section className="pt-28">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-5xl font-bold">
            {isID ? 'Tim Kami' : 'Our Team'}
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            {isID
              ? 'Empat anggota dengan spesialisasi yang saling melengkapi.'
              : 'Four members with complementary specializations.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <TeamMemberCard key={i} member={member} />
          ))}
        </div>
      </Container>
    </Section>
    </>
  )
}
