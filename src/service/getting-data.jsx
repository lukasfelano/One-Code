export const GetAllPost = async () => {
  let fetchData = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await fetchData.json();

  data.forEach(async (element) => {
    let comment = await GetComment(element.id);
    let user = await GetDetailUser(element.userId);
    element.totalComment = comment.length;
    element.user = user.name;
  });

  return data;
};

export const GetDetailPost = async (id) => {
  let fetchData = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );
  let data = await fetchData.json();

  let comment = await GetComment(data.id);
  let user = await GetDetailUser(data.userId);
  data.user = user.name;
  data.comment = comment;

  return data;
};

export const GetComment = async (id) => {
  let fetchData = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + id + "/comments"
  );
  let data = await fetchData.json();

  return data;
};

export const GetUser = async (id) => {
  let fetchData = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await fetchData.json();

  return data;
};

export const GetDetailUser = async (id) => {
  let fetchData = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + id
  );
  let data = await fetchData.json();

  return data;
};
