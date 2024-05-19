const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex-center min-h-screen w-full bg-dotted-pattern bg-cover bg-fixed ">
        {children}
        </div>
    )
}

export default Layout