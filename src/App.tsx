import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { Button, Stack, Box, Skeleton, SkeletonText, SkeletonCircle } from '@chakra-ui/react'
import { ConnectButton } from '@rainbow-me/rainbowkit';

function App() {
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()

  console.log(connectors)

  return (
    <>
      <Box padding='6' boxShadow='lg' bg='white'>
        <Skeleton height={"7px"} width={"200px"} />
        <div>
          <h2>Account</h2>

          <SkeletonCircle size='10' />
          <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
<Box>
  <ConnectButton/>
</Box>
          <div>
            status: {account.status}
            <br />
            addresses: {JSON.stringify(account.addresses)}
            <br />
            chainId: {account.chainId}
          </div>

          {account.status === 'connected' && (
            <Button variant="gradient" colorScheme='teal' type="button" onClick={() => disconnect()}>
              Disconnect
            </Button>
          )}
        </div>

        <div>
          <h2>Connect</h2>
          {/* {connectors.map((connector) => (
            <Button
              colorScheme='blue'
              key={connector.uid}
              onClick={() => connect({ connector })}
              type="button"
            >
              {connector.name}
            </Button>
          ))} */}
          <div>{status}</div>
          <div>{error?.message}</div>
          <Stack direction='row' spacing={4}>
            <Button isLoading colorScheme='teal' variant='solid'>
              Email
            </Button>
            <Button
              isLoading
              loadingText='Submitting'
              colorScheme='teal'
              variant='gradient'
            >
              Submit
            </Button>
          </Stack>
        </div>
      </Box>
    </>
  )
}

export default App
