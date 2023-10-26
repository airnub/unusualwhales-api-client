// Copyright (c) 2023 Airnub Technologies LTD. All rights reserved.
// Licensed under the MIT License. See LICENSE file in the project root for full license information.

export interface ApiClientConfig {
  token: string;
  baseUrl?: string;
  headers?: { [key: string]: string };
}
