# RN 导数的链式法则　`prop.rn-chain-rule`　·　说明
根 `../`

(a) 就是「换元公式」：把对 $\nu$ 的积分换成对 $\mu$ 的积分，代价是乘上 RN 导数。它对指示函数成立、于是对简单函数成立、再用单调收敛到 $L^{+}$、最后到 $L^{1}(\nu )$。

(b) 的证明用 (a)：对任意可测 $E$，



$$\nu(E) = \int_E \frac{d\nu}{d\mu} d\mu = \int_E \frac{d\nu}{d\mu} \cdot \frac{d\mu}{d\lambda} d\lambda$$



两边对照 $\nu(E) = \int_E \frac{d\nu}{d\lambda} d\lambda$ 即得（「用积分识别函数」那条命题正是用来做这一步的）。
