/*!
 * uk addon for LanguageIdentifier v0.2
 * http://tika.apache.org/
 * https://github.com/mazko/jsli
 *
 * Copyright 13.01.10, Oleg Mazko
 * http://www.opensource.org/licenses/bsd-license.html
 */
(function() {
var ngrams = {
"на_":31005,
"_на":30413,
"_пр":27783,
"_по":25204,
"ого":22546,
"_і_":22494,
"го_":21091,
"_за":20327,
"ий_":20183,
"_в_":20089,
"их_":20023,
"_ви":19862,
"_ро":19378,
"_та":19078,
"_ст":18927,
"ів_":18762,
"_ко":18571,
"ня_":18400,
"ння":17493,
"_ві":16666,
"_до":16607,
"та_":16281,
"про":16163,
"ся_":16121,
"_як":15972,
"_з_":15953,
"_у_":15901,
"ськ":15538,
"ні_":14883,
"_th":14863,
"сто":14729,
"від":14181,
"ти_":13996,
"the":13870,
"ії_":13749,
"ом_":13601,
"ми_":13215,
"ста":12930,
"ере":12896,
"ть_":12835,
"пер":12814,
"ою_":12775,
"ува":12375,
"he_":12322,
"енн":11280,
"_пі":11279,
"ої_":11274,
"льн":11135,
"ку_":10750,
"ка_":10741,
"ван":10642,
"_бу":10602,
"ист":10393,
"аль":10192,
"_пе":10151,
"них":10037,
"ком":9970,
"іст":9955,
"му_":9909,
"_що":9841,
"_не":9808,
"on_":9775,
"er_":9750,
"ний":9654,
"ько":9587,
"ати":9472,
"що_":9445,
"ки_":9293,
"анн":9289,
"ли_":9275,
"ля_":9265,
"олі":9258,
"ii_":9168,
"им_":9115,
"при":9070,
"но_":8988,
"_мо":8963,
"ост":8878,
"ла_":8858,
"іль":8796,
"_ма":8783,
"ті_":8699,
"es_":8469,
"ому":8239,
"тьс":8186,
"ься":8181,
"літ":8175,
"ала":8069,
"не_":7970,
"до_":7967,
"ій_":7880,
"роз":7833,
"_of":7682,
"_мі":7638,
"кор":7525,
"_сп":7516,
"ion":7514,
"_ін":7488,
"_in":7412,
"of_":7353,
"ови":7296,
"акт":7195,
"ова":7175,
"тор":7130,
"ика":7023,
"тол":6990,
"нов":6948,
"and":6892,
"ьки":6868,
"ори":6860,
"nd_":6740,
"_су":6629,
"_co":6626,
"для":6620,
"ав_":6588,
"ног":6576,
"оло":6571,
"_дл":6564,
"рис":6483,
"ним":6435,
"під":6426,
"_de":6391,
"ані":6362,
"_an":6356,
"ід_":6269,
"рок":6196,
"сти":6181,
"ові":6129,
"тан":6125,
"так":6070,
"ико":6038,
"аці":6035,
"вер":6012,
"роб":5988,
"_ве":5978,
"аст":5953,
"кий":5945,
"ітт":5902,
"al_":5899,
"ово":5897,
"лен":5834,
"ну_":5815,
"сті":5800,
"_ma":5784,
"_ка":5754,
"tio":5750,
"али":5746,
"ють":5735,
"час":5723,
"ент":5675,
"ами":5660,
"тер":5657,
"_то":5635,
"ни_":5596,
"стр":5553,
"in_":5547,
"оро":5536,
"_ре":5524,
"_се":5512,
"_св":5506,
"кон":5476,
"_де":5474,
"_те":5445,
"_ба":5391,
"ці_":5385,
"пов":5355,
"бул":5331,
"міс":5313,
"ter":5306,
"мен":5287,
"ття":5276,
"кла":5261,
"зна":5256,
"кти":5251,
"an_":5221,
"тов":5161,
"род":5160,
"_га":5147,
"орі":5110,
"_па":5103,
"_ii":5092,
"вик":5087,
"ва_":5054,
"ном":5052,
"она":5018,
"ту_":4997,
"єть":4977,
"оди":4956,
"ред":4926,
"ati":4905,
"гал":4902,
"ing":4883,
"оку":4879,
"ng_":4863,
"ког":4849,
"тя_":4841,
"_ме":4826,
"ає_":4813,
"тра":4809,
"пра":4768,
"вал":4763,
"нсь":4732,
"ір_":4726,
"яки":4721,
"_re":4712,
"_си":4712,
"ло_":4692,
"ції":4662,
"en_":4628,
"ної":4628,
"_во":4627,
"is_":4626,
"_а_":4607,
"ах_":4600,
"ник":4599,
"як_":4574,
"омп":4565,
"ent":4564,
"гра":4562,
"_гр":4560,
"ани":4551,
"вор":4530,
"три":4524,
"біл":4514,
"за_":4511,
"тво":4476,
"_ча":4467,
"тик":4454,
"але":4453,
"ри_":4444,
"le_":4443,
"алі":4442,
"_ал":4433,
"ими":4416,
"ват":4400,
"рав":4384,
"_ос":4373,
"дно":4373,
"ідн":4368,
"ичн":4342,
"сту":4312,
"ія_":4301,
"рів":4280,
"лас":4276,
"кра":4273,
"_об":4249,
"лад":4248,
"ері":4207,
"ову":4195,
"одн":4169,
"мін":4123,
"_st":4116,
"ков":4101,
"us_":4097,
"зір":4094,
"сть":4082,
"рим":4081,
"кі_":4078,
"ако":4074,
"узі":4072,
"_i_":4060,
"ed_":4058,
"був":4018,
"том":4003,
"сер":3991,
"_бі":3985,
"_ра":3978,
"ано":3971,
"_wi":3956,
"_ї_":3948,
"re_":3943,
"ійн":3924,
"_рі":3910,
"ера":3908,
"ив_":3902,
"нал":3886,
"спі":3885,
"лі_":3870,
"ени":3856,
"ніс":3856,
"сте":3856,
"_ca":3843,
"чен":3841,
"суз":3836,
"_a_":3826,
"ічн":3825,
"дов":3822,
"ia_":3808,
"кол":3793,
"ато":3785,
"ків":3779,
"ких":3762,
"ств":3756,
"овн":3752,
"_тр":3751,
"_pa":3742,
"рал":3738,
"_од":3736,
"ран":3736,
"ров":3734,
"чно":3733,
"фор":3713,
"пол":3687,
"_to":3680,
"тів":3663,
"ра_":3662,
"iii":3660,
"рен":3657,
"жен":3637,
"ана":3619,
"_li":3584,
"ити":3576,
"тив":3572,
"_но":3553,
"роц":3533,
"кож":3524,
"тро":3518,
"то_":3513,
"йсь":3502,
"_це":3495,
"рит":3488,
"мож":3483,
"лак":3473,
"кої":3468,
"дин":3466,
"_pr":3463,
"ною":3462,
"ьно":3423,
"_ск":3421,
"de_":3419,
"оді":3408,
"вол":3387,
"рам":3380,
"_йо":3369,
"тал":3365,
"вни":3364,
"рат":3363,
"_vi":3357,
"еле":3357,
"_mi":3354,
"орм":3343,
"_кр":3342,
"ок_":3339,
"пис":3329,
"ром":3326,
"мер":3315,
"віт":3299,
"оні":3283,
"ві_":3279,
"or_":3277,
"ше_":3249,
"_че":3234,
"_го":3214,
"_fo":3213,
"ійс":3195,
"ден":3189,
"лив":3184,
"ага":3181,
"_xv":3179,
"ув_":3161,
"ьни":3155,
"_mo":3149,
"анд":3145,
"ne_":3135,
"анс":3132,
"нач":3127,
"_se":3113,
"пор":3110,
"ини":3107,
"for":3105,
"_зн":3103,
"_s_":3096,
"_са":3094,
"ект":3090,
"арт":3084,
"_be":3081,
"te_":3074,
"ож_":3073,
"_po":3068,
"вно":3067,
"вел":3058,
"рос":3058,
"ній":3057,
"чни":3054,
"вид":3046,
"_вс":3044,
"ду_":3040,
"_бе":3038,
"ина":3038,
"_xi":3022,
"ію_":3022,
"_є_":3012,
"_so":3011,
"ce_":3010,
"цій":3010,
"рот":3008,
"або":3003,
"льш":2994,
"мов":2970,
"мпа":2970,
"пос":2969,
"дом":2963,
"дан":2960,
"пів":2960,
"же_":2946,
"ход":2945,
"оці":2937,
"сно":2922,
"nte":2921,
"ує_":2914,
"тав":2911,
"ді_":2891,
"сво":2874,
"_ch":2868,
"_аб":2868,
"ить":2859,
"ені":2856,
"оча":2855,
"_лі":2852,
"тич":2851,
"to_":2843,
"_la":2839,
"вся":2832,
"ало":2824,
"vii":2814,
"ers":2812,
"асн":2809,
"ися":2808,
"тин":2806,
"тат":2799,
"_ан":2795,
"вих":2790,
"ерш":2789,
"лик":2778,
"st_":2777,
"ант":2775,
"вав":2773,
"буд":2771,
"які":2769,
"_di":2766,
"ери":2763,
"нос":2760,
"ман":2759,
"кан":2757,
"ара":2749,
"лов":2746,
"_sa":2738,
"ry_":2731,
"інш":2730,
"рон":2727,
"se_":2717,
"ica":2710,
"льк":2709,
"nt_":2708,
"най":2707,
"ver":2705,
"_да":2702,
"_me":2701,
"ено":2701,
"обл":2700,
"_ти":2699,
"_al":2689,
"йог":2685,
"xvi":2676,
"ели":2676,
"бо_":2667,
"івн":2659,
"ic_":2651,
"вні":2650,
"дже":2649,
"зап":2649,
"тем":2647,
"раї":2645,
"во_":2643,
"ают":2642,
"поч":2636,
"тур":2636,
"_un":2635,
"рес":2634,
"ада":2630,
"мат":2621,
"lin":2620,
"бра":2613,
"_ar":2608,
"ила":2608,
"нні":2607,
"нці":2602,
"рог":2595,
"int":2589,
"et_":2588,
"трі":2586,
"тис":2580,
"_ba":2575,
"ива":2570,
"опо":2566,
"ns_":2563,
"оли":2561,
"или":2556,
"ода":2556,
"_no":2554,
"ate":2551,
"аїн":2549,
"ерс":2536,
"бер":2530,
"сві":2529,
"ерн":2527,
"ist":2518,
"нь_":2511,
"ch_":2494,
"оль":2494,
"ам_":2491,
"ix_":2488,
"ома":2484,
"ine":2474,
"рії":2471,
"_fr":2470,
"her":2467,
"_зв":2465,
"_ді":2461,
"отр":2461,
"tor":2452,
"рез":2448,
"_ні":2444,
"ізн":2443,
"раз":2442,
"_пл":2440,
"ро_":2439,
"яко":2437,
"_ro":2433,
"ste":2428,
"ким":2423,
"лос":2420,
"вит":2418,
"вою":2416,
"_ва":2413,
"ньо":2408,
"рац":2404,
"одо":2403,
"_ав":2398,
"туп":2395,
"ін_":2394,
"sta":2391,
"обо":2390,
"der":2388,
"оти":2388,
"ивн":2386,
"лис":2383,
"нів":2383,
"ind":2377,
"вій":2375,
"_чи":2374,
"оре":2372,
"чи_":2371,
"el_":2367,
"огр":2359,
"ена":2352,
"дос":2351,
"as_":2350,
"_ди":2348,
"над":2347,
"наз":2347,
"_кі":2341,
"юва":2341,
"дни":2337,
"чер":2337,
"пре":2334,
"омо":2329,
"рі_":2329,
"_кл":2324,
"_фо":2324,
"ьна":2314,
"пан":2306,
"лів":2304,
"ди_":2303,
"нта":2302,
"_is":2300,
"єю_":2300,
"ру_":2299,
"рик":2298,
"_ne":2287,
"con":2287,
"eri":2287,
"оду":2286,
"_бо":2281,
"без":2274,
"ll_":2271,
"ям_":2263,
"ідо":2260,
"ест":2256,
"ма_":2252,
"кою":2249,
"аме":2246,
"_со":2245,
"_le":2244,
"аєт":2243,
"мет":2243,
"він":2240,
"сь_":2238,
"com":2234,
"вої":2233,
"пір":2233,
"res":2227,
"at_":2226,
"нув":2223,
"ора":2223,
"che":2221,
"мал":2220,
"rs_":2218,
"апи":2218,
"ле_":2216,
"іра":2213,
"ill":2212,
"под":2211,
"art":2210,
"ики":2207,
"змі":2202,
"_na":2200,
"la_":2197,
"th_":2197,
"дні":2192,
"_бр":2178,
"ула":2174,
"ву_":2171,
"нап":2169,
"зас":2164,
"um_":2159,
"iv_":2158,
"ото":2158,
"сис":2158,
"кіл":2154,
"lan":2149,
"_ел":2148,
"роп":2147,
"скл":2147,
"зро":2146,
"рол":2145,
"ge_":2136,
"_te":2133,
"_ge":2132,
"ючи":2127,
"дер":2126,
"tra":2123,
"_he":2119,
"нен":2116,
"ням":2116,
"пар":2116,
"_da":2115,
"пла":2115,
"спо":2115,
"ією":2114,
"арі":2103,
"гор":2100,
"ем_":2100,
"кри":2095,
"ькі":2095,
"вод":2089,
"лан":2086,
"дів":2073,
"_do":2071,
"_му":2070,
"елі":2069,
"all":2068,
"man":2066,
"рма":2066,
"_зм":2064,
"ts_":2063,
"аро":2058,
"_ар":2057,
"уло":2057,
"су_":2056,
"вип":2055,
"ta_":2054,
"_sc":2052,
"ви_":2047,
"гол":2047,
"und":2041,
"тар":2037,
"ей_":2031,
"per":2025,
"ьог":2022,
"est":2020,
"іні":2014,
"кар":2012,
"іон":2012,
"омі":2010,
"ер_":2009,
"вий":2007,
"сел":2003,
"_ук":2002,
"_pe":2001,
"лог":2001,
"екс":1994,
"озв":1990,
"ell":1988,
"ко_":1988,
"існ":1986,
"_оп":1984,
"_фі":1984,
"вто":1983,
"_ор":1980,
"ино":1980,
"ive":1977,
"ава":1969,
"_su":1968,
"_ли":1968,
"пот":1967,
"ов_":1966,
"_bo":1964,
"_si":1963,
"иці":1961,
"_ha":1960,
"ель":1960,
"_ге":1957,
"ене":1955,
"рем":1954,
"_із":1953,
"нім":1951,
"age":1949,
"ль_":1949,
"дал":1947,
"ас_":1945,
"str":1941,
"лек":1941,
"ran":1938,
"na_":1929,
"ниц":1929,
"оно":1929,
"всь":1925,
"чин":1925,
"нте":1916,
"цен":1912,
"ька":1912,
"ніш":1908,
"ve_":1905,
"ону":1901,
"уют":1900,
"вим":1898,
"авс":1897,
"nal":1896,
"pro":1893,
"пак":1892,
"еро":1889,
"вог":1884,
"ави":1883,
"зав":1883,
"ин_":1881,
"зал":1877,
"me_":1876,
"із_":1876,
"ідт":1874,
"_gr":1873,
"ове":1873,
"піс":1870,
"ons":1868,
"win":1865,
"сі_":1864,
"_tr":1863,
"_en":1862,
"иро":1862,
"уєт":1861,
"sto":1860,
"изн":1860,
"sch":1858,
"_ho":1857,
"ant":1855,
"иво":1855,
"ім_":1855,
"ra_":1853,
"де_":1851,
"кам":1851,
"лін":1847,
"нав":1846,
"тті":1842,
"ess":1838,
"_зо":1837,
"різ":1835,
"укр":1833,
"ідп":1833,
"обр":1832,
"аче":1829,
"це_":1829,
"хід":1823,
"тув":1822,
"men":1820,
"ty_":1820,
"по_":1820,
"_дв":1816,
"ari":1815,
"ших":1813,
"ад_":1811,
"окр":1811,
"опе":1811,
"інн":1805,
"бли":1804,
"соб":1802,
"гру":1801,
"он_":1801,
"_ім":1799,
"гат":1795,
"ита":1790,
"ian":1789,
"ули":1789,
"ипу":1788,
"орт":1787,
"_ри":1786,
"_й_":1785,
"_ле":1785,
"оле":1784,
"ar_":1781,
"вст":1780,
"цьк":1780,
"нтр":1779,
"сам":1779,
"йни":1778,
"вир":1777,
"нас":1777,
"зви":1776,
"om_":1775,
"йно":1775,
"mic":1772,
"вле":1769,
"ор_":1763,
"ect":1759,
"ona":1759,
"лиш":1758,
"_fi":1757,
"_зб":1757,
"вин":1757,
"rd_":1755,
"uni":1754,
"авл":1754,
"ерт":1754,
"сни":1753,
"ss_":1752,
"_іс":1750,
"ndo":1750,
"нут":1749,
"тва":1749,
"cha":1747,
"_гу":1746,
"тру":1743,
"уль":1743,
"аді":1741,
"mar":1734,
"ard":1733,
"era":1732,
"пом":1732,
"азв":1731,
"ern":1730,
"вис":1729,
"_on":1728,
"око":1726,
"ско":1724,
"ез_":1722,
"озр":1721,
"тни":1720,
"дав":1718,
"ень":1718,
"дит":1714,
"ame":1711,
"ак_":1710,
"лем":1710,
"_lo":1700,
"les":1698,
"ган":1697,
"икі":1695,
"нар":1691,
"nce":1690,
"ber":1689,
"ain":1683,
"edi":1680,
"авт":1673,
"tur":1672,
"_ку":1668,
"осл":1668,
"ord":1667,
"_ra":1663,
"вон":1660,
"ie_":1659,
"має":1659,
"уча":1657,
"лон":1656,
"рту":1656,
"рив":1651,
"_фр":1647,
"rat":1646,
"ros":1645,
"нти":1640,
"нши":1638,
"има":1637,
"тим":1631,
"анц":1630,
"cor":1629,
"it_":1629,
"rea":1629,
"_ту":1628,
"ric":1627,
"_wa":1626,
"ерв":1626,
"оме":1625,
"икл":1624,
"one":1623,
"вил":1623,
"пус":1623,
"ача":1614,
"лу_":1613,
"нії":1613,
"nde":1611,
"зво":1610,
"мог":1609,
"поз":1609,
"яка":1609,
"ктн":1608,
"дна":1606,
"вла":1605,
"зі_":1604,
"нан":1604,
"ути":1604,
"ито":1603,
"іме":1603,
"ях_":1601,
"os_":1599,
"ris":1599,
"_ja":1598,
"_фа":1598,
"обі":1597,
"між":1596,
"оби":1594,
"рад":1594,
"тна":1593,
"іка":1592,
"кат":1589,
"нст":1588,
"dow":1587,
"_as":1584,
"кці":1584,
"_др":1582,
"ряд":1580,
"рин":1579,
"_sh":1576,
"тог":1575,
"tic":1574,
"дат":1574,
"зов":1574,
"_вл":1572,
"амі":1571,
"_au":1570,
"апр":1569,
"баг":1568,
"рно":1567,
"ідк":1563,
"par":1561,
"ція":1561,
"_c_":1560,
"бом":1560,
"об_":1560,
"іал":1560,
"они":1557,
"пон":1552,
"авн":1551,
"vi_":1550,
"ате":1550,
"чі_":1550,
"ws_":1549,
"шен":1546,
"_br":1545,
"бор":1540,
"осо":1539,
"мар":1538,
"_iv":1537,
"кал":1536,
"щен":1536,
"min":1535,
"реж":1533,
"інт":1532,
"рни":1531,
"nat":1530,
"_sp":1525,
"важ":1525,
"_дж":1524,
"льб":1523,
"_сл":1520,
"ліз":1520,
"ан_":1519,
"оля":1519,
"тел":1519,
"іта":1517,
"онс":1515,
"поп":1515,
"іх_":1514,
"атк":1511,
"ope":1509,
"ема":1509,
"ині":1509,
"ожн":1509,
"там":1509,
"орг":1508,
"his":1505,
"бут":1505,
"_x_":1504
}
LanguageIdentifier.addProfile('uk', ngrams, 3846451);
})();
