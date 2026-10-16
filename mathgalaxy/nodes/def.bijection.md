# 单射 / 满射 / 双射　`def.bijection`
单射 / 满射 / 双射（Injective / Surjective / Bijective）
layer 6 · 定义 · 关系与函数 · 集合论
[在星图里打开](../#n=def.bijection)　·　[节点索引](../index.md)

设 $f : A \to B$。

- $f$ **单射**（injective）：$f(a) = f(a') \implies a = a'$，即不同输入给不同输出；
- $f$ **满射**（surjective）：$\forall b \in B, \exists a \in A : f(a) = b$，即 $f(A) = B$；
- $f$ **双射**（bijective）：既单又满。

双射 $f : A \to B$ 的**逆** $f^{-1} : B \to A$ 也是双射（把 $f$ 看作关系时，逆关系就是 $f^{-1}$）。

于是「存在双射 $A \to B$」是集合之间的一种等价关系，用来定义**等势**。

## 它能推出什么 / 谁在用它
- 被 [`def.countable`](../nodes/def.countable.md) 可数与不可数 用

- …另有出边，续页见 [nodes/def.bijection.3.md](./def.bijection.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.bijection.2.md](./def.bijection.2.md)

refs: Kunen, Set Theory, I.5

> 说明见 `notes/def.bijection.md`

引用：`def.bijection`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
