import Main from "./main";

test("should run without errors", () => {
  const Project = new Main();
  Project.main();
});
