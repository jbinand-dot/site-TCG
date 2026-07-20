const POKEMON = [{"name": "Bulbizarre", "num": 1}, {"name": "Herbizarre", "num": 2}, {"name": "Florizarre", "num": 3}, {"name": "Salamèche", "num": 4}, {"name": "Reptincel", "num": 5}, {"name": "Dracaufeu", "num": 6}, {"name": "Carapuce", "num": 7}, {"name": "Carabaffe", "num": 8}, {"name": "Tortank", "num": 9}, {"name": "Chenipan", "num": 10}, {"name": "Chrysacier", "num": 11}, {"name": "Papilusion", "num": 12}, {"name": "Aspicot", "num": 13}, {"name": "Coconfort", "num": 14}, {"name": "Dardargnan", "num": 15}, {"name": "Roucool", "num": 16}, {"name": "Roucoups", "num": 17}, {"name": "Roucarnage", "num": 18}, {"name": "Rattata", "num": 19}, {"name": "Rattatac", "num": 20}, {"name": "Piafabec", "num": 21}, {"name": "Rapasdepic", "num": 22}, {"name": "Abo", "num": 23}, {"name": "Arbok", "num": 24}, {"name": "Pikachu", "num": 25}, {"name": "Raichu", "num": 26}, {"name": "Sabelette", "num": 27}, {"name": "Sablaireau", "num": 28}, {"name": "Nidorang", "num": 29}, {"name": "Nidorina", "num": 30}, {"name": "Nidoqueen", "num": 31}, {"name": "Nidorano", "num": 32}, {"name": "Nidorino", "num": 33}, {"name": "Nidoking", "num": 34}, {"name": "Mélofée", "num": 35}, {"name": "Mélodelfe", "num": 36}, {"name": "Goupix", "num": 37}, {"name": "Feunard", "num": 38}, {"name": "Rondoudou", "num": 39}, {"name": "Grodoudou", "num": 40}, {"name": "Nosferapti", "num": 41}, {"name": "Nosferalto", "num": 42}, {"name": "Mystherbe", "num": 43}, {"name": "Ortide", "num": 44}, {"name": "Rafflesia", "num": 45}, {"name": "Paras", "num": 46}, {"name": "Parasect", "num": 47}, {"name": "Mimitoss", "num": 48}, {"name": "Aéromite", "num": 49}, {"name": "Taupiqueur", "num": 50}, {"name": "Triopikeur", "num": 51}, {"name": "Miaouss", "num": 52}, {"name": "Persian", "num": 53}, {"name": "Psykokwak", "num": 54}, {"name": "Akwakwak", "num": 55}, {"name": "Férosinge", "num": 56}, {"name": "Colossinge", "num": 57}, {"name": "Caninos", "num": 58}, {"name": "Arcanin", "num": 59}, {"name": "Ptitard", "num": 60}, {"name": "Têtarte", "num": 61}, {"name": "Tartard", "num": 62}, {"name": "Abra", "num": 63}, {"name": "Kadabra", "num": 64}, {"name": "Alakazam", "num": 65}, {"name": "Machoc", "num": 66}, {"name": "Machopeur", "num": 67}, {"name": "Mackogneur", "num": 68}, {"name": "Chétiflor", "num": 69}, {"name": "Boustiflor", "num": 70}, {"name": "Empiflor", "num": 71}, {"name": "Tentacool", "num": 72}, {"name": "Tentacruel", "num": 73}, {"name": "Racaillou", "num": 74}, {"name": "Gravalanch", "num": 75}, {"name": "Grolem", "num": 76}, {"name": "Ponyta", "num": 77}, {"name": "Galopa", "num": 78}, {"name": "Ramoloss", "num": 79}, {"name": "Flagadoss", "num": 80}, {"name": "Magnéti", "num": 81}, {"name": "Magnéton", "num": 82}, {"name": "Canarticho", "num": 83}, {"name": "Doduo", "num": 84}, {"name": "Dodrio", "num": 85}, {"name": "Otaria", "num": 86}, {"name": "Lamantine", "num": 87}, {"name": "Tadmorv", "num": 88}, {"name": "Grotadmorv", "num": 89}, {"name": "Kokiyas", "num": 90}, {"name": "Crustabri", "num": 91}, {"name": "Fantominus", "num": 92}, {"name": "Spectrum", "num": 93}, {"name": "Ectoplasma", "num": 94}, {"name": "Onix", "num": 95}, {"name": "Soporifik", "num": 96}, {"name": "Hypnomade", "num": 97}, {"name": "Krabby", "num": 98}, {"name": "Krabboss", "num": 99}, {"name": "Voltorbe", "num": 100}, {"name": "Électrode", "num": 101}, {"name": "Noeunoeuf", "num": 102}, {"name": "Noadkoko", "num": 103}, {"name": "Osselait", "num": 104}, {"name": "Ossatueur", "num": 105}, {"name": "Kicklee", "num": 106}, {"name": "Tygnon", "num": 107}, {"name": "Excelangue", "num": 108}, {"name": "Smogo", "num": 109}, {"name": "Smogogo", "num": 110}, {"name": "Rhinocorne", "num": 111}, {"name": "Rhinoféros", "num": 112}, {"name": "Leveinard", "num": 113}, {"name": "Saquedeneu", "num": 114}, {"name": "Kangourex", "num": 115}, {"name": "Hypotrempe", "num": 116}, {"name": "Hypocéan", "num": 117}, {"name": "Poissirène", "num": 118}, {"name": "Poissoroy", "num": 119}, {"name": "Stari", "num": 120}, {"name": "Staross", "num": 121}, {"name": "M. Mime", "num": 122}, {"name": "Insécateur", "num": 123}, {"name": "Lippoutou", "num": 124}, {"name": "Élektek", "num": 125}, {"name": "Magmar", "num": 126}, {"name": "Scarabrute", "num": 127}, {"name": "Tauros", "num": 128}, {"name": "Magicarpe", "num": 129}, {"name": "Léviator", "num": 130}, {"name": "Lokhlass", "num": 131}, {"name": "Métamorph", "num": 132}, {"name": "Évoli", "num": 133}, {"name": "Aquali", "num": 134}, {"name": "Voltali", "num": 135}, {"name": "Pyroli", "num": 136}, {"name": "Porygon", "num": 137}, {"name": "Amonita", "num": 138}, {"name": "Amonistar", "num": 139}, {"name": "Kabuto", "num": 140}, {"name": "Kabutops", "num": 141}, {"name": "Ptéra", "num": 142}, {"name": "Ronflex", "num": 143}, {"name": "Artikodin", "num": 144}, {"name": "Électhor", "num": 145}, {"name": "Sulfura", "num": 146}, {"name": "Minidraco", "num": 147}, {"name": "Draco", "num": 148}, {"name": "Dracolosse", "num": 149}, {"name": "Mewtwo", "num": 150}, {"name": "Mew", "num": 151}, {"name": "Germignon", "num": 152}, {"name": "Macronium", "num": 153}, {"name": "Méganium", "num": 154}, {"name": "Héricendre", "num": 155}, {"name": "Feurisson", "num": 156}, {"name": "Typhlosion", "num": 157}, {"name": "Kaiminus", "num": 158}, {"name": "Crocrodil", "num": 159}, {"name": "Aligatueur", "num": 160}, {"name": "Fouinette", "num": 161}, {"name": "Fouinar", "num": 162}, {"name": "Hoothoot", "num": 163}, {"name": "Noarfang", "num": 164}, {"name": "Coxy", "num": 165}, {"name": "Coxyclaque", "num": 166}, {"name": "Mimigal", "num": 167}, {"name": "Migalos", "num": 168}, {"name": "Nostenfer", "num": 169}, {"name": "Loupio", "num": 170}, {"name": "Lanturn", "num": 171}, {"name": "Pichu", "num": 172}, {"name": "Mélo", "num": 173}, {"name": "Toudoudou", "num": 174}, {"name": "Togepi", "num": 175}, {"name": "Togetic", "num": 176}, {"name": "Natu", "num": 177}, {"name": "Xatu", "num": 178}, {"name": "Wattouat", "num": 179}, {"name": "Lainergie", "num": 180}, {"name": "Pharamp", "num": 181}, {"name": "Joliflor", "num": 182}, {"name": "Marill", "num": 183}, {"name": "Azumarill", "num": 184}, {"name": "Simularbre", "num": 185}, {"name": "Tarpaud", "num": 186}, {"name": "Granivol", "num": 187}, {"name": "Floravol", "num": 188}, {"name": "Cotovol", "num": 189}, {"name": "Capumain", "num": 190}, {"name": "Tournegrin", "num": 191}, {"name": "Héliatronc", "num": 192}, {"name": "Yanma", "num": 193}, {"name": "Axoloto", "num": 194}, {"name": "Maraiste", "num": 195}, {"name": "Mentali", "num": 196}, {"name": "Noctali", "num": 197}, {"name": "Cornèbre", "num": 198}, {"name": "Roigada", "num": 199}, {"name": "Feuforêve", "num": 200}, {"name": "Zarbi", "num": 201}, {"name": "Qulbutoké", "num": 202}, {"name": "Girafarig", "num": 203}, {"name": "Pomdepik", "num": 204}, {"name": "Foretress", "num": 205}, {"name": "Insolourdo", "num": 206}, {"name": "Scorplane", "num": 207}, {"name": "Steelix", "num": 208}, {"name": "Snubbull", "num": 209}, {"name": "Granbull", "num": 210}, {"name": "Qwilfish", "num": 211}, {"name": "Cizayox", "num": 212}, {"name": "Caratroc", "num": 213}, {"name": "Scarhino", "num": 214}, {"name": "Farfuret", "num": 215}, {"name": "Teddiursa", "num": 216}, {"name": "Ursaring", "num": 217}, {"name": "Limagma", "num": 218}, {"name": "Volcaropod", "num": 219}, {"name": "Marcacrin", "num": 220}, {"name": "Cochignon", "num": 221}, {"name": "Corayon", "num": 222}, {"name": "Rémoraid", "num": 223}, {"name": "Octillery", "num": 224}, {"name": "Cadoizo", "num": 225}, {"name": "Démanta", "num": 226}, {"name": "Airmure", "num": 227}, {"name": "Malosse", "num": 228}, {"name": "Démolosse", "num": 229}, {"name": "Hyporoi", "num": 230}, {"name": "Phanpy", "num": 231}, {"name": "Donphan", "num": 232}, {"name": "Porygon2", "num": 233}, {"name": "Cerfrousse", "num": 234}, {"name": "Queulorior", "num": 235}, {"name": "Debugant", "num": 236}, {"name": "Kapoera", "num": 237}, {"name": "Lippouti", "num": 238}, {"name": "Elekid", "num": 239}, {"name": "Magby", "num": 240}, {"name": "Écrémeuh", "num": 241}, {"name": "Leuphorie", "num": 242}, {"name": "Raikou", "num": 243}, {"name": "Entei", "num": 244}, {"name": "Suicune", "num": 245}, {"name": "Embrylex", "num": 246}, {"name": "Ymphect", "num": 247}, {"name": "Tyranocif", "num": 248}, {"name": "Lugia", "num": 249}, {"name": "Ho-Oh", "num": 250}, {"name": "Celebi", "num": 251}, {"name": "Arcko", "num": 252}, {"name": "Massko", "num": 253}, {"name": "Jungko", "num": 254}, {"name": "Poussifeu", "num": 255}, {"name": "Galifeu", "num": 256}, {"name": "Braségali", "num": 257}, {"name": "Gobou", "num": 258}, {"name": "Flobio", "num": 259}, {"name": "Laggron", "num": 260}, {"name": "Medhyèna", "num": 261}, {"name": "Grahyèna", "num": 262}, {"name": "Zigzaton", "num": 263}, {"name": "Linéon", "num": 264}, {"name": "Chenipotte", "num": 265}, {"name": "Armulys", "num": 266}, {"name": "Charmillon", "num": 267}, {"name": "Blindalys", "num": 268}, {"name": "Papinox", "num": 269}, {"name": "Nénupiot", "num": 270}, {"name": "Lombre", "num": 271}, {"name": "Ludicolo", "num": 272}, {"name": "Grainipiot", "num": 273}, {"name": "Pifeuil", "num": 274}, {"name": "Tengalice", "num": 275}, {"name": "Nirondelle", "num": 276}, {"name": "Hélédelle", "num": 277}, {"name": "Goélise", "num": 278}, {"name": "Bekipan", "num": 279}, {"name": "Tarsal", "num": 280}, {"name": "Kirlia", "num": 281}, {"name": "Gardevoir", "num": 282}, {"name": "Arakdo", "num": 283}, {"name": "Maskadra", "num": 284}, {"name": "Balignon", "num": 285}, {"name": "Chapignon", "num": 286}, {"name": "Parecool", "num": 287}, {"name": "Vigoroth", "num": 288}, {"name": "Monaflèmit", "num": 289}, {"name": "Ningale", "num": 290}, {"name": "Ninjask", "num": 291}, {"name": "Munja", "num": 292}, {"name": "Chuchmur", "num": 293}, {"name": "Ramboum", "num": 294}, {"name": "Brouhabam", "num": 295}, {"name": "Makuhita", "num": 296}, {"name": "Hariyama", "num": 297}, {"name": "Azurill", "num": 298}, {"name": "Tarinor", "num": 299}, {"name": "Skitty", "num": 300}, {"name": "Delcatty", "num": 301}, {"name": "Ténéfix", "num": 302}, {"name": "Mysdibule", "num": 303}, {"name": "Galekid", "num": 304}, {"name": "Galegon", "num": 305}, {"name": "Galeking", "num": 306}, {"name": "Méditikka", "num": 307}, {"name": "Charmina", "num": 308}, {"name": "Dynavolt", "num": 309}, {"name": "Elecsprint", "num": 310}, {"name": "Posipi", "num": 311}, {"name": "Négapi", "num": 312}, {"name": "Muciole", "num": 313}, {"name": "Lumivole", "num": 314}, {"name": "Roselia", "num": 315}, {"name": "Gloupti", "num": 316}, {"name": "Avaltout", "num": 317}, {"name": "Carvanha", "num": 318}, {"name": "Sharpedo", "num": 319}, {"name": "Wailmer", "num": 320}, {"name": "Wailord", "num": 321}, {"name": "Chamallot", "num": 322}, {"name": "Camérupt", "num": 323}, {"name": "Chartor", "num": 324}, {"name": "Spoink", "num": 325}, {"name": "Groret", "num": 326}, {"name": "Spinda", "num": 327}, {"name": "Craknoix", "num": 328}, {"name": "Vibraninf", "num": 329}, {"name": "Libégon", "num": 330}, {"name": "Cacnea", "num": 331}, {"name": "Cacturne", "num": 332}, {"name": "Tylton", "num": 333}, {"name": "Altaria", "num": 334}, {"name": "Mangriff", "num": 335}, {"name": "Séviper", "num": 336}, {"name": "Séléroc", "num": 337}, {"name": "Solaroc", "num": 338}, {"name": "Barloche", "num": 339}, {"name": "Barbicha", "num": 340}, {"name": "Écrapince", "num": 341}, {"name": "Colhomard", "num": 342}, {"name": "Balbuto", "num": 343}, {"name": "Kaorine", "num": 344}, {"name": "Lilia", "num": 345}, {"name": "Vacilys", "num": 346}, {"name": "Anorith", "num": 347}, {"name": "Armaldo", "num": 348}, {"name": "Barpau", "num": 349}, {"name": "Milobellus", "num": 350}, {"name": "Morphéo", "num": 351}, {"name": "Kecleon", "num": 352}, {"name": "Polichombr", "num": 353}, {"name": "Branette", "num": 354}, {"name": "Skelénox", "num": 355}, {"name": "Téraclope", "num": 356}, {"name": "Tropius", "num": 357}, {"name": "Éoko", "num": 358}, {"name": "Absol", "num": 359}, {"name": "Okéoké", "num": 360}, {"name": "Stalgamin", "num": 361}, {"name": "Oniglali", "num": 362}, {"name": "Obalie", "num": 363}, {"name": "Phogleur", "num": 364}, {"name": "Kaimorse", "num": 365}, {"name": "Coquiperl", "num": 366}, {"name": "Serpang", "num": 367}, {"name": "Rosabyss", "num": 368}, {"name": "Relicanth", "num": 369}, {"name": "Lovdisc", "num": 370}, {"name": "Draby", "num": 371}, {"name": "Drackhaus", "num": 372}, {"name": "Drattak", "num": 373}, {"name": "Terhal", "num": 374}, {"name": "Métang", "num": 375}, {"name": "Métalosse", "num": 376}, {"name": "Regirock", "num": 377}, {"name": "Regice", "num": 378}, {"name": "Registeel", "num": 379}, {"name": "Latias", "num": 380}, {"name": "Latios", "num": 381}, {"name": "Kyogre", "num": 382}, {"name": "Groudon", "num": 383}, {"name": "Rayquaza", "num": 384}, {"name": "Jirachi", "num": 385}, {"name": "Deoxys", "num": 386}, {"name": "Tortipouss", "num": 387}, {"name": "Boskara", "num": 388}, {"name": "Torterra", "num": 389}, {"name": "Ouisticram", "num": 390}, {"name": "Chimpenfeu", "num": 391}, {"name": "Simiabraz", "num": 392}, {"name": "Tiplouf", "num": 393}, {"name": "Prinplouf", "num": 394}, {"name": "Pingoléon", "num": 395}, {"name": "Étourmi", "num": 396}, {"name": "Étourvol", "num": 397}, {"name": "Étouraptor", "num": 398}, {"name": "Keunotor", "num": 399}, {"name": "Castorno", "num": 400}, {"name": "Crikzik", "num": 401}, {"name": "Mélokrik", "num": 402}, {"name": "Lixy", "num": 403}, {"name": "Luxio", "num": 404}, {"name": "Luxray", "num": 405}, {"name": "Rozbouton", "num": 406}, {"name": "Roserade", "num": 407}, {"name": "Kranidos", "num": 408}, {"name": "Charkos", "num": 409}, {"name": "Dinoclier", "num": 410}, {"name": "Bastiodon", "num": 411}, {"name": "Cheniti", "num": 412}, {"name": "Cheniselle", "num": 413}, {"name": "Papilord", "num": 414}, {"name": "Apitrini", "num": 415}, {"name": "Apireine", "num": 416}, {"name": "Pachirisu", "num": 417}, {"name": "Mustébouée", "num": 418}, {"name": "Mustéflott", "num": 419}, {"name": "Ceribou", "num": 420}, {"name": "Ceriflor", "num": 421}, {"name": "Sancoki", "num": 422}, {"name": "Tritosor", "num": 423}, {"name": "Capidextre", "num": 424}, {"name": "Baudrive", "num": 425}, {"name": "Grodrive", "num": 426}, {"name": "Laporeille", "num": 427}, {"name": "Lockpin", "num": 428}, {"name": "Magirêve", "num": 429}, {"name": "Corboss", "num": 430}, {"name": "Chaglam", "num": 431}, {"name": "Chaffreux", "num": 432}, {"name": "Korillon", "num": 433}, {"name": "Moufouette", "num": 434}, {"name": "Moufflair", "num": 435}, {"name": "Archéomire", "num": 436}, {"name": "Archéodong", "num": 437}, {"name": "Manzaï", "num": 438}, {"name": "Mime Jr.", "num": 439}, {"name": "Ptiravi", "num": 440}, {"name": "Pijako", "num": 441}, {"name": "Spiritomb", "num": 442}, {"name": "Griknot", "num": 443}, {"name": "Carmache", "num": 444}, {"name": "Carchacrok", "num": 445}, {"name": "Goinfrex", "num": 446}, {"name": "Riolu", "num": 447}, {"name": "Lucario", "num": 448}, {"name": "Hippopotas", "num": 449}, {"name": "Hippodocus", "num": 450}, {"name": "Rapion", "num": 451}, {"name": "Drascore", "num": 452}, {"name": "Cradopaud", "num": 453}, {"name": "Coatox", "num": 454}, {"name": "Vortente", "num": 455}, {"name": "Écayon", "num": 456}, {"name": "Luminéon", "num": 457}, {"name": "Babimanta", "num": 458}, {"name": "Blizzi", "num": 459}, {"name": "Blizzaroi", "num": 460}, {"name": "Dimoret", "num": 461}, {"name": "Magnézone", "num": 462}, {"name": "Coudlangue", "num": 463}, {"name": "Rhinastoc", "num": 464}, {"name": "Bouldeneu", "num": 465}, {"name": "Élekable", "num": 466}, {"name": "Maganon", "num": 467}, {"name": "Togekiss", "num": 468}, {"name": "Yanmega", "num": 469}, {"name": "Phyllali", "num": 470}, {"name": "Givrali", "num": 471}, {"name": "Scorvol", "num": 472}, {"name": "Mammochon", "num": 473}, {"name": "Porygon-Z", "num": 474}, {"name": "Gallame", "num": 475}, {"name": "Tarinorme", "num": 476}, {"name": "Noctunoir", "num": 477}, {"name": "Momartik", "num": 478}, {"name": "Motisma", "num": 479}, {"name": "Créhelf", "num": 480}, {"name": "Créfollet", "num": 481}, {"name": "Créfadet", "num": 482}, {"name": "Dialga", "num": 483}, {"name": "Palkia", "num": 484}, {"name": "Heatran", "num": 485}, {"name": "Regigigas", "num": 486}, {"name": "Giratina", "num": 487}, {"name": "Cresselia", "num": 488}, {"name": "Phione", "num": 489}, {"name": "Manaphy", "num": 490}, {"name": "Darkrai", "num": 491}, {"name": "Shaymin", "num": 492}, {"name": "Arceus", "num": 493}, {"name": "Victini", "num": 494}, {"name": "Vipélierre", "num": 495}, {"name": "Lianaja", "num": 496}, {"name": "Majaspic", "num": 497}, {"name": "Gruikui", "num": 498}, {"name": "Grotichon", "num": 499}, {"name": "Roitiflam", "num": 500}, {"name": "Moustillon", "num": 501}, {"name": "Mateloutre", "num": 502}, {"name": "Clamiral", "num": 503}, {"name": "Ratentif", "num": 504}, {"name": "Miradar", "num": 505}, {"name": "Ponchiot", "num": 506}, {"name": "Ponchien", "num": 507}, {"name": "Mastouffe", "num": 508}, {"name": "Chacripan", "num": 509}, {"name": "Léopardus", "num": 510}, {"name": "Feuillajou", "num": 511}, {"name": "Feuiloutan", "num": 512}, {"name": "Flamajou", "num": 513}, {"name": "Flamoutan", "num": 514}, {"name": "Flotajou", "num": 515}, {"name": "Flotoutan", "num": 516}, {"name": "Munna", "num": 517}, {"name": "Mushana", "num": 518}, {"name": "Poichigeon", "num": 519}, {"name": "Colombeau", "num": 520}, {"name": "Déflaisan", "num": 521}, {"name": "Zébibron", "num": 522}, {"name": "Zéblitz", "num": 523}, {"name": "Nodulithe", "num": 524}, {"name": "Géolithe", "num": 525}, {"name": "Gigalithe", "num": 526}, {"name": "Chovsourir", "num": 527}, {"name": "Rhinolove", "num": 528}, {"name": "Rototaupe", "num": 529}, {"name": "Minotaupe", "num": 530}, {"name": "Nanméouïe", "num": 531}, {"name": "Charpenti", "num": 532}, {"name": "Ouvrifier", "num": 533}, {"name": "Bétochef", "num": 534}, {"name": "Tritonde", "num": 535}, {"name": "Batracné", "num": 536}, {"name": "Crapustule", "num": 537}, {"name": "Judokrak", "num": 538}, {"name": "Karaclée", "num": 539}, {"name": "Larveyette", "num": 540}, {"name": "Couverdure", "num": 541}, {"name": "Manternel", "num": 542}, {"name": "Venipatte", "num": 543}, {"name": "Scobolide", "num": 544}, {"name": "Brutapode", "num": 545}, {"name": "Doudouvet", "num": 546}, {"name": "Farfaduvet", "num": 547}, {"name": "Chlorobule", "num": 548}, {"name": "Fragilady", "num": 549}, {"name": "Bargantua", "num": 550}, {"name": "Mascaïman", "num": 551}, {"name": "Escroco", "num": 552}, {"name": "Crocorible", "num": 553}, {"name": "Darumarond", "num": 554}, {"name": "Darumacho", "num": 555}, {"name": "Maracachi", "num": 556}, {"name": "Crabicoque", "num": 557}, {"name": "Crabaraque", "num": 558}, {"name": "Baggiguane", "num": 559}, {"name": "Baggaïd", "num": 560}, {"name": "Cryptéro", "num": 561}, {"name": "Tutafeh", "num": 562}, {"name": "Tutankafer", "num": 563}, {"name": "Carapagos", "num": 564}, {"name": "Mégapagos", "num": 565}, {"name": "Arkéapti", "num": 566}, {"name": "Aéroptéryx", "num": 567}, {"name": "Miamiasme", "num": 568}, {"name": "Miasmax", "num": 569}, {"name": "Zorua", "num": 570}, {"name": "Zoroark", "num": 571}, {"name": "Chinchidou", "num": 572}, {"name": "Pashmilla", "num": 573}, {"name": "Scrutella", "num": 574}, {"name": "Mesmérella", "num": 575}, {"name": "Sidérella", "num": 576}, {"name": "Nucléos", "num": 577}, {"name": "Méios", "num": 578}, {"name": "Symbios", "num": 579}, {"name": "Couaneton", "num": 580}, {"name": "Lakmécygne", "num": 581}, {"name": "Sorbébé", "num": 582}, {"name": "Sorboul", "num": 583}, {"name": "Sorbouboul", "num": 584}, {"name": "Vivaldaim", "num": 585}, {"name": "Haydaim", "num": 586}, {"name": "Emolga", "num": 587}, {"name": "Carabing", "num": 588}, {"name": "Lançargot", "num": 589}, {"name": "Trompignon", "num": 590}, {"name": "Gaulet", "num": 591}, {"name": "Viskuse", "num": 592}, {"name": "Moyade", "num": 593}, {"name": "Mamanbo", "num": 594}, {"name": "Statitik", "num": 595}, {"name": "Mygavolt", "num": 596}, {"name": "Grindur", "num": 597}, {"name": "Noacier", "num": 598}, {"name": "Tic", "num": 599}, {"name": "Clic", "num": 600}, {"name": "Cliticlic", "num": 601}, {"name": "Anchwatt", "num": 602}, {"name": "Lampéroie", "num": 603}, {"name": "Ohmassacre", "num": 604}, {"name": "Lewsor", "num": 605}, {"name": "Neitram", "num": 606}, {"name": "Funécire", "num": 607}, {"name": "Mélancolux", "num": 608}, {"name": "Lugulabre", "num": 609}, {"name": "Coupenotte", "num": 610}, {"name": "Incisache", "num": 611}, {"name": "Tranchodon", "num": 612}, {"name": "Polarhume", "num": 613}, {"name": "Polagriffe", "num": 614}, {"name": "Hexagel", "num": 615}, {"name": "Escargaume", "num": 616}, {"name": "Limaspeed", "num": 617}, {"name": "Limonde", "num": 618}, {"name": "Kungfouine", "num": 619}, {"name": "Shaofouine", "num": 620}, {"name": "Drakkarmin", "num": 621}, {"name": "Gringolem", "num": 622}, {"name": "Golemastoc", "num": 623}, {"name": "Scalpion", "num": 624}, {"name": "Scalproie", "num": 625}, {"name": "Frison", "num": 626}, {"name": "Furaiglon", "num": 627}, {"name": "Guériaigle", "num": 628}, {"name": "Vostourno", "num": 629}, {"name": "Vaututrice", "num": 630}, {"name": "Aflamanoir", "num": 631}, {"name": "Fermite", "num": 632}, {"name": "Solochi", "num": 633}, {"name": "Diamat", "num": 634}, {"name": "Trioxhydre", "num": 635}, {"name": "Pyronille", "num": 636}, {"name": "Pyrax", "num": 637}, {"name": "Cobaltium", "num": 638}, {"name": "Terrakium", "num": 639}, {"name": "Viridium", "num": 640}, {"name": "Boréas", "num": 641}, {"name": "Fulguris", "num": 642}, {"name": "Reshiram", "num": 643}, {"name": "Zekrom", "num": 644}, {"name": "Démétéros", "num": 645}, {"name": "Kyurem", "num": 646}, {"name": "Keldeo", "num": 647}, {"name": "Meloetta", "num": 648}, {"name": "Genesect", "num": 649}, {"name": "Marisson", "num": 650}, {"name": "Boguérisse", "num": 651}, {"name": "Blindépique", "num": 652}, {"name": "Feunnec", "num": 653}, {"name": "Roussil", "num": 654}, {"name": "Goupelin", "num": 655}, {"name": "Grenousse", "num": 656}, {"name": "Croâporal", "num": 657}, {"name": "Amphinobi", "num": 658}, {"name": "Sapereau", "num": 659}, {"name": "Excavarenne", "num": 660}, {"name": "Passerouge", "num": 661}, {"name": "Braisillon", "num": 662}, {"name": "Flambusard", "num": 663}, {"name": "Lépidonille", "num": 664}, {"name": "Pérégrain", "num": 665}, {"name": "Prismillon", "num": 666}, {"name": "Hélionceau", "num": 667}, {"name": "Némélios", "num": 668}, {"name": "Flabébé", "num": 669}, {"name": "Floette", "num": 670}, {"name": "Florges", "num": 671}, {"name": "Cabriolaine", "num": 672}, {"name": "Chevroum", "num": 673}, {"name": "Pandespiègle", "num": 674}, {"name": "Pandarbare", "num": 675}, {"name": "Couafarel", "num": 676}, {"name": "Psystigri", "num": 677}, {"name": "Mistigrix", "num": 678}, {"name": "Monorpale", "num": 679}, {"name": "Dimoclès", "num": 680}, {"name": "Exagide", "num": 681}, {"name": "Fluvetin", "num": 682}, {"name": "Cocotine", "num": 683}, {"name": "Sucroquin", "num": 684}, {"name": "Cupcanaille", "num": 685}, {"name": "Sepiatop", "num": 686}, {"name": "Sepiatroce", "num": 687}, {"name": "Opermine", "num": 688}, {"name": "Golgopathe", "num": 689}, {"name": "Venalgue", "num": 690}, {"name": "Kravarech", "num": 691}, {"name": "Flingouste", "num": 692}, {"name": "Gamblast", "num": 693}, {"name": "Galvaran", "num": 694}, {"name": "Iguolta", "num": 695}, {"name": "Ptyranidur", "num": 696}, {"name": "Rexillius", "num": 697}, {"name": "Amagara", "num": 698}, {"name": "Dragmara", "num": 699}, {"name": "Nymphali", "num": 700}, {"name": "Brutalibré", "num": 701}, {"name": "Dedenne", "num": 702}, {"name": "Strassie", "num": 703}, {"name": "Mucuscule", "num": 704}, {"name": "Colimucus", "num": 705}, {"name": "Muplodocus", "num": 706}, {"name": "Trousselin", "num": 707}, {"name": "Brocélôme", "num": 708}, {"name": "Desséliande", "num": 709}, {"name": "Pitrouille", "num": 710}, {"name": "Banshitrouye", "num": 711}, {"name": "Grelaçon", "num": 712}, {"name": "Séracrawl", "num": 713}, {"name": "Sonistrelle", "num": 714}, {"name": "Bruyverne", "num": 715}, {"name": "Xerneas", "num": 716}, {"name": "Yveltal", "num": 717}, {"name": "Zygarde", "num": 718}, {"name": "Diancie", "num": 719}, {"name": "Hoopa", "num": 720}, {"name": "Volcanion", "num": 721}, {"name": "Brindibou", "num": 722}, {"name": "Efflèche", "num": 723}, {"name": "Archéduc", "num": 724}, {"name": "Flamiaou", "num": 725}, {"name": "Matoufeu", "num": 726}, {"name": "Félinferno", "num": 727}, {"name": "Otaquin", "num": 728}, {"name": "Otarlette", "num": 729}, {"name": "Oratoria", "num": 730}, {"name": "Picassaut", "num": 731}, {"name": "Piclairon", "num": 732}, {"name": "Bazoucan", "num": 733}, {"name": "Manglouton", "num": 734}, {"name": "Argouste", "num": 735}, {"name": "Larvibule", "num": 736}, {"name": "Chrysapile", "num": 737}, {"name": "Lucanon", "num": 738}, {"name": "Crabagarre", "num": 739}, {"name": "Crabominable", "num": 740}, {"name": "Plumeline", "num": 741}, {"name": "Bombydou", "num": 742}, {"name": "Rubombelle", "num": 743}, {"name": "Rocabot", "num": 744}, {"name": "Lougaroc", "num": 745}, {"name": "Froussardine", "num": 746}, {"name": "Vorastérie", "num": 747}, {"name": "Prédastérie", "num": 748}, {"name": "Tiboudet", "num": 749}, {"name": "Bourrinos", "num": 750}, {"name": "Araqua", "num": 751}, {"name": "Tarenbulle", "num": 752}, {"name": "Mimantis", "num": 753}, {"name": "Floramantis", "num": 754}, {"name": "Spododo", "num": 755}, {"name": "Lampignon", "num": 756}, {"name": "Tritox", "num": 757}, {"name": "Malamandre", "num": 758}, {"name": "Nounourson", "num": 759}, {"name": "Chelours", "num": 760}, {"name": "Croquine", "num": 761}, {"name": "Candine", "num": 762}, {"name": "Sucreine", "num": 763}, {"name": "Guérilande", "num": 764}, {"name": "Gouroutan", "num": 765}, {"name": "Quartermac", "num": 766}, {"name": "Sovkipou", "num": 767}, {"name": "Sarmurai", "num": 768}, {"name": "Bacabouh", "num": 769}, {"name": "Trépassable", "num": 770}, {"name": "Concombaffe", "num": 771}, {"name": "Type:0", "num": 772}, {"name": "Silvallié", "num": 773}, {"name": "Météno", "num": 774}, {"name": "Dodoala", "num": 775}, {"name": "Boumata", "num": 776}, {"name": "Togedemaru", "num": 777}, {"name": "Mimiqui", "num": 778}, {"name": "Denticrisse", "num": 779}, {"name": "Draïeul", "num": 780}, {"name": "Sinistrail", "num": 781}, {"name": "Bébécaille", "num": 782}, {"name": "Écaïd", "num": 783}, {"name": "Ékaïser", "num": 784}, {"name": "Tokorico", "num": 785}, {"name": "Tokopiyon", "num": 786}, {"name": "Tokotoro", "num": 787}, {"name": "Tokopisco", "num": 788}, {"name": "Cosmog", "num": 789}, {"name": "Cosmovum", "num": 790}, {"name": "Solgaleo", "num": 791}, {"name": "Lunala", "num": 792}, {"name": "Zéroïd", "num": 793}, {"name": "Mouscoto", "num": 794}, {"name": "Cancrelove", "num": 795}, {"name": "Câblifère", "num": 796}, {"name": "Bamboiselle", "num": 797}, {"name": "Katagami", "num": 798}, {"name": "Engloutyran", "num": 799}, {"name": "Necrozma", "num": 800}, {"name": "Magearna", "num": 801}, {"name": "Marshadow", "num": 802}, {"name": "Vémini", "num": 803}, {"name": "Mandrillon", "num": 804}, {"name": "Ama-Ama", "num": 805}, {"name": "Pierroteknik", "num": 806}, {"name": "Zeraora", "num": 807}, {"name": "Meltan", "num": 808}, {"name": "Melmetal", "num": 809}, {"name": "Ouistempo", "num": 810}, {"name": "Badabouin", "num": 811}, {"name": "Gorythmic", "num": 812}, {"name": "Flambino", "num": 813}, {"name": "Lapyro", "num": 814}, {"name": "Pyrobut", "num": 815}, {"name": "Larméléon", "num": 816}, {"name": "Arrozard", "num": 817}, {"name": "Lézargus", "num": 818}, {"name": "Rongourmand", "num": 819}, {"name": "Rongrigou", "num": 820}, {"name": "Minisange", "num": 821}, {"name": "Bleuseille", "num": 822}, {"name": "Corvaillus", "num": 823}, {"name": "Larvadar", "num": 824}, {"name": "Coléodôme", "num": 825}, {"name": "Astronelle", "num": 826}, {"name": "Goupilou", "num": 827}, {"name": "Roublenard", "num": 828}, {"name": "Tournicoton", "num": 829}, {"name": "Blancoton", "num": 830}, {"name": "Moumouton", "num": 831}, {"name": "Moumouflon", "num": 832}, {"name": "Khélocrok", "num": 833}, {"name": "Torgamord", "num": 834}, {"name": "Voltoutou", "num": 835}, {"name": "Fulgudog", "num": 836}, {"name": "Charbi", "num": 837}, {"name": "Wagomine", "num": 838}, {"name": "Monthracite", "num": 839}, {"name": "Verpom", "num": 840}, {"name": "Pomdrapi", "num": 841}, {"name": "Dratatin", "num": 842}, {"name": "Dunaja", "num": 843}, {"name": "Dunaconda", "num": 844}, {"name": "Nigosier", "num": 845}, {"name": "Embrochet", "num": 846}, {"name": "Hastacuda", "num": 847}, {"name": "Toxizap", "num": 848}, {"name": "Salarsen", "num": 849}, {"name": "Grillepattes", "num": 850}, {"name": "Scolocendre", "num": 851}, {"name": "Poulpaf", "num": 852}, {"name": "Krakos", "num": 853}, {"name": "Théffroi", "num": 854}, {"name": "Polthégeist", "num": 855}, {"name": "Bibichut", "num": 856}, {"name": "Chapotus", "num": 857}, {"name": "Sorcilence", "num": 858}, {"name": "Grimalin", "num": 859}, {"name": "Fourbelin", "num": 860}, {"name": "Angoliath", "num": 861}, {"name": "Ixon", "num": 862}, {"name": "Berserkatt", "num": 863}, {"name": "Corayôme", "num": 864}, {"name": "Palarticho", "num": 865}, {"name": "M. Glaquette", "num": 866}, {"name": "Tutétékri", "num": 867}, {"name": "Crèmy", "num": 868}, {"name": "Charmilly", "num": 869}, {"name": "Hexadron", "num": 870}, {"name": "Wattapik", "num": 871}, {"name": "Frissonille", "num": 872}, {"name": "Beldeneige", "num": 873}, {"name": "Dolman", "num": 874}, {"name": "Bekaglaçon", "num": 875}, {"name": "Wimessir", "num": 876}, {"name": "Morpeko", "num": 877}, {"name": "Charibari", "num": 878}, {"name": "Pachyradjah", "num": 879}, {"name": "Galvagon", "num": 880}, {"name": "Galvagla", "num": 881}, {"name": "Hydragon", "num": 882}, {"name": "Hydragla", "num": 883}, {"name": "Duralugon", "num": 884}, {"name": "Fantyrm", "num": 885}, {"name": "Dispareptil", "num": 886}, {"name": "Lanssorien", "num": 887}, {"name": "Zacian", "num": 888}, {"name": "Zamazenta", "num": 889}, {"name": "Éthernatos", "num": 890}, {"name": "Wushours", "num": 891}, {"name": "Shifours", "num": 892}, {"name": "Zarude", "num": 893}, {"name": "Regieleki", "num": 894}, {"name": "Regidrago", "num": 895}, {"name": "Blizzeval", "num": 896}, {"name": "Spectreval", "num": 897}, {"name": "Sylveroy", "num": 898}, {"name": "Cerbyllin", "num": 899}, {"name": "Hachécateur", "num": 900}, {"name": "Ursaking", "num": 901}, {"name": "Paragruel", "num": 902}, {"name": "Farfurex", "num": 903}, {"name": "Qwilpik", "num": 904}, {"name": "Amovénus", "num": 905}, {"name": "Poussacha", "num": 906}, {"name": "Matourgeon", "num": 907}, {"name": "Miascarade", "num": 908}, {"name": "Chochodile", "num": 909}, {"name": "Crocogril", "num": 910}, {"name": "Flâmigator", "num": 911}, {"name": "Coiffeton", "num": 912}, {"name": "Canarbello", "num": 913}, {"name": "Palmaval", "num": 914}, {"name": "Gourmelet", "num": 915}, {"name": "Fragroin", "num": 916}, {"name": "Tissenboule", "num": 917}, {"name": "Filentrappe", "num": 918}, {"name": "Lilliterelle", "num": 919}, {"name": "Gambex", "num": 920}, {"name": "Pohm", "num": 921}, {"name": "Pohmotte", "num": 922}, {"name": "Pohmarmotte", "num": 923}, {"name": "Compagnol", "num": 924}, {"name": "Famignol", "num": 925}, {"name": "Pâtachiot", "num": 926}, {"name": "Briochien", "num": 927}, {"name": "Olivini", "num": 928}, {"name": "Olivado", "num": 929}, {"name": "Arboliva", "num": 930}, {"name": "Tapatoès", "num": 931}, {"name": "Selutin", "num": 932}, {"name": "Amassel", "num": 933}, {"name": "Giganssel", "num": 934}, {"name": "Charbambin", "num": 935}, {"name": "Carmadura", "num": 936}, {"name": "Malvalame", "num": 937}, {"name": "Têtampoule", "num": 938}, {"name": "Ampibidou", "num": 939}, {"name": "Zapétrel", "num": 940}, {"name": "Fulgulairo", "num": 941}, {"name": "Grondogue", "num": 942}, {"name": "Dogrino", "num": 943}, {"name": "Gribouraigne", "num": 944}, {"name": "TagTag", "num": 945}, {"name": "Virovent", "num": 946}, {"name": "Virevorreur", "num": 947}, {"name": "Terracool", "num": 948}, {"name": "Terracruel", "num": 949}, {"name": "Craparoi", "num": 950}, {"name": "Pimito", "num": 951}, {"name": "Scovilain", "num": 952}, {"name": "Léboulérou", "num": 953}, {"name": "Bérasca", "num": 954}, {"name": "Flotillon", "num": 955}, {"name": "Cléopsytra", "num": 956}, {"name": "Forgerette", "num": 957}, {"name": "Forgella", "num": 958}, {"name": "Forgelina", "num": 959}, {"name": "Taupikeau", "num": 960}, {"name": "Triopikeau", "num": 961}, {"name": "Lestombaile", "num": 962}, {"name": "Dofin", "num": 963}, {"name": "Superdofin", "num": 964}, {"name": "Vrombi", "num": 965}, {"name": "Vrombotor", "num": 966}, {"name": "Motorizard", "num": 967}, {"name": "Ferdeter", "num": 968}, {"name": "Germéclat", "num": 969}, {"name": "Floréclat", "num": 970}, {"name": "Toutombe", "num": 971}, {"name": "Tomberro", "num": 972}, {"name": "Flamenroule", "num": 973}, {"name": "Piétacé", "num": 974}, {"name": "Balbalèze", "num": 975}, {"name": "Délestin", "num": 976}, {"name": "Oyacata", "num": 977}, {"name": "Nigirigon", "num": 978}, {"name": "Courrousinge", "num": 979}, {"name": "Terraiste", "num": 980}, {"name": "Farigiraf", "num": 981}, {"name": "Deusolourdo", "num": 982}, {"name": "Scalpereur", "num": 983}, {"name": "Fort-Ivoire", "num": 984}, {"name": "Hurle-Queue", "num": 985}, {"name": "Fongus-Furie", "num": 986}, {"name": "Flotte-Mèche", "num": 987}, {"name": "Rampe-Ailes", "num": 988}, {"name": "Pelage-Sablé", "num": 989}, {"name": "Roue-de-Fer", "num": 990}, {"name": "Hotte-de-Fer", "num": 991}, {"name": "Paume-de-Fer", "num": 992}, {"name": "Têtes-de-Fer", "num": 993}, {"name": "Mitede-Fer", "num": 994}, {"name": "Épine-Fer", "num": 995}, {"name": "Frigodo", "num": 996}, {"name": "Cryodo", "num": 997}, {"name": "Glaivodo", "num": 998}, {"name": "Mordudor", "num": 999}, {"name": "Gromago", "num": 1000}, {"name": "Chongjian", "num": 1001}, {"name": "Baojian", "num": 1002}, {"name": "Dinglu", "num": 1003}, {"name": "Yuyu", "num": 1004}, {"name": "Rugit-Lune", "num": 1005}, {"name": "Garde-de-Fer", "num": 1006}, {"name": "Koraidon", "num": 1007}, {"name": "Miraidon", "num": 1008}, {"name": "Serpente-Eau", "num": 1009}, {"name": "Vert-de-Fer", "num": 1010}, {"name": "Pomdramour", "num": 1011}, {"name": "Poltchageist", "num": 1012}, {"name": "Théffroyable", "num": 1013}, {"name": "Félicanis", "num": 1014}, {"name": "Fortusimia", "num": 1015}, {"name": "Favianos", "num": 1016}, {"name": "Ogerpon", "num": 1017}, {"name": "Pondralugon", "num": 1018}, {"name": "Pomdorochi", "num": 1019}, {"name": "Feu-Perçant", "num": 1020}, {"name": "Ire-Foudre", "num": 1021}, {"name": "Roc-de-Fer", "num": 1022}, {"name": "Chef-de-Fer", "num": 1023}, {"name": "Terapagos", "num": 1024}, {"name": "Pêchaminus", "num": 1025}];

