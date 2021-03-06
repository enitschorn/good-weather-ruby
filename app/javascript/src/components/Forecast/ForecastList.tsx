import React, { FC } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

import { ForecastListItem } from './ForecastListItem';

const FORECASTS = gql`
  query Forecasts($dates: [String!]!) {
    forecasts(dates: $dates) {
      location {
        id
        name
      }
      date
      summary
      temperatureLow
      temperatureHigh
      icon
    }
  }
`;

interface Date {
  date: string
}

interface ForecastListProps {
  dates: Date[],
}

export const ForecastList: FC<ForecastListProps> = ({ dates }) => {
  const { loading, error, data } = useQuery(FORECASTS, {
    variables: { dates: dates.map(({ date }) => date) },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{`Error! ${dates} ${error.message}`}</p>;

  if (data.forecasts.length === 0) {
    return (
      <div className="row">
        <div className="col">
          <div>select dates above ...</div>
        </div>
      </div>
    );
  }

  return data.forecasts.map(
    ({
      location: { id, name },
      date,
      summary,
      temperatureLow,
      temperatureHigh,
      icon,
    }) => (
      <ForecastListItem
        key={`${id}-${date}`}
        name={name}
        date={date}
        summary={summary}
        temperatureLow={temperatureLow}
        temperatureHigh={temperatureHigh}
        icon={icon}
      />
    ),
  );
};
