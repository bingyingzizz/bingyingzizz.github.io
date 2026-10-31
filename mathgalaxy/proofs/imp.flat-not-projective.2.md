# PID 上无挠即平坦 $\implies$ $\mathbb{Q}$ 平坦但不投射
`imp.flat-not-projective` · 推出 · strong 边 · 根 `../`

`prop.flat-domain-torsionfree` 平坦模无挠 + `thm.lambek` 只需有限生成理想 → `ex.flat-not-projective` 平坦但不投射

但 $F$ 没有非平凡可除子群：$F$ 的元素只有有限多个非零坐标，$n$ 倍映射逐坐标作用；若 $x$ 能被所有 $n \ge 1$ 整除，则每个坐标都被所有 $n$ 整除，而 $\mathbb{Z}$ 中只有 $0$ 满足这一点，故 $x = 0$。与 $\mathbb{Q} \ne 0$ 矛盾 ✓。

> 续见 proofs/imp.flat-not-projective.3.md
