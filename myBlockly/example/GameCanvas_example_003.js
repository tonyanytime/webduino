﻿var GameCanvas_example_003 = '<xml xmlns="http://www.w3.org/1999/xhtml"><variables><variable type="" id="9p3X7C%VtZZoTD;^%b!H">state</variable><variable type="" id="?#42zH8Bw9r.{~,R=)c4">x0</variable><variable type="" id="r~s.m2=sp9b0(CCWUW#0">y0</variable><variable type="" id="`=NRut_ny0.OA,@,-$1P">color</variable></variables><block type="setwindow" id="iV^5Q#nn^uIf-vsi/!T4" x="-4" y="-43"><field name="overflow">auto</field><value name="left"><block type="math_number" id="2h@rc_P)dpo;`dEV@b8t"><field name="NUM">300</field></block></value><value name="top"><block type="math_number" id="W8h+`;].}B2{Z@*Mp)Uz"><field name="NUM">20</field></block></value><value name="width"><block type="math_number" id="C.u-DmAXS:R_]?KjdT_l"><field name="NUM">500</field></block></value><value name="height"><block type="math_number" id="7OGXm]_.bf@HUQA:Ui)]"><field name="NUM">500</field></block></value><next><block type="showtext" id="a.{7ha8_Dl)+kSORR;{j"><value name="size"><block type="math_number" id="1,9VDrFVqz}4GM/=jXVo"><field name="NUM">12</field></block></value><value name="color"><block type="colour_picker" id="[o3m-~Z|II$U=zJvd3`I"><field name="COLOUR">#ff0000</field></block></value><value name="text"><block type="text" id="_,RpckUmj2tM@}JR{TcK"><field name="TEXT">Mouse Down → Mouse Move → Mouse Down</field></block></value><next><block type="canvas_create" id="lpczE_)/-%xLFSNcT/|b"><value name="id_"><block type="text" id="]RF3941B*oDlbVRwFjTe"><field name="TEXT">canvas</field></block></value><value name="width_"><block type="math_number" id="osl-hB%mNA{0cQ,g;i6y"><field name="NUM">500</field></block></value><value name="height_"><block type="math_number" id="qDtY9vkhZCD#Cx61B5g@"><field name="NUM">500</field></block></value><value name="left_"><block type="math_number" id="]w@}|T]j.Tr@}Smz9)M1"><field name="NUM">0</field></block></value><value name="top_"><block type="math_number" id="c^_`wA27@z@`%lDNw|vF"><field name="NUM">0</field></block></value><value name="zindex_"><block type="math_number" id="uP@z_q-q!y?T!!bs)]Mc"><field name="NUM">0</field></block></value><next><block type="variables_set" id="NUZG~k)B8f3=5)]C/y,{"><field name="VAR" id="9p3X7C%VtZZoTD;^%b!H" variabletype="">state</field><value name="VALUE"><block type="logic_boolean" id="`TxTpU^e/emuJVMuUu0w"><field name="BOOL">FALSE</field></block></value><next><block type="variables_set" id="jJx+q!^.ql1n$}XVdi%R"><field name="VAR" id="`=NRut_ny0.OA,@,-$1P" variabletype="">color</field><value name="VALUE"><block type="colour_random" id="a@xzC0tGl+rZu+Ei8#X^"></block></value><next><block type="button_create" id="h+^VL@n_WkQ[xOWX)d!;"><value name="id_"><block type="text" id="%jWmboe/@v,wk2V9,PkA"><field name="TEXT">clear</field></block></value><value name="left_"><block type="math_number" id="|N,~eZ[?Bu)#hNKNIrNu"><field name="NUM">0</field></block></value><value name="top_"><block type="math_number" id="vIHg6y.y-UJc%ef{?{PF"><field name="NUM">30</field></block></value><value name="width_"><block type="math_number" id="bZ-ZLr,Y.Q+%%=(8SjTX"><field name="NUM">100</field></block></value><value name="height_"><block type="math_number" id="`jrspl$YZ:P(wo![J$C%"><field name="NUM">30</field></block></value><value name="opacity_"><block type="math_number" id="A)[I_9Dgt/-h%G87$C*#"><field name="NUM">1</field></block></value><value name="bgcolor_"><block type="logic_null" id="wPmXqusxqc]x?A5263a~"></block></value><value name="value_"><block type="text" id="x4:No4tg=LBJ$:O+S#)6"><field name="TEXT">Clear Canvas</field></block></value><value name="zindex_"><block type="math_number" id="z/;3X$+XBVn$JfcK};0b"><field name="NUM">0</field></block></value><value name="display_"><block type="logic_boolean" id="vUX)fI-{f^+H5({nGwu8"><field name="BOOL">TRUE</field></block></value><next><block type="button_create" id="Qo7Kpd9`n;*;YvbSq{,O"><value name="id_"><block type="text" id="8)fNDi+Uzxwhey|TvY/O"><field name="TEXT">color</field></block></value><value name="left_"><block type="math_number" id="II#Z_fWlS81$Qu!K9HO?"><field name="NUM">100</field></block></value><value name="top_"><block type="math_number" id="dCdi#(5P:8/#?u2?wVwr"><field name="NUM">30</field></block></value><value name="width_"><block type="math_number" id="Tj*:j%~fV1gm?Vk%W%$v"><field name="NUM">100</field></block></value><value name="height_"><block type="math_number" id="T/yaH|08w#_Z95MI8cL5"><field name="NUM">30</field></block></value><value name="opacity_"><block type="math_number" id="4T@CVFZ?}Aoa)$$5-}G*"><field name="NUM">1</field></block></value><value name="bgcolor_"><block type="logic_null" id="!$?S0tZ-*,myS6:]46Rt"></block></value><value name="value_"><block type="text" id="SWo-=)7]Y7gRm*q,_^0$"><field name="TEXT">Change Color</field></block></value><value name="zindex_"><block type="math_number" id="qstD}VWJ/q%61rq1Qh*["><field name="NUM">0</field></block></value><value name="display_"><block type="logic_boolean" id="Dj^?AZ:~5Mh*9(ZpCwT#"><field name="BOOL">TRUE</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block><block type="element_event" id="}~F(Tq{j45B1*_0r=uu2" x="27" y="794"><field name="element">canvas</field><field name="event">mousedown</field><value name="id_"><block type="text" id="rmr$E?*rj^=x+wxcK!,I"><field name="TEXT">canvas</field></block></value><statement name="statement"><block type="variables_set" id="#]TZauuV[UFsy%Wz-_:|"><field name="VAR" id="9p3X7C%VtZZoTD;^%b!H" variabletype="">state</field><value name="VALUE"><block type="logic_compare" id=",m|ng`8ibv18#GWEn{g2"><field name="OP">NEQ</field><value name="A"><block type="variables_get" id="!aaF*;A{KR6.U+KN{{um"><field name="VAR" id="9p3X7C%VtZZoTD;^%b!H" variabletype="">state</field></block></value><value name="B"><block type="logic_boolean" id="q!!4P:uEsyfAkLZ3i9y]"><field name="BOOL">TRUE</field></block></value></block></value><next><block type="variables_set" id="NGg5/gyi%T8*up4+y]TS"><field name="VAR" id="?#42zH8Bw9r.{~,R=)c4" variabletype="">x0</field><value name="VALUE"><block type="mouse_coordinate_get" id="1J]:Ph6XHDtvmZYm8T+8"><field name="property_">offsetX</field></block></value><next><block type="variables_set" id="^N*OdvrD09kYMuR@#JeU"><field name="VAR" id="r~s.m2=sp9b0(CCWUW#0" variabletype="">y0</field><value name="VALUE"><block type="mouse_coordinate_get" id="wme9[mPKmJUV8|?n6b7J"><field name="property_">offsetY</field></block></value></block></next></block></next></block></statement></block><block type="element_event" id="z`j%`3P5SnN/exX$dp_u" x="0" y="924"><field name="element">canvas</field><field name="event">mousemove</field><value name="id_"><block type="text" id="SpypVX=a_Q{E/2@c,f2X"><field name="TEXT">canvas</field></block></value><statement name="statement"><block type="controls_if" id="*H/SSUBv/%e1s3NXbl^`"><value name="IF0"><block type="logic_compare" id="T9{zpGbt=u!|9f2h)n%{"><field name="OP">EQ</field><value name="A"><block type="variables_get" id="J?t-/Mg}rc9=)`I-ciC}"><field name="VAR" id="9p3X7C%VtZZoTD;^%b!H" variabletype="">state</field></block></value><value name="B"><block type="logic_boolean" id="8K}ix3kX1Qgf19N?ui#H"><field name="BOOL">TRUE</field></block></value></block></value><statement name="DO0"><block type="canvas_line" id="@-6MibVLlX|o8D7U`^4s"><value name="id_"><block type="text" id="A+7qgh0C-LUe0DaUf._I"><field name="TEXT">canvas</field></block></value><value name="linewidth_"><block type="math_number" id="cncuSLY=R6r{P4;/Ik4a"><field name="NUM">5</field></block></value><value name="x0_"><block type="variables_get" id="eETTVku4#K9aSeF@T?!U"><field name="VAR" id="?#42zH8Bw9r.{~,R=)c4" variabletype="">x0</field></block></value><value name="y0_"><block type="variables_get" id="l+@A4u(CGhebEAaBme}y"><field name="VAR" id="r~s.m2=sp9b0(CCWUW#0" variabletype="">y0</field></block></value><value name="x1_"><block type="mouse_coordinate_get" id="~8Sj1[FNY9zIjzjz{*p5"><field name="property_">offsetX</field></block></value><value name="y1_"><block type="mouse_coordinate_get" id="h,m$nXC`tW=f#ngaIf-0"><field name="property_">offsetY</field></block></value><value name="color_"><block type="variables_get" id="Z%]9JUOO2L8gXhGix~cQ"><field name="VAR" id="`=NRut_ny0.OA,@,-$1P" variabletype="">color</field></block></value></block></statement><next><block type="variables_set" id="?9yH2o`:lJpU*hki!P(R"><field name="VAR" id="?#42zH8Bw9r.{~,R=)c4" variabletype="">x0</field><value name="VALUE"><block type="mouse_coordinate_get" id="Y5NlJIBpb:fc#P~]#?8|"><field name="property_">offsetX</field></block></value><next><block type="variables_set" id="LcuGa1/f~-b6FwrJ;y,i"><field name="VAR" id="r~s.m2=sp9b0(CCWUW#0" variabletype="">y0</field><value name="VALUE"><block type="mouse_coordinate_get" id="M?X}qR|DKY~kwy^E$^^!"><field name="property_">offsetY</field></block></value></block></next></block></next></block></statement></block><block type="image_onclick_listener" id="S/OH9Wdk)scnq$_7~5~5" x="0" y="1288"><statement name="do_"><block type="button_onclick_do" id=":M{g%$]y.3^IL|DX+hRH"><value name="id_"><block type="text" id="#a26u:+7`WV?Up^)BeRd"><field name="TEXT">clear</field></block></value><statement name="do_"><block type="canvas_clear" id="LVWJQfEJlZQ=J|!h=Fv{"><value name="id_"><block type="text" id="jY34Jh+:}JAylSYsvjqZ"><field name="TEXT">canvas</field></block></value></block></statement><next><block type="button_onclick_do" id=";t0nqBS6_s=C`s}QcW7%"><value name="id_"><block type="text" id="tUj3$~=]/k(0sDG,}28#"><field name="TEXT">color</field></block></value><statement name="do_"><block type="variables_set" id="c0OM?tHnIePMaCua(_:S"><field name="VAR" id="`=NRut_ny0.OA,@,-$1P" variabletype="">color</field><value name="VALUE"><block type="colour_random" id="0Vd,ya67{eHw`.GJ~WQg"></block></value></block></statement></block></next></block></statement></block></xml>';