import {
  AnimatePresence,
  domAnimation, LazyMotion,
  m
} from "framer-motion"
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {

  return (<div className="app-wrap">
    <LazyMotion features={domAnimation}>
      <AnimatePresence initial={false}>
        <m.div
          key={router.route}
          className="page-wrap"
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.7,
          }}
          variants={
            {
              initial: {
                opacity: 0,
                left: "-100%",
                scale: 0.6
              },
              animate: {
                opacity: 1,
                left: 0,
                scale: 1
              },
              exit: {
                opacity: 0,
                left: "100%",
                scale: 0.6
              }
            }
          }
        >
          <Component {...pageProps} />
        </m.div>
      </AnimatePresence>
    </LazyMotion>
  </div >)
}

export default MyApp
