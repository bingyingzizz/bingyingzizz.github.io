# 正合函子　`def.exact-functor`
左正合 / 右正合 / 正合函子（Exact Functor）
layer 13 · 定义 · 函子与自然变换 · 范畴论

函子 $F$ 叫**左正合的**（left exact），如果它保所有**有限极限**；叫**右正合的**（right exact），如果它保所有**有限余极限**；两者都对时叫**正合的**（exact）。

## 为什么成立（入边，证明在 proofs/）
- `def.preserves-limit` 保极限的函子：用到了定义 保极限的函子　proofs/def-dep.exact-preslim.md

## 它能推出什么 / 谁在用它
- 被 `prop.preserves-products-kernels` 保积与核 ⟹ 保所有有限极限 用

> 说明见 `notes/def.exact-functor.md`
