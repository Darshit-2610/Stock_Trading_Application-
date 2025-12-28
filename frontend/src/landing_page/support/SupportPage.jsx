import SupportHeader from "./SupportHeader";
import SupportCategories from "./SupportCategories";
import SupportSidebar from "./SupportSidebar";

function SupportPage() {
  return (
    <div className="container mt-5">
      <SupportHeader />

      <div className="row mt-4">
        <div className="col-md-8">
          <SupportCategories />
        </div>

        <div className="col-md-4">
          <SupportSidebar />
        </div>
      </div>
    </div>
  );
}

export default SupportPage;
