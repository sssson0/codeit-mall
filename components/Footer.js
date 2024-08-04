import Container from './Container'
import styles from './Footer.module.css'
import Link from 'next/link'


export default function Footer(){

    return(
        <>
        <div className={styles.footer}>
        <Container className={styles.container}>
            <Link className={styles.AA} href="https://www.codeit.kr/dashboard">
            codeit
            </Link>
            <div className={styles.BB}>@sssson</div>
        </Container>
        </div>
        </>
    )
}