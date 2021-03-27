CacheEngine = new (function () {
    this.cache = new Array();
    this.purge = function (ckey) {
      if (ckey == "all") {
        this.cache = new Array();
      }
      else {
        this.cache[ckey] = undefined;
      }
    }
    this.getCache = function (ckey) {
      if (this.cache[ckey]) {
        return this.cache[ckey];
      }
      else {
        return false;
      }
    };
    this.setCache = function (ckey, cacheitem) {
      this.cache[ckey] = cacheitem;
    };
  
  })();
  //alert(CacheEngine.getCache("yo"));
  