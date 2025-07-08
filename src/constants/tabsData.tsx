import {
  HomeRounded,
  PersonRounded,
  DeveloperMode,
  WorkRounded,
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

export const useTabsData = () => {
  const { t } = useTranslationSetup();

  const tabs = [
    {
      label: `${t("navigation.home")}`,
      icon: <HomeRounded sx={{ mb: 1 }} />,
      ...tabProps(0),
    },
    {
      label: `${t("navigation.about")}`,
      icon: <PersonRounded sx={{ mb: 1 }} />,
      ...tabProps(1),
    },
    {
      label: `${t("navigation.skills")}`,
      icon: <DeveloperMode sx={{ mb: 1 }} />,
      ...tabProps(2),
    },
    {
      label: `${t("navigation.experience")}`,
      icon: <WorkRounded sx={{ mb: 1 }} />,
      ...tabProps(3),
    },
    {
      label: `${t("navigation.projects")}`,
      icon: <TerminalRounded sx={{ mb: 1 }} />,
      ...tabProps(4),
    },
    {
      label: `${t("navigation.contact")}`,
      icon: <ConnectWithoutContactRounded sx={{ mb: 1 }} />,
      ...tabProps(5),
    },
  ];

  return tabs;
};
