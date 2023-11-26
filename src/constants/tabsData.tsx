import {
    HomeRounded,
DeveloperMode,
    TextSnippetRounded,
    TerminalRounded,
    ConnectWithoutContactRounded,
} from "@mui/icons-material";
import useTranslationSetup from "./../hooks/useTranslationSetup";
const tabProps = (index: number) => {
    return {
        id: `sidebar-tab-${index}`,
        "aria-controls": `tabpanel-${index}`,
    };
};
  

export const tabsData = () => {
    const { t } = useTranslationSetup();
   
        const tabs = [
        { label: `${t("home")}`, icon: <HomeRounded sx={{mb: 1}} />, ...tabProps(0) },
        { label: `${t("about")}`, icon: <TextSnippetRounded sx={{mb: 1}} />, ...tabProps(1) },
        { label: `${t("skills")}`, icon: <DeveloperMode sx={{mb: 1}} />, ...tabProps(2) },
        { label: `${t("examples")}`, icon: <TerminalRounded sx={{mb: 1}} />, ...tabProps(3) },
        {
            label: `${t("contact")}`,
            icon: <ConnectWithoutContactRounded sx={{mb: 1}} />,
            ...tabProps(4),
        },
    ];

    return tabs;
};
