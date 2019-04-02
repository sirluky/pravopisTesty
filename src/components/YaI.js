import React from 'react'
import Doplnovac from './doplnovac';
export default function YaI({index,triggeredChange,spravne,activeStatus}) {
  return (
    <Doplnovac spravne={spravne} activeStatus={activeStatus} triggeredChange={triggeredChange} index={index} options={[" ","y","i","ý","í"]}/>
    //pevna mezera alt+0160, pro zruseni odsazeni
  )
}