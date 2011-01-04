var freecell;
function _NE(tag,id,w,h,a) {
    var elm = document.createElement(tag);
    if(w) {
        elm.setAttribute("width",w);
    }
    if(w) {
        elm.setAttribute("width",w);
    }
    if(id) {
        elm.id = id;
        elm.setAttribute("id",id);
    }
    if(h) {
        elm.setAttribute("height",h);
    }
    if(a) {
        for(var i=0;i<a.length;i=i+2) {
            elm.setAttribute(a[i],a[i+1]);
        }
    }
    return elm;
}
function addToTable(_main,id,text,href,cols) {
    _addToTable(_main.firstChild,id,text,href,cols);
    return _main;
}
function _addToTable(main,id,text,href,cols) {
        var table, newtable, tr, td, th;
        table = document.getElementById(id);
        if (!table) {
            newtable = _NE("div",id + "_parent","100%","100%");
            th = _NE("h2",0,0,0,["class","listhead"]);
            th.innerHTML = id;
            newtable.appendChild(th);
            table = _NE("ul",id,0,0,["class","listUL"]);
            newtable.appendChild(table);
        }
        tr = document.createElement("li");
        tr.innerHTML = "<a href=\"" + href + "\">" + text + "<\/a>";
        tr.setAttribute("class","listitem");
        table.appendChild(tr);
        if (!newtable) {
            return;
        }
        var freecell;
        if(!cols || cols<1) {
            cols=2;
        }
        var count = main.childNodes.length;
        if(count<1) {
            tr = document.createElement("tr");
            freecell = document.createElement("td");
            tr.appendChild(freecell);
            main.appendChild(tr);
        }
        else {
            var lasttr = main.childNodes[count-1];
            var tdcount = lasttr.childNodes.length;
            if(tdcount<cols) {
                freecell = document.createElement("td");
                lasttr.appendChild(freecell);
            }
            else {
                tr = document.createElement("tr");
                freecell = document.createElement("td");
                tr.appendChild(freecell);
                main.appendChild(tr);
            }
        }
        freecell.appendChild(newtable);
        return;
}

function _addDataToTable(table,data,cols) {
   for(var i=0;i<data.length;i++) {
        _addToTable(table,data[i][0],data[i][1],data[i][2],cols);
   }
   return table;
}

function createTable(id,parent,data,cols) {
    var main = _NE("table",id,"100%","100%");
    var tbody = _NE("tbody",id+"_body","100%");
    /*
    var tr = _NE("tr",0,"100%");
    if(!cols) cols=2;
    var col_width = 100 / cols;
    var td = _NE("td",0,col_width + "%");
    tr.appendChild(td);
    for(var i=1;i<cols;i++) {
        tr.appendChild(td.cloneNode(0));
    }
    tbody.appendChild(tr);
    */
    main.appendChild(tbody);
    if(parent) {
        parent.appendChild(main);
    }
    if(data) {
        _addDataToTable(tbody,data,cols);
    }
    return main;
}

