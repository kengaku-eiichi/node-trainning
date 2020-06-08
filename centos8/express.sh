#!/bin/bash


main(){
    dir=${1}
    [ -d "${dir}/views" ] || mkdir -p "${dir}/views"
    cd ${dir}
    yarn init -y
    yarn add express ejs --save
}

main "/git/node-trainning/express-sample1"
main "/git/node-trainning/express-sample2"
main "/git/node-trainning/express-sample3"
main "/git/node-trainning/express-sample4"
