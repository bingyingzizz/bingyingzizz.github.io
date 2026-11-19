# 偏序集里的极限是交　`prop.poset-limit-join`
偏序集里：极限 = 下确界，余极限 = 上确界
layer 14 · 命题 · 图与极限 · 范畴论+序理论
[在星图里打开](../#n=prop.poset-limit-join)　·　[节点索引](../index.md)

把偏序集 $(P, \preceq)$ 看作范畴（对象是元素，$x \to y \iff x \preceq y$）。则对任何图 $D : I \to P$：

$$\lim D = \inf D, \qquad \varinjlim D = \sup D,$$
即极限是**下确界**、余极限是**上确界**。

只要它们存在。

## 为什么成立（入边，证明在 proofs/）
- [`def.limit`](../nodes/def.limit.md) 极限 + [`def.poset`](../nodes/def.poset.md) 偏序集：imp.poset-limit-join　[proofs/imp.poset-limit-join.md](../proofs/imp.poset-limit-join.md)

- …另有入边，续页见 [nodes/prop.poset-limit-join.2.md](./prop.poset-limit-join.2.md)

refs: Le Stum, Exercise 1.30

> 说明见 `notes/prop.poset-limit-join.md`

引用：`prop.poset-limit-join`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
