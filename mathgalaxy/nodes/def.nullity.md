# 零化度　`def.nullity`
零化度 $\operatorname{null} T$
layer 11 · 定义 · 线性映射与秩 · 抽象代数
[在星图里打开](../#n=def.nullity)　·　[节点索引](../index.md)

设 $T : V \to W$ 线性。$T$ 的**零化度**定义为核的维数：

$$\operatorname{null} T := \dim \ker T$$

（也叫**亏格**；英文 nullity 或 defect。）

## 为什么成立（入边，证明在 proofs/）
- [`def.kernel-image-vs`](../nodes/def.kernel-image-vs.md) 核与像：用到了定义 核与像　[proofs/dep.kernelimage-nullity.md](../proofs/dep.kernelimage-nullity.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.nullity.2.md](./def.nullity.2.md)

refs: Hoffman–Kunze, Linear Algebra, Ch. 3

## 说明
⭐ 零化度是「$T$ 丢掉了多少维信息」的度量。与秩正好配对：秩-零化度定理说两者之和等于出发空间的维数。

⚠ $\operatorname{null} T = 0 \iff \ker T = \{0\} \iff T$ 单射 —— 零化度是最便宜的「单射判据」。

引用：`def.nullity`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
