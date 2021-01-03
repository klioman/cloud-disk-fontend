import { ArgsProps as INotificationArgsProps } from 'antd/lib/notification/index';
import { AtndStatusTypes } from 'definitions/common-types';
import React from 'react';

export type NotifyStatusTypes = AtndStatusTypes | 'dev';

export type TNotifyMessage = string | React.ReactNode;

export interface IDefaults extends Partial<INotificationArgsProps> {}

export interface INotifyParams extends INotificationArgsProps {}
