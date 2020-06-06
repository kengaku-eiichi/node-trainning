#!/bin/bash

yum info installed git || yum -y install git

cd "/git/node-trainning"
nvm --version || {
    git clone git://github.com/creationix/nvm.git /opt/nvm
    ln -snf /opt/nvm/nvm.sh /etc/profile.d/.
    source /etc/profile.d/nvm.sh
    nvm --version
}

node -v || {
    # nvm install --lts
    # nvm use --lts
    nvm install stable
    nvm use stable

    node -v || exit 1
    npm -v || exit 1
}
yarn -v || {
    npm i -g yarn
    yarn -v || exit 1
}

