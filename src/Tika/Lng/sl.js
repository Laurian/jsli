/*!
 * sl addon for LanguageIdentifier v0.2
 * http://tika.apache.org/
 * https://github.com/mazko/jsli
 *
 * Copyright 13.01.10, Oleg Mazko
 * http://www.opensource.org/licenses/bsd-license.html
 */
(function() {
var ngrams = {
"je_":254248,
"_je":175460,
"_po":157653,
"_pr":153889,
"_na":146947,
"na_":123177,
"in_":113877,
"_in":113626,
"_za":108679,
"_v_":105174,
"ih_":97106,
"ki_":92808,
"no_":86653,
"ja_":85091,
"_se":77030,
"ni_":76362,
"ta_":74384,
"ne_":71570,
"_so":69646,
"pre":69178,
"ko_":68876,
"ga_":63773,
"li_":61861,
"_ko":61274,
"em_":61169,
"jo_":60836,
"_le":60552,
"sta":59864,
"se_":58235,
"ost":57799,
"so_":56906,
"ti_":56256,
"nje":54926,
"la_":53616,
"let":52995,
"ke_":52660,
"_ka":52035,
"_ki":51309,
"pri":51232,
"_bi":51020,
"_iz":50936,
"ega":50289,
"anj":49748,
"_te":48980,
"_do":46792,
"di_":44935,
"_ve":44305,
"_me":44109,
"ka_":44005,
"il_":43393,
"_pa":42651,
"bil":42312,
"_ra":42223,
"_ne":42023,
"_ob":41725,
"ali":41722,
"_st":41402,
"red":40850,
"ija":40419,
"_ta":40073,
"eta":39957,
"za_":39902,
"ov_":39794,
"ate":39283,
"da_":38884,
"_de":38825,
"er_":37691,
"al_":37578,
"ski":36890,
"sti":36831,
"_da":36544,
"_od":36507,
"del":36116,
"lo_":35619,
"ove":34994,
"ske":34973,
"ter":34840,
"raz":34746,
"ova":34441,
"nsk":34339,
"ma_":34279,
"udi":33094,
"nih":32076,
"jen":32003,
"lov":31555,
"voj":31522,
"nik":31499,
"ji_":31310,
"ran":31287,
"_ma":31099,
"jem":30990,
"nov":30857,
"to_":30412,
"kat":30212,
"_tu":30092,
"eni":29985,
"ori":29808,
"men":29725,
"sto":29672,
"rij":29321,
"_dr":29243,
"pa_":29163,
"lje":28994,
"str":28868,
"en_":28448,
"_mo":28431,
"lja":28205,
"pos":28096,
"_z_":27873,
"ani":27817,
"_vo":27719,
"rav":27380,
"eli":27363,
"pro":27329,
"tud":26854,
"ri_":26093,
"est":26042,
"_re":25787,
"lik":25711,
"val":25540,
"ego":25498,
"nos":25415,
"ist":24943,
"ije":24902,
"pod":24852,
"_sl":24764,
"sko":24588,
"ila":24560,
"_sv":24431,
"van":24302,
"_sp":24297,
"va_":24237,
"ovi":24198,
"ven":24181,
"kov":24047,
"por":23836,
"ed_":23644,
"mi_":23615,
"el_":23524,
"zna":23509,
"ičn":23399,
"tem":23226,
"ati":23225,
"od_":23218,
"eno":23180,
"pol":23079,
"aj_":23043,
"ast":22905,
"ili":22787,
"tal":22700,
"_kr":22621,
"ime":22571,
"le_":22519,
"po_":22482,
"eri":22230,
"ju_":22174,
"om_":22160,
"med":22136,
"avi":22104,
"ora":22081,
"_bo":22028,
"naj":22023,
"ot_":21923,
"elo":21921,
"ema":21917,
"lju":21876,
"vo_":21876,
"_im":21781,
"_nj":21706,
"ve_":21647,
"pra":21642,
"iko":21561,
"lan":21521,
"kot":21494,
"nja":21463,
"dru":21355,
"ijo":21284,
"gor":21263,
"cij":21189,
"teg":21149,
"_to":21118,
"_s_":21054,
"oli":21053,
"vil":21011,
"ene":20912,
"vi_":20900,
"_tr":20846,
"gra":20754,
"jsk":20669,
"tra":20502,
"_la":20379,
"ako":20315,
"ena":20188,
"_al":20104,
"kih":20002,
"kra":19922,
"tan":19741,
"elj":19717,
"_si":19625,
"_sk":19592,
"edn":19589,
"rad":19556,
"_sa":19404,
"ina":19337,
"_ni":19252,
"več":19104,
"aje":19061,
"slo":18658,
"st_":18647,
"ral":18640,
"nem":18521,
"vel":18450,
"im_":18442,
"jan":18400,
"rat":18361,
"ele":18351,
"ev_":18310,
"mer":18285,
"_vs":18048,
"an_":17950,
"aln":17831,
"_us":17830,
"do_":17794,
"ajo":17770,
"ala":17748,
"jih":17579,
"gov":17521,
"ste":17511,
"ska":17474,
"ilo":17404,
"neg":17379,
"ika":17266,
"ans":17152,
"_en":17109,
"nji":17030,
"stv":16891,
"eva":16874,
"ira":16860,
"_no":16825,
"uje":16698,
"ik_":16558,
"ome":16536,
"te_":16499,
"tev":16473,
"adi":16453,
"olj":16392,
"ar_":16280,
"kon":16213,
"avn":16170,
"vlj":16028,
"ine":16020,
"ane":16006,
"tni":15839,
"iti":15832,
"ra_":15796,
"pov":15773,
"ana":15735,
"enj":15733,
"iz_":15711,
"jev":15673,
"_ce":15604,
"tov":15518,
"mo_":15463,
"ara":15442,
"ato":15430,
"tak":15418,
"ank":15343,
"edi":15339,
"nas":15262,
"tro":15252,
"_os":15220,
"odn":15154,
"ame":15153,
"čin":15104,
"zaj":15089,
"_čl":14978,
"pom":14862,
"_gl":14758,
"las":14724,
"aja":14713,
"ovo":14692,
"_o_":14611,
"olo":14555,
"tav":14517,
"vet":14495,
"ano":14387,
"_ga":14342,
"iji":14320,
"ini":14240,
"imi":14231,
"ca_":14221,
"iki":14210,
"ent":14180,
"tor":14180,
"ogo":14169,
"vni":14162,
"aci":14114,
"_ro":14109,
"dob":14102,
"ela":14020,
"prv":13986,
"čni":13940,
"tre":13907,
"_vi":13899,
"svo":13875,
"lni":13847,
"vse":13810,
"_up":13796,
"še_":13782,
"_št":13712,
"evi":13671,
"eti":13669,
"_gr":13647,
"dno":13579,
"nij":13550,
"gla":13491,
"nim":13473,
"_mi":13429,
"dni":13314,
"oma":13289,
"bi_":13273,
"ite":13266,
"ari":13239,
"jeg":13230,
"ver":13226,
"rug":13224,
"nan":13126,
"ede":13113,
"ovn":13029,
"ust":13013,
"sve":12956,
"ino":12871,
"odo":12864,
"ce_":12845,
"mes":12838,
"led":12830,
"rsk":12823,
"nar":12810,
"man":12806,
"nam":12768,
"tri":12761,
"_pe":12712,
"rej":12706,
"_br":12660,
"čla":12632,
"rje":12616,
"pot":12615,
"de_":12604,
"ava":12598,
"lad":12591,
"dal":12536,
"_go":12514,
"_zn":12487,
"_lj":12468,
"met":12403,
"ah_":12402,
"etn":12318,
"re_":12314,
"eka":12311,
"rab":12302,
"alo":12278,
"mor":12241,
"ens":12239,
"nek":12227,
"on_":12225,
"raj":12191,
"keg":12186,
"eje":12182,
"kol":12152,
"rem":12080,
"blj":12075,
"_še":12003,
"odi":12000,
"eto":11986,
"_vr":11968,
"ita":11907,
"tu_":11905,
"upo":11885,
"ose":11836,
"_pl":11830,
"rja":11818,
"ški":11732,
"ojn":11718,
"rod":11693,
"dan":11674,
"ica":11590,
"avl":11535,
"bol":11509,
"bli":11497,
"am_":11491,
"tel":11456,
"kar":11449,
"_be":11446,
"pis":11401,
"rim":11394,
"čas":11379,
"ale":11378,
"če_":11318,
"nic":11300,
"spo":11295,
"eve":11294,
"_op":11285,
"jal":11282,
"eda":11239,
"mu_":11236,
"oko":11221,
"lin":11215,
"alj":11191,
"ima":11161,
"išk":11151,
"vno":11148,
"ole":11129,
"_an":11122,
"bra":11115,
"oto":11086,
"kem":11068,
"ci_":11061,
"lav":11056,
"eme":11036,
"vod":11027,
"oda":11020,
"rni":10998,
"arj":10997,
"sku":10965,
"tič":10955,
"ada":10939,
"_ba":10931,
"dov":10926,
"dnj":10923,
"tno":10871,
"čne":10835,
"or_":10833,
"vez":10809,
"mat":10732,
"es_":10699,
"oje":10699,
"lj_":10655,
"lah":10616,
"nej":10592,
"dar":10557,
"šte":10546,
"ave":10545,
"amo":10487,
"čno":10478,
"sam":10431,
"dil":10388,
"ore":10383,
"ese":10375,
"rit":10311,
"ice":10305,
"ijs":10303,
"era":10287,
"spr":10138,
"oči":10116,
"_di":10086,
"ved":10063,
"_ja":10059,
"kom":9989,
"vin":9947,
"_ok":9943,
"ške":9940,
"ško":9940,
"top":9926,
"sed":9914,
"ami":9896,
"ins":9864,
"ače":9858,
"var":9844,
"ezn":9839,
"obl":9818,
"gle":9817,
"_ju":9811,
"hod":9777,
"oja":9739,
"dol":9734,
"ris":9732,
"et_":9730,
"ike":9713,
"iva":9702,
"kri":9688,
"čen":9661,
"jav":9634,
"kup":9603,
"nal":9602,
"_že":9591,
"nke":9554,
"ode":9554,
"ote":9508,
"ahk":9499,
"oro":9471,
"ere":9380,
"ek_":9369,
"sre":9355,
"ren":9335,
"_jo":9327,
"nap":9263,
"hko":9256,
"ej_":9246,
"obi":9240,
"lij":9199,
"_fr":9146,
"ono":9137,
"_fi":9097,
"_ča":9095,
"log":9095,
"seb":9086,
"lji":9074,
"bo_":9025,
"and":9015,
"ona":8967,
"ejo":8935,
"anc":8915,
"tar":8880,
"nad":8879,
"drž":8866,
"stn":8854,
"_zg":8845,
"_ze":8836,
"eč_":8814,
"nač":8807,
"rst":8784,
"ant":8759,
"den":8756,
"ros":8728,
"tek":8721,
"per":8716,
"ro_":8699,
"mar":8691,
"živ":8684,
"nom":8675,
"tur":8659,
"adn":8658,
"ril":8626,
"_dv":8608,
"res":8581,
"pad":8522,
"aro":8460,
"ici":8429,
"rek":8426,
"nju":8419,
"_zd":8415,
"jud":8405,
"_sr":8391,
"rža":8375,
"zar":8372,
"_oz":8368,
"nes":8360,
"_ji":8352,
"išč":8352,
"sa_":8341,
"oti":8338,
"lit":8337,
"si_":8335,
"ete":8333,
"ern":8330,
"žav":8305,
"tvo":8291,
"omo":8272,
"zem":8272,
"obr":8256,
"rep":8252,
"_lo":8246,
"_ti":8218,
"ekt":8218,
"_pi":8183,
"_va":8164,
"ozn":8144,
"_li":8137,
"_ar":8136,
"dij":8116,
"nav":8079,
"rot":8076,
"iln":8064,
"ku_":8060,
"rom":8059,
"ejš":8058,
"_če":8056,
"rev":8023,
"tva":8011,
"zap":8008,
"rov":7977,
"at_":7961,
"ij_":7959,
"oji":7947,
"sno":7937,
"isa":7920,
"vne":7912,
"dne":7906,
"ben":7887,
"be_":7881,
"oni":7850,
"žen":7843,
"reb":7838,
"moč":7828,
"emi":7815,
"lno":7800,
"sla":7800,
"roč":7787,
"čil":7763,
"spe":7726,
"sem":7714,
"zve":7713,
"jub":7702,
"erj":7672,
"me_":7666,
"nil":7655,
"_or":7603,
"nat":7593,
"zač":7586,
"msk":7547,
"lič":7545,
"iso":7536,
"ubl":7500,
"god":7459,
"oče":7457,
"eh_":7450,
"opi":7440,
"azl":7437,
"_ži":7431,
"_hi":7419,
"kor":7400,
"otr":7391,
"osl":7382,
"tih":7354,
"kan":7350,
"eds":7330,
"mel":7319,
"emo":7315,
"par":7311,
"nda":7307,
"izv":7305,
"tne":7274,
"oka":7241,
"lek":7237,
"dst":7228,
"ruž":7191,
"ade":7188,
"min":7184,
"fra":7182,
"gos":7175,
"plo":7174,
"_vz":7150,
"vor":7149,
"ss_":7119,
"kal":7110,
"zgo":7088,
"ogr":7087,
"riš":7081,
"ec_":7080,
"orj":7080,
"orn":7076,
"_um":7064,
"apo":7018,
"rvi":7005,
"_zv":6991,
"ata":6978,
"uni":6968,
"cel":6965,
"že_":6960,
"ram":6958,
"izi":6934,
"ero":6917,
"lu_":6909,
"ge_":6907,
"arn":6878,
"azi":6877,
"ars":6868,
"zel":6844,
"nst":6835,
"daj":6826,
"ive":6818,
"lne":6814,
"pog":6807,
"jer":6801,
"tik":6799,
"niš":6784,
"zli":6777,
"emb":6767,
"nis":6755,
"ron":6754,
"poz":6750,
"aka":6746,
"loč":6743,
"ret":6739,
"rno":6738,
"etu":6736,
"go_":6728,
"tol":6706,
"rne":6701,
"nci":6699,
"ča_":6693,
"isk":6687,
"jši":6687,
"sle":6632,
"sil":6630,
"avo":6615,
"ba_":6588,
"ile":6588,
"uss":6588,
"sod":6584,
"šči":6583,
"bor":6581,
"ner":6581,
"ašk":6577,
"mal":6565,
"nce":6557,
"_ri":6546,
"mlj":6541,
"tin":6533,
"_kl":6530,
"_ke":6528,
"pla":6515,
"jaj":6512,
"ion":6510,
"_sm":6507,
"eza":6496,
"are":6495,
"_ge":6472,
"ten":6469,
"sov":6465,
"ozi":6444,
"dra":6437,
"sel":6432,
"sne":6429,
"tve":6385,
"zda":6368,
"rog":6358,
"du_":6338,
"rez":6337,
"odp":6323,
"zra":6322,
"asn":6320,
"otn":6319,
"sli":6317,
"eko":6316,
"gan":6305,
"_mu":6297,
"abl":6296,
"_am":6272,
"itv":6254,
"gij":6240,
"ope":6228,
"end":6218,
"av_":6214,
"not":6200,
"ang":6198,
"ton":6195,
"zij":6186,
"kje":6185,
"_av":6176,
"bno":6167,
"opa":6163,
"cer":6161,
"šče":6139,
"ugi":6138,
"kla":6137,
"igr":6136,
"obe":6128,
"ide":6122,
"obn":6121,
"rop":6120,
"dom":6119,
"kaj":6100,
"emu":6088,
"ber":6084,
"vit":6082,
"ak_":6067,
"tom":6058,
"jet":6051,
"rva":6018,
"jni":6006,
"_kj":6003,
"_el":6002,
"ons":5999,
"ob_":5973,
"čel":5971,
"nak":5963,
"nu_":5957,
"reg":5934,
"les":5933,
"zni":5924,
"lic":5917,
"kro":5908,
"din":5907,
"_ig":5900,
"_ur":5897,
"maj":5890,
"asi":5882,
"mem":5876,
"zan":5864,
"_ha":5854,
"jno":5842,
"enc":5823,
"gen":5816,
"len":5812,
"ad_":5805,
"pin":5798,
"eči":5787,
"opo":5780,
"hov":5779,
"kim":5767,
"rih":5765,
"nte":5760,
"eml":5758,
"okr":5755,
"nti":5731,
"art":5725,
"očj":5713,
"pon":5703,
"tis":5690,
"taj":5679,
"co_":5661,
"šča":5649,
"dat":5632,
"su_":5627,
"gi_":5593,
"naš":5591,
"ogi":5587,
"tiv":5587,
"ivi":5578,
"zav":5555,
"net":5552,
"cev":5546,
"rin":5544,
"ezi":5540,
"ase":5536,
"rik":5517,
"lem":5513,
"rip":5507,
"zad":5505,
"obo":5487,
"niz":5485,
"_ev":5474,
"nta":5468,
"sev":5454,
"mno":5447,
"esa":5427,
"bni":5418,
"odr":5414,
"jez":5409,
"mag":5407,
"rič":5407,
"vol":5406,
"omi":5381,
"jej":5369,
"nit":5360,
"una":5360,
"vih":5354,
"klj":5344,
"asl":5343,
"ači":5343,
"upi":5339,
"lom":5335,
"či_":5323,
"san":5322,
"ado":5308,
"rok":5303,
"sni":5303,
"nog":5301,
"ečj":5292,
"rti":5285,
"ses":5281,
"ugo":5279,
"til":5270,
"bri":5262,
"ume":5262,
"ogl":5260,
"epr":5245,
"čan":5239,
"leg":5227,
"tok":5221,
"alc":5216,
"ešk":5215,
"iri":5212,
"pet":5212,
"as_":5205,
"ru_":5205,
"reč":5199,
"vaj":5176,
"zik":5174,
"zat":5170,
"ple":5169,
"_he":5160,
"osk":5159,
"oln":5152,
"_vl":5145,
"bel":5145,
"son":5135,
"zvo":5132,
"onc":5130,
"bit":5129,
"zdr":5121,
"tsk":5107,
"vij":5101,
"vir":5097,
"dos":5095,
"iza":5095,
"imo":5089,
"rel":5075,
"rač":5050,
"očn":5049,
"ška":5048,
"ard":5046,
"azv":5044,
"api":5027,
"ši_":5020,
"žno":5019,
"lat":5015,
"bre":5014,
"eja":5007,
"esn":4997,
"for":4975,
"gre":4969,
"vis":4969,
"vid":4956,
"etr":4949,
"oča":4948,
"dro":4947,
"izr":4945,
"ivn":4940,
"zah":4931,
"lsk":4928,
"kaz":4921,
"jim":4906,
"vla":4892,
"etj":4879,
"pok":4878,
"vrs":4868,
"_is":4866,
"rid":4861,
"ker":4860,
"ebn":4856,
"boj":4855,
"rib":4853,
"lko":4839,
"nič":4832,
"bar":4817,
"vsa":4803,
"oj_":4800,
"is_":4796,
"ure":4795,
"onč":4792,
"rak":4789,
"cen":4788,
"saj":4750,
"zde":4747,
"rob":4738,
"ito":4736,
"vsk":4736,
"loš":4731,
"ial":4723,
"žel":4719,
"rož":4716,
"pop":4712,
"vna":4707,
"čet":4700,
"_un":4689,
"gal":4688,
"uži":4683,
"evr":4680,
"vro":4676,
"ras":4674,
"ico":4671,
"zas":4664,
"abi":4655,
"obs":4644,
"ing":4640,
"org":4634,
"jst":4633,
"_ca":4628,
"_mn":4615,
"kop":4590,
"čev":4570,
"ago":4560,
"rna":4556,
"enu":4554,
"opr":4549,
"tru":4549,
"_co":4548,
"ces":4542,
"_ru":4535,
"_wi":4523,
"_bl":4513,
"elu":4508,
"_ot":4501,
"rma":4501,
"izm":4489,
"_ku":4484,
"aga":4469,
"mon":4454,
"zal":4450,
"zme":4443,
"_fo":4439,
"nj_":4422,
"mov":4419,
"izd":4417,
"oga":4417,
"zvi":4405,
"ojs":4403,
"poj":4402
}
LanguageIdentifier.addProfile('sl', ngrams, 15068758);
})();
