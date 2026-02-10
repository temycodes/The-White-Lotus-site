import SideNavigation from "../_components/SideNavigation";

function layout({ children }) {
  return (
    <div className='grid grid-cols-[14rem_1fr] min-h-screen gap-12'>
      <SideNavigation />

      <div className='py-1'>{children}</div>
    </div>
  );
}

export default layout;
