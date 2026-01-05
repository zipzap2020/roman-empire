// search.js

// Search database
const searchDatabase = [
    { name: 'Eastern Roman Military', type: 'page', url: 'istok-vojska.html', empire: 'Eastern' },
    { name: 'Eastern Roman Rulers', type: 'page', url: 'istok-vladar.html', empire: 'Eastern' },
    { name: 'Eastern Roman Architecture', type: 'page', url: 'istok-arhitektura.html', empire: 'Eastern' },
    { name: 'Eastern Roman Religion', type: 'page', url: 'istok-religija.html', empire: 'Eastern' },
    { name: 'Western Roman Military', type: 'page', url: 'zapad-vojska.html', empire: 'Western' },
    { name: 'Western Roman Architecture', type: 'page', url: 'zapad-arhitektura.html', empire: 'Western' },
    { name: 'Western Roman Rulers', type: 'page', url: 'zapad-vladar.html', empire: 'Western' },
    { name: 'Western Roman Religion', type: 'page', url: 'zapad-religija.html', empire: 'Western' },
    { name: 'Ancient Roman Military', type: 'page', url: 'ujedinjeno-vojska.html', empire: 'Ancient' },
    { name: 'Ancient Roman Rulers', type: 'page', url: 'ujedinjeno-vladari.html', empire: 'Ancient' },
    { name: 'Ancient Roman Architecture', type: 'page', url: 'ujedinjeno-arhitektura.html', empire: 'Ancient' },
    { name: 'Ancient Roman Religion', type: 'page', url: 'ujedinjeno-religija.html', empire: 'Ancient' },

    // ========== EASTERN ROMAN RULERS ==========
    // Constantinian dynasty (306–363)
    { name: 'Constantine I', type: 'ruler', period: '306-337 CE', url: 'Constantine_I', empire: 'Eastern' },
    { name: 'Constantius II', type: 'ruler', period: '337-361 CE', url: 'Constantius_II', empire: 'Eastern' },
    { name: 'Julian', type: 'ruler', period: '361-363 CE', url: 'Julian', empire: 'Eastern' },
    { name: 'Jovian', type: 'ruler', period: '363-364 CE', url: 'Jovian', empire: 'Eastern' },

    // Valentinianic dynasty (364–392)
    { name: 'Valentinian I', type: 'ruler', period: '364-375 CE', url: 'Valentinian_I', empire: 'Eastern' },
    { name: 'Valens', type: 'ruler', period: '364-378 CE', url: 'Valens', empire: 'Eastern' },
    { name: 'Procopius', type: 'ruler', period: '365-366 CE', url: 'Procopius', empire: 'Eastern' },

    // Theodosian dynasty (379–457)
    { name: 'Theodosius I', type: 'ruler', period: '379-395 CE', url: 'Theodosius_I', empire: 'Eastern' },
    { name: 'Arcadius', type: 'ruler', period: '395-408 CE', url: 'Arcadius', empire: 'Eastern' },
    { name: 'Theodosius II', type: 'ruler', period: '408-450 CE', url: 'Theodosius_II', empire: 'Eastern' },
    { name: 'Marcian', type: 'ruler', period: '450-457 CE', url: 'Marcian', empire: 'Eastern' },

    // Leonid dynasty (457–518)
    { name: 'Leo I', type: 'ruler', period: '457-474 CE', url: 'Leo_I', empire: 'Eastern' },
    { name: 'Leo II', type: 'ruler', period: '474 CE', url: 'Leo_II', empire: 'Eastern' },
    { name: 'Zeno', type: 'ruler', period: '474-475, 476-491 CE', url: 'Zeno', empire: 'Eastern' },
    { name: 'Basiliscus', type: 'ruler', period: '475-476 CE', url: 'Basiliscus', empire: 'Eastern' },
    { name: 'Anastasius I', type: 'ruler', period: '491-518 CE', url: 'Anastasius_I', empire: 'Eastern' },

    // Justinian dynasty (518–602)
    { name: 'Justin I', type: 'ruler', period: '518-527 CE', url: 'Justin I', empire: 'Eastern' },
    { name: 'Justinian I', type: 'ruler', period: '527-565 CE', url: 'Justinian I', empire: 'Eastern' },
    { name: 'Justin II', type: 'ruler', period: '565-578 CE', url: 'Justin II', empire: 'Eastern' },
    { name: 'Tiberius II', type: 'ruler', period: '578-582 CE', url: 'Tiberius II', empire: 'Eastern' },
    { name: 'Maurice', type: 'ruler', period: '582-602 CE', url: 'Maurice', empire: 'Eastern' },
    { name: 'Phocas', type: 'ruler', period: '602-610 CE', url: 'Phocas', empire: 'Eastern' },

    // Heraclian dynasty (610–695)
    { name: 'Heraclius', type: 'ruler', period: '610-641 CE', url: 'Heraclius', empire: 'Eastern' },
    { name: 'Heraclius Constantine', type: 'ruler', period: '641 CE', url: 'Heraclius Constantine', empire: 'Eastern' },
    { name: 'Heraclonas', type: 'ruler', period: '641 CE', url: 'Heraclonas', empire: 'Eastern' },
    { name: 'Constans II', type: 'ruler', period: '641-668 CE', url: 'Constans II', empire: 'Eastern' },
    { name: 'Constantine IV', type: 'ruler', period: '668-685 CE', url: 'Constantine IV', empire: 'Eastern' },
    { name: 'Justinian II', type: 'ruler', period: '685-695, 705-711 CE', url: 'Justinian II', empire: 'Eastern' },

    // Twenty Years' Anarchy (695–717)
    { name: 'Leontius', type: 'ruler', period: '695-698 CE', url: 'Leontius', empire: 'Eastern' },
    { name: 'Tiberius III', type: 'ruler', period: '698-705 CE', url: 'Tiberius III', empire: 'Eastern' },
    { name: 'Philippicus', type: 'ruler', period: '711-713 CE', url: 'Philippicus', empire: 'Eastern' },
    { name: 'Anastasius II', type: 'ruler', period: '713-715 CE', url: 'Anastasius II', empire: 'Eastern' },
    { name: 'Theodosius III', type: 'ruler', period: '715-717 CE', url: 'Theodosius III', empire: 'Eastern' },

    // Isaurian dynasty (717–802)
    { name: 'Leo III', type: 'ruler', period: '717-741 CE', url: 'Leo III', empire: 'Eastern' },
    { name: 'Constantine V', type: 'ruler', period: '741-775 CE', url: 'Constantine V', empire: 'Eastern' },
    { name: 'Artabasdos', type: 'ruler', period: '741-743 CE', url: 'Artabasdos', empire: 'Eastern' },
    { name: 'Leo IV', type: 'ruler', period: '775-780 CE', url: 'Leo IV', empire: 'Eastern' },
    { name: 'Constantine VI', type: 'ruler', period: '780-797 CE', url: 'Constantine VI', empire: 'Eastern' },
    { name: 'Irene', type: 'ruler', period: '797-802 CE', url: 'Irene', empire: 'Eastern' },

    // Nikephorian dynasty (802–813)
    { name: 'Nikephoros I', type: 'ruler', period: '802-811 CE', url: 'Nikephoros I', empire: 'Eastern' },
    { name: 'Staurakios', type: 'ruler', period: '811 CE', url: 'Staurakios', empire: 'Eastern' },
    { name: 'Michael I Rangabe', type: 'ruler', period: '811-813 CE', url: 'Michael I Rangabe', empire: 'Eastern' },
    { name: 'Leo V', type: 'ruler', period: '813-820 CE', url: 'Leo V', empire: 'Eastern' },

    // Amorian dynasty (820–867)
    { name: 'Michael II', type: 'ruler', period: '820-829 CE', url: 'Michael II', empire: 'Eastern' },
    { name: 'Theophilos', type: 'ruler', period: '829-842 CE', url: 'Theophilos', empire: 'Eastern' },
    { name: 'Michael III', type: 'ruler', period: '842-867 CE', url: 'Michael III', empire: 'Eastern' },

    // Macedonian dynasty (867–1056)
    { name: 'Basil I', type: 'ruler', period: '867-886 CE', url: 'Basil I', empire: 'Eastern' },
    { name: 'Leo VI', type: 'ruler', period: '886-912 CE', url: 'Leo VI', empire: 'Eastern' },
    { name: 'Alexander', type: 'ruler', period: '912-913 CE', url: 'Alexander', empire: 'Eastern' },
    { name: 'Constantine VII Porphyrogenitus', type: 'ruler', period: '913-959 CE', url: 'Constantine VII Porphyrogenitus', empire: 'Eastern' },
    { name: 'Romanos I Lekapenos', type: 'ruler', period: '920-944 CE', url: 'Romanos I Lekapenos', empire: 'Eastern' },
    { name: 'Romanos II', type: 'ruler', period: '959-963 CE', url: 'Romanos II', empire: 'Eastern' },
    { name: 'Nikephoros II Phokas', type: 'ruler', period: '963-969 CE', url: 'Nikephoros II Phokas', empire: 'Eastern' },
    { name: 'John I Tzimiskes', type: 'ruler', period: '969-976 CE', url: 'John I Tzimiskes', empire: 'Eastern' },
    { name: 'Basil II', type: 'ruler', period: '976-1025 CE', url: 'Basil II', empire: 'Eastern' },
    { name: 'Constantine VIII', type: 'ruler', period: '1025-1028 CE', url: 'Constantine VIII', empire: 'Eastern' },
    { name: 'Romanos III Argyros', type: 'ruler', period: '1028-1034 CE', url: 'Romanos III Argyros', empire: 'Eastern' },
    { name: 'Michael IV', type: 'ruler', period: '1034-1041 CE', url: 'Michael IV', empire: 'Eastern' },
    { name: 'Michael V', type: 'ruler', period: '1041-1042 CE', url: 'Michael V', empire: 'Eastern' },
    { name: 'Zoë Porphyrogenita', type: 'ruler', period: '1042 CE', url: 'Zoë Porphyrogenita', empire: 'Eastern' },
    { name: 'Theodora Porphyrogenita', type: 'ruler', period: '1042, 1055-1056 CE', url: 'Theodora Porphyrogenita', empire: 'Eastern' },
    { name: 'Constantine IX Monomachos', type: 'ruler', period: '1042-1055 CE', url: 'Constantine IX Monomachos', empire: 'Eastern' },
    { name: 'Michael VI Bringas', type: 'ruler', period: '1056-1057 CE', url: 'Michael VI Bringas', empire: 'Eastern' },
    { name: 'Isaac I Komnenos', type: 'ruler', period: '1057-1059 CE', url: 'Isaac I Komnenos', empire: 'Eastern' },

    // Doukas dynasty (1059–1078)
    { name: 'Constantine X Doukas', type: 'ruler', period: '1059-1067 CE', url: 'Constantine X Doukas', empire: 'Eastern' },
    { name: 'Eudokia Makrembolitissa', type: 'ruler', period: '1067 CE', url: 'Eudokia Makrembolitissa', empire: 'Eastern' },
    { name: 'Romanos IV Diogenes', type: 'ruler', period: '1068-1071 CE', url: 'Romanos IV Diogenes', empire: 'Eastern' },
    { name: 'Michael VII Doukas', type: 'ruler', period: '1071-1078 CE', url: 'Michael VII Doukas', empire: 'Eastern' },
    { name: 'Nikephoros III Botaneiates', type: 'ruler', period: '1078-1081 CE', url: 'Nikephoros III Botaneiates', empire: 'Eastern' },

    // Komnenos dynasty (1081–1185)
    { name: 'Alexios I Komnenos', type: 'ruler', period: '1081-1118 CE', url: 'Alexios I Komnenos', empire: 'Eastern' },
    { name: 'John II Komnenos', type: 'ruler', period: '1118-1143 CE', url: 'John II Komnenos', empire: 'Eastern' },
    { name: 'Manuel I Komnenos', type: 'ruler', period: '1143-1180 CE', url: 'Manuel I Komnenos', empire: 'Eastern' },
    { name: 'Alexios II Komnenos', type: 'ruler', period: '1180-1183 CE', url: 'Alexios II Komnenos', empire: 'Eastern' },
    { name: 'Andronikos I Komnenos', type: 'ruler', period: '1183-1185 CE', url: 'Andronikos I Komnenos', empire: 'Eastern' },

    // Angelos dynasty (1185–1204)
    { name: 'Isaac II Angelos', type: 'ruler', period: '1185-1195, 1203-1204 CE', url: 'Isaac II Angelos', empire: 'Eastern' },
    { name: 'Alexios III Angelos', type: 'ruler', period: '1195-1203 CE', url: 'Alexios III Angelos', empire: 'Eastern' },
    { name: 'Alexios IV Angelos', type: 'ruler', period: '1203-1204 CE', url: 'Alexios IV Angelos', empire: 'Eastern' },
    { name: 'Alexios V Doukas', type: 'ruler', period: '1204 CE', url: 'Alexios V Doukas', empire: 'Eastern' },

    // Laskaris dynasty (1205–1261)
    { name: 'Theodore I Laskaris', type: 'ruler', period: '1205-1221 CE', url: 'Theodore I Laskaris', empire: 'Eastern' },
    { name: 'John III Vatatzes', type: 'ruler', period: '1221-1254 CE', url: 'John III Vatatzes', empire: 'Eastern' },
    { name: 'Theodore II Laskaris', type: 'ruler', period: '1254-1258 CE', url: 'Theodore II Laskaris', empire: 'Eastern' },
    { name: 'John IV Laskaris', type: 'ruler', period: '1258-1261 CE', url: 'John IV Laskaris', empire: 'Eastern' },

    // Palaiologos dynasty (1259–1453)
    { name: 'Michael VIII Palaiologos', type: 'ruler', period: '1259-1282 CE', url: 'Michael VIII Palaiologos', empire: 'Eastern' },
    { name: 'Andronikos II Palaiologos', type: 'ruler', period: '1282-1328 CE', url: 'Andronikos II Palaiologos', empire: 'Eastern' },
    { name: 'Michael IX Palaiologos', type: 'ruler', period: '1294-1320 CE', url: 'Michael IX Palaiologos', empire: 'Eastern' },
    { name: 'Andronikos III Palaiologos', type: 'ruler', period: '1328-1341 CE', url: 'Andronikos III Palaiologos', empire: 'Eastern' },
    { name: 'John V Palaiologos', type: 'ruler', period: '1341-1391 CE', url: 'John V Palaiologos', empire: 'Eastern' },
    { name: 'John VI Kantakouzenos', type: 'ruler', period: '1347-1354 CE', url: 'John VI Kantakouzenos', empire: 'Eastern' },
    { name: 'Andronikos IV Palaiologos', type: 'ruler', period: '1376-1379, 1381-1385 CE', url: 'Andronikos IV Palaiologos', empire: 'Eastern' },
    { name: 'John VII Palaiologos', type: 'ruler', period: '1385-1403, 1390, 1403-1408 CE', url: 'John VII Palaiologos', empire: 'Eastern' },
    { name: 'Manuel II Palaiologos', type: 'ruler', period: '1382-1387, 1391-1425 CE', url: 'Manuel II Palaiologos', empire: 'Eastern' },
    { name: 'John VIII Palaiologos', type: 'ruler', period: '1425-1448 CE', url: 'John VIII Palaiologos', empire: 'Eastern' },
    { name: 'Constantine XI Palaiologos', type: 'ruler', period: '1449-1453 CE', url: 'Constantine XI Palaiologos', empire: 'Eastern' },

    // ========== WESTERN ROMAN RULERS ==========
    { name: 'Honorius', type: 'ruler', period: '395-423 CE', url: 'Honorious.html', empire: 'Western' },
    { name: 'Joannes', type: 'ruler', period: '423-425 CE', url: 'Johanes.html', empire: 'Western' },
    { name: 'Valentinian III', type: 'ruler', period: '425-455 CE', url: 'valentinian3.html', empire: 'Western' },
    { name: 'Petronius Maximus', type: 'ruler', period: '455 CE', url: 'Petronius_Maximus', empire: 'Western' },
    { name: 'Avitus', type: 'ruler', period: '455-456 CE', url: 'Avitus', empire: 'Western' },
    { name: 'Majorian', type: 'ruler', period: '457-461 CE', url: 'Majorian', empire: 'Western' },
    { name: 'Libius Severus', type: 'ruler', period: '461-465 CE', url: 'Libius_Severus', empire: 'Western' },
    { name: 'Anthemius', type: 'ruler', period: '467-472 CE', url: 'Anthemius', empire: 'Western' },
    { name: 'Olybrius', type: 'ruler', period: '472 CE', url: 'Olybrius', empire: 'Western' },
    { name: 'Glycerius', type: 'ruler', period: '473-474 CE', url: 'Glycerius', empire: 'Western' },
    { name: 'Julius Nepos', type: 'ruler', period: '474-475 CE', url: 'Julius_Nepos', empire: 'Western' },
    { name: 'Romulus Augustulus', type: 'ruler', period: '475-476 CE', url: 'Romulus_Augustulus', empire: 'Western' },

    // ========== ANCIENT ROMAN RULERS ==========
    // Roman Kings (753–509 BC)
    { name: 'Romulus', type: 'ruler', period: '753-716 BC', url: 'Romulus', empire: 'Ancient' },
    { name: 'Numa Pompilius', type: 'ruler', period: '716-673 BC', url: 'Numa Pompilius', empire: 'Ancient' },
    { name: 'Tullus Hostilius', type: 'ruler', period: '673-642 BC', url: 'Tullus Hostilius', empire: 'Ancient' },
    { name: 'Ancus Marcius', type: 'ruler', period: '642-617 BC', url: 'Ancus Marcius', empire: 'Ancient' },
    { name: 'Tarquinius Priscus', type: 'ruler', period: '617-579 BC', url: 'Tarquinius Priscus', empire: 'Ancient' },
    { name: 'Servius Tullius', type: 'ruler', period: '579-534 BC', url: 'Servius Tullius', empire: 'Ancient' },
    { name: 'Tarquinius Superbus', type: 'ruler', period: '534-509 BC', url: 'Tarquinius Superbus', empire: 'Ancient' },

    // Julio-Claudian Dynasty
    { name: 'Augustus', type: 'ruler', period: '27 BC-14 CE', url: 'Augustus', empire: 'Ancient' },
    { name: 'Tiberius', type: 'ruler', period: '14-37 CE', url: 'Tiberius', empire: 'Ancient' },
    { name: 'Caligula', type: 'ruler', period: '37-41 CE', url: 'Caligula', empire: 'Ancient' },
    { name: 'Claudius', type: 'ruler', period: '41-54 CE', url: 'Claudius', empire: 'Ancient' },
    { name: 'Nero', type: 'ruler', period: '54-68 CE', url: 'Nero', empire: 'Ancient' },

    // Year of the Four Emperors
    { name: 'Galba', type: 'ruler', period: '68-69 CE', url: 'Galba', empire: 'Ancient' },
    { name: 'Otho', type: 'ruler', period: '69 CE', url: 'Otho', empire: 'Ancient' },
    { name: 'Vitellius', type: 'ruler', period: '69 CE', url: 'Vitellius', empire: 'Ancient' },

    // Flavian Dynasty
    { name: 'Vespasian', type: 'ruler', period: '69-79 CE', url: 'Vespasian', empire: 'Ancient' },
    { name: 'Titus', type: 'ruler', period: '79-81 CE', url: 'Titus', empire: 'Ancient' },
    { name: 'Domitian', type: 'ruler', period: '81-96 CE', url: 'Domitian', empire: 'Ancient' },

    // Nerva-Antonine Dynasty
    { name: 'Nerva', type: 'ruler', period: '96-98 CE', url: 'Nerva', empire: 'Ancient' },
    { name: 'Trajan', type: 'ruler', period: '98-117 CE', url: 'Trajan', empire: 'Ancient' },
    { name: 'Hadrian', type: 'ruler', period: '117-138 CE', url: 'Hadrian', empire: 'Ancient' },
    { name: 'Antoninus Pius', type: 'ruler', period: '138-161 CE', url: 'Antoninus Pius', empire: 'Ancient' },
    { name: 'Marcus Aurelius', type: 'ruler', period: '161-180 CE', url: 'Marcus Aurelius', empire: 'Ancient' },
    { name: 'Lucius Verus', type: 'ruler', period: '161-169 CE', url: 'Lucius Verus', empire: 'Ancient' },
    { name: 'Commodus', type: 'ruler', period: '180-192 CE', url: 'Commodus', empire: 'Ancient' },

    // Year of the Five Emperors
    { name: 'Pertinax', type: 'ruler', period: '193 CE', url: 'Pertinax', empire: 'Ancient' },
    { name: 'Didius Julianus', type: 'ruler', period: '193 CE', url: 'Didius Julianus', empire: 'Ancient' },

    // Severan Dynasty
    { name: 'Septimius Severus', type: 'ruler', period: '193-211 CE', url: 'Septimius Severus', empire: 'Ancient' },
    { name: 'Caracalla', type: 'ruler', period: '198-217 CE', url: 'Caracalla', empire: 'Ancient' },
    { name: 'Geta', type: 'ruler', period: '209-211 CE', url: 'Geta', empire: 'Ancient' },
    { name: 'Macrinus', type: 'ruler', period: '217-218 CE', url: 'Macrinus', empire: 'Ancient' },
    { name: 'Elagabalus', type: 'ruler', period: '218-222 CE', url: 'Elagabalus', empire: 'Ancient' },
    { name: 'Severus Alexander', type: 'ruler', period: '222-235 CE', url: 'Severus Alexander', empire: 'Ancient' },

    // Crisis of the Third Century
    { name: 'Maximinus Thrax', type: 'ruler', period: '235-238 CE', url: 'Maximinus Thrax', empire: 'Ancient' },
    { name: 'Gordian I', type: 'ruler', period: '238 CE', url: 'Gordian I', empire: 'Ancient' },
    { name: 'Gordian II', type: 'ruler', period: '238 CE', url: 'Gordian II', empire: 'Ancient' },
    { name: 'Pupienus', type: 'ruler', period: '238 CE', url: 'Pupienus', empire: 'Ancient' },
    { name: 'Balbinus', type: 'ruler', period: '238 CE', url: 'Balbinus', empire: 'Ancient' },
    { name: 'Gordian III', type: 'ruler', period: '238-244 CE', url: 'Gordian III', empire: 'Ancient' },
    { name: 'Philip the Arab', type: 'ruler', period: '244-249 CE', url: 'Philip the Arab', empire: 'Ancient' },
    { name: 'Decius', type: 'ruler', period: '249-251 CE', url: 'Decius', empire: 'Ancient' },
    { name: 'Hostilian', type: 'ruler', period: '251 CE', url: 'Hostilian', empire: 'Ancient' },
    { name: 'Trebonianus Gallus', type: 'ruler', period: '251-253 CE', url: 'Trebonianus Gallus', empire: 'Ancient' },
    { name: 'Valerian', type: 'ruler', period: '253-260 CE', url: 'Valerian', empire: 'Ancient' },
    { name: 'Gallienus', type: 'ruler', period: '253-268 CE', url: 'Gallienus', empire: 'Ancient' },
    { name: 'Claudius Gothicus', type: 'ruler', period: '268-270 CE', url: 'Claudius Gothicus', empire: 'Ancient' },
    { name: 'Quintillus', type: 'ruler', period: '270 CE', url: 'Quintillus', empire: 'Ancient' },
    { name: 'Aurelian', type: 'ruler', period: '270-275 CE', url: 'Aurelian', empire: 'Ancient' },
    { name: 'Tacitus', type: 'ruler', period: '275-276 CE', url: 'Tacitus', empire: 'Ancient' },
    { name: 'Probus', type: 'ruler', period: '276-282 CE', url: 'Probus', empire: 'Ancient' },
    { name: 'Carus', type: 'ruler', period: '282-283 CE', url: 'Carus', empire: 'Ancient' },
    { name: 'Carinus', type: 'ruler', period: '283-285 CE', url: 'Carinus', empire: 'Ancient' },
    { name: 'Numerian', type: 'ruler', period: '283-284 CE', url: 'Numerian', empire: 'Ancient' },

    // Tetrarchy
    { name: 'Diocletian', type: 'ruler', period: '284-305 CE', url: 'Diocletian', empire: 'Ancient' },
    { name: 'Maximian', type: 'ruler', period: '286-305 CE', url: 'Maximian', empire: 'Ancient' },
    { name: 'Constantius Chlorus', type: 'ruler', period: '305-306 CE', url: 'Constantius Chlorus', empire: 'Ancient' },
    { name: 'Galerius', type: 'ruler', period: '305-311 CE', url: 'Galerius', empire: 'Ancient' },
    { name: 'Severus II', type: 'ruler', period: '306-307 CE', url: 'Severus II', empire: 'Ancient' },
    { name: 'Maxentius', type: 'ruler', period: '306-312 CE', url: 'Maxentius', empire: 'Ancient' },
    { name: 'Licinius', type: 'ruler', period: '308-324 CE', url: 'Licinius', empire: 'Ancient' },

    // ========== EASTERN ROMAN MILITARY
    
  // Generals of Alexios I Komnenos
  { name: 'Aspietes', type: 'general', period: '11th CE', url: 'aspietes.html', empire: 'Eastern' },
  { name: 'Manuel Boutoumites', type: 'general', period: '11th CE–12th CE', url: 'manuel_boutoumites.html', empire: 'Eastern' },
  { name: 'Nikephoros Bryennios the Younger', type: 'general', period: '1062 CE–1137 CE', url: 'nikephoros_bryennios_the_younger.html', empire: 'Eastern' },
  { name: 'Constantine Dalassenos (thalassokrator)', type: 'general', period: '11th CE', url: 'constantine_dalassenos_thalassokrator.html', empire: 'Eastern' },
  { name: 'Nikephoros Diogenes', type: 'general', period: '11th CE', url: 'nikephoros_diogenes.html', empire: 'Eastern' },
  { name: 'John Doukas (megas doux)', type: 'general', period: '1064 CE–? CE', url: 'john_doukas_megas_doux.html', empire: 'Eastern' },
  { name: 'Michael Doukas (protostrator)', type: 'general', period: '1061 CE–? CE', url: 'michael_doukas_protostrator.html', empire: 'Eastern' },
  { name: 'Eustathios Kamytzes', type: 'general', period: '11th CE', url: 'eustathios_kamytzes.html', empire: 'Eastern' },
  { name: 'Constantine Euphorbenos Katakalon', type: 'general', period: '11th CE–12th CE', url: 'constantine_euphorbenos_katakalon.html', empire: 'Eastern' },
  { name: 'Adrianos Komnenos', type: 'general', period: '11th CE–12th CE', url: 'adrianos_komnenos.html', empire: 'Eastern' },
  { name: 'Alexios Komnenos (governor of Dyrrhachium)', type: 'general', period: '11th CE–12th CE', url: 'alexios_komnenos_governor_of_dyrrhachium.html', empire: 'Eastern' },
  { name: 'John Komnenos (governor of Dyrrhachium)', type: 'general', period: '11th CE–12th CE', url: 'john_komnenos_governor_of_dyrrhachium.html', empire: 'Eastern' },
  { name: 'Isaac Kontostephanos', type: 'general', period: '11th CE–12th CE', url: 'isaac_kontostephanos.html', empire: 'Eastern' },
  { name: 'Basil Kourtikios', type: 'general', period: '11th CE–12th CE', url: 'basil_kourtikios.html', empire: 'Eastern' },
  { name: 'Eustathios Kymineianos', type: 'general', period: '11th CE–12th CE', url: 'eustathios_kymineianos.html', empire: 'Eastern' },
  { name: 'Nicholas Maurokatakalon', type: 'general', period: '11th CE–12th CE', url: 'nicholas_maurokatakalon.html', empire: 'Eastern' },
  { name: 'Nikephoros Melissenos', type: 'general', period: '11th CE–12th CE', url: 'nikephoros_melissenos.html', empire: 'Eastern' },
  { name: 'Constantine Opos (megas doux)', type: 'general', period: '11th CE–12th CE', url: 'constantine_opos_megas_doux.html', empire: 'Eastern' },
  { name: 'Gregory Pakourianos', type: 'general', period: '11th CE', url: 'gregory_pakourianos.html', empire: 'Eastern' },
  { name: 'George Palaiologos', type: 'general', period: '11th CE–12th CE', url: 'george_palaiologos.html', empire: 'Eastern' },
  { name: 'Nikephoros Palaiologos', type: 'general', period: '11th CE', url: 'nikephoros_palaiologos.html', empire: 'Eastern' },
  { name: 'Eumathios Philokales', type: 'general', period: '11th CE–12th CE', url: 'eumathios_philokales.html', empire: 'Eastern' },
  { name: 'Michael Stypiotes', type: 'general', period: '12th CE', url: 'michael_stypiotes.html', empire: 'Eastern' },
  { name: 'Gregory Taronites (governor of Chaldia)', type: 'general', period: '12th CE', url: 'gregory_taronites_governor_of_chaldia.html', empire: 'Eastern' },
  { name: 'John Taronites', type: 'general', period: '11th CE–12th CE', url: 'john_taronites.html', empire: 'Eastern' },
  { name: 'Tatikios', type: 'general', period: '11th CE–12th CE', url: 'tatikios.html', empire: 'Eastern' },

  // Generals of Basil II
  { name: 'David Arianites', type: 'general', period: '11th CE', url: 'david_arianites.html', empire: 'Eastern' },
  { name: 'Basil Boioannes', type: 'general', period: '11th CE', url: 'basil_boioannes.html', empire: 'Eastern' },
  { name: 'Theophylact Botaneiates', type: 'general', period: '11th CE', url: 'theophylact_botaneiates.html', empire: 'Eastern' },
  { name: 'Michael Bourtzes', type: 'general', period: '10th CE', url: 'michael_bourtzes.html', empire: 'Eastern' },
  { name: 'John Chaldos', type: 'general', period: '10th CE–11th CE', url: 'john_chaldos.html', empire: 'Eastern' },
  { name: 'Constantine Dalassenos (duke of Antioch)', type: 'general', period: '10th CE–11th CE', url: 'constantine_dalassenos_duke_of_antioch.html', empire: 'Eastern' },
  { name: 'Damian Dalassenos', type: 'general', period: '940 CE–998 CE', url: 'damian_dalassenos.html', empire: 'Eastern' },
  { name: 'Theophylact Dalassenos', type: 'general', period: '10th CE–11th CE', url: 'theophylact_dalassenos.html', empire: 'Eastern' },
  { name: 'Procopius', type: 'general', period: '325 CE–366 CE', url: 'procopius.html', empire: 'Eastern' },
  { name: 'David of Ohrid', type: 'general', period: '11th CE', url: 'david_of_ohrid.html', empire: 'Eastern' },
  { name: 'Kalokyros Delphinas', type: 'general', period: '10th CE', url: 'kalokyros_delphinas.html', empire: 'Eastern' },
  { name: 'Constantine Diogenes', type: 'general', period: '10th CE–11th CE', url: 'constantine_diogenes.html', empire: 'Eastern' },
  { name: 'Nikephoros Kabasilas', type: 'general', period: '10th CE–11th CE', url: 'nikephoros_kabasilas.html', empire: 'Eastern' },
  { name: 'Manuel Erotikos Komnenos', type: 'general', period: '10th CE–11th CE', url: 'manuel_erotikos_komnenos.html', empire: 'Eastern' },
  { name: 'Nikephoros Komnenos', type: 'general', period: '10th CE–11th CE', url: 'nikephoros_komnenos.html', empire: 'Eastern' },
  { name: 'Nikephoros Ouranos', type: 'general', period: '10th CE–11th CE', url: 'nikephoros_ouranos.html', empire: 'Eastern' },
  { name: 'Bardas Parsakoutenos', type: 'general', period: '10th CE', url: 'bardas_parsakoutenos.html', empire: 'Eastern' },
  { name: 'Bardas Phokas the Younger', type: 'general', period: '940 CE–989 CE', url: 'bardas_phokas_the_younger.html', empire: 'Eastern' },
  { name: 'Leodoro Piscicello', type: 'general', period: '10th CE', url: 'leodoro_piscicello.html', empire: 'Eastern' },
  { name: 'Gregory Taronites', type: 'general', period: '10th CE', url: 'gregory_taronites.html', empire: 'Eastern' },
  { name: 'Theodorokanos', type: 'general', period: '10th CE–11th CE', url: 'theodorokanos.html', empire: 'Eastern' },
  { name: 'Nikephoros Xiphias', type: 'general', period: '10th CE–11th CE', url: 'nikephoros_xiphias.html', empire: 'Eastern' },

  // Generals of Constans
  { name: 'Magnentius', type: 'general', period: '303 CE–353 CE', url: 'magnentius.html', empire: 'Eastern' },

  // Generals of Constantine the Great
  { name: 'Arbitio', type: 'general', period: '4th CE', url: 'arbitio.html', empire: 'Eastern' },
  { name: 'Crispus', type: 'general', period: '300 CE–326 CE', url: 'crispus.html', empire: 'Eastern' },

  // Generals of Gratian
  { name: 'Mallobaudes', type: 'general', period: '4th CE', url: 'mallobaudes.html', empire: 'Eastern' },
  { name: 'Nannienus', type: 'general', period: '4th CE', url: 'nannienus.html', empire: 'Eastern' },

  // Generals of Manuel I Komnenos
  { name: 'Manuel Anemas', type: 'general', period: '12th CE', url: 'manuel_anemas.html', empire: 'Eastern' },
  { name: 'Andronikos Angelos Doukas', type: 'general', period: '1133 CE–1183/85 CE', url: 'andronikos_angelos_doukas.html', empire: 'Eastern' },
  { name: 'Constantine Aspietes', type: 'general', period: '12th CE', url: 'constantine_aspietes.html', empire: 'Eastern' },
  { name: 'Michael Aspietes', type: 'general', period: '12th CE', url: 'michael_aspietes.html', empire: 'Eastern' },
  { name: 'Alexios Axouch', type: 'general', period: '12th CE', url: 'alexios_axouch.html', empire: 'Eastern' },
  { name: 'Constantine Angelos', type: 'general', period: '11th CE–12th CE', url: 'constantine_angelos.html', empire: 'Eastern' },
  { name: 'Constantine Doukas (sebastos)', type: 'general', period: '12th CE', url: 'constantine_doukas_sebastos.html', empire: 'Eastern' },
  { name: 'John Doukas (megas hetaireiarches)', type: 'general', period: '12th CE', url: 'john_doukas_megas_hetaireiarches.html', empire: 'Eastern' },
  { name: 'John Doukas (sebastokrator)', type: 'general', period: '1125/27 CE–1200 CE', url: 'john_doukas_sebastokrator.html', empire: 'Eastern' },
  { name: 'Andronikos Euphorbenos', type: 'general', period: '1105/1108 CE–1163 CE', url: 'andronikos_euphorbenos.html', empire: 'Eastern' },
  { name: 'John Axouch', type: 'general', period: '1087 CE–1150 CE', url: 'john_axouch.html', empire: 'Eastern' },
  { name: 'John Kantakouzenos (sebastos)', type: 'general', period: '12th CE', url: 'john_kantakouzenos_sebastos.html', empire: 'Eastern' },
  { name: 'John Komnenos Vatatzes', type: 'general', period: '1132 CE–1182 CE', url: 'john_komnenos_vatatzes.html', empire: 'Eastern' },
  { name: 'Alexios Komnenos (megas doux)', type: 'general', period: '12th CE', url: 'alexios_komnenos_megas_doux.html', empire: 'Eastern' },
  { name: 'Andronikos Kontostephanos', type: 'general', period: '1132/33 CE–1183 CE', url: 'andronikos_kontostephanos.html', empire: 'Eastern' },
  { name: 'Andronikos Kontostephanos (son of Isaac)', type: 'general', period: '12th CE', url: 'andronikos_kontostephanos_son_of_isaac.html', empire: 'Eastern' },
  { name: 'John Kontostephanos', type: 'general', period: '1128 CE–1176/82 CE', url: 'john_kontostephanos.html', empire: 'Eastern' },
  { name: 'Stephen Kontostephanos', type: 'general', period: '1107 CE–1149 CE', url: 'stephen_kontostephanos.html', empire: 'Eastern' },
  { name: 'Andronikos Lapardas', type: 'general', period: '12th CE', url: 'andronikos_lapardas.html', empire: 'Eastern' },
  { name: 'Constantine Makrodoukas', type: 'general', period: '1143 CE–1185 CE', url: 'constantine_makrodoukas.html', empire: 'Eastern' },
  { name: 'Michael Palaiologos Doukas', type: 'general', period: '1100 CE–1156 CE', url: 'michael_palaiologos_doukas.html', empire: 'Eastern' },
  { name: 'Theodore Vatatzes', type: 'general', period: '12th CE', url: 'theodore_vatatzes.html', empire: 'Eastern' },

  // Generals of Maurice
  { name: 'Comentiolus', type: 'general', period: '6th CE', url: 'comentiolus.html', empire: 'Eastern' },
  { name: 'Germanus (magister militum under Phocas)', type: 'general', period: '6th CE', url: 'germanus_magister_militum_under_phocas.html', empire: 'Eastern' },
  { name: 'Heraclius the Elder', type: 'general', period: '552 CE–610 CE', url: 'heraclius_the_elder.html', empire: 'Eastern' },
  { name: 'John Mystacon', type: 'general', period: '550 CE–595 CE', url: 'john_mystacon.html', empire: 'Eastern' },
  { name: 'Narses (magister militum per Orientem)', type: 'general', period: '6th CE–7th CE', url: 'narses_magister_militum_per_orientem.html', empire: 'Eastern' },
  { name: 'Peter (curopalates)', type: 'general', period: '545 CE–602 CE', url: 'peter_curopalates.html', empire: 'Eastern' },
  { name: 'Philippicus (comes excubitorum)', type: 'general', period: '580 CE–610 CE', url: 'philippicus_comes_excubitorum.html', empire: 'Eastern' },
  { name: 'Priscus (magister militum)', type: 'general', period: '6th CE–7th CE', url: 'priscus_magister_militum.html', empire: 'Eastern' },
//===Western Roman Military

  { name: 'Anthemiolus', type: 'general', period: '? CE–471 CE', url: 'anthemiolus.html', empire: 'Western' },
  { name: 'Gerontius (magister militum)', type: 'general', period: '? CE–411 CE', url: 'gerontius.html', empire: 'Western' },
  { name: 'Julius Asclepiodotus', type: 'general', period: '3rd century', url: 'julius_asclepiodotus.html', empire: 'Western' },
  { name: 'Bonifatius', type: 'general', period: '? CE–432 CE', url: 'bonifatius.html', empire: 'Western' },
  { name: 'Stilicho', type: 'general', period: '359 CE–408 CE', url: 'stilicho.html', empire: 'Western' },
  { name: 'Bauto', type: 'general', period: '? CE–385 CE', url: 'bauto.html', empire: 'Western' },
  { name: 'Vitus (magister militum)', type: 'general', period: '?', url: 'vitus.html', empire: 'Western' },
  { name: 'Nannienus', type: 'general', period: '350 CE–? CE', url: 'nannienus.html', empire: 'Western' },
  { name: 'Theodosius the Elder', type: 'general', period: '? CE–376 CE', url: 'theodosius_the_elder.html', empire: 'Western' },
  { name: 'Barbatio', type: 'general', period: '? CE–359 CE', url: 'barbatio.html', empire: 'Western' },
  { name: 'Lucillianus (fleet commander)', type: 'general', period: '?', url: 'lucillianus.html', empire: 'Western' },
  { name: 'Procopius (usurper)', type: 'general', period: '325 CE–366 CE', url: 'procopius.html', empire: 'Western' },
  { name: 'Afranius Hannibalianus', type: 'general', period: '3rd century', url: 'afranius_hannibalianus.html', empire: 'Western' },
  { name: 'Carausius', type: 'general', period: '? CE–293 CE', url: 'carausius.html', empire: 'Western' },

//======Ancient Roman Military

  { name: 'Marcus Furius Camillus', type: 'general', period: '396 BC–367 BC', url: 'marcus_furius_camillus.html', empire: 'Ancient' },
  { name: 'Quintus Fabius Maximus Verrucosus', type: 'general', period: '217 BC–203 BC', url: 'quintus_fabius_maximus_verrucosus.html', empire: 'Ancient' },
  { name: 'Marcus Claudius Marcellus', type: 'general', period: '222 BC–208 BC', url: 'marcus_claudius_marcellus.html', empire: 'Ancient' },
  { name: 'Publius Cornelius Scipio Africanus', type: 'general', period: '210 BC–183 BC', url: 'publius_cornelius_scipio_africanus.html', empire: 'Ancient' },
  { name: 'Scipio Aemilianus', type: 'general', period: '151 BC–129 BC', url: 'scipio_aemilianus.html', empire: 'Ancient' },
  { name: 'Gaius Marius', type: 'general', period: '107 BC–86 BC', url: 'gaius_marius.html', empire: 'Ancient' },
  { name: 'Lucius Cornelius Sulla', type: 'general', period: '97 BC–78 BC', url: 'lucius_cornelius_sulla.html', empire: 'Ancient' },
  { name: 'Gnaeus Pompeius Magnus (Pompey the Great)', type: 'general', period: '83 BC–48 BC', url: 'gnaeus_pompeius_magnus.html', empire: 'Ancient' },
  { name: 'Marcus Licinius Crassus', type: 'general', period: '72 BC–53 BC', url: 'marcus_licinius_crassus.html', empire: 'Ancient' },
  { name: 'Gaius Julius Caesar', type: 'general', period: '58 BC–44 BC', url: 'gaius_julius_caesar.html', empire: 'Ancient' },
  { name: 'Marcus Antonius', type: 'general', period: '48 BC–31 BC', url: 'marcus_antonius.html', empire: 'Ancient' },
  { name: 'Marcus Vipsanius Agrippa', type: 'general', period: '38 BC–12 BC', url: 'marcus_vipsanius_agrippa.html', empire: 'Ancient' },
  { name: 'Germanicus', type: 'general', period: '14 CE–19 CE', url: 'germanicus.html', empire: 'Ancient' },
  { name: 'Gnaeus Domitius Corbulo', type: 'general', period: '52 CE–67 CE', url: 'gnaeus_domitius_corbulo.html', empire: 'Ancient' },
  { name: 'Gnaeus Julius Agricola', type: 'general', period: '60 CE–84 CE', url: 'gnaeus_julius_agricola.html', empire: 'Ancient' },
  { name: 'Trajan', type: 'general', period: '80 CE–117 CE', url: 'trajan.html', empire: 'Ancient' },
  { name: 'Aurelian', type: 'general', period: '253 CE–275 CE', url: 'aurelian.html', empire: 'Ancient' },
  { name: 'Diocletian', type: 'general', period: '284 CE–305 CE', url: 'diocletian.html', empire: 'Ancient' },
  { name: 'Constantine the Great', type: 'general', period: '306 CE–337 CE', url: 'constantine_the_great.html', empire: 'Ancient' },
  { name: 'Flavius Stilicho', type: 'general', period: '385 CE–408 CE', url: 'flavius_stilicho.html', empire: 'Ancient' }

];

// Search functionality
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

if (searchInput && searchResults) {
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        
        if (!query) {
            searchResults.classList.remove('active');
            return;
        }

        const results = searchDatabase.filter(item => 
            item.name.toLowerCase().includes(query)
        ).slice(0, 8);

        if (results.length > 0) {
            searchResults.innerHTML = results.map(result => `
                <div class="search-result-item" onclick="window.location.href='${result.url}'">
                    <div class="result-name">${result.name}</div>
                    <div class="result-info">
                        <span class="result-badge badge-${result.empire.toLowerCase()}">${result.empire}</span>
                        <span>${result.type === 'ruler' ? '👑 Ruler' : result.type === 'general' ? '⚔️ General' : '📄 Page'}</span>
                        ${result.period ? `<span>${result.period}</span>` : ''}
                    </div>
                </div>
            `).join('');
            searchResults.classList.add('active');
        } else {
            searchResults.innerHTML = '<div class="no-results">No results found</div>';
            searchResults.classList.add('active');
        }
    });

    document.addEventListener('click', function(e) {
        if (!e.target.closest('.hero-search')) {
            searchResults.classList.remove('active');
        }
    });
}