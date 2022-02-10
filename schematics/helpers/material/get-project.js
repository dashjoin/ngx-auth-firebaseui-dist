"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjectFromWorkspace = void 0;
const schematics_1 = require("@angular-devkit/schematics");
/**
 * Finds the specified project configuration in the workspace. Throws an error if the project
 * couldn't be found.
 */
function getProjectFromWorkspace(workspace, projectName = workspace.extensions.defaultProject) {
    const project = workspace.projects.get(projectName);
    if (!project) {
        throw new schematics_1.SchematicsException(`Could not find project in workspace: ${projectName}`);
    }
    return project;
}
exports.getProjectFromWorkspace = getProjectFromWorkspace;
//# sourceMappingURL=get-project.js.map