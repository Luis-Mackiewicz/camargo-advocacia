import "./Container.css";

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => {
  return <div className="about-container">{children}</div>;
};

export default PageContainer;
