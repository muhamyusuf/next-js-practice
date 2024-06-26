const LayoutDashboard = ({ children }:Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
        <div>
            <h1 className="text-7xl">DASHBOARD LAYOUT</h1>
            {children}
        </div>
    )
}

export default LayoutDashboard;