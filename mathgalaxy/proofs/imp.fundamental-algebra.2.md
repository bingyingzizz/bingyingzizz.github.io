# 最值定理 + 复数的 $k$ 次方根 + 因式定理 $\implies$ 代数基本定理
`imp.fundamental-algebra` · 推出 · strong 边 · 根 `../`

`thm.evt` 最值定理 + `thm.factor-theorem` 因式定理与根 → `thm.fundamental-algebra` 代数基本定理

记最小值点为 $z_0$，$m := |p(z_0)|$。
2. **若 $m > 0$ 则矛盾**：记 $w := z - z_0$，把 $p$ 在 $z_0$ 处展开成 $w$ 的多项式：

$$p(z_0 + w) = p(z_0) + c_k w^{k} + O(w^{k+1}), \qquad c_k \ne 0, \ k \ge 1$$

（$k$ 是第一个非零项的阶。）取 $w = t\,\zeta$，其中 $\zeta$ 是 $-p(z_0)/c_k$ 的一个 $k$ 次方根、$t > 0$ 很小。由**复数开 $k$ 次方**，这样的 $\zeta$ 总存在。于是 $c_k w^{k} = c_k t^{k}\zeta^{k} = -t^{k}p(z_0)$，代回展开式得

$$p(z_0 + t\zeta) = p(z_0)(1 - t^{k}) + O(t^{k+1}) .$$

> 续见 proofs/imp.fundamental-algebra.3.md
