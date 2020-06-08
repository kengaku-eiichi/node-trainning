#!/bin/bash


main(){
    dir=${1}
    [ -d ${dir} ] || mkdir -p ${dir}
    cd ${dir}
    yarn init -y
    yarn add express --save
}

main "/git/node-trainning/express-sample1"
