# 核与像　`def.kernel-image-vs`
核与像（Kernel and Image）
layer 10 · 定义 · 线性映射与秩 · 抽象代数
[在星图里打开](../#n=def.kernel-image-vs)　·　[节点索引](../index.md)

设 $T : V \to W$ 线性。定义

$$\ker T := \{\, v \in V : T(v) = 0 \,\} \subseteq V, \qquad \operatorname{im} T := \{\, T(v) : v \in V \,\} \subseteq W$$

分别叫 $T$ 的**核**与**像**。两者都是子空间，并且

$T$ **单射**，当且仅当

$$\ker T = \{0\}$$

$T$ **满射**，当且仅当 $\operatorname{im} T = W$。

## 它能推出什么 / 谁在用它
- 被 [`def.rank`](../nodes/def.rank.md) 秩 用
- 被 [`def.nullity`](../nodes/def.nullity.md) 零化度 用

- …另有出边，续页见 [nodes/def.kernel-image-vs.3.md](./def.kernel-image-vs.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.kernel-image-vs.2.md](./def.kernel-image-vs.2.md)

refs: Lang, Linear Algebra；Hoffman–Kunze, Linear Algebra, Ch. 3

> 说明见 `notes/def.kernel-image-vs.md`

引用：`def.kernel-image-vs`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
