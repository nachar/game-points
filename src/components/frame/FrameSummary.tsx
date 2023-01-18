import FrameSummaryHeader from './FrameSummaryHeader'
import SummaryTable from '../SummaryTable'
import GameResults from '../GameResults'

export default function FrameSummary () {
  return (
    <div className="app-frame__item app-frame__item--summary">
      <FrameSummaryHeader />
      <SummaryTable />
      <GameResults />
    </div>
  )
}
