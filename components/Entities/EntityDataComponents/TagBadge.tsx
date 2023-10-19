'use client';

import { Badge, Tooltip } from '@mantine/core';

export default function TagBadge(props: { tagData: string; tagName: string }) {
  return (
    <Tooltip label={props.tagName}>
      <Badge>{props.tagData}</Badge>
    </Tooltip>
  );
}
