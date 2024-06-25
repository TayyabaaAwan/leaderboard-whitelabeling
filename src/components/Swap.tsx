import { Images } from "./Config/Images";
const Swap = () => {
  return (
    <div className="login-form-data">
      <div className="d-flex justify-content-start align-items-center admin-modal">
        <div className="p-3">
          <img src={Images.profileUser} className="profile-logo" />
        </div>
        <div>
          <h4 className="mb-0 text-white fs-16">Super Admin</h4>
          <p className="mb-0 text-white fs-12">superadmin@tanmeyaa.com</p>
        </div>
      </div>
      <div className="d-flex justify-content-start align-items-center ms-2 border-bottom">
        <div className="p-3"></div>
        <p className="mb-0 ms-3 fs-6">My Profile</p>
      </div>
      <div className="d-flex justify-content-start align-items-center ms-2 border-bottom">
        <div className="p-3"></div>
      </div>
    </div>
  );
};

export default Swap;
