import { Flex, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import MainPage from "../Pages/MainPage";
import NavBarComponent from "../Components/NavBar";

const MainLayout = () => {
  return (
    <Layout className="min-h-screen">
      {/* Fixed Header */}
      <Header className="bg-cyan-200 text-center fixed top-0 w-full z-10">
        <NavBarComponent />
      </Header>

      {/* Main Content */}
      <Content className="mt-[64px] flex-grow p-4 sm:p-6 md:p-8 lg:p-10 bg-gray-100">
        <MainPage />
      </Content>

      {/* Fixed Footer */}
      <Footer className="bg-cyan-200 text-center fixed bottom-0 w-full">
        Footer
      </Footer>
    </Layout>
  );
};

export default MainLayout;
