# Commit to local changes workflow

## Do your changes (new file)
* Create a new ascii art file
* Details: What is happening? You have added a `new` file. Right now git doesn't know it exists. It is there but not in source control. 

## Add the file
* Command: `git add <path to file>`, then run `git status` to verify it is being tracked
* Details: You have added the file to the `local repository`. It does not exist on the remote server (Github). However in your clone on your local computer it is now being managed/tracked. You confirm it is being tracked with `git status`, if you have added it properly it will be in the green `tracked` section.

## Commit the file
* Command: `git commit -m"My commit message"`, verify with `git log`
* Details: The staged are has been committed to local repository. It now has an entry in the git log. Using standard git commands and permissions this cannot be undone. It's commited.

