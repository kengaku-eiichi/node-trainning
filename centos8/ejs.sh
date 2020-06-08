#!/bin/bash


main(){
    dir=${1}
    [ -d ${dir} ] || mkdir -p ${dir}
    cd ${dir}
    yarn init -y
    yarn add ejs
}

main "/git/node-trainning/ejs-sample1"
main "/git/node-trainning/ejs-sample2"
