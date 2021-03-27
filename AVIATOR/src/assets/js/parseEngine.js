
var ParseEngine = function () {
    var self = this;
    this.ParseCharacters = function (scmod) {
      var chars = new Array();
      var characters = scmod.querySelectorAll(".Character");
      var cid = 0;
      for (var z in characters) {
        x = characters[z];
        if (x.textContent) {
          var charname = x.textContent.trim().replace(/\(.*\)/gi, "") + "";
          if (!chars[charname]) {
            chars[charname] = { id: x.textContent.trim().replace(/\(.*\)/gi, "").replace("#", ""), count: 0 }
  
            chars[charname].uid = "c" + (cid++);
          }
          chars[charname].count += 1;
          x.dataset.uid = chars[charname].uid;
          x.id = chars[charname].id;
          x.count = chars[charname].count;
          x.textContent = chars[charname].id;
  
          el = x.parentElement.parentElement.querySelectorAll(".CharacterBlock");
          this.FillCharacters(el[0], chars[charname].id, chars[charname].uid, x.parentElement.parentElement.dataset.uid);
          var clist = document.querySelectorAll(".charlist");
          this.FillCharAnchors(clist[0], chars[charname].id, chars[charname].uid);
        }
      }
    }
  
    this.ParseBackground = function (scmod) {
  
      var count = 0;
      var bg = scmod.querySelectorAll(".Scene").forEach(x => {
  
        var e = document.createElement("div");
        e.dataset.uid = "b"+(count++);
        e.className = "Background";
        e.innerText = x.innerText;
        var sel = x.parentElement.parentElement.querySelector(".Elements");
        if (sel != null) {
          var fill = sel.querySelector('.BackgroundBlock');
          if (fill != null) {
            fill.appendChild(e);
          }
        }
      });
  
    }
    this.FindCharForDialogue = function (element) {
      if (!(element.previousElementSibling.className == "Character")) {
        return self.FindCharForDialogue(element.previousElementSibling);
      }
      else {
        return element.previousElementSibling;
      }
    }
  
  
    this.ParseDialogue = function (scmod) {
  
      var count = 0;
      var dialog = scmod.querySelectorAll(".Dialogue").forEach(x => {
  
        x.dataset.role = self.FindCharForDialogue(x).dataset.uid;
  
        x.dataset.uid = "d" + (count++);
        var e = document.createElement("div");
        e.dataset.uid = x.dataset.uid;
        e.className = "DialogueList";
        e.dataset.role = x.dataset.role;
        e.innerText = x.innerText;
        var sel = x.parentElement.parentElement.querySelector(".Elements");
        if (sel != null) {
          var fill = sel.querySelector('.DialogueBlock');
          if (fill != null) {
            fill.appendChild(e);
          }
        }
      });
  
    }
  
  
  
    this.FillCharacters = function (fill, char, uid, sid) {
  
      if ((fill.querySelector('[data-uid="' + uid + '"]') == null)) {
        var e = document.createElement("div");
        e.dataset.uid = uid;
        e.dataset.scene = sid;
        e.className = "CharList";
        e.innerText = char;
        e.addEventListener('click', function () {
          if (e.style.color == "red") {
            e.style.color == "black";
          }
          fill.parentElement.querySelectorAll('.DialogueList').forEach(z => z.style.display = 'none');
  
          fill.parentElement.querySelectorAll('.DialogueBlock [data-role="' + uid + '"]').forEach(z => z.style.display = (z.style.display == 'none') ? 'inherit' : 'none'); e.style.color = (e.style.color == "red") ? "black" : "red";
        }, false);
        fill.appendChild(e);
      }
    }
    this.FillCharAnchors = function (fill, char, uid) {
      if ((fill.querySelector('[data-uid="' + uid + '"]') == null)) {
  
        var ac = document.createElement("a");
        ac.className = "CharacterLink";
        ac.dataset.uid = uid;
        ac.dataset.scene = 0;
        ac.innerText = char;
        fill.appendChild(ac);
        ac.href = "#" + char;
        ac.outerHTML += " - ";
      }
    }
    this.process = function (xmlDoc) {
      let scmod = document.getElementById("sceneMaker");
      if (CacheEngine.getCache("Processed")) {
        scmod.innerHTML = CacheEngine.getCache("Processed");
        return;
      }
   
      xmlString = xmlDoc.innerHTML.replace(/<Paragraph/g, "<div");
      xmlString = xmlString.replace(/\/Paragraph/g, "\/div");
      xmlString = xmlString.replace(/<ScriptNote/g, '<div class="scriptnote"');
      xmlString = xmlString.replace(/\/ScriptNote/g, "\/div");
      xmlString = xmlString.replace(/Type=/g, "class=");
      xmlString = xmlString.replace(/<Text/g, "<span");
      xmlString = xmlString.replace(/\/Text/g, "\/span");
  
      var sid = 0;
      var sceneArray = xmlString.split('<div class="Scene Heading');
      for (var scene in sceneArray) {
        if (scene == 0 || scene >= sceneArray.length - 1) { continue; }
        var s = document.createElement("div");
        s.className = "Section";
        s.dataset.uid = "s" + (sid++);
        section = scmod.appendChild(s);
        var d = document.createElement("div");
        d.className = "Content";
        d.innerHTML = '<div class="Scene Heading' + sceneArray[scene];
        section.appendChild(d);
        var e = document.createElement("div");
        e.className = "Elements";
        var els = section.appendChild(e);
        var eb = document.createElement("div");
        eb.className = "CharacterBlock";
        els.appendChild(eb);
        var eb = document.createElement("div");
        eb.className = "DialogueBlock";
        els.appendChild(eb);
        var eb = document.createElement("div");
        eb.className = "BackgroundBlock";
        els.appendChild(eb);
        this.ParseCharacters(scmod);
  
      }
      this.ParseBackground(scmod);
      this.ParseDialogue(scmod);
      CacheEngine.setCache("Processed", scmod.innerHTML);    
    }
  
  }
  