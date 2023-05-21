interface Props {
  children?: React.ReactNode;
}

const HomeLayout = ({
  children
}: Props) => (
  <div style={{
    backgroundColor: "#fafdcc",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }}>
    {children}
  </div>
);

export default HomeLayout;