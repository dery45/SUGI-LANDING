import { useLanguage } from '../../contexts/LanguageContext'
import Card from '../ui/Card'

export default function TeamMemberCard({ member }) {
  const { lang } = useLanguage()

  return (
    <Card className="text-center">
      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gray-100 mb-4">
        <img
          src={member.photo}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg font-bold text-shade-600">{member.name}</h3>
      <p className="text-sm font-medium text-primary mt-1">{member.role[lang]}</p>
      <p className="text-sm text-gray-500 mt-3 leading-relaxed">{member.desc[lang]}</p>
    </Card>
  )
}
