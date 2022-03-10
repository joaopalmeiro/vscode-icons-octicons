import { request } from "@octokit/request";
import { find } from "lodash";

// https://docs.github.com/en/rest/reference/git#get-a-tree
// https://github.com/microsoft/vscode-codicons/tree/0.0.14/src/icons
// https://waiyanyoon.com/blog/2019-05-22---introduction-to-promise/
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator
request("GET /repos/{owner}/{repo}/git/trees/{tree_sha}", {
  owner: "microsoft",
  repo: "vscode-codicons",
  tree_sha: "0.0.14",
})
  .then(({ data }) => {
    const srcSha = find(data.tree, ["path", "src"])?.sha;

    return request("GET /repos/{owner}/{repo}/git/trees/{tree_sha}", {
      owner: "microsoft",
      repo: "vscode-codicons",
      tree_sha: srcSha!,
    });
  })
  .then(({ data }) => {
    const srcSha = find(data.tree, ["path", "icons"])?.sha;

    return request("GET /repos/{owner}/{repo}/git/trees/{tree_sha}", {
      owner: "microsoft",
      repo: "vscode-codicons",
      tree_sha: srcSha!,
    });
  })
  .then(({ data }) => console.log(data));
