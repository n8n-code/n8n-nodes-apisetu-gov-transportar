import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovTransportarApi implements ICredentialType {
        name = 'N8nDevApisetuGovTransportarApi';

        displayName = 'Apisetu Gov Transportar API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovTransportar/apisetu-gov-transportar.svg', dark: 'file:../nodes/ApisetuGovTransportar/apisetu-gov-transportar.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/transportar/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/transportar/v3',
                        description: 'The base URL of your Apisetu Gov Transportar API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
