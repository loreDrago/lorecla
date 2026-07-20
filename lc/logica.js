    const dataInizio = new Date(2026, 3, 25, 19, 30, 0); 

        function aggiornaContatore() {
            const oraAttuale = new Date();
            const differenza = oraAttuale - dataInizio; 
            const millisecondiInUnGiorno = 1000 * 60 * 60 * 24;
            const millisecondiInUnOra = 1000 * 60 * 60;
            const millisecondiInUnMinuto = 1000 * 60;

            const giorni = Math.floor(differenza / millisecondiInUnGiorno);
            const ore = Math.floor((differenza % millisecondiInUnGiorno) / millisecondiInUnOra);
            const minuti = Math.floor((differenza % millisecondiInUnOra) / millisecondiInUnMinuto);
            const secondi = Math.floor((differenza % millisecondiInUnMinuto) / 1000);

            document.getElementById('giorni').innerText = giorni;
            document.getElementById('ore').innerText = ore.toString().padStart(2, '0');
            document.getElementById('minuti').innerText = minuti.toString().padStart(2, '0');
            document.getElementById('secondi').innerText = secondi.toString().padStart(2, '0');
        }

        aggiornaContatore();
        setInterval(aggiornaContatore, 1000);

        const frasi = [
            "i tuoi occhi da bambi",
            "il tuo sorriso",
            "come ti acciti quando ci vediamo",
            "vedo la passione con cui affronti ogni cosa",
            "fai sembrare facile l'impossibile",
            "mi riempi d'amore",
            "sai come farmi tornare sempre il sorriso",
            "non dai per scontato nulla",
            "i tuoi capelli (sia quelli ricci che quelli mossi)",
            "il tuo faccino",
            "la tua personalità",
            "la tua voglia di migliorare e imparare",
            "la tua cucina",
            "il tuo lato da bambina",
            "per come mi accudisci",
            "per quando mi asciughi il sudore",
            "per come mi guardi",
            "perchè sei anche la mia migliore amica",
            "perchè... wawwawawu (we some dawgs)",
            "perchè non sai restare ferma",
            "per la tua emotività",
            "per la tua empatia",
            "per i bellissimi regali che solo tu sai fare",
            "ANCHE per il tuo booty :))",
            "perchè mi ripeti sempre che sei miaaa",
            "per come mi rassicuri",
            "perchè sei la mia prima e unica",
            "perchè sei la mia persona preferita",
            "perchè rispondi a ogni mio singolo tiktok",
            "perchè so che leggerai tutti i miei motivi",
            "se ti è uscito questo ti faccio da schiavo per 2 ore, sfruttalo bene",
            "perchè miau miau miau miauuu, miau miau mia miauu",
            "perchè sei la minnie al mio topolino",
            "per i lughi audio che mi mandi",
            "per i video haul che mi mandi",
            "per i tuoi fit check",
            "per tutti i complimenti che mi fai",
            "per come riusciamo a divertirci con poco",
            "per i video che mi ritrovo nella galleria dopo giorni",
            "per tutti i complimenti che mi fai",
            "per come mi ami",
            "per come parliamo tutto il giorno",
            "per le tue guanciotte",
            "per come ti fi spremere le guanciotte",
            "per tutto cio che ti fai fare senza nemmeno pensarci 2 volte (tipo leccarmi le dita :) <3",
            "per quando mi riempi di bacini",
            "per quando ci corichiamo l'uno sull'altro",
            "per come facciamo l'amore e NON sesso",
            "per i tuoi morsi",
            "per i tuoi succhiotti (mi mancano)",
            "per la tua ironia",
            "per la tua intelligenza",
            "per essere sempre te stessa",
            "per come sei rispettosa, brava ed educata",
            "per i tuoi pugni strong",
            "peri 1000 km che mi hai fatto fare sulla moto",
            "per quella sera in cui mi hai confortato nonostnte ci sentivamo da 2 settimane",
            "per gli sticker che mi hai fatto",
            "perchè vieni con interesse alle mie partite",
            "per come mi perdoni quando ti faccio innervosire",
            "per come e quando ci baciamo",
            "per il tuo ragebait",
            "per come cerchi conforto in me",
            "per quando fai gli occhioni dolci",
            "per quando mi tenti in tutti i modi",
            "per come mi racconti ogni cuttighio",
            "per lo spaventone che mi hai fatto prendere quando sei caduta dalla mia moto",
            "per le fotoche mi fai",
            "per le foto che ci facciamo",
            "per quando ci siamo ubriacati insieme",
            "per le cose dolci che ci scriviamo",
            "per quel primo appuntamento",
            "per quando mi dici 'ti mangio'",
            "per quando mi proponi di mangiare"



        ];

        function mostraFraseCasuale() {
            const indiceCasuale = Math.floor(Math.random() * frasi.length);
            const fraseScelta = frasi[indiceCasuale];
            document.getElementById("frase").textContent = fraseScelta;
        }