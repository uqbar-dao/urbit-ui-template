import React from 'react'
import './Template.scss'

interface TemplateProps extends React.HTMLAttributes<HTMLDivElement> {

}

const Template: React.FC<TemplateProps> = (props) => {
  return (
    <div {...props} className={`template ${props.className || ''}`}>
      {props.children}
    </div>
  )
}

export default Template
