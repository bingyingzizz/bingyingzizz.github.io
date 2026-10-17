# 同一套证明换到 Banach 空间（多一步 Neumann 级数）
`imp.inverse-function-banach` · 推出 · strong 边 · 根 `../`

`thm.inverse-function` 逆映射定理 + `def.banach-space` Banach 空间 → `thm.inverse-function-banach` 逆映射定理（Banach 版）

**（ii）第二步之后不需要新东西。** $\Phi := \mathrm{id} - \widetilde f$ 满足 $D\Phi(0) = 0$，由 $x \mapsto D\Phi(x)$ 连续，存在 $r > 0$ 使 $\|x\| \le r$ 时 $\|D\Phi(x)\| \le \frac{1}{2}$；由中值不等式（在 Banach 空间里逐字成立，`thm.mean-value-multi`）得 $\Phi$ 在闭球上系数 $\frac{1}{2}$ 压缩。闭球在 $E$ 中完备（$E$ Banach），于是压缩映射原理给出唯一不动点，与有限维完全一样。

> 续见 proofs/imp.inverse-function-banach.3.md
