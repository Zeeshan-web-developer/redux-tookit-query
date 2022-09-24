import React, { useState } from "react";
import { Map, Marker, GoogleApiWrapper, Polygon } from "google-maps-react";

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
const MapGoogle = ({ google, width, height, showInput, error }) => {
  const [address, setAddress] = useState();
  const [latlng, setLat] = useState();
  const handleChange = (address) => {
    setAddress(address);
  };
  const handleSelect = (address) => {
    setAddress(address);

    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        setLat(latLng);
      })
      .catch((error) => console.error("Error", error));
  };
  const paths = [
    [
      { lng: 55.33581708400004, lat: 25.28593326300006 },
      { lng: 55.33761508400005, lat: 25.28450766300006 },
      { lng: 55.33840998400007, lat: 25.28387846300006 },
      { lng: 55.33845604800007, lat: 25.28382353300003 },
      { lng: 55.33846038400003, lat: 25.28381836300002 },
      { lng: 55.33846542900005, lat: 25.28381465100006 },
      { lng: 55.33849295100003, lat: 25.28379440000003 },
      { lng: 55.33849532900007, lat: 25.28379265000007 },
      { lng: 55.33853798400003, lat: 25.28376126300003 },
      { lng: 55.33850890600007, lat: 25.28374614900002 },
      { lng: 55.33849980500003, lat: 25.28374141800003 },
      { lng: 55.33847840700008, lat: 25.28373029600004 },
      { lng: 55.33847195100003, lat: 25.28372694000007 },
      { lng: 55.33846218400004, lat: 25.28372186300004 },
      { lng: 55.33767918500007, lat: 25.28332716300002 },
      { lng: 55.33680568500006, lat: 25.28294756300005 },
      { lng: 55.33654918500008, lat: 25.28283916300006 },
      { lng: 55.33573078500007, lat: 25.28248696300005 },
      { lng: 55.33484838500004, lat: 25.28213316300003 },
      { lng: 55.33435058500004, lat: 25.28189256300004 },
      { lng: 55.33282768500004, lat: 25.28122966300003 },
      { lng: 55.33138978500006, lat: 25.28061546200007 },
      { lng: 55.33062506100003, lat: 25.28029415100008 },
      { lng: 55.33062477900006, lat: 25.28029403200003 },
      { lng: 55.33061818500005, lat: 25.28029126200005 },
      { lng: 55.33060120100004, lat: 25.28028411100007 },
      { lng: 55.33058588500006, lat: 25.28027766200006 },
      { lng: 55.33055966500007, lat: 25.28026459100005 },
      { lng: 55.33055578800003, lat: 25.28026265800003 },
      { lng: 55.33055238500003, lat: 25.28026096200006 },
      { lng: 55.33048090000005, lat: 25.28022541300004 },
      { lng: 55.33047756000008, lat: 25.28022375200004 },
      { lng: 55.33023868500004, lat: 25.28010496200005 },
      { lng: 55.32871138500008, lat: 25.27939106200006 },
      { lng: 55.32791418500005, lat: 25.27905136200008 },
      { lng: 55.32770168500008, lat: 25.27900876200005 },
      { lng: 55.32746828500007, lat: 25.27888226200002 },
      { lng: 55.32732228500004, lat: 25.27880606200006 },
      { lng: 55.32717398500006, lat: 25.27873267100006 },
      { lng: 55.32717373400004, lat: 25.27873254700006 },
      { lng: 55.32716608500004, lat: 25.27872876200007 },
      { lng: 55.32716298600008, lat: 25.27873383300005 },
      { lng: 55.32687168500007, lat: 25.27921056200006 },
      { lng: 55.32682818500007, lat: 25.27928026200004 },
      { lng: 55.32680468500007, lat: 25.27930976200003 },
      { lng: 55.32654778500006, lat: 25.27980226200003 },
      { lng: 55.32555188500004, lat: 25.28171126100005 },
      { lng: 55.32550098500008, lat: 25.28180886100006 },
      { lng: 55.32545258500005, lat: 25.28190016100007 },
      { lng: 55.32516168500007, lat: 25.28244916100005 },
      { lng: 55.32514829500008, lat: 25.28247443800007 },
      { lng: 55.32514413100006, lat: 25.28248229900004 },
      { lng: 55.32497998500003, lat: 25.28279216100003 },
      { lng: 55.32479178500006, lat: 25.28314726100007 },
      { lng: 55.32477818500007, lat: 25.28317286100003 },
      { lng: 55.32467668500004, lat: 25.28335896100003 },
      { lng: 55.32467410900006, lat: 25.28336428500006 },
      { lng: 55.32466186600004, lat: 25.28338958200004 },
      { lng: 55.32465896800005, lat: 25.28339556900005 },
      { lng: 55.32464419600007, lat: 25.28342609200007 },
      { lng: 55.32464348500008, lat: 25.28342756100005 },
      { lng: 55.32464044900007, lat: 25.28343324700006 },
      { lng: 55.32450398500004, lat: 25.28368876100006 },
      { lng: 55.32437988500004, lat: 25.28390746100007 },
      { lng: 55.32410178400005, lat: 25.28443146100005 },
      { lng: 55.32384548400006, lat: 25.28493106100007 },
      { lng: 55.32380348400005, lat: 25.28491016100003 },
      { lng: 55.32375638400003, lat: 25.28489736100005 },
      { lng: 55.32375271100005, lat: 25.28490432400002 },
      { lng: 55.32323248400007, lat: 25.28589046100006 },
      { lng: 55.32249032200008, lat: 25.28730184600005 },
      { lng: 55.32246460500005, lat: 25.28735075200007 },
      { lng: 55.32239608400005, lat: 25.28748106100005 },
      { lng: 55.32219688400005, lat: 25.28783086100003 },
      { lng: 55.32241828400004, lat: 25.28802676100003 },
      { lng: 55.32254538400008, lat: 25.28813916100006 },
      { lng: 55.32262218400007, lat: 25.28820716100006 },
      { lng: 55.32424718400006, lat: 25.28970346100004 },
      { lng: 55.32530978300008, lat: 25.29064806100007 },
      { lng: 55.32593607800004, lat: 25.29120477900005 },
      { lng: 55.32656278300004, lat: 25.29176186200004 },
      { lng: 55.32657278500005, lat: 25.29176993600004 },
      { lng: 55.32685552400005, lat: 25.29199815600003 },
      { lng: 55.32689892400003, lat: 25.29203318800006 },
      { lng: 55.32730958300004, lat: 25.29236466200007 },
      { lng: 55.32745988300007, lat: 25.29248596200006 },
      { lng: 55.32748587600008, lat: 25.29250780200005 },
      { lng: 55.32748776500006, lat: 25.29250938900003 },
      { lng: 55.32752058300008, lat: 25.29253696200004 },
      { lng: 55.32760407500007, lat: 25.29249328600002 },
      { lng: 55.32764486000008, lat: 25.29247195100004 },
      { lng: 55.32764613500007, lat: 25.29247128400004 },
      { lng: 55.32775418300008, lat: 25.29241476200008 },
      { lng: 55.32786978300004, lat: 25.29231186200008 },
      { lng: 55.32899408300005, lat: 25.29139346200003 },
      { lng: 55.32996008300006, lat: 25.29060816200007 },
      { lng: 55.33039824800005, lat: 25.29025172600006 },
      { lng: 55.33040238300003, lat: 25.29024836200006 },
      { lng: 55.33242618400004, lat: 25.28863476200007 },
      { lng: 55.33264628400008, lat: 25.28841106200002 },
      { lng: 55.33308778400004, lat: 25.28810746200003 },
      { lng: 55.33395838400003, lat: 25.28741356300003 },
      { lng: 55.33437998400007, lat: 25.28706386300007 },
      { lng: 55.33441498400003, lat: 25.28705086300005 },
      { lng: 55.33443308400007, lat: 25.28704286300007 },
      { lng: 55.33465248400006, lat: 25.28687906300007 },
      { lng: 55.33491508400004, lat: 25.28668556300005 },
      { lng: 55.33496406600005, lat: 25.28665425100007 },
      { lng: 55.33496601800005, lat: 25.28665300300003 },
      { lng: 55.33496633100003, lat: 25.28665280300004 },
      { lng: 55.33496858400008, lat: 25.28665136300003 },
      { lng: 55.33503028900003, lat: 25.28659653500006 },
      { lng: 55.33503138200007, lat: 25.28659556400004 },
      { lng: 55.33503228400008, lat: 25.28659476300004 },
      { lng: 55.33503345100007, lat: 25.28659374700004 },
      { lng: 55.33531407100003, lat: 25.28634953100004 },
      { lng: 55.33548083300008, lat: 25.28620440200007 },
      { lng: 55.33551638400007, lat: 25.28617346300007 },
      { lng: 55.33581708400004, lat: 25.28593326300006 },
      { lng: 55.33581708400004, lat: 25.28593326300006 },
    ],
    [
      { lng: 55.33244960400003, lat: 25.16963866300006 },
      { lng: 55.33209320100008, lat: 25.16960543700003 },
      { lng: 55.33208490400006, lat: 25.16960466300003 },
      { lng: 55.33120010400006, lat: 25.16963976300008 },
      { lng: 55.33114290400005, lat: 25.16964206300003 },
      { lng: 55.33082580400003, lat: 25.16967936300006 },
      { lng: 55.32984650400005, lat: 25.16970726300008 },
      { lng: 55.32942640400006, lat: 25.16971946300004 },
      { lng: 55.32893390400005, lat: 25.16966266300005 },
      { lng: 55.32890547100004, lat: 25.16965740000006 },
      { lng: 55.32841850400007, lat: 25.16956726300003 },
      { lng: 55.32802140400003, lat: 25.16947176300005 },
      { lng: 55.32766640400007, lat: 25.16933436300008 },
      { lng: 55.32730000400005, lat: 25.16915496300004 },
      { lng: 55.32700220400005, lat: 25.16900996300006 },
      { lng: 55.32670440400005, lat: 25.16880766300005 },
      { lng: 55.32617140400004, lat: 25.16842356300003 },
      { lng: 55.32613213800005, lat: 25.16838523400003 },
      { lng: 55.32612530400007, lat: 25.16837856300003 },
      { lng: 55.32599817200003, lat: 25.16826593900004 },
      { lng: 55.32590710400007, lat: 25.16818526300005 },
      { lng: 55.32574350400006, lat: 25.16840836200004 },
      { lng: 55.32500550400005, lat: 25.16931686200007 },
      { lng: 55.32496300400004, lat: 25.16937226200002 },
      { lng: 55.32416920400004, lat: 25.17040736200005 },
      { lng: 55.32316340400007, lat: 25.17170966200007 },
      { lng: 55.32289990400005, lat: 25.17204606200005 },
      { lng: 55.32225660400007, lat: 25.17286726200007 },
      { lng: 55.32131080300007, lat: 25.17409536200006 },
      { lng: 55.32096030300005, lat: 25.17454666200007 },
      { lng: 55.32077120300005, lat: 25.17479016200008 },
      { lng: 55.32077081100005, lat: 25.17479066700002 },
      { lng: 55.32068650300005, lat: 25.17489926200005 },
      { lng: 55.32068328900004, lat: 25.17490339900007 },
      { lng: 55.32038980300007, lat: 25.17528116200003 },
      { lng: 55.31945470300008, lat: 25.17648456200004 },
      { lng: 55.31922450300004, lat: 25.17677406100006 },
      { lng: 55.31897360300007, lat: 25.17710286100004 },
      { lng: 55.31854080300008, lat: 25.17767036100003 },
      { lng: 55.31827620300004, lat: 25.17801276100005 },
      { lng: 55.31819589100007, lat: 25.17811555400004 },
      { lng: 55.31783500300003, lat: 25.17857746100003 },
      { lng: 55.31772140300006, lat: 25.17872726100006 },
      { lng: 55.31768611400008, lat: 25.17877377300005 },
      { lng: 55.31722460300006, lat: 25.17938206100007 },
      { lng: 55.31688530300005, lat: 25.17983186100003 },
      { lng: 55.31687825800003, lat: 25.17984120400007 },
      { lng: 55.31661030200007, lat: 25.18019656100006 },
      { lng: 55.31724170200005, lat: 25.18050006100003 },
      { lng: 55.31724891000005, lat: 25.18050359300003 },
      { lng: 55.31775800200006, lat: 25.18075306100008 },
      { lng: 55.31779935700007, lat: 25.18076884800007 },
      { lng: 55.31780620200004, lat: 25.18077146100006 },
      { lng: 55.31844980200003, lat: 25.18101766100006 },
      { lng: 55.31860160200006, lat: 25.18107576100005 },
      { lng: 55.32205610200003, lat: 25.18263186200005 },
      { lng: 55.32250410200004, lat: 25.18284896200004 },
      { lng: 55.32393690200007, lat: 25.18354336200002 },
      { lng: 55.32544360200006, lat: 25.18421616200004 },
      { lng: 55.32690940200007, lat: 25.18463516300005 },
      { lng: 55.32710040200004, lat: 25.18465506300004 },
      { lng: 55.32763890200005, lat: 25.18471136300008 },
      { lng: 55.32769148700004, lat: 25.18472291600006 },
      { lng: 55.32805900200003, lat: 25.18480366300003 },
      { lng: 55.32899260200003, lat: 25.18487426300004 },
      { lng: 55.32924260200008, lat: 25.18489316300003 },
      { lng: 55.32927619400004, lat: 25.18480904800003 },
      { lng: 55.32927970200006, lat: 25.18480026300006 },
      { lng: 55.32930461300003, lat: 25.18466423100006 },
      { lng: 55.32930640200004, lat: 25.18465446300007 },
      { lng: 55.32935330200007, lat: 25.18368666300006 },
      { lng: 55.32936550200003, lat: 25.18164036300004 },
      { lng: 55.32937258000004, lat: 25.18154499000008 },
      { lng: 55.32937330200008, lat: 25.18153526300006 },
      { lng: 55.32937476600006, lat: 25.18117434500004 },
      { lng: 55.32937480200007, lat: 25.18116556300004 },
      { lng: 55.32935730200006, lat: 25.18098396300007 },
      { lng: 55.32935730200006, lat: 25.18061306300007 },
      { lng: 55.32938990200006, lat: 25.18039286300007 },
      { lng: 55.32954880200003, lat: 25.17983436300005 },
      { lng: 55.32960590200008, lat: 25.17971616300002 },
      { lng: 55.32978530200006, lat: 25.17938196300003 },
      { lng: 55.33000130300007, lat: 25.17908846300003 },
      { lng: 55.33051080300004, lat: 25.17849736300008 },
      { lng: 55.33141580300003, lat: 25.17744566300007 },
      { lng: 55.33214950300004, lat: 25.17661396300002 },
      { lng: 55.33230430300006, lat: 25.17635296300006 },
      { lng: 55.33246740300007, lat: 25.17607176300004 },
      { lng: 55.33255300300004, lat: 25.17576596300006 },
      { lng: 55.33264270300003, lat: 25.17535836300004 },
      { lng: 55.33263860300008, lat: 25.17488146300008 },
      { lng: 55.33264537100007, lat: 25.17482954300004 },
      { lng: 55.33264650300003, lat: 25.17482086300004 },
      { lng: 55.33262064900003, lat: 25.17454023400006 },
      { lng: 55.33261970300003, lat: 25.17452996300005 },
      { lng: 55.33260580300004, lat: 25.17368286300007 },
      { lng: 55.33254460400008, lat: 25.17244766300007 },
      { lng: 55.33250380400005, lat: 25.17121246300007 },
      { lng: 55.33246578100005, lat: 25.16997060800003 },
      { lng: 55.33246550400003, lat: 25.16996156300007 },
      { lng: 55.33244960400003, lat: 25.16963866300006 },
      { lng: 55.33244960400003, lat: 25.16963866300006 },
    ],
    [
      { lng: 55.18205049200003, lat: 25.09718624200008 },
      { lng: 55.18204130000004, lat: 25.09717570000004 },
      { lng: 55.18204030900006, lat: 25.09717722900007 },
      { lng: 55.18198220000005, lat: 25.09726690000002 },
      { lng: 55.18198201300004, lat: 25.09726722600004 },
      { lng: 55.18196541600008, lat: 25.09729618600005 },
      { lng: 55.18196260000008, lat: 25.09730110000004 },
      { lng: 55.18194236000005, lat: 25.09733076500004 },
      { lng: 55.18193640000004, lat: 25.09733950000003 },
      { lng: 55.18194139300005, lat: 25.09736351800007 },
      { lng: 55.18195850000006, lat: 25.09744580000006 },
      { lng: 55.18195902400004, lat: 25.09745233900003 },
      { lng: 55.18196160000008, lat: 25.09748450000006 },
      { lng: 55.18194600000004, lat: 25.09757530000007 },
      { lng: 55.18190330000004, lat: 25.09766880000006 },
      { lng: 55.18181440000006, lat: 25.09781400000003 },
      { lng: 55.18162180000007, lat: 25.09814300000005 },
      { lng: 55.18156970000007, lat: 25.09825990000007 },
      { lng: 55.18129090000008, lat: 25.09880770000007 },
      { lng: 55.18117910000007, lat: 25.09905650000007 },
      { lng: 55.18095940000006, lat: 25.09954600000003 },
      { lng: 55.18086180000006, lat: 25.09973630000007 },
      { lng: 55.18078360000004, lat: 25.09988270000002 },
      { lng: 55.18072740000008, lat: 25.09999980000003 },
      { lng: 55.18061270000004, lat: 25.10020730000002 },
      { lng: 55.18050460100005, lat: 25.10040927800003 },
      { lng: 55.18047130000008, lat: 25.10047150000003 },
      { lng: 55.18033030000004, lat: 25.10077110000003 },
      { lng: 55.18023700000003, lat: 25.10096920000007 },
      { lng: 55.18016880000005, lat: 25.10110800000007 },
      { lng: 55.18005870000007, lat: 25.10133220000006 },
      { lng: 55.17992690000005, lat: 25.10165940000007 },
      { lng: 55.17981920000005, lat: 25.10195500000003 },
      { lng: 55.17965410000005, lat: 25.10238870000006 },
      { lng: 55.17964840000008, lat: 25.10240340000007 },
      { lng: 55.17962180000006, lat: 25.10246670000004 },
      { lng: 55.17959320000006, lat: 25.10252930000007 },
      { lng: 55.17956260000005, lat: 25.10259110000004 },
      { lng: 55.17953010000008, lat: 25.10265210000006 },
      { lng: 55.17949570000007, lat: 25.10271230000006 },
      { lng: 55.17945300000008, lat: 25.10278020000004 },
      { lng: 55.17940840000006, lat: 25.10284710000008 },
      { lng: 55.17936180000004, lat: 25.10291280000007 },
      { lng: 55.17931330000005, lat: 25.10297750000007 },
      { lng: 55.17926300000005, lat: 25.10304090000005 },
      { lng: 55.17921500000006, lat: 25.10309750000005 },
      { lng: 55.17916500000007, lat: 25.10315280000003 },
      { lng: 55.17911320000007, lat: 25.10320660000008 },
      { lng: 55.17905950000005, lat: 25.10325890000007 },
      { lng: 55.17904730200007, lat: 25.10327010200007 },
      { lng: 55.17903500000006, lat: 25.10328140000007 },
      { lng: 55.17900400000008, lat: 25.10330970000007 },
      { lng: 55.17894640000003, lat: 25.10336060000003 },
      { lng: 55.17888710000005, lat: 25.10341000000005 },
      { lng: 55.17882620000006, lat: 25.10345760000007 },
      { lng: 55.17876370000005, lat: 25.10350360000007 },
      { lng: 55.17869970000004, lat: 25.10354770000004 },
      { lng: 55.17864247500006, lat: 25.10358440500005 },
      { lng: 55.17862050000008, lat: 25.10359850000003 },
      { lng: 55.17860293000007, lat: 25.10362058800007 },
      { lng: 55.17845020000004, lat: 25.10381260000003 },
      { lng: 55.17830870000006, lat: 25.10399130000008 },
      { lng: 55.17812980000008, lat: 25.10421100000008 },
      { lng: 55.17807638300008, lat: 25.10427497100005 },
      { lng: 55.17794000000004, lat: 25.10443830000003 },
      { lng: 55.17793274300004, lat: 25.10444756800007 },
      { lng: 55.17787290000007, lat: 25.10452400000003 },
      { lng: 55.17767550000008, lat: 25.10475120000007 },
      { lng: 55.17753980000003, lat: 25.10491630000007 },
      { lng: 55.17750741300006, lat: 25.10495409500004 },
      { lng: 55.17748470000004, lat: 25.10498060000003 },
      { lng: 55.17742770000007, lat: 25.10504890000004 },
      { lng: 55.17734970000004, lat: 25.10513170000007 },
      { lng: 55.17727640000004, lat: 25.10521230000006 },
      { lng: 55.17727117700008, lat: 25.10521680000005 },
      { lng: 55.17712422500006, lat: 25.10534339200007 },
      { lng: 55.17710750000003, lat: 25.10535780000004 },
      { lng: 55.17705820000003, lat: 25.10539340000003 },
      { lng: 55.17701650000004, lat: 25.10542930000003 },
      { lng: 55.17703750000004, lat: 25.10544200000004 },
      { lng: 55.17713350000008, lat: 25.10550580000006 },
      { lng: 55.17819860000003, lat: 25.10625340000007 },
      { lng: 55.17989820000008, lat: 25.10746620000003 },
      { lng: 55.18157600000006, lat: 25.10865280000007 },
      { lng: 55.18377550000008, lat: 25.11020460000003 },
      { lng: 55.18512740000006, lat: 25.11115660000007 },
      { lng: 55.18649220000003, lat: 25.11212160000002 },
      { lng: 55.18760610000004, lat: 25.11289870000007 },
      { lng: 55.18761320600004, lat: 25.11290363200004 },
      { lng: 55.18768030000007, lat: 25.11295020000006 },
      { lng: 55.18768744100004, lat: 25.11295523300004 },
      { lng: 55.18949590000005, lat: 25.11422990000005 },
      { lng: 55.19023080900007, lat: 25.11475365400003 },
      { lng: 55.19027830000005, lat: 25.11478750000003 },
      { lng: 55.19060000000007, lat: 25.11501670000007 },
      { lng: 55.19154320000007, lat: 25.11568610000006 },
      { lng: 55.19277770000008, lat: 25.11655110000004 },
      { lng: 55.19359920000005, lat: 25.11712490000008 },
      { lng: 55.19480760000005, lat: 25.11798990000005 },
      { lng: 55.19592295500007, lat: 25.11877700200006 },
      { lng: 55.19597680000004, lat: 25.11881500000004 },
      { lng: 55.19598350400008, lat: 25.11881970300004 },
      { lng: 55.19724190000005, lat: 25.11970250000007 },
      { lng: 55.19890670000007, lat: 25.12087620000005 },
      { lng: 55.19942510000004, lat: 25.12124230000006 },
      { lng: 55.19943306100004, lat: 25.12124792500003 },
      { lng: 55.20010650000006, lat: 25.12172380000004 },
      { lng: 55.20075560000004, lat: 25.12218750000005 },
      { lng: 55.20128870000008, lat: 25.12256700000006 },
      { lng: 55.20129659300005, lat: 25.12257252200004 },
      { lng: 55.20192870000005, lat: 25.12301480000008 },
      { lng: 55.20200787400006, lat: 25.12296379400004 },
      { lng: 55.20201190000006, lat: 25.12296120000008 },
      { lng: 55.20218279300008, lat: 25.12285095500005 },
      { lng: 55.20219900000006, lat: 25.12284050000005 },
      { lng: 55.20230480000004, lat: 25.12277220000004 },
      { lng: 55.20246390000005, lat: 25.12266530000005 },
      { lng: 55.20252504500007, lat: 25.12262419200005 },
      { lng: 55.20252890000006, lat: 25.12262160000006 },
      { lng: 55.20301100000006, lat: 25.12222830000007 },
      { lng: 55.20351050000005, lat: 25.12188160000005 },
      { lng: 55.20464450000003, lat: 25.12114710000003 },
      { lng: 55.20621110000008, lat: 25.12015530000008 },
      { lng: 55.20765053900004, lat: 25.11921514400007 },
      { lng: 55.20804210000006, lat: 25.11895940000005 },
      { lng: 55.20873820000003, lat: 25.11849720000004 },
      { lng: 55.20888231500004, lat: 25.11840151200005 },
      { lng: 55.21135938800006, lat: 25.11675680400003 },
      { lng: 55.21136090000005, lat: 25.11675580000008 },
      { lng: 55.21129592900007, lat: 25.11667105600003 },
      { lng: 55.21128960000004, lat: 25.11666280000003 },
      { lng: 55.21125060000003, lat: 25.11661240000007 },
      { lng: 55.21122034200005, lat: 25.11657498900007 },
      { lng: 55.21121380000005, lat: 25.11656690000007 },
      { lng: 55.21117405900003, lat: 25.11651531300004 },
      { lng: 55.21113694100006, lat: 25.11646713100004 },
      { lng: 55.21113060000005, lat: 25.11645890000005 },
      { lng: 55.21098950000004, lat: 25.11627910000004 },
      { lng: 55.21091520000004, lat: 25.11618330000005 },
      { lng: 55.21081570000007, lat: 25.11605560000004 },
      { lng: 55.21063510000005, lat: 25.11582540000006 },
      { lng: 55.21034120000007, lat: 25.11545150000006 },
      { lng: 55.20989980000007, lat: 25.11489010000003 },
      { lng: 55.20978040000006, lat: 25.11473940000008 },
      { lng: 55.20963700000004, lat: 25.11455520000004 },
      { lng: 55.20953340000005, lat: 25.11442570000003 },
      { lng: 55.20929840000008, lat: 25.11411670000007 },
      { lng: 55.20907980000004, lat: 25.11384010000006 },
      { lng: 55.20891900000004, lat: 25.11361630000005 },
      { lng: 55.20885660000005, lat: 25.11352210000007 },
      { lng: 55.20858702900006, lat: 25.11319289900007 },
      { lng: 55.20850838900003, lat: 25.11309686300007 },
      { lng: 55.20850670000004, lat: 25.11309480000006 },
      { lng: 55.20837440000008, lat: 25.11291980000004 },
      { lng: 55.20829665900004, lat: 25.11281696700007 },
      { lng: 55.20821360000008, lat: 25.11270710000002 },
      { lng: 55.20819208500006, lat: 25.11267823200006 },
      { lng: 55.20815702100003, lat: 25.11263118300008 },
      { lng: 55.20811880000008, lat: 25.11257990000007 },
      { lng: 55.20803357000005, lat: 25.11246898900004 },
      { lng: 55.20803350200003, lat: 25.11246890100006 },
      { lng: 55.20803346200006, lat: 25.11246884900004 },
      { lng: 55.20803137500008, lat: 25.11246613300005 },
      { lng: 55.20802720000006, lat: 25.11246070000004 },
      { lng: 55.20802015200007, lat: 25.11245138700008 },
      { lng: 55.20801617100005, lat: 25.11244612700006 },
      { lng: 55.20801600600004, lat: 25.11244590900003 },
      { lng: 55.20800869800007, lat: 25.11243625200007 },
      { lng: 55.20799590600006, lat: 25.11241934900005 },
      { lng: 55.20799191300006, lat: 25.11241407300002 },
      { lng: 55.20797495900007, lat: 25.11239167100007 },
      { lng: 55.20797491000008, lat: 25.11239160600007 },
      { lng: 55.20796870000004, lat: 25.11238340000006 },
      { lng: 55.20790800000003, lat: 25.11230380000006 },
      { lng: 55.20777380000004, lat: 25.11212540000002 },
      { lng: 55.20770430000005, lat: 25.11203320000004 },
      { lng: 55.20662220000003, lat: 25.11061210000003 },
      { lng: 55.20645000000007, lat: 25.11039160000007 },
      { lng: 55.20626920000007, lat: 25.11016400000005 },
      { lng: 55.20614830000005, lat: 25.11002030000003 },
      { lng: 55.20581650000008, lat: 25.10960800000004 },
      { lng: 55.20570090000007, lat: 25.10946430000007 },
      { lng: 55.20558620000003, lat: 25.10931500000004 },
      { lng: 55.20545610000005, lat: 25.10913970000007 },
      { lng: 55.20535450000006, lat: 25.10900510000005 },
      { lng: 55.20525100000003, lat: 25.10887150000008 },
      { lng: 55.20514570000006, lat: 25.10873920000006 },
      { lng: 55.20468400000004, lat: 25.10815440000005 },
      { lng: 55.20437178900005, lat: 25.10781134000007 },
      { lng: 55.20437064800007, lat: 25.10781008600003 },
      { lng: 55.20437002900007, lat: 25.10780940500007 },
      { lng: 55.20436940700006, lat: 25.10780872200007 },
      { lng: 55.20436808200003, lat: 25.10780726600007 },
      { lng: 55.20436520000004, lat: 25.10780410000007 },
      { lng: 55.20433784300008, lat: 25.10777680200005 },
      { lng: 55.20433008500004, lat: 25.10776906100006 },
      { lng: 55.20432305500003, lat: 25.10776204600006 },
      { lng: 55.20431561400005, lat: 25.10775462100003 },
      { lng: 55.20431398500006, lat: 25.10775299600004 },
      { lng: 55.20431369500005, lat: 25.10775270700003 },
      { lng: 55.20429326900006, lat: 25.10773232500003 },
      { lng: 55.20426906200004, lat: 25.10770817100007 },
      { lng: 55.20423415500005, lat: 25.10767334000008 },
      { lng: 55.20423399100008, lat: 25.10767317600005 },
      { lng: 55.20423394800008, lat: 25.10767313400004 },
      { lng: 55.20422710000008, lat: 25.10766630000006 },
      { lng: 55.20410970000006, lat: 25.10754260000004 },
      { lng: 55.20397300000008, lat: 25.10739990000008 },
      { lng: 55.20389770000003, lat: 25.10733980000003 },
      { lng: 55.20327150000003, lat: 25.10687160000003 },
      { lng: 55.20288540000007, lat: 25.10663540000007 },
      { lng: 55.20279080100005, lat: 25.10659460000005 },
      { lng: 55.20230830000003, lat: 25.10638680000005 },
      { lng: 55.20195590000003, lat: 25.10625470000008 },
      { lng: 55.20185470000007, lat: 25.10621680000003 },
      { lng: 55.20175270000004, lat: 25.10618090000003 },
      { lng: 55.20164980000004, lat: 25.10614710000004 },
      { lng: 55.20155590000007, lat: 25.10611790000007 },
      { lng: 55.20128330000006, lat: 25.10604010000003 },
      { lng: 55.20122800000007, lat: 25.10603270000007 },
      { lng: 55.20102620000006, lat: 25.10600560000006 },
      { lng: 55.20088290000007, lat: 25.10598260000006 },
      { lng: 55.20044450000006, lat: 25.10595200000006 },
      { lng: 55.19988770000003, lat: 25.10591100000005 },
      { lng: 55.19954680000006, lat: 25.10588640000003 },
      { lng: 55.19940538800006, lat: 25.10587811600004 },
      { lng: 55.19940528900003, lat: 25.10587811000005 },
      { lng: 55.19940486100006, lat: 25.10587808500003 },
      { lng: 55.19940000000008, lat: 25.10587780000003 },
      { lng: 55.19940470000006, lat: 25.10580350000004 },
      { lng: 55.19940562700003, lat: 25.10578333700005 },
      { lng: 55.19940642700004, lat: 25.10576592700005 },
      { lng: 55.19940658900003, lat: 25.10576240400007 },
      { lng: 55.19940721700004, lat: 25.10574874900004 },
      { lng: 55.19940762800007, lat: 25.10573981800007 },
      { lng: 55.19940797600003, lat: 25.10573223700004 },
      { lng: 55.19940839500003, lat: 25.10572311500005 },
      { lng: 55.19940842300008, lat: 25.10572249700004 },
      { lng: 55.19940880000007, lat: 25.10571430000005 },
      { lng: 55.19930020000004, lat: 25.10570490000003 },
      { lng: 55.19921789100005, lat: 25.10569851100007 },
      { lng: 55.19921260000007, lat: 25.10569810000004 },
      { lng: 55.19920837500007, lat: 25.10569792500007 },
      { lng: 55.19883376600006, lat: 25.10568242500005 },
      { lng: 55.19879690000005, lat: 25.10568090000004 },
      { lng: 55.19816750000007, lat: 25.10564800000003 },
      { lng: 55.19791160000005, lat: 25.10563430000008 },
      { lng: 55.19790563100003, lat: 25.10563398100004 },
      { lng: 55.19727140000003, lat: 25.10560010000006 },
      { lng: 55.19623260000003, lat: 25.10554460000003 },
      { lng: 55.19589576300007, lat: 25.10551930300005 },
      { lng: 55.19589040000005, lat: 25.10551890000005 },
      { lng: 55.19510160000004, lat: 25.10545810000008 },
      { lng: 55.19443200000006, lat: 25.10541100000006 },
      { lng: 55.19439150000005, lat: 25.10540760000004 },
      { lng: 55.19421580000005, lat: 25.10539960000006 },
      { lng: 55.19383750000003, lat: 25.10537280000005 },
      { lng: 55.19380150000006, lat: 25.10537250000004 },
      { lng: 55.19345900000008, lat: 25.10534840000003 },
      { lng: 55.19308030000008, lat: 25.10532660000007 },
      { lng: 55.19270150000006, lat: 25.10530730000005 },
      { lng: 55.19214510000006, lat: 25.10527900000005 },
      { lng: 55.19184590000003, lat: 25.10526210000006 },
      { lng: 55.19182517300004, lat: 25.10526094900007 },
      { lng: 55.19180630000005, lat: 25.10525990000008 },
      { lng: 55.19158900000008, lat: 25.10524760000004 },
      { lng: 55.19103300000006, lat: 25.10521300000005 },
      { lng: 55.19085690000003, lat: 25.10520620000005 },
      { lng: 55.19076900000005, lat: 25.10519980000004 },
      { lng: 55.19068140000007, lat: 25.10519130000006 },
      { lng: 55.19052280000005, lat: 25.10517050000004 },
      { lng: 55.19041480000004, lat: 25.10515260000005 },
      { lng: 55.19033400000006, lat: 25.10513710000004 },
      { lng: 55.19024820000004, lat: 25.10511860000003 },
      { lng: 55.19016300000004, lat: 25.10509810000008 },
      { lng: 55.19006410000003, lat: 25.10507200000006 },
      { lng: 55.18996580000004, lat: 25.10504410000004 },
      { lng: 55.18986810000007, lat: 25.10501440000007 },
      { lng: 55.18977120000005, lat: 25.10498270000005 },
      { lng: 55.18967510000004, lat: 25.10494920000008 },
      { lng: 55.18957970000008, lat: 25.10491390000004 },
      { lng: 55.18954250000007, lat: 25.10489930000006 },
      { lng: 55.18948510000007, lat: 25.10487670000003 },
      { lng: 55.18940746100003, lat: 25.10484444100007 },
      { lng: 55.18940640000005, lat: 25.10484400000007 },
      { lng: 55.18920700000007, lat: 25.10475450000007 },
      { lng: 55.18911620000006, lat: 25.10471030000008 },
      { lng: 55.18902650000007, lat: 25.10466430000002 },
      { lng: 55.18893790000004, lat: 25.10461660000004 },
      { lng: 55.18885030000007, lat: 25.10456720000008 },
      { lng: 55.18876400000005, lat: 25.10451610000007 },
      { lng: 55.18867880000005, lat: 25.10446340000004 },
      { lng: 55.18859490000006, lat: 25.10440910000005 },
      { lng: 55.18851220000005, lat: 25.10435320000005 },
      { lng: 55.18843340000006, lat: 25.10429630000004 },
      { lng: 55.18835570000005, lat: 25.10423810000003 },
      { lng: 55.18827930000003, lat: 25.10417840000002 },
      { lng: 55.18820430000005, lat: 25.10411740000006 },
      { lng: 55.18812510000004, lat: 25.10405050000003 },
      { lng: 55.18780716000003, lat: 25.10373429900005 },
      { lng: 55.18779600000005, lat: 25.10372320000005 },
      { lng: 55.18773760000005, lat: 25.10366630000004 },
      { lng: 55.18769219200004, lat: 25.10361996300003 },
      { lng: 55.18768870000008, lat: 25.10361640000008 },
      { lng: 55.18754950000005, lat: 25.10347930000006 },
      { lng: 55.18741676100007, lat: 25.10333256900003 },
      { lng: 55.18740720000005, lat: 25.10332200000005 },
      { lng: 55.18731121000008, lat: 25.10320625300005 },
      { lng: 55.18730760000005, lat: 25.10320190000004 },
      { lng: 55.18638290000007, lat: 25.10216700000007 },
      { lng: 55.18552710000006, lat: 25.10120630000006 },
      { lng: 55.18522740000003, lat: 25.10086610000008 },
      { lng: 55.18490160000005, lat: 25.10049050000003 },
      { lng: 55.18406450300006, lat: 25.09952565300006 },
      { lng: 55.18405500000006, lat: 25.09951470000004 },
      { lng: 55.18395572700007, lat: 25.09939847100003 },
      { lng: 55.18395020000003, lat: 25.09939200000002 },
      { lng: 55.18359902500003, lat: 25.09897670900006 },
      { lng: 55.18358980000005, lat: 25.09896580000003 },
      { lng: 55.18354990000006, lat: 25.09891430000005 },
      { lng: 55.18349760000007, lat: 25.09884990000006 },
      { lng: 55.18324477000004, lat: 25.09857583700006 },
      { lng: 55.18324040000005, lat: 25.09857110000007 },
      { lng: 55.18296100000003, lat: 25.09822650000007 },
      { lng: 55.18269274500005, lat: 25.09791510600007 },
      { lng: 55.18269050000004, lat: 25.09791250000006 },
      { lng: 55.18247730000007, lat: 25.09767660000006 },
      { lng: 55.18219790000006, lat: 25.09735530000006 },
      { lng: 55.18205049200003, lat: 25.09718624200008 },
      { lng: 55.18205049200003, lat: 25.09718624200008 },
    ],
  ];
  const onClick = (e) => {
    // var polygon = new window.google.maps.Polygon({
    //   paths: paths,
    // });
    // const lat = e.latLng.lat();
    // const lng = e.latLng.lng();
    // const contains = window.google.maps.geometry.poly.containsLocation(
    //   new window.google.maps.LatLng(lat, lng),
    //   polygon
    // );

    // if (contains) {
    //   console.log("go ahead how can we help you");
    // } else {
    //   console.log("Sorry we do not offer our service yet");
    // }

    console.log(e);
    console.log(e.google.maps.DirectionsService());
  };
  const center = {
    lat: latlng ? latlng.lat : 25.2858687,
    lng: latlng ? latlng.lng : 55.3281742,
  };
  const onMarkerClick = (e) => {
    console.log({ f: e });
  };
  return (
    <>
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            {error && <div className="text-red-600">{error}</div>}

            <input
              type="text"
              className="w-full text-input-color text-16px mt-1 border border-grey-600 focus:ring-indigo-500 outline-none focus:border-indigo-500 block w-4/6 border-gray-300 p-2"
              {...getInputProps({
                placeholder: "Enter Google Map Location",
              })}
            />

            <div
              className="autocomplete-dropdown-container"
              style={{
                position: "absolute",
                zIndex: "1000",
                width: "76.99%",
              }}
            >
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion, key) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    key={key}
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <div className={`mt-2 ${showInput ? " " : "relative"}`}>
        <Map
          zoom={8}
          google={google}
          style={{ width: width, height: height }}
          initialCenter={center}
          center={center}
          centerAroundCurrentLocation
          mapId="id"
          clickableIcons
          onClick={onClick}
        >
          <Marker
            position={center}
            onClick={onMarkerClick}
            name={"Current location"}
          />
          <Polygon
            paths={paths}
            options={{
              fillColor: "transparent",
              fillOpacity: 1,
              strokeColor: "red",
              strokeOpacity: 1,
              strokeWeight: 2,
              clickable: false,
              draggable: false,
              editable: false,
              geodesic: false,
              zIndex: 1,
            }}
          />
        </Map>
      </div>
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBMEmqFsiguwAJ8kkXYvqN16jNofxcyvu8",
  language: "en",
  region: "us",
  libraries: ["drawing", "visualization", "geometry", "places"],
})(MapGoogle);