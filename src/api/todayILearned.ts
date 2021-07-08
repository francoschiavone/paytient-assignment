export const getTILS = async (): Promise<Response> =>
  fetch("https://www.reddit.com/r/todayilearned.json", {
    method: "GET",
  });
