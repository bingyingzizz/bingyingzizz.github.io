# 等化子 / 余等化子　`def.equalizer`
等化子与余等化子（Equalizer / Coequalizer）
layer 12 · 定义 · 图与极限 · 范畴论
[在星图里打开](../#n=def.equalizer)　·　[节点索引](../index.md)

平行对 $f, g : X \rightrightarrows Y$ 的极限叫**等化子**，记 $\operatorname{eq}(f,g) = \ker(f,g)$；余极限叫**余等化子**，记 $\operatorname{coker}(f,g)$。它们接成

$$\ker(f,g) \longrightarrow X \overset{f}{\underset{g}{\rightrightarrows}} Y \longrightarrow \operatorname{coker}(f,g)$$

且中间的 $\ker(f,g) \to X$ 是单态射、右端的 $Y \to \operatorname{coker}(f,g)$ 是满态射。这一段叫**左正合**。

## 它能推出什么 / 谁在用它
- 被 [`def.kernel-cokernel`](../nodes/def.kernel-cokernel.md) 核与余核 用

- …另有出边，续页见 [nodes/def.equalizer.3.md](./def.equalizer.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.equalizer.2.md](./def.equalizer.2.md)

refs: Le Stum, An introduction to condensed mathematics, §1.3

> 说明见 `notes/def.equalizer.md`

引用：`def.equalizer`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
