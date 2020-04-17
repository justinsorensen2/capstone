heroku container:login

docker build -t capstone-image .

docker tag capstone-image registry.heroku.com/capstone-image/web


docker push registry.heroku.com/capstone-image/web

heroku container:release web -a capstone-image