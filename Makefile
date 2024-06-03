TOKEN:=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

download_schema:
	@curl https://$(TOKEN)@raw.githubusercontent.com/digitracker/strapi/master/src/extensions/documentation/documentation/1.0.0/full_documentation.json -o schema.json

generate:
	yarn openapi-ts

all: download_schema generate