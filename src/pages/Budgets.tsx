import MainLayout from "../components/MainLayout";
import Btn from "../ui/Btn";
import PageHeader from "../ui/PageHeader";

const Budgets = (): JSX.Element => {
  return (
    <MainLayout>
      <PageHeader title="Budgets">
        <Btn>+ Add New Budget</Btn>
      </PageHeader>
    </MainLayout>
  );
};

export default Budgets;
