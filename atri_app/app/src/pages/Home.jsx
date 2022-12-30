import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Accordion } from "@atrilabs/react-component-manifests/src/manifests/Accordion/Accordion.tsx";
import { usehome_hero_sectionCb, usehome_hero_section_flexCb, usehome_hero_section_wrapper_textCb, useFlex10Cb, usebutton_flex_1Cb, usebutton_flex_2Cb, usehome_hero_section_wrapper_imageCb, useheaderCb, useheader_flexCb, useheader_flex_menuCb, usetrusted_by_sectionCb, usetrusted_by_section_wrapperCb, useFlex17Cb, useFlex18Cb, useFlex19Cb, useFlex20Cb, useFlex21Cb, useFlex22Cb, useFlex23Cb, useservices_sectionCb, useFlex25Cb, useFlex26Cb, useFlex27Cb, useFlex28Cb, useFlex29Cb, useservices_1Cb, useFlex34Cb, useFlex35Cb, useFlex44Cb, useFlex45Cb, useFlex46Cb, useFlex47Cb, useFlex69Cb, useservices_2Cb, useFlex51Cb, useFlex48Cb, useFlex49Cb, useFlex50Cb, useFlex52Cb, useFlex53Cb, useFlex77Cb, useservices_3Cb, useFlex58Cb, useFlex59Cb, useFlex60Cb, useFlex55Cb, useFlex56Cb, useFlex57Cb, useprojects_sectionCb, useFlex79Cb, useFlex81Cb, useFlex82Cb, useFlex80Cb, useproduct_designer_sectionCb, useFlex86Cb, useFlex87Cb, useFlex88Cb, useFlex89Cb, useFlex90Cb, useFlex91Cb, useFlex92Cb, useFlex93Cb, useFlex94Cb, useedu_and_weCb, useFlex96Cb, useFlex97Cb, useFlex99Cb, useFlex100Cb, useFlex101Cb, useFlex105Cb, useFlex104Cb, useFlex102Cb, useFlex103Cb, useFlex114Cb, useFlex112Cb, useFlex110Cb, useFlex106Cb, useFlex107Cb, useFlex118Cb, useFlex119Cb, useFlex120Cb, useFlex113Cb, useFlex111Cb, useFlex108Cb, useFlex109Cb, useFlex116Cb, useFlex117Cb, useFlex115Cb, useFlex135Cb, useFlex133Cb, useFlex131Cb, useFlex126Cb, useFlex127Cb, useFlex121Cb, useFlex122Cb, useFlex128Cb, useFlex134Cb, useFlex132Cb, useFlex129Cb, useFlex123Cb, useFlex124Cb, useFlex125Cb, useFlex130Cb, useFlex150Cb, useFlex148Cb, useFlex146Cb, useFlex141Cb, useFlex142Cb, useFlex136Cb, useFlex137Cb, useFlex138Cb, useFlex149Cb, useFlex147Cb, useFlex143Cb, useFlex144Cb, useFlex139Cb, useFlex140Cb, useFlex145Cb, useTestimonialsCb, useFlex152Cb, useFlex153Cb, useFlex154Cb, useFlex155Cb, useFlex156Cb, useFlex157Cb, useFlex158Cb, useFAQCb, useFlex160Cb, useFlex161Cb, useFlex164Cb, useFlex206Cb, useFlex168Cb, useFlex172Cb, useFlex174Cb, useFlex203Cb, useFlex207Cb, useFlex169Cb, useFlex171Cb, useFlex175Cb, useFlex204Cb, useFlex189Cb, useFlex190Cb, useFlex192Cb, useFlex201Cb, useFlex193Cb, useFlex194Cb, useFlex199Cb, useFlex200Cb, useFlex191Cb, useFlex202Cb, usemain_head_section_coloredCb, usemain_head_sectionCb, usehome_hero_section_text_descCb, usebutton_flex_1_textCb, useTextBox14Cb, useman_asset_imageCb, useImage1Cb, usemenu_options_aboutCb, usemenu_options_serviceCb, usemenu_options_projectsCb, usemenu_options_blogCb, usemenu_options_bookCb, useTextBox15Cb, usetrusted_by_1Cb, usetrusted_by_2Cb, usetrusted_by_3Cb, usetrusted_by_4Cb, useTextBox16Cb, useTextBox17Cb, useservices_1_imageCb, useTextBox18Cb, useTextBox19Cb, useTextBox25Cb, useTextBox26Cb, useTextBox27Cb, useservices_2_imageCb, useTextBox28Cb, useTextBox29Cb, useTextBox30Cb, useTextBox31Cb, useTextBox32Cb, useservices_3_imageCb, useTextBox36Cb, useTextBox37Cb, useTextBox33Cb, useTextBox34Cb, useTextBox35Cb, useTextBox49Cb, useTextBox50Cb, useTextBox52Cb, useTextBox48Cb, useTextBox54Cb, useTextBox55Cb, useTextBox56Cb, useproductDesginer1_imageCb, useproductDesginer2_imageCb, useproductDesginer3_imageCb, useproductDesginer4_imageCb, useTextBox57Cb, useTextBox58Cb, useTextBox59Cb, useTextBox60Cb, usewe_1_imageCb, useTextBox68Cb, useTextBox69Cb, useTextBox70Cb, useImage21Cb, useTextBox63Cb, useTextBox67Cb, useTextBox66Cb, useImage20Cb, useImage23Cb, useTextBox71Cb, useTextBox72Cb, useTextBox76Cb, useImage22Cb, useTextBox73Cb, useTextBox74Cb, useTextBox75Cb, useImage24Cb, useImage26Cb, useTextBox77Cb, useTextBox78Cb, useTextBox79Cb, useImage25Cb, useTextBox82Cb, useTextBox80Cb, useTextBox81Cb, useImage27Cb, useTextBox83Cb, useTextBox84Cb, useImage28Cb, useImage29Cb, useTextBox87Cb, useTextBox89Cb, useTextBox90Cb, useTextBox91Cb, useTextBox92Cb, useAccordion5Cb, useAccordion8Cb, useAccordion9Cb, useAccordion19Cb, useAccordion6Cb, useAccordion7Cb, useAccordion10Cb, useAccordion20Cb, useImage30Cb, useTextBox115Cb, useTextBox112Cb, useImage31Cb, useTextBox97Cb, useTextBox98Cb, useTextBox99Cb, useTextBox106Cb, useTextBox107Cb, useTextBox108Cb, useTextBox109Cb, useTextBox110Cb, useTextBox111Cb, useTextBox95Cb, useTextBox96Cb, useTextBox116Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const home_hero_sectionProps = useStore((state)=>state["Home"]["home_hero_section"]);
const home_hero_sectionIoProps = useIoStore((state)=>state["Home"]["home_hero_section"]);
const home_hero_sectionCb = usehome_hero_sectionCb()
const home_hero_section_flexProps = useStore((state)=>state["Home"]["home_hero_section_flex"]);
const home_hero_section_flexIoProps = useIoStore((state)=>state["Home"]["home_hero_section_flex"]);
const home_hero_section_flexCb = usehome_hero_section_flexCb()
const home_hero_section_wrapper_textProps = useStore((state)=>state["Home"]["home_hero_section_wrapper_text"]);
const home_hero_section_wrapper_textIoProps = useIoStore((state)=>state["Home"]["home_hero_section_wrapper_text"]);
const home_hero_section_wrapper_textCb = usehome_hero_section_wrapper_textCb()
const Flex10Props = useStore((state)=>state["Home"]["Flex10"]);
const Flex10IoProps = useIoStore((state)=>state["Home"]["Flex10"]);
const Flex10Cb = useFlex10Cb()
const button_flex_1Props = useStore((state)=>state["Home"]["button_flex_1"]);
const button_flex_1IoProps = useIoStore((state)=>state["Home"]["button_flex_1"]);
const button_flex_1Cb = usebutton_flex_1Cb()
const button_flex_2Props = useStore((state)=>state["Home"]["button_flex_2"]);
const button_flex_2IoProps = useIoStore((state)=>state["Home"]["button_flex_2"]);
const button_flex_2Cb = usebutton_flex_2Cb()
const home_hero_section_wrapper_imageProps = useStore((state)=>state["Home"]["home_hero_section_wrapper_image"]);
const home_hero_section_wrapper_imageIoProps = useIoStore((state)=>state["Home"]["home_hero_section_wrapper_image"]);
const home_hero_section_wrapper_imageCb = usehome_hero_section_wrapper_imageCb()
const headerProps = useStore((state)=>state["Home"]["header"]);
const headerIoProps = useIoStore((state)=>state["Home"]["header"]);
const headerCb = useheaderCb()
const header_flexProps = useStore((state)=>state["Home"]["header_flex"]);
const header_flexIoProps = useIoStore((state)=>state["Home"]["header_flex"]);
const header_flexCb = useheader_flexCb()
const header_flex_menuProps = useStore((state)=>state["Home"]["header_flex_menu"]);
const header_flex_menuIoProps = useIoStore((state)=>state["Home"]["header_flex_menu"]);
const header_flex_menuCb = useheader_flex_menuCb()
const trusted_by_sectionProps = useStore((state)=>state["Home"]["trusted_by_section"]);
const trusted_by_sectionIoProps = useIoStore((state)=>state["Home"]["trusted_by_section"]);
const trusted_by_sectionCb = usetrusted_by_sectionCb()
const trusted_by_section_wrapperProps = useStore((state)=>state["Home"]["trusted_by_section_wrapper"]);
const trusted_by_section_wrapperIoProps = useIoStore((state)=>state["Home"]["trusted_by_section_wrapper"]);
const trusted_by_section_wrapperCb = usetrusted_by_section_wrapperCb()
const Flex17Props = useStore((state)=>state["Home"]["Flex17"]);
const Flex17IoProps = useIoStore((state)=>state["Home"]["Flex17"]);
const Flex17Cb = useFlex17Cb()
const Flex18Props = useStore((state)=>state["Home"]["Flex18"]);
const Flex18IoProps = useIoStore((state)=>state["Home"]["Flex18"]);
const Flex18Cb = useFlex18Cb()
const Flex19Props = useStore((state)=>state["Home"]["Flex19"]);
const Flex19IoProps = useIoStore((state)=>state["Home"]["Flex19"]);
const Flex19Cb = useFlex19Cb()
const Flex20Props = useStore((state)=>state["Home"]["Flex20"]);
const Flex20IoProps = useIoStore((state)=>state["Home"]["Flex20"]);
const Flex20Cb = useFlex20Cb()
const Flex21Props = useStore((state)=>state["Home"]["Flex21"]);
const Flex21IoProps = useIoStore((state)=>state["Home"]["Flex21"]);
const Flex21Cb = useFlex21Cb()
const Flex22Props = useStore((state)=>state["Home"]["Flex22"]);
const Flex22IoProps = useIoStore((state)=>state["Home"]["Flex22"]);
const Flex22Cb = useFlex22Cb()
const Flex23Props = useStore((state)=>state["Home"]["Flex23"]);
const Flex23IoProps = useIoStore((state)=>state["Home"]["Flex23"]);
const Flex23Cb = useFlex23Cb()
const services_sectionProps = useStore((state)=>state["Home"]["services_section"]);
const services_sectionIoProps = useIoStore((state)=>state["Home"]["services_section"]);
const services_sectionCb = useservices_sectionCb()
const Flex25Props = useStore((state)=>state["Home"]["Flex25"]);
const Flex25IoProps = useIoStore((state)=>state["Home"]["Flex25"]);
const Flex25Cb = useFlex25Cb()
const Flex26Props = useStore((state)=>state["Home"]["Flex26"]);
const Flex26IoProps = useIoStore((state)=>state["Home"]["Flex26"]);
const Flex26Cb = useFlex26Cb()
const Flex27Props = useStore((state)=>state["Home"]["Flex27"]);
const Flex27IoProps = useIoStore((state)=>state["Home"]["Flex27"]);
const Flex27Cb = useFlex27Cb()
const Flex28Props = useStore((state)=>state["Home"]["Flex28"]);
const Flex28IoProps = useIoStore((state)=>state["Home"]["Flex28"]);
const Flex28Cb = useFlex28Cb()
const Flex29Props = useStore((state)=>state["Home"]["Flex29"]);
const Flex29IoProps = useIoStore((state)=>state["Home"]["Flex29"]);
const Flex29Cb = useFlex29Cb()
const services_1Props = useStore((state)=>state["Home"]["services_1"]);
const services_1IoProps = useIoStore((state)=>state["Home"]["services_1"]);
const services_1Cb = useservices_1Cb()
const Flex34Props = useStore((state)=>state["Home"]["Flex34"]);
const Flex34IoProps = useIoStore((state)=>state["Home"]["Flex34"]);
const Flex34Cb = useFlex34Cb()
const Flex35Props = useStore((state)=>state["Home"]["Flex35"]);
const Flex35IoProps = useIoStore((state)=>state["Home"]["Flex35"]);
const Flex35Cb = useFlex35Cb()
const Flex44Props = useStore((state)=>state["Home"]["Flex44"]);
const Flex44IoProps = useIoStore((state)=>state["Home"]["Flex44"]);
const Flex44Cb = useFlex44Cb()
const Flex45Props = useStore((state)=>state["Home"]["Flex45"]);
const Flex45IoProps = useIoStore((state)=>state["Home"]["Flex45"]);
const Flex45Cb = useFlex45Cb()
const Flex46Props = useStore((state)=>state["Home"]["Flex46"]);
const Flex46IoProps = useIoStore((state)=>state["Home"]["Flex46"]);
const Flex46Cb = useFlex46Cb()
const Flex47Props = useStore((state)=>state["Home"]["Flex47"]);
const Flex47IoProps = useIoStore((state)=>state["Home"]["Flex47"]);
const Flex47Cb = useFlex47Cb()
const Flex69Props = useStore((state)=>state["Home"]["Flex69"]);
const Flex69IoProps = useIoStore((state)=>state["Home"]["Flex69"]);
const Flex69Cb = useFlex69Cb()
const services_2Props = useStore((state)=>state["Home"]["services_2"]);
const services_2IoProps = useIoStore((state)=>state["Home"]["services_2"]);
const services_2Cb = useservices_2Cb()
const Flex51Props = useStore((state)=>state["Home"]["Flex51"]);
const Flex51IoProps = useIoStore((state)=>state["Home"]["Flex51"]);
const Flex51Cb = useFlex51Cb()
const Flex48Props = useStore((state)=>state["Home"]["Flex48"]);
const Flex48IoProps = useIoStore((state)=>state["Home"]["Flex48"]);
const Flex48Cb = useFlex48Cb()
const Flex49Props = useStore((state)=>state["Home"]["Flex49"]);
const Flex49IoProps = useIoStore((state)=>state["Home"]["Flex49"]);
const Flex49Cb = useFlex49Cb()
const Flex50Props = useStore((state)=>state["Home"]["Flex50"]);
const Flex50IoProps = useIoStore((state)=>state["Home"]["Flex50"]);
const Flex50Cb = useFlex50Cb()
const Flex52Props = useStore((state)=>state["Home"]["Flex52"]);
const Flex52IoProps = useIoStore((state)=>state["Home"]["Flex52"]);
const Flex52Cb = useFlex52Cb()
const Flex53Props = useStore((state)=>state["Home"]["Flex53"]);
const Flex53IoProps = useIoStore((state)=>state["Home"]["Flex53"]);
const Flex53Cb = useFlex53Cb()
const Flex77Props = useStore((state)=>state["Home"]["Flex77"]);
const Flex77IoProps = useIoStore((state)=>state["Home"]["Flex77"]);
const Flex77Cb = useFlex77Cb()
const services_3Props = useStore((state)=>state["Home"]["services_3"]);
const services_3IoProps = useIoStore((state)=>state["Home"]["services_3"]);
const services_3Cb = useservices_3Cb()
const Flex58Props = useStore((state)=>state["Home"]["Flex58"]);
const Flex58IoProps = useIoStore((state)=>state["Home"]["Flex58"]);
const Flex58Cb = useFlex58Cb()
const Flex59Props = useStore((state)=>state["Home"]["Flex59"]);
const Flex59IoProps = useIoStore((state)=>state["Home"]["Flex59"]);
const Flex59Cb = useFlex59Cb()
const Flex60Props = useStore((state)=>state["Home"]["Flex60"]);
const Flex60IoProps = useIoStore((state)=>state["Home"]["Flex60"]);
const Flex60Cb = useFlex60Cb()
const Flex55Props = useStore((state)=>state["Home"]["Flex55"]);
const Flex55IoProps = useIoStore((state)=>state["Home"]["Flex55"]);
const Flex55Cb = useFlex55Cb()
const Flex56Props = useStore((state)=>state["Home"]["Flex56"]);
const Flex56IoProps = useIoStore((state)=>state["Home"]["Flex56"]);
const Flex56Cb = useFlex56Cb()
const Flex57Props = useStore((state)=>state["Home"]["Flex57"]);
const Flex57IoProps = useIoStore((state)=>state["Home"]["Flex57"]);
const Flex57Cb = useFlex57Cb()
const projects_sectionProps = useStore((state)=>state["Home"]["projects_section"]);
const projects_sectionIoProps = useIoStore((state)=>state["Home"]["projects_section"]);
const projects_sectionCb = useprojects_sectionCb()
const Flex79Props = useStore((state)=>state["Home"]["Flex79"]);
const Flex79IoProps = useIoStore((state)=>state["Home"]["Flex79"]);
const Flex79Cb = useFlex79Cb()
const Flex81Props = useStore((state)=>state["Home"]["Flex81"]);
const Flex81IoProps = useIoStore((state)=>state["Home"]["Flex81"]);
const Flex81Cb = useFlex81Cb()
const Flex82Props = useStore((state)=>state["Home"]["Flex82"]);
const Flex82IoProps = useIoStore((state)=>state["Home"]["Flex82"]);
const Flex82Cb = useFlex82Cb()
const Flex80Props = useStore((state)=>state["Home"]["Flex80"]);
const Flex80IoProps = useIoStore((state)=>state["Home"]["Flex80"]);
const Flex80Cb = useFlex80Cb()
const product_designer_sectionProps = useStore((state)=>state["Home"]["product_designer_section"]);
const product_designer_sectionIoProps = useIoStore((state)=>state["Home"]["product_designer_section"]);
const product_designer_sectionCb = useproduct_designer_sectionCb()
const Flex86Props = useStore((state)=>state["Home"]["Flex86"]);
const Flex86IoProps = useIoStore((state)=>state["Home"]["Flex86"]);
const Flex86Cb = useFlex86Cb()
const Flex87Props = useStore((state)=>state["Home"]["Flex87"]);
const Flex87IoProps = useIoStore((state)=>state["Home"]["Flex87"]);
const Flex87Cb = useFlex87Cb()
const Flex88Props = useStore((state)=>state["Home"]["Flex88"]);
const Flex88IoProps = useIoStore((state)=>state["Home"]["Flex88"]);
const Flex88Cb = useFlex88Cb()
const Flex89Props = useStore((state)=>state["Home"]["Flex89"]);
const Flex89IoProps = useIoStore((state)=>state["Home"]["Flex89"]);
const Flex89Cb = useFlex89Cb()
const Flex90Props = useStore((state)=>state["Home"]["Flex90"]);
const Flex90IoProps = useIoStore((state)=>state["Home"]["Flex90"]);
const Flex90Cb = useFlex90Cb()
const Flex91Props = useStore((state)=>state["Home"]["Flex91"]);
const Flex91IoProps = useIoStore((state)=>state["Home"]["Flex91"]);
const Flex91Cb = useFlex91Cb()
const Flex92Props = useStore((state)=>state["Home"]["Flex92"]);
const Flex92IoProps = useIoStore((state)=>state["Home"]["Flex92"]);
const Flex92Cb = useFlex92Cb()
const Flex93Props = useStore((state)=>state["Home"]["Flex93"]);
const Flex93IoProps = useIoStore((state)=>state["Home"]["Flex93"]);
const Flex93Cb = useFlex93Cb()
const Flex94Props = useStore((state)=>state["Home"]["Flex94"]);
const Flex94IoProps = useIoStore((state)=>state["Home"]["Flex94"]);
const Flex94Cb = useFlex94Cb()
const edu_and_weProps = useStore((state)=>state["Home"]["edu_and_we"]);
const edu_and_weIoProps = useIoStore((state)=>state["Home"]["edu_and_we"]);
const edu_and_weCb = useedu_and_weCb()
const Flex96Props = useStore((state)=>state["Home"]["Flex96"]);
const Flex96IoProps = useIoStore((state)=>state["Home"]["Flex96"]);
const Flex96Cb = useFlex96Cb()
const Flex97Props = useStore((state)=>state["Home"]["Flex97"]);
const Flex97IoProps = useIoStore((state)=>state["Home"]["Flex97"]);
const Flex97Cb = useFlex97Cb()
const Flex99Props = useStore((state)=>state["Home"]["Flex99"]);
const Flex99IoProps = useIoStore((state)=>state["Home"]["Flex99"]);
const Flex99Cb = useFlex99Cb()
const Flex100Props = useStore((state)=>state["Home"]["Flex100"]);
const Flex100IoProps = useIoStore((state)=>state["Home"]["Flex100"]);
const Flex100Cb = useFlex100Cb()
const Flex101Props = useStore((state)=>state["Home"]["Flex101"]);
const Flex101IoProps = useIoStore((state)=>state["Home"]["Flex101"]);
const Flex101Cb = useFlex101Cb()
const Flex105Props = useStore((state)=>state["Home"]["Flex105"]);
const Flex105IoProps = useIoStore((state)=>state["Home"]["Flex105"]);
const Flex105Cb = useFlex105Cb()
const Flex104Props = useStore((state)=>state["Home"]["Flex104"]);
const Flex104IoProps = useIoStore((state)=>state["Home"]["Flex104"]);
const Flex104Cb = useFlex104Cb()
const Flex102Props = useStore((state)=>state["Home"]["Flex102"]);
const Flex102IoProps = useIoStore((state)=>state["Home"]["Flex102"]);
const Flex102Cb = useFlex102Cb()
const Flex103Props = useStore((state)=>state["Home"]["Flex103"]);
const Flex103IoProps = useIoStore((state)=>state["Home"]["Flex103"]);
const Flex103Cb = useFlex103Cb()
const Flex114Props = useStore((state)=>state["Home"]["Flex114"]);
const Flex114IoProps = useIoStore((state)=>state["Home"]["Flex114"]);
const Flex114Cb = useFlex114Cb()
const Flex112Props = useStore((state)=>state["Home"]["Flex112"]);
const Flex112IoProps = useIoStore((state)=>state["Home"]["Flex112"]);
const Flex112Cb = useFlex112Cb()
const Flex110Props = useStore((state)=>state["Home"]["Flex110"]);
const Flex110IoProps = useIoStore((state)=>state["Home"]["Flex110"]);
const Flex110Cb = useFlex110Cb()
const Flex106Props = useStore((state)=>state["Home"]["Flex106"]);
const Flex106IoProps = useIoStore((state)=>state["Home"]["Flex106"]);
const Flex106Cb = useFlex106Cb()
const Flex107Props = useStore((state)=>state["Home"]["Flex107"]);
const Flex107IoProps = useIoStore((state)=>state["Home"]["Flex107"]);
const Flex107Cb = useFlex107Cb()
const Flex118Props = useStore((state)=>state["Home"]["Flex118"]);
const Flex118IoProps = useIoStore((state)=>state["Home"]["Flex118"]);
const Flex118Cb = useFlex118Cb()
const Flex119Props = useStore((state)=>state["Home"]["Flex119"]);
const Flex119IoProps = useIoStore((state)=>state["Home"]["Flex119"]);
const Flex119Cb = useFlex119Cb()
const Flex120Props = useStore((state)=>state["Home"]["Flex120"]);
const Flex120IoProps = useIoStore((state)=>state["Home"]["Flex120"]);
const Flex120Cb = useFlex120Cb()
const Flex113Props = useStore((state)=>state["Home"]["Flex113"]);
const Flex113IoProps = useIoStore((state)=>state["Home"]["Flex113"]);
const Flex113Cb = useFlex113Cb()
const Flex111Props = useStore((state)=>state["Home"]["Flex111"]);
const Flex111IoProps = useIoStore((state)=>state["Home"]["Flex111"]);
const Flex111Cb = useFlex111Cb()
const Flex108Props = useStore((state)=>state["Home"]["Flex108"]);
const Flex108IoProps = useIoStore((state)=>state["Home"]["Flex108"]);
const Flex108Cb = useFlex108Cb()
const Flex109Props = useStore((state)=>state["Home"]["Flex109"]);
const Flex109IoProps = useIoStore((state)=>state["Home"]["Flex109"]);
const Flex109Cb = useFlex109Cb()
const Flex116Props = useStore((state)=>state["Home"]["Flex116"]);
const Flex116IoProps = useIoStore((state)=>state["Home"]["Flex116"]);
const Flex116Cb = useFlex116Cb()
const Flex117Props = useStore((state)=>state["Home"]["Flex117"]);
const Flex117IoProps = useIoStore((state)=>state["Home"]["Flex117"]);
const Flex117Cb = useFlex117Cb()
const Flex115Props = useStore((state)=>state["Home"]["Flex115"]);
const Flex115IoProps = useIoStore((state)=>state["Home"]["Flex115"]);
const Flex115Cb = useFlex115Cb()
const Flex135Props = useStore((state)=>state["Home"]["Flex135"]);
const Flex135IoProps = useIoStore((state)=>state["Home"]["Flex135"]);
const Flex135Cb = useFlex135Cb()
const Flex133Props = useStore((state)=>state["Home"]["Flex133"]);
const Flex133IoProps = useIoStore((state)=>state["Home"]["Flex133"]);
const Flex133Cb = useFlex133Cb()
const Flex131Props = useStore((state)=>state["Home"]["Flex131"]);
const Flex131IoProps = useIoStore((state)=>state["Home"]["Flex131"]);
const Flex131Cb = useFlex131Cb()
const Flex126Props = useStore((state)=>state["Home"]["Flex126"]);
const Flex126IoProps = useIoStore((state)=>state["Home"]["Flex126"]);
const Flex126Cb = useFlex126Cb()
const Flex127Props = useStore((state)=>state["Home"]["Flex127"]);
const Flex127IoProps = useIoStore((state)=>state["Home"]["Flex127"]);
const Flex127Cb = useFlex127Cb()
const Flex121Props = useStore((state)=>state["Home"]["Flex121"]);
const Flex121IoProps = useIoStore((state)=>state["Home"]["Flex121"]);
const Flex121Cb = useFlex121Cb()
const Flex122Props = useStore((state)=>state["Home"]["Flex122"]);
const Flex122IoProps = useIoStore((state)=>state["Home"]["Flex122"]);
const Flex122Cb = useFlex122Cb()
const Flex128Props = useStore((state)=>state["Home"]["Flex128"]);
const Flex128IoProps = useIoStore((state)=>state["Home"]["Flex128"]);
const Flex128Cb = useFlex128Cb()
const Flex134Props = useStore((state)=>state["Home"]["Flex134"]);
const Flex134IoProps = useIoStore((state)=>state["Home"]["Flex134"]);
const Flex134Cb = useFlex134Cb()
const Flex132Props = useStore((state)=>state["Home"]["Flex132"]);
const Flex132IoProps = useIoStore((state)=>state["Home"]["Flex132"]);
const Flex132Cb = useFlex132Cb()
const Flex129Props = useStore((state)=>state["Home"]["Flex129"]);
const Flex129IoProps = useIoStore((state)=>state["Home"]["Flex129"]);
const Flex129Cb = useFlex129Cb()
const Flex123Props = useStore((state)=>state["Home"]["Flex123"]);
const Flex123IoProps = useIoStore((state)=>state["Home"]["Flex123"]);
const Flex123Cb = useFlex123Cb()
const Flex124Props = useStore((state)=>state["Home"]["Flex124"]);
const Flex124IoProps = useIoStore((state)=>state["Home"]["Flex124"]);
const Flex124Cb = useFlex124Cb()
const Flex125Props = useStore((state)=>state["Home"]["Flex125"]);
const Flex125IoProps = useIoStore((state)=>state["Home"]["Flex125"]);
const Flex125Cb = useFlex125Cb()
const Flex130Props = useStore((state)=>state["Home"]["Flex130"]);
const Flex130IoProps = useIoStore((state)=>state["Home"]["Flex130"]);
const Flex130Cb = useFlex130Cb()
const Flex150Props = useStore((state)=>state["Home"]["Flex150"]);
const Flex150IoProps = useIoStore((state)=>state["Home"]["Flex150"]);
const Flex150Cb = useFlex150Cb()
const Flex148Props = useStore((state)=>state["Home"]["Flex148"]);
const Flex148IoProps = useIoStore((state)=>state["Home"]["Flex148"]);
const Flex148Cb = useFlex148Cb()
const Flex146Props = useStore((state)=>state["Home"]["Flex146"]);
const Flex146IoProps = useIoStore((state)=>state["Home"]["Flex146"]);
const Flex146Cb = useFlex146Cb()
const Flex141Props = useStore((state)=>state["Home"]["Flex141"]);
const Flex141IoProps = useIoStore((state)=>state["Home"]["Flex141"]);
const Flex141Cb = useFlex141Cb()
const Flex142Props = useStore((state)=>state["Home"]["Flex142"]);
const Flex142IoProps = useIoStore((state)=>state["Home"]["Flex142"]);
const Flex142Cb = useFlex142Cb()
const Flex136Props = useStore((state)=>state["Home"]["Flex136"]);
const Flex136IoProps = useIoStore((state)=>state["Home"]["Flex136"]);
const Flex136Cb = useFlex136Cb()
const Flex137Props = useStore((state)=>state["Home"]["Flex137"]);
const Flex137IoProps = useIoStore((state)=>state["Home"]["Flex137"]);
const Flex137Cb = useFlex137Cb()
const Flex138Props = useStore((state)=>state["Home"]["Flex138"]);
const Flex138IoProps = useIoStore((state)=>state["Home"]["Flex138"]);
const Flex138Cb = useFlex138Cb()
const Flex149Props = useStore((state)=>state["Home"]["Flex149"]);
const Flex149IoProps = useIoStore((state)=>state["Home"]["Flex149"]);
const Flex149Cb = useFlex149Cb()
const Flex147Props = useStore((state)=>state["Home"]["Flex147"]);
const Flex147IoProps = useIoStore((state)=>state["Home"]["Flex147"]);
const Flex147Cb = useFlex147Cb()
const Flex143Props = useStore((state)=>state["Home"]["Flex143"]);
const Flex143IoProps = useIoStore((state)=>state["Home"]["Flex143"]);
const Flex143Cb = useFlex143Cb()
const Flex144Props = useStore((state)=>state["Home"]["Flex144"]);
const Flex144IoProps = useIoStore((state)=>state["Home"]["Flex144"]);
const Flex144Cb = useFlex144Cb()
const Flex139Props = useStore((state)=>state["Home"]["Flex139"]);
const Flex139IoProps = useIoStore((state)=>state["Home"]["Flex139"]);
const Flex139Cb = useFlex139Cb()
const Flex140Props = useStore((state)=>state["Home"]["Flex140"]);
const Flex140IoProps = useIoStore((state)=>state["Home"]["Flex140"]);
const Flex140Cb = useFlex140Cb()
const Flex145Props = useStore((state)=>state["Home"]["Flex145"]);
const Flex145IoProps = useIoStore((state)=>state["Home"]["Flex145"]);
const Flex145Cb = useFlex145Cb()
const TestimonialsProps = useStore((state)=>state["Home"]["Testimonials"]);
const TestimonialsIoProps = useIoStore((state)=>state["Home"]["Testimonials"]);
const TestimonialsCb = useTestimonialsCb()
const Flex152Props = useStore((state)=>state["Home"]["Flex152"]);
const Flex152IoProps = useIoStore((state)=>state["Home"]["Flex152"]);
const Flex152Cb = useFlex152Cb()
const Flex153Props = useStore((state)=>state["Home"]["Flex153"]);
const Flex153IoProps = useIoStore((state)=>state["Home"]["Flex153"]);
const Flex153Cb = useFlex153Cb()
const Flex154Props = useStore((state)=>state["Home"]["Flex154"]);
const Flex154IoProps = useIoStore((state)=>state["Home"]["Flex154"]);
const Flex154Cb = useFlex154Cb()
const Flex155Props = useStore((state)=>state["Home"]["Flex155"]);
const Flex155IoProps = useIoStore((state)=>state["Home"]["Flex155"]);
const Flex155Cb = useFlex155Cb()
const Flex156Props = useStore((state)=>state["Home"]["Flex156"]);
const Flex156IoProps = useIoStore((state)=>state["Home"]["Flex156"]);
const Flex156Cb = useFlex156Cb()
const Flex157Props = useStore((state)=>state["Home"]["Flex157"]);
const Flex157IoProps = useIoStore((state)=>state["Home"]["Flex157"]);
const Flex157Cb = useFlex157Cb()
const Flex158Props = useStore((state)=>state["Home"]["Flex158"]);
const Flex158IoProps = useIoStore((state)=>state["Home"]["Flex158"]);
const Flex158Cb = useFlex158Cb()
const FAQProps = useStore((state)=>state["Home"]["FAQ"]);
const FAQIoProps = useIoStore((state)=>state["Home"]["FAQ"]);
const FAQCb = useFAQCb()
const Flex160Props = useStore((state)=>state["Home"]["Flex160"]);
const Flex160IoProps = useIoStore((state)=>state["Home"]["Flex160"]);
const Flex160Cb = useFlex160Cb()
const Flex161Props = useStore((state)=>state["Home"]["Flex161"]);
const Flex161IoProps = useIoStore((state)=>state["Home"]["Flex161"]);
const Flex161Cb = useFlex161Cb()
const Flex164Props = useStore((state)=>state["Home"]["Flex164"]);
const Flex164IoProps = useIoStore((state)=>state["Home"]["Flex164"]);
const Flex164Cb = useFlex164Cb()
const Flex206Props = useStore((state)=>state["Home"]["Flex206"]);
const Flex206IoProps = useIoStore((state)=>state["Home"]["Flex206"]);
const Flex206Cb = useFlex206Cb()
const Flex168Props = useStore((state)=>state["Home"]["Flex168"]);
const Flex168IoProps = useIoStore((state)=>state["Home"]["Flex168"]);
const Flex168Cb = useFlex168Cb()
const Flex172Props = useStore((state)=>state["Home"]["Flex172"]);
const Flex172IoProps = useIoStore((state)=>state["Home"]["Flex172"]);
const Flex172Cb = useFlex172Cb()
const Flex174Props = useStore((state)=>state["Home"]["Flex174"]);
const Flex174IoProps = useIoStore((state)=>state["Home"]["Flex174"]);
const Flex174Cb = useFlex174Cb()
const Flex203Props = useStore((state)=>state["Home"]["Flex203"]);
const Flex203IoProps = useIoStore((state)=>state["Home"]["Flex203"]);
const Flex203Cb = useFlex203Cb()
const Flex207Props = useStore((state)=>state["Home"]["Flex207"]);
const Flex207IoProps = useIoStore((state)=>state["Home"]["Flex207"]);
const Flex207Cb = useFlex207Cb()
const Flex169Props = useStore((state)=>state["Home"]["Flex169"]);
const Flex169IoProps = useIoStore((state)=>state["Home"]["Flex169"]);
const Flex169Cb = useFlex169Cb()
const Flex171Props = useStore((state)=>state["Home"]["Flex171"]);
const Flex171IoProps = useIoStore((state)=>state["Home"]["Flex171"]);
const Flex171Cb = useFlex171Cb()
const Flex175Props = useStore((state)=>state["Home"]["Flex175"]);
const Flex175IoProps = useIoStore((state)=>state["Home"]["Flex175"]);
const Flex175Cb = useFlex175Cb()
const Flex204Props = useStore((state)=>state["Home"]["Flex204"]);
const Flex204IoProps = useIoStore((state)=>state["Home"]["Flex204"]);
const Flex204Cb = useFlex204Cb()
const Flex189Props = useStore((state)=>state["Home"]["Flex189"]);
const Flex189IoProps = useIoStore((state)=>state["Home"]["Flex189"]);
const Flex189Cb = useFlex189Cb()
const Flex190Props = useStore((state)=>state["Home"]["Flex190"]);
const Flex190IoProps = useIoStore((state)=>state["Home"]["Flex190"]);
const Flex190Cb = useFlex190Cb()
const Flex192Props = useStore((state)=>state["Home"]["Flex192"]);
const Flex192IoProps = useIoStore((state)=>state["Home"]["Flex192"]);
const Flex192Cb = useFlex192Cb()
const Flex201Props = useStore((state)=>state["Home"]["Flex201"]);
const Flex201IoProps = useIoStore((state)=>state["Home"]["Flex201"]);
const Flex201Cb = useFlex201Cb()
const Flex193Props = useStore((state)=>state["Home"]["Flex193"]);
const Flex193IoProps = useIoStore((state)=>state["Home"]["Flex193"]);
const Flex193Cb = useFlex193Cb()
const Flex194Props = useStore((state)=>state["Home"]["Flex194"]);
const Flex194IoProps = useIoStore((state)=>state["Home"]["Flex194"]);
const Flex194Cb = useFlex194Cb()
const Flex199Props = useStore((state)=>state["Home"]["Flex199"]);
const Flex199IoProps = useIoStore((state)=>state["Home"]["Flex199"]);
const Flex199Cb = useFlex199Cb()
const Flex200Props = useStore((state)=>state["Home"]["Flex200"]);
const Flex200IoProps = useIoStore((state)=>state["Home"]["Flex200"]);
const Flex200Cb = useFlex200Cb()
const Flex191Props = useStore((state)=>state["Home"]["Flex191"]);
const Flex191IoProps = useIoStore((state)=>state["Home"]["Flex191"]);
const Flex191Cb = useFlex191Cb()
const Flex202Props = useStore((state)=>state["Home"]["Flex202"]);
const Flex202IoProps = useIoStore((state)=>state["Home"]["Flex202"]);
const Flex202Cb = useFlex202Cb()
const main_head_section_coloredProps = useStore((state)=>state["Home"]["main_head_section_colored"]);
const main_head_section_coloredIoProps = useIoStore((state)=>state["Home"]["main_head_section_colored"]);
const main_head_section_coloredCb = usemain_head_section_coloredCb()
const main_head_sectionProps = useStore((state)=>state["Home"]["main_head_section"]);
const main_head_sectionIoProps = useIoStore((state)=>state["Home"]["main_head_section"]);
const main_head_sectionCb = usemain_head_sectionCb()
const home_hero_section_text_descProps = useStore((state)=>state["Home"]["home_hero_section_text_desc"]);
const home_hero_section_text_descIoProps = useIoStore((state)=>state["Home"]["home_hero_section_text_desc"]);
const home_hero_section_text_descCb = usehome_hero_section_text_descCb()
const button_flex_1_textProps = useStore((state)=>state["Home"]["button_flex_1_text"]);
const button_flex_1_textIoProps = useIoStore((state)=>state["Home"]["button_flex_1_text"]);
const button_flex_1_textCb = usebutton_flex_1_textCb()
const TextBox14Props = useStore((state)=>state["Home"]["TextBox14"]);
const TextBox14IoProps = useIoStore((state)=>state["Home"]["TextBox14"]);
const TextBox14Cb = useTextBox14Cb()
const man_asset_imageProps = useStore((state)=>state["Home"]["man_asset_image"]);
const man_asset_imageIoProps = useIoStore((state)=>state["Home"]["man_asset_image"]);
const man_asset_imageCb = useman_asset_imageCb()
const Image1Props = useStore((state)=>state["Home"]["Image1"]);
const Image1IoProps = useIoStore((state)=>state["Home"]["Image1"]);
const Image1Cb = useImage1Cb()
const menu_options_aboutProps = useStore((state)=>state["Home"]["menu_options_about"]);
const menu_options_aboutIoProps = useIoStore((state)=>state["Home"]["menu_options_about"]);
const menu_options_aboutCb = usemenu_options_aboutCb()
const menu_options_serviceProps = useStore((state)=>state["Home"]["menu_options_service"]);
const menu_options_serviceIoProps = useIoStore((state)=>state["Home"]["menu_options_service"]);
const menu_options_serviceCb = usemenu_options_serviceCb()
const menu_options_projectsProps = useStore((state)=>state["Home"]["menu_options_projects"]);
const menu_options_projectsIoProps = useIoStore((state)=>state["Home"]["menu_options_projects"]);
const menu_options_projectsCb = usemenu_options_projectsCb()
const menu_options_blogProps = useStore((state)=>state["Home"]["menu_options_blog"]);
const menu_options_blogIoProps = useIoStore((state)=>state["Home"]["menu_options_blog"]);
const menu_options_blogCb = usemenu_options_blogCb()
const menu_options_bookProps = useStore((state)=>state["Home"]["menu_options_book"]);
const menu_options_bookIoProps = useIoStore((state)=>state["Home"]["menu_options_book"]);
const menu_options_bookCb = usemenu_options_bookCb()
const TextBox15Props = useStore((state)=>state["Home"]["TextBox15"]);
const TextBox15IoProps = useIoStore((state)=>state["Home"]["TextBox15"]);
const TextBox15Cb = useTextBox15Cb()
const trusted_by_1Props = useStore((state)=>state["Home"]["trusted_by_1"]);
const trusted_by_1IoProps = useIoStore((state)=>state["Home"]["trusted_by_1"]);
const trusted_by_1Cb = usetrusted_by_1Cb()
const trusted_by_2Props = useStore((state)=>state["Home"]["trusted_by_2"]);
const trusted_by_2IoProps = useIoStore((state)=>state["Home"]["trusted_by_2"]);
const trusted_by_2Cb = usetrusted_by_2Cb()
const trusted_by_3Props = useStore((state)=>state["Home"]["trusted_by_3"]);
const trusted_by_3IoProps = useIoStore((state)=>state["Home"]["trusted_by_3"]);
const trusted_by_3Cb = usetrusted_by_3Cb()
const trusted_by_4Props = useStore((state)=>state["Home"]["trusted_by_4"]);
const trusted_by_4IoProps = useIoStore((state)=>state["Home"]["trusted_by_4"]);
const trusted_by_4Cb = usetrusted_by_4Cb()
const TextBox16Props = useStore((state)=>state["Home"]["TextBox16"]);
const TextBox16IoProps = useIoStore((state)=>state["Home"]["TextBox16"]);
const TextBox16Cb = useTextBox16Cb()
const TextBox17Props = useStore((state)=>state["Home"]["TextBox17"]);
const TextBox17IoProps = useIoStore((state)=>state["Home"]["TextBox17"]);
const TextBox17Cb = useTextBox17Cb()
const services_1_imageProps = useStore((state)=>state["Home"]["services_1_image"]);
const services_1_imageIoProps = useIoStore((state)=>state["Home"]["services_1_image"]);
const services_1_imageCb = useservices_1_imageCb()
const TextBox18Props = useStore((state)=>state["Home"]["TextBox18"]);
const TextBox18IoProps = useIoStore((state)=>state["Home"]["TextBox18"]);
const TextBox18Cb = useTextBox18Cb()
const TextBox19Props = useStore((state)=>state["Home"]["TextBox19"]);
const TextBox19IoProps = useIoStore((state)=>state["Home"]["TextBox19"]);
const TextBox19Cb = useTextBox19Cb()
const TextBox25Props = useStore((state)=>state["Home"]["TextBox25"]);
const TextBox25IoProps = useIoStore((state)=>state["Home"]["TextBox25"]);
const TextBox25Cb = useTextBox25Cb()
const TextBox26Props = useStore((state)=>state["Home"]["TextBox26"]);
const TextBox26IoProps = useIoStore((state)=>state["Home"]["TextBox26"]);
const TextBox26Cb = useTextBox26Cb()
const TextBox27Props = useStore((state)=>state["Home"]["TextBox27"]);
const TextBox27IoProps = useIoStore((state)=>state["Home"]["TextBox27"]);
const TextBox27Cb = useTextBox27Cb()
const services_2_imageProps = useStore((state)=>state["Home"]["services_2_image"]);
const services_2_imageIoProps = useIoStore((state)=>state["Home"]["services_2_image"]);
const services_2_imageCb = useservices_2_imageCb()
const TextBox28Props = useStore((state)=>state["Home"]["TextBox28"]);
const TextBox28IoProps = useIoStore((state)=>state["Home"]["TextBox28"]);
const TextBox28Cb = useTextBox28Cb()
const TextBox29Props = useStore((state)=>state["Home"]["TextBox29"]);
const TextBox29IoProps = useIoStore((state)=>state["Home"]["TextBox29"]);
const TextBox29Cb = useTextBox29Cb()
const TextBox30Props = useStore((state)=>state["Home"]["TextBox30"]);
const TextBox30IoProps = useIoStore((state)=>state["Home"]["TextBox30"]);
const TextBox30Cb = useTextBox30Cb()
const TextBox31Props = useStore((state)=>state["Home"]["TextBox31"]);
const TextBox31IoProps = useIoStore((state)=>state["Home"]["TextBox31"]);
const TextBox31Cb = useTextBox31Cb()
const TextBox32Props = useStore((state)=>state["Home"]["TextBox32"]);
const TextBox32IoProps = useIoStore((state)=>state["Home"]["TextBox32"]);
const TextBox32Cb = useTextBox32Cb()
const services_3_imageProps = useStore((state)=>state["Home"]["services_3_image"]);
const services_3_imageIoProps = useIoStore((state)=>state["Home"]["services_3_image"]);
const services_3_imageCb = useservices_3_imageCb()
const TextBox36Props = useStore((state)=>state["Home"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["Home"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const TextBox37Props = useStore((state)=>state["Home"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["Home"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const TextBox33Props = useStore((state)=>state["Home"]["TextBox33"]);
const TextBox33IoProps = useIoStore((state)=>state["Home"]["TextBox33"]);
const TextBox33Cb = useTextBox33Cb()
const TextBox34Props = useStore((state)=>state["Home"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["Home"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const TextBox35Props = useStore((state)=>state["Home"]["TextBox35"]);
const TextBox35IoProps = useIoStore((state)=>state["Home"]["TextBox35"]);
const TextBox35Cb = useTextBox35Cb()
const TextBox49Props = useStore((state)=>state["Home"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["Home"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const TextBox50Props = useStore((state)=>state["Home"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["Home"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const TextBox52Props = useStore((state)=>state["Home"]["TextBox52"]);
const TextBox52IoProps = useIoStore((state)=>state["Home"]["TextBox52"]);
const TextBox52Cb = useTextBox52Cb()
const TextBox48Props = useStore((state)=>state["Home"]["TextBox48"]);
const TextBox48IoProps = useIoStore((state)=>state["Home"]["TextBox48"]);
const TextBox48Cb = useTextBox48Cb()
const TextBox54Props = useStore((state)=>state["Home"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["Home"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const TextBox55Props = useStore((state)=>state["Home"]["TextBox55"]);
const TextBox55IoProps = useIoStore((state)=>state["Home"]["TextBox55"]);
const TextBox55Cb = useTextBox55Cb()
const TextBox56Props = useStore((state)=>state["Home"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["Home"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const productDesginer1_imageProps = useStore((state)=>state["Home"]["productDesginer1_image"]);
const productDesginer1_imageIoProps = useIoStore((state)=>state["Home"]["productDesginer1_image"]);
const productDesginer1_imageCb = useproductDesginer1_imageCb()
const productDesginer2_imageProps = useStore((state)=>state["Home"]["productDesginer2_image"]);
const productDesginer2_imageIoProps = useIoStore((state)=>state["Home"]["productDesginer2_image"]);
const productDesginer2_imageCb = useproductDesginer2_imageCb()
const productDesginer3_imageProps = useStore((state)=>state["Home"]["productDesginer3_image"]);
const productDesginer3_imageIoProps = useIoStore((state)=>state["Home"]["productDesginer3_image"]);
const productDesginer3_imageCb = useproductDesginer3_imageCb()
const productDesginer4_imageProps = useStore((state)=>state["Home"]["productDesginer4_image"]);
const productDesginer4_imageIoProps = useIoStore((state)=>state["Home"]["productDesginer4_image"]);
const productDesginer4_imageCb = useproductDesginer4_imageCb()
const TextBox57Props = useStore((state)=>state["Home"]["TextBox57"]);
const TextBox57IoProps = useIoStore((state)=>state["Home"]["TextBox57"]);
const TextBox57Cb = useTextBox57Cb()
const TextBox58Props = useStore((state)=>state["Home"]["TextBox58"]);
const TextBox58IoProps = useIoStore((state)=>state["Home"]["TextBox58"]);
const TextBox58Cb = useTextBox58Cb()
const TextBox59Props = useStore((state)=>state["Home"]["TextBox59"]);
const TextBox59IoProps = useIoStore((state)=>state["Home"]["TextBox59"]);
const TextBox59Cb = useTextBox59Cb()
const TextBox60Props = useStore((state)=>state["Home"]["TextBox60"]);
const TextBox60IoProps = useIoStore((state)=>state["Home"]["TextBox60"]);
const TextBox60Cb = useTextBox60Cb()
const we_1_imageProps = useStore((state)=>state["Home"]["we_1_image"]);
const we_1_imageIoProps = useIoStore((state)=>state["Home"]["we_1_image"]);
const we_1_imageCb = usewe_1_imageCb()
const TextBox68Props = useStore((state)=>state["Home"]["TextBox68"]);
const TextBox68IoProps = useIoStore((state)=>state["Home"]["TextBox68"]);
const TextBox68Cb = useTextBox68Cb()
const TextBox69Props = useStore((state)=>state["Home"]["TextBox69"]);
const TextBox69IoProps = useIoStore((state)=>state["Home"]["TextBox69"]);
const TextBox69Cb = useTextBox69Cb()
const TextBox70Props = useStore((state)=>state["Home"]["TextBox70"]);
const TextBox70IoProps = useIoStore((state)=>state["Home"]["TextBox70"]);
const TextBox70Cb = useTextBox70Cb()
const Image21Props = useStore((state)=>state["Home"]["Image21"]);
const Image21IoProps = useIoStore((state)=>state["Home"]["Image21"]);
const Image21Cb = useImage21Cb()
const TextBox63Props = useStore((state)=>state["Home"]["TextBox63"]);
const TextBox63IoProps = useIoStore((state)=>state["Home"]["TextBox63"]);
const TextBox63Cb = useTextBox63Cb()
const TextBox67Props = useStore((state)=>state["Home"]["TextBox67"]);
const TextBox67IoProps = useIoStore((state)=>state["Home"]["TextBox67"]);
const TextBox67Cb = useTextBox67Cb()
const TextBox66Props = useStore((state)=>state["Home"]["TextBox66"]);
const TextBox66IoProps = useIoStore((state)=>state["Home"]["TextBox66"]);
const TextBox66Cb = useTextBox66Cb()
const Image20Props = useStore((state)=>state["Home"]["Image20"]);
const Image20IoProps = useIoStore((state)=>state["Home"]["Image20"]);
const Image20Cb = useImage20Cb()
const Image23Props = useStore((state)=>state["Home"]["Image23"]);
const Image23IoProps = useIoStore((state)=>state["Home"]["Image23"]);
const Image23Cb = useImage23Cb()
const TextBox71Props = useStore((state)=>state["Home"]["TextBox71"]);
const TextBox71IoProps = useIoStore((state)=>state["Home"]["TextBox71"]);
const TextBox71Cb = useTextBox71Cb()
const TextBox72Props = useStore((state)=>state["Home"]["TextBox72"]);
const TextBox72IoProps = useIoStore((state)=>state["Home"]["TextBox72"]);
const TextBox72Cb = useTextBox72Cb()
const TextBox76Props = useStore((state)=>state["Home"]["TextBox76"]);
const TextBox76IoProps = useIoStore((state)=>state["Home"]["TextBox76"]);
const TextBox76Cb = useTextBox76Cb()
const Image22Props = useStore((state)=>state["Home"]["Image22"]);
const Image22IoProps = useIoStore((state)=>state["Home"]["Image22"]);
const Image22Cb = useImage22Cb()
const TextBox73Props = useStore((state)=>state["Home"]["TextBox73"]);
const TextBox73IoProps = useIoStore((state)=>state["Home"]["TextBox73"]);
const TextBox73Cb = useTextBox73Cb()
const TextBox74Props = useStore((state)=>state["Home"]["TextBox74"]);
const TextBox74IoProps = useIoStore((state)=>state["Home"]["TextBox74"]);
const TextBox74Cb = useTextBox74Cb()
const TextBox75Props = useStore((state)=>state["Home"]["TextBox75"]);
const TextBox75IoProps = useIoStore((state)=>state["Home"]["TextBox75"]);
const TextBox75Cb = useTextBox75Cb()
const Image24Props = useStore((state)=>state["Home"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["Home"]["Image24"]);
const Image24Cb = useImage24Cb()
const Image26Props = useStore((state)=>state["Home"]["Image26"]);
const Image26IoProps = useIoStore((state)=>state["Home"]["Image26"]);
const Image26Cb = useImage26Cb()
const TextBox77Props = useStore((state)=>state["Home"]["TextBox77"]);
const TextBox77IoProps = useIoStore((state)=>state["Home"]["TextBox77"]);
const TextBox77Cb = useTextBox77Cb()
const TextBox78Props = useStore((state)=>state["Home"]["TextBox78"]);
const TextBox78IoProps = useIoStore((state)=>state["Home"]["TextBox78"]);
const TextBox78Cb = useTextBox78Cb()
const TextBox79Props = useStore((state)=>state["Home"]["TextBox79"]);
const TextBox79IoProps = useIoStore((state)=>state["Home"]["TextBox79"]);
const TextBox79Cb = useTextBox79Cb()
const Image25Props = useStore((state)=>state["Home"]["Image25"]);
const Image25IoProps = useIoStore((state)=>state["Home"]["Image25"]);
const Image25Cb = useImage25Cb()
const TextBox82Props = useStore((state)=>state["Home"]["TextBox82"]);
const TextBox82IoProps = useIoStore((state)=>state["Home"]["TextBox82"]);
const TextBox82Cb = useTextBox82Cb()
const TextBox80Props = useStore((state)=>state["Home"]["TextBox80"]);
const TextBox80IoProps = useIoStore((state)=>state["Home"]["TextBox80"]);
const TextBox80Cb = useTextBox80Cb()
const TextBox81Props = useStore((state)=>state["Home"]["TextBox81"]);
const TextBox81IoProps = useIoStore((state)=>state["Home"]["TextBox81"]);
const TextBox81Cb = useTextBox81Cb()
const Image27Props = useStore((state)=>state["Home"]["Image27"]);
const Image27IoProps = useIoStore((state)=>state["Home"]["Image27"]);
const Image27Cb = useImage27Cb()
const TextBox83Props = useStore((state)=>state["Home"]["TextBox83"]);
const TextBox83IoProps = useIoStore((state)=>state["Home"]["TextBox83"]);
const TextBox83Cb = useTextBox83Cb()
const TextBox84Props = useStore((state)=>state["Home"]["TextBox84"]);
const TextBox84IoProps = useIoStore((state)=>state["Home"]["TextBox84"]);
const TextBox84Cb = useTextBox84Cb()
const Image28Props = useStore((state)=>state["Home"]["Image28"]);
const Image28IoProps = useIoStore((state)=>state["Home"]["Image28"]);
const Image28Cb = useImage28Cb()
const Image29Props = useStore((state)=>state["Home"]["Image29"]);
const Image29IoProps = useIoStore((state)=>state["Home"]["Image29"]);
const Image29Cb = useImage29Cb()
const TextBox87Props = useStore((state)=>state["Home"]["TextBox87"]);
const TextBox87IoProps = useIoStore((state)=>state["Home"]["TextBox87"]);
const TextBox87Cb = useTextBox87Cb()
const TextBox89Props = useStore((state)=>state["Home"]["TextBox89"]);
const TextBox89IoProps = useIoStore((state)=>state["Home"]["TextBox89"]);
const TextBox89Cb = useTextBox89Cb()
const TextBox90Props = useStore((state)=>state["Home"]["TextBox90"]);
const TextBox90IoProps = useIoStore((state)=>state["Home"]["TextBox90"]);
const TextBox90Cb = useTextBox90Cb()
const TextBox91Props = useStore((state)=>state["Home"]["TextBox91"]);
const TextBox91IoProps = useIoStore((state)=>state["Home"]["TextBox91"]);
const TextBox91Cb = useTextBox91Cb()
const TextBox92Props = useStore((state)=>state["Home"]["TextBox92"]);
const TextBox92IoProps = useIoStore((state)=>state["Home"]["TextBox92"]);
const TextBox92Cb = useTextBox92Cb()
const Accordion5Props = useStore((state)=>state["Home"]["Accordion5"]);
const Accordion5IoProps = useIoStore((state)=>state["Home"]["Accordion5"]);
const Accordion5Cb = useAccordion5Cb()
const Accordion8Props = useStore((state)=>state["Home"]["Accordion8"]);
const Accordion8IoProps = useIoStore((state)=>state["Home"]["Accordion8"]);
const Accordion8Cb = useAccordion8Cb()
const Accordion9Props = useStore((state)=>state["Home"]["Accordion9"]);
const Accordion9IoProps = useIoStore((state)=>state["Home"]["Accordion9"]);
const Accordion9Cb = useAccordion9Cb()
const Accordion19Props = useStore((state)=>state["Home"]["Accordion19"]);
const Accordion19IoProps = useIoStore((state)=>state["Home"]["Accordion19"]);
const Accordion19Cb = useAccordion19Cb()
const Accordion6Props = useStore((state)=>state["Home"]["Accordion6"]);
const Accordion6IoProps = useIoStore((state)=>state["Home"]["Accordion6"]);
const Accordion6Cb = useAccordion6Cb()
const Accordion7Props = useStore((state)=>state["Home"]["Accordion7"]);
const Accordion7IoProps = useIoStore((state)=>state["Home"]["Accordion7"]);
const Accordion7Cb = useAccordion7Cb()
const Accordion10Props = useStore((state)=>state["Home"]["Accordion10"]);
const Accordion10IoProps = useIoStore((state)=>state["Home"]["Accordion10"]);
const Accordion10Cb = useAccordion10Cb()
const Accordion20Props = useStore((state)=>state["Home"]["Accordion20"]);
const Accordion20IoProps = useIoStore((state)=>state["Home"]["Accordion20"]);
const Accordion20Cb = useAccordion20Cb()
const Image30Props = useStore((state)=>state["Home"]["Image30"]);
const Image30IoProps = useIoStore((state)=>state["Home"]["Image30"]);
const Image30Cb = useImage30Cb()
const TextBox115Props = useStore((state)=>state["Home"]["TextBox115"]);
const TextBox115IoProps = useIoStore((state)=>state["Home"]["TextBox115"]);
const TextBox115Cb = useTextBox115Cb()
const TextBox112Props = useStore((state)=>state["Home"]["TextBox112"]);
const TextBox112IoProps = useIoStore((state)=>state["Home"]["TextBox112"]);
const TextBox112Cb = useTextBox112Cb()
const Image31Props = useStore((state)=>state["Home"]["Image31"]);
const Image31IoProps = useIoStore((state)=>state["Home"]["Image31"]);
const Image31Cb = useImage31Cb()
const TextBox97Props = useStore((state)=>state["Home"]["TextBox97"]);
const TextBox97IoProps = useIoStore((state)=>state["Home"]["TextBox97"]);
const TextBox97Cb = useTextBox97Cb()
const TextBox98Props = useStore((state)=>state["Home"]["TextBox98"]);
const TextBox98IoProps = useIoStore((state)=>state["Home"]["TextBox98"]);
const TextBox98Cb = useTextBox98Cb()
const TextBox99Props = useStore((state)=>state["Home"]["TextBox99"]);
const TextBox99IoProps = useIoStore((state)=>state["Home"]["TextBox99"]);
const TextBox99Cb = useTextBox99Cb()
const TextBox106Props = useStore((state)=>state["Home"]["TextBox106"]);
const TextBox106IoProps = useIoStore((state)=>state["Home"]["TextBox106"]);
const TextBox106Cb = useTextBox106Cb()
const TextBox107Props = useStore((state)=>state["Home"]["TextBox107"]);
const TextBox107IoProps = useIoStore((state)=>state["Home"]["TextBox107"]);
const TextBox107Cb = useTextBox107Cb()
const TextBox108Props = useStore((state)=>state["Home"]["TextBox108"]);
const TextBox108IoProps = useIoStore((state)=>state["Home"]["TextBox108"]);
const TextBox108Cb = useTextBox108Cb()
const TextBox109Props = useStore((state)=>state["Home"]["TextBox109"]);
const TextBox109IoProps = useIoStore((state)=>state["Home"]["TextBox109"]);
const TextBox109Cb = useTextBox109Cb()
const TextBox110Props = useStore((state)=>state["Home"]["TextBox110"]);
const TextBox110IoProps = useIoStore((state)=>state["Home"]["TextBox110"]);
const TextBox110Cb = useTextBox110Cb()
const TextBox111Props = useStore((state)=>state["Home"]["TextBox111"]);
const TextBox111IoProps = useIoStore((state)=>state["Home"]["TextBox111"]);
const TextBox111Cb = useTextBox111Cb()
const TextBox95Props = useStore((state)=>state["Home"]["TextBox95"]);
const TextBox95IoProps = useIoStore((state)=>state["Home"]["TextBox95"]);
const TextBox95Cb = useTextBox95Cb()
const TextBox96Props = useStore((state)=>state["Home"]["TextBox96"]);
const TextBox96IoProps = useIoStore((state)=>state["Home"]["TextBox96"]);
const TextBox96Cb = useTextBox96Cb()
const TextBox116Props = useStore((state)=>state["Home"]["TextBox116"]);
const TextBox116IoProps = useIoStore((state)=>state["Home"]["TextBox116"]);
const TextBox116Cb = useTextBox116Cb()

  return (<>
  <Flex className="p-Home header bpt" {...headerProps} {...headerCb} {...headerIoProps}>
<Flex className="p-Home header_flex bpt" {...header_flexProps} {...header_flexCb} {...header_flexIoProps}>
<Image className="p-Home Image1 bpt" {...Image1Props} {...Image1Cb} {...Image1IoProps}/>
<Flex className="p-Home header_flex_menu bpt" {...header_flex_menuProps} {...header_flex_menuCb} {...header_flex_menuIoProps}>
<TextBox className="p-Home menu_options_about bpt" {...menu_options_aboutProps} {...menu_options_aboutCb} {...menu_options_aboutIoProps}/>
<TextBox className="p-Home menu_options_service bpt" {...menu_options_serviceProps} {...menu_options_serviceCb} {...menu_options_serviceIoProps}/>
<TextBox className="p-Home menu_options_projects bpt" {...menu_options_projectsProps} {...menu_options_projectsCb} {...menu_options_projectsIoProps}/>
<TextBox className="p-Home menu_options_blog bpt" {...menu_options_blogProps} {...menu_options_blogCb} {...menu_options_blogIoProps}/>
<TextBox className="p-Home menu_options_book bpt" {...menu_options_bookProps} {...menu_options_bookCb} {...menu_options_bookIoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home home_hero_section bpt" {...home_hero_sectionProps} {...home_hero_sectionCb} {...home_hero_sectionIoProps}>
<Flex className="p-Home home_hero_section_flex bpt" {...home_hero_section_flexProps} {...home_hero_section_flexCb} {...home_hero_section_flexIoProps}>
<Flex className="p-Home home_hero_section_wrapper_text bpt" {...home_hero_section_wrapper_textProps} {...home_hero_section_wrapper_textCb} {...home_hero_section_wrapper_textIoProps}>
<TextBox className="p-Home main_head_section_colored bpt" {...main_head_section_coloredProps} {...main_head_section_coloredCb} {...main_head_section_coloredIoProps}/>
<TextBox className="p-Home main_head_section bpt" {...main_head_sectionProps} {...main_head_sectionCb} {...main_head_sectionIoProps}/>
<TextBox className="p-Home home_hero_section_text_desc bpt" {...home_hero_section_text_descProps} {...home_hero_section_text_descCb} {...home_hero_section_text_descIoProps}/>
<Flex className="p-Home Flex10 bpt" {...Flex10Props} {...Flex10Cb} {...Flex10IoProps}>
<Flex className="p-Home button_flex_1 bpt" {...button_flex_1Props} {...button_flex_1Cb} {...button_flex_1IoProps}>
<TextBox className="p-Home button_flex_1_text bpt" {...button_flex_1_textProps} {...button_flex_1_textCb} {...button_flex_1_textIoProps}/>
</Flex>
<Flex className="p-Home button_flex_2 bpt" {...button_flex_2Props} {...button_flex_2Cb} {...button_flex_2IoProps}>
<TextBox className="p-Home TextBox14 bpt" {...TextBox14Props} {...TextBox14Cb} {...TextBox14IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home home_hero_section_wrapper_image bpt" {...home_hero_section_wrapper_imageProps} {...home_hero_section_wrapper_imageCb} {...home_hero_section_wrapper_imageIoProps}>
<Image className="p-Home man_asset_image bpt" {...man_asset_imageProps} {...man_asset_imageCb} {...man_asset_imageIoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home trusted_by_section bpt" {...trusted_by_sectionProps} {...trusted_by_sectionCb} {...trusted_by_sectionIoProps}>
<Flex className="p-Home trusted_by_section_wrapper bpt" {...trusted_by_section_wrapperProps} {...trusted_by_section_wrapperCb} {...trusted_by_section_wrapperIoProps}>
<Flex className="p-Home Flex17 bpt" {...Flex17Props} {...Flex17Cb} {...Flex17IoProps}>
<TextBox className="p-Home TextBox15 bpt" {...TextBox15Props} {...TextBox15Cb} {...TextBox15IoProps}/>
</Flex>
<Flex className="p-Home Flex18 bpt" {...Flex18Props} {...Flex18Cb} {...Flex18IoProps}>
<Flex className="p-Home Flex19 bpt" {...Flex19Props} {...Flex19Cb} {...Flex19IoProps}>
<Flex className="p-Home Flex20 bpt" {...Flex20Props} {...Flex20Cb} {...Flex20IoProps}>
<Image className="p-Home trusted_by_1 bpt" {...trusted_by_1Props} {...trusted_by_1Cb} {...trusted_by_1IoProps}/>
</Flex>
<Flex className="p-Home Flex21 bpt" {...Flex21Props} {...Flex21Cb} {...Flex21IoProps}>
<Image className="p-Home trusted_by_2 bpt" {...trusted_by_2Props} {...trusted_by_2Cb} {...trusted_by_2IoProps}/>
</Flex>
<Flex className="p-Home Flex22 bpt" {...Flex22Props} {...Flex22Cb} {...Flex22IoProps}>
<Image className="p-Home trusted_by_3 bpt" {...trusted_by_3Props} {...trusted_by_3Cb} {...trusted_by_3IoProps}/>
</Flex>
<Flex className="p-Home Flex23 bpt" {...Flex23Props} {...Flex23Cb} {...Flex23IoProps}>
<Image className="p-Home trusted_by_4 bpt" {...trusted_by_4Props} {...trusted_by_4Cb} {...trusted_by_4IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home services_section bpt" {...services_sectionProps} {...services_sectionCb} {...services_sectionIoProps}>
<Flex className="p-Home Flex25 bpt" {...Flex25Props} {...Flex25Cb} {...Flex25IoProps}>
<Flex className="p-Home Flex26 bpt" {...Flex26Props} {...Flex26Cb} {...Flex26IoProps}>
<TextBox className="p-Home TextBox16 bpt" {...TextBox16Props} {...TextBox16Cb} {...TextBox16IoProps}/>
</Flex>
<Flex className="p-Home Flex27 bpt" {...Flex27Props} {...Flex27Cb} {...Flex27IoProps}>
<TextBox className="p-Home TextBox17 bpt" {...TextBox17Props} {...TextBox17Cb} {...TextBox17IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex28 bpt" {...Flex28Props} {...Flex28Cb} {...Flex28IoProps}>
<Flex className="p-Home Flex29 bpt" {...Flex29Props} {...Flex29Cb} {...Flex29IoProps}>
<Flex className="p-Home services_1 bpt" {...services_1Props} {...services_1Cb} {...services_1IoProps}>
<Image className="p-Home services_1_image bpt" {...services_1_imageProps} {...services_1_imageCb} {...services_1_imageIoProps}/>
<Flex className="p-Home Flex34 bpt" {...Flex34Props} {...Flex34Cb} {...Flex34IoProps}>
<TextBox className="p-Home TextBox18 bpt" {...TextBox18Props} {...TextBox18Cb} {...TextBox18IoProps}/>
</Flex>
<Flex className="p-Home Flex35 bpt" {...Flex35Props} {...Flex35Cb} {...Flex35IoProps}>
<TextBox className="p-Home TextBox19 bpt" {...TextBox19Props} {...TextBox19Cb} {...TextBox19IoProps}/>
</Flex>
<Flex className="p-Home Flex44 bpt" {...Flex44Props} {...Flex44Cb} {...Flex44IoProps}>
<Flex className="p-Home Flex45 bpt" {...Flex45Props} {...Flex45Cb} {...Flex45IoProps}>
<TextBox className="p-Home TextBox25 bpt" {...TextBox25Props} {...TextBox25Cb} {...TextBox25IoProps}/>
</Flex>
<Flex className="p-Home Flex47 bpt" {...Flex47Props} {...Flex47Cb} {...Flex47IoProps}>
<TextBox className="p-Home TextBox27 bpt" {...TextBox27Props} {...TextBox27Cb} {...TextBox27IoProps}/>
</Flex>
<Flex className="p-Home Flex46 bpt" {...Flex46Props} {...Flex46Cb} {...Flex46IoProps}>
<TextBox className="p-Home TextBox26 bpt" {...TextBox26Props} {...TextBox26Cb} {...TextBox26IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex69 bpt" {...Flex69Props} {...Flex69Cb} {...Flex69IoProps}>
<Flex className="p-Home services_2 bpt" {...services_2Props} {...services_2Cb} {...services_2IoProps}>
<Image className="p-Home services_2_image bpt" {...services_2_imageProps} {...services_2_imageCb} {...services_2_imageIoProps}/>
<Flex className="p-Home Flex53 bpt" {...Flex53Props} {...Flex53Cb} {...Flex53IoProps}>
<TextBox className="p-Home TextBox32 bpt" {...TextBox32Props} {...TextBox32Cb} {...TextBox32IoProps}/>
</Flex>
<Flex className="p-Home Flex52 bpt" {...Flex52Props} {...Flex52Cb} {...Flex52IoProps}>
<TextBox className="p-Home TextBox31 bpt" {...TextBox31Props} {...TextBox31Cb} {...TextBox31IoProps}/>
</Flex>
<Flex className="p-Home Flex51 bpt" {...Flex51Props} {...Flex51Cb} {...Flex51IoProps}>
<Flex className="p-Home Flex50 bpt" {...Flex50Props} {...Flex50Cb} {...Flex50IoProps}>
<TextBox className="p-Home TextBox30 bpt" {...TextBox30Props} {...TextBox30Cb} {...TextBox30IoProps}/>
</Flex>
<Flex className="p-Home Flex48 bpt" {...Flex48Props} {...Flex48Cb} {...Flex48IoProps}>
<TextBox className="p-Home TextBox28 bpt" {...TextBox28Props} {...TextBox28Cb} {...TextBox28IoProps}/>
</Flex>
<Flex className="p-Home Flex49 bpt" {...Flex49Props} {...Flex49Cb} {...Flex49IoProps}>
<TextBox className="p-Home TextBox29 bpt" {...TextBox29Props} {...TextBox29Cb} {...TextBox29IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex77 bpt" {...Flex77Props} {...Flex77Cb} {...Flex77IoProps}>
<Flex className="p-Home services_3 bpt" {...services_3Props} {...services_3Cb} {...services_3IoProps}>
<Image className="p-Home services_3_image bpt" {...services_3_imageProps} {...services_3_imageCb} {...services_3_imageIoProps}/>
<Flex className="p-Home Flex58 bpt" {...Flex58Props} {...Flex58Cb} {...Flex58IoProps}>
<TextBox className="p-Home TextBox36 bpt" {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
</Flex>
<Flex className="p-Home Flex59 bpt" {...Flex59Props} {...Flex59Cb} {...Flex59IoProps}>
<TextBox className="p-Home TextBox37 bpt" {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
</Flex>
<Flex className="p-Home Flex60 bpt" {...Flex60Props} {...Flex60Cb} {...Flex60IoProps}>
<Flex className="p-Home Flex55 bpt" {...Flex55Props} {...Flex55Cb} {...Flex55IoProps}>
<TextBox className="p-Home TextBox33 bpt" {...TextBox33Props} {...TextBox33Cb} {...TextBox33IoProps}/>
</Flex>
<Flex className="p-Home Flex57 bpt" {...Flex57Props} {...Flex57Cb} {...Flex57IoProps}>
<TextBox className="p-Home TextBox35 bpt" {...TextBox35Props} {...TextBox35Cb} {...TextBox35IoProps}/>
</Flex>
<Flex className="p-Home Flex56 bpt" {...Flex56Props} {...Flex56Cb} {...Flex56IoProps}>
<TextBox className="p-Home TextBox34 bpt" {...TextBox34Props} {...TextBox34Cb} {...TextBox34IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home projects_section bpt" {...projects_sectionProps} {...projects_sectionCb} {...projects_sectionIoProps}>
<Flex className="p-Home Flex80 bpt" {...Flex80Props} {...Flex80Cb} {...Flex80IoProps}>
<TextBox className="p-Home TextBox48 bpt" {...TextBox48Props} {...TextBox48Cb} {...TextBox48IoProps}/>
</Flex>
<Flex className="p-Home Flex79 bpt" {...Flex79Props} {...Flex79Cb} {...Flex79IoProps}>
<Flex className="p-Home Flex81 bpt" {...Flex81Props} {...Flex81Cb} {...Flex81IoProps}>
<TextBox className="p-Home TextBox49 bpt" {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
<TextBox className="p-Home TextBox50 bpt" {...TextBox50Props} {...TextBox50Cb} {...TextBox50IoProps}/>
</Flex>
<Flex className="p-Home Flex82 bpt" {...Flex82Props} {...Flex82Cb} {...Flex82IoProps}>
<TextBox className="p-Home TextBox52 bpt" {...TextBox52Props} {...TextBox52Cb} {...TextBox52IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home product_designer_section bpt" {...product_designer_sectionProps} {...product_designer_sectionCb} {...product_designer_sectionIoProps}>
<Flex className="p-Home Flex86 bpt" {...Flex86Props} {...Flex86Cb} {...Flex86IoProps}>
<Flex className="p-Home Flex87 bpt" {...Flex87Props} {...Flex87Cb} {...Flex87IoProps}>
<TextBox className="p-Home TextBox54 bpt" {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
<TextBox className="p-Home TextBox55 bpt" {...TextBox55Props} {...TextBox55Cb} {...TextBox55IoProps}/>
</Flex>
<Flex className="p-Home Flex88 bpt" {...Flex88Props} {...Flex88Cb} {...Flex88IoProps}>
<TextBox className="p-Home TextBox56 bpt" {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex89 bpt" {...Flex89Props} {...Flex89Cb} {...Flex89IoProps}>
<Flex className="p-Home Flex90 bpt" {...Flex90Props} {...Flex90Cb} {...Flex90IoProps}>
<Image className="p-Home productDesginer1_image bpt" {...productDesginer1_imageProps} {...productDesginer1_imageCb} {...productDesginer1_imageIoProps}/>
</Flex>
<Flex className="p-Home Flex91 bpt" {...Flex91Props} {...Flex91Cb} {...Flex91IoProps}>
<Image className="p-Home productDesginer2_image bpt" {...productDesginer2_imageProps} {...productDesginer2_imageCb} {...productDesginer2_imageIoProps}/>
</Flex>
<Flex className="p-Home Flex92 bpt" {...Flex92Props} {...Flex92Cb} {...Flex92IoProps}>
<Flex className="p-Home Flex93 bpt" {...Flex93Props} {...Flex93Cb} {...Flex93IoProps}>
<Image className="p-Home productDesginer3_image bpt" {...productDesginer3_imageProps} {...productDesginer3_imageCb} {...productDesginer3_imageIoProps}/>
</Flex>
<Flex className="p-Home Flex94 bpt" {...Flex94Props} {...Flex94Cb} {...Flex94IoProps}>
<Image className="p-Home productDesginer4_image bpt" {...productDesginer4_imageProps} {...productDesginer4_imageCb} {...productDesginer4_imageIoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home edu_and_we bpt" {...edu_and_weProps} {...edu_and_weCb} {...edu_and_weIoProps}>
<Flex className="p-Home Flex96 bpt" {...Flex96Props} {...Flex96Cb} {...Flex96IoProps}>
<Flex className="p-Home Flex97 bpt" {...Flex97Props} {...Flex97Cb} {...Flex97IoProps}>
<Flex className="p-Home Flex99 bpt" {...Flex99Props} {...Flex99Cb} {...Flex99IoProps}>
<Flex className="p-Home Flex100 bpt" {...Flex100Props} {...Flex100Cb} {...Flex100IoProps}>
<TextBox className="p-Home TextBox57 bpt" {...TextBox57Props} {...TextBox57Cb} {...TextBox57IoProps}/>
</Flex>
<Flex className="p-Home Flex101 bpt" {...Flex101Props} {...Flex101Cb} {...Flex101IoProps}>
<TextBox className="p-Home TextBox58 bpt" {...TextBox58Props} {...TextBox58Cb} {...TextBox58IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex105 bpt" {...Flex105Props} {...Flex105Cb} {...Flex105IoProps}>
<Flex className="p-Home Flex104 bpt" {...Flex104Props} {...Flex104Cb} {...Flex104IoProps}>
<Flex className="p-Home Flex103 bpt" {...Flex103Props} {...Flex103Cb} {...Flex103IoProps}>
<TextBox className="p-Home TextBox60 bpt" {...TextBox60Props} {...TextBox60Cb} {...TextBox60IoProps}/>
</Flex>
<Flex className="p-Home Flex102 bpt" {...Flex102Props} {...Flex102Cb} {...Flex102IoProps}>
<TextBox className="p-Home TextBox59 bpt" {...TextBox59Props} {...TextBox59Cb} {...TextBox59IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex114 bpt" {...Flex114Props} {...Flex114Cb} {...Flex114IoProps}>
<Flex className="p-Home Flex113 bpt" {...Flex113Props} {...Flex113Cb} {...Flex113IoProps}>
<Flex className="p-Home Flex111 bpt" {...Flex111Props} {...Flex111Cb} {...Flex111IoProps}>
<Flex className="p-Home Flex109 bpt" {...Flex109Props} {...Flex109Cb} {...Flex109IoProps}>
<Flex className="p-Home Flex117 bpt" {...Flex117Props} {...Flex117Cb} {...Flex117IoProps}>
<TextBox className="p-Home TextBox66 bpt" {...TextBox66Props} {...TextBox66Cb} {...TextBox66IoProps}/>
</Flex>
<Flex className="p-Home Flex116 bpt" {...Flex116Props} {...Flex116Cb} {...Flex116IoProps}>
<TextBox className="p-Home TextBox67 bpt" {...TextBox67Props} {...TextBox67Cb} {...TextBox67IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex108 bpt" {...Flex108Props} {...Flex108Cb} {...Flex108IoProps}>
<TextBox className="p-Home TextBox63 bpt" {...TextBox63Props} {...TextBox63Cb} {...TextBox63IoProps}/>
</Flex>
<Flex className="p-Home Flex115 bpt" {...Flex115Props} {...Flex115Cb} {...Flex115IoProps}>
<Image className="p-Home Image20 bpt" {...Image20Props} {...Image20Cb} {...Image20IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex112 bpt" {...Flex112Props} {...Flex112Cb} {...Flex112IoProps}>
<Flex className="p-Home Flex110 bpt" {...Flex110Props} {...Flex110Cb} {...Flex110IoProps}>
<Flex className="p-Home Flex106 bpt" {...Flex106Props} {...Flex106Cb} {...Flex106IoProps}>
<Image className="p-Home we_1_image bpt" {...we_1_imageProps} {...we_1_imageCb} {...we_1_imageIoProps}/>
</Flex>
<Flex className="p-Home Flex107 bpt" {...Flex107Props} {...Flex107Cb} {...Flex107IoProps}>
<Flex className="p-Home Flex118 bpt" {...Flex118Props} {...Flex118Cb} {...Flex118IoProps}>
<TextBox className="p-Home TextBox68 bpt" {...TextBox68Props} {...TextBox68Cb} {...TextBox68IoProps}/>
<TextBox className="p-Home TextBox69 bpt" {...TextBox69Props} {...TextBox69Cb} {...TextBox69IoProps}/>
</Flex>
<Flex className="p-Home Flex119 bpt" {...Flex119Props} {...Flex119Cb} {...Flex119IoProps}>
<TextBox className="p-Home TextBox70 bpt" {...TextBox70Props} {...TextBox70Cb} {...TextBox70IoProps}/>
</Flex>
<Flex className="p-Home Flex120 bpt" {...Flex120Props} {...Flex120Cb} {...Flex120IoProps}>
<Image className="p-Home Image21 bpt" {...Image21Props} {...Image21Cb} {...Image21IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex135 bpt" {...Flex135Props} {...Flex135Cb} {...Flex135IoProps}>
<Flex className="p-Home Flex133 bpt" {...Flex133Props} {...Flex133Cb} {...Flex133IoProps}>
<Flex className="p-Home Flex131 bpt" {...Flex131Props} {...Flex131Cb} {...Flex131IoProps}>
<Flex className="p-Home Flex127 bpt" {...Flex127Props} {...Flex127Cb} {...Flex127IoProps}>
<Flex className="p-Home Flex121 bpt" {...Flex121Props} {...Flex121Cb} {...Flex121IoProps}>
<TextBox className="p-Home TextBox71 bpt" {...TextBox71Props} {...TextBox71Cb} {...TextBox71IoProps}/>
</Flex>
<Flex className="p-Home Flex122 bpt" {...Flex122Props} {...Flex122Cb} {...Flex122IoProps}>
<TextBox className="p-Home TextBox72 bpt" {...TextBox72Props} {...TextBox72Cb} {...TextBox72IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex128 bpt" {...Flex128Props} {...Flex128Cb} {...Flex128IoProps}>
<TextBox className="p-Home TextBox76 bpt" {...TextBox76Props} {...TextBox76Cb} {...TextBox76IoProps}/>
</Flex>
<Flex className="p-Home Flex126 bpt" {...Flex126Props} {...Flex126Cb} {...Flex126IoProps}>
<Image className="p-Home Image23 bpt" {...Image23Props} {...Image23Cb} {...Image23IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex134 bpt" {...Flex134Props} {...Flex134Cb} {...Flex134IoProps}>
<Flex className="p-Home Flex132 bpt" {...Flex132Props} {...Flex132Cb} {...Flex132IoProps}>
<Flex className="p-Home Flex130 bpt" {...Flex130Props} {...Flex130Cb} {...Flex130IoProps}>
<Image className="p-Home Image24 bpt" {...Image24Props} {...Image24Cb} {...Image24IoProps}/>
</Flex>
<Flex className="p-Home Flex129 bpt" {...Flex129Props} {...Flex129Cb} {...Flex129IoProps}>
<Flex className="p-Home Flex125 bpt" {...Flex125Props} {...Flex125Cb} {...Flex125IoProps}>
<TextBox className="p-Home TextBox75 bpt" {...TextBox75Props} {...TextBox75Cb} {...TextBox75IoProps}/>
<TextBox className="p-Home TextBox74 bpt" {...TextBox74Props} {...TextBox74Cb} {...TextBox74IoProps}/>
</Flex>
<Flex className="p-Home Flex124 bpt" {...Flex124Props} {...Flex124Cb} {...Flex124IoProps}>
<TextBox className="p-Home TextBox73 bpt" {...TextBox73Props} {...TextBox73Cb} {...TextBox73IoProps}/>
</Flex>
<Flex className="p-Home Flex123 bpt" {...Flex123Props} {...Flex123Cb} {...Flex123IoProps}>
<Image className="p-Home Image22 bpt" {...Image22Props} {...Image22Cb} {...Image22IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex150 bpt" {...Flex150Props} {...Flex150Cb} {...Flex150IoProps}>
<Flex className="p-Home Flex149 bpt" {...Flex149Props} {...Flex149Cb} {...Flex149IoProps}>
<Flex className="p-Home Flex147 bpt" {...Flex147Props} {...Flex147Cb} {...Flex147IoProps}>
<Flex className="p-Home Flex144 bpt" {...Flex144Props} {...Flex144Cb} {...Flex144IoProps}>
<Flex className="p-Home Flex140 bpt" {...Flex140Props} {...Flex140Cb} {...Flex140IoProps}>
<TextBox className="p-Home TextBox81 bpt" {...TextBox81Props} {...TextBox81Cb} {...TextBox81IoProps}/>
</Flex>
<Flex className="p-Home Flex139 bpt" {...Flex139Props} {...Flex139Cb} {...Flex139IoProps}>
<TextBox className="p-Home TextBox80 bpt" {...TextBox80Props} {...TextBox80Cb} {...TextBox80IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex143 bpt" {...Flex143Props} {...Flex143Cb} {...Flex143IoProps}>
<TextBox className="p-Home TextBox82 bpt" {...TextBox82Props} {...TextBox82Cb} {...TextBox82IoProps}/>
</Flex>
<Flex className="p-Home Flex145 bpt" {...Flex145Props} {...Flex145Cb} {...Flex145IoProps}>
<Image className="p-Home Image27 bpt" {...Image27Props} {...Image27Cb} {...Image27IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex148 bpt" {...Flex148Props} {...Flex148Cb} {...Flex148IoProps}>
<Flex className="p-Home Flex146 bpt" {...Flex146Props} {...Flex146Cb} {...Flex146IoProps}>
<Flex className="p-Home Flex141 bpt" {...Flex141Props} {...Flex141Cb} {...Flex141IoProps}>
<Image className="p-Home Image26 bpt" {...Image26Props} {...Image26Cb} {...Image26IoProps}/>
</Flex>
<Flex className="p-Home Flex142 bpt" {...Flex142Props} {...Flex142Cb} {...Flex142IoProps}>
<Flex className="p-Home Flex136 bpt" {...Flex136Props} {...Flex136Cb} {...Flex136IoProps}>
<TextBox className="p-Home TextBox77 bpt" {...TextBox77Props} {...TextBox77Cb} {...TextBox77IoProps}/>
<TextBox className="p-Home TextBox78 bpt" {...TextBox78Props} {...TextBox78Cb} {...TextBox78IoProps}/>
</Flex>
<Flex className="p-Home Flex137 bpt" {...Flex137Props} {...Flex137Cb} {...Flex137IoProps}>
<TextBox className="p-Home TextBox79 bpt" {...TextBox79Props} {...TextBox79Cb} {...TextBox79IoProps}/>
</Flex>
<Flex className="p-Home Flex138 bpt" {...Flex138Props} {...Flex138Cb} {...Flex138IoProps}>
<Image className="p-Home Image25 bpt" {...Image25Props} {...Image25Cb} {...Image25IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Testimonials bpt" {...TestimonialsProps} {...TestimonialsCb} {...TestimonialsIoProps}>
<Flex className="p-Home Flex152 bpt" {...Flex152Props} {...Flex152Cb} {...Flex152IoProps}>
<TextBox className="p-Home TextBox84 bpt" {...TextBox84Props} {...TextBox84Cb} {...TextBox84IoProps}/>
<TextBox className="p-Home TextBox83 bpt" {...TextBox83Props} {...TextBox83Cb} {...TextBox83IoProps}/>
</Flex>
<Flex className="p-Home Flex153 bpt" {...Flex153Props} {...Flex153Cb} {...Flex153IoProps}>
<Flex className="p-Home Flex154 bpt" {...Flex154Props} {...Flex154Cb} {...Flex154IoProps}>
<Image className="p-Home Image28 bpt" {...Image28Props} {...Image28Cb} {...Image28IoProps}/>
</Flex>
<Flex className="p-Home Flex155 bpt" {...Flex155Props} {...Flex155Cb} {...Flex155IoProps}>
<Flex className="p-Home Flex156 bpt" {...Flex156Props} {...Flex156Cb} {...Flex156IoProps}>
<Image className="p-Home Image29 bpt" {...Image29Props} {...Image29Cb} {...Image29IoProps}/>
</Flex>
<Flex className="p-Home Flex157 bpt" {...Flex157Props} {...Flex157Cb} {...Flex157IoProps}>
<TextBox className="p-Home TextBox87 bpt" {...TextBox87Props} {...TextBox87Cb} {...TextBox87IoProps}/>
</Flex>
<Flex className="p-Home Flex158 bpt" {...Flex158Props} {...Flex158Cb} {...Flex158IoProps}>
<TextBox className="p-Home TextBox90 bpt" {...TextBox90Props} {...TextBox90Cb} {...TextBox90IoProps}/>
<TextBox className="p-Home TextBox89 bpt" {...TextBox89Props} {...TextBox89Cb} {...TextBox89IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home FAQ bpt" {...FAQProps} {...FAQCb} {...FAQIoProps}>
<Flex className="p-Home Flex160 bpt" {...Flex160Props} {...Flex160Cb} {...Flex160IoProps}>
<TextBox className="p-Home TextBox91 bpt" {...TextBox91Props} {...TextBox91Cb} {...TextBox91IoProps}/>
<TextBox className="p-Home TextBox92 bpt" {...TextBox92Props} {...TextBox92Cb} {...TextBox92IoProps}/>
</Flex>
<Flex className="p-Home Flex161 bpt" {...Flex161Props} {...Flex161Cb} {...Flex161IoProps}>
<Flex className="p-Home Flex164 bpt" {...Flex164Props} {...Flex164Cb} {...Flex164IoProps}>
<Flex className="p-Home Flex206 bpt" {...Flex206Props} {...Flex206Cb} {...Flex206IoProps}>
<Flex className="p-Home Flex203 bpt" {...Flex203Props} {...Flex203Cb} {...Flex203IoProps}>
<Accordion className="p-Home Accordion19 bpt" {...Accordion19Props} {...Accordion19Cb} {...Accordion19IoProps}/>
</Flex>
<Flex className="p-Home Flex168 bpt" {...Flex168Props} {...Flex168Cb} {...Flex168IoProps}>
<Accordion className="p-Home Accordion5 bpt" {...Accordion5Props} {...Accordion5Cb} {...Accordion5IoProps}/>
</Flex>
<Flex className="p-Home Flex172 bpt" {...Flex172Props} {...Flex172Cb} {...Flex172IoProps}>
<Accordion className="p-Home Accordion8 bpt" {...Accordion8Props} {...Accordion8Cb} {...Accordion8IoProps}/>
</Flex>
<Flex className="p-Home Flex174 bpt" {...Flex174Props} {...Flex174Cb} {...Flex174IoProps}>
<Accordion className="p-Home Accordion9 bpt" {...Accordion9Props} {...Accordion9Cb} {...Accordion9IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex207 bpt" {...Flex207Props} {...Flex207Cb} {...Flex207IoProps}>
<Flex className="p-Home Flex204 bpt" {...Flex204Props} {...Flex204Cb} {...Flex204IoProps}>
<Accordion className="p-Home Accordion20 bpt" {...Accordion20Props} {...Accordion20Cb} {...Accordion20IoProps}/>
</Flex>
<Flex className="p-Home Flex169 bpt" {...Flex169Props} {...Flex169Cb} {...Flex169IoProps}>
<Accordion className="p-Home Accordion6 bpt" {...Accordion6Props} {...Accordion6Cb} {...Accordion6IoProps}/>
</Flex>
<Flex className="p-Home Flex171 bpt" {...Flex171Props} {...Flex171Cb} {...Flex171IoProps}>
<Accordion className="p-Home Accordion7 bpt" {...Accordion7Props} {...Accordion7Cb} {...Accordion7IoProps}/>
</Flex>
<Flex className="p-Home Flex175 bpt" {...Flex175Props} {...Flex175Cb} {...Flex175IoProps}>
<Accordion className="p-Home Accordion10 bpt" {...Accordion10Props} {...Accordion10Cb} {...Accordion10IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex189 bpt" {...Flex189Props} {...Flex189Cb} {...Flex189IoProps}>
<Flex className="p-Home Flex191 bpt" {...Flex191Props} {...Flex191Cb} {...Flex191IoProps}>
<TextBox className="p-Home TextBox96 bpt" {...TextBox96Props} {...TextBox96Cb} {...TextBox96IoProps}/>
<TextBox className="p-Home TextBox95 bpt" {...TextBox95Props} {...TextBox95Cb} {...TextBox95IoProps}/>
</Flex>
<Flex className="p-Home Flex190 bpt" {...Flex190Props} {...Flex190Cb} {...Flex190IoProps}>
<Flex className="p-Home Flex192 bpt" {...Flex192Props} {...Flex192Cb} {...Flex192IoProps}>
<Image className="p-Home Image30 bpt" {...Image30Props} {...Image30Cb} {...Image30IoProps}/>
<TextBox className="p-Home TextBox115 bpt" {...TextBox115Props} {...TextBox115Cb} {...TextBox115IoProps}/>
<Flex className="p-Home Flex201 bpt" {...Flex201Props} {...Flex201Cb} {...Flex201IoProps}>
<Image className="p-Home Image31 bpt" {...Image31Props} {...Image31Cb} {...Image31IoProps}/>
<TextBox className="p-Home TextBox112 bpt" {...TextBox112Props} {...TextBox112Cb} {...TextBox112IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex193 bpt" {...Flex193Props} {...Flex193Cb} {...Flex193IoProps}>
<Flex className="p-Home Flex194 bpt" {...Flex194Props} {...Flex194Cb} {...Flex194IoProps}>
<TextBox className="p-Home TextBox97 bpt" {...TextBox97Props} {...TextBox97Cb} {...TextBox97IoProps}/>
<TextBox className="p-Home TextBox99 bpt" {...TextBox99Props} {...TextBox99Cb} {...TextBox99IoProps}/>
<TextBox className="p-Home TextBox98 bpt" {...TextBox98Props} {...TextBox98Cb} {...TextBox98IoProps}/>
</Flex>
<Flex className="p-Home Flex199 bpt" {...Flex199Props} {...Flex199Cb} {...Flex199IoProps}>
<TextBox className="p-Home TextBox108 bpt" {...TextBox108Props} {...TextBox108Cb} {...TextBox108IoProps}/>
<TextBox className="p-Home TextBox106 bpt" {...TextBox106Props} {...TextBox106Cb} {...TextBox106IoProps}/>
<TextBox className="p-Home TextBox107 bpt" {...TextBox107Props} {...TextBox107Cb} {...TextBox107IoProps}/>
</Flex>
<Flex className="p-Home Flex200 bpt" {...Flex200Props} {...Flex200Cb} {...Flex200IoProps}>
<TextBox className="p-Home TextBox109 bpt" {...TextBox109Props} {...TextBox109Cb} {...TextBox109IoProps}/>
<TextBox className="p-Home TextBox111 bpt" {...TextBox111Props} {...TextBox111Cb} {...TextBox111IoProps}/>
<TextBox className="p-Home TextBox110 bpt" {...TextBox110Props} {...TextBox110Cb} {...TextBox110IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex202 bpt" {...Flex202Props} {...Flex202Cb} {...Flex202IoProps}>
<TextBox className="p-Home TextBox116 bpt" {...TextBox116Props} {...TextBox116Cb} {...TextBox116IoProps}/>
</Flex>
</Flex>
  </>);
}
