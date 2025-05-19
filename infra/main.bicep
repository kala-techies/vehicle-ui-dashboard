@description('The name of the app service.')
param appName string = 'vehicle-dashboard'

@description('The location for all resources.')
param location string = resourceGroup().location

@description('The environment (dev, test, prod).')
@allowed([
  'dev'
  'test'
  'prod'
])
param environment string = 'dev'

var appServicePlanName = '${appName}-plan-${environment}'
var webAppName = '${appName}-${environment}'
var storageAccountName = replace('${appName}${environment}', '-', '')

resource appServicePlan 'Microsoft.Web/serverfarms@2022-03-01' = {
  name: appServicePlanName
  location: location
  sku: {
    name: environment == 'prod' ? 'P1v2' : 'B1'
    tier: environment == 'prod' ? 'PremiumV2' : 'Basic'
  }
  properties: {
    reserved: true
  }
}

resource webApp 'Microsoft.Web/sites@2022-03-01' = {
  name: webAppName
  location: location
  properties: {
    serverFarmId: appServicePlan.id
    httpsOnly: true
    siteConfig: {
      appSettings: [
        {
          name: 'WEBSITE_NODE_DEFAULT_VERSION'
          value: '~18'
        }
      ]
      linuxFxVersion: 'NODE|18-lts'
      minTlsVersion: '1.2'
      ftpsState: 'Disabled'
    }
  }
}

resource storageAccount 'Microsoft.Storage/storageAccounts@2022-05-01' = {
  name: storageAccountName
  location: location
  sku: {
    name: 'Standard_LRS'
  }
  kind: 'StorageV2'
  properties: {
    supportsHttpsTrafficOnly: true
    accessTier: 'Hot'
    minimumTlsVersion: 'TLS1_2'
  }
}

resource blobService 'Microsoft.Storage/storageAccounts/blobServices@2022-05-01' = {
  parent: storageAccount
  name: 'default'
}

resource storybookContainer 'Microsoft.Storage/storageAccounts/blobServices/containers@2022-05-01' = {
  parent: blobService
  name: 'storybook'
  properties: {
    publicAccess: 'Blob'
  }
}

output webAppUrl string = 'https://${webApp.properties.defaultHostName}'
output storageAccountName string = storageAccount.name