# 对偶空间　`def.dual-space`
对偶空间 $V^{\ast}$
layer 10 · 定义 · 线性映射与秩 · 抽象代数
[在星图里打开](../#n=def.dual-space)　·　[节点索引](../index.md)

设 $V$ 是 $K$-向量空间。$V$ 的**对偶空间**定义为从 $V$ 到 $K$ 的线性映射全体：

$$V^{\ast} := \operatorname{Hom}_K(V, K)$$

其中元素叫**线性泛函**。$V^{\ast}$ 按逐点和与逐点数乘成为向量空间。

若 $T : V \to W$ 线性，定义**转置**（或对偶）映射

$$T^{\ast} : W^{\ast} \to V^{\ast}, \qquad \varphi \longmapsto \varphi \circ T$$

它线性，且 $(S \circ T)^{\ast} = T^{\ast} \circ S^{\ast}$（**反变**）。

## 它能推出什么 / 谁在用它
- 被 [`def.dual-basis`](../nodes/def.dual-basis.md) 对偶基 用

- …另有出边，续页见 [nodes/def.dual-space.3.md](./def.dual-space.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.dual-space.2.md](./def.dual-space.2.md)

refs: Lang, Linear Algebra；Hoffman–Kunze, Linear Algebra, Ch. 3

> 说明见 `notes/def.dual-space.md`

引用：`def.dual-space`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
