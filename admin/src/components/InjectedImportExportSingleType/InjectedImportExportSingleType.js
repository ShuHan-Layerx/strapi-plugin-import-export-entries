import { Box } from '@strapi/design-system/Box';
import { Divider } from '@strapi/design-system/Divider';
import { Typography } from '@strapi/design-system/Typography';
import React from 'react';
import { useIntl } from 'react-intl';

import getTrad from '../../utils/getTrad';
import { ExportButton } from '../ExportButton';
import { ImportButton } from '../ImportButton';

export const InjectedImportExportSingleType = () => {
  const { formatMessage } = useIntl();

  return (
    <Box background="neutral0" hasRadius shadow="filterShadow" paddingTop={6} paddingBottom={4} paddingLeft={3} paddingRight={3}>
      <Typography variant="sigma" textColor="neutral600">
        {formatMessage({ id: getTrad('plugin.name') })}
      </Typography>
      <Box paddingTop={2} paddingBottom={6}>
        <Divider />
      </Box>

      <Box paddingBottom={1}></Box>
      <ImportButton fullWidth />
      <Box paddingBottom={2}></Box>
      <ExportButton fullWidth unavailableOptions={['exportPluginsContentTypes']} />
    </Box>
  );
};
