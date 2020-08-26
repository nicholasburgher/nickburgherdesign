window.onload = function() {
    //Load in the Header Content
    var header = document.getElementById("header-content");
    var divI = document.createElement("div");
    divI.setAttribute("class","row justify-content-between align-items-center py-4");
    var divII = document.createElement("div");
    divII.setAttribute("class","col-8 text-center");
    var logo = document.createElement("img");
    logo.setAttribute("class","img logo");
    logo.setAttribute("src","images/graphics/NickBurgherDesignLogomark.svg");
    divI.appendChild(divII.appendChild(logo));
    var divIII = document.createElement("div");
    divIII.setAttribute("id","headline");
    divIII.setAttribute("class","col-8 text-center");
    var headline = document.createElement("h1");
    headline.innerHTML = "Nick Burgher";
    var subheadline = document.createElement("h2");
    subheadline.innerHTML = "Design";
    divIII.appendChild(headline);
    divIII.appendChild(subheadline);
    divI.appendChild(divIII);
    var divIV = document.createElement("div");
    divIV.setAttribute("class","col-2 text-right");
    divI.appendChild(divIV);
    header.appendChild(divI);
    //Add in the Navigation Structure Elements
    var nav = document.createElement("nav");
    nav.setAttribute("class","navbar navbar-expand navbar-light");
    nav.setAttribute("style","top: -69px; right: 0px; margin-bottom: -7%");
    var navDiv = document.createElement("div");
    navDiv.setAttribute("class","collapse navbar-collapse");
    navDiv.setAttribute("id","navbarSupportedContent");
    var navUL = document.createElement("ul");
    navUL.setAttribute("class","navbar-nav ml-auto");
    var navLI = document.createElement("ul");
    navLI.setAttribute("class","nav-item dropdown");
    var dropdownToggle = document.createElement("a");
    dropdownToggle.setAttribute("href","#");
    dropdownToggle.setAttribute("class","nav-link dropdown-toggle");
    dropdownToggle.setAttribute("id","navbarDropdown");
    dropdownToggle.setAttribute("role","button");
    dropdownToggle.setAttribute("data-toggle","dropdown");
    dropdownToggle.setAttribute("aria-haspopup","true");
    dropdownToggle.setAttribute("aria-expanded","false");
    dropdownToggle.innerHTML = "Menu";
    var dropdownMenu = document.createElement("div");
    dropdownMenu.setAttribute("class","dropdown-menu dropdown-menu-right");
    dropdownMenu.setAttribute("aria-labelledby","navbarDropdown");

    //Navigation Factory
    function NavItem (text, href) {
        this.href = href;
        this.text = text;
    }
    var navItems = [];

    var nav0 = new NavItem("About","about-me.html");
    navItems.push(nav0);
    var nav1 = new NavItem("Design","design.html");
    navItems.push(nav1);
    var nav2 = new NavItem("Photography","photography.html");
    navItems.push(nav2);
    var nav3 = new NavItem("Pricing","pricing.html");
    navItems.push(nav3);
    var nav4 = new NavItem("Connect","connect.html");
    navItems.push(nav4);
    //Push the nav items to the menu
    for (var i = 0; i < navItems.length; i++) {
        var a = document.createElement("a");
        a.setAttribute("class","dropdown-item");
        a.setAttribute("href",navItems[i].href);
        a.innerHTML = navItems[i].text;
        dropdownMenu.appendChild(a);
    }
    //assemble the header tags
    navLI.appendChild(dropdownToggle);
    navLI.appendChild(dropdownMenu);
    navUL.appendChild(navLI);
    navDiv.appendChild(navUL);
    nav.appendChild(navDiv);
    header.appendChild(nav);

    //FOOTER
    var footer = document.getElementById("footer");
    var fDiv = document.createElement("div");
    fDiv.setAttribute("class","container text-center");
    var h5 = document.createElement("h5");
    var link = document.createElement("a");
    link.setAttribute("target","_blank");
    link.setAttribute("class","text-muted");
    link.setAttribute("href","https://www.facebook.com/nickburgherphotography/");
    link.innerHTML = "Nick Burgher Design | 2020";
    h5.appendChild(link);
    fDiv.appendChild(h5);
    footer.appendChild(fDiv);
}