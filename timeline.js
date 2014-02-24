(function () {

  // GTFS Data----------------------------------------------------------
  // https://developers.google.com/transit/gtfs/reference?csw=1
  function GTFSData() {
  }

  GTFSData.prototype = {
    request: function (type) {
      var that = this;
      d3.csv('gtfs-data/' + type + '.txt', function (error, data) {
      });
    }
  };

  // UTATimeline  -------------------------------------------------------------
  function UTATimeline() {
  }

  UTATimeline.prototype = {
    build: function () {
    },

    attach: function () {
    }
  };

  window.addEventListener('DOMContentLoaded', function () {
    window.uta = new UTATimeline();
  });
})();
