type SectionIntroProps = {
  eyebrow: string
  title: string
  copy: string
  align?: 'left' | 'center'
}

export function SectionIntro({
  eyebrow,
  title,
  copy,
  align = 'left',
}: SectionIntroProps) {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : ''

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title text-balance">{title}</h2>
      <p className="section-copy">{copy}</p>
    </div>
  )
}
