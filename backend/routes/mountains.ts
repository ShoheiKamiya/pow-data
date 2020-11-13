'use strict'

var express = require('express');
const router = express.Router();
router.get('/', (req: any, res: any) => {
  res.json({index: 'スキー場一覧'});
})

router.get('/:mountainId', (req: any, res: any) => {
  const params = req.params
  res.json(params)
})

module.exports = router;
