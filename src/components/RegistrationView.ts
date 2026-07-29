export function renderRegistration(onStart: (name: string) => void) {
  const container = document.createElement("div");
  container.className = "registration";

  const title = document.createElement("h1");
  title.textContent = "NOT FIGHT CLUB";

  const input = document.createElement("input");
  input.placeholder = "Enter your name";

  const button = document.createElement("button");
  button.textContent = "START";

  button.onclick = () => {
    const name = input.value.trim();

    if (!name) {
      alert("Enter your name");
      return;
    }

    onStart(name);
  };

  container.append(title, input, button);

  return container;
}
