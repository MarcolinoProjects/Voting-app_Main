default:
	git submodule foreach --recursive git fetch
discard-changes: default
	git submodule foreach --recursive git reset --hard HEAD
	git submodule foreach --recursive git checkout main
	git submodule foreach --recursive git reset --hard origin/main
update-git: discard-changes
	git add src
	git commit -m "Pointing it repo to all main"