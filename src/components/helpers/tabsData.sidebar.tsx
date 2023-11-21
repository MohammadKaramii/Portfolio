import {
    HomeRounded,
    FaceRounded,
    TextSnippetRounded,
    TerminalRounded,
    ConnectWithoutContactRounded,
} from "@mui/icons-material";

const tabProps = (index: number) => {
    return {
        id: `sidebar-tab-${index}`,
        "aria-controls": `tabpanel-${index}`,
    };
};

export const tabsData = () => {
    const tabs = [
        { label: "صفحه اصلی", icon: <HomeRounded />, ...tabProps(0) },
        { label: "درباره من", icon: <FaceRounded />, ...tabProps(1) },
        { label: "رزومه من", icon: <TextSnippetRounded />, ...tabProps(2) },
        { label: "نمونه کارها", icon: <TerminalRounded />, ...tabProps(3) },
        {
            label: "ارتباط با من",
            icon: <ConnectWithoutContactRounded />,
            ...tabProps(4),
        },
    ];

    return tabs;
};
