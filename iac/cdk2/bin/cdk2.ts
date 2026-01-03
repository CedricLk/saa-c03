#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib/core';
import { Cdk2Stack } from '../lib/cdk2-stack';

const app = new cdk.App();
new Cdk2Stack(app, 'Cdk2Stack');
