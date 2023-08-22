"use client";

import React, { useState, useEffect } from "react";
import { Input, Spinner, Button } from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";
import { searchDevices } from "@/actions/get-devices";
import Heading from "@/components/heading";
import { DeviceBox } from "@/components/ui/device-box";

function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): T {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  } as T;
}

export default function SearchPage() {
  const [searchKey, setSearchKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<BrandDeviceList[]>([]);
  const [searchCompleted, setSearchCompleted] = useState(false); // Track search completion

  async function fetchData(term: string) {
    if (!term) {
      setData([]);
      setSearchCompleted(false); // Reset search completion when term is empty
      return;
    }

    try {
      setLoading(true);
      const res = await searchDevices(term);
      setData(res);
      setSearchCompleted(true); // Mark search as completed
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const delayedSearch = debounce(fetchData, 800);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    delayedSearch(searchKey);
  };

  return (
    <>
      <Heading title="Search Devices" showBackArrow />
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-x-4">
            <Input
              startContent={<FiSearch />}
              className="max-w-sm"
              placeholder="Device Name..."
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
            />
            <Button color="primary" type="submit">
              Search
            </Button>
          </div>
        </form>
        <div className="flex flex-wrap gap-4 my-4">
          {loading ? (
            <Spinner />
          ) : data.length > 0 ? (
            data.map((item) => <DeviceBox key={item.device_name} item={item} />)
          ) : (
            searchCompleted && <p>Not found</p>
          )}
        </div>
      </div>
    </>
  );
}