const root = document.getElementById('root');
root.innerHTML = `
  <div id="pokedex-app">
    <div class="pokedex-topbar">
      <div class="pokedex-titlebar">
        <button id="pokedex-back" class="pokedex-back" title="Retour">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <div class="pokedex-lens"></div>
        <div class="pokedex-title">Pokédex</div>
      </div>
    </div>
    <div class="pokedex-panel">
      <input id="pokedex-search" class="pokedex-search" type="text" placeholder="Rechercher un Pokémon..." />
      <div class="pokedex-controls">
        <div class="pokedex-sort-btns">
          <button id="pokedex-sort-num" class="pokedex-sort-btn active">N° 1-1025</button>
          <button id="pokedex-sort-az" class="pokedex-sort-btn">A-Z</button>
        </div>
        <div class="pokedex-filter-btns">
          <button id="pokedex-filter-all" class="pokedex-filter-btn active">Tous</button>
          <button id="pokedex-filter-have" class="pokedex-filter-btn">Possédés</button>
          <button id="pokedex-filter-upgrade" class="pokedex-filter-btn">À améliorer</button>
          <button id="pokedex-filter-missing" class="pokedex-filter-btn">Manquants</button>
        </div>
      </div>
      <div class="pokedex-legend">
        <div class="pokedex-legend-item"><div class="pokedex-legend-dot have"></div>Possédée</div>
        <div class="pokedex-legend-item"><div class="pokedex-legend-dot upgrade"></div>À améliorer</div>
      </div>
      <div class="pokedex-counts" id="pokedex-counts"></div>
    </div>
    <div class="pokedex-list-wrap">
      <div id="pokedex-loading" class="pokedex-loading">Chargement...</div>
      <ul id="pokedex-list" class="pokedex-list"></ul>
    </div>
  </div>
`;

