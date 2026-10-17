# Zassenhaus（蝴蝶）引理 + Schreier 加细 $\implies$ Jordan–Hölder
`imp.jordan-holder` · 推出 · strong 边 · 根 `../`

`def.composition-series` 合成列 → `thm.jordan-holder` Jordan–Hölder 定理

*证明*：考虑映射 $\varphi : A(A^{\ast}\cap B) \to \dfrac{B(A^{\ast}\cap B)}{B(A^{\ast}\cap B^{\ast})}$。由 $A \trianglelefteq A^{\ast}$、$B \trianglelefteq B^{\ast}$ 可逐项验证 $\varphi$ 是同态，其核恰为 $A(A^{\ast}\cap B^{\ast})$、其像恰为整个商（任取 $b \in B$，$b$ 的像由 $A$ 部分承担）。于是由第一同构定理（`thm.first-iso`）得同构。对称地做另一边即得引理。∎

> 续见 proofs/imp.jordan-holder.3.md
