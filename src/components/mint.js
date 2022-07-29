import { useState } from "react";
import { NFTStorage, File } from "nft.storage";
import bunzz from "bunzz-sdk";
//import { UInt256, U256 } from 'uint256';


const nftStorage = new NFTStorage({
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDcyOEFDOThmYTNDRTAyYWI2ZTRCMDI3NWRGQTVDQ2QwMUJFYmNDNkUiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1OTAyMjU1NTM5NCwibmFtZSI6Im5mdCJ9.nlbxJ9r7IuuWySvZNABW6EVh4u6EyPwWzndp2QPfZX8",
});

const DAPP_ID = "8f78ee82-6849-40fc-9607-3d2641538b05";
const API_KEY = "1c36d764-547b-462a-b07a-3e12ecbf69c9"

const key = "0x9ceB3442d3b00417A6C822425DcDA621Dd1CE7A6"
const init = async () => {
  const handler = await bunzz.initializeHandler({
    dappId: DAPP_ID,
    apiKey: API_KEY,
  });
  return handler;
};

const store = async (name, description, data, fileName, type) => {
  const metadata = await nftStorage.store({
    name,
    description,
    image: new File([data], fileName, { type }),
  });
  console.log(metadata);
  return metadata;
};

 const Mint =() => {
  const [blob, setBlob] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [base64, setBase64] = useState(null);
  const [onGoing, setOnGoing] = useState(false);
  const [tokenId, setTokenId] = useState(null);
  const [type, setType] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const select = (e) => {
    const file = e.target.files[0];
    console.log(file);

    if (file) {
      readAsBlob(file);
      readAsBase64(file);
      setType(file.type);
      setFileName(file.name);
    }
  };

  const readAsBlob = (file) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      console.log(reader.result);
      setBlob(reader.result);
    };
  };

  const readAsBase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
      setBase64(reader.result);
    };
  };

  const submit = async () => {
    setOnGoing(true);
    try {

        const handler = await init();
        const userAddress = await handler.getSignerAddress();
        const contract = await handler.getContract("NFT (ERC721)");
        const balance = await contract.symbol();
        //console.log(balance)
        //console.log(contract)
        const metadata = await store(name, description, blob, fileName, type);
        const inputUrl = metadata.url.replace(/^ipfs:\/\//, "");
        const to=inputUrl
        //console.log(userAddress)
        console.log(inputUrl)

        const aa ='bafybeihxp2xjk6exvyrwuvepogc2xiqosaxlebaifpjdhdze3h42xpixlq1'

        const txx = await contract.mint(userAddress,to);
        const receiptt = await txx.wait();
        console.log(receiptt);

       
        
        
        
        const tx = await contract.safeMint(userAddress, inputUrl);
        const receipt = await tx.wait();
        console.log(receipt);

        const event = receipt.events[0];
        const _tokenId = event.args[2];
        setTokenId(_tokenId);
        setBase64(null);
        window.alert("Succeeded to mint");
    } catch (err) {
      console.error(err);
    } finally {
      setOnGoing(false);
    }
  };

  return (
    <div className="wrapper">
      <p className="title">
        Step1: Mint your NFT with IPFS
      </p>
      <input
        placeholder="Token Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
      />
      <input type="file" accept="image/*" onChange={select} />
      {base64 ? (
          <img src={base64} alt="hoge" className="image" />
      ) : (
        <></>
      )}
      {onGoing ? (
        <div className="center">
          Loading...
        </div>
      ) : (
        <button onClick={submit}>
          mint
        </button>
      )}
      {tokenId ? <p>token ID: {tokenId}</p> : <></>}
    </div>
  );
};

export default Mint;
