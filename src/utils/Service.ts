export function isLoggedIn() {
  return localStorage.getItem("isLoggedIn");
}
export function handleInvalidToken() {
  //clearToken();
  clearUserData();
  window.location.href = "/login";
}

export function clearUserData() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("userData");
  //localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("temp_signup_data");
}
export const getAccountData = () => {
  return localStorage.getItem("accountData") !== undefined
    ? localStorage.getItem("accountData")
    : "";
};

export const setToken = (access_token: string) => {
  localStorage.setItem("access_token", access_token);
};

export function getToken() {
  let token = localStorage.getItem("access_token");
  if (token) {
    return token;
  }
  return false;
}
export function logoutCompletely() {
  clearUserData();
}

export const setTempData = (payload: any) => {
  localStorage.setItem("temp_signup_data", JSON.stringify(payload));
};
export function removeTempData() {
  localStorage.removeItem("temp_signup_data");
}

export const getTempData = (): any => {
  return localStorage.getItem("temp_signup_data") !== undefined
    ? localStorage.getItem("temp_signup_data")
    : "";
};

export const showNavbar = (
  toggleId: string,
  navId: string,
  bodyId: string,
  headerId: string
) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId);
  // Validate that all variables exist
  if (toggle && nav && bodypd && headerpd) {
    // show navbar
    nav.classList.toggle("show");
    // change icon
    toggle.classList.toggle("bi-x");
    // add padding to body
    bodypd.classList.toggle("body-pd");
    // add padding to header
    headerpd.classList.toggle("body-pd");
  }
};



export const blockedUnblockedReportedData = (
  data: any,
  previousStateData: any
) => {
  if (data?.type === "user") {
    let localData = [...previousStateData?.reportedUsersResponse];
    return localData.map((val: any) =>
      val?._id === data?._id
        ? {
            ...val,
            reported_users: {
              ...val?.reported_users,
              is_blocked_by_admin: data?.is_blocked_by_admin,
            },
          }
        : val
    );
  } else if (data?.type === "group") {
    let localData = [...previousStateData?.reportedGroupsResponse];
    return localData.map((val: any) =>
      val?._id === data?._id
        ? {
            ...val,
            reported_groups: {
              ...val?.reported_groups,
              is_blocked_by_admin: data?.is_blocked_by_admin,
            },
          }
        : val
    );
  } else if (data?.type === "event") {
    let localData = [...previousStateData?.reportedEventsResponse];
    return localData.map((val: any) =>
      val?._id === data?._id
        ? {
            ...val,
            reported_events: {
              ...val?.reported_events,
              is_blocked_by_admin: data?.is_blocked_by_admin,
            },
          }
        : val
    );
  }
};
