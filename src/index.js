
const core = require('@actions/core');
const github = require('@actions/github');
const OSS = require('ali-oss');
const ossdir = require('ali-oss-dir');


(async () => {
  try {
    const oss = new OSS({
      region: core.getInput('region'),
      accessKeyId: core.getInput('key-id'),
      accessKeySecret: core.getInput('key-secret'),
      bucket: core.getInput('bucket')
    })

    const assetPath = core.getInput('asset-path', { required: true })
    const targetPath = core.getInput('target-path', { required: true })

    ossdir(oss).upload(assetPath).to(targetPath).then((results) => {
      console.log(results);
    });

   
  } catch (err) {
    core.setFailed(err.message)
  }
})()
