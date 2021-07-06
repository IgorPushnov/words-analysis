var HTML = document.getElementsByTagName('html')[0];

        function CSS(to, what){
            document.write("<style>" + to + "{" + what + "}</style>");
        }

        hash = unescape(window.location.hash); //Uporaba Ĺželene nastavitve
        if (hash.substr(0,8) == "#config:") {
            eval (hash.substring(8));
        }

        if (self !== top || window.inframe) //Preverite, ali je glavni okvir
            HTML.className += 'in-frame ';

        Additional = ['lang', 'theme', 'other'];
        for (Classes in Additional){
            if (typeof window[Additional[Classes]] == 'string')
                HTML.className += window[Additional[Classes]] + ' ';
        }