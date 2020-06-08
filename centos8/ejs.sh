#!/bin/bash

dir="/git/node-trainning/ejs-sample1"
[ -d ${dir} ] || mkdir -p ${dir}
cd ${dir}
yarn init -y
yarn add ejs
