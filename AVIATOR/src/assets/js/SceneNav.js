import { forEachChild } from "typescript";

SceneNav = new (function () {
  let self = this;
  this.Length = 0;
  this.Current = 0;
  this.MaxShow = 10;
  this.Scenes = new Array();
  this.fill = {};
  this.data = "";
  this.cached = false;
  this.target = "";
  this.Populate = function (fill, data) {
    if (data == "") { return;}
    self.fill = fill;
    var hack = document.createElement("div");
    if (!self.cached){ 
      hack.innerHTML = data;
      self.data = hack;
      self.cached = true;
    }
    hack = self.data;
    var start = self.Current;
    console.log(fill);
    self.Scenes = hack.querySelectorAll(".Section");
    if (self.Scenes.length<1) {
      self.cached = false;
      return;
    }
    self.Length = self.Scenes.length;
    var navid = Math.max(start - 1, 0);
    if (self.length < 1) {
      return;
    }
    self.CreateNavItem(self.Scenes[Math.max(self.Current - 10, 0)].dataset.uid, "<*", fill, Math.max(self.Current - 10, 0));
    self.CreateNavItem(self.Scenes[Math.max(self.Current - 1, 0)].dataset.uid, "<", fill, Math.max(self.Current - 1, 0));
    for (var i = start; i < Math.min(start + self.MaxShow, self.Length - 2); i++){

      self.CreateNavItem(self.Scenes[i].dataset.uid, self.Scenes[i].dataset.uid, fill,i);
    }
    self.CreateNavItem(self.Scenes[Math.min(self.Current + 1, self.Length - 1)].dataset.uid, ">", fill, Math.min(self.Current + 1, self.Length - 1));
    self.CreateNavItem(self.Scenes[Math.min(self.Current + 10, self.Length - 1)].dataset.uid, "*>", fill, Math.min(self.Current + 10, self.Length - 1));
  }
  this.CreateNavItem = function (id,innerText,fill,eid) {
    el = document.createElement("div");
    el.className  = "sceneNav";
    el.dataset.suid = id;
    el.dataset.id = eid;
    el.addEventListener("click", function () { self.LoadScene(id,eid) },false);
    el.innerText = innerText;
    fill.append(el);
  }


  this.AddListeners = function (fill, uid, menuText) {
    let attachee = document.querySelector('[data-action="show"]');
    attachee.addEventListener("click", function () { self.ShowAsset(); });
    attachee = document.querySelector('.AssetDescription');
    attachee.addEventListener("input", function () { self.target.dataset.desc = this.innerText; self.Save(); });
    attachee = document.querySelector('.AddCharacter');
    attachee.addEventListener("click", function () { self.AddCharacterToScene(); });
  }

  this.AddCharacterToScene = function () {
    let pilot = self.data.querySelector(".Pilot");
    let xtraAsset = pilot.dataset.xtraAssets++;
    let Section = document.querySelector(".Elements");
    console.log(Section);
    let Character = document.createElement("div");
    Character.className = "CharList";
    Character.dataset.uid = "x" + xtraAsset;
    Character.innerText = "add Name Here";
    Character.contentEditable = "true";
    let Block = Section.querySelector(".CharacterBlock");
    Block.append(Character);
    Character.addEventListener("input", function () { self.Save(); });
    self.ContextFunction(Character);
  }


  this.Save = function () {
    let Scene2Replace = self.data.querySelector('[data-uid="' + self.Scenes[self.Current].dataset.uid + '"] .Elements');
    let Scene2Rwith = document.querySelector('.Elements');
    Scene2Replace.innerHTML = Scene2Rwith.innerHTML;
    CacheEngine.setCache("Processed", self.data.innerHTML);
  }

  this.ContextFunction = function (x) {
    x.addEventListener("contextmenu", (e) => {
      e.preventDefault();

      let select = document.querySelector(".context");
      select.style.display = "block";

      select.style.position = "absolute";
      select.style.left = (e.pageX - (50)) + "px";

      select.style.top = (e.pageY - (50)) + "px";
      console.log(select.style.left);
      self.target = x;
      let listener = function (e) {
        if (e.target.className != "menuItem") { e.target.style.display = "none"; select.removeEventListener("mouseout", listener); };
      }
      select.addEventListener("mouseout", listener);
    });
  }

  this.attachContent = function (sc) {

   let list = sc.querySelectorAll('.CharList').forEach(x => {
      self.ContextFunction(x);
   });
   list = sc.querySelectorAll('.Background').forEach(x => {
      self.ContextFunction(x);
   });
    list = sc.querySelectorAll('.DialogueList').forEach(x => {
      self.ContextFunction(x);
    });
    self.AddListeners();
  }

  this.ShowAsset = function () {
    self.ShowFile(self.target.dataset.asset);
  }





  this.ShowFile = function (res) {
    if (!res) {
      res = "https://i.ibb.co/LhkWVY0/0-CA3-D92-E-136-D-438-E-9-F6-F-CD9-FBFF6-DD41.jpg";
    }
    else {
      self.target.dataset.asset = res;
      self.Save();
    }
    let item = document.querySelector(".DisplayItem");
    if (self.target.dataset.uid.indexOf("d") > -1) {
      res = "https://madsvids.blob.core.windows.net/whas/033%20but%20im%20not%20out%20of%20tricks.wav";

    }
    let desc = "enter your description here";
    if (self.target.dataset.desc) { desc = self.target.dataset.desc; }
    let selecter = ".AssetImg";
    if (self.target.dataset.uid.indexOf("d") > -1) {
      let im = displayImage.querySelector(".VideoAsset");
      //selecter = ".DisplayBackground";
      im.src = res;
      al.al=im.addEventListener("load", setTimeout(im.play(),1000));
      return;

    }
    let displayImage = document.querySelector(selecter);
    if (self.target.dataset.uid.indexOf("b") > -1) {
      selecter = ".DisplayBackground";

    }
    displayImage.innerHTML = '<img src="' + res + '" alt="your image" width="50%" height="50%"/>';
    let im = displayImage.querySelector("img");
    im.addEventListener("load", function () { item.style.height = window.getComputedStyle(this, null).getPropertyValue("height"); })
    let displayName = document.querySelector(".AssetName");
    displayName.innerText = self.target.innerText;
    let displayDesc = document.querySelector(".AssetDescription");
    displayDesc.innerText = desc;

  }

  this.LoadScene = function (id, eid) { self.Current = eid; self.fill.innerHTML = ""; self.Populate(self.fill, self.data); self.ExposeScene(id); }
  this.ExposeScene = function (id) {
    var sc = document.querySelector(".SceneContent");

    sc.innerHTML = self.data.querySelector('[data-uid="' + id + '"]').innerHTML;
    self.attachContent(sc);
    let item = document.querySelectorAll("img").forEach(x => x.outerHTML = "");
    document.querySelector(".DisplayItem").style.height = "0px";
  }
})();
