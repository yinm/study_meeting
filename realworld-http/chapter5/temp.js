const xhr = new XMLHttpRequest();
xhr.onload = (e) => {
  if (this.status === 200) {
    // IE11対策
    const json = JSON.parse(xhr.responseText);
    console.log(json);
  }
};
xhr.send();