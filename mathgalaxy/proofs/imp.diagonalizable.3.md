# 特征子空间 + 极小多项式 $\implies$ 可对角化判据
`imp.diagonalizable` · 推出 · strong 边 · 根 `../`

`def.eigenvalue` 特征值与特征向量 + `def.invariant-subspace` 不变子空间 + `thm.minimal-poly-divisor` 极小多项式整除特征多项式 → `thm.diagonalizable` 可对角化判据

**(5) $\implies$ (4)**：设 $\prod_i (T - \lambda_i I) = 0$ 且 $\lambda_i$ 互异，则 $\mu_T \mid \prod_i (x - \lambda_i)$，故 $\mu_T$ 无重根。“无重根”意味着极小多项式在每个特征值处的重数为 1，结合 $\mu_T$ 与 $\chi_T$ 同根、且代数重数 $\ge$ 几何重数 $\ge 1$，逐块比较即得几何重数 $=$ 代数重数。

**(1) $\implies$ (5)**：可对角化时 $\mu_T = \prod_i (x - \lambda_i)$（互异的一次因子之积），代入 $T$ 得零。∎

> 证明里真正有内容的是 **(4) $\iff$ (3)**（几何重数 vs 代数重数）与最后一对（**(5) 是无重根判据**）。前三条只是把「对角化」翻译成「有 $n$ 个无关特征向量」。
