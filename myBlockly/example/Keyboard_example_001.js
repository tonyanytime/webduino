﻿var Keyboard_example_001 = '<xml xmlns="http://www.w3.org/1999/xhtml"><variables><variable type="" id="M!z!EL{)k8b=`3(vnE|f">jump</variable><variable type="" id="/B|K~ug.b52!mQBcJqSJ">jumpstate</variable><variable type="" id="o^4D?pwEqL4%23awcx1~3=">leftstate</variable><variable type="" id="fd_z.rtYss}%LgEP!E.A">rightstate</variable><variable type="" id="^B1dc9!@!PFCK/DEm({)">upstate</variable><variable type="" id=".0](Oth!/{VP@.eH2_+0">moveTimer</variable><variable type="" id="P(U8JdzJU%t@}54!Ev+)">step</variable></variables><block type="setwindow" id="x,g3}$Ad:kVy,ys~}g2_" x="59" y="-23"><field name="overflow">auto</field><value name="left"><block type="math_number" id="Ms]wcE$m}Gb/rY;58Oac"><field name="NUM">250</field></block></value><value name="top"><block type="math_number" id="Av?YB_+Znq+@s=:q|lx2"><field name="NUM">100</field></block></value><value name="width"><block type="math_number" id="D0PoL+,hk1Y?7+KXoYR4"><field name="NUM">600</field></block></value><value name="height"><block type="math_number" id="l|BfBHvW,cfwlkn]6Z8^"><field name="NUM">300</field></block></value><next><block type="showtext" id="|AOe]Q.@nxoSBM-u9AKC"><value name="size"><block type="math_number" id="d{%23x0yIpEvl;zw*9}Dvy"><field name="NUM">20</field></block></value><value name="color"><block type="colour_picker" id="1hgfjwn[[Z^isVWNZVk$"><field name="COLOUR">%23ff0000</field></block></value><value name="text"><block type="text" id="c^}ioM;L`un~||X8gIn@"><field name="TEXT">Left, Up(jump), Right</field></block></value><next><block type="comment" id="p1SUaseOAlYZ.)M1V!X~"><value name="text"><block type="text" id="3@XeoDO]kNrM`Qwi$b^a"><field name="TEXT">You can control the role to jump.</field></block></value><next><block type="image_create" id="sbm0}5?7$fxQkt7uz[~P"><value name="id_"><block type="text" id="x9%,wF8e9)1s7}dDcRj?"><field name="TEXT"></field></block></value><value name="url_"><block type="text" id="SQCA4kKD{dEp*pf:@Ym1"><field name="TEXT">https://pic.pimg.tw/yide168/1512182509-918346.png</field></block></value><value name="width_"><block type="math_number" id="3)PA%5:J,ge~?J;%BXn3"><field name="NUM">100</field></block></value><value name="height_"><block type="math_number" id="*=)PmH1vJ3z:0P.g[^%9"><field name="NUM">100</field></block></value><value name="left_"><block type="math_number" id="ZklGCZZ@~{TjpuaN33Ht"><field name="NUM">200</field></block></value><value name="top_"><block type="math_number" id="!.s!YlE:%q|@B6o?bc9l"><field name="NUM">150</field></block></value><value name="zindex_"><block type="math_number" id="9L,_5U+p%23Z=Sv(=wrsH~"><field name="NUM">0</field></block></value><value name="display_"><block type="logic_boolean" id="Wg1$ask-|T$,YTJ[Q|Yn"><field name="BOOL">TRUE</field></block></value><next><block type="variables_set" id="/t]fMK+K8)%(k3=L)?a2"><field name="VAR" id="M!z!EL{)k8b=`3(vnE|f" variabletype="">jump</field><value name="VALUE"><block type="math_number" id="KViCLT|%Dx6Jbo4K2QK9"><field name="NUM">16</field></block></value><next><block type="variables_set" id="HaVdJI.;.8waW:(PzdU]"><field name="VAR" id="/B|K~ug.b52!mQBcJqSJ" variabletype="">jumpstate</field><value name="VALUE"><block type="logic_boolean" id="9!I[Cx%23l],GD]e09|zP="><field name="BOOL">FALSE</field></block></value><next><block type="variables_set" id="]%23@gb$DnQ~=!)Q1]%23@T_"><field name="VAR" id="o^4D?pwEqL4%23awcx1~3=" variabletype="">leftstate</field><value name="VALUE"><block type="logic_boolean" id="ZSOH*He-i?2_yua)){s?"><field name="BOOL">FALSE</field></block></value><next><block type="variables_set" id="A]]|iBw3EX14+cl}`~)?"><field name="VAR" id="fd_z.rtYss}%LgEP!E.A" variabletype="">rightstate</field><value name="VALUE"><block type="logic_boolean" id="Rh}oO=q+(89,HuRX]1K5"><field name="BOOL">FALSE</field></block></value><next><block type="keyboard_listener" id="B6E;}/3(6hO]rC@-N|UZ"><field name="event">keydown</field><statement name="statement"><block type="controls_if" id="LAB]:g@xN(IngF:gLKs?"><value name="IF0"><block type="logic_operation" id="{l7YtPQ$ux/$^8CqRGIP"><field name="OP">OR</field><value name="A"><block type="keyboard_keycode" id="6yvt8IFEEEsv-!.]{5j("><field name="keycode">38</field></block></value><value name="B"><block type="logic_compare" id="tq755jj;Jb3(mjq1R{.*"><field name="OP">EQ</field><value name="A"><block type="variables_get" id=":zIw_ry.+2e.H,hu9Z6t"><field name="VAR" id="^B1dc9!@!PFCK/DEm({)" variabletype="">upstate</field></block></value><value name="B"><block type="logic_boolean" id="dc7Wg4K(-)*=NO930OPV"><field name="BOOL">TRUE</field></block></value></block></value></block></value><statement name="DO0"><block type="variables_set" id="q0TnOaI)[d-wp%239pY}:*"><field name="VAR" id="^B1dc9!@!PFCK/DEm({)" variabletype="">upstate</field><value name="VALUE"><block type="logic_boolean" id="D2!gw0uM9jpd/QD5g{,;"><field name="BOOL">TRUE</field></block></value></block></statement><next><block type="controls_if" id="l8hgk(E5eyyF3/$2i~-l"><value name="IF0"><block type="logic_operation" id="X4);Li_7^D_r1QBnd2O1"><field name="OP">OR</field><value name="A"><block type="keyboard_keycode" id="^.2*bds0;VbIH8Uvo(at"><field name="keycode">37</field></block></value><value name="B"><block type="logic_compare" id="}@Pom%23AI54@MJPu!d|9{"><field name="OP">EQ</field><value name="A"><block type="variables_get" id="rkSmF//d/ov?ig,QV^{q"><field name="VAR" id="o^4D?pwEqL4%23awcx1~3=" variabletype="">leftstate</field></block></value><value name="B"><block type="logic_boolean" id="l97Qp6y0:LlB]R/!qkYh"><field name="BOOL">TRUE</field></block></value></block></value></block></value><statement name="DO0"><block type="variables_set" id="1vR`}6rELiyU{h-ywC(e"><field name="VAR" id="o^4D?pwEqL4%23awcx1~3=" variabletype="">leftstate</field><value name="VALUE"><block type="logic_boolean" id="o-9*))pRp1+NVt5Ya5xs"><field name="BOOL">TRUE</field></block></value></block></statement><next><block type="controls_if" id="}JpD[J4|PnZDq3uPva9w"><value name="IF0"><block type="logic_operation" id="VU0Tv9NCr3lV]%3C9Jv%23"><field name="OP">OR</field><value name="A"><block type="keyboard_keycode" id="Tz$WhBuq!R8J/3yDVvuz"><field name="keycode">39</field></block></value><value name="B"><block type="logic_compare" id="k.,g(D%v%-(LA5MjD{J|"><field name="OP">EQ</field><value name="A"><block type="variables_get" id="}:(Y5l:LmU@A]{oXqTQ+"><field name="VAR" id="fd_z.rtYss}%LgEP!E.A" variabletype="">rightstate</field></block></value><value name="B"><block type="logic_boolean" id="Cj2Z*Q_gV?v}dO$7Tr+F"><field name="BOOL">TRUE</field></block></value></block></value></block></value><statement name="DO0"><block type="variables_set" id="b(Q4(c^.}?;W8!H=oyU="><field name="VAR" id="fd_z.rtYss}%LgEP!E.A" variabletype="">rightstate</field><value name="VALUE"><block type="logic_boolean" id="ac2e,j7xk5~+4]0|yK9n"><field name="BOOL">TRUE</field></block></value></block></statement></block></next></block></next></block></statement><next><block type="keyboard_listener" id="m=`ULgq5PYF*U{U5-g%23*"><field name="event">keyup</field><statement name="statement"><block type="controls_if" id="TLNn:7:*.{~]@z%lP`M="><value name="IF0"><block type="keyboard_keycode" id="1/ac~}u~B{-AGP~fJ%A~"><field name="keycode">38</field></block></value><statement name="DO0"><block type="variables_set" id="N=QN(y6=/s^ia!`lk+Ft"><field name="VAR" id="^B1dc9!@!PFCK/DEm({)" variabletype="">upstate</field><value name="VALUE"><block type="logic_boolean" id="Nxd?q/?i%$eR6-c|*Y1f"><field name="BOOL">FALSE</field></block></value></block></statement><next><block type="controls_if" id="Ah)),UAVhFBad28+5|pZ"><value name="IF0"><block type="keyboard_keycode" id="lH%%5)|]cGiMN[sX@$VY"><field name="keycode">37</field></block></value><statement name="DO0"><block type="variables_set" id="?8dkwUk+Y66bKV-UVDs8"><field name="VAR" id="o^4D?pwEqL4%23awcx1~3=" variabletype="">leftstate</field><value name="VALUE"><block type="logic_boolean" id="K)Kgs8$+n.;F~jH2^0@4"><field name="BOOL">FALSE</field></block></value></block></statement><next><block type="controls_if" id="-oXT_Db~IR^rND(Jk|Fq"><value name="IF0"><block type="keyboard_keycode" id="]0Fm3:kELlsNF,f%23Cow5"><field name="keycode">39</field></block></value><statement name="DO0"><block type="variables_set" id="WCC;Y(LxHLo5cQ*CvFZb"><field name="VAR" id="fd_z.rtYss}%LgEP!E.A" variabletype="">rightstate</field><value name="VALUE"><block type="logic_boolean" id="%231(4S%(Kq+^;D]{E;,vJ"><field name="BOOL">FALSE</field></block></value></block></statement></block></next></block></next></block></statement><next><block type="document_timer" id="Ox}~=U.nKC.xPd5?pDgb"><field name="fuTimer_" id=".0](Oth!/{VP@.eH2_+0" variabletype="">moveTimer</field><value name="intervals_"><block type="math_number" id="2$%23vU-:g@9W,T0[Lf|IM"><field name="NUM">50</field></block></value><statement name="do_"><block type="controls_if" id="BQ_@KEF1Eov52XW!PI4-"><value name="IF0"><block type="logic_compare" id="xN/0rjiB`4adIfC7tLxw"><field name="OP">EQ</field><value name="A"><block type="variables_get" id="*0av*}P%+lg3s%23IzX=@e"><field name="VAR" id="^B1dc9!@!PFCK/DEm({)" variabletype="">upstate</field></block></value><value name="B"><block type="logic_boolean" id="dx,AC|~;XL1b/bZf9;:q"><field name="BOOL">TRUE</field></block></value></block></value><statement name="DO0"><block type="controls_if" id="!2GMSc$4x}tCQ`{DBl4D"><value name="IF0"><block type="logic_compare" id="P.5xVD?E%23R~T4DK6eff*"><field name="OP">EQ</field><value name="A"><block type="variables_get" id="Eg9kbL(ouEGIO/+^Eu:6"><field name="VAR" id="/B|K~ug.b52!mQBcJqSJ" variabletype="">jumpstate</field></block></value><value name="B"><block type="logic_boolean" id="zRR8nzBkl,zv`}^j%234c$"><field name="BOOL">FALSE</field></block></value></block></value><statement name="DO0"><block type="variables_set" id="bjM`Z**k7%q+{j$!S-fO"><field name="VAR" id="/B|K~ug.b52!mQBcJqSJ" variabletype="">jumpstate</field><value name="VALUE"><block type="logic_boolean" id="qe-`nIjr;nlTr4,_/$L?"><field name="BOOL">TRUE</field></block></value><next><block type="variables_set" id="tLVse8y1?d78AlETW~27"><field name="VAR" id="P(U8JdzJU%t@}54!Ev+)" variabletype="">step</field><value name="VALUE"><block type="math_number" id="8,_%23{MTqr1D,8XD3%||K"><field name="NUM">0</field></block></value><next><block type="controls_repeat_ext" id="m%23%iW,._!9/uTk/yz,qG"><value name="TIMES"><block type="math_number" id="uueyuOu?6hr}z%23|g4Zv^"><field name="NUM">16</field></block></value><statement name="DO"><block type="math_change" id="{9K8hX+pjr1%236`?LED)D"><field name="VAR" id="P(U8JdzJU%t@}54!Ev+)" variabletype="">step</field><value name="DELTA"><shadow type="math_number" id="K%23-wXN73Y1?M?yDLmTDV"><field name="NUM">1</field></shadow></value><next><block type="image_move" id=";B+edyMt(i8/qXo8rPbi"><field name="property_">up</field><value name="id_"><block type="text" id="[2VdZ(2pM.%23;Kes71!b6"><field name="TEXT"></field></block></value><value name="step_"><block type="math_arithmetic" id="pz^{kZxl2GBL4G36{Ao$"><field name="OP">MINUS</field><value name="A"><block type="variables_get" id="8TYFr%h^j0I`?{ymbQ/t"><field name="VAR" id="M!z!EL{)k8b=`3(vnE|f" variabletype="">jump</field></block></value><value name="B"><block type="variables_get" id="D}l5hFs0v83WX-27rVDj"><field name="VAR" id="P(U8JdzJU%t@}54!Ev+)" variabletype="">step</field></block></value></block></value><next><block type="time_delay" id="Wo,RO[E2!%234W`m]InV0a"><value name="seconds"><block type="math_number" id="/:I2rwx4S=f$;A$~M3a5"><field name="NUM">0.05</field></block></value></block></next></block></next></block></statement><next><block type="controls_repeat_ext" id="39PM(x-7%23jGrydfFf/Wv"><value name="TIMES"><block type="math_number" id="m@$i=gAS}@/_x+IU%[,Z"><field name="NUM">16</field></block></value><statement name="DO"><block type="image_move" id="hPh@g9M~YN_]Vk-+l2[f"><field name="property_">up</field><value name="id_"><block type="text" id="@.gm!zN9FNu*Ga3J,e]L"><field name="TEXT"></field></block></value><value name="step_"><block type="math_arithmetic" id="JW_BKSZq[1A4LhEv,57-"><field name="OP">MINUS</field><value name="A"><block type="variables_get" id="iZad.7Xn[j+B1p]6-%23J2"><field name="VAR" id="P(U8JdzJU%t@}54!Ev+)" variabletype="">step</field></block></value><value name="B"><block type="variables_get" id=".hPY?J-6~6a4^(%23WV;Z9"><field name="VAR" id="M!z!EL{)k8b=`3(vnE|f" variabletype="">jump</field></block></value></block></value><next><block type="math_change" id="oM6pSDyQsu$]JRcvRL,3"><field name="VAR" id="P(U8JdzJU%t@}54!Ev+)" variabletype="">step</field><value name="DELTA"><shadow type="math_number" id="%[}4N2^3@dHXxwVNI=,!"><field name="NUM">-1</field></shadow></value><next><block type="time_delay" id="qyWNdZ{w$V5Yk52vHcU^"><value name="seconds"><block type="math_number" id="VB/EV536fAoWMJ.x-y2l"><field name="NUM">0.05</field></block></value></block></next></block></next></block></statement><next><block type="variables_set" id="a^yO~dgTWUM[Cyl8jF/0"><field name="VAR" id="/B|K~ug.b52!mQBcJqSJ" variabletype="">jumpstate</field><value name="VALUE"><block type="logic_boolean" id="t/dmko_;a,=JWra*30Qa"><field name="BOOL">FALSE</field></block></value></block></next></block></next></block></next></block></next></block></statement></block></statement><next><block type="controls_if" id="zy+{I8*!~R;/Wd:Umz:F"><value name="IF0"><block type="logic_compare" id="7of*G+MYSfXuBfnOJsx}"><field name="OP">EQ</field><value name="A"><block type="variables_get" id="b~eZ2r4x@|2Cq(x}]{Q5"><field name="VAR" id="o^4D?pwEqL4%23awcx1~3=" variabletype="">leftstate</field></block></value><value name="B"><block type="logic_boolean" id=".{3Hw$-=iXwa11q{Cxrh"><field name="BOOL">TRUE</field></block></value></block></value><statement name="DO0"><block type="image_move" id="iPcg02vdU3%RHpSaR`r{"><field name="property_">right</field><value name="id_"><block type="text" id="H{dbAQx;wauoFVLe-x(4"><field name="TEXT"></field></block></value><value name="step_"><block type="math_number" id="q],,!6ee45)y%%23F:ANsn"><field name="NUM">-8</field></block></value></block></statement><next><block type="controls_if" id="Ii,C+kQprbF[EDbV2yf8"><value name="IF0"><block type="logic_compare" id="F*ax;w-YT$j0z$u_MQ}D"><field name="OP">EQ</field><value name="A"><block type="variables_get" id="13.ipGcD|Ekd|J/+71bw"><field name="VAR" id="fd_z.rtYss}%LgEP!E.A" variabletype="">rightstate</field></block></value><value name="B"><block type="logic_boolean" id="A.^[%23UCBvPbk{+yzyN|}"><field name="BOOL">TRUE</field></block></value></block></value><statement name="DO0"><block type="image_move" id="2R1@IW9T?u:_u7jZt_tQ"><field name="property_">right</field><value name="id_"><block type="text" id="^+}mr%23Ko^PBNLw{X(arM"><field name="TEXT"></field></block></value><value name="step_"><block type="math_number" id="9%23{{:?Q]IR4R}er=Ae:Q"><field name="NUM">8</field></block></value></block></statement></block></next></block></next></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>';