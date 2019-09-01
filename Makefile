dev:
	git push -f origin master:dev

staging: dev
	git push -f origin master:staging

prod: staging
	git push -f origin master:prod

