import * as React from "react"
import "./Tooltip.sass"

interface ITooltip {
  content: string | JSX.Element
  children: string | JSX.Element
  variant?: "top" | "bottom" | "right" | "left"
}

const Tooltip: React.FC<ITooltip> = ({
  children,
  content,

  variant = "top",
}) => {
  return (
    <div className={`tooltip`}>
      <span className={`tooltip-content tooltip-content-${variant}`}>
        {content}
      </span>
      {children}
    </div>
  )
}
export default Tooltip
