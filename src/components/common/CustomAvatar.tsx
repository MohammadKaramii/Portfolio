import { Avatar } from "@mui/material";

interface AvatarProps {
  avatar: string;
  size: number;
  fallback: string;
}

const CustomAvatar = ({ avatar, size, fallback }: AvatarProps) => {
  return (
    <>
      <Avatar
        src={avatar}
        variant="rounded"
        sx={{
          height: size,
          width: size,
          margin: "0 auto",
          display: {
            xl: "block",
            lg: "block",
            md: "block",
            sm: "none",
            xs: "none",
          },
        }}
      >
        {fallback}
      </Avatar>
    </>
  );
};

export default CustomAvatar;
