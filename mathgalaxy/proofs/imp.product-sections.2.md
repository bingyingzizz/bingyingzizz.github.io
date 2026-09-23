# 单调类定理 $\implies$ 乘积测度由截口积分给出
`imp.product-sections` · 推出 · strong 边 · 根 `../`

`thm.monotone-class` 单调类定理 + `prop.section-measurable` 截口可测 → `thm.product-measure-sections` 乘积测度由截口给出

**③ $\mathcal{C}$ 对递增并封闭。** 若 $E_1 \subseteq E_2 \subseteq \cdots$ 都在 $\mathcal{C}$ 中、$E = \bigcup E_n$：则 $\nu((E_n)_x) \nearrow  \nu(E_x)$（测度的下连续性），由 MCT 得 $x \mapsto \nu(E_x)$ 可测且 $\int\nu(E_x)d\mu = \lim \int\nu((E_n)_x)d\mu = \lim \mu\times\nu(E_n) = \mu\times\nu(E)$。

**④ $\mathcal{C}$ 对递减交封闭。** 若 $E_1 \supseteq E_2 \supseteq \cdots$、$E = \bigcap E_n$：因为测度有限，可以用 DCT（控制函数是常数 $\nu(Y) < \infty$）得到同样的等式。

> 续见 proofs/imp.product-sections.3.md
