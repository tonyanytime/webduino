var DeepLearning_example_001 = '<xml xmlns="http://www.w3.org/1999/xhtml"><variables><variable type="" id="4`B?dIn~w{QJIv|uBt1Y">RunState</variable><variable type="" id="oE6)%Si}1MY(zPru9%{~">fuTimer</variable></variables><block type="comment" id="DE`*![V97NWbR^-$il$7" x="46" y="-133"><value name="text"><block type="text" id="Oc:KGm:G:TE,J)r[;dln"><field name="TEXT">You must use "Export HTML" to run Deep Learning.</field></block></value><next><block type="comment" id="#_O1-|C;.`:9p3/-h$if"><value name="text"><block type="text" id="XGk=I=,J,`KzDNE3ZRd:"><field name="TEXT">It will take a little time to load js file.</field></block></value><next><block type="variables_set" id="MmK)Ucp2H]gHS[GOH{V,"><field name="VAR" id="4`B?dIn~w{QJIv|uBt1Y" variabletype="">RunState</field><value name="VALUE"><block type="logic_boolean" id="~kHcqO,QwV%?HQVU!BNX"><field name="BOOL">FALSE</field></block></value><next><block type="keyboard_listener" id="].aaIZh:-tYcZ*NLQL_b"><field name="event">keydown</field><statement name="statement"><block type="controls_if" id="DT)%0vBlj.t=ALrg#uj."><value name="IF0"><block type="keyboard_keycode" id="/!R%gLTE]=ajIeXFXX7+"><field name="keycode">13</field></block></value><statement name="DO0"><block type="variables_set" id="($TF^W|nkPm?izI.Q`8{"><field name="VAR" id="4`B?dIn~w{QJIv|uBt1Y" variabletype="">RunState</field><value name="VALUE"><block type="logic_boolean" id="zrznA$LB9/|rKHXZguAI"><field name="BOOL">TRUE</field></block></value></block></statement></block></statement><next><block type="image_create" id="dN:N-BQV+,#UelP??pdw"><value name="id_"><block type="text" id="YUKk*^cpsbZZ0(2SJ*JD"><field name="TEXT">role</field></block></value><value name="url_"><block type="text" id="MCgFr@o6;6)lJu5kc,]K"><field name="TEXT">https://pic.pimg.tw/yide168/1512182509-918346.png</field></block></value><value name="width_"><block type="math_number" id="C#R{?YlY,*YR2,h(D*`I"><field name="NUM">100</field></block></value><value name="height_"><block type="math_number" id="|.Vt0)hmIO]dXm=?#K)M"><field name="NUM">100</field></block></value><value name="left_"><block type="math_number" id="oy_4r~/XvGhYZT!RZI?:"><field name="NUM">300</field></block></value><value name="top_"><block type="math_number" id="IJ2#A0Q85-wJ*peMwlPr"><field name="NUM">200</field></block></value><value name="zindex_"><block type="math_number" id="$[$8iF-FU})oD4SHrovi"><field name="NUM">999</field></block></value><value name="display_"><block type="logic_boolean" id="$b%oyHbX`8.x5+ph;r}j"><field name="BOOL">FALSE</field></block></value><next><block type="table_create" id="wwu=^1dU7.=}CY~TFYmo"><field name="borderstyle_">solid</field><value name="id_"><block type="text" id="^tk.Fxbt3;gs,zds]cG+"><field name="TEXT">background</field></block></value><value name="left_"><block type="math_number" id="JwcPqsa$Pt/AyY5V*r44"><field name="NUM">0</field></block></value><value name="top_"><block type="math_number" id="B61R`O;?@Xe|_MytS%v?"><field name="NUM">0</field></block></value><value name="borderwidth_"><block type="math_number" id="(2=384V@o+P!G5,pIrsv"><field name="NUM">1</field></block></value><value name="bordercolor_"><block type="colour_picker" id="}wEQ^Ipe]u(1VH_d!+nR"><field name="COLOUR">#ffffff</field></block></value><value name="trcount_"><block type="math_number" id="p/PQ~c(G;|tAX5nU-U[v"><field name="NUM">1</field></block></value><value name="tdcount_"><block type="math_number" id="eIbvLINL8.[NoCC9|Shg"><field name="NUM">1</field></block></value><value name="width_"><block type="math_number" id="1=(f-c5fRA3KE2~#bTG9"><field name="NUM">1024</field></block></value><value name="height_"><block type="math_number" id="mWvd73UKyOOFe3J$W5-B"><field name="NUM">768</field></block></value><value name="bgcolor_"><block type="colour_picker" id="~Sqq@-pA6LTaI.L2J:2b"><field name="COLOUR">#ffffff</field></block></value><value name="zindex_"><block type="math_number" id="rii{Tb3_LWzV%qzDsQaG"><field name="NUM">998</field></block></value><value name="display_"><block type="logic_boolean" id="C})fu9ZP.U@XaUf?sErq"><field name="BOOL">FALSE</field></block></value><next><block type="teachable_machine_open" id="reSx8.1Q;F@qH14=#u0#"><next><block type="document_timer" id="jU+Rc5f7B91;M^0|@=y`"><field name="fuTimer_" id="oE6)%Si}1MY(zPru9%{~" variabletype="">fuTimer</field><value name="intervals_"><block type="math_number" id="i.C*sK5-V~?+]m+zPLNR"><field name="NUM">100</field></block></value><statement name="do_"><block type="showtext" id="..QBI5T~Q?mhAk*j?]M6"><value name="size"><block type="math_number" id="`67/N@ou+[?=Zdc*8M0/"><field name="NUM">20</field></block></value><value name="color"><block type="colour_picker" id="ZPA^Qd7|HP?5`5grAI0N"><field name="COLOUR">#ff0000</field></block></value><value name="text"><block type="text_join" id="-FBix5W7@^:c:=9yl6+p"><mutation items="5"></mutation><value name="ADD0"><block type="text" id="(wq^JH:{s,(U+6p0Jm6;"><field name="TEXT">train: </field></block></value><value name="ADD1"><block type="teachable_machine_proportion" id="p}Pyfxy(Of/r=yJ2di[3"><field name="property_">train</field></block></value><value name="ADD2"><block type="text" id="i]5umJesxb#El^XZctV;"><field name="TEXT">, probability: </field></block></value><value name="ADD3"><block type="teachable_machine_proportion" id="F%)eCe`3j@Hm{N+csk7U"><field name="property_">probability</field></block></value><value name="ADD4"><block type="text" id=",0,?wrgxpu[})N^S=F`^"><field name="TEXT"> (Press Enter to run code)</field></block></value></block></value><next><block type="controls_if" id="WaYX0yTbICkAP%|*X(-?"><value name="IF0"><block type="logic_compare" id="t=9*fLJui.yk:w3;@cF:"><field name="OP">EQ</field><value name="A"><block type="variables_get" id="g5Vh9|An`Ukb(G^2ZB2u"><field name="VAR" id="4`B?dIn~w{QJIv|uBt1Y" variabletype="">RunState</field></block></value><value name="B"><block type="logic_boolean" id="N,B`:Id7EIXGS^Lu_NTa"><field name="BOOL">TRUE</field></block></value></block></value><statement name="DO0"><block type="image_set" id="{Ki{nH1RgU,nN2BOONP!"><field name="property_">display</field><value name="id_"><block type="text" id="YUyI$jMIr*2bs#PWYZ-j"><field name="TEXT">role</field></block></value><value name="value_"><block type="logic_boolean" id="|K2kdipxm3MTfef*)Xw7"><field name="BOOL">TRUE</field></block></value><next><block type="table_set" id="G99/Vwlb%`x2w#@J2,{L"><field name="property_">display</field><value name="id_"><block type="text" id=":J24GXb9o|?X!Z:4U-_D"><field name="TEXT">background</field></block></value><value name="value_"><block type="logic_boolean" id="|quKQPCg]CgZ^`_]G4pL"><field name="BOOL">TRUE</field></block></value><next><block type="controls_if" id="//9/+E$O3=F4_tCZli^C"><value name="IF0"><block type="logic_compare" id="Q;*+`mu:R-)MHy,O6w@M"><field name="OP">GT</field><value name="A"><block type="teachable_machine_proportion" id="?$EXSDxW`duOHPH0AK#S"><field name="property_">probability</field></block></value><value name="B"><block type="math_number" id=",P.{oThu@W7e@nP6g8qX"><field name="NUM">70</field></block></value></block></value><statement name="DO0"><block type="controls_if" id="R*@F@m3d$0||47FjR8pl"><mutation elseif="3"></mutation><value name="IF0"><block type="logic_compare" id="Is_[UM.!).|I3GS9j9uV"><field name="OP">EQ</field><value name="A"><block type="teachable_machine_proportion" id="D)pBd5$.)$Y+X-0$,E=-"><field name="property_">train</field></block></value><value name="B"><block type="math_number" id="rYftL,sZn~iCy`N{S2jk"><field name="NUM">0</field></block></value></block></value><statement name="DO0"><block type="image_resize" id="^=3XS=u+(NL=){irt9!@"><value name="id_"><block type="text" id="7#Zn%{l(9QJ}5;@)4?~1"><field name="TEXT">role</field></block></value><value name="percentage_"><block type="math_number" id="Gc+KT{Nw2F?sQK2pSw|9"><field name="NUM">105</field></block></value></block></statement><value name="IF1"><block type="logic_compare" id="E13c/0=W,MR)b*vh6)_2"><field name="OP">EQ</field><value name="A"><block type="teachable_machine_proportion" id="vbY]Ga}6@:-[$^950rR8"><field name="property_">train</field></block></value><value name="B"><block type="math_number" id="gS_qghM;%n,W0.xmfGj@"><field name="NUM">1</field></block></value></block></value><statement name="DO1"><block type="image_resize" id="5/g50T4(PK;Jk#a+W`P?"><value name="id_"><block type="text" id="VUt$Gtaiz-]^Fw}s*A:G"><field name="TEXT">role</field></block></value><value name="percentage_"><block type="math_number" id="8^=CA3tmHZi2mYjD[!E]"><field name="NUM">95</field></block></value></block></statement><value name="IF2"><block type="logic_compare" id="#NnxSOBe#nKkoVQ}_V?g"><field name="OP">EQ</field><value name="A"><block type="teachable_machine_proportion" id="K[YWzUZ`O-]S1m:}2#gJ"><field name="property_">train</field></block></value><value name="B"><block type="math_number" id="`;8ONjvhi;%=EOu_:N9:"><field name="NUM">2</field></block></value></block></value><statement name="DO2"><block type="image_move" id="BtH4!@+VG`N6Q(-MSytG"><field name="property_">right</field><value name="id_"><block type="text" id="}a;NecxPnd/_+$BKCfJ:"><field name="TEXT">role</field></block></value><value name="step_"><block type="math_number" id="W9P(6-2KiSqabAv@Z%:6"><field name="NUM">10</field></block></value></block></statement><value name="IF3"><block type="logic_compare" id="t7M`BP2JNQpd3$dIoKN*"><field name="OP">EQ</field><value name="A"><block type="teachable_machine_proportion" id="_3^(Z3Nz8Vg;72Mt9(G9"><field name="property_">train</field></block></value><value name="B"><block type="math_number" id="{9WU8rgWS.@}RX,e73/^"><field name="NUM">3</field></block></value></block></value><statement name="DO3"><block type="image_move" id="xqM)OQ-nI(32:p`,BFJK"><field name="property_">left</field><value name="id_"><block type="text" id="-a21|hmqbk7E0GoA~E{!"><field name="TEXT">role</field></block></value><value name="step_"><block type="math_number" id="BwFrv9BLPH.-|#h;U0W^"><field name="NUM">10</field></block></value></block></statement></block></statement></block></next></block></next></block></statement></block></next></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>';