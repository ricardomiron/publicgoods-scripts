#/bin/bash
pushd ../publicgoods-website/platform && \
	git rm -rf static/* || true && \
    mkdir static && \
    cp -a ../../publicgoods-scripts/build/static/* static && \
    git add static/* && \
    cp ../../publicgoods-scripts/build/index.html . && \
    popd
