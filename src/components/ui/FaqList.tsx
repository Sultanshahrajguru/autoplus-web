type FaqListProps = {
  items: Array<{ question: string; answer: string }>
}

export function FaqList({ items }: FaqListProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details
          className="panel-light group p-6 [&_summary::-webkit-details-marker]:hidden"
          key={item.question}
        >
          <summary className="cursor-pointer list-none text-lg font-semibold text-graphite-950">
            {item.question}
          </summary>
          <p className="pt-4 text-base leading-7 text-graphite-700">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}
