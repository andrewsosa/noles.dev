release:
	( cd api/ ; serverless deploy -s prod )
	git push -f origin master:release

staging:
	( cd api/ ; serverless deploy -s staging )
	git push -f origin master:staging

