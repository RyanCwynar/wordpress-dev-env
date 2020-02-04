# Fueled on Bacon WordPress Seed
This is a WordPress seed designed to deploy to WP Engine and designed to run
locally using Docker Compose.

As time goes on, lessons learned and new components from projects are consolidated here for future use.

## Notable Features
- relative sizing through the `dvw` and `mvw` functions
- the general section repeater, which minimizes concern with writing markup

## Installation Notes
- ACF Pro is Included in this Repository, but you will need to input license key to get updates
- Default WP Admin credentials for the starter database are `user : password`

## Daily Dev Process
1. Start Docker App (Windows, OSX or Linux)
2. Start Sass (.scss) watcher `npm run gulp`
3. Initialize Docker container localhost `docker-compose up`
4. To close Docker container localhost `docker-compose down`

## Deploying to STAGE Process
1. Compile Sass (.scss) files to .css for deployment `npm run gulp compile:sass`
2. ...etc

### Initial setup for local development
1. Clone this repository locally `git clone https://github.com/fueledonbacon/fob-wp-seed.git`
2. Update the local MySQL database by logging into phpMyAdmin at ```localhost:8080```
  - SEE BELOW: [Updating local MySQL database](#updatinglocalmysql)
3. Run `npm install` from local project folder to install dependencies for sass compiling.
4. (OPTIONAL) Make sure that you have gulp installed globally on local machine.
  `npm install gulp --global`
  * note: you might need to run this as "sudo"
  * This step is optional because you can run gulp as an npm script in package.json by running `npm run gulp taskname` will be the same as running `gulp taskname`

### Built in Starter DB
1. Go to localhost:8080 (phpMyAdmin) in browser and login:
  - Server = db
  - Username = root
  - Password = password
2. Select "wordpress" database in the left-hand sidebar.
3. Click on "Import" button/tab at the top of the page.
4. Click "Choose File" button and select `sql/wordpress.sql` from the repository.
5. Click the "Go" button at the bottom of the page.

### WP Engine Restore
1. Login at <https://my.wpengine.com/> with project credentials
2. Download latest backup point snapshot from the staging host at <https://my.wpengine.com/installs/PROJECT/backup_points#production>
  - Select "Partial Backup" and choose to download the MySQL database, plugins and media ONLY (everything else is in this repo)!
3. Unzip download and locate the mysql.sql file
4. Make sure Docker App (Windows, OSX or Linux) is running.
5. Initialize Docker container localhost `docker-compose up`
6. Go to localhost:8080 (phpMyAdmin) in browser and login:
  - Server = db
  - Username = root
  - Password = password
7. Select "wordpress" database in the left-hand sidebar.
8. Click on "Import" button/tab at the top of the page.
9. Click "Choose File" button to select the mysql.sql file from steps 1-3.
10. Click the "Go" button at the bottom of the page.
######Congratulations, your localhost database has been updated/refreshed!

#### Deploy to Stage host initial setup
Follow these instructions: <https://wpengine.com/support/using-git-on-sites-with-multiple-environments/>

Push to whatever WP Engine ENVIRONMENT is configured for this project
`git push ENVIRONMENT master`
