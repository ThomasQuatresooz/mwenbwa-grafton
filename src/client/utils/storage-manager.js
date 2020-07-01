exports.saveUserData = data => {
    localStorage.setItem("UserData", data);
};

exports.loadUserData = () => localStorage.getItem("UserData");

exports.eraseUserData = () => {
    localStorage.removeItem("UserData");
};
