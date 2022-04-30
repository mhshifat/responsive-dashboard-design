import DashboardHeader from './Header'
import DashboardSidebar from './Sidebar'
import DashboardContentTop from './ContentTop'

export default function DashboardPageLayout({ topTitle, children }) {
  return (
    <>
      <DashboardHeader />
      <div className="flex flex-1">
        <DashboardSidebar />
        <div className="flex flex-1 flex-col">
          <DashboardContentTop title={topTitle} />
          <div className="p-2 md:p-6">{children}</div>
        </div>
      </div>
    </>
  )
}
