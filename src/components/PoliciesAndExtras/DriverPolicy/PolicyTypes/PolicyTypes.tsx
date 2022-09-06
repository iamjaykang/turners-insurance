import { useState } from 'react'

import policyTypesData from './policy-types-data'
import './policy-types.css'

const PolicyTypes: React.FC = () => {
  interface PolicyTypesInterface {
    icon: string
    type: string
    monthlyRate: number
    quarterlyRate: number
    annualRate: number
    famPlanDiscount?: boolean
    cover: string
    bgCol: string
  }

  const policyTypes: PolicyTypesInterface[] = policyTypesData

  const [policyType, setPolicyType] = useState<PolicyTypesInterface>(policyTypes[0])

  const getAccentCol = () => {
    switch (policyType.type) {
      case 'comprehensive everyday plus': return '#1078CE'
      case 'third party property damage': return '#57A3E2'
      case 'third party fire and theft': return '#A7C3DA'
      case 'mechanical breakdown': return '#A5BBCE'
      default: return '#1078CE'
    }
  }

  return (
    <div className="policy-types">
      <div className="policy-type-options">
        {policyTypes.map((pt: PolicyTypesInterface, i: number) => (
          <div key={i} className="policy-type-option" style={{ backgroundColor: pt.bgCol }}>
            <img src={pt.icon} alt={`${pt.type} icon`} />
            <p>{pt.type}</p>
          </div>
        ))}
      </div>
      <div className='pt-bg-accent' style={{ backgroundColor: getAccentCol() }} />
    </div>
  )
}

export default PolicyTypes