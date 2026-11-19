# imp.euler-product
`imp.euler-product` · 推出 · strong 边 · 根 `../`

`def.riemann-zeta` 黎曼 ζ 函数 + `def.prime` 素数 + `thm.geometric-series` 几何级数 + `def.absolute-convergence` 绝对收敛 → `thm.euler-product` Euler 乘积

**证明（这是本图少见的完整短证明）**：对单个素数，几何级数在 $|p^{-s}| = p^{-\sigma} < 1$ 时收敛，给出



$$\frac{1}{1 - p^{-s}} = \sum_{k \ge 0} p^{-ks}.$$

把**前 $N$ 个素数**的这些级数相乘（绝对收敛，可以任意重排）得



$$\prod_{p \le N} \frac{1}{1 - p^{-s}} = \sum_{n \in S_{N}} n^{-s},$$

其中 $S_{N}$ 是「素因子全 $\le N$」的正整数全体。令 $N \to \infty$：$\sum_{n \notin S_{N}} |n^{-s}| \le \sum_{n > N} n^{-\sigma} \to 0$，于是左边趋于 $\zeta(s)$。∎
