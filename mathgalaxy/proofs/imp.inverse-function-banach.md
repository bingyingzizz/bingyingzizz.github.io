# 同一套证明换到 Banach 空间（多一步 Neumann 级数）
`imp.inverse-function-banach` · 推出 · strong 边 · 根 `../`

`thm.inverse-function` 逆映射定理 + `def.banach-space` Banach 空间 → `thm.inverse-function-banach` 逆映射定理（Banach 版）

证明与有限维版本（`imp.inverse-function`）**逐步对应**，只有两处需要替换：

**（i）化归到 $Df(a) = I$ 时要能取逆。** 有限维里用「矩阵可逆即有逆矩阵」；这里 $Df(a) : E \to F$ 是拓扑线性同构，其逆 $A^{-1} \in \mathcal{L}(F, E)$ 有界，故

$$\widetilde f(x) := A^{-1}\bigl( f(a + x) - f(a) \bigr)$$

仍然合法（$A^{-1}$ 有界 $\implies$ 连续 $\implies$ 保持 $C^{1}$ 性与可微性）。

> 续见 proofs/imp.inverse-function-banach.2.md
