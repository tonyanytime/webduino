var catWebUSB = '<xml><category name="%{BKY_WEBUSB}" colour="%{BKY_WEBUSB_HUE}">'+
'    <block type="webusb_system">'+  
'        <field name="cmd">inputpullup</field>'+
'        <value name="P1">'+
'          <block type="math_number">'+
'            <field name="NUM">2</field>'+
'          </block>'+
'        </value>'+
'        <value name="P2">'+
'          <block type="math_number">'+
'            <field name="NUM">1</field>'+
'          </block>'+
'        </value>'+
'    </block>'+
'    <block type="webusb_custom">'+  
'        <value name="cmd">'+
'          <block type="text">'+
'            <field name="TEXT"></field>'+
'          </block>'+
'        </value>'+
'        <value name="P1">'+
'          <block type="text">'+
'            <field name="TEXT"></field>'+
'          </block>'+
'        </value>'+
'        <value name="P2">'+
'          <block type="text">'+
'            <field name="TEXT"></field>'+
'          </block>'+
'        </value>'+
'        <value name="P3">'+
'          <block type="text">'+
'            <field name="TEXT"></field>'+
'          </block>'+
'        </value>'+
'        <value name="P4">'+
'          <block type="text">'+
'            <field name="TEXT"></field>'+
'          </block>'+
'        </value>'+
'        <value name="P5">'+
'          <block type="text">'+
'            <field name="TEXT"></field>'+
'          </block>'+
'        </value>'+
'        <value name="P6">'+
'          <block type="text">'+
'            <field name="TEXT"></field>'+
'          </block>'+
'        </value>'+
'        <value name="P7">'+
'          <block type="text">'+
'            <field name="TEXT"></field>'+
'          </block>'+
'        </value>'+
'        <value name="P8">'+
'          <block type="text">'+
'            <field name="TEXT"></field>'+
'          </block>'+
'        </value>'+
'        <value name="P9">'+
'          <block type="text">'+
'            <field name="TEXT"></field>'+
'          </block>'+
'        </value>'+
'    </block>'+
'    <block type="webusb_car">'+   
'        <value name="cmd">'+
'          <block type="text">'+
'            <field name="TEXT">car</field>'+
'          </block>'+
'        </value>'+
'        <value name="P1">'+
'          <block type="math_number">'+
'            <field name="NUM"></field>'+
'          </block>'+
'        </value>'+
'        <value name="P2">'+
'          <block type="math_number">'+
'            <field name="NUM"></field>'+
'          </block>'+
'        </value>'+
'        <value name="P3">'+
'          <block type="math_number">'+
'            <field name="NUM"></field>'+
'          </block>'+
'        </value>'+
'        <value name="P4">'+
'          <block type="math_number">'+
'            <field name="NUM"></field>'+
'          </block>'+
'        </value>'+
'        <value name="P5">'+
'          <block type="math_number">'+
'            <field name="NUM">200</field>'+
'          </block>'+
'        </value>'+
'        <value name="P6">'+
'          <block type="math_number">'+
'            <field name="NUM">200</field>'+
'          </block>'+
'        </value>'+
'        <value name="P7">'+
'          <block type="math_number">'+
'            <field name="NUM">200</field>'+
'          </block>'+
'        </value>'+
'        <value name="P8">'+
'          <block type="webusb_car_state">'+
'          </block>'+  
'        </value>'+    
'    </block>'+   
'    <block type="webusb_car_state">'+
'    </block>'+     
'    <variables>'+ 
'      <variable type="" id="+Oog~D)0D,I*Y5(g]2r1">TimerWEBUSB</variable>'+ 
'      <variable type="" id="ij_ZS;5L7fPB{t3^~CEl">data</variable>'+ 
'    </variables>'+ 
'    <block type="document_timer" id="mi/z6I4OGW!r-?w:dktl" x="57" y="57">'+ 
'      <field name="fuTimer_" id="+Oog~D)0D,I*Y5(g]2r1" variabletype="">TimerWEBUSB</field>'+ 
'      <value name="intervals_">'+ 
'        <block type="math_number" id=";yP~x1l8Ovs6JfUe6u0C">'+ 
'          <field name="NUM">10</field>'+ 
'        </block>'+ 
'      </value>'+ 
'      <statement name="do_">'+ 
'        <block type="variables_set" id="Sh:0%7~`mHXezT$HAE*w">'+ 
'          <field name="VAR" id="ij_ZS;5L7fPB{t3^~CEl" variabletype="">data</field>'+ 
'          <value name="VALUE">'+ 
'            <block type="webusb_getresponse" id="KE3ci[=9F6s6fOnlqASf"></block>'+ 
'          </value>'+ 
'        </block>'+ 
'      </statement>'+ 
'    </block>'+     
'    <block type="webusb_cmd">'+
'    </block>'+    
'    <block type="webusb_clearresponse">'+
'    </block>'+   
'</category></xml>';