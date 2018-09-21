var metric
  , imperial;

metric = {
  m3: {
    name: {
      singular: 'Cubic meter'
    , plural: 'Cubic meters'
    }
  , to_anchor: 1
  }
};

imperial = {
ft3: {
    name: {
      singular: 'Cubic foot'
    , plural: 'Cubic feet'
    }
  , to_anchor: 1/35.3146667215
  }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'm3'
    , ratio: 1
    }
  , imperial: {
      unit: 'ft3'
    , ratio: 1/35.3146667215
    }
  }
};
