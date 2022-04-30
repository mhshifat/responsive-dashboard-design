import Page from './../components/layouts/Page'
import DashboardPageLayout from './../components/layouts/dashboard/PageLayout'
import Table from './../components/common/Table'

export default function Inventory() {
  return (
    <Page title="Algorizin Dashboard Demo">
      <DashboardPageLayout topTitle="Inventory">
        <div className="rounded bg-white shadow">
          <Table />
        </div>
      </DashboardPageLayout>
    </Page>
  )
}
