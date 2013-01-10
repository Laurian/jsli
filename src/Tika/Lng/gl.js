/*!
 * gl addon for LanguageIdentifier v0.2
 * http://tika.apache.org/
 * https://github.com/mazko/jsli
 *
 * Copyright 13.01.10, Oleg Mazko
 * http://www.opensource.org/licenses/bsd-license.html
 */
(function() {
var ngrams = {
"_de":362561,
"de_":340477,
"os_":289211,
"as_":230680,
"_co":219796,
"do_":211969,
"_a_":176030,
"_e_":148881,
"ent":146587,
"_o_":144578,
"da_":144100,
"que":129396,
"_do":125347,
"en_":124546,
"nte":124516,
"es_":123737,
"_en":122599,
"_po":119323,
"ión":117837,
"te_":116335,
"_se":116250,
"_qu":114451,
"ón_":111221,
"ue_":110174,
"ra_":108855,
"con":104102,
"_no":103372,
"_es":102588,
"est":99822,
"_da":97953,
"_pa":96504,
"_ca":95634,
"_un":94718,
"ció":92440,
"_pr":91703,
"se_":91606,
"ado":90387,
"_re":88993,
"to_":86582,
"no_":82834,
"on_":82389,
"ia_":75136,
"men":74366,
"par":73303,
"sta":72331,
"ica":72002,
"al_":70803,
"aci":69207,
"dos":69086,
"res":68742,
"or_":68497,
"ta_":68082,
"ant":67278,
"is_":66568,
"com":64441,
"na_":63758,
"_na":62458,
"ro_":62412,
"_in":62205,
"_ma":60636,
"ida":58388,
"ar_":57239,
"des":56158,
"tra":55994,
"un_":54236,
"ade":54102,
"ist":53931,
"nha":53367,
"unh":52921,
"ter":52897,
"ha_":52204,
"_fo":52198,
"cia":52169,
"ada":51535,
"ou_":51441,
"ndo":50795,
"por":50783,
"an_":50601,
"lo_":50452,
"ara":49902,
"_as":48813,
"_te":48670,
"dad":48495,
"_pe":48329,
"ca_":48070,
"and":47367,
"ran":47229,
"mo_":47160,
"nto":47157,
"nci":47155,
"co_":46709,
"_os":46533,
"io_":46177,
"_me":45312,
"per":44965,
"pro":44009,
"_an":42944,
"la_":42826,
"_mo":42662,
"ste":42248,
"_di":42188,
"eir":41812,
"ns_":41575,
"ía_":40807,
"era":40030,
"_é_":38847,
"nta":38725,
"_so":38693,
"das":38426,
"ico":38241,
"ntr":37887,
"pre":37350,
"er_":37330,
"ici":37158,
"ita":37003,
"pol":36612,
"nde":36196,
"_tr":36019,
"tes":35915,
"ano":35863,
"ont":35798,
"ali":35501,
"str":34745,
"_al":34459,
"re_":34247,
"ina":34102,
"tro":33428,
"rio":33394,
"tic":33180,
"_ou":33167,
"ito":33072,
"art":32766,
"ron":32618,
"den":32334,
"ura":31657,
"tor":31585,
"tos":31346,
"nos":31266,
"ari":31176,
"tan":30842,
"ons":30673,
"omo":30623,
"ido":30315,
"for":30282,
"ame":30184,
"ais":30126,
"cas":29991,
"ort":29863,
"_ba":29474,
"rte":29021,
"ese":28913,
"eri":28638,
"esp":28464,
"óns":28461,
"enc":28443,
"end":28407,
"_sa":28381,
"_ex":28360,
"ras":28352,
"nda":28275,
"_su":28176,
"tad":28044,
"rec":27981,
"sti":27846,
"ten":27829,
"olo":27590,
"_ao":27559,
"ria":27535,
"can":27525,
"iro":27513,
"ona":27272,
"eu_":27225,
"_vi":26867,
"ma_":26654,
"_li":26245,
"rad":26126,
"oi_":26110,
"go_":25982,
"gra":25962,
"car":25913,
"ros":25908,
"man":25708,
"nti":25581,
"cid":25536,
"_ac":25512,
"err":25340,
"_gr":25284,
"ao_":25267,
"_ta":25168,
"tre":25002,
"mar":24844,
"ira":24809,
"ome":24729,
"seu":24658,
"_fi":24384,
"sen":24324,
"der":24286,
"ase":24256,
"_sú":24128,
"pri":24061,
"súa":24007,
"int":23838,
"ori":23784,
"ver":23650,
"aba":23626,
"tiv":23595,
"cio":23426,
"_to":23407,
"tal":23275,
"pos":23196,
"_si":23148,
"_ar":22915,
"esc":22887,
"_du":22810,
"ale":22764,
"_ve":22697,
"_ga":22689,
"tar":22611,
"ero":22392,
"tas":22355,
"_má":22351,
"ata":22275,
"ion":22168,
"_fa":22134,
"_at":22090,
"und":21998,
"ser":21863,
"uni":21857,
"iza":21734,
"_ci":21689,
"ece":21554,
"foi":21482,
"nic":21406,
"rma":21402,
"tur":21273,
"llo":21264,
"fic":21171,
"ela":21100,
"cos":20953,
"qui":20792,
"edi":20788,
"ect":20784,
"so_":20756,
"úa_":20748,
"cul":20692,
"sto":20669,
"lic":20603,
"sa_":20585,
"nse":20508,
"áis":20448,
"mái":20400,
"eci":20299,
"inc":20223,
"orm":20212,
"ola":20209,
"cor":20103,
"ide":20102,
"ría":20021,
"anc":19900,
"emp":19852,
"_lo":19761,
"non":19706,
"_ch":19631,
"lla":19566,
"_mi":19521,
"ren":19514,
"tem":19491,
"dor":19474,
"tam":19357,
"ime":19241,
"min":19064,
"cen":18957,
"_fr":18927,
"_mu":18869,
"nas":18844,
"nal":18819,
"cal":18730,
"ric":18711,
"ell":18705,
"ing":18689,
"las":18574,
"_cu":18510,
"ore":18426,
"egu":18394,
"los":18298,
"_le":18115,
"ña_":18107,
"ber":18042,
"ial":17988,
"rim":17899,
"za_":17888,
"les":17879,
"ere":17782,
"mpo":17780,
"cad":17751,
"nce":17739,
"ost":17638,
"ill":17603,
"mai":17603,
"_ce":17545,
"ers":17538,
"ele":17519,
"rra":17518,
"ema":17506,
"us_":17492,
"el_":17440,
"rei":17436,
"ios":17413,
"_cr":17364,
"ral":17314,
"rti":17312,
"gal":17248,
"rac":17190,
"act":17182,
"ili":17131,
"ens":17071,
"are":17051,
"_á_":16946,
"ern":16896,
"tri":16887,
"_va":16876,
"seg":16856,
"san":16814,
"uci":16718,
"out":16631,
"_el":16579,
"bre":16577,
"lle":16456,
"obr":16301,
"arr":16256,
"eme":16221,
"lar":16216,
"lan":16132,
"_xe":16131,
"son":16126,
"ode":16058,
"ind":15926,
"ora":15897,
"mes":15889,
"_ha":15869,
"oma":15822,
"_la":15814,
"ana":15813,
"esa":15801,
"én_":15759,
"nad":15707,
"ior":15661,
"_fe":15510,
"rea":15450,
"ond":15418,
"exi":15350,
"le_":15347,
"esi":15222,
"dia":15199,
"sió":15199,
"_or":15171,
"rit":15167,
"_ne":15165,
"rop":15128,
"omp":15055,
"dis":14925,
"_ro":14913,
"_im":14803,
"vo_":14698,
"fer":14659,
"nst":14615,
"_ap":14576,
"dic":14556,
"bra":14554,
"liz":14540,
"cto":14514,
"ces":14433,
"ega":14361,
"rre":14343,
"rta":14315,
"ias":14224,
"_au":14207,
"ban":14164,
"imp":14103,
"ula":14086,
"mer":14081,
"tin":14062,
"ert":14042,
"ivo":13967,
"mei":13910,
"ala":13877,
"ndi":13833,
"án_":13824,
"utr":13815,
"nom":13757,
"ama":13688,
"ini":13619,
"xa_":13614,
"odo":13596,
"mun":13512,
"_ti":13511,
"cri":13487,
"ast":13447,
"oca":13409,
"all":13356,
"itu":13293,
"alm":13278,
"ga_":13244,
"smo":13209,
"onc":13200,
"col":13194,
"oa_":13184,
"ian":13181,
"sid":13175,
"ulo":13143,
"aro":13137,
"lme":13124,
"cip":13101,
"gue":13066,
"ato":13042,
"gar":12993,
"ba_":12984,
"_ho":12954,
"nor":12952,
"cel":12939,
"cha":12923,
"po_":12920,
"mos":12885,
"eta":12816,
"nov":12809,
"cer":12788,
"amé":12750,
"lin":12726,
"_ad":12650,
"med":12649,
"ir_":12640,
"fra":12610,
"ati":12580,
"pod":12550,
"tua":12527,
"ate":12524,
"ino":12452,
"mas":12400,
"cam":12384,
"me_":12364,
"dun":12354,
"iva":12351,
"ous":12351,
"rro":12332,
"nac":12329,
"erm":12318,
"use":12244,
"_nu":12213,
"va_":12207,
"eno":12141,
"_am":12080,
"rat":12073,
"lia":11982,
"rel":11982,
"gun":11979,
"tid":11955,
"tod":11888,
"_em":11870,
"ans":11750,
"cci":11699,
"mad":11660,
"xe_":11600,
"ani":11593,
"spo":11587,
"mén":11560,
"ima":11538,
"apa":11527,
"ble":11527,
"eit":11474,
"eus":11472,
"uen":11466,
"fin":11465,
"_xu":11360,
"sco":11257,
"gre":11191,
"mil":11166,
"_ob":11130,
"arc":11089,
"_go":11057,
"mon":11055,
"bro":11039,
"tac":11030,
"ace":11011,
"nun":10990,
"_br":10984,
"ego":10983,
"coa":10964,
"uto":10953,
"moi":10925,
"rin":10892,
"spa":10890,
"spe":10810,
"dou":10803,
"_ra":10763,
"ive":10735,
"ven":10731,
"rna":10723,
"lec":10719,
"vol":10680,
"lid":10654,
"ult":10648,
"ena":10629,
"uer":10628,
"sic":10577,
"uro":10571,
"_er":10518,
"iña":10499,
"nsi":10498,
"_ab":10492,
"ses":10466,
"orr":10454,
"tab":10450,
"_lu":10418,
"asa":10411,
"_fu":10365,
"eco":10353,
"cre":10339,
"aio":10336,
"_xa":10328,
"stá":10311,
"rex":10309,
"var":10287,
"vid":10281,
"pal":10260,
"_gu":10253,
"oit":10247,
"pas":10243,
"mor":10211,
"_be":10197,
"nar":10190,
"reg":10189,
"asi":10187,
"ien":10186,
"nid":10156,
"mpe":10073,
"erí":10041,
"rar":10037,
"xo_":10031,
"bri":10026,
"ite":10010,
"ris":10002,
"és_":9966,
"pen":9881,
"_bo":9850,
"nes":9833,
"rib":9798,
"dur":9780,
"lem":9778,
"lon":9765,
"rom":9749,
"emb":9745,
"ai_":9725,
"lis":9721,
"ifi":9720,
"ngu":9703,
"oñe":9670,
"ivi":9635,
"che":9622,
"rep":9607,
"sob":9552,
"oro":9551,
"_pu":9527,
"_hi":9481,
"ret":9476,
"ce_":9473,
"ual":9446,
"ipa":9417,
"erc":9372,
"mpl":9357,
"bli":9331,
"lit":9329,
"obe":9280,
"rod":9267,
"unt":9249,
"sas":9230,
"lac":9226,
"mpr":9180,
"gua":9179,
"ord":9158,
"sit":9149,
"isi":9129,
"scr":9105,
"oci":9062,
"pañ":9040,
"duc":9027,
"axe":9009,
"poi":8958,
"nis":8940,
"ust":8940,
"ea_":8935,
"tel":8904,
"uga":8901,
"aña":8877,
"igo":8876,
"cat":8867,
"ete":8867,
"ago":8858,
"aca":8851,
"abi":8848,
"bal":8808,
"vis":8803,
"oni":8793,
"pec":8793,
"xer":8788,
"roc":8743,
"leg":8728,
"eli":8694,
"ota":8684,
"eo_":8683,
"úas":8682,
"rno":8677,
"lta":8642,
"bar":8631,
"ede":8630,
"tit":8600,
"obo":8587,
"ono":8567,
"sar":8551,
"fun":8548,
"ove":8531,
"gui":8512,
"rde":8509,
"gan":8496,
"ard":8474,
"_vo":8472,
"ez_":8467,
"rto":8460,
"gos":8447,
"_cl":8444,
"eso":8436,
"cti":8434,
"xen":8407,
"dem":8391,
"dio":8391,
"mat":8364,
"emi":8358,
"rso":8334,
"_pi":8293,
"osi":8293,
"sis":8248,
"coñ":8233,
"tru":8228,
"mic":8217,
"rem":8197,
"aso":8187,
"rab":8164,
"alg":8160,
"índ":8157,
"lor":8131,
"erv":8111,
"pob":8106,
"nza":8104,
"mit":8070,
"ois":8070,
"tig":8069,
"_sé":8062,
"cie":8048,
"iu_":8036,
"lad":8034,
"il_":8000,
"exa":7979,
"ixi":7976,
"_oc":7970,
"atr":7966,
"met":7951,
"mbr":7949,
"bas":7946,
"in_":7941,
"val":7934,
"ctu":7922,
"alt":7902,
"zad":7892,
"cap":7870,
"ane":7861,
"adi":7858,
"ume":7838,
"ism":7834,
"imi":7823,
"ixo":7809,
"ñec":7803,
"ram":7798,
"pa_":7782,
"elo":7769,
"boa":7755,
"fil":7752,
"hab":7737,
"exp":7725,
"iga":7706,
"_ó_":7675,
"ii_":7662,
"écu":7649,
"ins":7643,
"nve":7642,
"_on":7620,
"arí":7619,
"osa":7619,
"red":7619,
"ami":7607,
"pla":7596,
"rov":7582,
"íti":7570,
"dir":7566,
"día":7526,
"ine":7524,
"abe":7499,
"sos":7496,
"ecu":7478,
"rca":7475,
"bit":7457,
"imo":7450,
"nia":7423,
"séc":7409,
"til":7379,
"eda":7317,
"dec":7311,
"esm":7310,
"zo_":7296,
"_xo":7286,
"rse":7285,
"ño_":7283,
"_bi":7272,
"rri":7254,
"ogr":7242,
"pon":7234,
"dep":7233,
"atu":7227,
"usa":7196,
"omi":7188,
"rqu":7185,
"aut":7173,
"_ag":7131,
"eal":7131,
"dar":7120,
"eza":7119,
"ene":7106,
"gad":7098,
"stu":7087,
"rid":7086,
"oqu":7076,
"_he":7072,
"sup":7068,
"cla":7052,
"nco":7047,
"erd":7044,
"ovi":7026,
"tud":7026,
"lat":7021,
"río":7019,
"emo":7010,
"_ni":6998,
"tán":6992,
"efe":6988,
"sin":6964,
"_il":6946,
"del":6943,
"bel":6936,
"etr":6925,
"len":6898,
"_eu":6891,
"loc":6890,
"sca":6888,
"ova":6883,
"opa":6880,
"dif":6865,
"amp":6859,
"oli":6853,
"rci":6853,
"sol":6818,
"odu":6814,
"rie":6814,
"equ":6804,
"oso":6804,
"ler":6798,
"ís_":6780,
"exe":6776,
"cac":6775,
"tou":6755,
"deb":6739,
"_is":6728,
"_pl":6711,
"alo":6711,
"ire":6709,
"bai":6685,
"lev":6674,
"eva":6669,
"xis":6667,
"aín":6665,
"dan":6638,
"rga":6615,
"iti":6611,
"ext":6592,
"inf":6586,
"_ri":6566,
"aix":6562,
"ila":6524,
"_aí":6513,
"aco":6499,
"aís":6499,
"tá_":6488,
"vas":6476,
"ref":6471,
"cab":6468,
"olí":6448,
"abr":6427,
"ull":6420,
"sem":6403,
"edo":6393,
"his":6392,
"gob":6374,
"tim":6361,
"rmi":6329,
"ogo":6321,
"tiñ":6290,
"abl":6288,
"ose":6280,
"rix":6280,
"vin":6258,
"ás_":6258,
"año":6250,
"div":6227,
"mpa":6225,
"tir":6224,
"nat":6222,
"fac":6207,
"isc":6197,
"lei":6196,
"ol_":6166,
"lib":6160,
"ton":6141,
"paí":6137,
"iad":6131,
"ped":6109,
"sal":6086,
"ner":6083,
"ham":6073,
"rev":6056,
"lti":6054,
"dei":6052,
"rda":6044,
"sur":6038,
"uia":6008,
"ías":5990,
"opi":5979,
"_us":5975,
"ei_":5962,
"opo":5951,
"aqu":5940,
"mac":5923,
"_of":5905,
"rme":5898,
"soc":5887,
"amb":5874,
"van":5846,
"rai":5843,
"zar":5841,
"rou":5834,
"ecc":5824,
"vos":5812,
"zas":5804,
"cun":5799,
"vil":5790,
"eto":5779,
"bor":5774,
"mal":5716,
"anz":5701,
"eur":5696,
"rob":5686,
"adr":5682,
"orn":5682,
"ixe":5672,
"roq":5662,
"rav":5649,
"oce":5641,
"lab":5628,
"ote":5622,
"gas":5610,
"rot":5605,
"onv":5604,
"lug":5599,
"lim":5591,
"mel":5589,
"tec":5589,
"ong":5579,
"mul":5568,
"lít":5564,
"log":5563,
"_ed":5562,
"vel":5561,
"amo":5554,
"ovo":5553,
"unc":5546,
"uti":5522,
"oac":5520,
"ua_":5511,
"_id":5508,
"ave":5505,
"aos":5486,
"nai":5484,
"ein":5460,
"ole":5452,
"evi":5441,
"did":5438,
"sul":5432,
"ur_":5427,
"ben":5419,
"cur":5409,
"nsa":5408,
"one":5404,
"uel":5398,
"olu":5376,
"sec":5371,
"mez":5362,
"cem":5356,
"mod":5348,
"raz":5337,
"nan":5326,
"pit":5325,
"hom":5292,
"_ec":5272,
"ope":5245,
"abo":5242,
"rón":5228,
"org":5223,
"xic":5218,
"ve_":5217,
"zac":5199,
"scu":5182,
"orí":5181,
"pad":5172,
"dra":5171,
"ues":5167,
"heg":5146,
"oto":5143,
"ibe":5142,
"_af":5134,
"así":5133,
"rsi":5117,
"_ig":5107,
"plo":5104,
"ibi":5091,
"ne_":5090,
"ced":5075,
"mán":5054,
"xió":5043,
"olv":5041,
"_rí":5035,
"arq":5025,
"lve":5018,
"ío_":5013,
"ían":5003,
"iño":4995,
"ves":4994,
"_dí":4990,
"tei":4989,
"cin":4980,
"edr":4980,
"fal":4976,
"xec":4976,
"mis":4957,
"ipo":4954,
"ple":4954,
"apo":4943,
"rup":4941,
"mbi":4927,
"_ir":4924,
"pra":4919,
"ars":4917,
"xun":4904,
"_bu":4903,
"pul":4902,
"pan":4898,
"arl":4897,
"xía":4891,
"áti":4886,
"aza":4880,
"bo_":4873,
"evo":4873,
"ilo":4869,
"tom":4860,
"pio":4854,
"cou":4850,
"inv":4847,
"sub":4846,
"bil":4845,
"iar":4841,
"igr":4839,
"nca":4830,
"sí_":4825,
"_xi":4816,
"pou":4796,
"via":4787,
"api":4775,
"upo":4769,
"vad":4764,
"ile":4762,
"egr":4759,
"hai":4759,
"_th":4752,
"lam":4750,
"aus":4736
}
LanguageIdentifier.addProfile('gl', ngrams, 20288369);
})();
