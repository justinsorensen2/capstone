docker build -t capstone-image .

docker tag capstone-image registry.heroku.com/capstone/web


docker push registry.heroku.com/capstone/web

heroku container:release web -a capstone