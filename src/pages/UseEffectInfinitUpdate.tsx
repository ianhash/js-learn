import _ from "lodash";
import { useEffect, useState } from "react";
import { Card, Checkbox, Flex, Space, Tag } from "antd";

import { useRequest } from "ahooks";

interface Item {
  name: string;
  tags: string[];
}

function fetchData(): Promise<Item[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: "Apple",
          tags: ["fruit"],
        },
        {
          name: "Pear",
          tags: ["fruit"],
        },
        {
          name: "Broccoli",
          tags: ["vegetable"],
        },
        {
          name: "Chili peppers",
          tags: ["spices"],
        },
        {
          name: "Sichuan peppercorns",
          tags: ["spices"],
        },
      ]);
    }, 200);
  });
}

function UseEffectInfinitUpdate() {
  const { data } = useRequest(fetchData);

  const tags = _.uniq(_.concat(...(data?.map((x) => x.tags) || [])));

  const [filters, setFilters] = useState(tags);

  console.log("render data:", data);

  useEffect(() => {
    setFilters(tags);
  }, [data]);

  //   useEffect(() => {
  //     setFilters(tags);
  //   }, [tags]);

  return (
    <div style={{ width: "100%" }}>
      <Space>
        <span>筛选:</span>
        <Checkbox.Group
          options={[...tags.map((x) => ({ label: x, value: x }))]}
          value={filters}
          onChange={(values) => {
            setFilters(values.map((x) => x.toString()));
          }}
        />
      </Space>
      <Flex gap={6} style={{ marginTop: 24 }}>
        {data
          ?.filter((x) => {
            return !_.isEmpty(_.intersection(x.tags, filters));
          })
          .map((d) => {
            return (
              <Card style={{ width: "15%" }} key={d.name}>
                <Flex gap={6} vertical>
                  {d.name}
                  <div style={{ textAlign: "left" }}>
                    {d.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </Flex>
              </Card>
            );
          })}
      </Flex>
    </div>
  );
}

export default UseEffectInfinitUpdate;
