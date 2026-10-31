# 万有元素唯一到唯一同构　`prop.universal-unique-iso`
命题：$(X,s)$ 与 $(X',s')$ 都万有 $\implies$ 唯一的 $f : X \cong X'$ 带 $s$ 到 $s'$
layer 14 · 命题 · 预层与米田 · 范畴论
[在星图里打开](../#n=prop.universal-unique-iso)　·　[节点索引](../index.md)

若 $(X, s)$ 与 $(X', s')$ 都是函子 $F$ 的**万有元素**，则存在**唯一的同构** $f : X \to X'$ 使 $F(f)(s) = s'$。

## 为什么成立（入边，证明在 proofs/）
- [`lem.yoneda`](../nodes/lem.yoneda.md) 米田引理：用到了定义 米田引理　[proofs/def-link.univuniq-yoneda.md](../proofs/def-link.univuniq-yoneda.md)

refs: Le Stum, An introduction to condensed mathematics, Exercise 1.23

> 说明见 `notes/prop.universal-unique-iso.md`

引用：`prop.universal-unique-iso`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
