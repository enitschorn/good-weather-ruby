import React, { FC } from 'react';

interface FeatureImageUrls {
  url: string,
}

interface PointOfInterestListItemProps {
  id: string,
  name: string,
  address?: string,
  phone?: string,
  website?: string,
  email?: string,
  latitude?: string,
  longitude?: string,
  description?: string,
  featureImageUrls?: FeatureImageUrls[],
}

export const PointOfInterestListItem: FC<PointOfInterestListItemProps> = ({
  id,
  name,
  address,
  phone,
  website,
  email,
  latitude,
  longitude,
  description,
  featureImageUrls,
}) => (
  <div id={id} className="card">
    <h3>{name}</h3>
    <p>{address}</p>
    <p>{phone}</p>
    <p>{website}</p>
    <p>{email}</p>
    <p>{description}</p>
    <p>
      {latitude}
      {' '}
      -
      {' '}
      {longitude}
    </p>
    <p>{featureImageUrls.map((image) => <img alt={image.url} key={image.url} src={image.url} width="250px" />)}</p>
  </div>
);
