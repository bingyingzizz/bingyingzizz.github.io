# 偏序集里的极限是交　`prop.poset-limit-join`
偏序集里：极限 = 下确界，余极限 = 上确界
layer 12 · 命题 · 图与极限 · 范畴论+序理论

把偏序集 $(P, \preceq)$ 看作范畴（对象是元素，$x \to y \iff x \preceq y$）。则对任何图 $D : I \to P$：

$$\lim D = \inf D \;(\text{下确界}), \qquad \varinjlim D = \sup D \;(\text{上确界}),$$

只要它们存在。

## 为什么成立（入边，证明在 proofs/）
- `def.limit` 极限：用到了定义 极限　proofs/def-dep.posetlim-limit.md
- `def.poset` 偏序集：用到了定义 偏序集　proofs/def-dep.posetlim-poset.md

refs: Le Stum, Exercise 1.30

> 说明见 `notes/prop.poset-limit-join.md`