let haveSet = new Set();
let upgradeSet = new Set();
let sortMode = 'num'; // 'num' or 'az'
let filterMode = 'all'; // 'all' | 'have' | 'upgrade' | 'missing'
let searchTerm = '';

const listEl = document.getElementById('pokedex-list');
const countsEl = document.getElementById('pokedex-counts');
const loadingEl = document.getElementById('pokedex-loading');
const searchEl = document.getElementById('pokedex-search');
const btnNum = document.getElementById('pokedex-sort-num');
const btnAz = document.getElementById('pokedex-sort-az');
const btnFilterAll = document.getElementById('pokedex-filter-all');
const btnFilterHave = document.getElementById('pokedex-filter-have');
const btnFilterUpgrade = document.getElementById('pokedex-filter-upgrade');
const btnFilterMissing = document.getElementById('pokedex-filter-missing');
const btnBack = document.getElementById('pokedex-back');

function normalize(str) {
  return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function checkIcon() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>`;
}

function render() {
  let items = POKEMON.slice();

  if (searchTerm.trim()) {
    const term = normalize(searchTerm.trim());
    items = items.filter(p => normalize(p.name).includes(term) || String(p.num).includes(term));
  }

  if (filterMode === 'have') {
    items = items.filter(p => haveSet.has(p.num));
  } else if (filterMode === 'upgrade') {
    items = items.filter(p => upgradeSet.has(p.num));
  } else if (filterMode === 'missing') {
    items = items.filter(p => !haveSet.has(p.num));
  }

  if (sortMode === 'az') {
    items.sort((a, b) => normalize(a.name).localeCompare(normalize(b.name), 'fr'));
  } else {
    items.sort((a, b) => a.num - b.num);
  }

  const haveCount = POKEMON.filter(p => haveSet.has(p.num)).length;
  const upgradeCount = POKEMON.filter(p => upgradeSet.has(p.num)).length;
  countsEl.innerHTML = `
    <span><b>${haveCount}</b> / ${POKEMON.length} possédés</span>
    <span><b>${upgradeCount}</b> à améliorer</span>
  `;

  if (items.length === 0) {
    listEl.innerHTML = '<div class="pokedex-empty">Aucun Pokémon trouvé</div>';
    return;
  }

  listEl.innerHTML = items.map(p => {
    const isHave = haveSet.has(p.num);
    const isUpgrade = upgradeSet.has(p.num);
    return `
      <li class="pokedex-row ${isHave ? 'have' : ''}" data-num="${p.num}">
        <div class="pokedex-checkbox have ${isHave ? 'checked' : ''}" data-action="have" data-num="${p.num}" title="Possédée">
          ${checkIcon()}
        </div>
        <div class="pokedex-checkbox upgrade ${isUpgrade ? 'checked' : ''}" data-action="upgrade" data-num="${p.num}" title="À améliorer">
          ${checkIcon()}
        </div>
        <div class="pokedex-num">#${String(p.num).padStart(4, '0')}</div>
        <div class="pokedex-name">${p.name}</div>
      </li>
    `;
  }).join('');
}

function persist() {
  try {
    localStorage.setItem('have-pokemon', JSON.stringify(Array.from(haveSet)));
    localStorage.setItem('upgrade-pokemon', JSON.stringify(Array.from(upgradeSet)));
  } catch (e) {
    console.error('Erreur de sauvegarde', e);
  }
}

function toggle(action, num) {
  if (action === 'have') {
    if (haveSet.has(num)) haveSet.delete(num); else haveSet.add(num);
  } else if (action === 'upgrade') {
    if (upgradeSet.has(num)) upgradeSet.delete(num); else upgradeSet.add(num);
  }
  render();
  persist();
}

listEl.addEventListener('click', (e) => {
  const box = e.target.closest('.pokedex-checkbox');
  if (!box) return;
  const action = box.dataset.action;
  const num = parseInt(box.dataset.num, 10);
  toggle(action, num);
});

searchEl.addEventListener('input', (e) => {
  searchTerm = e.target.value;
  render();
});

btnNum.addEventListener('click', () => {
  sortMode = 'num';
  btnNum.classList.add('active');
  btnAz.classList.remove('active');
  render();
});

btnAz.addEventListener('click', () => {
  sortMode = 'az';
  btnAz.classList.add('active');
  btnNum.classList.remove('active');
  render();
});

function setFilter(mode) {
  filterMode = mode;
  [btnFilterAll, btnFilterHave, btnFilterUpgrade, btnFilterMissing].forEach(b => b.classList.remove('active'));
  if (mode === 'all') btnFilterAll.classList.add('active');
  if (mode === 'have') btnFilterHave.classList.add('active');
  if (mode === 'upgrade') btnFilterUpgrade.classList.add('active');
  if (mode === 'missing') btnFilterMissing.classList.add('active');
  render();
}

btnFilterAll.addEventListener('click', () => setFilter('all'));
btnFilterHave.addEventListener('click', () => setFilter('have'));
btnFilterUpgrade.addEventListener('click', () => setFilter('upgrade'));
btnFilterMissing.addEventListener('click', () => setFilter('missing'));

btnBack.addEventListener('click', () => {
  if (window.history.length > 1) {
    window.history.back();
  }
});

function init() {
  try {
    const haveResult = localStorage.getItem('have-pokemon');
    if (haveResult) {
      haveSet = new Set(JSON.parse(haveResult));
    }
  } catch (e) {
    // pas encore de données
  }
  try {
    const upgradeResult = localStorage.getItem('upgrade-pokemon');
    if (upgradeResult) {
      upgradeSet = new Set(JSON.parse(upgradeResult));
    }
  } catch (e) {
    // pas encore de données
  }
  // Migration depuis l'ancienne version (une seule case "checked-pokemon")
  if (haveSet.size === 0 && upgradeSet.size === 0) {
    try {
      const oldResult = localStorage.getItem('checked-pokemon');
      if (oldResult) {
        haveSet = new Set(JSON.parse(oldResult));
        localStorage.setItem('have-pokemon', JSON.stringify(Array.from(haveSet)));
      }
    } catch (e) {
      // rien à migrer
    }
  }
  loadingEl.style.display = 'none';
  render();
}

init();
