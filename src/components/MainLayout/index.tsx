import LangSwitcher from "../LangSwitcher";
import Sidebar from "../Sidebar";

type MainLayoutProps = {
  children: React.ReactNode;
  title: string;
  btnSlot?: React.ReactNode;
};

const MainLayout = (props: MainLayoutProps) => {
  const { children, title, btnSlot } = props;

  return (
    <div className="bg-beige-100 flex h-full flex-col lg:flex-row">
      <Sidebar />
      <main className="flex flex-col grow overflow-hidden">
        <div className="flex items-center border-b border-b-beige-300 py-3 px-4 sm:px-10">
          <h1 className="m-0 mr-auto font-bold text-xl sm:text-3xl">{title}</h1>
          {btnSlot && <div className="mr-4">{btnSlot}</div>}
          <LangSwitcher />
        </div>
        <div className="grow overflow-auto p-4 sm:py-8 sm:px-10">{children}</div>
      </main>
    </div>
  );
};

export default MainLayout;
