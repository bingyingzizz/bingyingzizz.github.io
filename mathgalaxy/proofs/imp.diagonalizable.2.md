# 特征子空间 + 极小多项式 $\implies$ 可对角化判据
`imp.diagonalizable` · 推出 · strong 边 · 根 `../`

`def.eigenvalue` 特征值与特征向量 + `def.invariant-subspace` 不变子空间 + `thm.minimal-poly-divisor` 极小多项式整除特征多项式 → `thm.diagonalizable` 可对角化判据

**(3) $\implies$ (1)**：在每个 $E_{\lambda_i}$ 里取一组基（共 $\sum_i \dim E_{\lambda_i} = n$ 个向量）。它们线性无关（直和），故是 $V$ 的基；在这组基下 $T$ 是对角阵。

**(4) $\iff$ (3)**：恒有 $\dim E_{\lambda} \le m_\lambda$（代数重数）与 $\sum_\lambda m_\lambda = n$。于是「和 $= n$」等价于「每个都取等号」，即几何重数 $=$ 代数重数。

> 续见 proofs/imp.diagonalizable.3.md
