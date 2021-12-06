install: 
	npm ci

run:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js
