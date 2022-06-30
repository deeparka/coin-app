/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Axios from "axios";

const CoinList = ({ coinData }) => {
    // console.log(coinData);
    return (
        <div>
            {coinData.coins.map((coin) => {
                return (
                    <div>
                        <h1>{coin.name}</h1>
                        <img src={coin.icon} />
                        <p>{coin.price}</p>
                    </div>
                );
            })}
        </div>
    );
};

export const getStaticProps = async () => {
    const dataCoin = await Axios.get(
        `https://api.coinstats.app/public/v1/coins?skip=0`
    );

    return {
        props: {
            coinData: dataCoin.data,
        },
        revalidate: 5,
    };
};

// export const getServerSideProps = async () => {
//     const dataCoin = await Axios.get(
//         `https://api.coinstats.app/public/v1/coins?skip=0`
//     );

//     return {
//         props: {
//             coinData: dataCoin.data,
//         },
//     };
// };

export default CoinList;
