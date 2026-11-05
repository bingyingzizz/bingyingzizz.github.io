# 亚纯函数的定义 $\implies$ Mittag-Leffler 定理（只给证明骨架）
`imp.mittag-leffler` · 推出 · strong 边 · 根 `../`

`def.entire-meromorphic` 整函数与亚纯函数 → `thm.mittag-leffler` Mittag-Leffler 定理

这样的 $T_{k}$ 由 **Runge 逼近定理**给出：$K_{k}$ 紧、$P_{k}(1/(z-a_{k}))$ 在 $K_{k}$ 的某邻域上全纯，Runge 先在 $K_{k}$ 上把它逼近成极点在 $\hat{\mathbb{C}}\setminus K_{k}$ 的有理函数，再把落在 $\Omega$ 内的极点沿道路挪到 $\hat{\mathbb{C}}\setminus\Omega$（挪极点时用同一套 Runge）。⚠️ 两处不能那样写：① 取 $a_{k}$ 处的 **Taylor 多项式**没有意义 —— $a_{k}$ 本来就是极点，$P_{k}$ 在那里并不全纯；② 也**不能**用多项式在围住 $a_{k}$ 的圆周上逼近 $1/(z-a_{k})$ —— 若多项式 $P$ 在 $\lvert z-a_{k}\rvert

> 续见 proofs/imp.mittag-leffler.6.md
