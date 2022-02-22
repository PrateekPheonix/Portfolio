import Head from 'next/head'
import Video from '../components/Video'
import styles from '../styles/About.module.css'

const about = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Prateek Niket</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Video />
        </div >
    )
}

export default about