# 对偶映射　`def.dual-map`
对偶映射 $T^{\ast}$
layer 16 · 定义 · 线性映射与秩 · 抽象代数
[在星图里打开](../#n=def.dual-map)　·　[节点索引](../index.md)

设 $T:V\to W$ 是 $K$-线性映射。它的**对偶映射**（也叫转置映射）$T^{\ast}:W^{\ast}\to V^{\ast}$ 由

$$\langle T^{\ast}\varphi,\,v\rangle=\langle\varphi,\,Tv\rangle,\qquad v\in V,\ \varphi\in W^{\ast}$$

定义；等价地 $T^{\ast}\varphi=\varphi\circ T$。

性质：$T^{\ast}$ 线性；$(S\circ T)^{\ast}=T^{\ast}\circ S^{\ast}$；$(\operatorname{id}_V)^{\ast}=\operatorname{id}_{V^{\ast}}$。因此 $(-)^{\ast}$ 是反变函子（见对偶函子节点）。
> 陈述续见 [nodes/def.dual-map.2.md](./def.dual-map.2.md)


## 它能推出什么 / 谁在用它
- ～弱边 [`def.transpose`](../nodes/def.transpose.md) 转置

- …另有出边，续页见 [nodes/def.dual-map.4.md](./def.dual-map.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.dual-map.3.md](./def.dual-map.3.md)

refs: Lang, Linear Algebra；Hoffman–Kunze, Linear Algebra, Ch. 3

> 说明见 `notes/def.dual-map.md`

引用：`def.dual-map`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
