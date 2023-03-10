import { Task } from './task';

export const TASKS_TODO: Task[] = [
   {"id": 112, "title": "Update Landing page", "description": "UI Landing page needs updating", "startDt": "01/01/2022", "endDt": "01/10/2022", "assignee": "John Doe"},
   {"id": 111, "title": "Design application graphics", "description": "Application need graphics drawn in Adobe Illustrator", "startDt": "01/01/2022", "endDt": "01/10/2022", "assignee": "John Doe"}
];

export const TASKS_STARTED: Task[] = [
   {"id": 110, "title": "Develop Request webform", "description": "Clients need webform page in application to create a request", "startDt": "02/01/2022", "endDt": "02/10/2022", "assignee": "James Smith"},
   {"id": 109, "title": "Conduct Regression test", "description": "Perform comprehensive end-to-end test", "startDt": "03/01/2022", "endDt": "03/10/2022", "assignee": "Mary Jones"},
    {"id": 108, "title": "Set up staging environment", "description": "Stage environment needed for pre-prod deployments", "startDt": "01/01/2022", "endDt": "01/10/2022", "assignee": "John Doe"},
    {"id": 107, "title": "Update Unit tests", "description": "Unit tests needed to reflect latest changes", "startDt": "02/01/2022", "endDt": "02/10/2022", "assignee": "James Smith"},
    {"id": 106, "title": "Install packages", "description": "Packages need to be installed", "startDt": "03/01/2022", "endDt": "03/10/2022", "assignee": "Mary Jones"},
 ];

 export const TASKS_REVIEW: Task[] = [
    {"id": 105, "title": "Update page title", "description": "UI application page needs an updated title", "startDt": "01/01/2022", "endDt": "01/10/2022", "assignee": "John Doe"},
    {"id": 104, "title": "Fix Section 508 bugs", "description": "Non-508-compliant bugs were discovered", "startDt": "02/01/2022", "endDt": "02/10/2022", "assignee": "James Smith"},
 ];

 export const TASKS_COMPLETE: Task[] = [
   {"id": 103, "title": "Create dashboard table", "description": "UI Dashboard table is needed for admin users", "startDt": "03/01/2022", "endDt": "03/10/2022", "assignee": "Mary Jones"},
    {"id": 102, "title": "Security vulnerability patching", "description": "Critical security bugs discovered", "startDt": "01/01/2022", "endDt": "01/10/2022", "assignee": "John Doe"},
    {"id": 101, "title": "Set up database", "description": "Application needs database for backend", "startDt": "02/01/2022", "endDt": "02/10/2022", "assignee": "James Smith"},
    {"id": 100, "title": "Create Landing page", "description": "UI Landing page needs to be developed", "startDt": "03/01/2022", "endDt": "03/10/2022", "assignee": "Mary Jones"},
 ];