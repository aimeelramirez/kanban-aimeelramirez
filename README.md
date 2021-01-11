# DWS2 Kanban Board

## dws2/kanban-aimeelramirez

### Repository link location

> https://github.com/dws2/kanban-aimeelramirez

### Fork/Clone

> https://github.com/dws2/kanban-aimeelramirez.git

## Introduction

Welcome to the kanban board project application. Here to be creating an application with inspirations from Notion.so, Todoist.com, etc.

I'm inspired by the different things I saw such as the way they have their navigation menu for editing the card/task to be deleted, shared, saved, and duplicated.

Here I'll be also focusing on using git with Github to merge changes with handling conflicts if to apply. These are the steps that I did to create the workflow to follow if to record the upcoming differences commits.

## Workflows

Pull from origin branch:

> milestone-1

### Branches

- Locally contains:

> 1. "html-setup"
> 2. "dev"

- Github contains for PR:

> 1. "master"
> 2. "milestone-1"

### Steps

1. The "html-setup" branch is merged it's changes to "dev".
2. Pushing the branch "dev" to Github to merge branch "milestone-1".
   - (I delete the branch origin on github from merge or merge to milestone-1 locally and push to github.)
3. Pulling locally "milestone-1" branch for changes.
4. Switching back to "dev" to "git status" to see no local changes.
5. Back to "html-setup" for merging development to "dev" branch.

- Upon submission: I created a Pull Request (PR) to merge milestone-1 into master.

### Installation

- From the root of this project run: `npm install`

### Usage

- `npm start`: This command will start up a local web server, open your default browser, and begin watching scss files for changes.
- `npm run build`: This command will only compile your scss files.

## Resources

Here are some of the inspirations to this project of task manager excluding Github and Trello.

- Notion – The all-in-one workspace for your notes, tasks, wikis, and databases.
  Notion – The all-in-one workspace for your notes, tasks, wikis, and databases. (2021). Retrieved 11 January 2021, from https://www.notion.so/

- Todoist: The to do list to organize work & life
  Todoist: The to do list to organize work & life. (2021). Retrieved 11 January 2021, from https://todoist.com/
