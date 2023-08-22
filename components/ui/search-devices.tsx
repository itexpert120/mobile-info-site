import { searchDevices } from "@/actions/get-devices";

interface SearchDevicesProps {
  searchKey: string;
}

export default function SearchDevices({ searchKey }: SearchDevicesProps) {
  const devices = searchDevices(searchKey);
  return <>{devices ? JSON.stringify(devices) : "No Device Found"}</>;
}
