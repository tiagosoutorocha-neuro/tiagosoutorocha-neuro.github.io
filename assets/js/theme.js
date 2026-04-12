// Força o tema claro e remove a lógica de alternância
document.documentElement.setAttribute("data-theme", "light");

let applyTheme = () => {
  document.documentElement.setAttribute("data-theme", "light");
};

let initTheme = () => {
  applyTheme();
};

// Mantém as funções vazias para não quebrar chamadas de outros scripts
let toggleThemeSetting = () => {};
let setThemeSetting = () => {};
