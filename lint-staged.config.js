export default {
  "*.{js,jsx,ts,tsx,json}": (filenames) => [
    "prettier --write " + filenames.join(" "),
    "eslint --cache --fix " + filenames.join(" "),
    "tsc -p tsconfig.json --noEmit",
  ],
};
