# 局部常函数在分支上常值 $\implies$ 零次上同调是分支数
`imp.mf-h0` · 推出 · strong 边 · 根 `../`

`def.de-rham-complex` de Rham 上同调 + `def.connected` 连通与连通分量 → `thm.de-rham-h0` 零次上同调

**$Z^{0}$ 就是局部常函数。** $\omega \in \Omega^{0}(M)$ 是光滑函数 $f$，$\mathrm{d}f = \sum_{i}\partial_{i}f\,\mathrm{d}x^{i}$，故 $\mathrm{d}f = 0$ 当且仅当每张卡上所有偏导为零，即 $f$ 在每张连通卡上常值。

**局部常 $\iff$ 分支上常值。** 设 $f$ 局部常。固定连通分支 $C$，取 $p \in C$。集合 $A := \{q \in C : f(q) = f(p)\}$ 与 $B := \{q \in C : f(q) \ne f(p)\}$ 都开（局部常 + 连续性），且 $A \cup B = C$、$A \ne \emptyset$、$A \cap B = \emptyset$。由 $C$ 连通得 $B = \emptyset$，故 $f$ 在 $C$ 上常值。反向显然。

**$B^{0} = 0$。** 没有 $-1$-形式，$\operatorname{im}\bigl(\mathrm{d} : \Omega^{-1} \to \Omega^{0}\bigr) = 0$。于是 $H^{0} = Z^{0}/B^{0} = Z^{0}$。

> 续见 proofs/imp.mf-h0.2.md
