
nvm use 14

rem steps

@REM 1 yarn run build
REM not used for dumber au build --env prod
rem 2 gcloud init then select mrg-server-staging 
rem 3 gcloud  app deploy
rem 4 gcloud app browse
git add .
git commit -m "ver"
git push
