# 最值定理 + 介值定理 + 因式定理 $\implies$ 代数基本定理
`imp.fundamental-algebra` · 推出 · strong 边 · 根 `../`

`thm.evt` 最值定理 + `thm.ivt` 介值定理 + `thm.factor-theorem` 因式定理与根 → `thm.fundamental-algebra` 代数基本定理

$$p(z_0 + w) = p(z_0) + c_k w^{k} + O(w^{k+1}), \qquad c_k \ne 0, \ k \ge 1$$

（$k$ 是第一个非零项的阶。）取 $w = t\,\zeta$，其中 $\zeta^{k} = -p(z_0)/c_k$ 的一个 $k$ 次方根、$t > 0$ 很小。由**复数开 $k$ 次方**，这样的 $\zeta$ 总存在。则

$$|p(z_0 + t\zeta)|^{2} = |p(z_0)|^{2}\Bigl( 1 - \frac{2t^{k}}{|p(z_0)|} + O(t^{k+1}) \Bigr) < |p(z_0)|^{2}$$

> 续见 proofs/imp.fundamental-algebra.4.md
