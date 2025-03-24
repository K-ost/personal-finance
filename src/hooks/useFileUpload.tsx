import { useEffect, useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useTranslation } from "react-i18next";

const FILE_SIZE = 100000;

type UseFileUploadReturn = {
  avatar: any;
  avatarError: string;
  isDirtyAva: boolean;
  pickFile: (file: Blob) => void;
  removeFile: () => void;
};

const useFileUpload = (size: number = FILE_SIZE): UseFileUploadReturn => {
  const userAvatar = useAuthStore((state) => state.avatar);
  const [avatar, setAvatar] = useState<any>(userAvatar);
  const [avatarError, setAvatarError] = useState("");
  const [isDirty, setIsDirty] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (!avatar.length) setIsDirty(false);
    if (!!avatar.length) setIsDirty(true);
    if (avatar === userAvatar) setIsDirty(false);
    if (avatar !== userAvatar) setIsDirty(true);
  }, [avatar]);

  const pickFile = (file: Blob) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (data) => {
      if (data.loaded < size) {
        setAvatar(reader.result);
        setAvatarError("");
      } else {
        setAvatarError(t("form.avatar.error", { size: FILE_SIZE / 1000 }));
      }
    };
  };

  const removeFile = () => {
    setAvatar("");
  };

  return {
    avatar,
    avatarError,
    isDirtyAva: isDirty,
    pickFile,
    removeFile,
  };
};

export default useFileUpload;
