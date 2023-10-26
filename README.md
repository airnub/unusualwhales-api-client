# UnusualWhales API Client (`unusualwhales-api-client`)

## Description

This project is a client library to interact with the UnusualWhales API, written in TypeScript. It aims to simplify the process of making API calls by providing a set of well-defined methods for accessing various endpoints. This library can be used in both JavaScript and TypeScript projects. Using TypeScript enhances type safety, enabling more robust and error-free API interactions.

## Setup

### Installation

To install the package:

```bash
npm install @airnub/unusualwhales-api-client
```

### Build (Only if you cloned the repository)

To build the TypeScript source code:

```bash
npm run build
```

## Usage

### Initialize the ApiClient Class

```typescript
const api = new ApiClient({
  token: 'your-bearer-token',
});
```

### Fetch Net Premium Ticks for a Stock (Async/Await Example)

```typescript
const response = await api.stock.getNetPremiumTicks('SPY');
```

### Fetch Net Premium Ticks for a Stock (Promise `.then()` Example)

```typescript
api.stock.getNetPremiumTicks('SPY')
  .then((response) => {
    // Your code here
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });
```

## Contribution

Contributions are welcome. Please fork this repository and submit your changes via a pull request.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a new Pull Request

## Submitting Issues

If you encounter any issues or have questions, please use the [GitHub issues](https://github.com/airnub/unusualwhales-api-client/issues) page to report them. This helps us keep track of all the queries and solve them in an organized manner.

## License

This project is licensed under the terms of the [MIT License](LICENSE).
